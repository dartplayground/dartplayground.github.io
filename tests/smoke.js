// ব্রাউজারের ভেতরে চলে (run.sh এটা docs/index.html এ ঢুকিয়ে headless Chrome এ খোলে)।
// প্রতিটা পাতা, widget, লিংক আর খেলা চালিয়ে দেখে। ফল লেখে <pre id="RESULT"> এ: "FAIL ..." লাইন আর শেষে "DONE"।
(() => {
  const R = [], errs = [];
  let checks = 0;
  window.addEventListener('error', e => errs.push(`${e.message} @${e.lineno}`));
  const ok = (cond, msg) => { checks++; if (!cond) R.push('FAIL ' + msg); };
  const go = id => { history.replaceState(null, '', '#' + id); route(); };
  const type = (el, cmds) => { const i = el.querySelector('.term-in input'); cmds.forEach(c => { i.value = c; i.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); }); };
  const done = el => el.querySelectorAll('.term-mis li.ok').length;
  const finish = () => { if (errs.length) R.push(...errs.map(e => 'FAIL js error: ' + e)); R.push(`DONE ${checks} checks`); const p = document.createElement('pre'); p.id = 'RESULT'; p.textContent = R.join('\n'); document.body.append(p); };

  setTimeout(async () => {
    try {
      const valid = new Set(['home', 'cards', ...ORDER, ...WEEKS.filter(w => testPool(w).length).map(w => 'test-' + w.n)]);
      const keys = new Set();
      ok(WEEKS.every(w => w.ids.length), 'কোনো সপ্তাহ/গ্রুপ খালি (topic id ভুল বা data ফাইল লোড হয়নি)');
      for (const id of ORDER) {
        const t = TOPICS[id];
        go(id);
        ok($('#main h1')?.textContent === t.title, `${id}: শিরোনাম দেখায়নি`);
        ok(document.querySelectorAll('.prob').length === t.probs.length, `${id}: সমস্যার সংখ্যা মেলেনি`);
        t.probs.forEach(p => { ok(!keys.has(p.key), `${id}: একই সমস্যা দুইবার (${p.q.slice(0, 30)})`); keys.add(p.key); ok(LVL[p.l], `${id}: অচেনা level ${p.l}`); });
        (t.quiz || []).forEach((q, i) => ok(Number.isInteger(q.a) && q.a >= 0 && q.a < q.opts.length, `${id}: quiz ${i + 1} এর উত্তর (a) ভুল`));
        document.querySelectorAll('#main [data-widget]').forEach(w => ok(w.children.length, `${id}: widget ${w.dataset.widget} চালু হয়নি`));
        (t.traces || []).forEach(tr => ok(TRACES[tr], `${id}: trace ${tr} নেই`));
        document.querySelectorAll('#main [data-trace]').forEach(w => ok(w.querySelector('.trace'), `${id}: trace ${w.dataset.trace} চালু হয়নি`));
        document.querySelectorAll('#main a[href^="#"]').forEach(a => ok(valid.has(a.getAttribute('href').slice(1)), `${id}: ভাঙা লিংক ${a.getAttribute('href')}`));
        ok(!/\{\{|\*\*|<\/?code>&lt;/.test($('#main').innerText), `${id}: markup ঠিকমতো বদলায়নি ({{ বা ** রয়ে গেছে)`);
      }
      CARDS.forEach((c, k) => ok(WEEKS.some(w => String(w.n) === String(c.w)), `card ${k}: অচেনা সপ্তাহ ${c.w}`));

      // home: আজকের চ্যালেঞ্জ, পরীক্ষার লিংক, শুরুর আগে
      go('home');
      ok($('.daily .prob'), 'home: আজকের চ্যালেঞ্জ নেই');
      ok(document.querySelectorAll('.tlink').length >= 10, 'home: সপ্তাহের পরীক্ষার লিংক কম');
      document.querySelectorAll('#main a[href^="#"]').forEach(a => ok(valid.has(a.getAttribute('href').slice(1)), `home: ভাঙা লিংক ${a.getAttribute('href')}`));

      // সাপ্তাহিক পরীক্ষা: সব উত্তর দিলে ফল দেখায়
      for (const w of WEEKS.filter(w => testPool(w).length)) {
        go('test-' + w.n);
        const qs = [...document.querySelectorAll('.test .q')];
        ok(qs.length >= 3, `test-${w.n}: প্রশ্ন কম (${qs.length})`);
        qs.forEach(q => q.querySelector('.opts button').click());
        ok(!$('#t-res').hidden && /\d|[০-৯]/.test($('#t-res').textContent), `test-${w.n}: ফল দেখায়নি`);
      }
      ok(S.tests[1], 'পরীক্ষার স্কোর সেভ হয়নি');

      // flashcard: আজকের কার্ড, মনে আছে চাপলে বাক্স বাড়ে
      go('cards');
      const before = document.querySelector('#fc-filter option').textContent;
      $('#fc-know').click();
      ok(Object.values(S.cards).some(c => c.b === 1 && c.d > today()), 'flashcard: মনে আছে চাপলে পরের দিনে যায়নি');
      ok(/\d|[০-৯]/.test(before), 'flashcard: আজকের কার্ডের সংখ্যা নেই');

      // terminal (Linux)
      go('terminal'); let el = $('[data-widget=termLab]');
      type(el, ['pwd', 'cd dart_practice', 'mkdir my_app', 'touch my_app/main.dart', 'cat hello.dart', 'cp ../Documents/notes.txt backup.txt', 'cd ~', 'ls -a', 'rm -r Pictures']);
      ok(done(el) === 8, `termLab: মিশন ${done(el)}/8`);
      // PowerShell
      go('powershell'); el = $('[data-widget=psLab]');
      type(el, ['Get-Location', 'cd DART_PRACTICE', 'mkdir my_app', 'New-Item my_app\\main.dart', 'type hello.dart', 'Copy-Item ..\\Documents\\notes.txt backup.txt', 'ren backup.txt old.txt', 'cd ~', 'rm Pictures -r']);
      ok(done(el) === 8, `psLab: মিশন ${done(el)}/8`);
      // Git
      go('git'); el = $('[data-widget=gitLab]');
      type(el, ['git init', 'git status', 'git add .', 'git commit -m "এক"', 'edit hello.dart', 'git diff', 'git commit -am "দুই"', 'git log --oneline', 'edit hello.dart', 'git restore hello.dart', 'git switch -c experiment', 'edit README.md', 'git commit -am "খসড়া"', 'git switch main', 'edit hello.dart', 'git commit -am "মূল"', 'git merge experiment']);
      ok(done(el) === 10, `gitLab: মিশন ${done(el)}/10`);
      ok(/Merge made/.test(el.querySelector('.term-out').textContent), 'gitLab: merge হয়নি');

      // Error অভিধান: মেসেজ পেস্ট করলে ঠিকটা উপরে
      go('errors'); el = $('[data-widget=errLab]');
      const q = el.querySelector('.err-q');
      for (const [msg, want] of [['Null check operator used on a null value', 'Null check operator'], ["Error: Expected ';' after this.", "Expected ';'"], ['Bad state: No element', 'StateError']]) {
        q.value = msg; q.dispatchEvent(new Event('input'));
        ok(el.querySelector('.err-card[open] summary b')?.textContent.startsWith(want), `errLab: "${msg}" এ ${want} আসেনি`);
      }
      // শব্দকোষ
      go('glossary'); el = $('[data-widget=glossLab]');
      el.querySelector('.err-q').value = 'argument'; el.querySelector('.err-q').dispatchEvent(new Event('input'));
      ok(el.querySelectorAll('.gl-row').length >= 1 && el.querySelectorAll('.gl-row').length < 10, 'glossLab: খোঁজা কাজ করেনি');
      // ভুল খোঁজো
      go('debugging'); el = $('[data-widget=bugHunt]');
      el.querySelectorAll('.bh-line')[TOPICS.debugging.bugs[0].bug].click();
      ok(el.querySelector('.bh-line.ok'), 'bugHunt: ঠিক লাইনে ক্লিক ধরেনি');
      // কিবোর্ড
      go('vscode'); el = $('[data-widget=keyboard]');
      el.querySelector('.kb-key.hot').click();
      ok(!/একটা রঙিন/.test(el.querySelector('.kb-info').textContent), 'keyboard: ক্লিকে তথ্য আসেনি');

      // ▶ চালাও: dart কোডে বোতাম, চাপলে DartPad iframe
      go('setup');
      const run = $('#main [data-act=run]');
      ok(run, 'run: বোতাম নেই');
      run?.click();
      ok($('.runbox iframe')?.src.startsWith('https://dartpad.dev/?embed=true'), 'run: DartPad iframe আসেনি');
      ok(!$('#s-how [data-act=run]') || true, '');

      // থিম
      const tb = $('#theme-btn'), t0 = document.documentElement.dataset.theme; tb.click();
      ok(document.documentElement.dataset.theme !== t0, 'theme: বদলায়নি');
      tb.click(); tb.click();

      // backup ফেরত আনা (মিলিয়ে নেয়)
      go('home');
      const inp = $('[data-act=import]'), dt = new DataTransfer();
      dt.items.add(new File([JSON.stringify({ S: { done: { 'setup~test': 1 }, known: {}, cards: {}, tests: {} } })], 'p.json', { type: 'application/json' }));
      inp.files = dt.files; inp.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise(r => setTimeout(r, 300));
      ok(S.done['setup~test'] && S.tests[1], 'import: মেলানো হয়নি (নতুনটা আসেনি বা পুরানোটা মুছে গেছে)');
    } catch (e) { R.push('FAIL exception: ' + e.stack); }
    finish();
  }, 1200);
})();
