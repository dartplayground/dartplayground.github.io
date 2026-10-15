// Extra টপিক: debugger, clean-code, packages, inside (কম্পিউটারের ভেতরে), flutter-intro, gallery (প্রজেক্ট আইডিয়া)
// আর debugging টপিকের "ভুল খোঁজো" খেলার তালিকা (TOPICS.debugging.bugs, bugHunt widget পড়ে)

TOPICS['debugger'] = {
  short: 'VS Code Debugger', title: 'Debugger: কোড থামিয়ে ভেতরে দেখা', days: 'Function শেখার পরে',
  goal: 'print দিয়ে আন্দাজ না করে, কোড যেকোনো লাইনে থামিয়ে প্রতিটা variable এর মান নিজের চোখে দেখা আর এক লাইন এক লাইন করে চালানো।',
  learn: [
    'এতদিন ভুল খুঁজতে কোডে {{print}} বসিয়েছ। কাজ করে, কিন্তু প্রতিবার print লিখতে, চালাতে, তারপর মুছতে হয়। **Debugger** হলো এর চেয়ে শক্তিশালী যন্ত্র: কোডকে যেকোনো লাইনে **থামিয়ে** রাখে, তখন সব variable এর মান দেখা যায়, তারপর এক লাইন করে সামনে আগানো যায়। এই সাইটের "ধাপে ধাপে দেখো" যন্ত্রের মতো, কিন্তু তোমার নিজের যেকোনো কোডে।',
    { h: 'ধাপ ১: থামার জায়গা (breakpoint)' },
    'VS Code এ লাইন নম্বরের **বাম পাশে** ক্লিক করো। একটা **লাল বিন্দু** আসবে। এর নাম **breakpoint**: "এই লাইনে পৌঁছালে থামো, লাইনটা চালানোর আগেই।" আবার ক্লিক করলে চলে যায়।',
    { code: `int sumTo(int n) {
  int sum = 0;
  for (int i = 1; i < n; i++) {   // ● এই লাইনে breakpoint দাও
    sum += i;
  }
  return sum;
}

void main() {
  print(sumTo(5)); // 15 আসার কথা, আসছে 10
}` },
    { h: 'ধাপ ২: Debug মোডে চালাও' },
    '{{main}} এর উপরে **Run** এর পাশে **Debug** চাপো (বা **F5**)। প্রোগ্রাম চলবে আর breakpoint এ থেমে যাবে। থামা লাইনটা হলুদ দেখাবে। এখন বাম পাশে **VARIABLES** অংশে দেখো: {{n = 5}}, {{sum = 0}}, {{i = 1}}।',
    { h: 'ধাপ ৩: এক পা এক পা করে' },
    { table: [['বোতাম', 'চাবি', 'কাজ'], ['▶ Continue', '**F5**', 'পরের breakpoint পর্যন্ত চলো'], ['↷ Step Over', '**F10**', 'শুধু এই লাইন চালাও, পরের লাইনে থামো'], ['↓ Step Into', '**F11**', 'এই লাইনে কোনো function ডাকা হলে, তার **ভেতরে** ঢুকে থামো'], ['↑ Step Out', '**Shift + F11**', 'এই function শেষ করে, যে ডেকেছিল সেখানে ফিরে থামো'], ['■ Stop', '**Shift + F5**', 'বন্ধ করো']] },
    'উপরের উদাহরণে বারবার **F10** চাপো আর VARIABLES দেখো। {{i}} 1, 2, 3, 4 হয়, তারপর {{i = 5}} হতেই loop থেকে বেরিয়ে যায়, {{sum += 5}} হয়ই না! তাই 10। ভুলটা চোখের সামনে: শর্ত হওয়ার কথা {{i <= n}}।',
    { h: 'আরো কিছু সুবিধা' },
    { list: ['**Hover**: থামা অবস্থায় কোডের যেকোনো variable এর উপর মাউস রাখলে তার মান দেখায়।', '**WATCH**: কোনো হিসাব লিখে রাখো (যেমন {{sum + i}} বা {{list.length}}), প্রতি ধাপে নিজে আপডেট হবে।', '**CALL STACK**: কোন function কাকে ডেকে এখানে এসেছি। Recursion বুঝতে দারুণ।', '**Conditional breakpoint**: লাল বিন্দুতে ডান ক্লিক → **Edit Breakpoint** → শর্ত লেখো, যেমন {{i == 50}}। 1000 বার ঘোরা loop এ শুধু দরকারি বারে থামবে।', '**DEBUG CONSOLE**: থামা অবস্থায় এখানে Dart লিখে মান দেখা যায়, যেমন {{sum * 2}}।'] },
    { tip: 'কখন print, কখন debugger? ছোট জিনিস এক নজরে দেখতে print ঠিক আছে। কিন্তু "কোথায় গোলমাল জানিই না" বা loop/recursion এর ভেতরে কী হচ্ছে বুঝতে হলে debugger অনেক দ্রুত।' },
  ],
  how: [
    'Debug মোডে চালালে Dart VM প্রোগ্রামটা চালায় কিন্তু VS Code এর সাথে একটা লাইন খোলা রাখে। প্রতিটা লাইন চালানোর আগে দেখে সেখানে breakpoint আছে কিনা।',
    'breakpoint পেলে প্রোগ্রাম "জমে" থাকে, কিন্তু memory তে সব variable যেমন ছিল তেমন থাকে। VS Code সেগুলো পড়ে VARIABLES এ দেখায়।',
    'Step Over মানে "একটা লাইন চালিয়ে আবার জমে যাও"। Step Into মানে লাইনের ভেতরে function থাকলে সেই function এর প্রথম লাইনে জমে যাও।',
  ],
  quiz: [
    { q: 'breakpoint দেওয়া লাইনে প্রোগ্রাম থামলে, ওই লাইনটা কি চলে গেছে?', opts: ['হ্যাঁ, চলার পরে থামে', 'না, চালানোর ঠিক আগে থামে', 'অর্ধেক চলে', 'breakpoint এ প্রোগ্রাম শেষ হয়ে যায়'], a: 1, why: 'হলুদ লাইন মানে "এটা এখন চলবে"। F10 চাপলে চলবে।' },
    { q: '{{print(sumTo(5));}} লাইনে থেমে আছো। sumTo এর ভেতরে কী হয় দেখতে কোনটা চাপবে?', opts: ['F10 (Step Over)', 'F11 (Step Into)', 'Shift + F5', 'F5'], a: 1, why: 'Step Into ফাংশনের ভেতরে ঢোকে। Step Over পুরো লাইন একবারে চালিয়ে দেয়।' },
    { q: '১০০০ বার ঘোরা loop এ শুধু {{i == 777}} এ থামতে চাও। কী করবে?', opts: ['১০০০ বার F5 চাপবো', 'conditional breakpoint: শর্ত i == 777', 'loop ছোট করে দেবো', 'সম্ভব না'], a: 1, why: 'breakpoint এ ডান ক্লিক → Edit Breakpoint → শর্ত।' },
  ],
  probs: [
    { l: 'e', q: 'উপরের {{sumTo}} কোডটা VS Code এ লেখো, loop এর লাইনে breakpoint দিয়ে Debug চালাও। F10 চেপে চেপে প্রতি ধাপে {{i}} আর {{sum}} এর মান খাতায় টেবিল করে লেখো।', ans: 'টেবিল (sum += i এর পরে): i=1 sum=1, i=2 sum=3, i=3 sum=6, i=4 sum=10। তারপর i=5 হলে {{5 < 5}} false, loop শেষ। return 10।\nঠিক করতে: {{i <= n}}। আবার Debug করে দেখো এবার i=5 এও ঢোকে, sum=15।' },
    { l: 'm', q: 'এই recursion Debug করো: {{return}} লাইনে breakpoint দাও, F5 দিয়ে বারবার Continue করো আর **CALL STACK** দেখো। কতগুলো {{fact}} একসাথে স্তূপে থাকে?', code: `int fact(int n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

void main() {
  print(fact(4));
}`, ans: 'সবচেয়ে গভীরে CALL STACK এ থাকে: fact(1), fact(2), fact(3), fact(4), main। মানে ৪টা fact একসাথে অপেক্ষা করছে।\nfact(1) ফেরত দেয় 1, তারপর একটা একটা করে উপরে উঠে: 2×1=2, 3×2=6, 4×6=24। Recursion এর "স্তূপ" নিজের চোখে দেখার এর চেয়ে ভালো উপায় নেই।' },
    { l: 'm', q: 'একটা list এ ১০০টা সংখ্যা, কোথাও একটা negative আছে যেটা থাকার কথা না। conditional breakpoint দিয়ে কিভাবে সেটায় থামবে?', code: `void main() {
  var nums = List.generate(100, (i) => i == 63 ? -1 : i);
  int sum = 0;
  for (var x in nums) {
    sum += x;
  }
  print(sum);
}`, ans: '{{sum += x;}} লাইনে breakpoint দাও, ডান ক্লিক → **Edit Breakpoint** → Expression এ লেখো {{x < 0}} → Enter। Debug চালাও। ঠিক যখন x = -1, তখনই থামবে। VARIABLES এ দেখবে sum কত পর্যন্ত গিয়েছিল।' },
  ],
};

