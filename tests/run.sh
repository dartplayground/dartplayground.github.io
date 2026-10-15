#!/bin/sh
# পুরো সাইট পরীক্ষা: build → docs এর কপিতে smoke.js ঢোকাও → headless Chrome → ফল।
# Dart থাকলে Error অভিধানের মেসেজও আসল Dart দিয়ে মেলায়। চালাও: sh tests/run.sh
set -e
cd "$(dirname "$0")/.."
sh build.sh
tmp=$(mktemp -d)
trap 'kill $srv 2>/dev/null; rm -rf "$tmp"' EXIT
cp -r docs/. "$tmp/"
sed -i 's#</body>#<script src="smoke.js"></script></body>#' "$tmp/index.html"
cp tests/smoke.js "$tmp/"
port=$((8000 + $$ % 1000))
python3 -m http.server "$port" -d "$tmp" >/dev/null 2>&1 & srv=$!
sleep 1
chrome=$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || command -v chromium-browser)
"$chrome" --headless=new --disable-gpu --no-sandbox --virtual-time-budget=15000 --dump-dom "http://localhost:$port/index.html" 2>/dev/null > "$tmp/dom.html"
result=$(python3 -c "
import re,html,sys
s=open('$tmp/dom.html').read()
m=re.search(r'<pre id=\"RESULT\">(.*?)</pre>',s,re.S)
print(html.unescape(m.group(1)) if m else 'FAIL smoke.js চলেনি (RESULT নেই)')")
echo "$result"
status=0
echo "$result" | grep -q '^FAIL' && status=1
echo "$result" | grep -q '^DONE' || status=1
if command -v dart >/dev/null; then node tests/verify_errors.mjs | tail -1 || status=1; else echo "(dart নেই, Error অভিধান যাচাই বাদ)"; fi
exit $status
