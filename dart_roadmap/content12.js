// Extra টপিক: Shortcut পাতা (VS Code আর Android Studio / IntelliJ, Windows / Linux / Mac)
// keys এর প্রতিটা: c = ভাগ, t = কাজ (বাংলায়), vs / as = [Windows, Linux, Mac]। Linux null মানে Windows এর মতোই, '' মানে ডিফল্ট চাবি নেই
// চাবি লেখার নিয়ম: একসাথে চাপা ' + ' দিয়ে, পরপর চাপা ', ' দিয়ে। app.js এর shortcutLab widget এটা দেখায়

TOPICS['shortcuts'] = {
  short: 'Shortcut (VS Code, Android Studio)', title: 'Shortcut পাতা: VS Code আর Android Studio', days: 'পাশে খুলে রাখো',
  goal: 'মাউস কম, কিবোর্ড বেশি: সবচেয়ে দরকারি shortcut গুলো এক জায়গায়, নিজের editor আর কম্পিউটার অনুযায়ী।',
  learn: [
    'মাউস দিয়ে মেনু খুঁজে খুঁজে কাজ করা যায়, কিন্তু প্রতিবার হাত কিবোর্ড থেকে মাউসে যাওয়া-আসায় সময় যায় আর মনোযোগ ভাঙে। প্রোগ্রামাররা তাই shortcut ব্যবহার করে। সব একসাথে মুখস্থ করার দরকার নেই: **প্রতি সপ্তাহে ৩টা** নতুন shortcut বেছে নাও, কাগজে লিখে স্ক্রিনের পাশে লাগিয়ে রাখো, জোর করে ব্যবহার করো। এক সপ্তাহে আঙুল নিজেই শিখে যাবে।',
    { tip: 'উপরে নিজের **editor** আর **কম্পিউটার** বেছে নাও, শুধু সেই চাবিগুলো দেখাবে। "দুইটা পাশাপাশি" দিলে VS Code আর Android Studio মিলিয়ে দেখা যায়। পাতার উপরের **প্রিন্ট** বোতামে কাগজে নেওয়া যায়।' },
    { widget: 'shortcutLab' },
    { h: 'Mac এর চাবির চিহ্ন' },
    { table: [['লেখা', 'কিবোর্ডে', 'নাম'], ['**Cmd**', '⌘', 'Command (Windows এর Ctrl এর মতো বেশিরভাগ জায়গায়)'], ['**Option**', '⌥', 'Option (Windows এর Alt)'], ['**Ctrl**', '⌃', 'Control'], ['**Shift**', '⇧', 'Shift'], ['**Backspace**', '⌫', 'Delete']] },
    { h: 'সতর্কতা আর কাজের কথা' },
    { warn: 'Ubuntu তে **Ctrl + Alt + L** চাপলে স্ক্রিন **lock** হয়ে যায়! তাই Android Studio তে কোড সাজাতে (Reformat) গেলে স্ক্রিন বন্ধ হয়ে যেতে পারে। সমাধান: Ubuntu এর **Settings → Keyboard → Shortcuts** থেকে lock এর চাবি বদলাও, অথবা Android Studio তে মেনু **Code → Reformat Code** ব্যবহার করো।' },
    { list: ['**F চাবি কাজ না করলে** (ল্যাপটপে): অনেক ল্যাপটপে F1-F12 আসলে আওয়াজ/আলো বদলায়। **Fn** চেপে ধরে F চাবি চাপো, অথবা BIOS/সেটিংসে "Fn Lock" চালু করো।', '**সব shortcut দেখতে**: VS Code এ **Ctrl + K, Ctrl + S** (Mac এ **Cmd + K, Cmd + S**)। Android Studio তে **Help → Keyboard Shortcuts PDF**, বা **Settings → Keymap**।', '**নাম মনে নেই, কাজটা মনে আছে?** VS Code এ **Ctrl + Shift + P**, Android Studio তে **Ctrl + Shift + A** চেপে কাজের নাম ইংরেজিতে লেখো (যেমন "format")। পাশেই shortcut লেখা থাকে, ওখান থেকেই শেখো।', '**দুইটা editor ব্যবহার করো?** VS Code এ "IntelliJ IDEA Keybindings" extension নিলে VS Code ও Android Studio এর চাবিতে চলে।'] },
  ],
  how: [
    'প্রতিটা editor এর একটা **keymap** থাকে: কোন চাবি চাপলে কোন কাজ। Windows/Linux আর Mac এর keymap আলাদা, কারণ Mac এ Cmd চাবি আছে।',
    'keymap নিজের মতো বদলানো যায়। তাই কারো কম্পিউটারে চাবি না মিললে হয়তো সে বদলে রেখেছে। এই পাতার চাবিগুলো সব ডিফল্ট।',
    'shortcut মুখস্থ না, অভ্যাস। আঙুলের মনে থাকে ("muscle memory"), মাথার না। তাই পড়ার চেয়ে ব্যবহার বেশি জরুরি।',
  ],
  quiz: [
    { q: 'VS Code এ একটা কাজের নাম জানো কিন্তু shortcut জানো না। সবচেয়ে দ্রুত উপায়?', opts: ['মেনু খুঁজে খুঁজে', 'Ctrl + Shift + P চেপে কাজের নাম লেখা', 'Google করা', 'VS Code আবার চালু করা'], a: 1, why: 'Command Palette এ সব কাজ খোঁজা যায়, পাশে shortcut ও দেখায়।' },
    { q: 'Android Studio তে কোড সুন্দর করে সাজানোর (Reformat) shortcut, Windows এ?', opts: ['Shift + Alt + F', 'Ctrl + Alt + L', 'Ctrl + S', 'Alt + Enter'], a: 1, why: 'Shift + Alt + F হলো VS Code এর। Android Studio তে Ctrl + Alt + L (Mac এ Cmd + Option + L)।' },
    { q: 'VS Code আর Android Studio দুইটাতেই "এই ভুলটা ঠিক করে দাও" ধরনের পরামর্শ আনতে কোনটা?', opts: ['VS Code: Ctrl + . / Android Studio: Alt + Enter', 'দুইটাতেই F5', 'দুইটাতেই Ctrl + Z', 'VS Code: F2 / Android Studio: Shift + F6'], a: 0, why: 'Quick Fix। F2 আর Shift + F6 হলো নাম বদলানো (rename)।' },
  ],
  probs: [
    { l: 'e', q: 'নিজের editor এর এই ৩টা shortcut কাগজে লিখে স্ক্রিনের পাশে লাগাও আর পুরো এক দিন মাউস ছাড়া এগুলো করো: **save**, **format**, **comment**।', ans: 'VS Code: Ctrl + S, Shift + Alt + F (Linux: Ctrl + Shift + I), Ctrl + /\nAndroid Studio: Ctrl + S, Ctrl + Alt + L, Ctrl + /\n(Mac এ Ctrl এর জায়গায় সাধারণত Cmd।) এক দিন পরে নিজেই অবাক হবে, হাত নিজে থেকে চলে যায়।' },
    { l: 'e', q: 'মাউস না ছুঁয়ে একটা ফাইল খোলো (নাম দিয়ে খুঁজে), ৫ নম্বর লাইনে যাও, লাইনটা এক লাইন উপরে সরাও, তারপর save।', ans: 'VS Code: Ctrl + P (ফাইলের নাম লেখো, Enter) → Ctrl + G, 5, Enter → Alt + ↑ → Ctrl + S\nAndroid Studio: Ctrl + Shift + N → Ctrl + G, 5 → Alt + Shift + ↑ → Ctrl + S' },
    { l: 'm', q: 'একটা variable এর নাম কোডের সব জায়গায় একসাথে বদলাও, তারপর তার সংজ্ঞায় (যেখানে বানানো) লাফ দাও, তারপর আগের জায়গায় ফিরে আসো।', ans: 'VS Code: F2 (নতুন নাম, Enter) → F12 (সংজ্ঞায়) → Alt + ← (ফেরত; Linux এ Ctrl + Alt + -, Mac এ Ctrl + -)\nAndroid Studio: Shift + F6 → Ctrl + B → Ctrl + Alt + ← (Mac এ Cmd + [)' },
    { l: 'm', q: 'Debug এর shortcut দিয়ে [Debugger টপিকের](#debugger) {{sumTo}} এর ভুল খোঁজো, একবারও মাউস না ধরে।', ans: 'VS Code: লাইনে গিয়ে F9 (breakpoint) → F5 (Debug) → F10 বারবার → Shift + F5 (বন্ধ)\nAndroid Studio: Ctrl + F8 → Shift + F9 → F8 বারবার → Ctrl + F2' },
  ],
  keys: [
    // ---- সম্পাদনা ----
    { c: 'edit', t: 'save', vs: ['Ctrl + S', null, 'Cmd + S'], as: ['Ctrl + S', null, 'Cmd + S'] },
    { c: 'edit', t: 'আগের অবস্থায় (undo)', vs: ['Ctrl + Z', null, 'Cmd + Z'], as: ['Ctrl + Z', null, 'Cmd + Z'] },
    { c: 'edit', t: 'আবার সামনে (redo)', vs: ['Ctrl + Y', 'Ctrl + Shift + Z', 'Cmd + Shift + Z'], as: ['Ctrl + Shift + Z', null, 'Cmd + Shift + Z'] },
    { c: 'edit', t: 'কোড সুন্দর করে সাজাও (format)', vs: ['Shift + Alt + F', 'Ctrl + Shift + I', 'Shift + Option + F'], as: ['Ctrl + Alt + L', null, 'Cmd + Option + L'] },
    { c: 'edit', t: 'লাইন comment করো / সরাও', vs: ['Ctrl + /', null, 'Cmd + /'], as: ['Ctrl + /', null, 'Cmd + /'] },
    { c: 'edit', t: 'লাইন উপরে / নিচে সরাও', vs: ['Alt + ↑', null, 'Option + ↑'], as: ['Alt + Shift + ↑', null, 'Option + Shift + ↑'] },
    { c: 'edit', t: 'লাইনের কপি নিচে বানাও', vs: ['Shift + Alt + ↓', 'Ctrl + Shift + Alt + ↓', 'Shift + Option + ↓'], as: ['Ctrl + D', null, 'Cmd + D'] },
    { c: 'edit', t: 'পুরো লাইন মুছো', vs: ['Ctrl + Shift + K', null, 'Cmd + Shift + K'], as: ['Ctrl + Y', null, 'Cmd + Backspace'] },
    { c: 'edit', t: 'একই শব্দের পরেরটাও বাছাই (একসাথে বদলাতে)', vs: ['Ctrl + D', null, 'Cmd + D'], as: ['Alt + J', null, 'Ctrl + G'] },
    { c: 'edit', t: 'কয়েক জায়গায় একসাথে লেখা (multi-cursor)', vs: ['Alt + Click', null, 'Option + Click'], as: ['Alt + Shift + Click', null, 'Option + Shift + Click'] },
    { c: 'edit', t: 'নাম সব জায়গায় একসাথে বদলাও (rename)', vs: ['F2', null, 'F2'], as: ['Shift + F6', null, 'Shift + F6'] },
    // ---- খোঁজা আর যাওয়া ----
    { c: 'find', t: 'নাম দিয়ে ফাইল খোলো', vs: ['Ctrl + P', null, 'Cmd + P'], as: ['Ctrl + Shift + N', null, 'Cmd + Shift + O'] },
    { c: 'find', t: 'যেকোনো কাজ / command খোঁজো', vs: ['Ctrl + Shift + P', null, 'Cmd + Shift + P'], as: ['Ctrl + Shift + A', null, 'Cmd + Shift + A'] },
    { c: 'find', t: 'সবকিছু খোঁজো (ফাইল, class, command)', vs: ['Ctrl + P', null, 'Cmd + P'], as: ['Shift, Shift', null, 'Shift, Shift'] },
    { c: 'find', t: 'এই ফাইলে খোঁজো', vs: ['Ctrl + F', null, 'Cmd + F'], as: ['Ctrl + F', null, 'Cmd + F'] },
    { c: 'find', t: 'খুঁজে বদলাও (replace)', vs: ['Ctrl + H', null, 'Cmd + Option + F'], as: ['Ctrl + R', null, 'Cmd + R'] },
    { c: 'find', t: 'সব ফাইলে খোঁজো', vs: ['Ctrl + Shift + F', null, 'Cmd + Shift + F'], as: ['Ctrl + Shift + F', null, 'Cmd + Shift + F'] },
    { c: 'find', t: 'নির্দিষ্ট লাইনে যাও', vs: ['Ctrl + G', null, 'Ctrl + G'], as: ['Ctrl + G', null, 'Cmd + L'] },
    { c: 'find', t: 'যেখানে বানানো (definition) সেখানে যাও', vs: ['F12', null, 'F12'], as: ['Ctrl + B', null, 'Cmd + B'] },
    { c: 'find', t: 'কোথায় কোথায় ব্যবহার হয়েছে', vs: ['Shift + F12', null, 'Shift + F12'], as: ['Alt + F7', null, 'Option + F7'] },
    { c: 'find', t: 'আগের জায়গায় ফেরো', vs: ['Alt + ←', 'Ctrl + Alt + -', 'Ctrl + -'], as: ['Ctrl + Alt + ←', null, 'Cmd + ['] },
    { c: 'find', t: 'সম্প্রতি খোলা ফাইল', vs: ['Ctrl + Tab', null, 'Ctrl + Tab'], as: ['Ctrl + E', null, 'Cmd + E'] },
    // ---- কোডের সাহায্য ----
    { c: 'code', t: 'পরামর্শের তালিকা (autocomplete)', vs: ['Ctrl + Space', null, 'Ctrl + Space'], as: ['Ctrl + Space', null, 'Ctrl + Space'] },
    { c: 'code', t: 'ভুল ঠিক করার পরামর্শ (Quick Fix / 💡)', vs: ['Ctrl + .', null, 'Cmd + .'], as: ['Alt + Enter', null, 'Option + Enter'] },
    { c: 'code', t: 'function এর parameter কী কী', vs: ['Ctrl + Shift + Space', null, 'Cmd + Shift + Space'], as: ['Ctrl + P', null, 'Cmd + P'] },
    { c: 'code', t: 'ডকুমেন্টেশন দেখো', vs: ['Ctrl + K, Ctrl + I', null, 'Cmd + K, Cmd + I'], as: ['Ctrl + Q', null, 'F1'] },
    { c: 'code', t: 'বাছাই করা কোড দিয়ে নতুন function (extract method)', vs: ['Ctrl + Shift + R', null, 'Ctrl + Shift + R'], as: ['Ctrl + Alt + M', null, 'Cmd + Option + M'] },
    { c: 'code', t: 'constructor ইত্যাদি বানিয়ে দাও (generate)', vs: ['Ctrl + .', null, 'Cmd + .'], as: ['Alt + Insert', null, 'Cmd + N'] },
    // ---- চালানো আর Debug ----
    { c: 'run', t: 'চালাও (debug ছাড়া)', vs: ['Ctrl + F5', null, 'Ctrl + F5'], as: ['Shift + F10', null, 'Ctrl + R'] },
    { c: 'run', t: 'Debug মোডে চালাও', vs: ['F5', null, 'F5'], as: ['Shift + F9', null, 'Ctrl + D'] },
    { c: 'run', t: 'বন্ধ করো', vs: ['Shift + F5', null, 'Shift + F5'], as: ['Ctrl + F2', null, 'Cmd + F2'] },
    { c: 'run', t: 'breakpoint দাও / সরাও', vs: ['F9', null, 'F9'], as: ['Ctrl + F8', null, 'Cmd + F8'] },
    { c: 'run', t: 'পরের breakpoint পর্যন্ত (continue)', vs: ['F5', null, 'F5'], as: ['F9', null, 'Cmd + Option + R'] },
    { c: 'run', t: 'এক লাইন (step over)', vs: ['F10', null, 'F10'], as: ['F8', null, 'F8'] },
    { c: 'run', t: 'function এর ভেতরে (step into)', vs: ['F11', null, 'F11'], as: ['F7', null, 'F7'] },
    { c: 'run', t: 'function থেকে বের (step out)', vs: ['Shift + F11', null, 'Shift + F11'], as: ['Shift + F8', null, 'Shift + F8'] },
    { c: 'run', t: 'থামা অবস্থায় হিসাব করে দেখো', vs: ['', null, ''], as: ['Alt + F8', null, 'Option + F8'], tip: 'VS Code এ DEBUG CONSOLE এ লেখো' },
    // ---- জানালা আর ফাইল ----
    { c: 'view', t: 'terminal খোলো / বন্ধ', vs: ['Ctrl + `', null, 'Ctrl + `'], as: ['Alt + F12', null, 'Option + F12'] },
    { c: 'view', t: 'ফাইলের তালিকা দেখাও / লুকাও', vs: ['Ctrl + B', null, 'Cmd + B'], as: ['Alt + 1', null, 'Cmd + 1'] },
    { c: 'view', t: 'সব ভুল-সতর্কতার তালিকা (Problems)', vs: ['Ctrl + Shift + M', null, 'Cmd + Shift + M'], as: ['', null, ''], tip: 'Android Studio: View → Tool Windows → Problems (IntelliJ এ Alt + 6)' },
    { c: 'view', t: 'ট্যাব বন্ধ করো', vs: ['Ctrl + W', null, 'Cmd + W'], as: ['Ctrl + F4', null, 'Cmd + W'] },
    { c: 'view', t: 'সেটিংস', vs: ['Ctrl + ,', null, 'Cmd + ,'], as: ['Ctrl + Alt + S', null, 'Cmd + ,'] },
    { c: 'view', t: 'সব shortcut এর তালিকা', vs: ['Ctrl + K, Ctrl + S', null, 'Cmd + K, Cmd + S'], as: ['', null, ''], tip: 'Android Studio: Settings → Keymap' },
    // ---- Flutter ----
    { c: 'flutter', t: 'hot reload (app না থামিয়ে বদল দেখাও)', vs: ['Ctrl + S', null, 'Cmd + S'], as: ['Ctrl + \\', null, 'Cmd + \\'], tip: 'দুইটাতেই save করলেও hot reload হয়' },
    { c: 'flutter', t: 'hot restart (app নতুন করে শুরু)', vs: ['Ctrl + Shift + F5', null, 'Cmd + Shift + F5'], as: ['Ctrl + Shift + \\', null, 'Cmd + Shift + \\'] },
    { c: 'flutter', t: 'widget কে অন্য widget দিয়ে মোড়াও (Wrap with Padding, Center…)', vs: ['Ctrl + .', null, 'Cmd + .'], as: ['Alt + Enter', null, 'Option + Enter'] },
  ],
};

CARDS.push(
  { w: 'x', f: 'VS Code: কাজের নাম দিয়ে খোঁজো / ফাইল খোলো', b: 'Ctrl + Shift + P\nCtrl + P' },
  { w: 'x', f: 'Android Studio: কোড সাজাও / Quick Fix', b: 'Ctrl + Alt + L\nAlt + Enter' },
  { w: 'x', f: 'Android Studio: নাম বদলাও / সংজ্ঞায় যাও', b: 'Shift + F6\nCtrl + B' },
);