TOPICS['clean-code'] = {
  short: 'কোড সুন্দর রাখা', title: 'কোড সুন্দর রাখা: নাম, ভাগ, format আর analyze', days: 'Function শেখার পরে, বারবার',
  goal: 'এমন কোড লেখা যেটা শুধু কম্পিউটার না, মানুষও (৩ মাস পরের তুমিও) সহজে পড়তে পারে।',
  learn: [
    'কোড একবার লেখা হয়, কিন্তু পড়া হয় অনেকবার: ভুল খুঁজতে, নতুন জিনিস যোগ করতে, বন্ধুকে দেখাতে। দুইটা কোড একই কাজ করলেও, যেটা পড়ে বোঝা সহজ সেটাই ভালো কোড। চলো দেখি একটা কোড কিভাবে ধাপে ধাপে সুন্দর হয়।',
    { h: 'আগে: কাজ করে, কিন্তু কী করে?' },
    { code: `void main() {
  var a = [72, 45, 88, 31, 95];
  var b = 0;
  for (var x in a) { if (x >= 40) b++; }
  print(b);
  var c = 0;
  for (var x in a) { c += x; }
  print(c / a.length);
}` },
    { h: 'পরে: পড়লেই বোঝা যায়' },
    { code: `const passMark = 40;

int countPassed(List<int> marks) =>
    marks.where((m) => m >= passMark).length;

double average(List<int> marks) =>
    marks.reduce((a, b) => a + b) / marks.length;

void main() {
  var marks = [72, 45, 88, 31, 95];
  print('পাশ করেছে: \${countPassed(marks)} জন');
  print('গড়: \${average(marks).toStringAsFixed(1)}');
}`, out: 'পাশ করেছে: 4 জন\nগড়: 66.2' },
    { h: '১. নাম দেখে কাজ বোঝা যাক' },
    { table: [['খারাপ', 'ভালো', 'কেন'], ['{{a}}, {{b}}, {{x}}', '{{marks}}, {{passCount}}', 'নাম পড়লেই জানা যায় ভেতরে কী'], ['{{list1}}', '{{students}}', 'কিসের list?'], ['{{flag}}', '{{isFound}}, {{hasError}}', 'bool এর নাম is/has দিয়ে, প্রশ্নের মতো'], ['{{calc()}}', '{{totalPrice()}}', 'function এর নাম কাজ বলে'], ['{{student_name}}', '{{studentName}}', 'Dart এর নিয়ম: camelCase (ছোট দিয়ে শুরু, পরের শব্দ বড় হাতের)'], ['{{student}} (class)', '{{Student}}', 'class এর নাম বড় হাতের অক্ষর দিয়ে শুরু']] },
    { tip: 'loop এর ছোট গণ্ডিতে {{i}}, {{j}} চলে। কিন্তু যত বড় এলাকায় variable ব্যবহার হয়, নাম তত পরিষ্কার হওয়া উচিত।' },
    { h: '২. জাদুর সংখ্যা নয়, নাম দেওয়া ধ্রুবক' },
    'কোডের মাঝে হঠাৎ {{40}} দেখলে বোঝা যায় না এটা কী। {{const passMark = 40;}} লিখলে মানেও বোঝা যায়, আর পাশ নম্বর বদলাতে হলে এক জায়গায় বদলালেই হয়।',
    { h: '৩. এক function, এক কাজ' },
    'একটা function অনেক লম্বা হয়ে গেলে (২০-৩০ লাইনের বেশি), বা তার নাম দিতে গিয়ে "এবং" বলতে হলে ("পাশ গোনো **এবং** গড় বের করো"), তাকে ভাগ করো। ছোট function এর নাম দেখেই পুরো প্রোগ্রাম গল্পের মতো পড়া যায়।',
    'একই কোড দুই-তিন জায়গায় কপি করছো? সেটা একটা function বানানোর সংকেত। একে বলে **DRY**: Don\'t Repeat Yourself (নিজের কোড বারবার লিখো না)।',
    { h: '৪. comment: কী না, কেন' },
    { code: `// খারাপ: কোড যা বলছে তাই আবার বলা
i++; // i এক বাড়াও

// ভালো: কেন, যেটা কোড দেখে বোঝা যায় না
// 0 বাদ দিচ্ছি কারণ সেন্সর বন্ধ থাকলে 0 পাঠায়, আসল মাপ না
var readings = raw.where((r) => r != 0);` },
    { h: '৫. যন্ত্রকে কাজে লাগাও: format আর analyze' },
    { code: 'dart format .\ndart analyze', lang: 'bash', out: 'Formatted 3 files (1 changed) in 0.05 seconds.\nAnalyzing my_app...\n  info - bin/main.dart:3:7 - The value of the local variable \'temp\' isn\'t used. - unused_local_variable\n1 issue found.' },
    { list: ['{{dart format .}}: সব ফাইল একই নিয়মে সাজায় (VS Code এ Shift + Alt + F এর কাজ)। স্পেস, লাইন ভাঙা নিয়ে আর ভাবতে হয় না।', '{{dart analyze}}: চালানো ছাড়াই কোড পড়ে সমস্যা খোঁজে: ব্যবহার না হওয়া variable, ভুল হওয়ার সম্ভাবনা আছে এমন জায়গা। error ঠিক করতেই হবে, warning আর info গুলোও দেখো।', 'VS Code এ **Problems** প্যানেল (Ctrl + Shift + M) এ এই একই তালিকা দেখা যায়।'] },
  ],
  how: [
    'কম্পিউটারের কাছে {{a}} আর {{marks}} একই, সে নাম পড়ে কিছু বোঝে না। নাম শুধু মানুষের জন্য। তাই ভালো নাম মানে মানুষের মাথার কাজ কমানো।',
    '{{dart format}} সবার কোড একই রকম সাজায়। তাই অন্যের কোড পড়তেও চোখ অভ্যস্ত থাকে, আর "স্পেস কোথায় দেবো" নিয়ে কারো সময় নষ্ট হয় না।',
    '{{dart analyze}} সেই একই যন্ত্র যেটা VS Code এ লাল-হলুদ দাগ দেয়। terminal থেকে চালালে পুরো প্রজেক্টের সব সমস্যা একসাথে দেখায়।',
  ],
  quiz: [
    { q: 'কোনটা Dart এর নিয়ম মেনে variable এর সবচেয়ে ভালো নাম?', opts: ['TotalMarks', 'total_marks', 'totalMarks', 'tm'], a: 2, why: 'variable আর function: camelCase। class: PascalCase (বড় দিয়ে শুরু)। আর tm দেখে কিছু বোঝা যায় না।' },
    { q: 'কোন comment সবচেয়ে কাজের?', opts: ['// sum এ x যোগ করো', '// loop', '// ১৮ বছরের নিচে ভোট দেওয়া যায় না, তাই বাদ', '// TODO'], a: 2, why: 'কেন এই নিয়ম, সেটা কোড দেখে বোঝা যায় না। বাকিগুলো কোড যা বলছে তাই বলছে।' },
    { q: 'একই ৫ লাইনের কোড ৩ জায়গায় কপি করেছ। কী করা উচিত?', opts: ['ঠিক আছে, চলছে তো', 'একটা function বানিয়ে ৩ জায়গা থেকে ডাকো', 'comment দিয়ে রাখো', 'ফাইল আলাদা করো'], a: 1, why: 'DRY: পরে বদলাতে হলে এক জায়গায় বদলালেই হবে, তিন জায়গায় না।' },
  ],
  probs: [
    { l: 'e', q: 'এই variable গুলোর ভালো নাম দাও: {{n}} (ছাত্রের নাম), {{x}} (মোট দাম), {{f}} (পাওয়া গেছে কিনা), {{l}} (বইয়ের তালিকা)।', ans: '{{studentName}}, {{totalPrice}}, {{isFound}}, {{books}}।\nbool এর নাম প্রশ্নের মতো (is/has), list এর নাম বহুবচন (books, students)।' },
    { l: 'e', q: 'নিচের কোডকে {{dart format}} এর মতো সাজাও (খাতায়, তারপর VS Code এ Shift + Alt + F দিয়ে মিলাও)।', code: `void main(){int x=5;if(x>3){print('বড়');}else{print('ছোট');}}`, sol: `void main() {
  int x = 5;
  if (x > 3) {
    print('বড়');
  } else {
    print('ছোট');
  }
}` },
    { l: 'm', q: 'এই কোডে "জাদুর সংখ্যা" খুঁজে বের করো আর নাম দেওয়া ধ্রুবক বানাও।', code: `double price(int qty) {
  double total = qty * 120.0;
  if (total > 1000) total = total * 0.9;
  return total + 60;
}`, sol: `const unitPrice = 120.0;
const discountLimit = 1000;
const discountRate = 0.9;   // ১০% ছাড়
const deliveryCharge = 60;

double price(int qty) {
  double total = qty * unitPrice;
  if (total > discountLimit) total = total * discountRate;
  return total + deliveryCharge;
}`, note: 'এখন কেউ পড়লেই বুঝবে 60 হলো ডেলিভারি চার্জ। আর দাম বদলালে শুধু উপরে এক লাইন বদলাবে।' },
    { l: 'm', q: 'এই লম্বা main কে ৩টা ছোট function এ ভাগ করো: একটা সবচেয়ে বড় বের করে, একটা জোড়গুলো গোনে, একটা উল্টো করে।', code: `void main() {
  var nums = [4, 9, 2, 7, 6];
  int big = nums[0];
  for (var n in nums) { if (n > big) big = n; }
  print(big);
  int even = 0;
  for (var n in nums) { if (n % 2 == 0) even++; }
  print(even);
  var rev = <int>[];
  for (int i = nums.length - 1; i >= 0; i--) { rev.add(nums[i]); }
  print(rev);
}`, sol: `int maxOf(List<int> nums) {
  int best = nums[0];
  for (var n in nums) {
    if (n > best) best = n;
  }
  return best;
}

int countEven(List<int> nums) => nums.where((n) => n.isEven).length;

List<int> reversed(List<int> nums) => nums.reversed.toList();

void main() {
  var nums = [4, 9, 2, 7, 6];
  print(maxOf(nums));      // 9
  print(countEven(nums));  // 3
  print(reversed(nums));   // [6, 7, 2, 9, 4]
}` },
    { l: 'h', q: 'নিজের পুরানো যেকোনো একটা সমস্যার সমাধান খোলো। এই পাতার ৫টা নিয়ম ধরে ধরে উন্নত করো, তারপর {{dart analyze}} চালিয়ে দেখো কোনো issue আছে কিনা।', ans: 'চেকলিস্ট: ১) প্রতিটা নাম দেখে কাজ বোঝা যায়? ২) জাদুর সংখ্যা আছে? ৩) কোনো function কি দুইটা কাজ করছে? ৪) কপি করা কোড আছে? ৫) comment গুলো "কেন" বলছে? তারপর {{dart format .}} আর {{dart analyze}}। একই কাজ, কিন্তু এক মাস পরে পড়লেও বুঝবে।' },
  ],
};

