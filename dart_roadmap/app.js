// ---------- data: সপ্তাহ ভাগ ----------
const WEEKS = [
  // কোড শুরুর আগের প্রস্তুতি: সূচিতে সবার উপরে। pos: 'start' মানে রোডম্যাপেও সপ্তাহ ১ এর আগে
  { n: 's', label: 'শুরুর আগে', pos: 'start', title: 'কোড লেখার আগের প্রস্তুতি: কিবোর্ড, VS Code, ইংরেজি শব্দ, নাম রাখা, সাহায্য চাওয়া', ids: ['vscode', 'glossary', 'naming', 'help'] },
  { n: 1, title: 'ভাবতে শেখা, Output, Variable, String', ids: ['think', 'setup', 'variables', 'strings-basic'] },
  { n: 2, title: 'অপারেটর, Logic, Input আর Null', ids: ['operators', 'logic', 'conversion', 'null-safety'] },
  { n: 3, title: 'সিদ্ধান্ত নেওয়া (Condition)', ids: ['if-else', 'nested-if', 'switch-ternary'] },
  { n: 4, title: 'Loop আর Bug খোঁজা', ids: ['for-loop', 'while-loop', 'nested-loop', 'debugging'] },
  { n: 5, title: 'Function, Scope আর Recursion', ids: ['functions-basic', 'parameters', 'scope', 'arrow-function', 'recursion'] },
  { n: 6, title: 'List, 2D/3D List, Set, Map, Math আর Test', ids: ['list', 'list-2d', 'set-map', 'math-date', 'testing'] },
  { n: 7, title: 'Anonymous function আর Collection method', ids: ['anonymous', 'higher-order-closure', 'collection-methods'] },
  { n: 8, title: 'String, Algorithm আর Logic Gym', ids: ['string-problems', 'algorithms', 'logic-gym'] },
  { n: 9, title: 'OOP: Class থেকে Extension', ids: ['class-object', 'inheritance', 'oop-advanced'] },
  { n: 10, title: 'Generics, Record আর Error', ids: ['generics', 'records-patterns', 'exceptions'] },
  { n: 11, title: 'JSON, Async, Stream, Isolate', ids: ['json', 'async', 'streams', 'isolates'] },
  { n: 12, title: 'Mini Project', ids: ['projects'] },
  // সপ্তাহের বাইরে: যার যখন দরকার পড়বে। n দিয়ে flashcard এর CARDS.w মেলে
  { n: 'x', label: 'Extra', title: 'Terminal, Git, Debugger, Package, Flutter আর আরো: দরকার মতো পড়ো', ids: ['terminal', 'powershell', 'git', 'debugger', 'shortcuts', 'clean-code', 'packages', 'inside', 'dart-compile', 'errors', 'flutter-intro', 'gallery'] },
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
const MAIN = WEEKS.filter(w => !w.label).flatMap(w => w.ids); // শুধু সপ্তাহের টপিক, ক্রমে
const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5); // স্থানীয় দিন নম্বর
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
let S = { done: {}, known: {}, cards: {}, tests: {} }; // cards: flashcard এর বাক্স আর পরের দিন, tests: সাপ্তাহিক পরীক্ষার সেরা স্কোর
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
// পুরো প্রোগ্রাম (main আছে) হলে DartPad এ চালানোর বোতাম
const runnable = (code, lang) => lang === 'dart' && /\bmain\s*\(/.test(code);
function codeBlock(code, out, lang = 'dart') {
  return `<div class="code"><div class="code-bar"><span>${LANG_LABEL[lang] || lang}</span><span class="cb-act">${runnable(code, lang) ? '<button data-act="run">▶ চালাও</button>' : ''}<button data-act="copy">কপি</button></span></div>
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
  if (b.nest) return `<div class="vis"><div class="cap">${fmt(b.cap || 'যেকোনো বাক্সে ক্লিক করো: সেখান থেকে কোন variable দেখা যায়?')}</div><div class="nest-root">${nestBox(b.nest)}</div><p class="tr-note nest-msg">একটা বাক্সে ক্লিক করো।</p></div>`;
  if (b.widget) return `<div data-widget="${b.widget}" data-arg="${esc(b.arg || '')}"></div>`;
  if (b.trace) return `<div data-trace="${b.trace}"></div>`;
  return '';
}

// scope এর ছবি: বাক্সের ভেতরে বাক্স। { n: নাম, v: ['int x = 1', ...], k: [ভেতরের বাক্স] }
const varName = d => d.split('=')[0].trim().split(/\s+/).pop();
const nestBox = (b, d = 0) => `<div class="nest" data-d="${d}"><div class="nest-h">${esc(b.n)}</div>${(b.v || []).length ? `<div class="nest-v">${b.v.map(x => `<span class="nv mono" data-name="${esc(varName(x))}">${esc(x)}</span>`).join('')}</div>` : ''}${(b.k || []).map(k => nestBox(k, d + 1)).join('')}</div>`;
// ক্লিক করা বাক্স আর তার বাইরের বাক্সগুলোর variable দেখা যায়। একই নাম ভেতরে থাকলে বাইরেরটা ঢাকা পড়ে
function nestClick(box) {
  const root = box.closest('.nest-root'), msg = root.parentElement.querySelector('.nest-msg');
  root.querySelectorAll('.nest').forEach(n => n.classList.remove('here', 'up'));
  root.querySelectorAll('.nv').forEach(v => v.className = 'nv mono no');
  const seen = new Set(), see = [], hid = [];
  for (let n = box; n && n !== root; n = n.parentElement.closest('.nest')) {
    n.classList.add(n === box ? 'here' : 'up');
    n.querySelector(':scope > .nest-v')?.querySelectorAll('.nv').forEach(v => {
      const nm = v.dataset.name;
      if (seen.has(nm)) { v.className = 'nv mono shadow'; hid.push(nm); } else { v.className = 'nv mono see'; seen.add(nm); see.push(nm); }
    });
  }
  // দেখা যায় না এমন নামের পাশে কোন বাক্সের, যাতে একই নামের দুইটা আলাদা variable গুলিয়ে না যায়
  const no = [...root.querySelectorAll('.nv.no')].map(v => `${v.dataset.name} (${v.closest('.nest').querySelector('.nest-h').textContent.replace(/[({].*$/, '').trim()} এর)`);
  msg.innerHTML = `<b>${esc(box.querySelector('.nest-h').textContent)}</b> এর ভেতর থেকে দেখা যায়: ${see.length ? see.map(x => `<code>${esc(x)}</code>`).join(' ') : 'কিছুই না'}` +
    (hid.length ? `<br>ঢাকা পড়েছে (ভেতরে একই নাম আছে, তাই বাইরেরটা দেখা যায় না): ${hid.map(x => `<code>${esc(x)}</code>`).join(' ')}` : '') +
    (no.length ? `<br>দেখা যায় না: ${no.map(x => `<code>${esc(x)}</code>`).join(' ')}` : '');
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
  const next = MAIN.find(id => topicDone(id) < TOPICS[id].probs.length) || MAIN[0];
  return `<div class="page">
  <section class="hero">
    <p class="eyebrow">১৩ সপ্তাহের (প্রায় ৩ মাস) রোডম্যাপ · Dart</p>
    <h1>প্রোগ্রামিং শিখবো, <em>মুখস্থ না করে বুঝে</em></h1>
    <p class="lead">প্রতিটা টপিকে আছে সহজ ভাষায় ব্যাখ্যা, ধাপে ধাপে কোড চলতে দেখার যন্ত্র, ছোট কুইজ আর অনেকগুলো সমস্যা। সহজ থেকে শুরু, আস্তে আস্তে কঠিন। প্রতিটা সমস্যার হিন্ট আর সমাধান আছে, কিন্তু আগে নিজে চেষ্টা।</p>
    <div class="stats"><div>${bn(ORDER.length)}<small>টপিক</small></div><div>${bn(total())}<small>প্র্যাকটিস সমস্যা</small></div><div>${bn(totalDone())}<small>তুমি শেষ করেছ</small></div></div>
    <a class="cta" href="#${next}">${totalDone() ? 'যেখানে থেমেছিলে সেখান থেকে' : 'প্রথম দিন শুরু করো'} → ${esc(TOPICS[next].title)}</a>
    ${TOPICS.vscode && !totalDone() ? `<p class="goal">কম্পিউটারে কখনো কোড লেখোনি? আগে <a href="#vscode">শুরুর আগে</a> অংশটা দেখে নাও: কিবোর্ডের চিহ্ন, VS Code, আর প্রোগ্রামিং এর ইংরেজি শব্দ।</p>` : ''}
  </section>
  ${dailyHTML()}

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
    <div class="weeks">${WEEKS.filter(w => w.pos === 'start').map(wkRow).join('')}${WEEKS.filter(w => !w.label).map(wkRow).join('')}
      <div class="wkrow"><h3><span>সপ্তাহ ১৩</span>রিভিশন</h3><p>Logic Gym আর সব কঠিন সমস্যা আবার করো, সমাধান না দেখে। তারপর Flutter শুরু করা যায়।</p></div>
      ${WEEKS.filter(w => w.label && w.pos !== 'start').map(wkRow).join('')}
    </div>
  </section>
  <section>
    <h2>তোমার অগ্রগতি <span class="step">ব্যাকআপ</span></h2>
    <p>অগ্রগতি (কোন সমস্যা শেষ, কোন কার্ড মনে আছে, পরীক্ষার স্কোর) শুধু <b>এই ব্রাউজারে</b> সেভ থাকে। ব্রাউজারের ডেটা মুছে গেলে বা অন্য কম্পিউটারে গেলে হারাবে। মাঝে মাঝে ফাইলে নামিয়ে রাখো, পরে সেই ফাইল দিয়ে ফেরত আনতে পারবে।</p>
    <div class="w-row"><button class="btn primary" data-act="export">অগ্রগতি ফাইলে নামাও</button><label class="btn">ফাইল থেকে ফেরত আনো<input type="file" accept=".json,application/json" data-act="import" hidden></label><span class="goal" id="bk-msg"></span></div>
  </section>
  <p class="goal">কোড চালাতে: কোডের পাশের <b>▶ চালাও</b> বোতাম, অথবা <a href="https://dartpad.dev" target="_blank" rel="noopener">dartpad.dev</a>। পাতাটা একবার খুললে পরে ইন্টারনেট ছাড়াও পড়া যায় (কোড চালাতে ইন্টারনেট লাগে)।</p>
  </div>`;
}

function wkRow(w) {
  const d = w.ids.reduce((a, id) => a + topicDone(id), 0), n = w.ids.reduce((a, id) => a + TOPICS[id].probs.length, 0);
  return `<div class="wkrow ${d === n ? 'full' : d ? 'started' : ''}"><h3><span>${esc(wkName(w))}</span>${esc(w.title)}</h3>
    <div class="tps">${w.ids.map(id => `<a href="#${id}" class="${topicDone(id) === TOPICS[id].probs.length ? 'full' : ''}">${esc(TOPICS[id].short || TOPICS[id].title)} · ${bn(topicDone(id))}/${bn(TOPICS[id].probs.length)}</a>`).join('')}${testPool(w).length ? `<a class="tlink" href="#test-${w.n}">সপ্তাহের পরীক্ষা${S.tests[w.n] ? ` · সেরা ${bn(S.tests[w.n][0])}/${bn(S.tests[w.n][1])}` : ''} →</a>` : ''}</div></div>`;
}

function renderTopic(id) {
  const t = TOPICS[id], w = weekOf(id);
  // আগের/পরের টপিক: সপ্তাহের টপিক আর Extra আলাদা, একটা থেকে আরেকটায় লাফ দেয় না
  const group = WEEKS.filter(x => (x.label || '') === (w.label || '')).flatMap(x => x.ids), k = group.indexOf(id);
  const prev = group[k - 1], next = group[k + 1];
  return `<article class="page">
  <header class="t-head">
    <p class="eyebrow">${esc(wkName(w))} · ${esc(t.days)}</p>
    <h1>${esc(t.title)}</h1>
    <p class="goal"><b>আজকের লক্ষ্য:</b> ${fmt(t.goal)}</p>
    <div class="jump"><button data-go="s-learn">শেখো</button><button data-go="s-how">কিভাবে কাজ করে</button>${t.quiz?.length ? '<button data-go="s-quiz">কুইজ</button>' : ''}<button data-go="s-prob">সমস্যা (${bn(t.probs.length)})</button><button data-act="print">প্রিন্ট</button><button data-act="print-sol">প্রিন্ট (সমাধানসহ)</button></div>
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
  ${!w.label && w.ids[w.ids.length - 1] === id && testPool(w).length ? `<section class="callout"><h2>${esc(wkName(w))} শেষ?</h2><p>এই সপ্তাহের সব টপিক থেকে ছোট একটা পরীক্ষা দাও। ৭০% বা বেশি পেলে পরের সপ্তাহে যাও, কম পেলে যেগুলো ভুল হলো সেগুলো আবার দেখো।</p><p><a class="cta" href="#test-${w.n}">সপ্তাহের পরীক্ষা দাও →</a></p></section>` : ''}
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
    <div class="pact"><button class="btn think" data-act="think">কিভাবে ভাববো?</button>${p.hint ? '<button class="btn" data-act="hint">হিন্ট</button>' : ''}${p.sol || p.ans || p.note ? '<button class="btn" data-act="sol">সমাধান</button>' : ''}
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

// বাক্স পদ্ধতি: "মনে আছে" চাপলে কার্ড পরের বাক্সে যায় আর আরো দেরিতে আসে, "মনে নেই" চাপলে বাক্স ১ এ ফেরে
const GAP = [0, 1, 3, 7, 14, 30]; // বাক্স অনুযায়ী কত দিন পরে আবার
const cardState = k => S.cards[k] || (S.known[k] ? { b: 2, d: 0 } : { b: 0, d: 0 });
const isDue = k => cardState(k).d <= today();
function renderCards() {
  const due = CARDS.filter((c, k) => isDue(k)).length;
  return `<div class="page"><header class="t-head"><p class="eyebrow">প্রতিদিন ৫ মিনিট</p><h1>Syntax ফ্ল্যাশকার্ড</h1>
    <p class="goal">প্রশ্ন দেখে মনে মনে বা খাতায় কোডটা লেখো, তারপর কার্ডে ক্লিক করে মিলিয়ে নাও। মনে থাকলে <b>মনে আছে</b>: কার্ডটা ১, ৩, ৭, ১৪, ৩০ দিন পর পর ফিরবে। মনে না থাকলে <b>মনে নেই</b>: কালই আবার আসবে। রোজ শুধু "আজকের কার্ড" শেষ করলেই হলো।</p></header>
    <section class="fc-wrap">
      <div class="w-row"><select id="fc-filter" class="btn"><option value="due">আজকের কার্ড (${bn(due)})</option><option value="all">সব কার্ড</option><option value="unk">যেগুলো এখনো শিখিনি</option>${WEEKS.map(w => `<option value="${w.n}">${esc(wkName(w))}</option>`).join('')}</select><span class="fc-tag" id="fc-count"></span></div>
      <button class="fc" id="fc"><div class="fc-in"><div class="fc-f" id="fc-f"></div><div class="fc-b" id="fc-b"></div></div></button>
      <div class="w-row"><button class="btn" id="fc-prev">← আগের</button><button class="btn" id="fc-shuf">এলোমেলো</button><button class="btn" id="fc-no">মনে নেই</button><button class="btn primary" id="fc-know">মনে আছে ✓</button><button class="btn" id="fc-next">পরের →</button></div>
    </section></div>`;
}
function mountCards() {
  let list = [], i = 0, f = 'due';
  const build = () => {
    f = $('#fc-filter').value;
    list = CARDS.map((c, k) => ({ ...c, k })).filter(c => f === 'due' ? isDue(c.k) : f === 'all' ? true : f === 'unk' ? cardState(c.k).b === 0 : String(c.w) === f);
    i = 0; show();
  };
  const show = () => {
    $('#fc').classList.remove('flip');
    if (!list.length) { $('#fc-f').textContent = f === 'due' ? 'আজকের সব কার্ড শেষ! কাল আবার এসো।' : 'এই তালিকায় কোনো কার্ড নেই।'; $('#fc-b').textContent = ''; $('#fc-count').textContent = ''; return; }
    i = Math.min(i, list.length - 1);
    const c = list[i], st = cardState(c.k);
    $('#fc-f').textContent = c.f; $('#fc-b').textContent = c.b;
    $('#fc-count').textContent = `${bn(i + 1)} / ${bn(list.length)} · ${wkName(WEEKS.find(w => String(w.n) === String(c.w)) || { n: c.w })} · ${st.b ? `বাক্স ${bn(st.b)}` : 'নতুন'}`;
  };
  const answer = ok => {
    if (!list.length) return;
    const c = list[i], st = cardState(c.k), nb = ok ? Math.min(st.b + 1, GAP.length - 1) : 1;
    S.cards[c.k] = { b: nb, d: today() + GAP[nb] }; delete S.known[c.k]; save();
    if (f === 'due' && ok) list.splice(i, 1);            // শেখা হলে আজকের তালিকা থেকে বাদ
    else if (f === 'due') list.push(list.splice(i, 1)[0]); // মনে নেই: আজকের শেষে আবার
    else i = (i + 1) % list.length;
    show();
  };
  $('#fc').onclick = () => $('#fc').classList.toggle('flip');
  $('#fc-next').onclick = () => { if (list.length) { i = (i + 1) % list.length; show(); } };
  $('#fc-prev').onclick = () => { if (list.length) { i = (i - 1 + list.length) % list.length; show(); } };
  $('#fc-shuf').onclick = () => { list.sort(() => Math.random() - .5); i = 0; show(); };
  $('#fc-know').onclick = () => answer(true);
  $('#fc-no').onclick = () => answer(false);
  $('#fc-filter').onchange = build;
  build();
}

// ---------- আজকের চ্যালেঞ্জ ----------
// যেসব টপিক শুরু করেছ (বা পরের টপিক পর্যন্ত) সেখান থেকে না-করা সহজ/মাঝারি সমস্যা, দিন অনুযায়ী একটা
function dailyPick() {
  const upto = MAIN.findIndex(id => topicDone(id) < TOPICS[id].probs.length);
  const ids = MAIN.slice(0, Math.max(1, (upto < 0 ? MAIN.length : upto) + 1));
  const pool = ids.flatMap(id => TOPICS[id].probs.filter(p => (p.l === 'e' || p.l === 'm') && !S.done[p.key]).map(p => [id, p]));
  if (!pool.length) return null;
  const d = today(); let h = d * 2654435761 >>> 0;
  return pool[h % pool.length];
}
function dailyHTML() {
  const pick = dailyPick(); if (!pick) return '';
  const [id, p] = pick;
  return `<section class="daily"><h2>আজকের চ্যালেঞ্জ <span class="step">${esc(TOPICS[id].short || TOPICS[id].title)}</span></h2>
    <p class="goal">প্রতিদিন একটা নতুন সমস্যা, তুমি যতটুকু শিখেছ তার মধ্য থেকে। পারলে "নিজে পেরেছি" দাও, কাল নতুন আসবে।</p>
    <div class="probs">${probCard(id, p, TOPICS[id].probs.indexOf(p))}</div></section>`;
}

// ---------- সাপ্তাহিক পরীক্ষা ----------
let TEST_QS = []; // এখন যে পরীক্ষা খোলা, তার প্রশ্নগুলো
const testPool = w => w.label ? [] : w.ids.flatMap(id => (TOPICS[id].quiz || []).map(q => ({ ...q, id })));
function renderTest(n) {
  const w = WEEKS.find(x => String(x.n) === String(n));
  const qs = TEST_QS = testPool(w).sort(() => Math.random() - .5).slice(0, 8);
  return `<article class="page"><header class="t-head"><p class="eyebrow">${esc(wkName(w))} · পরীক্ষা</p><h1>${esc(w.title)}</h1>
    <p class="goal">${bn(qs.length)}টা প্রশ্ন, এই সপ্তাহের টপিকগুলো থেকে এলোমেলো। প্রতিটায় একবারই উত্তর দেওয়া যাবে, তাই আগে খাতায় ভাবো। প্রতিবার নতুন করে খুললে প্রশ্ন বদলায়।</p></header>
    <div class="quiz test" data-week="${esc(n)}">${qs.map((q, i) => `<div class="q" data-i="${i}"><p><b>${bn(i + 1)}.</b> ${fmt(q.q)}</p>${q.code ? codeBlock(q.code, '', q.lang || TOPICS[q.id].lang) : ''}
      <div class="opts">${q.opts.map((o, j) => `<button data-j="${j}">${esc(o)}</button>`).join('')}</div><div class="why" hidden></div></div>`).join('')}</div>
    <section class="callout" id="t-res" hidden></section>
    <nav class="pager"><a href="#home"><small>← ফিরে যাও</small>রোডম্যাপ</a><a href="#test-${esc(n)}" data-act="retest"><small>আবার →</small>নতুন প্রশ্নে পরীক্ষা</a></nav></article>`;
}
function mountTest(n) {
  const box = $('.test'), w = WEEKS.find(x => String(x.n) === String(n));
  const qs = [...box.querySelectorAll('.q')], data = TEST_QS;
  let right = 0, answered = 0; const wrong = new Set();
  box.onclick = e => {
    const b = e.target.closest('.opts button'); if (!b) return;
    const qel = b.closest('.q'), q = data[+qel.dataset.i]; if (!q || qel.classList.contains('done')) return;
    qel.classList.add('done'); answered++;
    qel.querySelectorAll('.opts button').forEach((x, j) => { if (j === q.a) x.classList.add('right'); });
    if (+b.dataset.j === q.a) right++; else { b.classList.add('wrong'); wrong.add(q.id); }
    const why = qel.querySelector('.why'); why.hidden = false;
    why.innerHTML = (+b.dataset.j === q.a ? '<b>ঠিক!</b> ' : '<b>হয়নি।</b> ') + fmt(q.why);
    if (answered === qs.length) {
      const best = S.tests[n]; if (!best || right / qs.length > best[0] / best[1]) { S.tests[n] = [right, qs.length]; save(); }
      const pass = right / qs.length >= .7, res = $('#t-res'); res.hidden = false;
      res.innerHTML = `<h2>${bn(right)} / ${bn(qs.length)} ${pass ? '· দারুণ!' : ''}</h2><p>${pass ? 'তুমি এই সপ্তাহ বুঝেছ। পরের সপ্তাহে যাও।' : 'আরেকটু চর্চা দরকার। এই টপিকগুলো আবার দেখো, তারপর আবার পরীক্ষা দাও:'}</p>${wrong.size ? `<div class="tps">${[...wrong].map(id => `<a href="#${id}">${esc(TOPICS[id].short || TOPICS[id].title)}</a>`).join('')}</div>` : ''}`;
      res.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
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

  // নাম রাখার খেলা: (১) নাম যাচাই, (২) শব্দ থেকে নাম বানাও, (৩) বাংলা → ইংরেজি শব্দ খোঁজো। শব্দ আসে TOPICS[arg].words থেকে
  nameLab(el) {
    const WORDS = TOPICS[el.dataset.arg]?.words || [];
    const KW = new Set('assert break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch this throw true try var void while with'.split(' '));
    const VAGUE = new Set(['data', 'info', 'value', 'thing', 'stuff', 'temp', 'tmp', 'obj', 'item1', 'list1', 'foo', 'bar']);
    const ABBR = { cnt: 'count', std: 'student', nm: 'name', num: 'number', tot: 'total', avg: 'average', msg: 'message', btn: 'button', usr: 'user', pwd: 'password', lst: 'list', idx: 'index', val: 'value', calc: 'calculate', str: 'text' };
    const KIND = { var: 'variable', bool: 'bool (true/false)', list: 'List (অনেকগুলো)', func: 'function', cls: 'class', file: 'ফাইল' };
    // যেকোনো লেখা থেকে শব্দ আলাদা: স্পেস, _, -, আর camelCase এর বড় অক্ষর
    const words = t => t.replace(/\.dart$/, '').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/[^A-Za-z0-9]+/).filter(Boolean).map(w => w.toLowerCase());
    const cap = w => w[0].toUpperCase() + w.slice(1);
    const fix = w => ABBR[w] || w;
    const make = (ws, k) => {
      if (!ws.length) return '';
      ws = ws.map(fix);
      if (/^\d/.test(ws[0])) ws = ['n' + ws[0]];
      if (k === 'cls') return ws.map(cap).join('');
      if (k === 'file') return ws.join('_') + '.dart';
      if (k === 'bool' && !['is', 'has', 'can', 'should', 'was'].includes(ws[0])) ws = ['is', ...ws];
      if (k === 'list' && !/s$/.test(ws[ws.length - 1])) ws = [...ws.slice(0, -1), ws[ws.length - 1] + 's'];
      return ws[0] + ws.slice(1).map(cap).join('');
    };
    const check = (n, k) => {
      const R = [];  // [ঠিক?, বাংলায় কথা]
      if (!n) return [];
      if (/[^\x00-\x7F]/.test(n)) return [[false, 'বাংলা (বা অন্য ভাষার) অক্ষর নামে চলে না, শুধু লেখা আর comment এ। নিচের "শব্দ খোঁজো" তে ইংরেজি শব্দ খুঁজে নাও।']];
      if (k !== 'file') {
        if (/^\d/.test(n)) R.push([false, 'সংখ্যা দিয়ে শুরু চলে না (Error)।']);
        if (/\s/.test(n)) R.push([false, 'মাঝে স্পেস চলে না (Error)। শব্দগুলো জোড়া লাগাও।']);
        if (/[^A-Za-z0-9_$]/.test(n.replace(/\s/g, ''))) R.push([false, 'শুধু a-z, A-Z, 0-9 আর _ চলে। - বা অন্য চিহ্ন চলে না (Error)।']);
        if (KW.has(n)) R.push([false, `"${n}" Dart এর নিজের শব্দ (keyword), নাম হিসেবে চলে না (Error)।`]);
        if (R.some(r => !r[0])) return R;
        R.push([true, 'Dart এর নিয়ম মানে, চলবে।']);
        const body = n.replace(/^_/, '');
        if (k === 'cls') R.push(/^[A-Z][A-Za-z0-9]*$/.test(body) ? [true, 'বড় হাতে শুরু, শব্দের মাঝে _ নেই: UpperCamelCase ঠিক আছে।'] : [false, 'class এর নাম বড় হাতের অক্ষরে শুরু, শব্দের মাঝে _ ছাড়া: UpperCamelCase।']);
        else if (/^[A-Z0-9_]+$/.test(body) && body.length > 1) R.push([false, 'সব বড় হাতের (MAX_SCORE ধরন)। Dart এ const ও lowerCamelCase: maxScore।']);
        else R.push(/^[a-z][A-Za-z0-9]*$/.test(body) ? [true, 'ছোট হাতে শুরু, শব্দের মাঝে _ নেই: lowerCamelCase ঠিক আছে।'] : [false, /_/.test(body) ? 'মাঝে _ আছে। variable/function এ snake_case না, lowerCamelCase: totalPrice।' : 'ছোট হাতের অক্ষরে শুরু করো: lowerCamelCase।']);
        if (n.startsWith('_')) R.push([true, 'শুরুতে _ মানে private: শুধু এই ফাইলের ভেতরে দেখা যাবে।']);
        if (/\$/.test(n)) R.push([false, '$ চলে, কিন্তু Dart এ প্রায় কেউ ব্যবহার করে না। বাদ দাও।']);
      } else {
        R.push(/^[a-z][a-z0-9_]*\.dart$/.test(n) ? [true, 'সব ছোট হাতের, মাঝে _, শেষে .dart: snake_case ঠিক আছে।'] : [false, 'ফাইলের নাম সব ছোট হাতের অক্ষরে, শব্দের মাঝে _, শেষে .dart: bank_account.dart।']);
      }
      const ws = words(n), first = ws[0] || '';
      if (ws.length === 1 && first.length === 1 && !'ijknxy'.includes(first)) R.push([false, 'এক অক্ষরের নাম দেখে কিছু বোঝা যায় না। (loop এর i, j চলে।)']);
      ws.forEach(w => { if (ABBR[w]) R.push([false, `"${w}" অদ্ভুত ছোট রূপ। পুরো লেখো: "${ABBR[w]}"।`]); });
      if (VAGUE.has(n.toLowerCase()) || ws.some(w => VAGUE.has(w))) R.push([false, 'অস্পষ্ট নাম (data, value, temp ...)। কিসের? আরো নির্দিষ্ট করো: studentData না, studentNames।']);
      if (/\d$/.test(n) && k !== 'file') R.push([false, 'শেষে সংখ্যা (list1, list2)? পার্থক্যটা নামে লেখো: oldPrices, newPrices।']);
      if (k === 'bool' && !['is', 'has', 'can', 'should', 'was'].includes(first)) R.push([false, 'bool এর নাম is / has / can দিয়ে শুরু করলে প্রশ্নের মতো পড়া যায়: isPassed, hasTicket।']);
      if (k === 'list' && !/s$/.test(ws[ws.length - 1] || '')) R.push([false, 'অনেকগুলো জিনিসের তালিকা: নাম বহুবচন করো (শেষে s): students, prices।']);
      if (k === 'func' && !WORDS.some(w => w.k === 'v' && w.en === first) && !['is', 'has', 'can', 'to', 'on'].includes(first)) R.push([false, `function কাজ করে, তাই কাজের শব্দ দিয়ে শুরু করো: calculate, find, print, add ... ("${first}" কাজের শব্দ কিনা দেখো)।`]);
      return R;
    };
    el.innerHTML = `<div class="widget"><div class="w-title">নাম যাচাই</div>
      <div class="w-row"><select class="nl-k">${Object.entries(KIND).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select>
      <input class="err-q nl-in" placeholder="একটা নাম লেখো, যেমন: Student_Name বা totalPrice" aria-label="নাম লেখো" style="flex:1;min-width:12em"></div>
      <ul class="nl-res"></ul>
      <div class="w-title" style="margin-top:6px">শব্দ খোঁজো (বাংলা → ইংরেজি)</div>
      <input class="err-q nl-q" placeholder="বাংলায় লেখো: মোট, দাম, খোঁজো, খালি ..." aria-label="বাংলায় শব্দ খোঁজো">
      <div class="nl-words"></div>
      <p class="goal">শব্দে ক্লিক করলে উপরের বাক্সে যোগ হবে, আর সব রকম নামের রূপ দেখাবে।</p></div>`;
    const draw = () => {
      const n = $('.nl-in', el).value.trim(), k = $('.nl-k', el).value, R = check(n, k), ws = words(n.replace(/[^\x00-\x7F]/g, ' '));
      const good = R.length && R.every(r => r[0]);
      $('.nl-res', el).innerHTML = !n ? '<li class="goal">উপরে নাম লেখো, আর বাম পাশে বেছে নাও এটা কিসের নাম।</li>'
        : R.map(([ok, t]) => `<li class="${ok ? 'nl-ok' : 'nl-no'}">${ok ? '✓' : '✗'} ${esc(t)}</li>`).join('') +
          (ws.length ? `<li class="nl-sug">${good ? 'চমৎকার নাম!' : 'পরামর্শ'}: <code>${esc(make(ws, k))}</code>${k !== 'cls' && k !== 'file' ? `<br><small>অন্য রূপে: class <code>${esc(make(ws, 'cls'))}</code> · ফাইল <code>${esc(make(ws, 'file'))}</code> · bool <code>${esc(make(ws, 'bool'))}</code></small>` : ''}</li>` : '');
      const q = $('.nl-q', el).value.trim().toLowerCase();
      const rows = WORDS.filter(w => !q || w.bn.toLowerCase().includes(q) || w.en.toLowerCase().includes(q)).slice(0, q ? 40 : 24);
      const KL = { n: 'জিনিস', v: 'কাজ', a: 'অবস্থা' };
      $('.nl-words', el).innerHTML = rows.map(w => `<button class="nl-w" data-w="${esc(w.en)}"><span>${esc(w.bn)}</span><b class="mono">${esc(w.en)}</b><small>${KL[w.k]}</small></button>`).join('') || '<span class="goal">মেলেনি। অন্যভাবে লেখো, বা শব্দকোষ দেখো।</span>';
    };
    el.oninput = draw;
    el.onclick = e => {
      const w = e.target.closest('.nl-w'); if (!w) return;
      const inp = $('.nl-in', el), cur = words(inp.value.replace(/[^\x00-\x7F]/g, ' '));
      const kind = $('.nl-k', el).value;
      inp.value = make([...cur, ...words(w.dataset.w)], kind === 'file' ? 'file' : kind === 'cls' ? 'cls' : 'var');
      draw();
    };
    draw();
  },

  // nested loop ঘোরা: বাইরের i একবার ঘুরলে ভেতরের j পুরোটা। grid এ কোন ঘরে আছি, output, মোট কতবার
  loopLab(el) {
    let R = 3, C = 4, tri = false, k = 0, timer = null;
    el.innerHTML = `<div class="widget"><div class="w-title">Nested loop ঘোরা</div>
      <div class="w-row"><label>বাইরের (i) = <input class="lp-r" type="number" min="1" max="6" value="${R}"></label><label>ভেতরের (j) = <input class="lp-c" type="number" min="1" max="8" value="${C}"></label>
      <label style="font-family:var(--f-body)"><input class="lp-t" type="checkbox" style="width:auto"> ভেতরের loop শুধু i পর্যন্ত (j &lt;= i)</label></div>
      <div class="lp-grid"><div class="lp-code"></div><div><div class="lp-cells"></div><div class="lp-now"></div></div></div>
      <div class="tr-box"><div class="label">OUTPUT</div><pre class="tr-out lp-out"></pre></div><p class="tr-note lp-note"></p>
      <div class="tr-ctrl"><button class="btn" data-a="prev">← আগের ধাপ</button><button class="btn primary" data-a="next">পরের ধাপ →</button><button class="btn" data-a="play">▶ নিজে চলুক</button><button class="btn" data-a="reset">শুরু থেকে</button><span class="tr-count lp-count"></span></div></div>`;
    const steps = () => { const s = []; for (let i = 1; i <= R; i++) for (let j = 1; j <= (tri ? i : C); j++) s.push([i, j]); return s; };
    const draw = () => {
      const S = steps(); k = Math.min(k, S.length); const [ci, cj] = S[k - 1] || [0, 0];
      $('.lp-code', el).innerHTML = codeBlock(`for (int i = 1; i <= ${R}; i++) {\n  String line = '';\n  for (int j = 1; j <= ${tri ? 'i' : C}; j++) {\n    line += '($i,$j) ';\n  }\n  print(line);\n}`);
      $('.lp-cells', el).innerHTML = `<div class="lp-tab" style="grid-template-columns: auto repeat(${C}, minmax(0, 1fr))"><span></span>${[...Array(C)].map((_, j) => `<b class="lp-h">j=${j + 1}</b>`).join('')}${[...Array(R)].map((_, i) => `<b class="lp-h">i=${i + 1}</b>${[...Array(C)].map((_, j) => {
        const idx = S.findIndex(([a, b]) => a === i + 1 && b === j + 1), cls = idx < 0 ? 'off' : idx < k - 1 ? 'done' : idx === k - 1 ? 'cur' : '';
        return `<span class="lp-c ${cls}">${idx < 0 ? '' : bn(idx + 1)}</span>`; }).join('')}`).join('')}</div>`;
      const lines = []; for (let i = 1; i <= R; i++) { const row = S.slice(0, k).filter(([a]) => a === i); const full = row.length === (tri ? i : C); if (row.length && (full || i === ci)) lines.push(row.map(([a, b]) => `(${a},${b})`).join(' ') + (full ? '' : '  …')); }
      $('.lp-out', el).textContent = lines.join('\n');
      $('.lp-now', el).innerHTML = k ? `<span class="mono">i = <b>${ci}</b>, j = <b>${cj}</b></span>` : '<span class="goal">শুরু করতে "পরের ধাপ"</span>';
      $('.lp-count', el).textContent = `ভেতরের কাজ চলেছে ${bn(k)} / ${bn(S.length)} বার`;
      $('.lp-note', el).innerHTML = !k ? `মোট ${bn(S.length)} বার ঘুরবে: ${tri ? `1 + 2 + ... + ${R}` : `${R} × ${C}`}। খাতায় আগে হিসাব করো, তারপর মিলিয়ে দেখো।`
        : cj === 1 ? `বাইরের loop এ <b>i = ${ci}</b> হলো। ভেতরের loop আবার <b>j = 1</b> থেকে শুরু।`
        : cj === (tri ? ci : C) ? `ভেতরের loop এর শেষ ঘর (j = ${cj})। এরপর print, তারপর বাইরের i এক বাড়বে।` : `i একই থাকলো (${ci}), শুধু j বাড়লো।`;
    };
    const stop = () => { clearInterval(timer); timer = null; $('[data-a=play]', el).textContent = '▶ নিজে চলুক'; };
    el.onclick = e => {
      const a = e.target.closest('[data-a]')?.dataset.a; if (!a) return;
      const n = steps().length;
      if (a === 'next' && k < n) k++; if (a === 'prev' && k > 0) k--; if (a === 'reset') { k = 0; stop(); }
      if (a === 'play') { if (timer) stop(); else { if (k >= n) k = 0; e.target.textContent = '⏸ থামো'; timer = setInterval(() => { if (!el.isConnected || k >= steps().length) return stop(); k++; draw(); }, 700); } }
      draw();
    };
    el.oninput = e => {
      if (e.target.classList.contains('lp-r')) R = Math.max(1, Math.min(6, +e.target.value || 1));
      if (e.target.classList.contains('lp-c')) C = Math.max(1, Math.min(8, +e.target.value || 1));
      if (e.target.classList.contains('lp-t')) tri = e.target.checked;
      k = 0; stop(); draw();
    };
    draw();
  },

  // সিদ্ধান্তের গাছ (nested if): মান বদলাও, কোন পথে গেল রঙিন। তালিকা আসে TOPICS[arg].tree থেকে
  // tree: { inputs: [{k, label, type: 'range'|'bool', min, max, v}], root: {q, test(s), yes, no} বা পাতা {out} }
  ifTree(el) {
    const T = TOPICS[el.dataset.arg]?.tree; if (!T) return;
    const st = Object.fromEntries(T.inputs.map(x => [x.k, x.v]));
    el.innerHTML = `<div class="widget"><div class="w-title">সিদ্ধান্তের গাছ</div>
      <div class="w-row">${T.inputs.map(x => x.type === 'bool' ? `<label><input type="checkbox" data-k="${x.k}" ${x.v ? 'checked' : ''} style="width:auto"> ${esc(x.label)}</label>` : `<label>${esc(x.label)} <input type="range" data-k="${x.k}" min="${x.min}" max="${x.max}" value="${x.v}" style="width:8em"><b class="mono" data-show="${x.k}">${x.v}</b></label>`).join('')}</div>
      <div class="it-tree"></div><div class="it-code"></div><p class="tr-note it-note"></p></div>`;
    const node = (n, on, d) => n.out !== undefined
      ? `<div class="it-leaf ${on ? 'on' : ''}">${esc(n.out)}</div>`
      : (() => { const t = n.test(st); return `<div class="it-node ${on ? 'on' : ''}"><div class="it-q"><code>if (${esc(n.q)})</code>${on ? ` → <b class="tf ${t ? 'y' : 'n'}">${t}</b>` : ''}</div><div class="it-kids"><div class="it-br"><small>true হলে</small>${node(n.yes, on && t, d + 1)}</div><div class="it-br"><small>false হলে (else)</small>${node(n.no, on && !t, d + 1)}</div></div></div>`; })();
    const code = (n, ind) => n.out !== undefined ? `${ind}print('${n.out}');` : `${ind}if (${n.q}) {\n${code(n.yes, ind + '  ')}\n${ind}} else {\n${code(n.no, ind + '  ')}\n${ind}}`;
    const path = n => { const out = []; while (n.out === undefined) { const t = n.test(st); out.push(`${n.q} → ${t}`); n = t ? n.yes : n.no; } return [out, n.out]; };
    const draw = () => {
      $('.it-tree', el).innerHTML = node(T.root, true, 0);
      $('.it-code', el).innerHTML = codeBlock(T.inputs.map(x => x.type === 'bool' ? `bool ${x.k} = ${st[x.k]};` : `int ${x.k} = ${st[x.k]};`).join('\n') + '\n' + code(T.root, ''));
      const [steps, out] = path(T.root);
      $('.it-note', el).innerHTML = `পথ: ${steps.map(x => `<code>${esc(x)}</code>`).join(' → ')} → <b>${esc(out)}</b>`;
    };
    el.oninput = e => { const k = e.target.dataset.k; if (!k) return; st[k] = e.target.type === 'checkbox' ? e.target.checked : +e.target.value; const sh = el.querySelector(`[data-show="${k}"]`); if (sh) sh.textContent = st[k]; draw(); };
    draw();
  },

  // 2D / 3D grid: ঘরে ক্লিক করলে grid[r][c], সারি/কলাম রঙিন। যোগফল, কর্ণ, transpose। 3D তে তলা বদলাও
  gridLab(el) {
    const three = el.dataset.arg === '3d';
    let data = three ? [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]], [[13, 14, 15], [16, 17, 18]]] : [[5, 3, 8], [2, 9, 4], [7, 1, 6]];
    let L = 0, sel = null, op = '';
    const name = three ? 'building' : 'grid';
    el.innerHTML = `<div class="widget"><div class="w-title">${three ? '3D List: বিল্ডিং[তলা][সারি][কলাম]' : '2D List: grid[সারি][কলাম]'}</div>
      <p>${fmt(three ? 'প্রতিটা **তলা** একটা 2D grid। উপরে তলা বেছে নাও, তারপর ঘরে ক্লিক করো।' : 'যেকোনো ঘরে ক্লিক করো: সেই ঘরের ঠিকানা আর মান দেখাবে। নিচের বোতামগুলো দিয়ে loop এর কাজ দেখো।')}</p>
      ${three ? `<div class="w-row gl-floors">${data.map((_, f) => `<button class="chip" data-f="${f}">তলা ${f}</button>`).join('')}</div>` : ''}
      <div class="gd-wrap"><div class="gd"></div><div class="gd-info tr-note"></div></div>
      ${three ? '' : `<div class="w-row"><button class="btn" data-op="row">প্রতিটা সারির যোগফল</button><button class="btn" data-op="col">প্রতিটা কলামের যোগফল</button><button class="btn" data-op="diag">কর্ণ (diagonal)</button><button class="btn" data-op="t">উল্টে দাও (transpose)</button><button class="btn" data-op="reset">আগের মতো</button></div>`}
      <div class="gd-code"></div></div>`;
    const g = () => three ? data[L] : data;
    const draw = () => {
      const G = g(), R = G.length, C = G[0].length;
      el.querySelectorAll('[data-f]').forEach(b => b.classList.toggle('on', +b.dataset.f === L));
      const rs = op === 'row' ? G.map(r => r.reduce((a, b) => a + b, 0)) : null, cs = op === 'col' ? G[0].map((_, c) => G.reduce((a, r) => a + r[c], 0)) : null;
      $('.gd', el).innerHTML = `<div class="gd-tab" style="grid-template-columns: auto repeat(${C}, minmax(0, 1fr))${rs ? ' auto' : ''}"><span></span>${G[0].map((_, c) => `<b class="lp-h">[${c}]</b>`).join('')}${rs ? '<b class="lp-h">যোগ</b>' : ''}${G.map((row, r) => `<b class="lp-h">[${r}]</b>${row.map((v, c) => {
        const cls = sel && sel[0] === r && sel[1] === c ? 'cur' : sel && (sel[0] === r || sel[1] === c) ? 'line' : op === 'diag' && r === c ? 'cur' : '';
        return `<button class="gd-c ${cls}" data-r="${r}" data-c="${c}">${v}</button>`; }).join('')}${rs ? `<b class="gd-sum">${rs[r]}</b>` : ''}`).join('')}${cs ? `<b class="lp-h">যোগ</b>${cs.map(v => `<b class="gd-sum">${v}</b>`).join('')}` : ''}</div>`;
      const pre = three ? `${name}[${L}]` : name;
      $('.gd-info', el).innerHTML = sel ? `<code>${pre}[${sel[0]}][${sel[1]}]</code> = <b>${G[sel[0]][sel[1]]}</b><br><small>${three ? `তলা ${L}, ` : ''}সারি ${sel[0]} (রঙিন সারি), কলাম ${sel[1]} (রঙিন কলাম)। সারির সংখ্যা <code>${pre}.length</code> = ${R}, কলামের <code>${pre}[0].length</code> = ${C}।</small>`
        : `${three ? `<code>${name}.length</code> = ${data.length}টা তলা। ` : ''}একটা ঘরে ক্লিক করো।`;
      const CODE = {
        row: `for (int r = 0; r < ${name}.length; r++) {\n  int sum = 0;\n  for (int c = 0; c < ${name}[r].length; c++) {\n    sum += ${name}[r][c];\n  }\n  print('সারি $r: $sum');\n}`,
        col: `for (int c = 0; c < ${name}[0].length; c++) {\n  int sum = 0;\n  for (int r = 0; r < ${name}.length; r++) {\n    sum += ${name}[r][c];   // c একই, r বদলায়\n  }\n  print('কলাম $c: $sum');\n}`,
        diag: `int sum = 0;\nfor (int i = 0; i < ${name}.length; i++) {\n  sum += ${name}[i][i];   // সারি আর কলাম একই\n}\nprint(sum); // ${G.reduce((a, r, i) => a + (r[i] ?? 0), 0)}`,
        t: `// সারি হয়ে যায় কলাম: নতুন[c][r] = পুরানো[r][c]\nvar t = [\n  for (int c = 0; c < ${name}[0].length; c++)\n    [for (int r = 0; r < ${name}.length; r++) ${name}[r][c]]\n];`,
      };
      $('.gd-code', el).innerHTML = three ? codeBlock(`var building = [\n${data.map(f => '  [' + f.map(r => `[${r.join(', ')}]`).join(', ') + ']').join(',\n')}\n];\nprint(building[${L}]${sel ? `[${sel[0]}][${sel[1]}]` : ''});  // ${sel ? data[L][sel[0]][sel[1]] : `[${data[L].map(r => `[${r.join(', ')}]`).join(', ')}]`}\n\nfor (var floor in building) {\n  for (var row in floor) {\n    for (var room in row) {\n      // প্রতিটা ঘর একবার করে\n    }\n  }\n}`)
        : codeBlock(`var grid = [\n${data.map(r => `  [${r.join(', ')}],`).join('\n')}\n];\n${CODE[op] || `print(grid${sel ? `[${sel[0]}][${sel[1]}]` : '[1][2]'}); // ${sel ? G[sel[0]][sel[1]] : G[1][2]}`}`);
    };
    el.onclick = e => {
      const c = e.target.closest('.gd-c'), f = e.target.closest('[data-f]'), o = e.target.closest('[data-op]');
      if (c) sel = [+c.dataset.r, +c.dataset.c];
      else if (f) { L = +f.dataset.f; sel = null; }
      else if (o) {
        sel = null; op = o.dataset.op;
        if (op === 't') { data = data[0].map((_, c2) => data.map(r => r[c2])); }
        if (op === 'reset') { data = [[5, 3, 8], [2, 9, 4], [7, 1, 6]]; op = ''; }
      } else return;
      draw();
    };
    draw();
  },

  // && || ! খেলা: a, b, c বদলাও, সব হিসাব সাথে সাথে। একটা বেছে নিলে পুরো truth table, এখনকার সারি রঙিন
  logicLab(el) {
    const EX = [['a && b', (a, b) => a && b], ['a || b', (a, b) => a || b], ['!a', a => !a], ['!(a && b)', (a, b) => !(a && b)], ['!a || !b', (a, b) => !a || !b],
      ['!(a || b)', (a, b) => !(a || b)], ['!a && !b', (a, b) => !a && !b], ['a != b', (a, b) => a !== b], ['a && b || c', (a, b, c) => a && b || c], ['a && (b || c)', (a, b, c) => a && (b || c)]];
    const st = { a: true, b: false, c: false }; let sel = 0;
    el.innerHTML = `<div class="widget"><div class="w-title">Logic ল্যাব</div>
      <p>${fmt('a, b, c এর উপর ক্লিক করে true / false বদলাও। নিচের কোনো হিসাবে ক্লিক করলে তার পুরো **truth table** দেখাবে, এখনকার অবস্থার সারিটা রঙিন।')}</p>
      <div class="w-row lg-vars"></div><div class="lg-list"></div><div class="lg-table"></div></div>`;
    const tf = v => `<b class="tf ${v ? 'y' : 'n'}">${v}</b>`;
    const draw = () => {
      $('.lg-vars', el).innerHTML = ['a', 'b', 'c'].map(k => `<button class="btn lg-v ${st[k] ? 'on' : ''}" data-v="${k}"><span class="mono">${k} = </span>${tf(st[k])}</button>`).join('');
      $('.lg-list', el).innerHTML = EX.map(([t, f], i) => `<button class="lg-e ${i === sel ? 'sel' : ''}" data-e="${i}"><code>${esc(t)}</code> → ${tf(f(st.a, st.b, st.c))}</button>`).join('');
      const [t, f] = EX[sel], useC = t.includes('c'), useB = t.includes('b'), rows = [];
      for (const a of [true, false]) for (const b of useB ? [true, false] : [st.b]) for (const c of useC ? [true, false] : [st.c]) rows.push([a, b, c]);
      $('.lg-table', el).innerHTML = `<div class="tablewrap"><table class="t"><thead><tr><th>a</th>${useB ? '<th>b</th>' : ''}${useC ? '<th>c</th>' : ''}<th class="mono">${esc(t)}</th></tr></thead><tbody>${rows.map(([a, b, c]) => `<tr class="${a === st.a && (!useB || b === st.b) && (!useC || c === st.c) ? 'lg-now' : ''}"><td>${tf(a)}</td>${useB ? `<td>${tf(b)}</td>` : ''}${useC ? `<td>${tf(c)}</td>` : ''}<td>${tf(f(a, b, c))}</td></tr>`).join('')}</tbody></table></div>`;
    };
    el.onclick = e => {
      const v = e.target.closest('[data-v]'), x = e.target.closest('[data-e]');
      if (v) st[v.dataset.v] = !st[v.dataset.v]; else if (x) sel = +x.dataset.e; else return;
      draw();
    };
    draw();
  },

  // if-else এর পথ: নম্বর বদলাও, দেখো কোন শর্ত true হলো, কোথায় ঢুকলো, কোনগুলো দেখাই হলো না
  ifLab(el) {
    const SC = {
      chain: { name: 'else if শৃঙ্খল (ঠিক ক্রম)', chain: true, rows: [['marks >= 80', m => m >= 80, 'A+'], ['marks >= 60', m => m >= 60, 'A'], ['marks >= 33', m => m >= 33, 'পাস'], [null, () => true, 'ফেল']] },
      wrong: { name: 'else if শৃঙ্খল (ভুল ক্রম!)', chain: true, rows: [['marks >= 33', m => m >= 33, 'পাস'], ['marks >= 60', m => m >= 60, 'A'], ['marks >= 80', m => m >= 80, 'A+'], [null, () => true, 'ফেল']] },
      sep: { name: 'আলাদা আলাদা if (else ছাড়া)', chain: false, rows: [['marks >= 80', m => m >= 80, 'A+'], ['marks >= 60', m => m >= 60, 'A'], ['marks >= 33', m => m >= 33, 'পাস']] },
    };
    let k = 'chain', m = 72;
    el.innerHTML = `<div class="widget"><div class="w-title">শর্তের পথ</div>
      <div class="w-row"><select class="if-k">${Object.entries(SC).map(([key, v]) => `<option value="${key}">${v.name}</option>`).join('')}</select>
      <label>marks = <input class="if-m" type="range" min="0" max="100" value="${m}" style="width:10em"><b class="if-mv mono">${m}</b></label></div>
      <div class="if-rows"></div><div class="if-code"></div><div class="tr-box"><div class="label">OUTPUT</div><pre class="tr-out if-out"></pre></div><p class="tr-note if-note"></p></div>`;
    const draw = () => {
      const sc = SC[k], out = []; let hit = -1;
      const rows = sc.rows.map(([c, f, p], i) => {
        if (sc.chain && hit >= 0) return ['skip', c, p];
        const t = f(m);
        if (t) { out.push(p); if (sc.chain) hit = i; return ['yes', c, p]; }
        return ['no', c, p];
      });
      const LBL = { yes: 'true → ঢুকলো, প্রিন্ট', no: 'false → পরেরটা দেখো', skip: 'দেখাই হলো না' };
      $('.if-rows', el).innerHTML = rows.map(([st, c, p], i) => `<div class="if-row ${st}"><code>${c ? `${i && sc.chain ? '} else if' : 'if'} (${esc(c)})` : '} else'}</code><span>${c || st !== 'yes' ? LBL[st] : 'বাকি কোনোটা মেলেনি → else'}</span><b>${esc(p)}</b></div>`).join('');
      const code = sc.rows.map(([c, , p], i) => c ? `${i && sc.chain ? '} else if' : (i ? '}\nif' : 'if')} (${c}) {\n  print('${p}');` : `} else {\n  print('${p}');`).join('\n') + '\n}';
      $('.if-code', el).innerHTML = codeBlock(`int marks = ${m};\n${code}`);
      $('.if-out', el).textContent = out.join('\n') || '(কিছুই প্রিন্ট হয়নি)';
      $('.if-note', el).innerHTML = k === 'wrong' && m >= 60 ? `<b>Bug!</b> ${m} পেয়েও "পাস" দেখাচ্ছে, কারণ প্রথম শর্তেই true হয়ে থেমে গেছে। বড় শর্ত আগে দিতে হয়।`
        : k === 'sep' && out.length > 1 ? `<b>খেয়াল করো:</b> else নেই বলে প্রতিটা if আলাদা করে চেক হলো, তাই ${bn(out.length)}টা লাইন প্রিন্ট হলো। একটাই চাইলে else if লাগবে।`
        : sc.chain ? 'একটা শৃঙ্খলে সর্বোচ্চ একটা ব্লক চলে। প্রথম true পেলেই বাকিগুলো আর দেখাই হয় না।' : 'আলাদা if গুলো একটা আরেকটার উপর নির্ভর করে না, সবগুলোই চেক হয়।';
    };
    $('.if-k', el).onchange = e => { k = e.target.value; draw(); };
    $('.if-m', el).oninput = e => { m = +e.target.value; $('.if-mv', el).textContent = m; draw(); };
    draw();
  },

  // মেমরি দেখো: বামে নাম (variable), ডানে মেমরিতে আসল জিনিস (object), মাঝে তীর।
  // তালিকা আসে TOPICS[arg].mem থেকে। ধাপ: { l, n, set: {নাম: ঠিকানা | 'null'}, ty: {নাম: type}, obj: {ঠিকানা: [type, মান]}, mut: {ঠিকানা: মান}, p, err }
  memLab(el) {
    const list = TOPICS[el.dataset.arg]?.mem || []; if (!list.length) return;
    let sc = 0, i = 0;
    const COL = ['#0B857C', '#0466AE', '#B3302D', '#915C00', '#7A3FB0', '#1B7A4B'];
    el.innerHTML = `<div class="widget"><div class="w-title">মেমরি দেখো</div>
      ${list.length > 1 ? `<div class="w-row">${list.map((x, k) => `<button class="chip" data-s="${k}">${esc(x.title)}</button>`).join('')}</div>` : `<b>${esc(list[0].title)}</b>`}
      <div class="mem-grid"><pre class="tr-code mem-code"></pre>
        <div class="mem-wrap"><svg class="mem-svg" aria-hidden="true"></svg><div class="mem-col mem-names"><div class="label">নাম (variable)</div><div class="mem-list mem-vars"></div></div><div class="mem-col"><div class="label">মেমরি (আসল জিনিস)</div><div class="mem-list mem-objs"></div></div></div></div>
      <div class="mem-err" hidden></div><div class="tr-box"><div class="label">OUTPUT</div><pre class="tr-out mem-out"></pre></div>
      <p class="tr-note mem-note"></p>
      <div class="tr-ctrl"><button class="btn" data-a="prev">← আগের ধাপ</button><button class="btn primary" data-a="next">পরের ধাপ →</button><button class="btn" data-a="reset">শুরু থেকে</button><span class="tr-count mem-count"></span></div></div>`;
    const state = () => {
      const S = list[sc], vars = new Map(), types = {}, objs = new Map(), out = [];
      let gone = new Set(), err = '';
      for (let k = 0; k <= i; k++) {
        const st = S.steps[k];
        gone.forEach(a => objs.delete(a));                      // আগের ধাপের garbage এখন মুছে গেছে
        Object.entries(st.obj || {}).forEach(([a, [t, v, refs]]) => objs.set(a, { t, v, refs: refs || [], ch: k === i }));
        Object.entries(st.mut || {}).forEach(([a, v]) => { const o = objs.get(a); if (o) objs.set(a, { ...o, v, ch: k === i }); });
        Object.entries(st.ty || {}).forEach(([n, t]) => types[n] = t);
        Object.entries(st.set || {}).forEach(([n, a]) => { vars.delete(n); if (a !== undefined) vars.set(n, { a, ch: k === i }); });
        (st.del || []).forEach(n => vars.delete(n));
        if (st.p !== undefined) out.push(st.p);
        err = st.err || '';
        // নাম থেকে যাদের দেখা যায়, আর তাদের ভেতর থেকে যাদের দেখা যায় (list এর ভেতরের list), সবাই বেঁচে
        const used = new Set([...vars.values()].map(v => v.a)), todo = [...used];
        while (todo.length) for (const r of objs.get(todo.pop())?.refs || []) if (!used.has(r)) { used.add(r); todo.push(r); }
        gone = new Set([...objs.keys()].filter(a => !used.has(a)));
      }
      if (i < S.steps.length) { /* শেষ ধাপের garbage দেখাই, মুছি না */ }
      return { S, vars, types, objs, out, gone, err };
    };
    const color = a => a === 'null' ? 'var(--muted)' : COL[(parseInt(String(a).replace(/\D/g, '')) || 0) % COL.length];
    const arrows = () => {
      const wrap = $('.mem-wrap', el), svg = $('.mem-svg', el); if (!wrap.isConnected) return;
      const r = wrap.getBoundingClientRect();
      svg.setAttribute('viewBox', `0 0 ${r.width} ${r.height}`); svg.setAttribute('width', r.width); svg.setAttribute('height', r.height);
      const inner = [...el.querySelectorAll('.mem-obj[data-refs]')].flatMap(o => o.dataset.refs.split(' ').filter(Boolean).map((t, k) => {
        const to = el.querySelector(`.mem-obj[data-addr="${t}"]`); if (!to) return '';
        const a = o.getBoundingClientRect(), b = to.getBoundingClientRect(), x1 = a.right - r.left, y1 = a.top + 14 + k * 8 - r.top, x2 = b.right - r.left + 2, y2 = b.top + 14 - r.top, bulge = Math.max(x1, x2) + 26 + k * 6;
        const c = color(t);
        return `<path d="M${x1},${y1} C${bulge},${y1} ${bulge},${y2} ${x2},${y2}" fill="none" stroke="${c}" stroke-width="1.8" stroke-dasharray="5 3"/><circle cx="${x2}" cy="${y2}" r="3.5" fill="${c}"/>`;
      })).join('');
      svg.innerHTML = inner + [...el.querySelectorAll('.mem-var[data-to]')].map(v => {
        const t = el.querySelector(`.mem-obj[data-addr="${v.dataset.to}"]`); if (!t) return '';
        const a = v.getBoundingClientRect(), b = t.getBoundingClientRect();
        const x1 = a.right - r.left, y1 = a.top + a.height / 2 - r.top, x2 = b.left - r.left - 4, y2 = b.top + Math.min(b.height / 2, 22) - r.top, mx = (x1 + x2) / 2;
        const c = color(v.dataset.to);
        return `<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" fill="none" stroke="${c}" stroke-width="2.2"/><circle cx="${x2}" cy="${y2}" r="4" fill="${c}"/>`;
      }).join('');
    };
    const draw = () => {
      const { S, vars, types, objs, out, gone, err } = state(), st = S.steps[i];
      el.querySelectorAll('[data-s]').forEach(b => b.classList.toggle('on', +b.dataset.s === sc));
      $('.mem-code', el).innerHTML = S.code.map((l, k) => `<span class="tr-line ${k === st.l ? 'cur' : ''}"><span class="ln">${k + 1}</span>${l ? hl(l) : ' '}</span>`).join('');
      $('.mem-vars', el).innerHTML = [...vars].map(([n, v]) => `<div class="mem-var ${v.ch ? 'ch' : ''}" data-to="${esc(v.a)}" style="border-color:${color(v.a)}"><b class="mono">${esc(n)}</b>${types[n] ? `<small class="mono">${esc(types[n])}</small>` : ''}</div>`).join('') || '<span class="goal">এখনো কোনো নাম নেই</span>';
      const hasNull = [...vars.values()].some(v => v.a === 'null');
      $('.mem-objs', el).innerHTML = (hasNull ? `<div class="mem-obj null" data-addr="null"><small>null</small><b class="mono">কিছুই না</b></div>` : '') +
        [...objs].map(([a, o]) => `<div class="mem-obj ${o.ch ? 'ch' : ''} ${gone.has(a) ? 'gone' : ''}" data-addr="${esc(a)}" ${o.refs.length ? `data-refs="${esc(o.refs.join(' '))}"` : ''} style="border-color:${color(a)}"><small><span class="mono">${esc(a)}</span> · ${esc(o.t)}</small><b class="mono">${esc(o.v)}</b>${gone.has(a) ? '<small class="gone-l">কেউ দেখছে না → garbage, মুছে যাবে</small>' : ''}</div>`).join('');
      $('.mem-out', el).textContent = out.join('\n');
      const e = $('.mem-err', el); e.hidden = !err; e.innerHTML = err ? `<b>Error!</b> ${fmt(err)}` : '';
      $('.mem-note', el).innerHTML = fmt(st.n);
      $('.mem-count', el).textContent = `ধাপ ${bn(i + 1)} / ${bn(S.steps.length)}`;
      requestAnimationFrame(arrows);
    };
    el.onclick = e => {
      const s = e.target.closest('[data-s]'), a = e.target.closest('[data-a]')?.dataset.a;
      if (s) { sc = +s.dataset.s; i = 0; }
      else if (a === 'next' && i < list[sc].steps.length - 1) i++;
      else if (a === 'prev' && i > 0) i--;
      else if (a === 'reset') i = 0;
      else return;
      draw();
    };
    const ro = window.ResizeObserver ? new ResizeObserver(() => el.isConnected ? arrows() : ro.disconnect()) : null;
    ro?.observe($('.mem-wrap', el));
    draw();
  },

  // Shortcut পাতা: editor (VS Code / Android Studio / দুইটা) আর কম্পিউটার (Windows / Linux / Mac) বেছে নাও
  shortcutLab(el) {
    const K = TOPICS.shortcuts?.keys || [];
    const CAT = { edit: 'সম্পাদনা', find: 'খোঁজা আর যাওয়া', code: 'কোডের সাহায্য', run: 'চালানো আর Debug', view: 'জানালা আর ফাইল', flutter: 'Flutter' };
    const ED = { vs: 'VS Code', as: 'Android Studio / IntelliJ', both: 'দুইটা পাশাপাশি' }, OS = { 0: 'Windows', 1: 'Linux', 2: 'Mac' };
    let pref = { ed: 'vs', os: /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent) ? 2 : /Linux/.test(navigator.platform || '') ? 1 : 0 };
    try { pref = { ...pref, ...JSON.parse(localStorage.getItem(KEY + '-sc') || '{}') }; } catch (e) {}
    el.innerHTML = `<div class="widget sc"><div class="w-title">Shortcut</div>
      <div class="sc-ctrl"><div class="w-row">${Object.entries(ED).map(([k, v]) => `<button class="chip" data-ed="${k}">${v}</button>`).join('')}</div>
      <div class="w-row">${Object.entries(OS).map(([k, v]) => `<button class="chip" data-os="${k}">${v}</button>`).join('')}</div>
      <input class="err-q" type="search" placeholder="খোঁজো: format, debug, ফাইল, comment ..." aria-label="shortcut খোঁজো"></div>
      <div class="sc-body"></div></div>`;
    const keys = s => s ? s.split(', ').map(g => g.split(' + ').map(k => `<kbd>${esc(k)}</kbd>`).join('<span class="sc-plus">+</span>')).join('<span class="sc-then">তারপর</span>') : '<span class="goal">ডিফল্ট নেই</span>';
    const pick = (row, ed) => { const r = row[ed]; return r[pref.os] ?? r[0]; };
    const draw = () => {
      el.querySelectorAll('[data-ed]').forEach(b => b.classList.toggle('on', b.dataset.ed === pref.ed));
      el.querySelectorAll('[data-os]').forEach(b => b.classList.toggle('on', +b.dataset.os === pref.os));
      const v = $('.err-q', el).value.trim().toLowerCase(), both = pref.ed === 'both';
      const rows = K.filter(r => !v || (r.t + ' ' + (r.tip || '') + ' ' + r.vs.join(' ') + ' ' + r.as.join(' ') + ' ' + CAT[r.c]).toLowerCase().includes(v));
      $('.sc-body', el).innerHTML = Object.keys(CAT).map(c => {
        const rs = rows.filter(r => r.c === c); if (!rs.length) return '';
        return `<h4>${CAT[c]}</h4><div class="tablewrap"><table class="t sc-t"><thead><tr><th>কাজ</th>${both ? `<th>VS Code</th><th>Android Studio</th>` : `<th>${ED[pref.ed]} · ${OS[pref.os]}</th>`}</tr></thead><tbody>${rs.map(r => `<tr><td>${esc(r.t)}${r.tip ? `<br><small class="goal">${esc(r.tip)}</small>` : ''}</td>${both ? `<td>${keys(pick(r, 'vs'))}</td><td>${keys(pick(r, 'as'))}</td>` : `<td>${keys(pick(r, pref.ed))}</td>`}</tr>`).join('')}</tbody></table></div>`;
      }).join('') || '<p class="goal">মেলেনি। অন্য শব্দে খোঁজো (ইংরেজি বা বাংলা)।</p>';
    };
    el.querySelector('.sc-ctrl').onclick = e => {
      const b = e.target.closest('[data-ed],[data-os]'); if (!b) return;
      if (b.dataset.ed) pref.ed = b.dataset.ed; else pref.os = +b.dataset.os;
      try { localStorage.setItem(KEY + '-sc', JSON.stringify(pref)); } catch (e) {}
      draw();
    };
    $('.err-q', el).oninput = draw;
    draw();
  },

  // কিবোর্ড: চিহ্নগুলো কোথায়, নাম কী, Dart এ কী কাজে। নিচে আসল কিবোর্ডে চাপার খেলা
  keyboard(el) {
    const SYM = {
      '{': ['কোঁকড়া বন্ধনী খোলা', 'ব্লক শুরু: main, if, loop, function এর ভেতরের কাজ', 1], '}': ['কোঁকড়া বন্ধনী বন্ধ', 'ব্লক শেষ। প্রতিটা { এর একটা } লাগবে', 1],
      '[': ['তৃতীয় বন্ধনী খোলা', 'List: [1, 2, 3], আর index: list[0]', 0], ']': ['তৃতীয় বন্ধনী বন্ধ', 'List আর index শেষ', 0],
      '(': ['প্রথম বন্ধনী খোলা', 'function ডাকা: print(...), শর্ত: if (...)', 1], ')': ['প্রথম বন্ধনী বন্ধ', 'প্রতিটা ( এর একটা )', 1],
      ';': ['সেমিকোলন', 'প্রতিটা নির্দেশের শেষে দাঁড়ি', 0], ':': ['কোলন', 'Map এ key: value, switch এর case:', 1],
      "'": ['সিঙ্গেল কোট', "লেখা (String): 'হ্যালো'", 0], '"': ['ডাবল কোট', 'লেখা: "হ্যালো" (একই কাজ)', 1],
      '=': ['সমান', 'মান রাখা: x = 5। তুলনা হলে == দুইটা', 0], '+': ['যোগ', 'যোগ, লেখা জোড়া, i++', 1], '-': ['বিয়োগ / হাইফেন', 'বিয়োগ, i--', 0],
      '*': ['তারকা', 'গুণ', 1], '/': ['স্ল্যাশ', 'ভাগ, আর // দিয়ে comment', 0], '%': ['পার্সেন্ট', 'ভাগশেষ: 7 % 2 = 1', 1],
      '<': ['ছোট', 'তুলনা, আর List<int> এর type', 1], '>': ['বড়', 'তুলনা, => (arrow)', 1], '!': ['বিস্ময়', 'না (!), সমান না (!=), null না (x!)', 1],
      '&': ['অ্যান্ড', '&& মানে "এবং"', 1], '|': ['পাইপ', '|| মানে "অথবা"', 1], '?': ['প্রশ্নবোধক', 'null হতে পারে: String?, আর ?? ও ?:', 1],
      '$': ['ডলার', "লেখার ভেতরে মান: 'বয়স $age'", 1], '_': ['আন্ডারস্কোর', 'নামে: my_app, আর _private', 1], '.': ['ডট', 'ভেতরের জিনিস: name.length, 3.14', 0],
      ',': ['কমা', 'আলাদা করা: [1, 2], f(a, b)', 0], '\\': ['ব্যাকস্ল্যাশ', "বিশেষ অক্ষর: '\\n' মানে নতুন লাইন", 0], '~': ['টিল্ড', '~/ মানে পূর্ণ ভাগফল', 1],
      '#': ['হ্যাশ', 'Markdown এ শিরোনাম, Dart এ কম', 1], '@': ['অ্যাট', '@override', 1],
    };
    const ROWS = [['`~', '1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '=+'], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[{', ']}', '\\|'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';:', "'\""], ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',<', '.>', '/?']];
    const key = k => { const [lo, up] = [...k]; const hot = SYM[lo] || SYM[up]; return `<button class="kb-key${hot ? ' hot' : ''}" data-k="${esc(k)}">${up ? `<small>${esc(up)}</small>` : ''}<span>${esc(lo)}</span></button>`; };
    el.innerHTML = `<div class="widget"><div class="w-title">কোডের চিহ্নগুলো কোথায়?</div>
      <p>রঙিন বোতামগুলো কোডে বেশি লাগে। ক্লিক করে দেখো নাম আর কাজ। উপরে ছোট করে লেখা চিহ্নটা পেতে <b>Shift</b> চেপে ধরে ওই বোতাম চাপো।</p>
      <div class="kb">${ROWS.map((r, i) => `<div class="kb-row" style="padding-left:${i * 0.6}em">${i === 3 ? '<span class="kb-key wide">Shift</span>' : ''}${r.map(key).join('')}</div>`).join('')}</div>
      <div class="kb-info tr-note">একটা রঙিন বোতামে ক্লিক করো।</div>
      <div class="w-title" style="margin-top:6px">খেলা: আসল কিবোর্ডে চাপো</div>
      <div class="w-row"><span>এই চিহ্নটা টাইপ করো:</span><b class="kb-target mono"></b><input class="kb-in" maxlength="2" autocomplete="off" aria-label="এখানে টাইপ করো" placeholder="এখানে"><span class="kb-score goal"></span></div></div>`;
    const info = $('.kb-info', el);
    el.querySelector('.kb').onclick = e => {
      const b = e.target.closest('.kb-key[data-k]'); if (!b) return;
      const [lo, up] = [...b.dataset.k], parts = [lo, up].filter(c => c && SYM[c]);
      info.innerHTML = parts.length ? parts.map(c => `<b class="mono">${esc(c)}</b> ${esc(SYM[c][0])}${SYM[c][2] ? ' (Shift লাগে)' : ''}: ${esc(SYM[c][1])}`).join('<br>') : `<b class="mono">${esc(lo)}</b>: সাধারণ অক্ষর`;
    };
    const list = Object.keys(SYM); let target, score = 0, tries = 0;
    const nextT = () => { target = list[Math.floor(Math.random() * list.length)]; $('.kb-target', el).textContent = `${target}  (${SYM[target][0]})`; };
    $('.kb-in', el).oninput = e => {
      const v = e.target.value.slice(-1); e.target.value = ''; if (!v) return; tries++;
      if (v === target) { score++; e.target.classList.remove('bad'); nextT(); } else e.target.classList.add('bad');
      $('.kb-score', el).textContent = `${bn(score)} / ${bn(tries)} ঠিক`;
    };
    nextT();
  },

  // ভুল খোঁজো: কোডের যে লাইনে ভুল, সেটায় ক্লিক। তালিকা আসে TOPICS.debugging.bugs থেকে
  bugHunt(el) {
    const B = TOPICS.debugging?.bugs || []; let i = 0, found = 0, miss = 0;
    el.innerHTML = `<div class="widget"><div class="w-title">ভুল খোঁজো</div>
      <p class="bh-q"></p><pre class="tr-code bh-code"></pre><p class="tr-note bh-msg">ভুল লাইনে ক্লিক করো।</p>
      <div class="w-row"><button class="btn" data-b="prev">← আগের</button><button class="btn primary" data-b="next">পরেরটা →</button><span class="fc-tag bh-n"></span></div></div>`;
    const draw = () => {
      const b = B[i];
      $('.bh-q', el).innerHTML = `<b>${bn(i + 1)}/${bn(B.length)}.</b> ${fmt(b.q)}`;
      $('.bh-code', el).innerHTML = b.code.map((l, k) => `<span class="tr-line bh-line" data-k="${k}"><span class="ln">${k + 1}</span>${l ? hl(l) : ' '}</span>`).join('');
      $('.bh-msg', el).textContent = 'ভুল লাইনে ক্লিক করো।';
      $('.bh-n', el).textContent = `পেয়েছ ${bn(found)}, ভুল ক্লিক ${bn(miss)}`;
    };
    el.onclick = e => {
      const nav = e.target.closest('[data-b]');
      if (nav) { i = (i + (nav.dataset.b === 'next' ? 1 : B.length - 1)) % B.length; return draw(); }
      const line = e.target.closest('.bh-line'); if (!line || el.querySelector('.bh-line.ok')) return;
      const b = B[i], k = +line.dataset.k;
      if (k === b.bug) {
        line.classList.add('ok'); found++;
        $('.bh-msg', el).innerHTML = `<b>পেয়েছ!</b> ${fmt(b.why)}<br>ঠিক লাইন: <code>${esc(b.fix)}</code>`;
      } else { line.classList.add('no'); miss++; $('.bh-msg', el).textContent = 'এই লাইনটা ঠিক আছে। আবার ভাবো: ছোট একটা উদাহরণ নিয়ে মাথায় চালিয়ে দেখো।'; }
      $('.bh-n', el).textContent = `পেয়েছ ${bn(found)}, ভুল ক্লিক ${bn(miss)}`;
    };
    if (B.length) draw();
  },

  // শব্দকোষ: TOPICS.glossary.words থেকে, ইংরেজি বা বাংলা দিয়ে খোঁজা
  glossLab(el) {
    const G = TOPICS.glossary?.words || [];
    el.innerHTML = `<div class="widget"><div class="w-title">শব্দ খোঁজো</div>
      <input class="err-q" type="search" placeholder="ইংরেজি বা বাংলায় লেখো, যেমন: return, মান, index" aria-label="শব্দ খোঁজো">
      <span class="fc-tag gl-n"></span><div class="gl-list"></div></div>`;
    const q = $('.err-q', el), list = $('.gl-list', el);
    const draw = () => {
      const v = q.value.trim().toLowerCase();
      const rows = G.filter(g => !v || (g.en + ' ' + g.bn + ' ' + g.m).toLowerCase().includes(v));
      $('.gl-n', el).textContent = `${bn(rows.length)}টা শব্দ`;
      list.innerHTML = rows.map(g => `<div class="gl-row"><div class="gl-h"><b class="mono">${esc(g.en)}</b><span class="goal">${esc(g.say)}</span><b>${esc(g.bn)}</b></div><p>${fmt(g.m)}</p>${g.ex ? `<code class="gl-ex">${esc(g.ex)}</code>` : ''}</div>`).join('') || '<p class="goal">মেলেনি। অন্যভাবে লেখো, অথবা ছোট করে।</p>';
    };
    q.oninput = draw; draw();
  },

  // Error অভিধান: TOPICS.errors.dict থেকে কার্ড, উপরে খোঁজার বাক্স। পুরো Error মেসেজ পেস্ট করলেও মেলে
  errLab(el) {
    const D = TOPICS.errors?.dict || [];
    const KIND = { run: ['চলার সময়', 'h'], compile: ['চালানোর আগে', 'm'] };
    el.innerHTML = `<div class="widget"><div class="w-title">Error খোঁজো</div>
      <input class="err-q" type="search" placeholder="Error মেসেজ বা নাম পেস্ট করো, যেমন: Null check operator" aria-label="Error খোঁজো">
      <div class="w-row"><button class="chip on" data-k="all">সব (${bn(D.length)})</button><button class="chip" data-k="run">চলার সময়</button><button class="chip" data-k="compile">চালানোর আগে</button><span class="fc-tag" id="err-n"></span></div>
      <div class="err-list"></div></div>`;
    const list = $('.err-list', el), q = $('.err-q', el);
    let kind = 'all';
    const card = (e, open) => `<details class="err-card"${open ? ' open' : ''}><summary><b class="mono">${esc(e.n)}</b><span class="lvl ${KIND[e.k][1]}">${KIND[e.k][0]}</span></summary>
      <div class="err-msg mono">${esc(e.msg)}</div>
      <p><b>মানে:</b> ${fmt(e.m)}</p>
      <div class="err-pair"><div><small>যে কোডে হয়</small>${codeBlock(e.bad)}</div><div><small>ঠিক করা</small>${codeBlock(e.good)}</div></div>
      <p><b>কী করবে:</b> ${fmt(e.fix)}</p></details>`;
    // খোঁজা: প্রশ্নের শব্দগুলো কয়টা মেলে তা দিয়ে সাজাও। ফাইলের path, লাইন নম্বর, ছোট শব্দ বাদ
    const words = s => (s.toLowerCase().replace(/file:\/\/\S+|\S+\.dart(:\d+)*|#\d+/g, ' ').match(/[a-z_']{3,}|[\u0980-\u09ff]{2,}/g) || []).map(w => w.replace(/^'+|'+$/g, '')).filter(w => w.length > 2 && !STOP.has(w));
    const STOP = new Set(['error', 'the', 'this', 'that', 'type', 'for', 'and', 'was', 'has', 'been', 'with', 'not', 'unhandled', 'exception', 'main', 'bin', 'dart']);
    const hay = D.map(e => (e.n + ' ' + e.msg + ' ' + e.tags + ' ' + e.m).toLowerCase());
    const draw = () => {
      const ws = [...new Set(words(q.value))];
      let rows = D.map((e, i) => ({ e, s: ws.reduce((a, w) => a + (hay[i].includes(w) ? (e.msg.toLowerCase().includes(w) ? 2 : 1) : 0), 0) }))
        .filter(r => kind === 'all' || r.e.k === kind);
      // সবচেয়ে ভালো মিলের অর্ধেকের কম হলে দেখিও না, নইলে সাধারণ শব্দে সব মিলে যায়
      if (ws.length) { const best = Math.max(0, ...rows.map(r => r.s)); rows = rows.filter(r => r.s > 0 && r.s >= best / 2).sort((a, b) => b.s - a.s); }
      $('#err-n', el).textContent = ws.length ? `${bn(rows.length)}টা মিলেছে` : '';
      list.innerHTML = rows.length ? rows.map((r, i) => card(r.e, ws.length && i === 0)).join('') : '<p class="goal">কিছু মেলেনি। মেসেজের মূল অংশটা (Error এর নাম বা প্রথম লাইন) দিয়ে খোঁজো।</p>';
    };
    q.oninput = draw;
    el.querySelector('.w-row').onclick = e => {
      const b = e.target.closest('[data-k]'); if (!b) return;
      kind = b.dataset.k; el.querySelectorAll('[data-k]').forEach(c => c.classList.toggle('on', c === b)); draw();
    };
    draw();
  },

  // নকল Git: পাশাপাশি ৩টা ঘর: কাজের ফোল্ডার → staging → commit (অ্যালবাম)। ফাইলের লেখা = লাইনের list
  gitLab(el) {
    let S, edits, restored;
    const fresh = () => ({
      init: false, head: 'main', branches: { main: null }, commits: [], index: {}, remote: null, pushed: {}, upstream: {},
      work: { 'hello.dart': ['void main() {', "  print('আমার গেম');", '}'], 'README.md': ['# আমার প্রথম গেম'] },
    });
    const MIS = [
      ['{{git init}}: অ্যালবাম খোলো', () => S.init],
      ['{{git status}}: অবস্থা জিজ্ঞেস করো', c => c[1] === 'status' && S.init],
      ['{{git add .}}: সব ফাইল ফ্রেমে আনো', () => S.init && Object.keys(S.work).length && Object.keys(S.work).every(n => eq(S.index[n], S.work[n]))],
      ['প্রথম ছবি: {{git commit -m "প্রথম কোড"}}', () => S.commits.length >= 1],
      ['{{edit hello.dart}} দিয়ে কোড বদলাও, তারপর {{git diff}} দিয়ে দেখো কী বদলালো', c => c[1] === 'diff' && unstaged().length > 0],
      ['বদলটা add আর commit করো (দ্বিতীয় ছবি)', () => S.commits.length >= 2],
      ['{{git log --oneline}}: অ্যালবাম উল্টাও', c => c[1] === 'log' && S.commits.length > 0],
      ['ইচ্ছা করে কোড নষ্ট করো ({{edit}}), তারপর {{git restore hello.dart}} দিয়ে ফেরত আনো', () => restored],
      ['{{git switch -c experiment}}: খসড়া খাতা খোলো, সেখানে একটা commit করো', () => S.commits.some(c => c.br === 'experiment')],
      ['{{git switch main}} এ ফিরে {{git merge experiment}} দিয়ে খসড়া মূল খাতায় আনো', () => S.branches.main && ancestors(S.branches.main).some(id => byId(id).br === 'experiment')],
    ];
    el.innerHTML = `<div class="widget"><div class="w-title">নকল Git</div>
      <p>${fmt('নিচের terminal এ git command লেখো, আর পাশের ঘরগুলোতে দেখো ফাইল কোথায় যাচ্ছে। কোড বদলানোর জন্য বিশেষ command: {{edit hello.dart}}। সব command দেখতে {{help}}।')}</p>
      <div class="git-viz"></div>
      <div class="term"><div class="term-out"></div><label class="term-in"><span class="ps"></span><input spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="command লেখো"></label></div>
      <div class="term-mis"><b>মিশন</b> (গল্পের ক্রমে)<ol>${MIS.map(m => `<li>${fmt(m[0])}</li>`).join('')}</ol></div>
      <div class="w-row"><button class="btn" data-t="reset">শুরু থেকে</button></div></div>`;
    const out = $('.term-out', el), inp = $('input', el), ps = $('.term-in .ps', el), viz = $('.git-viz', el), lis = el.querySelectorAll('.term-mis li');

    const eq = (a, b) => (a === undefined && b === undefined) || (!!a && !!b && a.join('\n') === b.join('\n'));
    const copy = t => Object.fromEntries(Object.entries(t).map(([k, v]) => [k, [...v]]));
    const byId = id => S.commits.find(c => c.id === id);
    const headId = () => S.branches[S.head];
    const tree = id => id ? byId(id).tree : {};
    const ancestors = id => { const seen = [], q = id ? [id] : []; while (q.length) { const x = q.shift(); if (seen.includes(x)) continue; seen.push(x); const c = byId(x); if (c.parent) q.push(c.parent); if (c.parent2) q.push(c.parent2); } return seen; };
    const names = (...ts) => [...new Set(ts.flatMap(t => Object.keys(t)))].sort();
    const staged = () => names(S.index, tree(headId())).filter(n => !eq(S.index[n], tree(headId())[n])).map(n => [!tree(headId())[n] ? 'new file' : !S.index[n] ? 'deleted' : 'modified', n]);
    const unstaged = () => Object.keys(S.index).filter(n => !eq(S.work[n], S.index[n])).map(n => [!S.work[n] ? 'deleted' : 'modified', n]);
    const untracked = () => Object.keys(S.work).filter(n => !(n in S.index)).sort();
    const newId = msg => { let h = 2166136261; for (const ch of msg + S.commits.length + Date.now()) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0; return h.toString(16).padStart(8, '0').slice(0, 7); };
    const labels = id => [...(S.branches[S.head] === id ? [`HEAD -> ${S.head}`] : []), ...Object.entries(S.branches).filter(([b, c]) => c === id && b !== S.head).map(([b]) => b), ...Object.entries(S.pushed).filter(([, c]) => c === id).map(([b]) => 'origin/' + b)];
    const prompt = () => `rafi@pc:~/my_app${S.init ? ` (${S.head})` : ''}$`;
    const print = (html, cls = '') => { const d = document.createElement('div'); if (cls) d.className = cls; d.innerHTML = html; out.append(d); while (out.children.length > 300) out.firstChild.remove(); };
    const say = (t, cls) => print(esc(t), cls), err = t => say(t, 'err');

    const draw = () => {
      const st = Object.fromEntries(staged().map(([t, n]) => [n, t])), un = Object.fromEntries(unstaged().map(([t, n]) => [n, t])), ut = untracked();
      const tag = (t, c) => `<span class="gtag ${c}">${t}</span>`;
      const work = names(S.work, S.index).map(n => `<li><span class="mono">${esc(n)}</span>${!S.init ? '' : ut.includes(n) ? tag('নতুন, Git চেনে না', 'new') : un[n] === 'deleted' ? tag('মুছে গেছে', 'del') : un[n] ? tag('বদলেছে', 'mod') : tag('ছবির সাথে মিলে আছে', 'ok')}</li>`).join('');
      const stg = Object.entries(st).map(([n, t]) => `<li><span class="mono">${esc(n)}</span>${tag({ 'new file': 'নতুন', modified: 'বদল', deleted: 'মোছা' }[t], t === 'deleted' ? 'del' : 'new')}</li>`).join('');
      const cm = ancestors(headId()).concat(S.commits.map(c => c.id).filter(id => !ancestors(headId()).includes(id))).map(byId)
        .sort((a, b) => b.n - a.n).map(c => `<li class="${ancestors(headId()).includes(c.id) ? '' : 'off'}"><span class="mono gid">${c.id}</span> ${esc(c.msg)}${labels(c.id).map(l => ` ${tag(esc(l), l.startsWith('HEAD') ? 'head' : l.startsWith('origin') ? 'remote' : 'br')}`).join('')}</li>`).join('');
      viz.innerHTML = `<div class="gbox"><b>১. কাজের ফোল্ডার</b><small>তুমি এখন যা লিখছো</small><ul>${work || '<li class="off">খালি</li>'}</ul></div>
        <div class="garrow">git add</div>
        <div class="gbox"><b>২. Staging (ফ্রেম)</b><small>পরের ছবিতে যা যাবে</small><ul>${!S.init ? '<li class="off">আগে git init</li>' : stg || '<li class="off">ফ্রেম খালি</li>'}</ul></div>
        <div class="garrow">git commit</div>
        <div class="gbox"><b>৩. Commit (অ্যালবাম)</b><small>তোলা ছবিগুলো, নতুনটা উপরে</small><ul>${!S.init ? '<li class="off">আগে git init</li>' : cm || '<li class="off">এখনো কোনো ছবি নেই</li>'}</ul></div>`;
      ps.textContent = prompt();
    };

    // ফাইল বদল: hello.dart এ শেষ } এর আগে নতুন print, অন্য ফাইলে শেষে নতুন লাইন
    const edit = n => {
      if (!S.work[n]) return err(`edit: '${n}' নামে ফাইল নেই। ls দিয়ে দেখো কী আছে।`);
      edits++;
      const f = S.work[n];
      if (n.endsWith('.dart') && f[f.length - 1] === '}') f.splice(f.length - 1, 0, `  print('নতুন লাইন ${edits}');`);
      else f.push(`নতুন লাইন ${edits}`);
      say(`(${n} এ একটা লাইন যোগ হলো। cat ${n} দিয়ে দেখো)`, 'dim');
    };
    const diffOf = (a = [], b = []) => [...a.filter(l => !b.includes(l)).map(l => ['-' + l, 'err']), ...b.filter(l => !a.includes(l)).map(l => ['+' + l, 'gplus'])];

    const git = (a, raw) => {
      const sub = a[0];
      if (!sub || sub === 'help' || sub === '--help') return say('git init | status | add <ফাইল বা .> | commit -m "বার্তা" | log [--oneline] | diff [--staged]\nrestore <ফাইল> | restore --staged <ফাইল> | branch [নাম] | switch [-c] <নাম> | merge <নাম>\nremote add origin <url> | push [-u origin main]', 'dim');
      if (sub === '--version') return say('git version 2.43.0');
      if (sub === 'config') return;
      if (sub === 'init') {
        if (S.init) return say('Reinitialized existing Git repository in /home/rafi/my_app/.git/');
        S.init = true; return say('Initialized empty Git repository in /home/rafi/my_app/.git/');
      }
      if (!S.init) return err('fatal: not a git repository (or any of the parent directories): .git');
      const files = a.slice(1).filter(x => !x.startsWith('-'));
      const pick = (pool, list) => list.includes('.') ? pool : list;
      switch (sub) {
        case 'status': {
          const st = staged(), un = unstaged(), ut = untracked();
          say(`On branch ${S.head}`);
          if (!headId()) say('\nNo commits yet');
          if (st.length) { say('\nChanges to be committed:'); st.forEach(([t, n]) => say(`\t${(t + ':').padEnd(12)}${n}`, 'gplus')); }
          if (un.length) { say('\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)'); un.forEach(([t, n]) => say(`\t${(t + ':').padEnd(12)}${n}`, 'err')); }
          if (ut.length) { say('\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)'); ut.forEach(n => say('\t' + n, 'err')); }
          if (!st.length && !un.length && !ut.length) say(headId() ? 'nothing to commit, working tree clean' : '\nnothing to commit (create/copy files and use "git add" to track)');
          return say('(সবুজ = ফ্রেমে আছে, commit হবে। লাল = ফ্রেমের বাইরে)', 'dim');
        }
        case 'add': {
          if (!files.length) return say('Nothing specified, nothing added.\nhint: Maybe you wanted to say \'git add .\'?');
          for (const n of pick(names(S.work, S.index), files)) {
            if (S.work[n]) S.index[n] = [...S.work[n]];
            else if (n in S.index) delete S.index[n];
            else return err(`fatal: pathspec '${n}' did not match any files`);
          }
          return;
        }
        case 'commit': {
          const mi = a.findIndex(x => x === '-m' || x === '-am');
          if (mi < 0 || a[mi + 1] === undefined) return err('নকল Git এ বার্তা -m দিয়ে লেখো: git commit -m "কী করলাম"\n(আসল Git এ -m না দিলে বার্তা লেখার জন্য একটা editor খোলে)');
          if (a[mi] === '-am') Object.keys(S.index).forEach(n => { if (S.work[n]) S.index[n] = [...S.work[n]]; else delete S.index[n]; });
          const st = staged();
          if (!st.length) return say(unstaged().length || untracked().length ? 'no changes added to commit (use "git add" and/or "git commit -a")' : 'nothing to commit, working tree clean');
          const root = !headId(), id = newId(a[mi + 1]);
          S.commits.push({ id, n: S.commits.length, msg: a[mi + 1], parent: headId(), tree: copy(S.index), br: S.head });
          S.branches[S.head] = id;
          return say(`[${S.head}${root ? ' (root-commit)' : ''} ${id}] ${a[mi + 1]}\n ${st.length} file${st.length > 1 ? 's' : ''} changed`);
        }
        case 'log': {
          if (!headId()) return err(`fatal: your current branch '${S.head}' does not have any commits yet`);
          const one = a.includes('--oneline'), lab = id => labels(id).length ? ` (${labels(id).join(', ')})` : '';
          ancestors(headId()).map(byId).sort((x, y) => y.n - x.n).forEach(c => one
            ? print(`<span class="gid">${c.id}</span>${esc(lab(c.id))} ${esc(c.msg)}`)
            : print(`<span class="gid">commit ${c.id}${esc(lab(c.id))}</span>${esc(`\nAuthor: Rafi <rafi@example.com>\n\n    ${c.msg}\n`)}`));
          return;
        }
        case 'diff': {
          const st = a.includes('--staged') || a.includes('--cached');
          const list = st ? staged().map(x => x[1]) : unstaged().map(x => x[1]);
          if (!list.length) return say(st ? '(ফ্রেমে নতুন কিছু নেই, তাই কিছু দেখানোর নেই)' : '(কাজের ফোল্ডারে আর staging এ কোনো পার্থক্য নেই)', 'dim');
          list.forEach(n => { say(`diff --git a/${n} b/${n}`, 'dim'); diffOf(st ? tree(headId())[n] : S.index[n], st ? S.index[n] : S.work[n]).forEach(([l, c]) => say(l, c)); });
          return;
        }
        case 'restore': {
          const st = a.includes('--staged');
          if (!files.length) return err('fatal: you must specify path(s) to restore');
          for (const n of pick(st ? Object.keys(S.index) : Object.keys(S.index), files)) {
            if (st) { const h = tree(headId())[n]; if (h) S.index[n] = [...h]; else delete S.index[n]; }
            else if (n in S.index) { if (!eq(S.work[n], S.index[n])) restored = true; S.work[n] = [...S.index[n]]; }
            else return err(`error: pathspec '${n}' did not match any file(s) known to git`);
          }
          return;
        }
        case 'branch': {
          if (!files.length) return Object.keys(S.branches).sort().forEach(b => say(`${b === S.head ? '* ' : '  '}${b}`, b === S.head ? 'gplus' : ''));
          if (!headId()) return err(`fatal: not a valid object name: '${S.head}'`);
          if (S.branches[files[0]] !== undefined) return err(`fatal: a branch named '${files[0]}' already exists`);
          S.branches[files[0]] = headId(); return;
        }
        case 'switch': case 'checkout': {
          const make = a.includes('-c') || a.includes('-b'), b = files[0];
          if (!b) return err('fatal: missing branch or commit argument');
          if (make) { if (!headId()) return err(`fatal: not a valid object name: '${S.head}'`); if (S.branches[b] !== undefined) return err(`fatal: a branch named '${b}' already exists`); S.branches[b] = headId(); }
          else if (S.branches[b] === undefined) return err(`fatal: invalid reference: ${b}`);
          if (b === S.head) return say(`Already on '${b}'`);
          const dirty = [...staged(), ...unstaged()].map(x => x[1]);
          if (!make && dirty.length) return err(`error: Your local changes to the following files would be overwritten by checkout:\n\t${dirty.join('\n\t')}\nPlease commit your changes or stash them before you switch branches.\nAborting`);
          Object.keys(tree(headId())).forEach(n => { if (!dirty.includes(n)) delete S.work[n]; });
          const t = tree(S.branches[b]);
          Object.entries(t).forEach(([n, v]) => { if (!dirty.includes(n)) S.work[n] = [...v]; });
          if (!make) S.index = copy(t);
          S.head = b; return say(make ? `Switched to a new branch '${b}'` : `Switched to branch '${b}'`);
        }
        case 'merge': {
          const b = files[0], t = S.branches[b];
          if (!b || t === undefined) return err(`merge: ${b || ''} - not something we can merge`);
          if (!t) return err(`merge: ${b} - not something we can merge`);
          if (staged().length || unstaged().length) return err('error: Your local changes would be overwritten by merge.\nPlease commit your changes or stash them before you merge.\nAborting');
          const h = headId();
          if (h && ancestors(h).includes(t)) return say('Already up to date.');
          const apply = tr => { Object.keys(tree(h)).forEach(n => delete S.work[n]); Object.entries(tr).forEach(([n, v]) => { S.work[n] = [...v]; }); S.index = copy(tr); };
          if (!h || ancestors(t).includes(h)) {
            apply(tree(t)); S.branches[S.head] = t;
            return say(`Updating ${h || '0000000'}..${t}\nFast-forward\n(${b} এর সব ছবি সোজা ${S.head} এ চলে এলো)`);
          }
          const hs = ancestors(h), base = ancestors(t).map(byId).filter(c => hs.includes(c.id)).sort((x, y) => y.n - x.n)[0];
          const bt = base ? base.tree : {}, ht = tree(h), tt = tree(t), res = {}, bad = [];
          names(bt, ht, tt).forEach(n => {
            const v = eq(ht[n], tt[n]) ? ht[n] : eq(bt[n], ht[n]) ? tt[n] : eq(bt[n], tt[n]) ? ht[n] : (bad.push(n), ht[n]);
            if (v) res[n] = [...v];
          });
          if (bad.length) {
            bad.forEach(n => say(`Auto-merging ${n}\nCONFLICT (content): Merge conflict in ${n}`, 'err'));
            say('Automatic merge failed; fix conflicts and then commit the result.', 'err');
            return say('(একই লাইন দুই খাতায় দুইভাবে বদলেছে, Git নিজে ঠিক করতে পারছে না। আসল Git এ ফাইল খুলে ঠিক করতে হয়, গল্পের ৭ নম্বর অধ্যায়ে আছে। নকল Git এ merge টা বাতিল করলাম।)', 'dim');
          }
          apply(res);
          const id = newId('merge' + b);
          S.commits.push({ id, n: S.commits.length, msg: `Merge branch '${b}'`, parent: h, parent2: t, tree: copy(res), br: S.head });
          S.branches[S.head] = id;
          return say("Merge made by the 'ort' strategy.");
        }
        case 'remote': {
          if (a[1] === 'add' && a[2] && a[3]) { if (S.remote) return err(`error: remote ${a[2]} already exists.`); S.remote = a[3]; return; }
          if (a[1] === '-v' || !a[1]) return S.remote && say(`origin\t${S.remote} (fetch)\norigin\t${S.remote} (push)`);
          return err('নকল Git এ শুধু: git remote add origin <url>');
        }
        case 'push': {
          if (!S.remote) return err("fatal: No configured push destination.\nEither specify the URL from the command-line or configure a remote repository using\n\n    git remote add <name> <url>\n\nand then push using the remote name\n\n    git push <name>");
          const b = files[1] || S.head;
          if (!files.length && !S.upstream[S.head]) return err(`fatal: The current branch ${S.head} has no upstream branch.\nTo push the current branch and set the remote as upstream, use\n\n    git push --set-upstream origin ${S.head}`);
          if (!S.branches[b]) return err(`error: src refspec ${b} does not match any`);
          if (a.includes('-u') || a.includes('--set-upstream')) S.upstream[b] = true;
          const old = S.pushed[b];
          if (old === S.branches[b]) return say('Everything up-to-date');
          S.pushed[b] = S.branches[b];
          return say(`To ${S.remote}\n ${old ? `  ${old}..${S.branches[b]}` : '* [new branch]     '}  ${b} -> ${b}${a.includes('-u') ? `\nbranch '${b}' set up to track 'origin/${b}'.` : ''}`);
        }
        default: return err(`git: '${sub}' is not a git command. See 'git --help'.\n(নকল Git এ যা আছে: git help)`);
      }
    };

    const run = line => {
      const toks = (line.match(/"[^"]*"|'[^']*'|\S+/g) || []).map(t => t.replace(/^(["'])(.*)\1$/, '$2'));
      const [cmd, ...a] = toks;
      if (!cmd) return;
      if (cmd === 'git') git(a, line);
      else if (cmd === 'edit') a.length ? a.forEach(edit) : err('edit: কোন ফাইল? যেমন: edit hello.dart');
      else if (cmd === 'ls' || cmd === 'dir') say(Object.keys(S.work).sort().join('  ') || '(খালি)');
      else if (cmd === 'cat' || cmd === 'type') a.forEach(n => S.work[n] ? say(S.work[n].join('\n')) : err(`cat: ${n}: No such file or directory`));
      else if (cmd === 'touch') a.forEach(n => { S.work[n] ||= []; });
      else if (cmd === 'rm' || cmd === 'del') a.forEach(n => S.work[n] ? delete S.work[n] : err(`rm: cannot remove '${n}': No such file or directory`));
      else if (cmd === 'clear' || cmd === 'cls') out.innerHTML = '';
      else if (cmd === 'help') say('git ... (git help লিখলে git এর সব)\nedit ফাইল   ফাইলে একটা লাইন যোগ করো (কোড বদলানোর ভান)\nls, cat ফাইল, touch ফাইল, rm ফাইল, clear', 'dim');
      else err(`${cmd}: command not found (help লেখো)`);
      return toks;
    };

    const check = toks => MIS.forEach(([, ok], i) => { if (!lis[i].classList.contains('ok') && ok(toks || [])) lis[i].classList.add('ok'); });
    const hist = []; let hi = 0;
    const reset = () => {
      S = fresh(); edits = 0; restored = false;
      lis.forEach(l => l.classList.remove('ok'));
      out.innerHTML = ''; say('my_app ফোল্ডারে আছো। ভেতরে hello.dart আর README.md। শুরু করো: git init', 'dim'); draw();
    };
    inp.onkeydown = e => {
      if (e.key === 'Enter') {
        const line = inp.value; inp.value = '';
        print(`<span class="ps">${esc(prompt())}</span> ${esc(line)}`);
        if (line.trim()) { hist.push(line.trim()); hi = hist.length; }
        const toks = run(line);
        check(toks); draw(); out.scrollTop = out.scrollHeight;
      } else if (e.key === 'ArrowUp' && hi > 0) { e.preventDefault(); inp.value = hist[--hi]; }
      else if (e.key === 'ArrowDown') { e.preventDefault(); hi = Math.min(hi + 1, hist.length); inp.value = hist[hi] || ''; }
    };
    $('.term', el).onclick = () => { if (!getSelection().toString()) inp.focus({ preventScroll: true }); };
    $('[data-t=reset]', el).onclick = reset;
    reset();
  },
};

// ---------- router ----------
function route() {
  let id = location.hash.slice(1) || 'home';
  const test = /^test-(.+)$/.exec(id)?.[1];
  if (test && !testPool(WEEKS.find(w => String(w.n) === test) || { label: 1 }).length) id = 'home';
  else if (!test && id !== 'home' && id !== 'cards' && !TOPICS[id]) id = 'home';
  const main = $('#main');
  main.innerHTML = id === 'home' ? renderHome() : id === 'cards' ? renderCards() : test ? renderTest(test) : renderTopic(id);
  if (test) mountTest(test);
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
  if (!TOPICS[id]) return;
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
  if (act === 'retest') { e.preventDefault(); return route(); }
  if (act === 'run') return runCode(t);
  if (act === 'export') return exportProgress();
  if (act === 'print' || act === 'print-sol') { document.body.classList.toggle('print-sol', act === 'print-sol'); return window.print(); }
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
$('#main').addEventListener('click', e => { const n = e.target.closest('.nest'); if (n) nestClick(n); });
$('#main').addEventListener('change', e => {
  if (e.target.dataset.act === 'import') return importProgress(e.target);
  if (e.target.dataset.act !== 'done') return;
  const card = e.target.closest('.prob'), k = card.dataset.k;
  e.target.checked ? S.done[k] = 1 : delete S.done[k];
  card.classList.toggle('isdone', e.target.checked);
  save(); const id = location.hash.slice(1); renderSide(id); updSum(id);
});
$('#menu-btn').onclick = () => $('#side').classList.toggle('open');

// ---------- DartPad এ চালানো ----------
// dartpad.dev কে iframe এ খুলি (embed=true&run=true)। সে তৈরি হলে {type:'ready', sender:নাম} পাঠায়,
// তখন {type:'sourceCode', sourceCode} পাঠালে কোড বসিয়ে নিজেই চালায়
const PADS = {};
function runCode(btn) {
  const box = btn.closest('.code'), old = box.nextElementSibling;
  if (old?.classList.contains('runbox')) { old.remove(); btn.textContent = '▶ চালাও'; return; }
  const code = box.querySelector('textarea').value, name = 'pad' + Math.random().toString(36).slice(2);
  PADS[name] = code;
  const div = document.createElement('div'); div.className = 'runbox';
  div.innerHTML = `${/stdin|dart:io/.test(code) ? '<p class="note warn"><b>সাবধান</b>এই কোড কিবোর্ড থেকে input নেয় বা dart:io লাগে। DartPad এ এটা চলবে না, terminal এ চালাও। চাইলে input এর জায়গায় variable বসিয়ে দেখো।</p>' : ''}
    <iframe name="${name}" src="https://dartpad.dev/?embed=true&run=true" title="DartPad" loading="lazy" allow="clipboard-write"></iframe>
    <p class="goal">DartPad লোড হতে কয়েক সেকেন্ড লাগে, তারপর নিজেই চলবে। ডান পাশে output। কোড বদলে আবার <b>Run</b> চাপতে পারো। <a href="https://dartpad.dev" target="_blank" rel="noopener">বড় করে খোলো</a> (কোড কপি করে নিয়ে যাও)।</p>`;
  box.after(div); btn.textContent = '✕ বন্ধ করো';
}
window.addEventListener('message', e => {
  if (e.origin !== 'https://dartpad.dev' || e.data?.type !== 'ready') return;
  const code = PADS[e.data.sender];
  if (code !== undefined) e.source.postMessage({ type: 'sourceCode', sourceCode: code }, 'https://dartpad.dev');
});

// ---------- অগ্রগতি ব্যাকআপ ----------
function exportProgress() {
  const blob = new Blob([JSON.stringify({ app: 'dart-khata', v: 1, at: new Date().toISOString(), S }, null, 1)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `dart-khata-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  $('#bk-msg').textContent = 'ফাইল নামানো হলো। নিরাপদ জায়গায় রেখে দাও।';
}
// ফেরত আনার সময় মুছে ফেলি না, মিলিয়ে নিই: যা আগে ছিল তাও থাকে
function importProgress(input) {
  const f = input.files[0]; if (!f) return;
  f.text().then(t => {
    const d = JSON.parse(t), o = d.S || d;
    if (typeof o !== 'object' || !o.done) throw new Error('bad');
    Object.assign(S.done, o.done); Object.assign(S.known, o.known || {});
    for (const [k, v] of Object.entries(o.cards || {})) if (!S.cards[k] || v.b > S.cards[k].b) S.cards[k] = v;
    for (const [k, v] of Object.entries(o.tests || {})) if (!S.tests[k] || v[0] / v[1] > S.tests[k][0] / S.tests[k][1]) S.tests[k] = v;
    save(); route(); $('#bk-msg').textContent = `ফেরত এলো: ${bn(Object.keys(o.done).length)}টা শেষ করা সমস্যা।`;
  }).catch(() => { $('#bk-msg').textContent = 'এই ফাইল পড়া গেল না। "অগ্রগতি ফাইলে নামাও" দিয়ে বানানো .json ফাইল দাও।'; });
  input.value = '';
}
window.addEventListener('afterprint', () => document.body.classList.remove('print-sol'));

// ---------- থিম: অটো → আলো → অন্ধকার ----------
const THEMES = [['auto', '◐ অটো'], ['light', '☀ আলো'], ['dark', '☾ অন্ধকার']];
let theme = 'auto';
try { theme = localStorage.getItem(KEY + '-theme') || 'auto'; } catch (e) {}
const applyTheme = () => {
  if (theme === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = theme;
  const b = $('#theme-btn'); if (b) { b.textContent = THEMES.find(x => x[0] === theme)[1]; b.title = 'থিম বদলাও'; }
};
$('#theme-btn').onclick = () => {
  theme = THEMES[(THEMES.findIndex(x => x[0] === theme) + 1) % THEMES.length][0];
  try { localStorage.setItem(KEY + '-theme', theme); } catch (e) {}
  applyTheme();
};
applyTheme();

// ---------- অফলাইন: GitHub Pages এ service worker ----------
if ('serviceWorker' in navigator && location.protocol === 'https:' && location.hostname.endsWith('github.io')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
window.addEventListener('hashchange', route);
if (!location.hash) { try { const l = localStorage.getItem(KEY + '-last'); if (l && (TOPICS[l] || l === 'cards')) history.replaceState(null, '', '#' + l); } catch (e) {} }
route();
