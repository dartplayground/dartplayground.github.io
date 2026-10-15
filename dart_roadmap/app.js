// ---------- data: সপ্তাহ ভাগ ----------
const WEEKS = [
  { n: 1, title: 'ভাবতে শেখা, Output, Variable, String', ids: ['think', 'setup', 'variables', 'strings-basic'] },
  { n: 2, title: 'অপারেটর, Input আর Null', ids: ['operators', 'conversion', 'null-safety'] },
  { n: 3, title: 'সিদ্ধান্ত নেওয়া (Condition)', ids: ['if-else', 'switch-ternary'] },
  { n: 4, title: 'Loop আর Bug খোঁজা', ids: ['for-loop', 'while-loop', 'nested-loop', 'debugging'] },
  { n: 5, title: 'Function আর Recursion', ids: ['functions-basic', 'parameters', 'arrow-function', 'recursion'] },
  { n: 6, title: 'List, Set, Map, Math আর Test', ids: ['list', 'set-map', 'math-date', 'testing'] },
  { n: 7, title: 'Anonymous function আর Collection method', ids: ['anonymous', 'higher-order-closure', 'collection-methods'] },
  { n: 8, title: 'String, Algorithm আর Logic Gym', ids: ['string-problems', 'algorithms', 'logic-gym'] },
  { n: 9, title: 'OOP: Class থেকে Extension', ids: ['class-object', 'inheritance', 'oop-advanced'] },
  { n: 10, title: 'Generics, Record আর Error', ids: ['generics', 'records-patterns', 'exceptions'] },
  { n: 11, title: 'JSON, Async, Stream, Isolate', ids: ['json', 'async', 'streams', 'isolates'] },
  { n: 12, title: 'Mini Project', ids: ['projects'] },
  // সপ্তাহের বাইরে: যার যখন দরকার পড়বে। n দিয়ে flashcard এর CARDS.w মেলে
  { n: 'x', label: 'Extra', title: 'Terminal আর Compile: দরকার মতো পড়ো', ids: ['terminal', 'powershell', 'dart-compile'] },
];

// সমস্যার লেখায় এই শব্দগুলো থাকলে "কিভাবে ভাববো?" প্যানেলে সূত্র দেখায়
const CLUES = [
  [/যতক্ষণ|না হওয়া পর্যন্ত|না দেওয়া পর্যন্ত/, '"যতক্ষণ / না হওয়া পর্যন্ত" আছে: **while loop**। কতবার ঘুরবে জানা নেই, শুধু জানা কখন থামবে।'],
  [/প্রতিটা|প্রতিটি|সবগুলো|সবার|থেকে .* পর্যন্ত|সব /, '"প্রতিটা / সব / থেকে...পর্যন্ত" আছে: **loop** লাগবে। একই কাজ বারবার হচ্ছে।'],
  [/যোগফল|মোট|গড়/, '"যোগফল / মোট / গড়" আছে: **জমানোর variable**। loop এর আগে {{sum = 0}}, ভেতরে {{sum += x}}। গড় = মোট ÷ কয়টা।'],
  [/গুণফল|factorial|ঘাত/, '"গুণফল" আছে: গুণ জমাও, কিন্তু শুরুর মান **1**, 0 না।'],
  [/কয়টা|কতবার|গোনো|গুনবে/, '"কয়টা / কতবার" আছে: **গোনার variable**। {{count = 0}}, শর্ত মিললে {{count++}}।'],
  [/সবচেয়ে|সর্বোচ্চ|সর্বনিম্ন/, '"সবচেয়ে বড়/ছোট" আছে: **এখন পর্যন্ত সেরা**। {{best = প্রথমটা}}, তারপর প্রতিটার সাথে তুলনা, ভালো পেলে বদলাও।'],
  [/কিনা|আছে কি/, '"কিনা" আছে: উত্তর হ্যাঁ/না, মানে **bool**। "আছে কিনা" হলে flag: {{found = false}}, পেলে {{true}}।'],
  [/যদি|হলে|না হলে/, '"যদি / হলে" আছে: **if / else** দিয়ে সিদ্ধান্ত।'],
  [/অঙ্ক/, '"অঙ্ক" আছে: {{n % 10}} = শেষ অঙ্ক, {{n ~/ 10}} = শেষ অঙ্ক বাদ। {{while (n > 0)}} এ বারবার।'],
  [/জোড়|বিজোড়|বিভাজ্য|উৎপাদক|ভাগ/, '"জোড় / বিভাজ্য / ভাগ" আছে: ভাগ যায় কিনা = {{n % k == 0}}।'],
  [/মৌলিক|prime/i, '"মৌলিক" আছে: 2 থেকে loop, কেউ ভাগ করতে পারলে মৌলিক না (flag)।'],
  [/উল্টা|উল্টো|reverse/i, '"উল্টাও" আছে: শেষ থেকে শুরুর দিকে loop: {{for (i = length - 1; i >= 0; i--)}}।'],
  [/ত্রিভুজ|পিরামিড|বর্গ প্রিন্ট|প্যাটার্ন|হীরা/, 'pattern: আগে খাতায় টেবিল: **row নম্বর → কয়টা**। বাইরের loop = row, ভেতরের loop = প্রতি row এর জিনিস।'],
  [/অক্ষর|শব্দ|বাক্য/, 'লেখা নিয়ে কাজ: {{s[i]}} দিয়ে একটা একটা অক্ষর, {{split(\' \')}} দিয়ে শব্দ।'],
  [/list|List|তালিকা/, 'List: {{for (var x in list)}} দিয়ে প্রতিটা জিনিস একবার করে দেখো।'],
  [/class/, 'class: আগে খাতায় লেখো এর **কী কী আছে** (field) আর **কী করতে পারে** (method)।'],
  [/function|বানাও যা/, 'function: আগে ঠিক করো **কী নেবে** (parameter) আর **কী ফেরত দেবে** (return type)। তারপর ভেতরটা।'],
];
const clueFor = q => CLUES.filter(([re]) => re.test(q)).slice(0, 4).map(c => c[1]);
// data ফাইল লোড না হলে (যেমন পুরানো cache) সেই টপিক বাদ, পুরো পাতা যেন ভেঙে না যায়
WEEKS.forEach(w => { w.ids = w.ids.filter(id => TOPICS[id]); });
const ORDER = WEEKS.flatMap(w => w.ids);
const LVL = { e: 'সহজ', m: 'মাঝারি', h: 'কঠিন', p: 'প্রজেক্ট' };