TOPICS['packages'] = {
  short: 'Package (pub.dev)', title: 'Package: অন্যদের বানানো কোড ব্যবহার', days: 'List, Map আর async শেখার পরে',
  goal: 'নিজে সব কিছু না বানিয়ে pub.dev থেকে তৈরি package খুঁজে, প্রজেক্টে যোগ করে ব্যবহার করতে পারা।',
  learn: [
    'ইন্টারনেট থেকে তথ্য আনা, তারিখ সুন্দর করে লেখা, ছবি নিয়ে কাজ: এগুলো প্রতিবার শূন্য থেকে বানাতে হয় না। সারা পৃথিবীর প্রোগ্রামাররা তাদের কোড **package** বানিয়ে [pub.dev](https://pub.dev) এ রেখে দেয়, বিনামূল্যে। তুমি এক command এ নিজের প্রজেক্টে এনে ব্যবহার করতে পারো। Flutter এর app গুলোও এভাবেই বানানো হয়।',
    { h: 'প্রজেক্ট বানানো' },
    'package ব্যবহার করতে একটা ফাইল যথেষ্ট না, একটা **প্রজেক্ট** লাগে। Dart নিজেই বানিয়ে দেয়:',
    { code: 'dart create weather\ncd weather\ndart run', lang: 'bash', out: 'Creating weather using template console...\n  .gitignore\n  analysis_options.yaml\n  bin/weather.dart\n  lib/weather.dart\n  pubspec.yaml\n  ...\nHello world: 42!' },
    { table: [['ফাইল / ফোল্ডার', 'কাজ'], ['{{bin/weather.dart}}', 'এখানে {{main}}। প্রোগ্রাম শুরু হয় এখান থেকে।'], ['{{lib/}}', 'বাকি কোড (function, class)। bin থেকে import করে ব্যবহার।'], ['{{pubspec.yaml}}', 'প্রজেক্টের পরিচয়পত্র: নাম, Dart এর version, আর কোন কোন package লাগবে।'], ['{{pubspec.lock}}', 'ঠিক কোন version এর package নামানো হয়েছে, Dart নিজে লেখে। হাত দিও না।'], ['{{.dart_tool/}}', 'Dart এর নিজের কাজের ফোল্ডার। হাত দিও না, Git এও দিও না।']] },
    { h: 'package খোঁজা আর যোগ করা' },
    '[pub.dev](https://pub.dev) এ খোঁজো কী লাগবে, যেমন "http"। package বাছাইয়ের সময় দেখো: **LIKES** আর **DOWNLOADS** বেশি কিনা, **Dart 3 compatible** কিনা, শেষ কবে আপডেট হয়েছে। নীল টিক দেওয়া **Verified publisher** (যেমন dart.dev) হলে আরো ভরসা।',
    { code: 'dart pub add http', lang: 'bash', out: 'Resolving dependencies...\n+ http 1.2.2\nChanged 6 dependencies!' },
    'এটা {{pubspec.yaml}} এ নিজে লিখে দেয়:',
    { code: `dependencies:
  http: ^1.2.2`, lang: 'plaintext' },
    { list: ['{{^1.2.2}} মানে "1.2.2 বা তার নতুন, কিন্তু 2.0.0 এর আগে"। বড় সংখ্যা বদলালে কোড ভাঙতে পারে, তাই Dart নিজে থেকে সেখানে যায় না।', 'অন্যের প্রজেক্ট নামালে বা pubspec.yaml নিজে বদলালে {{dart pub get}} চালাও: লিস্টের সব package নামিয়ে আনে।', 'শুধু test বা কাজের সময় লাগে এমন package ({{test}}, {{lints}}) যায় {{dev_dependencies}} এ: {{dart pub add --dev test}}।'] },
    { h: 'ব্যবহার করা' },
    { code: `import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> main() async {
  var url = Uri.parse('https://api.github.com/users/dart-lang');
  var res = await http.get(url);
  var data = jsonDecode(res.body);
  print('\${data['name']} এর public repo: \${data['public_repos']}টা');
}`, out: 'Dart এর public repo: ...টা' },
    { list: ["{{import 'package:http/http.dart'}}: {{package:}} মানে pub থেকে আনা package। {{dart:}} মানে Dart এর নিজের।", '{{as http}}: সব কিছুর আগে {{http.}} লিখতে হবে, যাতে অন্য নামের সাথে না মেলে।', 'package এর pub.dev পাতায় **Example** আর **README** তে ব্যবহারের নিয়ম থাকে। সেখান থেকেই শুরু করো।'] },
    { tip: 'কিছু কাজের package: {{http}} (ইন্টারনেট), {{intl}} (তারিখ, সংখ্যা সুন্দর করে লেখা), {{path}} (ফাইলের ঠিকানা), {{collection}} (List/Map এর বাড়তি method), {{args}} (terminal argument)। সব Dart টিমের নিজের।' },
    { warn: 'package মানে অন্যের কোড তোমার কম্পিউটারে চলছে। অচেনা, কম ব্যবহৃত, অনেকদিন আপডেট হয়নি এমন package এড়িয়ে চলো। আর শুধু দরকার হলে package আনো: ২ লাইনের কাজের জন্য package না।' },
  ],
  how: [
    '{{dart pub add}} pub.dev থেকে package টা নামিয়ে কম্পিউটারের একটা সাধারণ জায়গায় রাখে (pub cache)। প্রতিটা প্রজেক্ট সেখান থেকে ব্যবহার করে, তাই একই package বারবার নামাতে হয় না।',
    'একটা package নিজেও অন্য package ব্যবহার করতে পারে। Dart সব মিলিয়ে এমন version গুলো বেছে নেয় যেগুলো একসাথে চলে। এই হিসাবকে বলে **resolving dependencies**। ফলাফল লেখা থাকে pubspec.lock এ।',
    "{{import 'package:http/...'}} দেখলে Dart pubspec.lock দেখে বোঝে ঠিক কোন ফোল্ডার থেকে ফাইলটা আনতে হবে।",
  ],
  quiz: [
    { q: 'নতুন package যোগ করার command কোনটা?', opts: ['dart install http', 'dart pub add http', 'import http', 'dart get http'], a: 1, why: '{{dart pub add}} নামায় আর pubspec.yaml এ লিখেও দেয়।' },
    { q: "{{import 'dart:math';}} আর {{import 'package:http/http.dart';}} এর পার্থক্য?", opts: ['কোনো পার্থক্য নেই', 'dart: হলো Dart এর নিজের, package: হলো pub থেকে আনা (আগে dart pub add লাগে)', 'package: বেশি দ্রুত', 'dart: শুধু Flutter এ চলে'], a: 1, why: 'dart: এর library গুলো Dart এর সাথেই আসে। package: গুলো আলাদা করে যোগ করতে হয়।' },
    { q: "{{http: ^1.2.2}} থাকলে কোন version আসতে পারে?", opts: ['শুধু 1.2.2', '1.2.2 থেকে 2.0.0 এর আগে পর্যন্ত যেকোনো', 'যেকোনো version', '1.0.0 থেকে 1.2.2'], a: 1, why: '{{^}} মানে একই বড় version (1.x) এর মধ্যে নতুনগুলো চলবে।' },
  ],
  probs: [
    { l: 'e', q: '{{dart create}} দিয়ে {{hello_pkg}} প্রজেক্ট বানাও, চালাও, আর খাতায় লেখো কোন ফাইলে main আছে।', sol: 'dart create hello_pkg\ncd hello_pkg\ndart run\n# main আছে bin/hello_pkg.dart এ', lang: 'bash' },
    { l: 'e', q: 'pub.dev এ গিয়ে {{intl}} package খোঁজো। খাতায় লেখো: কে বানিয়েছে (publisher), কতগুলো like, আর README তে প্রথম উদাহরণটা কী করে।', ans: 'publisher: dart.dev (verified, নীল টিক)। like আর download সংখ্যা পাতায় যা দেখায় তাই। intl দিয়ে তারিখ, সংখ্যা, টাকা দেশের নিয়ম অনুযায়ী লেখা যায়, যেমন {{DateFormat(\'dd MMMM yyyy\').format(DateTime.now())}}।\nএই অভ্যাসটাই আসল শিক্ষা: package বাছাইয়ের আগে তার পাতা পড়া।' },
    { l: 'm', q: '{{intl}} package যোগ করে আজকের তারিখ "15 October 2026" এর মতো করে প্রিন্ট করো।', sol: `// terminal: dart pub add intl
import 'package:intl/intl.dart';

void main() {
  var now = DateTime.now();
  print(DateFormat('d MMMM yyyy').format(now));
}` },
    { l: 'h', q: '{{http}} দিয়ে {{https://api.github.com/users/<তোমার বা যেকোনো username>}} থেকে তথ্য এনে নাম, follower সংখ্যা আর repo সংখ্যা প্রিন্ট করো। ইন্টারনেট না থাকলে বা username ভুল হলে crash না করে বুঝিয়ে বলো।', sol: `import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> main() async {
  var user = 'dart-lang';
  try {
    var res = await http.get(Uri.parse('https://api.github.com/users/$user'));
    if (res.statusCode == 404) {
      print('$user নামে কেউ নেই');
      return;
    }
    var d = jsonDecode(res.body);
    print('নাম: \${d['name'] ?? user}');
    print('follower: \${d['followers']}');
    print('repo: \${d['public_repos']}');
  } catch (e) {
    print('ইন্টারনেট সমস্যা, পরে চেষ্টা করো');
  }
}`, note: 'statusCode 200 মানে ঠিক আছে, 404 মানে পাওয়া যায়নি। async আর JSON টপিকের জিনিসগুলো এখানে একসাথে কাজে লাগলো।' },
  ],
};

