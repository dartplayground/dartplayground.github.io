#!/bin/sh
# dart_roadmap/ (artifact source, no html/head/body tags) -> docs/ (full page for GitHub Pages)
set -e
rm -rf docs && mkdir docs
cp dart_roadmap/*.js docs/
cp dart_roadmap/manifest.webmanifest dart_roadmap/icon.svg docs/   # অফলাইন (sw.js উপরের *.js এর সাথেই যায়)
# প্রতিটা script এ ?v=<content hash>, যাতে ব্রাউজার পুরানো cache এর ফাইল না মেশায়
ver() { md5sum "dart_roadmap/$1" | cut -c1-8; }
html=$(cat dart_roadmap/index.html)
for f in dart_roadmap/*.js; do
  n=$(basename "$f")
  html=$(printf '%s\n' "$html" | sed "s#<script src=\"$n\"></script>#<script src=\"$n?v=$(ver "$n")\"></script>#")
done
{
  printf '<!doctype html>\n<html lang="bn">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
  printf '<style>body{margin:0}img{max-width:100%%}[hidden]{display:none!important}</style>\n'
  printf '%s\n' "$html" | sed 's#^<header class="bar">#</head>\n<body>\n<header class="bar">#'
  printf '</body>\n</html>\n'
} > docs/index.html