// ---------- helpers ----------
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const bn = n => Number(n).toLocaleString('bn-BD');
const fmt = s => esc(s)
  .replace(/\{\{(.+?)\}\}/g, (_, c) => `<code>${c}</code>`)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  .replace(/\[([^\]]+)\]\((#[\w-]+)\)/g, '<a href="$2">$1</a>'); // সাইটের ভেতরের টপিকে লিংক
const hl = (code, lang = 'dart') => window.hljs?.getLanguage(lang) ? hljs.highlight(code, { language: lang, ignoreIllegals: true }).value : esc(code);
const LANG_LABEL = { bash: 'terminal', powershell: 'PowerShell', plaintext: 'text' };
const weekOf = id => WEEKS.find(w => w.ids.includes(id));
const wkName = w => w.label || `সপ্তাহ ${bn(w.n)}`;

// ---------- progress (শুধু এই ব্রাউজারে) ----------
const KEY = 'dart-khata-v1';
let S = { done: {}, known: {} };
try { S = Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

// প্রতিটা সমস্যার স্থায়ী key (লেখা থেকে), যাতে নতুন সমস্যা যোগ বা ক্রম বদলালেও অগ্রগতি ঠিক থাকে
const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0; return h.toString(36); };
const LV = { e: 0, m: 1, h: 2, p: 3 };
for (const [id, t] of Object.entries(TOPICS)) {
  t.probs.forEach((p, i) => {
    p.key = id + '~' + hash(p.q);
    if (S.done[id + '-' + i]) { S.done[p.key] = 1; delete S.done[id + '-' + i]; } // পুরানো (index ভিত্তিক) অগ্রগতি
  });
  t.probs.sort((a, b) => LV[a.l] - LV[b.l]); // সহজ → মাঝারি → কঠিন, একই স্তরে লেখার ক্রম ঠিক থাকে
}
save();
const topicDone = id => (TOPICS[id]?.probs || []).filter(p => S.done[p.key]).length;
const total = () => ORDER.reduce((a, id) => a + (TOPICS[id]?.probs.length || 0), 0);
const totalDone = () => ORDER.reduce((a, id) => a + topicDone(id), 0);

// ---------- blocks ----------
function codeBlock(code, out, lang = 'dart') {
  return `<div class="code"><div class="code-bar"><span>${LANG_LABEL[lang] || lang}</span><button data-act="copy">কপি</button></div>
    <pre><code>${hl(code, lang)}</code></pre>${out ? `<div class="out">${esc(out)}</div>` : ''}<textarea hidden>${esc(code)}</textarea></div>`;
}
function block(b, lang) {
  if (typeof b === 'string') return `<p>${fmt(b)}</p>`;
  if (b.h) return `<h3>${fmt(b.h)}</h3>`;
  if (b.code) return codeBlock(b.code, b.out, b.lang || lang);
  if (b.list) return `<ul class="list">${b.list.map(x => `<li>${fmt(x)}</li>`).join('')}</ul>`;
  if (b.tip) return `<div class="note tip"><b>টিপস</b>${fmt(b.tip)}</div>`;
  if (b.warn) return `<div class="note warn"><b>সাবধান</b>${fmt(b.warn)}</div>`;
  if (b.table) return `<div class="tablewrap"><table class="t"><thead><tr>${b.table[0].map(h => `<th>${fmt(h)}</th>`).join('')}</tr></thead><tbody>${b.table.slice(1).map(r => `<tr>${r.map(c => `<td>${fmt(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if (b.boxes) return `<div class="vis"><div class="cap">${fmt(b.cap || 'প্রতিটা variable একটা নাম লেখা বাক্স')}</div><div class="boxes">${b.boxes.map(x => `<div class="vbox"><span class="lid">${esc(x[1])}</span><div class="body">${esc(x[2])}</div><span class="nm mono">${esc(x[0])}</span></div>`).join('')}</div></div>`;
  if (b.array) return `<div class="vis"><div class="cap">${fmt(b.cap || '')}</div><div class="arr">${b.array.map((v, i) => `<div class="cell"><div class="v">${esc(v)}</div><div class="i">[${i}]</div></div>`).join('')}</div></div>`;
  if (b.chain) return `<div class="vis"><div class="cap">${fmt(b.cap || 'উপর থেকে একটা একটা শর্ত চেক হয়, প্রথম যেটা true সেটাতেই থামে')}</div><div class="chain">${b.chain.map(([c, r], i) => c
    ? `<div class="row"><span class="cond">${esc(c)} ?</span><span class="yes">হ্যাঁ →</span><span class="res">${esc(r)}</span></div><div class="no">↓ না হলে</div>`
    : `<div class="row"><span class="cond">else (বাকি সব)</span><span class="yes">→</span><span class="res">${esc(r)}</span></div>`).join('')}</div></div>`;
  if (b.map) return `<div class="vis"><div class="cap">${fmt(b.cap || '')}</div><div class="mapv">${b.map.map(([k, v]) => `<div class="pair"><span class="k">${esc(k)}</span>→<span class="vv">${esc(v)}</span></div>`).join('')}</div></div>`;
  if (b.anat) return `<div class="vis"><div class="cap">${fmt(b.cap || '')}</div><div class="anat">${b.anat.map(([t, d], i) => `<span class="a${(i % 4) + 1}"><i>${esc(t)}</i><small>${esc(d)}</small></span>`).join('')}</div></div>`;
  if (b.objs) return `<div class="vis"><div class="cap">${fmt(b.cap || '')}</div><div class="objs"><div class="blue"><b>class ${esc(b.objs.cls)}</b>${b.objs.fields.map(esc).join('<br>')}</div><span class="arrow">→</span>${b.objs.items.map((o, k) => `<div class="obj"><b>${esc(o[0])}</b>${b.objs.fields.map((f, j) => `${esc(f.split(' ').pop())}: ${esc(o[j + 1])}`).join('<br>')}</div>`).join('')}</div></div>`;
  if (b.tree) return `<div class="vis"><div class="cap">${fmt(b.cap || '')}</div><div class="tree"><span class="nd">${esc(b.tree[0])}</span><span class="arrow">↓ extends</span><div class="kids">${b.tree[1].map(k => `<span class="nd">${esc(k)}</span>`).join('')}</div></div></div>`;
  if (b.widget) return `<div data-widget="${b.widget}"></div>`;
  if (b.trace) return `<div data-trace="${b.trace}"></div>`;
  return '';
}

// ---------- sidebar & meter ----------
function renderSide(cur) {
  $('#side').innerHTML = `<a href="#home" class="${cur === 'home' ? 'on' : ''}">শুরু করার আগে</a><a href="#cards" class="${cur === 'cards' ? 'on' : ''}">Syntax ফ্ল্যাশকার্ড</a>` +
    WEEKS.map(w => `<div class="wk">${esc(wkName(w))}</div>` + w.ids.map(id => {
      const t = TOPICS[id]; if (!t) return '';
      const d = topicDone(id), n = t.probs.length;
      return `<a href="#${id}" class="${cur === id ? 'on' : ''}"><span>${esc(t.short || t.title)}</span><span class="cnt ${d === n ? 'full' : ''}">${bn(d)}/${bn(n)}</span></a>`;
    }).join('')).join('');
  const d = totalDone(), n = total();
  $('#meter-fill').style.width = (n ? d / n * 100 : 0) + '%';
  $('#meter-txt').textContent = `${bn(d)} / ${bn(n)} সমস্যা শেষ`;
}

// ---------- pages ----------
function renderHome() {
  const next = ORDER.find(id => topicDone(id) < TOPICS[id].probs.length) || ORDER[0];
  return `<div class="page">
  <section class="hero">
    <p class="eyebrow">১৩ সপ্তাহের (প্রায় ৩ মাস) রোডম্যাপ · Dart</p>
    <h1>প্রোগ্রামিং শিখবো, <em>মুখস্থ না করে বুঝে</em></h1>
    <p class="lead">প্রতিটা টপিকে আছে সহজ ভাষায় ব্যাখ্যা, ধাপে ধাপে কোড চলতে দেখার যন্ত্র, ছোট কুইজ আর অনেকগুলো সমস্যা। সহজ থেকে শুরু, আস্তে আস্তে কঠিন। প্রতিটা সমস্যার হিন্ট আর সমাধান আছে, কিন্তু আগে নিজে চেষ্টা।</p>
    <div class="stats"><div>${bn(ORDER.length)}<small>টপিক</small></div><div>${bn(total())}<small>প্র্যাকটিস সমস্যা</small></div><div>${bn(totalDone())}<small>তুমি শেষ করেছ</small></div></div>
    <a class="cta" href="#${next}">${totalDone() ? 'যেখানে থেমেছিলে সেখান থেকে' : 'প্রথম দিন শুরু করো'} → ${esc(TOPICS[next].title)}</a>
  </section>

  <section class="callout">
    <h2>সবার আগে: কোড না, ভাবনা</h2>
    <p>কোড বুঝতে না পারার আসল কারণ প্রায় কখনো syntax না। কারণ হলো সমস্যাটা মাথায় ধাপে ধাপে ভাঙতে না পারা। তাই প্রথম পাতা <a href="#think">প্রোগ্রামারের মতো ভাবা</a>। কম্পিউটার ছাড়া, খাতায়। প্রতিটা সমস্যায় একটা <b>"কিভাবে ভাববো?"</b> বোতাম আছে। হিন্ট বা সমাধানের আগে সবসময় ওটা আগে।</p>
  </section>

  <section>
    <h2>বড় ভাই/বোনের জন্য <span class="step">কিভাবে সাহায্য করবে</span></h2>
    <div class="rules">
      <div><b>উত্তর বলো না, প্রশ্ন করো</b>"তুমি হাতে করলে প্রথমে কী করতে?" "এই লাইনের পরে i এর মান কত?" নিজে উত্তর বের করলে তবেই মাথায় থাকে।</div>
      <div><b>আগে মুখে, তারপর কোড</b>কোড লেখার আগে ও মুখে বলুক কী করবে। মুখে বলতে না পারলে কোডও পারবে না। তখন আগে খাতায় ছোট উদাহরণ।</div>
      <div><b>পড়া আগে, লেখা পরে</b>প্রথম ২–৩ সপ্তাহ বেশি করে কোড পড়ুক: কুইজের "Output কী হবে", Dry Run যন্ত্র, "ধাপ সাজাও" পাজল। নিজে লেখা তারপর।</div>
      <div><b>আরো ছোট করো</b>"বুঝছি না" বললে উদাহরণ ছোট করো। n = 10 না, n = 3। তাতেও না হলে n = 1। ছোট থেকে বড়তে যাও।</div>
      <div><b>পাশে বসো, কিবোর্ড ওর হাতে</b>তুমি শুধু দেখো আর প্রশ্ন করো। কিবোর্ড তুমি নিলে শেখা তোমার হবে, ওর না।</div>
      <div><b>সমাধান দেখলে আবার লিখুক</b>সমাধান দেখে বুঝলো? এবার বন্ধ করে নিজে শুরু থেকে লিখুক। পরের দিন আবার। তৃতীয়বার নিজে পারলে তবে "নিজে পেরেছি"।</div>
    </div>
  </section>

  <section>
    <h2>প্রতিদিনের রুটিন <span class="step">দিনে ২–২.৫ ঘন্টা</span></h2>
    <div class="tablewrap"><table class="t"><thead><tr><th>সময়</th><th>কী করবে</th></tr></thead><tbody>
      <tr><td>১০ মিনিট</td><td><b>লজিক জিম:</b> কম্পিউটার বন্ধ। একটা সমস্যা শুধু খাতায় বাংলা ধাপে সমাধান করো (প্রথম সপ্তাহে "ভাবা" পাতার সমস্যা, পরে যেকোনো টপিকের)।</td></tr>
      <tr><td>১৫ মিনিট</td><td>গতকালের টপিকের কোড না দেখে খাতায় লেখো। ফ্ল্যাশকার্ড ঘোরাও।</td></tr>
      <tr><td>৩০ মিনিট</td><td>আজকের টপিকের "শেখো" অংশ পড়ো। প্রতিটা কোড <b>হাতে টাইপ করে</b> DartPad এ চালাও, কপি-পেস্ট না।</td></tr>
      <tr><td>১৫ মিনিট</td><td>"কিভাবে কাজ করে" অংশের Dry Run যন্ত্রে প্রতিটা ধাপ দেখো, তারপর খাতায় নিজে একই টেবিল বানাও।</td></tr>
      <tr><td>৬০–৯০ মিনিট</td><td>সমস্যা সমাধান। সহজগুলো সব, তারপর যতটা পারো মাঝারি। কঠিনগুলো সপ্তাহের শেষে।</td></tr>
    </tbody></table></div>
    <p>সপ্তাহের <b>৭ম দিন রিভিশন</b>: আগের সপ্তাহের ৫টা সমস্যা আবার শুরু থেকে, সমাধান না দেখে। ১০ সপ্তাহে সব শেষ না হলে সমস্যা নেই, ১২–১৪ সপ্তাহ লাগুক। বুঝে আগানোটাই আসল।</p>
  </section>

  <section>
    <h2>যেকোনো সমস্যা সমাধানের ৫ ধাপ <span class="step">লজিক বানানোর কৌশল</span></h2>
    <p>যাদের লজিক দুর্বল, তারা সাধারণত সমস্যা পড়েই কোড লিখতে বসে যায়। উল্টোটা করো: আগে কম্পিউটার ছাড়া মাথায় আর খাতায় সমাধান করো।</p>
    <div class="steps5">
      <div><p><b>বোঝো।</b> Input কী? Output কী চায়? নিজের ভাষায় এক লাইনে লেখো। যেমন: "একটা সংখ্যা দেবে, বলতে হবে জোড় না বিজোড়।"</p></div>
      <div><p><b>হাতে করো।</b> ২–৩টা উদাহরণ নিজে হাতে সমাধান করো। 7 → বিজোড়, 10 → জোড়। নিজেকে জিজ্ঞেস করো: "আমি মাথায় কী করলাম?" (2 দিয়ে ভাগ করে ভাগশেষ দেখলাম)</p></div>
      <div><p><b>ধাপ লেখো (pseudocode)।</b> বাংলায় লেখো: ১) সংখ্যা নাও ২) 2 দিয়ে ভাগশেষ বের করো ৩) ভাগশেষ 0 হলে "জোড়", না হলে "বিজোড়"।</p></div>
      <div><p><b>কোড লেখো।</b> প্রতিটা বাংলা ধাপকে এক-দুই লাইন কোডে বদলাও। পুরোটা একবারে না, একটা ধাপ লিখে চালাও, তারপর পরেরটা।</p></div>
      <div><p><b>পরীক্ষা করো।</b> ধাপ ২ এর উদাহরণগুলো দিয়ে চালাও। আর কঠিন input দিয়ে: 0, নেগেটিভ সংখ্যা, খুব বড় সংখ্যা। ভুল হলে খাতায় dry run করো।</p></div>
    </div>
  </section>

  <section>
    <h2>দুর্বল লজিকের জন্য নিয়ম</h2>
    <div class="rules">
      <div><b>সমাধান দেখার আগে ১৫ মিনিট</b>আটকে গেলে আগে হিন্ট। তারপরও না পারলে সমাধান দেখো, বোঝো, তারপর বন্ধ করে নিজে আবার লেখো।</div>
      <div><b>Error পড়তে শেখো</b>লাল লেখা ভয়ের কিছু না। লাইন নম্বর দেখো, ইংরেজি মেসেজটা পড়ো। ৮০% ভুল হলো ; বা { } মেলেনি।</div>
      <div><b>খাতায় Dry Run</b>কোড বুঝতে না পারলে খাতায় টেবিল বানাও: প্রতিটা লাইনে কোন variable এর মান কত। এটাই লজিকের ব্যায়াম।</div>
      <div><b>Syntax মুখস্থ না, ব্যবহার</b>একই জিনিস ১০ বার টাইপ করলে আপনা আপনি মনে থাকে। ফ্ল্যাশকার্ড রোজ ৫ মিনিট।</div>
    </div>
  </section>

  <section>
    <h2>রোডম্যাপ</h2>
    <div class="weeks">${WEEKS.filter(w => !w.label).map(wkRow).join('')}
      <div class="wkrow"><h3><span>সপ্তাহ ১৩</span>রিভিশন</h3><p>Logic Gym আর সব কঠিন সমস্যা আবার করো, সমাধান না দেখে। তারপর Flutter শুরু করা যায়।</p></div>
      ${WEEKS.filter(w => w.label).map(wkRow).join('')}
    </div>
  </section>
  <p class="goal">কোড চালাতে: <a href="https://dartpad.dev" target="_blank" rel="noopener">dartpad.dev</a> (ব্রাউজারেই চলে, কিছু install লাগে না)। অগ্রগতি শুধু এই ব্রাউজারে সেভ থাকে।</p>
  </div>`;
}

function wkRow(w) {
  const d = w.ids.reduce((a, id) => a + topicDone(id), 0), n = w.ids.reduce((a, id) => a + TOPICS[id].probs.length, 0);
  return `<div class="wkrow ${d === n ? 'full' : d ? 'started' : ''}"><h3><span>${esc(wkName(w))}</span>${esc(w.title)}</h3>
    <div class="tps">${w.ids.map(id => `<a href="#${id}" class="${topicDone(id) === TOPICS[id].probs.length ? 'full' : ''}">${esc(TOPICS[id].short || TOPICS[id].title)} · ${bn(topicDone(id))}/${bn(TOPICS[id].probs.length)}</a>`).join('')}</div></div>`;
}

function renderTopic(id) {
  const t = TOPICS[id], w = weekOf(id);
  // আগের/পরের টপিক: সপ্তাহের টপিক আর Extra আলাদা, একটা থেকে আরেকটায় লাফ দেয় না
  const group = WEEKS.filter(x => !x.label === !w.label).flatMap(x => x.ids), k = group.indexOf(id);
  const prev = group[k - 1], next = group[k + 1];
  return `<article class="page">
  <header class="t-head">
    <p class="eyebrow">${esc(wkName(w))} · ${esc(t.days)}</p>
    <h1>${esc(t.title)}</h1>
    <p class="goal"><b>আজকের লক্ষ্য:</b> ${fmt(t.goal)}</p>
    <div class="jump"><button data-go="s-learn">শেখো</button><button data-go="s-how">কিভাবে কাজ করে</button>${t.quiz?.length ? '<button data-go="s-quiz">কুইজ</button>' : ''}<button data-go="s-prob">সমস্যা (${bn(t.probs.length)})</button></div>
  </header>
  <section id="s-learn"><h2><span class="step">ধাপ ১</span>শেখো</h2>${t.learn.map(b => block(b, t.lang)).join('')}</section>
  <section id="s-how"><h2><span class="step">ধাপ ২</span>কিভাবে কাজ করে</h2>
    <ol class="how">${t.how.map(x => `<li>${fmt(x)}</li>`).join('')}</ol>
    ${(t.traces || []).map(tr => `<div data-trace="${tr}"></div>`).join('')}
  </section>
  ${t.quiz?.length ? `<section id="s-quiz"><h2><span class="step">ধাপ ৩</span>Output কী হবে?</h2><p>আগে মাথায় বা খাতায় উত্তর বের করো, তারপর ক্লিক করো।</p><div class="quiz">${t.quiz.map((q, i) => `
    <div class="q" data-q="${i}"><p><b>${bn(i + 1)}.</b> ${fmt(q.q)}</p>${q.code ? codeBlock(q.code, '', q.lang || t.lang) : ''}
      <div class="opts">${q.opts.map((o, j) => `<button data-act="ans" data-j="${j}">${esc(o)}</button>`).join('')}</div>
      <div class="why" hidden>${fmt(q.why)}</div></div>`).join('')}</div></section>` : ''}
  <section id="s-prob"><h2><span class="step">ধাপ ৪</span>প্র্যাকটিস</h2>
    <p>উপর থেকে নিচে করো। প্রতিটা সমস্যার আগে ৫ ধাপের কৌশল মনে করো: বোঝো, হাতে করো, ধাপ লেখো, কোড লেখো, পরীক্ষা করো।</p>
    <div class="pfilter"><button class="chip on" data-f="all">সব</button><button class="chip" data-f="e">সহজ</button><button class="chip" data-f="m">মাঝারি</button><button class="chip" data-f="h">কঠিন</button><button class="chip" data-f="left">বাকি আছে</button><span class="sum" id="psum"></span></div>
    <div class="probs">${t.probs.map((p, i) => probCard(id, p, i)).join('')}</div>
  </section>
  <nav class="pager">${prev ? `<a href="#${prev}"><small>← আগের টপিক</small>${esc(TOPICS[prev].title)}</a>` : '<span></span>'}${next ? `<a href="#${next}"><small>পরের টপিক →</small>${esc(TOPICS[next].title)}</a>` : ''}</nav>
  </article>`;
}

function probCard(id, p, i) {
  const k = p.key, done = !!S.done[k], lang = p.lang || TOPICS[id].lang || 'dart';
  const clues = lang === 'dart' ? clueFor(p.q) : []; // শব্দ-সূত্রগুলো Dart কোডের জন্য, terminal command এর জন্য না
  return `<div class="prob ${done ? 'isdone' : ''}" data-l="${p.l}" data-k="${k}">
    <div class="ph"><span class="num">${bn(i + 1)}</span><div class="qt">${fmt(p.q)}</div><span class="lvl ${p.l}">${LVL[p.l]}</span></div>
    ${p.code ? codeBlock(p.code, '', lang) : ''}
    ${p.out ? `<p class="goal">প্রত্যাশিত output: <code>${esc(p.out)}</code></p>` : ''}
    <div class="pact"><button class="btn think" data-act="think">কিভাবে ভাববো?</button>${p.hint ? '<button class="btn" data-act="hint">হিন্ট</button>' : ''}<button class="btn" data-act="sol">সমাধান</button>
      <label><input type="checkbox" id="cb-${k}" data-act="done" ${done ? 'checked' : ''}> নিজে পেরেছি</label></div>
    <div class="ladder" hidden>
      <b>কোড লেখার আগে খাতায় এই সিঁড়ি বেয়ে ওঠো:</b>
      <ol>
        <li>নিজের ভাষায় এক লাইনে লেখো: আমাকে কী দেওয়া হচ্ছে (input), আর কী বের করতে হবে (output)?</li>
        <li>সবচেয়ে ছোট একটা উদাহরণ নাও, কম্পিউটার ছাড়া খাতায় হাতে সমাধান করো। নিজে কী কী করলে, প্রতিটা কাজ আলাদা লাইনে লেখো।</li>
        <li>সেই কাজগুলোকে বাংলায় ধাপ ১, ২, ৩ করে সাজাও, যেন একটা বোকা রোবটও বুঝতে পারে।</li>
        ${clues.length ? `<li>সমস্যার শব্দ থেকে সূত্র:<ul>${clues.map(c => `<li>${fmt(c)}</li>`).join('')}</ul></li>` : ''}
        <li>প্রতিটা বাংলা ধাপের পাশে এক-দুই লাইন কোড লেখো। পুরোটা না পারলে যতটুকু পারো লিখে চালাও, তারপর পরের ধাপ।</li>
        <li>ধাপ ২ এর উদাহরণ দিয়ে চালিয়ে মেলাও। না মিললে খাতায় dry run টেবিল।</li>
      </ol>
      <span class="goal">এরপরও আটকে থাকলে তবেই হিন্ট দেখো।</span>
    </div>
    ${p.hint ? `<div class="hint" hidden>${fmt(p.hint)}</div>` : ''}
    <div class="gate" hidden>নিজে অন্তত ১৫ মিনিট চেষ্টা করেছ? <button class="btn primary" data-act="reveal">হ্যাঁ, সমাধান দেখাও</button><button class="btn" data-act="ungate">আরেকটু চেষ্টা করি</button></div>
    <div class="solbox" hidden>${p.ans ? `<div class="ansbox">${p.ans.split('\n').map(l => `<p>${fmt(l)}</p>`).join('')}</div>` : ''}${p.note ? `<p>${fmt(p.note)}</p>` : ''}${p.sol ? codeBlock(p.sol, '', lang) : ''}</div>
  </div>`;
}

function renderCards() {
  return `<div class="page"><header class="t-head"><p class="eyebrow">প্রতিদিন ৫ মিনিট</p><h1>Syntax ফ্ল্যাশকার্ড</h1>
    <p class="goal">প্রশ্ন দেখে মনে মনে বা খাতায় কোডটা লেখো, তারপর কার্ডে ক্লিক করে মিলিয়ে নাও। মনে থাকলে "মনে আছে" চাপো, সেটা পরে কম আসবে।</p></header>
    <section class="fc-wrap">
      <div class="w-row"><select id="fc-filter" class="btn"><option value="all">সব কার্ড</option><option value="unk">শুধু যেগুলো মনে নেই</option>${WEEKS.map(w => `<option value="${w.n}">${esc(wkName(w))}</option>`).join('')}</select><span class="fc-tag" id="fc-count"></span></div>
      <button class="fc" id="fc"><div class="fc-in"><div class="fc-f" id="fc-f"></div><div class="fc-b" id="fc-b"></div></div></button>
      <div class="w-row"><button class="btn" id="fc-prev">← আগের</button><button class="btn" id="fc-shuf">এলোমেলো</button><button class="btn primary" id="fc-know">মনে আছে ✓</button><button class="btn" id="fc-next">পরের →</button></div>
    </section></div>`;
}
function mountCards() {
  let list = [], i = 0;
  const build = () => {
    const f = $('#fc-filter').value;
    list = CARDS.map((c, k) => ({ ...c, k })).filter(c => f === 'all' ? true : f === 'unk' ? !S.known[c.k] : String(c.w) === f);
    i = 0; show();
  };
  const show = () => {
    $('#fc').classList.remove('flip');
    if (!list.length) { $('#fc-f').textContent = 'এই তালিকায় কোনো কার্ড নেই। দারুণ!'; $('#fc-b').textContent = ''; $('#fc-count').textContent = ''; return; }
    const c = list[i];
    $('#fc-f').textContent = c.f; $('#fc-b').textContent = c.b;
    $('#fc-count').textContent = `${bn(i + 1)} / ${bn(list.length)} · ${esc(wkName(WEEKS.find(w => String(w.n) === String(c.w)) || { n: c.w }))}${S.known[c.k] ? ' · মনে আছে' : ''}`;
    $('#fc-know').textContent = S.known[c.k] ? 'আবার দেখবো' : 'মনে আছে ✓';
  };
  $('#fc').onclick = () => $('#fc').classList.toggle('flip');
  $('#fc-next').onclick = () => { if (list.length) { i = (i + 1) % list.length; show(); } };
  $('#fc-prev').onclick = () => { if (list.length) { i = (i - 1 + list.length) % list.length; show(); } };
  $('#fc-shuf').onclick = () => { list.sort(() => Math.random() - .5); i = 0; show(); };
  $('#fc-know').onclick = () => { if (!list.length) return; const k = list[i].k; S.known[k] ? delete S.known[k] : S.known[k] = 1; save(); show(); };
  $('#fc-filter').onchange = build;
  build();
}

// ---------- tracer ----------
function mountTrace(el, id) {
  const T = TRACES[id]; if (!T) return;
  let i = 0, timer = null;
  el.innerHTML = `<div class="trace"><div class="tr-top"><span class="label">${esc(T.title || 'ধাপে ধাপে দেখো (Dry Run)')}</span><span class="tr-count"></span></div>
    <div class="tr-grid"><pre class="tr-code">${T.code.map((l, k) => `<span class="tr-line" data-k="${k}"><span class="ln">${k + 1}</span>${l ? hl(l, T.lang) : ' '}</span>`).join('')}</pre>
    <div class="tr-side"><div class="tr-box"><div class="label">${esc(T.box || 'VARIABLE এর বাক্স')}</div><div class="tr-vars"></div></div><div class="tr-box"><div class="label">OUTPUT</div><pre class="tr-out"></pre></div></div></div>
    <p class="tr-note"></p>
    <div class="tr-ctrl"><button class="btn" data-a="prev">← আগের ধাপ</button><button class="btn primary" data-a="next">পরের ধাপ →</button><button class="btn" data-a="play">▶ নিজে চলুক</button><button class="btn" data-a="reset">শুরু থেকে</button></div></div>`;
  const draw = () => {
    const vars = {}, out = [];
    T.steps.slice(0, i + 1).forEach(s => { Object.entries(s.v || {}).forEach(([k, v]) => v === null ? delete vars[k] : vars[k] = v); if (s.p !== undefined) out.push(s.p); });
    const s = T.steps[i], ch = Object.keys(s.v || {});
    el.querySelectorAll('.tr-line').forEach(n => n.classList.toggle('cur', +n.dataset.k === s.l));
    el.querySelector('.tr-vars').innerHTML = Object.keys(vars).length ? Object.entries(vars).map(([k, v]) => `<span class="${ch.includes(k) ? 'ch' : ''}">${esc(k)} = ${esc(v)}</span>`).join('') : '<span>এখনো কিছু নেই</span>';
    el.querySelector('.tr-out').textContent = out.join('\n');
    el.querySelector('.tr-note').innerHTML = fmt(s.n);
    el.querySelector('.tr-count').textContent = `ধাপ ${bn(i + 1)} / ${bn(T.steps.length)}`;
  };
  const stop = () => { clearInterval(timer); timer = null; el.querySelector('[data-a=play]').textContent = '▶ নিজে চলুক'; };
  el.querySelector('.tr-ctrl').onclick = e => {
    const a = e.target.dataset.a; if (!a) return;
    if (a === 'next' && i < T.steps.length - 1) i++;
    if (a === 'prev' && i > 0) i--;
    if (a === 'reset') { i = 0; stop(); }
    if (a === 'play') {
      if (timer) stop();
      else { if (i === T.steps.length - 1) i = 0; e.target.textContent = '⏸ থামো'; timer = setInterval(() => { if (i < T.steps.length - 1) { i++; draw(); } else stop(); }, 1400); }
    }
    draw();
  };
  draw();
}

// ---------- widgets ----------
const dbl = x => Number.isInteger(x) ? x + '.0' : String(x);
const W = {
  opLab(el) {
    el.innerHTML = `<div class="widget"><div class="w-title">অপারেটর খেলাঘর</div>
      <p>a আর b এর মান বদলাও, দেখো Dart কী ফল দেয়। b = 0 দিয়েও দেখো!</p>
      <div class="w-row"><label>a = <input id="op-a" type="number" value="17"></label><label>b = <input id="op-b" type="number" value="5"></label></div>
      <div class="tablewrap"><table class="t"><thead><tr><th>কোড</th><th>ফলাফল</th><th>মানে</th></tr></thead><tbody id="op-body"></tbody></table></div></div>`;
    const upd = () => {
      const a = parseInt($('#op-a', el).value) || 0, b = parseInt($('#op-b', el).value) || 0;
      const z = 'Error! শূন্য দিয়ে ভাগ (IntegerDivisionByZeroException)';
      const rows = [
        ['a + b', a + b, 'যোগ'], ['a - b', a - b, 'বিয়োগ'], ['a * b', a * b, 'গুণ'],
        ['a / b', b === 0 ? (a === 0 ? 'NaN' : a > 0 ? 'Infinity' : '-Infinity') : dbl(a / b), 'ভাগ, সবসময় double'],
        ['a ~/ b', b === 0 ? z : Math.trunc(a / b), 'ভাগফল, দশমিক বাদ'],
        ['a % b', b === 0 ? z : ((a % b) + Math.abs(b)) % Math.abs(b), 'ভাগশেষ'],
        ['a > b', a > b, 'বড় কিনা (bool)'], ['a == b', a === b, 'সমান কিনা'],
        ['a % 2 == 0', ((a % 2) + 2) % 2 === 0, 'a জোড় কিনা'],
        ['a > 0 && b > 0', a > 0 && b > 0, 'দুইটাই পজিটিভ?'], ['a > 0 || b > 0', a > 0 || b > 0, 'অন্তত একটা পজিটিভ?'],
      ];
      $('#op-body', el).innerHTML = rows.map(r => `<tr><td class="mono">${r[0]}</td><td class="mono"><b>${esc(r[1])}</b></td><td>${r[2]}</td></tr>`).join('');
    };
    el.oninput = upd; upd();
  },

  patternLab(el) {
    const P = {
      tri: { name: 'ডান ত্রিভুজ', rule: 'row i তে i টা *', inner: 'j <= i', cell: "'* '" },
      sq: { name: 'বর্গ', rule: 'প্রতি row তে n টা *', inner: 'j <= n', cell: "'* '" },
      inv: { name: 'উল্টো ত্রিভুজ', rule: 'row i তে n - i + 1 টা *', inner: 'j <= n - i + 1', cell: "'* '" },
      num: { name: 'সংখ্যার ত্রিভুজ', rule: 'row i তে 1 থেকে i পর্যন্ত সংখ্যা', inner: 'j <= i', cell: "'$j '" },
      pyr: { name: 'পিরামিড', rule: 'row i তে আগে n - i টা স্পেস, তারপর 2*i - 1 টা *', pyr: true },
    };
    el.innerHTML = `<div class="widget"><div class="w-title">প্যাটার্ন ল্যাব</div>
      <div class="w-row"><select id="pt-k">${Object.entries(P).map(([k, p]) => `<option value="${k}">${p.name}</option>`).join('')}</select>
      <label>n = <input id="pt-n" type="range" min="1" max="9" value="4" style="width:9em"><b id="pt-nv">4</b></label></div>
      <div class="tablewrap"><table class="t"><thead><tr><th>row (i)</th><th>কয়টা?</th><th>output</th></tr></thead><tbody id="pt-tab"></tbody></table></div>
      <p id="pt-rule"></p><div id="pt-code"></div></div>`;
    const upd = () => {
      const k = $('#pt-k', el).value, n = +$('#pt-n', el).value, p = P[k];
      $('#pt-nv', el).textContent = n;
      const rows = [];
      for (let i = 1; i <= n; i++) {
        let line = '', c = 0;
        if (k === 'pyr') { line = ' '.repeat(n - i) + '*'.repeat(2 * i - 1); c = `${n - i} স্পেস + ${2 * i - 1} *`; }
        else { const m = k === 'tri' || k === 'num' ? i : k === 'sq' ? n : n - i + 1; for (let j = 1; j <= m; j++) line += k === 'num' ? j + ' ' : '* '; c = m; }
        rows.push(`<tr><td class="mono">${i}</td><td>${c}</td><td><pre class="mono" style="margin:0">${esc(line)}</pre></td></tr>`);
      }
      $('#pt-tab', el).innerHTML = rows.join('');
      $('#pt-rule', el).innerHTML = `<b>নিয়ম:</b> ${p.rule}। বাইরের loop row গোনে, ভেতরের loop প্রতি row এর জিনিস।`;
      const code = p.pyr
        ? `void main() {\n  int n = ${n};\n  for (int i = 1; i <= n; i++) {\n    String line = '';\n    for (int s = 1; s <= n - i; s++) {\n      line += ' ';\n    }\n    for (int j = 1; j <= 2 * i - 1; j++) {\n      line += '*';\n    }\n    print(line);\n  }\n}`
        : `void main() {\n  int n = ${n};\n  for (int i = 1; i <= n; i++) {\n    String line = '';\n    for (int j = 1; ${p.inner}; j++) {\n      line += ${p.cell};\n    }\n    print(line);\n  }\n}`;
      $('#pt-code', el).innerHTML = codeBlock(code);
    };
    el.oninput = upd; upd();
  },

  funcMachine(el) {
    const F = {
      square: { sig: 'int square(int n)', body: 'return n * n;', run: n => n * n },
      isEven: { sig: 'bool isEven(int n)', body: 'return n % 2 == 0;', run: n => ((n % 2) + 2) % 2 === 0 },
      factorial: { sig: 'int factorial(int n)', body: 'int f = 1;\n  for (int i = 2; i <= n; i++) {\n    f *= i;\n  }\n  return f;', run: n => { let f = 1; for (let i = 2; i <= n; i++) f *= i; return f; } },
      sumDigits: { sig: 'int sumDigits(int n)', body: 'int s = 0;\n  while (n > 0) {\n    s += n % 10;\n    n = n ~/ 10;\n  }\n  return s;', run: n => { let s = 0; while (n > 0) { s += n % 10; n = Math.trunc(n / 10); } return s; } },
    };
    el.innerHTML = `<div class="widget"><div class="w-title">Function মেশিন</div>
      <p>মেশিনে একটা সংখ্যা দাও (argument), মেশিন ভেতরে কাজ করে একটা ফল ফেরত দেবে (return)।</p>
      <div class="w-row"><select id="fm-f">${Object.keys(F).map(k => `<option>${k}</option>`).join('')}</select><label>input = <input id="fm-n" type="number" value="5" min="0" max="15"></label><button class="btn primary" id="fm-go">মেশিন চালাও</button></div>
      <div class="machine"><span class="io" id="fm-in">5</span><span class="arrow">→</span><span class="box" id="fm-box"><small>function</small><span id="fm-name">square</span>( )</span><span class="arrow">→</span><span class="io" id="fm-out">?</span></div>
      <pre class="log" id="fm-log"></pre><div id="fm-code"></div></div>`;
    const show = () => {
      const k = $('#fm-f', el).value, f = F[k];
      $('#fm-name', el).textContent = k; $('#fm-in', el).textContent = $('#fm-n', el).value; $('#fm-out', el).textContent = '?';
      $('#fm-code', el).innerHTML = codeBlock(`${f.sig} {\n  ${f.body}\n}\n\nvoid main() {\n  print(${k}(${$('#fm-n', el).value || 0}));\n}`);
    };
    const go = () => {
      const k = $('#fm-f', el).value, n = Math.min(15, Math.max(0, parseInt($('#fm-n', el).value) || 0)), r = F[k].run(n);
      const box = $('#fm-box', el), out = $('#fm-out', el);
      box.classList.remove('pulse'); void box.offsetWidth; box.classList.add('pulse');
      setTimeout(() => { out.textContent = r; out.classList.remove('pulse'); void out.offsetWidth; out.classList.add('pulse'); }, 450);
      $('#fm-log', el).textContent = `১. main থেকে ${k}(${n}) ডাকা হলো\n২. parameter n এর ভেতরে ${n} বসলো\n৩. function এর ভেতরের কোড চললো\n৪. return করলো ${r}, সেটা main এ ফেরত গেল\n৫. print() দেখালো: ${r}`;
    };
    el.oninput = show; $('#fm-go', el).onclick = go; show();
  },

  listLab(el) {
    let L = [10, 20, 30];
    const log = [];
    el.innerHTML = `<div class="widget"><div class="w-title">List ল্যাব</div>
      <div id="ll-arr" class="vis"></div>
      <div class="w-row"><label>মান <input id="ll-v" type="number" value="40"></label><label>index <input id="ll-i" type="number" value="0"></label></div>
      <div class="w-row"><button class="btn" data-o="add">add(মান)</button><button class="btn" data-o="insert">insert(index, মান)</button><button class="btn" data-o="set">list[index] = মান</button><button class="btn" data-o="removeAt">removeAt(index)</button><button class="btn" data-o="remove">remove(মান)</button><button class="btn" data-o="removeLast">removeLast()</button><button class="btn" data-o="clear">clear()</button><button class="btn" data-o="reset">আবার [10, 20, 30]</button></div>
      <pre class="log" id="ll-log"></pre></div>`;
    const draw = () => {
      $('#ll-arr', el).innerHTML = `<div class="cap mono">nums.length = ${L.length}</div>` + (L.length ? `<div class="arr">${L.map((v, i) => `<div class="cell"><div class="v">${v}</div><div class="i">[${i}]</div></div>`).join('')}</div>` : '<p class="mono">[] খালি list</p>');
      $('#ll-log', el).innerHTML = log.slice(-8).join('\n');
    };
    el.onclick = e => {
      const o = e.target.dataset.o; if (!o) return;
      const v = parseInt($('#ll-v', el).value) || 0, i = parseInt($('#ll-i', el).value) || 0;
      const bad = msg => log.push(`<span class="err">${esc(msg)}</span>`);
      const ok = (code) => log.push(`${esc(code)}   // [${L.join(', ')}]`);
      if (o === 'add') { L.push(v); ok(`nums.add(${v});`); }
      if (o === 'insert') { if (i < 0 || i > L.length) bad(`nums.insert(${i}, ${v});  RangeError: index ${i} এ ঢোকানো যায় না (0..${L.length})`); else { L.splice(i, 0, v); ok(`nums.insert(${i}, ${v});`); } }
      if (o === 'set') { if (i < 0 || i >= L.length) bad(`nums[${i}] = ${v};  RangeError: index ${i} নেই`); else { L[i] = v; ok(`nums[${i}] = ${v};`); } }
      if (o === 'removeAt') { if (i < 0 || i >= L.length) bad(`nums.removeAt(${i});  RangeError: index ${i} নেই`); else { L.splice(i, 1); ok(`nums.removeAt(${i});`); } }
      if (o === 'remove') { const k = L.indexOf(v); if (k >= 0) L.splice(k, 1); ok(`nums.remove(${v});  // ${k >= 0 ? 'প্রথম ' + v + ' মুছলো, ফেরত দিল true' : v + ' নেই, false'}`); }
      if (o === 'removeLast') { if (!L.length) bad('nums.removeLast();  StateError: খালি list'); else { L.pop(); ok('nums.removeLast();'); } }
      if (o === 'clear') { L = []; ok('nums.clear();'); }
      if (o === 'reset') { L = [10, 20, 30]; ok('var nums = [10, 20, 30];'); }
      draw();
    };
    log.push('var nums = [10, 20, 30];');
    draw();
  },

  pipeLab(el) {
    const src = [5, 3, 8, 1, 9, 2, 6];
    const FI = { all: ['(সব রাখো)', null, () => true], even: ['জোড়', 'n % 2 == 0', n => n % 2 === 0], odd: ['বিজোড়', 'n % 2 != 0', n => n % 2 !== 0], gt4: ['4 এর বড়', 'n > 4', n => n > 4] };
    const MA = { none: ['(যেমন আছে)', null, n => n], x2: ['দ্বিগুণ', 'n * 2', n => n * 2], sq: ['বর্গ', 'n * n', n => n * n], p1: ['এক যোগ', 'n + 1', n => n + 1] };
    const RE = { list: ['.toList()', null], sum: ['সব যোগ (reduce)', 'reduce((a, b) => a + b)'], max: ['সবচেয়ে বড় (reduce)', 'reduce((a, b) => a > b ? a : b)'], count: ['কয়টা (length)', 'length'] };
    const sel = (id, o) => `<select id="${id}">${Object.entries(o).map(([k, v]) => `<option value="${k}">${v[0]}</option>`).join('')}</select>`;
    el.innerHTML = `<div class="widget"><div class="w-title">where → map → ফলাফল</div>
      <div class="w-row"><label>where: ${sel('pl-f', FI)}</label><label>map: ${sel('pl-m', MA)}</label><label>শেষে: ${sel('pl-r', RE)}</label></div>
      <div id="pl-show" style="display:grid;gap:8px"></div><div id="pl-code"></div></div>`;
    const arr = (a, cap) => `<div class="vis"><div class="cap">${cap}</div>${a.length ? `<div class="arr">${a.map((v, i) => `<div class="cell"><div class="v">${v}</div><div class="i">[${i}]</div></div>`).join('')}</div>` : '<p class="mono">[] কিছু নেই</p>'}</div>`;
    const upd = () => {
      const f = FI[$('#pl-f', el).value], m = MA[$('#pl-m', el).value], rk = $('#pl-r', el).value, r = RE[rk];
      const a1 = src.filter(f[2]), a2 = a1.map(m[2]);
      let res = `[${a2.join(', ')}]`;
      if (rk === 'sum') res = a2.length ? a2.reduce((a, b) => a + b) : 'Error: খালি list এ reduce চলে না';
      if (rk === 'max') res = a2.length ? Math.max(...a2) : 'Error: খালি list এ reduce চলে না';
      if (rk === 'count') res = a2.length;
      $('#pl-show', el).innerHTML = arr(src, 'nums (শুরু)') + arr(a1, `where${f[1] ? ` ((n) => ${esc(f[1])})` : ''} এর পর`) + arr(a2, `map${m[1] ? ` ((n) => ${esc(m[1])})` : ''} এর পর`) + `<p><b>ফলাফল:</b> <code>${esc(res)}</code></p>`;
      let code = 'var nums = [5, 3, 8, 1, 9, 2, 6];\nvar result = nums';
      if (f[1]) code += `\n    .where((n) => ${f[1]})`;
      if (m[1]) code += `\n    .map((n) => ${m[1]})`;
      code += rk === 'list' ? '\n    .toList();' : `\n    .${r[1]};`;
      code += '\nprint(result);';
      $('#pl-code', el).innerHTML = codeBlock(code, String(res));
    };
    el.oninput = upd; upd();
  },

  sortLab(el) {
    let a, i, j, phase, sorted;
    el.innerHTML = `<div class="widget"><div class="w-title">Bubble Sort দেখো</div>
      <p>পাশাপাশি দুইটা তুলনা (হলুদ)। বামেরটা বড় হলে জায়গা বদল (লাল)। প্রতি round এ সবচেয়ে বড়টা শেষে চলে যায় (সবুজ)।</p>
      <div class="bars" id="sl-bars"></div><p id="sl-msg" class="tr-note"></p>
      <div class="w-row"><button class="btn primary" id="sl-step">পরের ধাপ</button><button class="btn" id="sl-auto">▶ নিজে চলুক</button><button class="btn" id="sl-new">নতুন এলোমেলো</button></div></div>`;
    let timer = null;
    const init = () => { a = Array.from({ length: 7 }, () => 1 + Math.floor(Math.random() * 20)); i = 0; j = 0; phase = 'cmp'; sorted = 0; draw('শুরু। ' + `[${a.join(', ')}]`); };
    const draw = (msg, sw) => {
      const mx = Math.max(...a);
      $('#sl-bars', el).innerHTML = a.map((v, k) => `<div style="height:${20 + v / mx * 80}%" class="${k >= a.length - sorted ? 'done' : (k === j || k === j + 1) && phase !== 'end' ? (sw ? 'sw' : 'cmp') : ''}">${v}</div>`).join('');
      $('#sl-msg', el).innerHTML = msg;
    };
    const step = () => {
      if (phase === 'end') return;
      const n = a.length;
      if (j >= n - 1 - i) { i++; sorted = i; j = 0; if (i >= n - 1) { sorted = n; phase = 'end'; draw(`সাজানো শেষ! [${a.join(', ')}]`); return; } draw(`Round ${i} শেষ। সবচেয়ে বড়টা শেষে পৌঁছে গেছে।`); return; }
      if (a[j] > a[j + 1]) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; draw(`a[${j}] > a[${j + 1}] ছিল, তাই জায়গা বদল (swap) → [${a.join(', ')}]`, true); }
      else draw(`a[${j}] = ${a[j]}, a[${j + 1}] = ${a[j + 1]}। বামেরটা বড় না, বদল লাগবে না।`);
      j++;
    };
    const stop = () => { clearInterval(timer); timer = null; $('#sl-auto', el).textContent = '▶ নিজে চলুক'; };
    $('#sl-step', el).onclick = step;
    $('#sl-new', el).onclick = () => { stop(); init(); };
    $('#sl-auto', el).onclick = e => { if (timer) return stop(); e.target.textContent = '⏸ থামো'; timer = setInterval(() => { step(); if (phase === 'end') stop(); }, 900); };
    init();
  },

  stepSort(el) {
    const PZ = [
      { t: 'চা বানাও (রোবটের জন্য)', s: ['কেতলিতে পানি নাও', 'চুলায় বসিয়ে পানি ফোটাও', 'কাপে একটা টি-ব্যাগ রাখো', 'ফুটন্ত পানি কাপে ঢালো', '৩ মিনিট অপেক্ষা করো', 'টি-ব্যাগ তুলে ফেলো', 'চিনি দিয়ে নাড়ো'] },
      { t: 'জোড় না বিজোড় (বাংলা ধাপ)', s: ['সংখ্যা n নাও', 'n কে 2 দিয়ে ভাগ করে ভাগশেষ বের করো', 'ভাগশেষ 0 হলে "জোড়" বলো', 'না হলে "বিজোড়" বলো'] },
      { t: 'তিনটার মধ্যে বড় (বাংলা ধাপ)', s: ['a, b, c তিনটা সংখ্যা নাও', 'বড় = a ধরে নাও', 'b যদি বড় এর চেয়ে বেশি হয়, বড় = b', 'c যদি বড় এর চেয়ে বেশি হয়, বড় = c', 'বড় দেখাও'] },
      { t: 'কোড সাজাও: 1 থেকে 5 এর যোগফল', code: true, s: ['int sum = 0;', 'for (int i = 1; i <= 5; i++) {', '  sum += i;', '}', 'print(sum);'] },
      { t: 'কোড সাজাও: জোড় না বিজোড়', code: true, s: ['int n = 7;', 'if (n % 2 == 0) {', "  print('জোড়');", '} else {', "  print('বিজোড়');", '}'] },
      { t: 'কোড সাজাও: list এর সবচেয়ে বড়', code: true, s: ['var nums = [4, 9, 2];', 'int max = nums[0];', 'for (var x in nums) {', '  if (x > max) max = x;', '}', 'print(max);'] },
      { t: 'কোড সাজাও: অঙ্কের যোগফল', code: true, s: ['int n = 472, sum = 0;', 'while (n > 0) {', '  sum += n % 10;', '  n = n ~/ 10;', '}', 'print(sum);'] },
    ];
    let pz, pool, ans;
    el.innerHTML = `<div class="widget"><div class="w-title">ধাপ সাজাও</div>
      <p>এলোমেলো ধাপগুলোতে ক্লিক করে সঠিক ক্রমে সাজাও। ভুল জায়গায় দিলে উপরের তালিকায় ক্লিক করে ফেরত আনো।</p>
      <div class="w-row"><select id="ss-p">${PZ.map((p, i) => `<option value="${i}">${p.t}</option>`).join('')}</select></div>
      <div class="ss-ans" id="ss-ans"></div><div class="ss-pool" id="ss-pool"></div>
      <div class="w-row"><button class="btn primary" id="ss-check">মিলিয়ে দেখো</button><button class="btn" id="ss-reset">আবার শুরু</button></div>
      <p class="tr-note" id="ss-msg">উপরে তোমার সাজানো ধাপ জমবে।</p></div>`;
    const cls = () => pz.code ? 'mono' : '';
    const draw = (marks) => {
      $('#ss-ans', el).innerHTML = ans.length ? ans.map((s, i) => `<button class="ss-item ${cls()} ${marks ? (marks[i] ? 'ok' : 'bad') : ''}" data-a="${i}"><span>${i + 1}.</span>${esc(s)}</button>`).join('') : '<span class="goal">(খালি)</span>';
      $('#ss-pool', el).innerHTML = pool.map((s, i) => `<button class="ss-item ${cls()}" data-p="${i}">${esc(s)}</button>`).join('');
    };
    const load = () => {
      pz = PZ[+$('#ss-p', el).value]; ans = [];
      do { pool = [...pz.s].sort(() => Math.random() - .5); } while (pool.length > 1 && pool.every((s, i) => s === pz.s[i]));
      $('#ss-msg', el).textContent = 'উপরে তোমার সাজানো ধাপ জমবে।'; draw();
    };
    el.onclick = e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.p !== undefined) { ans.push(pool.splice(+b.dataset.p, 1)[0]); draw(); }
      else if (b.dataset.a !== undefined) { pool.push(ans.splice(+b.dataset.a, 1)[0]); draw(); }
      else if (b.id === 'ss-reset') load();
      else if (b.id === 'ss-check') {
        if (pool.length) { $('#ss-msg', el).textContent = `আগে সবগুলো ধাপ সাজাও, আরো ${bn(pool.length)}টা বাকি।`; return; }
        const marks = ans.map((s, i) => s === pz.s[i]); draw(marks);
        const right = marks.filter(Boolean).length;
        $('#ss-msg', el).innerHTML = right === marks.length ? 'দারুণ! সব ঠিক। এবার বলো তো, প্রতিটা ধাপ কেন ঠিক ওই জায়গায়?' : `${bn(right)}/${bn(marks.length)} ঠিক জায়গায়। লাল ধাপগুলো ভাবো: এটার আগে কী হওয়া দরকার? ক্লিক করে ফেরত এনে আবার সাজাও।`;
      }
    };
    el.onchange = load;
    load();
  },

  isolateDemo(el) {
    const N = 4000000;
    const count = n => { let c = 0; for (let x = 2; x <= n; x++) { let p = true; for (let i = 2; i * i <= x; i++) if (x % i === 0) { p = false; break; } if (p) c++; } return c; };
    el.innerHTML = `<div class="widget"><div class="w-title">Isolate ডেমো: স্ক্রিন জমে যাওয়া</div>
      <div class="iso-ui"><div class="iso-wheel" id="iso-w"></div><div><b class="mono" id="iso-n">0</b><br><span class="goal">এই সংখ্যা আর চাকা হলো "UI"। এরা থামলে মানে অ্যাপ জমে গেছে।</span></div></div>
      <div class="w-row"><button class="btn" id="iso-main">ভারী কাজ main এ দাও</button><button class="btn primary" id="iso-work">ভারী কাজ আলাদা কর্মীকে দাও (isolate)</button></div>
      <pre class="log" id="iso-log">কাজ: ${N.toLocaleString('en')} পর্যন্ত মৌলিক সংখ্যা গোনা। একটা বোতাম চাপো আর চাকার দিকে তাকাও।</pre>
      <p class="goal">ব্রাউজারে isolate এর জায়গায় আছে Web Worker, একই ধারণা: আলাদা কর্মী, আলাদা মেমরি, মেসেজ দিয়ে কথা।</p></div>`;
    let ang = 0, n = 0;
    const w = $('#iso-w', el), num = $('#iso-n', el), log = $('#iso-log', el);
    const tick = () => { if (!el.isConnected) return; ang = (ang + 6) % 360; n++; w.style.transform = `rotate(${ang}deg)`; num.textContent = n; requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
    const say = t => log.textContent += '\n' + t;
    $('#iso-main', el).onclick = () => {
      say('main এ শুরু... (চাকা থেমে যাবে)');
      setTimeout(() => { const t = performance.now(); const r = count(N); say(`main শেষ: ${r}টা, ${Math.round(performance.now() - t)} ms। এতক্ষণ UI জমে ছিল!`); }, 50);
    };
    $('#iso-work', el).onclick = () => {
      try {
        const src = `const count=${count.toString()};onmessage=e=>postMessage(count(e.data));`;
        const wk = new Worker(URL.createObjectURL(new Blob([src], { type: 'text/javascript' })));
        const t = performance.now(); say('আলাদা কর্মীকে পাঠালাম... (চাকা ঘুরতেই থাকবে)');
        wk.onmessage = e => { say(`কর্মী শেষ: ${e.data}টা, ${Math.round(performance.now() - t)} ms। UI একবারও থামেনি।`); wk.terminate(); };
        wk.postMessage(N);
      } catch (err) { say('এই ব্রাউজারে আলাদা কর্মী চালু করা গেল না।'); }
    };
  },

  truth(el) {
    const r = [[true, true], [true, false], [false, true], [false, false]];
    el.innerHTML = `<div class="tablewrap"><table class="t"><thead><tr><th>a</th><th>b</th><th>a && b (দুইটাই?)</th><th>a || b (যেকোনো একটা?)</th><th>!a (উল্টো)</th></tr></thead><tbody>${r.map(([a, b]) => `<tr>${[a, b, a && b, a || b, !a].map(x => `<td class="mono" style="color:var(${x ? '--ok' : '--bad'})">${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  },

  // নকল terminal: ব্রাউজারের ভেতরে ছোট একটা ফাইল-গাছ, আসল কম্পিউটারে কিছু হয় না
  // mode 'bash' = Linux/Mac, 'ps' = Windows PowerShell। ভেতরে path সবসময় / দিয়ে রাখা, দেখানোর সময় বদলায়
  termLab(el, mode = 'bash') {
    const PS = mode === 'ps';
    const HOME = PS ? '/Users/rafi' : '/home/rafi';
    const D = c => ({ d: 1, c }), F = t => ({ t });
    const files = () => ({
      Documents: D({ 'notes.txt': F('বাজারের লিস্ট: ডিম, দুধ, রুটি') }),
      Pictures: D({ 'cat.jpg': F('(এটা ছবি, লেখা না)'), 'school.jpg': F('(এটা ছবি, লেখা না)') }),
      dart_practice: D({ 'hello.dart': F("void main() {\n  print('Hello, Dart!');\n}") }),
    });
    const fresh = () => PS
      ? D({ Users: D({ rafi: D({ Desktop: D({}), ...files() }) }), Windows: D({ System32: D({}) }), 'Program Files': D({}) })
      : D({ home: D({ rafi: D({ ...files(), '.bashrc': F('# shell এর সেটিংস, লুকানো ফাইল') }) }), etc: D({ hostname: F('pc') }), bin: D({}) });
    const lc = s => String(s || '').toLowerCase();
    const isCmd = (c, ...names) => names.includes(PS ? lc(c) : c);
    const MIS = PS ? [
      ['{{Get-Location}} দিয়ে দেখো তুমি কোথায় আছো', c => isCmd(c[0], 'get-location', 'gl', 'pwd')],
      ['{{dart_practice}} ফোল্ডারে ঢোকো', () => cwd === HOME + '/dart_practice'],
      ['ওখানে {{my_app}} নামে ফোল্ডার বানাও', () => get(HOME + '/dart_practice/my_app')?.d],
      ['{{my_app}} এর ভেতরে {{main.dart}} ফাইল বানাও', () => { const f = get(HOME + '/dart_practice/my_app/main.dart'); return f && !f.d; }],
      ['{{hello.dart}} এর ভেতরে কী লেখা আছে দেখো', c => isCmd(c[0], 'get-content', 'gc', 'cat', 'type') && c.some(a => lc(a).endsWith('hello.dart'))],
      ['{{notes.txt}} এর একটা কপি বানাও, নাম {{backup.txt}}', () => find(root, 'backup.txt')],
      ['{{backup.txt}} এর নাম বদলে {{old.txt}} করো', () => find(root, 'old.txt')],
      ['{{Pictures}} ফোল্ডারটা পুরোটা মুছে ফেলো', () => !get(HOME + '/Pictures')],
    ] : [
      ['{{pwd}} লিখে দেখো তুমি কোথায় আছো', c => c[0] === 'pwd'],
      ['{{dart_practice}} ফোল্ডারে ঢোকো', () => cwd === HOME + '/dart_practice'],
      ['ওখানে {{my_app}} নামে ফোল্ডার বানাও', () => get(HOME + '/dart_practice/my_app')?.d],
      ['{{my_app}} এর ভেতরে {{main.dart}} ফাইল বানাও', () => { const f = get(HOME + '/dart_practice/my_app/main.dart'); return f && !f.d; }],
      ['{{hello.dart}} এর ভেতরে কী লেখা আছে দেখো', c => c[0] === 'cat' && c.some(a => a.endsWith('hello.dart'))],
      ['{{notes.txt}} এর একটা কপি বানাও, নাম {{backup.txt}}', () => find(root, 'backup.txt')],
      ['লুকানো ফাইলসহ home এর সব দেখো', c => c[0] === 'ls' && c.some(a => /^-\w*a/.test(a))],
      ['{{Pictures}} ফোল্ডারটা পুরোটা মুছে ফেলো', () => !get(HOME + '/Pictures')],
    ];
    let root, cwd, hist, hi, done;
    const intro = PS
      ? 'এখানে যা খুশি লেখো, কিছু নষ্ট হবে না। {{help}} লিখলে সব command দেখাবে। বড়-ছোট হাতের অক্ষর এখানে কোনো ব্যাপার না। **Tab** চাপলে নাম নিজে পূর্ণ হয়, **↑** চাপলে আগের command ফেরত আসে।'
      : 'এখানে যা খুশি লেখো, কিছু নষ্ট হবে না। {{help}} লিখলে সব command দেখাবে। **Tab** চাপলে নাম নিজে পূর্ণ হয়, **↑** চাপলে আগের command ফেরত আসে।';
    el.innerHTML = `<div class="widget"><div class="w-title">${PS ? 'নকল PowerShell (Windows)' : 'নকল Terminal (Linux)'}</div>
      <p>${fmt(intro)}</p>
      <div class="term"><div class="term-out"></div><label class="term-in"><span class="ps"></span><input spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="command লেখো"></label></div>
      <div class="term-mis"><b>মিশন</b> (উপর থেকে নিচে করো)<ol>${MIS.map(m => `<li>${fmt(m[0])}</li>`).join('')}</ol></div>
      <div class="w-row"><button class="btn" data-t="reset">শুরু থেকে</button></div></div>`;
    const out = $('.term-out', el), inp = $('input', el), ps = $('.term-in .ps', el), lis = el.querySelectorAll('.term-mis li');

    // path: ~ আর relative path কে পূর্ণ path বানাও, . আর .. বুঝে। Windows এ \ আর C: ও চলে
    const abs = p => {
      if (PS) { p = p.replace(/\\/g, '/'); if (/^[a-z]:/i.test(p)) p = '/' + p.slice(2); }
      if (p.startsWith('~')) p = HOME + p.slice(1);
      else if (!p.startsWith('/')) p = cwd + '/' + p;
      const parts = [];
      for (const x of p.split('/')) { if (x === '..') parts.pop(); else if (x && x !== '.') parts.push(x); }
      return '/' + parts.join('/');
    };
    // Windows এ নাম বড়-ছোট হাতের অক্ষর মানে না, তাই আসল key খুঁজে বের করো
    const key = (n, x) => !n?.d ? undefined : PS ? Object.keys(n.c).find(k => lc(k) === lc(x)) : (x in n.c ? x : undefined);
    const get = p => p.split('/').filter(Boolean).reduce((n, x) => { const k = key(n, x); return k === undefined ? undefined : n.c[k]; }, root);
    // [parent ফোল্ডার, নাম (আগে থেকে থাকলে আসল নাম)]
    const split = p => { const i = p.lastIndexOf('/'), par = get(p.slice(0, i) || '/'), nm = p.slice(i + 1); return [par, key(par, nm) ?? nm]; };
    const find = (n, name) => n.d && Object.entries(n.c).some(([k, v]) => (PS ? lc(k) === lc(name) : k === name) || find(v, name));
    const pretty = p => PS ? 'C:' + (p === '/' ? '\\' : p.replace(/\//g, '\\'))
      : p === HOME ? '~' : p.startsWith(HOME + '/') ? '~' + p.slice(HOME.length) : p;
    const clone = n => n.d ? D(Object.fromEntries(Object.entries(n.c).map(([k, v]) => [k, clone(v)]))) : F(n.t);
    const prompt = () => PS ? `PS ${pretty(cwd)}>` : `rafi@pc:${pretty(cwd)}$`;
    const dirSpan = k => `<span class="dir">${esc(k)}</span>`;
    const print = (html, cls = '') => {
      const d = document.createElement('div'); if (cls) d.className = cls; d.innerHTML = html; out.append(d);
      while (out.children.length > 300) out.firstChild.remove();
    };
    const mkdirs = p => p.split('/').filter(Boolean).reduce((n, x) => { if (!n?.d) return n; const k = key(n, x) ?? x; return n.c[k] ||= D({}); }, root);
    const protectedPath = p => HOME.startsWith(p) || (PS && lc(HOME).startsWith(lc(p)));

    const run = line => {
      const toks = (line.match(/"[^"]*"|'[^']*'|\S+/g) || []).map(t => t.replace(/^(["'])(.*)\1$/, '$2'));
      let redir = null;
      const r = toks.findIndex(t => t === '>' || t === '>>');
      if (r > -1) { redir = [toks[r], toks[r + 1]]; toks.splice(r); }
      const [cmd, ...args] = toks;
      const res = [], err = m => res.push([esc(m), 'err']), say = (m, cls = '') => res.push([m, cls]);
      if (!cmd) return;
      (PS ? runPS : runBash)(cmd, args, say, err);

      if (redir) {
        const [op, f] = redir, [par, name] = f ? split(abs(f)) : [];
        const text = res.filter(r => r[1] !== 'err').map(r => r[0].replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&')).join('\n');
        if (!f) err(PS ? 'ParserError: Missing file specification after redirection operator.' : 'bash: syntax error: > এর পরে ফাইলের নাম লাগবে');
        else if (!par?.d) err(PS ? `Out-File: Could not find a part of the path '${pretty(abs(f))}'.` : `bash: ${f}: No such file or directory`);
        else if (par.c[name]?.d) err(PS ? `Out-File: Access to the path '${pretty(abs(f))}' is denied.` : `bash: ${f}: Is a directory`);
        else { const old = op === '>>' && par.c[name]?.t; par.c[name] = F(old ? old + '\n' + text : text); }
        res.splice(0, res.length, ...res.filter(r => r[1] === 'err'));
      }
      res.forEach(([m, cls]) => print(m, cls));
      return toks;
    };

    // ---- Linux (bash) ----
    const runBash = (cmd, args, say, err) => {
      const flags = args.filter(a => /^-\w/.test(a)).join(''), names = args.filter(a => !/^-\w/.test(a));
      const move = copy => {
        const name = copy ? 'cp' : 'mv';
        if (names.length !== 2) return err(`${name}: দুইটা নাম লাগবে, যেমন: ${name} notes.txt backup.txt`);
        const [a, b] = names, pa = abs(a), node = get(pa);
        if (!node) return err(`${name}: cannot stat '${a}': No such file or directory`);
        if (copy && node.d && !flags.includes('r')) return err(`cp: -r not specified; omitting directory '${a}'`);
        let pb = abs(b);
        if (get(pb)?.d) pb += '/' + pa.split('/').pop();
        if (!copy && (pb + '/').startsWith(pa + '/')) return err(`mv: cannot move '${a}' to a subdirectory of itself`);
        const [par, nm] = split(pb);
        if (!par?.d) return err(`${name}: cannot create '${b}': No such file or directory`);
        par.c[nm] = copy ? clone(node) : node;
        if (!copy) { const [op, on] = split(pa); if (op !== par || on !== nm) delete op.c[on]; }
      };
      const C = {
        help: () => say(esc([
          'pwd              এখন কোথায় আছি', 'ls [-a] [-l] [ফোল্ডার]  কী কী আছে', 'cd ফোল্ডার       ঢোকো (cd .. = এক ধাপ উপরে, cd ~ = home)',
          'mkdir [-p] নাম   ফোল্ডার বানাও', 'touch নাম        খালি ফাইল বানাও', 'cat ফাইল         ফাইলের ভেতরের লেখা দেখাও',
          'echo লেখা        লেখা দেখাও (> ফাইল = ফাইলে লেখো, >> ফাইল = শেষে যোগ করো)', 'cp উৎস গন্তব্য    কপি করো (ফোল্ডার হলে -r)',
          'mv উৎস গন্তব্য    সরাও বা নাম বদলাও', 'rm [-r] নাম       মুছে ফেলো', 'rmdir নাম        খালি ফোল্ডার মোছো',
          'whoami, history, clear',
        ].join('\n')), 'dim'),
        pwd: () => say(esc(cwd)),
        whoami: () => say('rafi'),
        history: () => hist.forEach((h, i) => say(esc(`${String(i + 1).padStart(4)}  ${h}`))),
        clear: () => { out.innerHTML = ''; },
        echo: () => say(esc(names.join(' '))),
        ls: () => {
          for (const n of names.length ? names : ['.']) {
            const node = get(abs(n));
            if (!node) { err(`ls: cannot access '${n}': No such file or directory`); continue; }
            if (names.length > 1) say(esc(n + ':'));
            const items = node.d ? Object.keys(node.c).sort().filter(k => flags.includes('a') || !k.startsWith('.')) : [n];
            if (node.d && flags.includes('a')) items.unshift('.', '..');
            const isDir = k => !node.d ? false : k === '.' || k === '..' || node.c[k]?.d;
            if (flags.includes('l')) items.forEach(k => say(`${isDir(k) ? 'drwxr-xr-x' : '-rw-r--r--'}  rafi  ${isDir(k) ? dirSpan(k) : esc(k)}`));
            else if (items.length) say(items.map(k => isDir(k) ? dirSpan(k) : esc(k)).join('  '));
          }
        },
        cd: () => {
          const p = abs(names[0] || '~'), node = get(p);
          if (!node) err(`bash: cd: ${names[0]}: No such file or directory`);
          else if (!node.d) err(`bash: cd: ${names[0]}: Not a directory`);
          else cwd = p;
        },
        mkdir: () => {
          if (!names.length) return err('mkdir: missing operand');
          for (const n of names) {
            const p = abs(n);
            if (get(p)) { err(`mkdir: cannot create directory '${n}': File exists`); continue; }
            if (flags.includes('p')) { mkdirs(p); continue; }
            const [par, name] = split(p);
            if (!par?.d) err(`mkdir: cannot create directory '${n}': No such file or directory`); else par.c[name] = D({});
          }
        },
        touch: () => {
          if (!names.length) return err('touch: missing file operand');
          for (const n of names) {
            const [par, name] = split(abs(n));
            if (!par?.d) err(`touch: cannot touch '${n}': No such file or directory`); else par.c[name] ||= F('');
          }
        },
        cat: () => {
          if (!names.length) return err('cat: কোন ফাইল? যেমন: cat notes.txt');
          for (const n of names) {
            const node = get(abs(n));
            if (!node) err(`cat: ${n}: No such file or directory`); else if (node.d) err(`cat: ${n}: Is a directory`); else if (node.t) say(esc(node.t));
          }
        },
        rm: () => {
          if (!names.length) return err('rm: missing operand');
          for (const n of names) {
            const p = abs(n), node = get(p), [par, name] = split(p);
            if (!node) err(`rm: cannot remove '${n}': No such file or directory`);
            else if (node.d && !flags.includes('r')) err(`rm: cannot remove '${n}': Is a directory`);
            else if (protectedPath(p)) err(`rm: '${n}' মুছলে তোমার home ই থাকবে না! এটা করতে দিচ্ছি না।`);
            else delete par.c[name];
          }
        },
        rmdir: () => {
          for (const n of names) {
            const p = abs(n), node = get(p), [par, name] = split(p);
            if (!node) err(`rmdir: failed to remove '${n}': No such file or directory`);
            else if (!node.d) err(`rmdir: failed to remove '${n}': Not a directory`);
            else if (Object.keys(node.c).length) err(`rmdir: failed to remove '${n}': Directory not empty`);
            else delete par.c[name];
          }
        },
        cp: () => move(true),
        mv: () => move(false),
      };
      if (cmd === 'dart' || cmd === 'code' || cmd === 'nano') err(`এটা নকল terminal, এখানে ${cmd} নেই। নিজের কম্পিউটারের terminal এ চালাও।`);
      else if (cmd === 'sudo') err('sudo মানে admin এর ক্ষমতা। নকল terminal এ লাগে না, আসলটাতেও খুব সাবধানে।');
      else if (C[cmd]) C[cmd]();
      else err(`${cmd}: command not found`);
    };

    // ---- Windows PowerShell ----
    const ALIAS = {
      pwd: 'Get-Location', gl: 'Get-Location', ls: 'Get-ChildItem', dir: 'Get-ChildItem', gci: 'Get-ChildItem',
      cd: 'Set-Location', sl: 'Set-Location', chdir: 'Set-Location', md: 'mkdir', ni: 'New-Item',
      cat: 'Get-Content', gc: 'Get-Content', type: 'Get-Content', echo: 'Write-Output', write: 'Write-Output',
      cp: 'Copy-Item', copy: 'Copy-Item', cpi: 'Copy-Item', mv: 'Move-Item', move: 'Move-Item', mi: 'Move-Item',
      ren: 'Rename-Item', rni: 'Rename-Item', rm: 'Remove-Item', del: 'Remove-Item', erase: 'Remove-Item', rd: 'Remove-Item', rmdir: 'Remove-Item', ri: 'Remove-Item',
      cls: 'Clear-Host', clear: 'Clear-Host', h: 'Get-History', history: 'Get-History', ghy: 'Get-History', gal: 'Get-Alias',
    };
    const VALUE_P = ['path', 'itemtype', 'name', 'value', 'destination', 'newname'], SWITCH_P = ['recurse', 'force'];
    const runPS = (cmd, args, say, err) => {
      const real = ALIAS[lc(cmd)] || cmd, c = lc(real);
      // -Rec, -r, -Recurse সব একই: নামের শুরুটা মিললেই চলে (যদি একটাই মেলে)
      const pos = [], opt = {};
      for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (!/^-[a-z]/i.test(a)) { pos.push(a); continue; }
        const f = lc(a.slice(1)), hits = [...VALUE_P, ...SWITCH_P].filter(n => n.startsWith(f));
        if (hits.length !== 1) return err(`${real}: ${hits.length ? `Parameter cannot be processed because the parameter name '${a.slice(1)}' is ambiguous.` : `A parameter cannot be found that matches parameter name '${a.slice(1)}'.`}`);
        if (SWITCH_P.includes(hits[0])) opt[hits[0]] = true; else opt[hits[0]] = args[++i];
      }
      const full = p => pretty(abs(p));
      const notFound = (who, p) => err(`${who}: Cannot find path '${full(p)}' because it does not exist.`);
      const row = (n, k) => `${n.d ? 'd----' : '-a---'}  ${n.d ? dirSpan(k) : esc(k)}`;
      const table = (dirPath, rows) => { say(`\n    Directory: ${esc(pretty(dirPath))}\n\nMode   Name\n----   ----`, 'dim'); rows.forEach(r => say(r)); };
      const made = p => { const [par, nm] = split(p); table(p.slice(0, p.lastIndexOf('/')) || '/', [row(par.c[nm], nm)]); };
      const newItem = (p, dir, value) => {
        if (get(p)) return err(`New-Item: An item with the specified name ${pretty(p)} already exists.`);
        if (dir) { mkdirs(p); return made(p); }
        const [par, nm] = split(p);
        if (!par?.d) return err(`New-Item: Could not find a part of the path '${pretty(p)}'.`);
        par.c[nm] = F(value ?? ''); made(p);
      };
      const moveItem = (copy) => {
        const who = copy ? 'Copy-Item' : 'Move-Item', a = opt.path ?? pos[0], b = opt.destination ?? pos[1];
        if (!a || !b) return err(`${who}: দুইটা নাম লাগবে, যেমন: ${copy ? 'Copy-Item' : 'Move-Item'} notes.txt backup.txt`);
        const pa = abs(a), node = get(pa);
        if (!node) return notFound(who, a);
        let pb = abs(b);
        if (get(pb)?.d) pb += '/' + split(pa)[1];
        if (!copy && (lc(pb) + '/').startsWith(lc(pa) + '/')) return err(`Move-Item: Cannot move item because the item at '${pretty(pa)}' is in use.`);
        const [par, nm] = split(pb);
        if (!par?.d) return err(`${who}: Could not find a part of the path '${pretty(pb)}'.`);
        par.c[nm] = copy ? (node.d && !opt.recurse ? D({}) : clone(node)) : node;
        if (!copy) { const [op, on] = split(pa); if (op !== par || on !== nm) delete op.c[on]; }
      };
      const setContent = add => {
        const who = add ? 'Add-Content' : 'Set-Content', f = opt.path ?? pos[0], v = opt.value ?? pos.slice(1).join(' ');
        if (!f) return err(`${who}: কোন ফাইলে? যেমন: ${who} notes.txt 'লেখা'`);
        const [par, nm] = split(abs(f));
        if (!par?.d) return err(`${who}: Could not find a part of the path '${full(f)}'.`);
        if (par.c[nm]?.d) return err(`${who}: Access to the path '${full(f)}' is denied.`);
        const old = add && par.c[nm]?.t;
        par.c[nm] = F(old ? old + '\n' + v : v);
      };
      const C = {
        help: () => say(esc([
          'Get-Location        (pwd)         এখন কোথায় আছি', 'Get-ChildItem       (ls, dir)     কী কী আছে', 'Set-Location ফোল্ডার (cd)       ঢোকো (cd .. = উপরে, cd ~ = home)',
          'mkdir নাম                         ফোল্ডার বানাও (মাঝেরগুলোসহ)', 'New-Item নাম        (ni)          খালি ফাইল বানাও',
          'Get-Content ফাইল    (cat, type)   ফাইলের লেখা দেখাও', "Set-Content ফাইল 'লেখা'           ফাইলে লেখো (আগেরটা মুছে)", "Add-Content ফাইল 'লেখা'           শেষে যোগ করো",
          'echo লেখা > ফাইল, >> ফাইল          একই কাজ, ছোট করে', 'Copy-Item উৎস গন্তব্য (cp, copy)   কপি (ফোল্ডার হলে -Recurse)',
          'Move-Item উৎস গন্তব্য (mv, move)   সরাও', 'Rename-Item পুরানো নতুন (ren)     নাম বদলাও', 'Remove-Item নাম     (rm, del)     মুছো (ফোল্ডার হলে -Recurse)',
          'Get-Alias ls, Get-History, Clear-Host (cls), whoami',
        ].join('\n')), 'dim'),
        'get-location': () => say(`\nPath\n----\n${esc(pretty(cwd))}\n`),
        whoami: () => say('pc\\rafi'),
        'get-history': () => { say('\n  Id CommandLine\n  -- -----------', 'dim'); hist.forEach((h, i) => say(esc(`${String(i + 1).padStart(4)} ${h}`))); },
        'clear-host': () => { out.innerHTML = ''; },
        'write-output': () => pos.forEach(x => say(esc(x))),
        'get-alias': () => Object.entries(ALIAS).filter(([k]) => !pos.length || pos.some(p => lc(p) === k)).forEach(([k, v]) => say(esc(`Alias   ${k} -> ${v}`))),
        'get-childitem': () => {
          const t = opt.path ?? pos[0] ?? '.', p = abs(t), node = get(p);
          if (!node) return notFound('Get-ChildItem', t);
          if (!node.d) return table(p.slice(0, p.lastIndexOf('/')) || '/', [row(node, split(p)[1])]);
          const ks = Object.keys(node.c).sort((a, b) => (node.c[b].d || 0) - (node.c[a].d || 0) || lc(a).localeCompare(lc(b)));
          if (ks.length) table(p, ks.map(k => row(node.c[k], k)));
        },
        'set-location': () => {
          const t = opt.path ?? pos[0] ?? '~', p = abs(t), node = get(p);
          if (pos.length > 1) return err(`Set-Location: A positional parameter cannot be found that accepts argument '${pos[1]}'.`);
          if (!node || !node.d) return notFound('Set-Location', t);
          // আসল নামের বানানে cwd রাখো (documents লিখলেও Documents দেখাবে)
          cwd = '/' + p.split('/').filter(Boolean).reduce((acc, x) => { const n = get('/' + acc.join('/')); acc.push(key(n, x)); return acc; }, []).join('/');
          if (cwd === '//') cwd = '/';
        },
        mkdir: () => {
          const list = opt.path ? [opt.path] : pos;
          if (!list.length) return err('mkdir: কোন নামে? যেমন: mkdir khata');
          list.forEach(n => newItem(abs(n), true));
        },
        'new-item': () => {
          let t = opt.path ?? pos[0];
          if (opt.name) t = (t ?? '.') + '/' + opt.name;
          if (!t) return err("New-Item: কোন নামে? যেমন: New-Item notes.txt");
          const ty = lc(opt.itemtype || 'file');
          if (!'directory'.startsWith(ty) && !'file'.startsWith(ty)) return err(`New-Item: The type '${opt.itemtype}' is not valid. এখানে চলবে: File বা Directory`);
          newItem(abs(t), 'directory'.startsWith(ty), opt.value);
        },
        'get-content': () => {
          const list = opt.path ? [opt.path] : pos;
          if (!list.length) return err('Get-Content: কোন ফাইল? যেমন: Get-Content notes.txt');
          for (const f of list) {
            const node = get(abs(f));
            if (!node) notFound('Get-Content', f);
            else if (node.d) err(`Get-Content: Unable to get content because it is a directory: '${full(f)}'. Please use 'Get-ChildItem' instead.`);
            else if (node.t) say(esc(node.t));
          }
        },
        'set-content': () => setContent(false),
        'add-content': () => setContent(true),
        'copy-item': () => moveItem(true),
        'move-item': () => moveItem(false),
        'rename-item': () => {
          const a = opt.path ?? pos[0], b = opt.newname ?? pos[1];
          if (!a || !b) return err('Rename-Item: দুইটা নাম লাগবে, যেমন: Rename-Item notes.txt diary.txt');
          if (/[\\/]/.test(b)) return err('Rename-Item: Cannot rename the specified target, because it represents a path or device name.');
          const pa = abs(a), node = get(pa);
          if (!node) return notFound('Rename-Item', a);
          const [par, nm] = split(pa), k2 = key(par, b);
          if (k2 !== undefined && k2 !== nm) return err('Rename-Item: Cannot create a file when that file already exists.');
          delete par.c[nm]; par.c[b] = node;
        },
        'remove-item': () => {
          const list = opt.path ? [opt.path] : pos;
          if (!list.length) return err('Remove-Item: কোনটা মুছবো? যেমন: Remove-Item notes.txt');
          for (const n of list) {
            const p = abs(n), node = get(p), [par, nm] = split(p);
            if (!node) notFound('Remove-Item', n);
            else if (protectedPath(p)) err(`Remove-Item: '${full(n)}' মুছলে তোমার নিজের ফোল্ডারই থাকবে না! এটা করতে দিচ্ছি না।`);
            else if (node.d && Object.keys(node.c).length && !opt.recurse) err(`Remove-Item: The item at ${full(n)} has children and the Recurse parameter was not specified. (আসল PowerShell এখানে Y/N জিজ্ঞেস করে। এখানে -Recurse লিখে আবার চালাও।)`);
            else delete par.c[nm];
          }
        },
      };
      if (['dart', 'code', 'notepad'].includes(lc(cmd))) err(`এটা নকল PowerShell, এখানে ${cmd} নেই। নিজের কম্পিউটারের PowerShell এ চালাও।`);
      else if (C[c]) C[c]();
      else {
        err(`${cmd}: The term '${cmd}' is not recognized as a name of a cmdlet, function, script file, or executable program.\nCheck the spelling of the name, or if a path was included, verify that the path is correct and try again.`);
        if (lc(cmd) === 'touch') say('PowerShell এ touch নেই। খালি ফাইল বানাতে: New-Item notes.txt', 'dim');
      }
    };

    const check = toks => MIS.forEach(([, ok], i) => { if (!done[i] && ok(toks || [])) { done[i] = 1; lis[i].classList.add('ok'); } });
    const reset = () => {
      root = fresh(); cwd = HOME; hist = []; hi = 0; done = [];
      lis.forEach(l => l.classList.remove('ok'));
      out.innerHTML = ''; print(`নকল ${PS ? 'PowerShell' : 'terminal'} চালু। শুরু করতে help লেখো।`, 'dim'); ps.textContent = prompt();
    };
    // Tab: শেষ শব্দের শুরুটা মিলিয়ে নাম পূর্ণ করো
    const complete = () => {
      const v = inp.value, word = v.match(/(\S*)$/)[1], slash = Math.max(word.lastIndexOf('/'), PS ? word.lastIndexOf('\\') : -1);
      const dirPart = word.slice(0, slash + 1), pre = word.slice(slash + 1), dir = get(abs(dirPart || '.'));
      if (!dir?.d) return;
      const hits = Object.keys(dir.c).filter(k => (PS ? lc(k).startsWith(lc(pre)) : k.startsWith(pre)) && (pre.startsWith('.') || !k.startsWith('.')));
      if (hits.length === 1) inp.value = v.slice(0, v.length - word.length) + dirPart + hits[0] + (dir.c[hits[0]].d ? (PS ? '\\' : '/') : ' ');
      else if (hits.length > 1) { print(`<span class="ps">${esc(prompt())}</span> ${esc(v)}`); print(hits.map(k => dir.c[k].d ? dirSpan(k) : esc(k)).join('  ')); out.scrollTop = out.scrollHeight; }
    };
    inp.onkeydown = e => {
      if (e.key === 'Enter') {
        const line = inp.value; inp.value = '';
        print(`<span class="ps">${esc(prompt())}</span> ${esc(line)}`);
        if (line.trim()) { hist.push(line.trim()); hi = hist.length; }
        check(run(line));
        ps.textContent = prompt(); out.scrollTop = out.scrollHeight;
      } else if (e.key === 'Tab') { e.preventDefault(); complete(); }
      else if (e.key === 'ArrowUp' && hi > 0) { e.preventDefault(); inp.value = hist[--hi]; }
      else if (e.key === 'ArrowDown') { e.preventDefault(); hi = Math.min(hi + 1, hist.length); inp.value = hist[hi] || ''; }
      else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); out.innerHTML = ''; }
      else if (e.key === 'c' && e.ctrlKey && !getSelection().toString()) { e.preventDefault(); print(`<span class="ps">${esc(prompt())}</span> ${esc(inp.value)}^C`); inp.value = ''; }
    };
    $('.term', el).onclick = () => { if (!getSelection().toString()) inp.focus({ preventScroll: true }); };
    $('[data-t=reset]', el).onclick = reset;
    reset();
  },

  psLab(el) { W.termLab(el, 'ps'); },
};

// ---------- router ----------
function route() {
  let id = location.hash.slice(1) || 'home';
  if (id !== 'home' && id !== 'cards' && !TOPICS[id]) id = 'home';
  const main = $('#main');
  main.innerHTML = id === 'home' ? renderHome() : id === 'cards' ? renderCards() : renderTopic(id);
  renderSide(id);
  $('#side').classList.remove('open');
  if (id === 'cards') mountCards();
  main.querySelectorAll('[data-widget]').forEach(el => W[el.dataset.widget]?.(el));
  main.querySelectorAll('[data-trace]').forEach(el => mountTrace(el, el.dataset.trace));
  if (TOPICS[id]) updSum(id);
  window.scrollTo(0, 0);
  try { localStorage.setItem(KEY + '-last', id); } catch (e) {}
}
function updSum(id) {
  const el = $('#psum'); if (el) el.textContent = `${bn(topicDone(id))} / ${bn(TOPICS[id].probs.length)} শেষ`;
}

$('#main').addEventListener('click', e => {
  const t = e.target.closest('[data-act],[data-go],[data-f]'); if (!t) return;
  if (t.dataset.go) return document.getElementById(t.dataset.go)?.scrollIntoView({ behavior: 'smooth' });
  if (t.dataset.f) {
    document.querySelectorAll('.pfilter .chip').forEach(c => c.classList.toggle('on', c === t));
    const f = t.dataset.f;
    document.querySelectorAll('.prob').forEach(p => p.hidden = f === 'all' ? false : f === 'left' ? !!S.done[p.dataset.k] : p.dataset.l !== f);
    return;
  }
  const act = t.dataset.act, card = t.closest('.prob');
  if (act === 'copy') {
    const code = t.closest('.code').querySelector('textarea').value;
    const done = () => { t.textContent = 'কপি হয়েছে'; setTimeout(() => t.textContent = 'কপি', 1500); };
    navigator.clipboard?.writeText(code).then(done, () => { const r = document.createRange(); r.selectNodeContents(t.closest('.code').querySelector('pre')); getSelection().removeAllRanges(); getSelection().addRange(r); t.textContent = 'Ctrl+C চাপো'; });
  }
  if (act === 'hint') { const h = card.querySelector('.hint'); h.hidden = !h.hidden; }
  if (act === 'think') { const h = card.querySelector('.ladder'); h.hidden = !h.hidden; }
  if (act === 'sol') { const s = card.querySelector('.solbox'); if (!s.hidden) { s.hidden = true; return; } card.querySelector('.gate').hidden = false; }
  if (act === 'ungate') card.querySelector('.gate').hidden = true;
  if (act === 'reveal') { card.querySelector('.gate').hidden = true; card.querySelector('.solbox').hidden = false; }
  if (act === 'ans') {
    const q = t.closest('.q'), id = location.hash.slice(1), qq = TOPICS[id].quiz[+q.dataset.q];
    q.querySelectorAll('.opts button').forEach((b, j) => { b.classList.remove('right', 'wrong'); if (j === qq.a) b.classList.add('right'); });
    if (+t.dataset.j !== qq.a) t.classList.add('wrong');
    const w = q.querySelector('.why'); w.hidden = false;
    w.innerHTML = (+t.dataset.j === qq.a ? '<b>ঠিক!</b> ' : '<b>হয়নি।</b> ') + fmt(qq.why);
  }
});
$('#main').addEventListener('change', e => {
  if (e.target.dataset.act !== 'done') return;
  const card = e.target.closest('.prob'), k = card.dataset.k;
  e.target.checked ? S.done[k] = 1 : delete S.done[k];
  card.classList.toggle('isdone', e.target.checked);
  save(); const id = location.hash.slice(1); renderSide(id); updSum(id);
});
$('#menu-btn').onclick = () => $('#side').classList.toggle('open');
window.addEventListener('hashchange', route);
if (!location.hash) { try { const l = localStorage.getItem(KEY + '-last'); if (l && (TOPICS[l] || l === 'cards')) history.replaceState(null, '', '#' + l); } catch (e) {} }
route();