TOPICS['inside'] = {
  short: 'কম্পিউটারের ভেতরে', title: 'কম্পিউটারের ভেতরে: বিট, মেমরি, অক্ষর আর 0.1 + 0.2', days: 'যখন কৌতূহল জাগবে',
  goal: 'কম্পিউটার আসলে সংখ্যা আর লেখা কিভাবে রাখে সেটা বোঝা, যাতে অদ্ভুত ফলাফল ({{0.30000000000000004}}) দেখে অবাক না হও।',
  learn: [
    'Dart এ আমরা লিখি {{int age = 14;}} বা {{\'রাফি\'}}। কিন্তু কম্পিউটারের ভেতরে আছে শুধু কোটি কোটি ছোট সুইচ, প্রতিটা হয় **চালু (1)** নয়তো **বন্ধ (0)**। সব কিছু, সংখ্যা, লেখা, ছবি, গান, এই 0 আর 1 দিয়েই রাখা।',
    { h: 'বিট আর বাইট' },
    { table: [['নাম', 'কত বড়', 'উদাহরণ'], ['**bit**', 'একটা 0 বা 1', 'একটা সুইচ'], ['**byte**', '৮টা bit', 'একটা ইংরেজি অক্ষর'], ['**KB** (কিলোবাইট)', '১০২৪ byte', 'ছোট একটা লেখার ফাইল'], ['**MB** (মেগাবাইট)', '১০২৪ KB', 'একটা গান'], ['**GB** (গিগাবাইট)', '১০২৪ MB', 'একটা সিনেমা, বা ফোনের RAM']] },
    { h: 'বাইনারি: শুধু 0 আর 1 দিয়ে গোনা' },
    'আমরা গুনি দশটা অঙ্ক দিয়ে (0-9), কারণ আমাদের দশটা আঙুল। কম্পিউটারের আছে দুইটা "আঙুল" (0, 1), তাই সে গোনে **বাইনারি** তে। প্রতিটা ঘরের মান আগেরটার দ্বিগুণ:',
    { array: ['1', '1', '0', '1'], cap: 'বাইনারি 1101: ঘরের মান বাম থেকে 8, 4, 2, 1। তাই 8 + 4 + 0 + 1 = 13' },
    { code: `void main() {
  print(13.toRadixString(2));           // দশমিক থেকে বাইনারি
  print(int.parse('1101', radix: 2));   // বাইনারি থেকে দশমিক
  print(255.toRadixString(16));         // ষোলোভিত্তিক (hex): রঙের কোডে দেখো #ff
}`, out: '1101\n13\nff' },
    { h: 'int এর একটা সীমা আছে' },
    'Dart এর {{int}} রাখতে ৬৪টা bit লাগে। তাই সবচেয়ে বড় int হলো {{9223372036854775807}} (প্রায় ৯২০ কোটি কোটি)। এর পরে কী হয়?',
    { code: `void main() {
  int big = 9223372036854775807;
  print(big + 1);
}`, out: '-9223372036854775808' },
    'ঘড়ির কাঁটার মতো ঘুরে একদম negative এ চলে গেল! একে বলে **overflow**। সাধারণ কাজে এত বড় সংখ্যা লাগে না, কিন্তু factorial এর মতো জিনিসে খুব তাড়াতাড়ি এখানে পৌঁছায় ({{21!}} ই সীমা পার হয়ে যায়)। আরো বড় লাগলে {{BigInt}}।',
    { warn: 'ব্রাউজারে (DartPad বা Flutter web এ) Dart চলে JavaScript হয়ে, সেখানে int এর সীমা ভিন্ন। তাই এই উদাহরণ DartPad আর কম্পিউটারে আলাদা ফল দিতে পারে।' },
    { h: '0.1 + 0.2 কেন 0.3 না?' },
    { code: `void main() {
  print(0.1 + 0.2);
  print(0.1 + 0.2 == 0.3);
}`, out: '0.30000000000000004\nfalse' },
    'ভয় পেও না, এটা Dart এর ভুল না, প্রায় সব ভাষায় একই। দশমিকে {{1/3}} কে পুরোপুরি লেখা যায় না ({{0.3333...}} চলতেই থাকে)। ঠিক তেমনি বাইনারিতে {{0.1}} কে পুরোপুরি লেখা যায় না। কম্পিউটার কাছাকাছি একটা মান রাখে, যোগ করলে সেই ছোট্ট গরমিল দেখা দেয়।',
    { list: ['দেখানোর সময়: {{(0.1 + 0.2).toStringAsFixed(2)}} → {{0.30}}', 'তুলনার সময় {{==}} না, পার্থক্য খুব ছোট কিনা দেখো: {{((a - b).abs() < 0.000001)}}', 'টাকা-পয়সার হিসাব double এ না, পয়সায় int দিয়ে করো: ১২.৫০ টাকা = {{1250}} পয়সা।'] },
    { h: 'অক্ষরও আসলে সংখ্যা' },
    'প্রতিটা অক্ষরের একটা নম্বর আছে, পৃথিবী জুড়ে একই নিয়মে। এই নিয়মের নাম **Unicode**। বাংলা {{ক}} এর নম্বর 2453, ইংরেজি {{A}} এর 65।',
    { code: `void main() {
  print('A'.codeUnitAt(0));       // 65
  print('ক'.codeUnits);           // [2453]
  print(String.fromCharCode(2453)); // ক
  print('আমি'.length);            // কয়টা অক্ষর?
  print('আমি'.runes.toList());
}`, out: '65\n[2453]\nক\n3\n[2438, 2478, 2495]' },
    '{{আমি}} দেখতে ২টা অক্ষর, কিন্তু {{length}} বলছে 3! কারণ ভেতরে আছে আ + ম + ি (কার চিহ্ন আলাদা নম্বর)। বাংলা লেখা নিয়ে কাজ করার সময় এটা মনে রাখো: উল্টাতে গেলে কার চিহ্ন অন্য অক্ষরে গিয়ে বসতে পারে।',
    { h: 'CPU, RAM আর Disk' },
    { table: [['অংশ', 'রান্নাঘরের উপমা', 'কাজ'], ['**CPU**', 'রাঁধুনি', 'হিসাব করে, নির্দেশ চালায়। সেকেন্ডে কোটি কোটি'], ['**RAM** (memory)', 'রান্নার টেবিল', 'এখন যা চলছে তার variable এখানে। দ্রুত, কিন্তু বন্ধ করলে মুছে যায়'], ['**Disk** (SSD)', 'আলমারি', 'ফাইল স্থায়ীভাবে রাখে। বন্ধ করলেও থাকে, কিন্তু ধীর']] },
    'তোমার প্রোগ্রামের variable থাকে RAM এ, তাই প্রোগ্রাম শেষ হলে সব হারায়। কিছু রেখে দিতে চাইলে ফাইলে (disk এ) লিখতে হয়।',
  ],
  how: [
    'কম্পিউটারের ভেতরে প্রতিটা "সুইচ" হলো transistor নামের একটা অতি ছোট জিনিস। একটা ফোনের চিপে কয়েক শত কোটি transistor থাকে।',
    'double রাখা হয় বিজ্ঞানের নোটেশনের মতো করে: একটা সংখ্যা আর একটা ঘাত (যেমন 1.5 × 2³)। তাই খুব বড় আর খুব ছোট দুইটাই রাখা যায়, কিন্তু নির্ভুলতা সীমিত, প্রায় ১৫-১৬ অঙ্ক পর্যন্ত।',
    'Dart এর String ভেতরে UTF-16 নামের নিয়মে রাখা: প্রতিটা "code unit" ১৬ bit। বেশিরভাগ বাংলা অক্ষর একটা code unit এ ধরে, কিন্তু emoji এর মতো কিছু জিনিস দুইটা লাগে, তাই {{\'😀\'.length}} হয় 2।',
  ],
  quiz: [
    { q: 'বাইনারি {{101}} দশমিকে কত?', opts: ['101', '5', '3', '6'], a: 1, why: 'ঘরের মান 4, 2, 1। তাই 4 + 0 + 1 = 5।' },
    { q: '{{print(0.1 + 0.2 == 0.3);}} এর output?', opts: ['true', 'false', 'Error', '0.3'], a: 1, why: '0.1 + 0.2 আসলে 0.30000000000000004, তাই হুবহু সমান না।' },
    { q: "{{'আমি'.length}} কত?", opts: ['2', '3', '6', '1'], a: 1, why: 'আ, ম আর ি (কার চিহ্ন) তিনটা আলাদা code unit।' },
  ],
  probs: [
    { l: 'e', q: 'হাতে (খাতায়) বাইনারিতে বদলাও: 6, 10, 15। তারপর {{toRadixString(2)}} দিয়ে মিলাও।', sol: `void main() {
  print(6.toRadixString(2));   // 110
  print(10.toRadixString(2));  // 1010
  print(15.toRadixString(2));  // 1111
}`, note: 'হাতে করার নিয়ম: বারবার 2 দিয়ে ভাগ করো, ভাগশেষগুলো নিচ থেকে উপরে পড়ো। 6: 6/2=3 ভাগশেষ 0, 3/2=1 ভাগশেষ 1, 1/2=0 ভাগশেষ 1 → 110।' },
    { l: 'e', q: 'তোমার নামের প্রতিটা অক্ষরের Unicode নম্বর প্রিন্ট করো।', sol: `void main() {
  String name = 'রাফি';
  for (var c in name.runes) {
    print('\${String.fromCharCode(c)} → $c');
  }
}` },
    { l: 'm', q: 'loop দিয়ে বাইনারি বানানোর function লেখো ({{toRadixString}} ছাড়া): {{toBinary(13)}} → {{"1101"}}।', hint: 'বারবার {{n % 2}} নাও (শেষ বিট), তারপর {{n ~/ 2}}। পাওয়া বিটগুলো সামনে বসাতে থাকো।', sol: `String toBinary(int n) {
  if (n == 0) return '0';
  String bits = '';
  while (n > 0) {
    bits = '\${n % 2}' + bits;
    n = n ~/ 2;
  }
  return bits;
}

void main() {
  print(toBinary(13)); // 1101
  print(toBinary(8));  // 1000
}` },
    { l: 'm', q: 'দোকানে জিনিসের দাম 0.10, 0.20, 0.30 টাকা। double দিয়ে যোগ করলে কী হয়? এমনভাবে লেখো যাতে মোট ঠিক 0.60 আসে।', sol: `void main() {
  print(0.10 + 0.20 + 0.30);        // 0.6000000000000001
  var paisa = [10, 20, 30];          // পয়সায় int
  int total = paisa.reduce((a, b) => a + b);
  print('\${total ~/ 100}.\${(total % 100).toString().padLeft(2, '0')} টাকা'); // 0.60 টাকা
}`, note: 'টাকা-পয়সা সবসময় সবচেয়ে ছোট একক (পয়সা) এ int দিয়ে রাখো, দেখানোর সময় শুধু ভাগ করো।' },
    { l: 'h', q: 'factorial কত পর্যন্ত int এ ঠিক থাকে? 1! থেকে 25! পর্যন্ত প্রিন্ট করে দেখো কোথায় ভুল (negative বা অদ্ভুত) শুরু হয়। তারপর BigInt দিয়ে 25! ঠিক করে বের করো।', sol: `void main() {
  int f = 1;
  for (int i = 1; i <= 25; i++) {
    f *= i;
    print('$i! = $f');
  }
  BigInt big = BigInt.one;
  for (int i = 1; i <= 25; i++) {
    big *= BigInt.from(i);
  }
  print('আসল 25! = $big');
}`, note: '20! পর্যন্ত ঠিক থাকে। 21! থেকে overflow শুরু (negative দেখাবে)। BigInt যত বড় দরকার তত বড় হতে পারে, শুধু একটু ধীর।' },
  ],
};

TOPICS['flutter-intro'] = {
  short: 'Flutter প্রথম ধাপ', title: 'Flutter এর প্রথম ধাপ: Dart দিয়ে মোবাইল app', days: 'সব সপ্তাহ শেষে',
  goal: 'Flutter কী সেটা বোঝা, প্রথম app বানিয়ে চালানো, আর বোঝা যে এতদিনের শেখা Dart কিভাবে app এ কাজে লাগে।',
  learn: [
    'এতদিন যা শিখেছ সব Dart। **Flutter** হলো Google এর বানানো একটা যন্ত্র যেটা দিয়ে Dart এ লিখে **মোবাইল app** (Android, iPhone), **ওয়েবসাইট** আর **কম্পিউটারের app** বানানো যায়, একই কোড দিয়ে। এখন পর্যন্ত শেখা variable, function, class, List, async: সবই সরাসরি কাজে লাগবে। শুধু print এর জায়গায় স্ক্রিনে বোতাম, লেখা, ছবি।',
    { h: 'সবকিছুই widget' },
    'Flutter এ স্ক্রিনের প্রতিটা জিনিস একটা **widget**: লেখা ({{Text}}), বোতাম ({{ElevatedButton}}), সারি ({{Row}}), কলাম ({{Column}}), ফাঁকা জায়গা ({{SizedBox}})। widget এর ভেতরে widget, তার ভেতরে widget: একটা গাছের মতো। আর প্রতিটা widget আসলে একটা Dart **class** এর object!',
    { code: `MaterialApp
└── Scaffold            (পাতার কাঠামো)
    ├── AppBar          (উপরের নীল পট্টি)
    │   └── Text('আমার প্রথম app')
    └── Center
        └── Text('হ্যালো, Flutter!')`, lang: 'plaintext' },
    { h: 'প্রথম app (DartPad এই চালাও)' },
    'নিচের কোডের **▶ চালাও** চাপো। DartPad Flutter ও চালাতে পারে, ডান পাশে app দেখা যাবে!',
    { code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('আমার প্রথম app')),
        body: const Center(
          child: Text('হ্যালো, Flutter!', style: TextStyle(fontSize: 28)),
        ),
      ),
    );
  }
}` },
    { list: ['{{runApp(...)}}: app চালু করো, এই widget দিয়ে।', '{{class MyApp extends StatelessWidget}}: তোমার নিজের widget। OOP সপ্তাহের {{extends}} মনে আছে?', '{{build}}: এই method বলে স্ক্রিনে কী দেখাবে। একটা widget **return** করে।', "{{child:}}, {{title:}}: named parameter! function সপ্তাহের {{{required String name} }} এর মতো।", '{{const}}: যে widget কখনো বদলাবে না, Flutter সেটা একবার বানিয়েই রেখে দেয়, দ্রুত চলে।'] },
    { h: 'বদলায় এমন স্ক্রিন: StatefulWidget' },
    'বোতাম চাপলে সংখ্যা বাড়বে: এমন জিনিসের জন্য **StatefulWidget**। ভেতরে variable থাকে (state), আর {{setState}} দিয়ে বদলালে Flutter স্ক্রিন আবার আঁকে।',
    { code: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: Counter()));

class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('গোনার যন্ত্র')),
      body: Center(
        child: Text('$count', style: const TextStyle(fontSize: 64)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            count++;
          });
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}` },
    { tip: '{{onPressed: () { ... } }}: anonymous function! সপ্তাহ ৭ এ শিখেছিলে। বোতাম চাপলে এই function চলে।' },
    { h: 'নিজের কম্পিউটারে Flutter' },
    { list: ['[docs.flutter.dev/get-started](https://docs.flutter.dev/get-started) থেকে install। Flutter এর সাথে Dart আগে থেকেই থাকে।', 'terminal এ {{flutter doctor}}: কী কী ঠিক আছে আর কী বাকি, সবুজ টিক আর লাল দাগ দিয়ে বলে দেয়।', 'VS Code এ **Flutter** extension install করো।', 'প্রজেক্ট: {{flutter create my_app}}, তারপর {{cd my_app}}, তারপর {{flutter run}}। Chrome বা Android ফোন/emulator এ চলবে।', 'চলমান অবস্থায় কোড বদলে save করো (বা terminal এ {{r}} চাপো): **hot reload**। app না থামিয়েই বদল দেখা যায়, এক সেকেন্ডে। [Compile টপিকের](#dart-compile) JIT এর জাদু!'] },
    { h: 'এরপর কী শিখবে?' },
    { list: ['লেআউট: {{Row}}, {{Column}}, {{Container}}, {{Padding}}, {{ListView}}', 'ইউজারের input: {{TextField}}, বোতাম', 'একাধিক পাতা: {{Navigator}}', 'ইন্টারনেট থেকে তথ্য: [Package টপিকের](#packages) {{http}} + {{FutureBuilder}}', 'সবচেয়ে ভালো শুরু: Flutter এর অফিসিয়াল [codelab গুলো](https://docs.flutter.dev/codelabs)।'] },
  ],
  how: [
    'Flutter নিজেই স্ক্রিনের প্রতিটা pixel আঁকে, ফোনের নিজস্ব বোতাম-টোতাম ব্যবহার করে না। তাই Android আর iPhone এ হুবহু একই দেখায়।',
    '{{setState}} ডাকলে Flutter ওই widget এর {{build}} আবার চালায়, নতুন widget গাছ বানায়, আগেরটার সাথে মিলিয়ে দেখে কী বদলেছে, আর শুধু সেটুকু আবার আঁকে। তাই দ্রুত।',
    'debug মোডে (flutter run) Dart চলে JIT এ: তাই hot reload। Play Store এ দেওয়ার সময় ({{flutter build}}) AOT দিয়ে machine code: তাই app দ্রুত চলে।',
  ],
  quiz: [
    { q: 'Flutter এ স্ক্রিনে লেখা দেখানোর widget কোনটা?', opts: ['print()', 'Text()', 'String()', 'Label()'], a: 1, why: '{{print}} যায় console এ। স্ক্রিনে দেখাতে {{Text(\'...\')}} widget।' },
    { q: 'বোতাম চাপলে সংখ্যা বাড়বে আর স্ক্রিনে দেখাবে। কোনটা লাগবে?', opts: ['StatelessWidget', 'StatefulWidget আর setState', 'শুধু একটা int variable', 'print'], a: 1, why: 'বদলায় এমন জিনিস = state। setState ছাড়া variable বদলালেও স্ক্রিন জানবে না।' },
    { q: 'hot reload সম্ভব হয় কেন?', opts: ['AOT compile এর জন্য', 'debug মোডে JIT এর জন্য', 'ইন্টারনেটের জন্য', 'Flutter web এর জন্য'], a: 1, why: 'JIT চলতে চলতে নতুন কোড অনুবাদ করে বসাতে পারে, app না থামিয়েই।' },
  ],
  probs: [
    { l: 'e', q: 'প্রথম app এ "হ্যালো, Flutter!" এর জায়গায় তোমার নাম দেখাও, আর লেখার সাইজ 40 করো। DartPad এ চালিয়ে দেখো।', sol: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('আমি রাফি', style: TextStyle(fontSize: 40)),
        ),
      ),
    ));` },
    { l: 'e', q: 'Counter app এ একটা লাইন বদলাও যাতে প্রতিবার চাপলে 1 এর বদলে 5 বাড়ে।', ans: '{{count++;}} এর জায়গায় {{count += 5;}}। ব্যস! Flutter এর ভেতরে সব সাধারণ Dart।' },
    { l: 'm', q: 'Counter এ আরেকটা বোতাম যোগ করো যেটা চাপলে সংখ্যা 0 হয়ে যায়। (হিন্ট: AppBar এর {{actions:}} এ একটা {{IconButton}})', sol: `// _CounterState এর build এর AppBar টা এভাবে:
appBar: AppBar(
  title: const Text('গোনার যন্ত্র'),
  actions: [
    IconButton(
      icon: const Icon(Icons.refresh),
      onPressed: () => setState(() => count = 0),
    ),
  ],
),` },
    { l: 'm', q: 'সংখ্যা জোড় হলে লেখা সবুজ, বিজোড় হলে লাল দেখাও।', sol: `// Text widget টা এভাবে:
Text(
  '$count',
  style: TextStyle(
    fontSize: 64,
    color: count % 2 == 0 ? Colors.green : Colors.red,
  ),
),`, note: 'ternary ({{? :}}) সপ্তাহ ৩ এর জিনিস! এখানে const সরাতে হলো, কারণ রঙ এখন বদলায়।' },
    { l: 'h', q: 'নিজের কম্পিউটারে Flutter install করে {{flutter create}} দিয়ে প্রজেক্ট বানাও, Chrome এ চালাও, তারপর লেখা বদলে hot reload দেখো।', sol: 'flutter doctor\nflutter create my_first_app\ncd my_first_app\nflutter run -d chrome\n# lib/main.dart এ লেখা বদলে save করো, বা terminal এ r চাপো', lang: 'bash' },
  ],
};

TOPICS['gallery'] = {
  short: 'প্রজেক্ট আইডিয়া', title: 'প্রজেক্ট আইডিয়া গ্যালারি: কী বানাবো?', days: 'প্রতি সপ্তাহের শেষে একটা',
  goal: 'নিজের শেখা অনুযায়ী একটা প্রজেক্ট বেছে নিয়ে শুরু থেকে শেষ পর্যন্ত নিজে বানানো।',
  learn: [
    'সমস্যা সমাধান হলো ব্যায়াম, আর প্রজেক্ট হলো খেলা। প্রজেক্টে কেউ ধাপ বলে দেয় না, তুমি নিজে ঠিক করো কী কী লাগবে। নিচে প্রতিটা আইডিয়ার পাশে লেখা আছে কোন সপ্তাহ পর্যন্ত শিখলে বানানো যাবে। নিজের সপ্তাহের বা আগের যেকোনোটা বেছে নাও।',
    { h: 'প্রজেক্টের নিয়ম' },
    { list: ['**ছোট শুরু**: প্রথম দিন শুধু সবচেয়ে ছোট চলার মতো রূপ। তারপর একটা একটা feature।', '**খাতায় আগে**: কী কী দেখাবে, ইউজার কী লিখবে, কী কী function লাগবে।', '**Git এ রাখো**: প্রতিটা feature চললেই commit ([Git টপিক](#git))।', '**নিজের মতো বদলাও**: নিচের আইডিয়া শুধু শুরু। নিজের পছন্দের বিষয় (ক্রিকেট, গেম, স্কুল) বসিয়ে দাও।', '**শেষ করো**: অর্ধেক ১০টা প্রজেক্টের চেয়ে পুরো ১টা অনেক বেশি শেখায়।'] },
    { tip: 'বানানো শেষে বন্ধু বা পরিবারকে চালিয়ে দেখাও। ওরা যেভাবে ব্যবহার করবে, সেটা দেখে নতুন bug আর নতুন আইডিয়া দুইটাই পাবে।' },
  ],
  how: [
    'প্রতিটা আইডিয়া নিচে "সমস্যা" হিসেবে আছে, তাই শেষ করলে "নিজে পেরেছি" টিক দিতে পারো, অগ্রগতিতে গোনা হবে।',
    'হিন্ট এ আছে শুরু করার সূত্র, আর কোন টপিকের জিনিস লাগবে। সমাধান দেওয়া নেই ইচ্ছা করে: প্রজেক্টের কোনো এক সঠিক উত্তর হয় না।',
  ],
  probs: [
    { l: 'p', q: '**নামতা যন্ত্র** (সপ্তাহ ২-৪): ইউজার একটা সংখ্যা দেবে, তার নামতা 1 থেকে 10 সুন্দর করে দেখাবে। তারপর জিজ্ঞেস করবে "আবার?"।', out: '7 x 1 = 7\n7 x 2 = 14 ...', hint: 'stdin দিয়ে input, for loop, while দিয়ে "আবার" চালানো। মোড়ক: {{padLeft}} দিয়ে সংখ্যা সোজা সারিতে।' },
    { l: 'p', q: '**সংখ্যা আন্দাজ** (সপ্তাহ ৩-৪): কম্পিউটার 1-100 এর মধ্যে একটা সংখ্যা ভাববে, তুমি আন্দাজ করবে, সে বলবে "বড়" না "ছোট"। শেষে কয়বারে পারলে।', hint: "{{import 'dart:math';}} আর {{Random().nextInt(100) + 1}}। while loop, if/else। বাড়তি: সহজ/কঠিন লেভেল (কঠিনে ৭ বারের বেশি সুযোগ নেই)।" },
    { l: 'p', q: '**রেজাল্ট কার্ড** (সপ্তাহ ৫-৬): ৫টা বিষয়ের নম্বর নিয়ে মোট, গড়, প্রতিটার গ্রেড (A+, A, ...) আর পাশ/ফেল দেখাবে।', out: 'বাংলা   78   A\nগণিত    92   A+\n...\nগড়: 81.4  ফলাফল: পাশ', hint: 'Map এ বিষয় → নম্বর। গ্রেড বের করার আলাদা function। গড় বের করার আলাদা function।' },
    { l: 'p', q: '**টু-ডু লিস্ট** (সপ্তাহ ৬-৭): মেনু: ১) কাজ যোগ ২) সব দেখাও ৩) শেষ চিহ্ন দাও ৪) মুছো ০) বের হও।', hint: 'List<String> দিয়ে শুরু করো। পরে class Task {String title; bool done;}। বাড়তি: ফাইলে সেভ যাতে বন্ধ করলেও থাকে।' },
    { l: 'p', q: '**শব্দের খেলা (Hangman)** (সপ্তাহ ৬-৮): কম্পিউটার একটা শব্দ বাছবে, তুমি অক্ষর আন্দাজ করবে। মিললে জায়গায় বসবে (_ a _ _), না মিললে জীবন কমবে।', hint: 'শব্দের List থেকে Random। আন্দাজ করা অক্ষরের Set। প্রতিবার শব্দের প্রতিটা অক্ষর দেখে: Set এ থাকলে অক্ষর, না থাকলে _।' },
    { l: 'p', q: '**খরচের খাতা** (সপ্তাহ ৭-৯): প্রতিদিনের খরচ (কী, কত টাকা, কোন ধরন) যোগ করো। ধরন অনুযায়ী মোট, সবচেয়ে বড় খরচ, এই মাসের মোট।', hint: 'class Expense। where দিয়ে ধরন বাছাই, fold দিয়ে যোগ, sort দিয়ে বড় থেকে ছোট। টাকা int এ (পয়সা হিসাবে) রাখলে নির্ভুল।' },
    { l: 'p', q: '**কুইজ গেম** (সপ্তাহ ৯-১১): প্রশ্ন আর উত্তরের অপশন JSON ফাইলে। প্রোগ্রাম এলোমেলো ক্রমে প্রশ্ন করবে, শেষে স্কোর।', hint: 'class Question। JSON থেকে List<Question> ({{fromJson}})। {{shuffle()}}। বাড়তি: প্রতি প্রশ্নে ১০ সেকেন্ড সময় (async)।' },
    { l: 'p', q: '**টিক-ট্যাক-টো** (সপ্তাহ ৬-৯): দুইজন খেলোয়াড়, ৩x৩ ঘর, পালা করে X আর O। জিতলে বা ড্র হলে জানাবে।', out: ' X | O | X\n---+---+---\n   | X |  \n---+---+---\n O |   | O', hint: 'List<List<String>> দিয়ে বোর্ড। জেতা চেক: ৩টা সারি, ৩টা কলাম, ২টা কোনাকুনি। বাড়তি: কম্পিউটারের সাথে খেলা।' },
    { l: 'p', q: '**আবহাওয়া দেখা** (Package টপিকের পরে): শহরের নাম দিলে ইন্টারনেট থেকে এখনকার তাপমাত্রা এনে দেখাবে।', hint: 'http package, বিনামূল্যের API (যেমন open-meteo.com, key লাগে না)। async/await, jsonDecode। ইন্টারনেট না থাকলে crash না করে বুঝিয়ে বলো।' },
    { l: 'p', q: '**Flutter: গোনার যন্ত্র থেকে আরো** (Flutter টপিকের পরে): Counter app এ যোগ করো: কমানোর বোতাম, শূন্যের নিচে না যাওয়া, ১০ হলে অভিনন্দন লেখা।', hint: '[Flutter প্রথম ধাপ](#flutter-intro) এর Counter থেকে শুরু। Row এর ভেতরে দুইটা বোতাম। if দিয়ে অভিনন্দন Text দেখানো।' },
  ],
};

// ---- debugging টপিকে "ভুল খোঁজো" খেলা ----
TOPICS.debugging.bugs = [
  { q: '1 থেকে 5 পর্যন্ত যোগ করার কথা (15), কিন্তু আসছে 10।', code: ['int sum = 0;', 'for (int i = 1; i < 5; i++) {', '  sum += i;', '}', 'print(sum);'], bug: 1, why: '{{i < 5}} হলে 5 আর ঢোকে না। 5 সহ চাইলে {{<=}}।', fix: 'for (int i = 1; i <= 5; i++) {' },
  { q: 'সংখ্যাগুলোর গুণফল বের করার কথা (24), কিন্তু আসছে 0।', code: ['var nums = [2, 3, 4];', 'int product = 0;', 'for (var n in nums) {', '  product *= n;', '}', 'print(product);'], bug: 1, why: 'গুণের শুরুর মান 0 হলে সব গুণফল 0। গুণ জমানোর শুরু হয় 1 দিয়ে।', fix: 'int product = 1;' },
  { q: 'list এর শেষ জিনিস প্রিন্ট করার কথা, কিন্তু RangeError।', code: ['var fruits = [\'আম\', \'জাম\', \'লিচু\'];', 'int last = fruits.length;', 'print(fruits[last]);'], bug: 1, why: '৩টা জিনিসের শেষ index 2, মানে {{length - 1}}।', fix: 'int last = fruits.length - 1;' },
  { q: 'বয়স ১৮ বা বেশি হলে "ভোট দিতে পারবে"। ১৮ দিলে বলছে পারবে না।', code: ['int age = 18;', 'if (age > 18) {', "  print('ভোট দিতে পারবে');", '} else {', "  print('পারবে না');", '}'], bug: 1, why: '"১৮ বা বেশি" মানে {{>=}}। {{>}} হলে ১৮ বাদ পড়ে।', fix: 'if (age >= 18) {' },
  { q: 'সবচেয়ে বড় সংখ্যা খোঁজার কথা, কিন্তু সব negative সংখ্যার list এ 0 দেখাচ্ছে।', code: ['var nums = [-5, -2, -9];', 'int best = 0;', 'for (var n in nums) {', '  if (n > best) best = n;', '}', 'print(best);'], bug: 1, why: 'best = 0 থেকে শুরু করলে কোনো negative সংখ্যা 0 এর বড় না। শুরু করো list এর প্রথমটা দিয়ে।', fix: 'int best = nums[0];' },
  { q: 'জোড় সংখ্যা গোনার কথা (3), কিন্তু আসছে 1।', code: ['var nums = [2, 7, 4, 9, 6];', 'int count = 0;', 'for (var n in nums) {', '  count = 0;', '  if (n % 2 == 0) count++;', '}', 'print(count);'], bug: 3, why: 'loop এর ভেতরে প্রতিবার count আবার 0 হয়ে যাচ্ছে। শুধু শেষ সংখ্যার হিসাব থাকে।', fix: '(এই লাইন মুছে দাও, count = 0 শুধু loop এর আগে)' },
  { q: 'নামটা উল্টো করে প্রিন্ট করার কথা ("িফার"), কিন্তু প্রথম অক্ষর বাদ পড়ছে।', code: ["String name = 'রাফি';", "String rev = '';", 'for (int i = name.length - 1; i > 0; i--) {', '  rev += name[i];', '}', 'print(rev);'], bug: 2, why: 'index 0 পর্যন্ত যেতে হবে, তাই {{i >= 0}}। {{i > 0}} হলে প্রথম অক্ষর বাদ।', fix: 'for (int i = name.length - 1; i >= 0; i--) {' },
  { q: 'while loop কখনো শেষ হচ্ছে না (infinite loop)।', code: ['int n = 1;', 'while (n <= 5) {', '  print(n);', '}'], bug: 2, why: 'n কখনো বাড়ছে না, তাই {{n <= 5}} চিরকাল true। loop এর ভেতরে n বাড়াতে হবে।', fix: "  print(n); n++;" },
  { q: 'গড় বের করার কথা (2.5), কিন্তু আসছে 2।', code: ['var nums = [1, 2, 3, 4];', 'int sum = nums.reduce((a, b) => a + b);', 'int avg = sum ~/ nums.length;', 'print(avg);'], bug: 2, why: '{{~/}} দশমিক কেটে ফেলে, আর int এ দশমিক রাখা যায় না। {{/}} আর double লাগবে।', fix: 'double avg = sum / nums.length;' },
  { q: 'function বর্গ ফেরত দেওয়ার কথা, কিন্তু main এ null/কিছু আসছে না।', code: ['int? square(int n) {', '  print(n * n);', '}', '', 'void main() {', '  int? r = square(4);', '  print(r);', '}'], bug: 1, why: 'print শুধু স্ক্রিনে দেখায়, ফেরত দেয় না। ফেরত দিতে {{return}}।', fix: '  return n * n;' },
  { q: 'পাসওয়ার্ড মিললে "স্বাগতম", কিন্তু ভুল পাসওয়ার্ডেও স্বাগতম বলছে।', code: ["String input = 'abc';", "String pass = '1234';", 'if (input != pass || input.isNotEmpty) {', "  print('স্বাগতম');", '}'], bug: 2, why: 'শর্ত উল্টো আর ভুল যুক্তি। মিললে স্বাগতম মানে {{input == pass}}। {{||}} এর কারণে খালি না হলেই ঢুকে যাচ্ছে।', fix: 'if (input == pass) {' },
  { q: 'Map থেকে দাম যোগ করার কথা, কিন্তু crash: Null check operator...', code: ["var price = {'আম': 50, 'জাম': 30};", "var cart = ['আম', 'কলা', 'জাম'];", 'int total = 0;', 'for (var item in cart) {', '  total += price[item]!;', '}'], bug: 4, why: "'কলা' Map এ নেই, তাই {{price['কলা']}} হলো null, আর {{!}} দিয়ে crash।", fix: '  total += price[item] ?? 0;' },
];
TOPICS.debugging.learn.push({ h: 'খেলা: ভুল খোঁজো' }, 'প্রতিটা কোডে ঠিক একটা লাইনে ভুল। উপরে লেখা আছে কী হওয়ার কথা আর কী হচ্ছে। আগে ছোট উদাহরণ নিয়ে মাথায় চালাও, তারপর ভুল লাইনে ক্লিক করো।', { widget: 'bugHunt' });

CARDS.push(
  { w: 'x', f: 'Debugger: থামার জায়গা দাও', b: 'লাইন নম্বরের বামে ক্লিক → লাল বিন্দু (breakpoint)\nতারপর F5 (Debug)' },
  { w: 'x', f: 'Debugger: এক লাইন সামনে / function এর ভেতরে', b: 'F10 (Step Over)\nF11 (Step Into)' },
  { w: 'x', f: 'কোড সাজাও আর সমস্যা খোঁজো (terminal)', b: 'dart format .\ndart analyze' },
  { w: 'x', f: 'variable / class এর নামের নিয়ম', b: 'variable, function: totalMarks (camelCase)\nclass: StudentCard (PascalCase)' },
  { w: 'x', f: 'নতুন প্রজেক্ট আর package যোগ', b: 'dart create my_app\ndart pub add http' },
  { w: 'x', f: 'pub থেকে আনা package import', b: "import 'package:http/http.dart' as http;" },
  { w: 'x', f: 'দশমিক থেকে বাইনারি / বাইনারি থেকে দশমিক', b: "13.toRadixString(2)      // 1101\nint.parse('1101', radix: 2)  // 13" },
  { w: 'x', f: 'double তুলনা নিরাপদে', b: '(a - b).abs() < 0.000001' },
  { w: 'x', f: 'Flutter: স্ক্রিন বদলাতে', b: 'setState(() {\n  count++;\n});' },
);
