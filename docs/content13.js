// নতুন টপিক: scope (সপ্তাহ ৫) আর logic (সপ্তাহ ২, && || !)
// nest block এর ছবি app.js এর nestBox আঁকে: বাক্সে ক্লিক করলে সেখান থেকে কোন variable দেখা যায় দেখায়

TRACES.scope = {
  title: 'variable কখন জন্মায়, কখন হারায়', box: 'এখন যারা বেঁচে আছে',
  code: ['int score = 0;              // global', '', 'void addPoints(int p) {', '  int bonus = 2;', '  score = score + p + bonus;', '}', '', 'void main() {', '  addPoints(5);', '  addPoints(3);', '  print(score);', '}'],
  steps: [
    { l: 0, v: { 'score (global)': 0 }, n: 'প্রোগ্রাম শুরুতেই global variable তৈরি হয়। পুরো প্রোগ্রাম চলাকালীন এটা বেঁচে থাকে।' },
    { l: 8, n: 'main থেকে {{addPoints(5)}} ডাকা হলো।' },
    { l: 2, v: { 'p (addPoints)': 5 }, n: 'function এ ঢুকতেই parameter {{p}} নতুন করে জন্মালো, মান 5।' },
    { l: 3, v: { 'bonus (addPoints)': 2 }, n: '{{bonus}} ও জন্মালো। এই দুইটা শুধু addPoints এর ভেতরে।' },
    { l: 4, v: { 'score (global)': 7 }, n: 'ভেতর থেকে বাইরের {{score}} দেখা যায়, তাই বদলানো গেল: 0 + 5 + 2 = 7।' },
    { l: 5, v: { 'p (addPoints)': null, 'bonus (addPoints)': null }, n: 'function শেষ। {{p}} আর {{bonus}} **মুছে গেল**। score রয়ে গেল, কারণ সেটা global।' },
    { l: 9, v: { 'p (addPoints)': 3 }, n: 'আবার ডাকলাম। {{p}} আবার **নতুন করে** জন্মালো, এবার 3। আগের বারের কিছুই মনে নেই।' },
    { l: 3, v: { 'bonus (addPoints)': 2 }, n: '{{bonus}} ও নতুন, আবার 2।' },
    { l: 4, v: { 'score (global)': 12 }, n: 'score আগের 7 মনে রেখেছে: 7 + 3 + 2 = 12।' },
    { l: 5, v: { 'p (addPoints)': null, 'bonus (addPoints)': null }, n: 'আবার function শেষ, ভেতরের সব মুছে গেল।' },
    { l: 10, p: '12', n: 'main থেকে score দেখা যায় (global), প্রিন্ট: 12। কিন্তু এখান থেকে {{bonus}} লিখলে Error, ওটা এখন নেই।' },
  ],
};

TOPICS['scope'] = {
  short: 'Scope', title: 'Scope: কোন variable কোথা থেকে দেখা যায়', days: 'দিন ৪',
  goal: 'বোঝা যে প্রতিটা variable এর একটা "এলাকা" আছে: global, function এর ভেতরে (local), আর { } ব্লকের ভেতরে। কোথা থেকে কাকে দেখা যায়, কতক্ষণ বেঁচে থাকে, আর একই নাম দুই জায়গায় হলে কী হয়।',
  learn: [
    'একটা বাড়ির কথা ভাবো। **বসার ঘরের** টিভি বাড়ির সবাই দেখতে পারে। কিন্তু তোমার **নিজের ঘরের** আলমারির ভেতরের জিনিস শুধু তুমি দেখো, বাইরের কেউ না। আর তুমি নিজের ঘরে বসেও বসার ঘরের টিভি দেখতে পারো। প্রোগ্রামেও ঠিক তাই। প্রতিটা variable এর একটা **এলাকা** আছে, যেখান থেকে তাকে দেখা যায়। এই এলাকার নাম **scope**।',
    { tip: 'এক লাইনের নিয়ম: **ভেতর থেকে বাইরে দেখা যায়, বাইরে থেকে ভেতরে দেখা যায় না।** প্রতিটা {{ { } }} জোড়া একটা নতুন ঘর।' },
    { h: '১. Global scope: সবার জন্য' },
    'কোনো function এর **বাইরে**, ফাইলের একদম উপরে বানানো variable হলো **global** (Dart এ বলে top-level)। ফাইলের যেকোনো function থেকে দেখা যায়, বদলানো যায়। প্রোগ্রাম চলার পুরো সময় বেঁচে থাকে।',
    { code: `int highScore = 0;   // global: সবাই দেখে

void newScore(int s) {
  if (s > highScore) highScore = s;   // ভেতর থেকে বাইরেরটা দেখা যায়
}

void main() {
  newScore(40);
  newScore(75);
  newScore(60);
  print(highScore);
}`, out: '75' },
    { h: '২. Function scope (local): শুধু ভেতরে' },
    'function এর **ভেতরে** বানানো variable, আর তার **parameter** গুলো, হলো **local**। শুধু সেই function এর ভেতর থেকে দেখা যায়। function ডাকলে জন্মায়, function শেষ হলে **মুছে যায়**। পরের বার ডাকলে আবার নতুন করে জন্মায়, আগের কিছু মনে থাকে না।',
    { code: `void cook() {
  String dish = 'খিচুড়ি';   // local: শুধু cook এর ভেতরে
  print(dish);
}

void main() {
  cook();
  print(dish);   // Error!
}` },
    { code: "Error: Undefined name 'dish'.", lang: 'plaintext' },
    'main এর কাছে {{dish}} নামে কিছু নেই। cook এর ঘরের আলমারি main দেখতে পায় না। আর cook শেষ হওয়ার পর dish তো মুছেই গেছে।',
    { h: '৩. Block scope: { } এর ভেতরে' },
    'শুধু function না, **যেকোনো {{ { } }}** একটা নতুন ঘর: {{if}}, {{else}}, {{for}}, {{while}} এর ব্লক। ব্লকের ভেতরে বানানো variable ব্লকের বাইরে দেখা যায় না। {{for}} এর {{int i}} ও শুধু loop এর ভেতরে।',
    { code: `void main() {
  int marks = 85;
  if (marks >= 80) {
    String grade = 'A+';   // শুধু এই if ব্লকে
    print(grade);
  }
  // print(grade);   // Error: Undefined name 'grade'.

  for (int i = 0; i < 3; i++) {
    int square = i * i;     // প্রতিবার ঘোরার সময় নতুন করে
    print(square);
  }
  // print(i);   // Error: Undefined name 'i'.
}`, out: 'A+\n0\n1\n4' },
    { tip: 'ব্লকের বাইরে মান লাগলে? variable টা **ব্লকের আগে** (বাইরের ঘরে) বানাও, ভেতরে শুধু মান বদলাও:' },
    { code: `void main() {
  int marks = 85;
  String grade = 'F';      // বাইরে বানালাম
  if (marks >= 80) {
    grade = 'A+';          // ভেতরে শুধু মান বদলালাম
  }
  print(grade);            // এখন চলে
}`, out: 'A+' },
    { h: 'নিজে দেখো: বাক্সের ভেতরে বাক্স' },
    { nest: { n: 'ফাইল (global)', v: ['int highScore = 0'], k: [
      { n: 'void addScore(int s)', v: ['int s', 'int bonus = 5'], k: [
        { n: 'if (s > 50) { }', v: ['String msg = \'দারুণ!\''] },
      ] },
      { n: 'void main()', v: ['String player = \'রাফি\'', 'int bonus = 0'], k: [
        { n: 'for (int i = 0; i < 3; i++) { }', v: ['int i', 'int round = i + 1'] },
      ] },
    ] }, cap: 'যেকোনো বাক্সে **ক্লিক** করো: সেখানে দাঁড়িয়ে কোন কোন variable দেখা যায়? (সবুজ = দেখা যায়, ঝাপসা = দেখা যায় না)' },
    'খেয়াল করো: {{if}} এর বাক্সে ক্লিক করলে {{msg}}, {{s}}, {{bonus}} (addScore এর) আর {{highScore}} দেখা যায়, কিন্তু main এর {{player}} না। আর addScore আর main দুইটাতেই {{bonus}} আছে: এরা **আলাদা দুইটা variable**, শুধু নাম এক। একজনকে বদলালে আরেকজনের কিছু হয় না।',
    { h: '৪. একই নাম: ভেতরেরটা বাইরেরটাকে ঢেকে দেয় (shadowing)' },
    { code: `int score = 10;   // global

void show() {
  int score = 99;   // local, একই নাম!
  print(score);     // কোনটা?
}

void main() {
  show();
  print(score);
}`, out: '99\n10' },
    'show এর ভেতরে {{score}} খুঁজলে Dart আগে **নিজের ঘরে** দেখে, পেয়ে যায় 99। বাইরের 10 আর দেখাই হয় না, ঢাকা পড়ে গেছে। main এর ভেতরে নিজের score নেই, তাই বাইরে গিয়ে global 10 পায়।',
    { warn: 'একই নাম দুই জায়গায় দেওয়া চলে, কিন্তু **গোলমালের সবচেয়ে বড় উৎস**। ভাবছো global বদলাচ্ছো, আসলে local বদলাচ্ছো। তাই আলাদা আলাদা নাম দাও।' },
    'আর একই ঘরে একই নামে দুইবার বানানো যায় না:',
    { code: `void main() {
  int x = 1;
  int x = 2;   // Error: 'x' is already declared in this scope.
}` },
    { h: '৫. Function এর ভেতরে function' },
    'Dart এ function এর ভেতরেও function বানানো যায়। নিয়ম একই: ভেতরের function বাইরের function এর variable দেখতে পায়, উল্টোটা না।',
    { code: `void main() {
  String name = 'রাফি';

  void greet() {
    String time = 'সকাল';
    print('শুভ $time, $name');   // বাইরের name দেখা যায়
  }

  greet();
  // print(time);   // Error: time শুধু greet এর ভেতরে
}`, out: 'শুভ সকাল, রাফি' },
    { tip: 'ভেতরের function বাইরের variable "মনে রাখতে" পারে, বাইরের function শেষ হওয়ার পরেও। এর নাম **closure**, সপ্তাহ ৭ এ বিস্তারিত দেখবে।' },
    { h: '৬. Parameter হলো local: মানের কপি' },
    'function এ int, double, String, bool পাঠালে parameter এ আসে তার **মান**। ভেতরে parameter বদলালে বাইরের variable এর কিছু হয় না।',
    { code: `void tryChange(int n) {
  n = n + 100;      // শুধু ভেতরের n বদলালো
}

void main() {
  int n = 1;
  tryChange(n);
  print(n);
}`, out: '1' },
    { warn: 'কিন্তু **List** বা **Map** পাঠালে সাবধান! parameter এ আসে একই list এর ঠিকানা। ভেতরে {{add}}, {{remove}} করলে **আসল list টাই বদলায়**।' },
    { code: `void addItem(List<String> bag) {
  bag.add('বই');
}

void main() {
  var bag = ['খাতা'];
  addItem(bag);
  print(bag);
}`, out: '[খাতা, বই]' },
    { h: 'global কম ব্যবহার করো' },
    'global সুবিধাজনক মনে হয়: সবাই দেখে, parameter পাঠাতে হয় না। কিন্তু বড় প্রোগ্রামে যেকোনো জায়গা থেকে বদলানো যায় বলে, ভুল মান কোথা থেকে এলো খুঁজে পাওয়া কঠিন। ভালো অভ্যাস: যা লাগবে **parameter দিয়ে পাঠাও**, ফল **return দিয়ে ফেরত নাও**।',
    { code: `// কম ভালো: global বদলায়
int total = 0;
void addToTotal(int x) { total += x; }

// ভালো: নিজের মধ্যে সম্পূর্ণ, ডাকলেই বোঝা যায় কী নেয় কী দেয়
int add(int total, int x) => total + x;` },
  ],
  how: [
    'Dart কোনো নাম দেখলে (যেমন {{score}}) **ভেতর থেকে বাইরে** খোঁজে: আগে এখনকার ব্লকে, না পেলে তার বাইরের ব্লকে, তারপর function এ, শেষে ফাইলের global এ। যেখানে প্রথম পায়, সেটাই নেয়। কোথাও না পেলে {{Undefined name}} Error।',
    'এই খোঁজা হয় **কোড কোথায় লেখা** সেটা দেখে, কে কাকে ডাকলো সেটা দেখে না। তাই একে বলে lexical scope। main থেকে cook ডাকলেও cook main এর variable দেখতে পায় না, কারণ cook এর কোড main এর ভেতরে লেখা নেই।',
    'function ডাকলে memory তে তার জন্য একটা নতুন জায়গা (frame) তৈরি হয়, parameter আর local variable সেখানে থাকে। function শেষে সেই জায়গা ফেলে দেওয়া হয়। global থাকে আলাদা জায়গায়, পুরো প্রোগ্রাম জুড়ে।',
    'নিচের যন্ত্রে দেখো কোন variable কখন জন্মায় আর কখন হারায়।',
  ],
  traces: ['scope'],
  quiz: [
    { q: 'Output কী?', code: `void main() {
  int a = 1;
  if (a > 0) {
    int b = 2;
    a = a + b;
  }
  print(a);
}`, opts: ['1', '3', 'Error', '2'], a: 1, why: 'if এর ভেতর থেকে বাইরের {{a}} দেখা যায় আর বদলানো যায়: 1 + 2 = 3। {{b}} শুধু ভেতরে, কিন্তু এখানে বাইরে তো b ব্যবহারই হয়নি।' },
    { q: 'Output কী?', code: `int x = 5;

void change() {
  int x = 50;
  x = x + 1;
}

void main() {
  change();
  print(x);
}`, opts: ['5', '51', '50', '6'], a: 0, why: 'change এর ভেতরে নিজের local {{x}} বানানো হয়েছে, global টা ঢাকা পড়েছে। বদল হয়েছে local এ (51), যেটা পরে মুছে গেছে। global x রয়ে গেছে 5।' },
    { q: 'কোন লাইনে Error?', code: `void main() {
  for (int i = 0; i < 3; i++) {
    int sq = i * i;
  }
  print(i);
}`, opts: ['int sq = i * i;', 'print(i);', 'for এর লাইন', 'কোনোটাতেই না'], a: 1, why: '{{i}} শুধু loop এর ভেতরে বাঁচে। বাইরে {{Undefined name \'i\'}}।' },
    { q: 'Output কী?', code: `void grow(List<int> nums) {
  nums.add(4);
}

void main() {
  var nums = [1, 2, 3];
  grow(nums);
  print(nums.length);
}`, opts: ['3', '4', 'Error', '1'], a: 1, why: 'List পাঠালে একই list এর ঠিকানা যায়, তাই ভেতরে add করলে আসলটাই বড় হয়।' },
    { q: 'একটা function দুইবার ডাকলাম। প্রথমবার ভেতরে {{int count = 0; count++;}} হয়েছিল। দ্বিতীয়বার শুরুতে count কত?', opts: ['1', '0, কারণ local variable প্রতিবার নতুন করে জন্মায়', '2', 'Error'], a: 1, why: 'local variable function শেষে মুছে যায়। মনে রাখতে চাইলে বাইরে রাখতে হবে (global বা class এর field), অথবা closure।' },
  ],
  probs: [
    { l: 'e', q: 'এই কোডে Error কেন? দুইভাবে ঠিক করো।', code: `void main() {
  int age = 15;
  if (age >= 13) {
    String type = 'কিশোর';
  }
  print(type);
}`, ans: "{{Undefined name 'type'}}। {{type}} বানানো হয়েছে if ব্লকের ভেতরে, বাইরে দেখা যায় না।\nউপায় ১: print টা if এর ভেতরে নিয়ে যাও।\nউপায় ২: if এর আগে {{String type = 'শিশু';}} বানাও, ভেতরে শুধু {{type = 'কিশোর';}}।" },
    { l: 'e', q: 'output খাতায় লেখো, তারপর চালিয়ে মিলাও।', code: `String city = 'ঢাকা';

void trip() {
  String city = 'সিলেট';
  print('ভ্রমণে: $city');
}

void main() {
  print('বাড়ি: $city');
  trip();
  print('ফিরে: $city');
}`, ans: 'বাড়ি: ঢাকা\nভ্রমণে: সিলেট\nফিরে: ঢাকা\ntrip এর ভেতরের city আলাদা local variable, global টাকে বদলায়নি, শুধু ঢেকে রেখেছিল।' },
    { l: 'e', q: 'নিচের কোডের প্রতিটা variable কোন scope এর: global, function (local), নাকি block?', code: `int level = 1;

void play(int lives) {
  int score = 0;
  while (lives > 0) {
    int hit = 10;
    score += hit;
    lives--;
  }
  print(score);
}`, ans: '{{level}}: global\n{{lives}}: function (parameter, local)\n{{score}}: function (local)\n{{hit}}: block (শুধু while এর ভেতরে, প্রতিবার ঘোরায় নতুন)' },
    { l: 'm', q: 'একটা global counter দিয়ে গোনো {{visit()}} কতবার ডাকা হলো। তারপর ভাবো: counter টা visit এর ভেতরে রাখলে কী হতো?', sol: `int visits = 0;

void visit() {
  visits++;
  print('মোট ভিজিট: $visits');
}

void main() {
  visit();
  visit();
  visit();
}`, note: 'ভেতরে {{int visits = 0;}} রাখলে প্রতিবার নতুন করে 0 থেকে শুরু হতো, তিনবারই "মোট ভিজিট: 1" দেখাতো। local variable function শেষে মুছে যায়।' },
    { l: 'm', q: 'এই কোড global ব্যবহার করে। এমনভাবে বদলাও যাতে কোনো global না থাকে: যা লাগবে parameter এ যাক, ফল return এ আসুক।', code: `int sum = 0;
List<int> marks = [70, 85, 90];

void calc() {
  for (var m in marks) {
    sum += m;
  }
}

void main() {
  calc();
  print(sum);
}`, sol: `int calc(List<int> marks) {
  int sum = 0;
  for (var m in marks) {
    sum += m;
  }
  return sum;
}

void main() {
  var marks = [70, 85, 90];
  print(calc(marks)); // 245
}`, note: 'এখন calc নিজের মধ্যে সম্পূর্ণ: কী নেয় (marks), কী দেয় (যোগফল), নাম দেখেই বোঝা যায়। দুইবার ডাকলেও ভুল হবে না (global sum হলে দ্বিতীয়বার 490 আসতো!)।' },
    { l: 'm', q: 'Output খাতায় লেখো। কোন লাইন list বদলায় আর কোনটা বদলায় না, কেন?', code: `void a(List<int> x) { x.add(9); }
void b(List<int> x) { x = [0]; }
void c(int n) { n = 100; }

void main() {
  var list = [1];
  int num = 5;
  a(list);
  b(list);
  c(num);
  print(list);
  print(num);
}`, ans: '[1, 9]\n5\n{{a}}: একই list এ add, তাই আসলটা বদলায়।\n{{b}}: parameter {{x}} কে নতুন list এর দিকে ঘুরিয়ে দিলো, কিন্তু বাইরের {{list}} আগের list টাই ধরে আছে, তাই বদলায় না।\n{{c}}: int এর মানের কপি, বাইরের num 5 ই থাকে।' },
    { l: 'h', q: 'এই কোড চালালে চালানোর আগেই Error। কেন? (হিন্ট: Dart নাম খোঁজে কোড কোথায় লেখা সেটা দেখে)', code: `int x = 1;

void main() {
  print(x);
  int x = 2;
  print(x);
}`, ans: "{{Local variable 'x' can't be referenced before it is declared.}}\nmain এর ভেতরে {{int x}} আছে, তাই main এর পুরো ব্লকে \"x\" মানে local টা, এমনকি সে লাইনের আগেও। প্রথম print এর সময় local x এখনো বানানো হয়নি, আর global টা ঢাকা পড়ে গেছে, তাই Dart আটকে দেয়।\nশিক্ষা: একই নাম ব্যবহারই করো না, local এর নাম আলাদা দাও।" },
    { l: 'h', q: 'function এর ভেতরে function বানিয়ে একটা "গোনার যন্ত্র" বানাও: {{makeCounter()}} ডাকলে একটা function ফেরত দেবে, যেটা প্রতিবার ডাকলে 1, 2, 3 ... দেয়। দুইটা আলাদা counter বানিয়ে দেখাও যে তারা আলাদা গোনে।', sol: `Function makeCounter() {
  int count = 0;           // makeCounter এর local
  return () {
    count++;               // ভেতরের function বাইরেরটা দেখে আর মনে রাখে
    return count;
  };
}

void main() {
  var a = makeCounter();
  var b = makeCounter();
  print(a()); // 1
  print(a()); // 2
  print(a()); // 3
  print(b()); // 1, b এর নিজের আলাদা count
}`, note: 'makeCounter শেষ হয়ে গেলেও ভেতরের function তার count কে ধরে রেখেছে। এটাই closure (সপ্তাহ ৭)। প্রতিবার makeCounter ডাকলে নতুন count জন্মায়, তাই a আর b আলাদা।' },
  ],
};

CARDS.push(
  { w: 5, f: 'scope এর এক লাইনের নিয়ম', b: 'ভেতর থেকে বাইরে দেখা যায়,\nবাইরে থেকে ভেতরে দেখা যায় না।\nপ্রতিটা { } একটা নতুন ঘর।' },
  { w: 5, f: 'ব্লকের ভেতরের মান বাইরে লাগলে', b: "String grade = 'F';   // ব্লকের আগে বানাও\nif (ok) {\n  grade = 'A';      // ভেতরে শুধু বদলাও\n}" },
  { w: 5, f: 'local variable কখন মুছে যায়?', b: 'function (বা ব্লক) শেষ হলেই।\nপরের বার ডাকলে আবার নতুন করে জন্মায়।' },
  { w: 5, f: 'List parameter এ add করলে আসলটা বদলায়?', b: 'হ্যাঁ, একই list এর ঠিকানা যায়।\n(int, String পাঠালে মানের কপি, বদলায় না)' },
);

// ---------------- সপ্তাহ ২: logical operator (&&, ||, !) ----------------

TRACES.shortc = {
  title: 'short-circuit: কখন বাকিটা দেখাই হয় না', box: 'হিসাব',
  code: ["String? name = null;", '', 'if (name != null && name.length > 3) {', "  print('লম্বা নাম');", '} else {', "  print('নাম নেই বা ছোট');", '}'],
  steps: [
    { l: 0, v: { name: 'null' }, n: 'name এ কিছু নেই (null)।' },
    { l: 2, v: { 'বাম পাশ': 'name != null → false' }, n: 'আগে বাম পাশ: {{name != null}}? না, false।' },
    { l: 2, v: { 'ডান পাশ': '(দেখাই হলো না)' }, n: '{{&&}} এ একটা false হলেই পুরোটা false। তাই Dart **ডান পাশ দেখেই না**। ভালোই হলো: null এর {{.length}} চাইলে crash হতো!' },
    { l: 5, p: 'নাম নেই বা ছোট', n: 'পুরো শর্ত false, তাই else।' },
  ],
};

TOPICS['logic'] = {
  short: 'Logical: && || !', title: 'Logical Operator: এবং (&&), অথবা (||), না (!)', days: 'দিন ২',
  goal: 'কয়েকটা শর্ত মিলিয়ে একটা বড় শর্ত বানানো: কখন সব লাগবে, কখন একটা হলেই চলবে, আর কিভাবে উল্টাতে হয়। truth table দিয়ে নিশ্চিত হওয়া।',
  learn: [
    'জীবনের সিদ্ধান্ত প্রায়ই একটা শর্তে হয় না। "সিনেমা দেখতে পারবে **যদি** টিকিট থাকে **এবং** বয়স ১২ এর বেশি হয়।" "বাসে ছাড় পাবে **যদি** ছাত্র হও **অথবা** বয়স ৬০ এর বেশি হয়।" "বাইরে যাও **যদি** বৃষ্টি **না** হয়।" প্রোগ্রামে এই **এবং**, **অথবা**, **না** লেখার চিহ্নগুলোই logical operator।',
    { table: [['চিহ্ন', 'নাম', 'বাংলায়', 'কখন true'], ['{{&&}}', 'AND', 'এবং', '**দুইটাই** true হলে'], ['{{||}}', 'OR', 'অথবা', '**অন্তত একটা** true হলে'], ['{{!}}', 'NOT', 'না, উল্টো', 'ভেতরেরটা false হলে']] },
    { tip: 'এদের দুই পাশে সবসময় **bool** (true/false) থাকে, সংখ্যা না। তাই সাধারণত দুই পাশে তুলনা থাকে: {{age >= 12 && hasTicket}}।' },
    { h: 'AND (&&): দুইটাই লাগবে' },
    'সিনেমা হলের দারোয়ান দুইটা জিনিস দেখে: টিকিট আছে? বয়স ১২+? **দুইটাই** হ্যাঁ হলে ঢুকতে দেয়। একটাও না হলে ফেরত।',
    { table: [['টিকিট আছে (a)', 'বয়স ১২+ (b)', 'a && b', 'ঢুকতে পারবে?'], ['true', 'true', '**true**', 'হ্যাঁ ✓'], ['true', 'false', 'false', 'না'], ['false', 'true', 'false', 'না'], ['false', 'false', 'false', 'না']] },
    { code: `void main() {
  bool hasTicket = true;
  int age = 10;
  print(hasTicket && age >= 12);
}`, out: 'false' },
    { h: 'OR (||): একটা হলেই চলবে' },
    'বাসে হাফ ভাড়া: ছাত্র হলে, **অথবা** বয়স ৬০+ হলে। যেকোনো একটা (বা দুইটাই) হলেই ছাড়।',
    { table: [['ছাত্র (a)', 'বয়স ৬০+ (b)', 'a || b', 'ছাড় পাবে?'], ['true', 'true', '**true**', 'হ্যাঁ'], ['true', 'false', '**true**', 'হ্যাঁ'], ['false', 'true', '**true**', 'হ্যাঁ'], ['false', 'false', 'false', 'না']] },
    { code: `void main() {
  bool isStudent = false;
  int age = 65;
  print(isStudent || age >= 60);
}`, out: 'true' },
    { tip: 'মনে রাখার কৌশল: {{&&}} কড়া দারোয়ান, একটা না হলেই বাদ। {{||}} দয়ালু দারোয়ান, একটা হলেই ঢুকতে দেয়।' },
    { h: 'NOT (!): উল্টে দাও' },
    { table: [['a', '!a'], ['true', 'false'], ['false', 'true']] },
    { code: `void main() {
  bool isRaining = false;
  if (!isRaining) {
    print('মাঠে খেলতে যাও');
  }
  print(!(5 > 3));
}`, out: 'মাঠে খেলতে যাও\nfalse' },
    { h: 'নিজে খেলে দেখো' },
    { widget: 'logicLab' },
    { h: 'অনেকগুলো বাস্তব উদাহরণ' },
    { code: `void main() {
  // ১. সীমার ভেতরে কিনা (1 থেকে 10, দুইটা সহ)
  int x = 7;
  print(x >= 1 && x <= 10);              // true

  // ২. সীমার বাইরে কিনা
  print(x < 1 || x > 10);                // false

  // ৩. ছুটির দিন
  String day = 'শুক্রবার';
  print(day == 'শুক্রবার' || day == 'শনিবার');   // true

  // ৪. লগইন: নাম আর পাসওয়ার্ড দুইটাই মিলতে হবে
  String user = 'rafi', pass = '1234';
  print(user == 'rafi' && pass == '1234');       // true

  // ৫. জোড় এবং পজিটিভ
  int n = -4;
  print(n % 2 == 0 && n > 0);            // false (জোড়, কিন্তু পজিটিভ না)

  // ৬. গেম শেষ: জীবন শেষ অথবা সময় শেষ
  int lives = 2, timeLeft = 0;
  print(lives == 0 || timeLeft <= 0);    // true

  // ৭. খালি না
  String name = 'রাফি';
  print(!name.isEmpty);                  // true (একই: name.isNotEmpty)
}` },
    { code: `void main() {
  // ৮. স্বরবর্ণ কিনা
  String c = 'e';
  print(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');   // true

  // ৯. শক্ত পাসওয়ার্ড: অন্তত ৮ অক্ষর এবং অন্তত একটা সংখ্যা
  String pw = 'dart2026';
  bool hasDigit = pw.contains(RegExp(r'[0-9]'));
  print(pw.length >= 8 && hasDigit);     // true

  // ১০. লিপ ইয়ার: (৪ দিয়ে ভাগ যায় এবং ১০০ দিয়ে না) অথবা ৪০০ দিয়ে ভাগ যায়
  int y = 2024;
  print((y % 4 == 0 && y % 100 != 0) || y % 400 == 0);   // true

  // ১১. ত্রিভুজ সম্ভব: যেকোনো দুই বাহুর যোগফল তৃতীয়টার বড়
  int a = 3, b = 4, s = 5;
  print(a + b > s && a + s > b && b + s > a);   // true
}` },
    { tip: 'লম্বা শর্তকে **নাম দেওয়া bool** এ ভাগ করো, পড়তে সহজ হয়: {{bool isAdult = age >= 18;}} {{bool hasNid = true;}} তারপর {{if (isAdult && hasNid)}}। ইংরেজিতে প্রায় বাক্যের মতো পড়া যায়!' },
    { h: 'কোনটা আগে? (precedence)' },
    'গণিতে যেমন গুণ আগে, যোগ পরে, তেমনি এখানে: **{{!}} সবার আগে, তারপর {{&&}}, তারপর {{||}}**। আর তুলনা ({{>}}, {{==}}) এদের সবার আগে।',
    { code: `void main() {
  print(true || false && false);     // && আগে: true || (false && false) = true || false
  print((true || false) && false);   // বন্ধনী আগে: true && false
}`, out: 'true\nfalse' },
    { warn: 'নিয়ম মনে না থাকলে চিন্তা নেই: **বন্ধনী দাও**। {{(a && b) || c}} লিখলে তুমিও বোঝো, পাঠকও বোঝে। বন্ধনী দিলে কখনো ভুল হয় না।' },
    { h: 'short-circuit: Dart আলসে (আর এটা ভালো)' },
    { list: ['{{a && b}}: a যদি false হয়, উত্তর তো false ই, তাই Dart **b দেখেই না**।', '{{a || b}}: a যদি true হয়, উত্তর তো true ই, তাই **b দেখে না**।'] },
    { code: `void main() {
  String? name;   // null
  // বাম পাশ false হলে ডান পাশ চলেই না, তাই null এর .length চেয়ে crash হয় না
  if (name != null && name.length > 3) {
    print('লম্বা নাম');
  } else {
    print('নাম নেই বা ছোট');
  }
}`, out: 'নাম নেই বা ছোট' },
    { tip: 'তাই ক্রম গুরুত্বপূর্ণ: "নিরাপদ" চেক ({{!= null}}, {{list.isNotEmpty}}, {{b != 0}}) সবসময় **বাম পাশে**: {{b != 0 && a / b > 2}}।' },
    { h: 'De Morgan এর নিয়ম: না কে ভেতরে ঢোকানো' },
    '"ছুটির দিন **না** অথবা অসুস্থ **না**" আর "ছুটির দিন **এবং** অসুস্থ, এমন **না**" একই কথা। {{!}} ভেতরে ঢোকালে {{&&}} হয়ে যায় {{||}}, আর {{||}} হয়ে যায় {{&&}}:',
    { table: [['এটা', 'আর এটা একই'], ['{{!(a && b)}}', '{{!a || !b}}'], ['{{!(a || b)}}', '{{!a && !b}}']] },
    { code: `void main() {
  int x = 15;
  // "1 থেকে 10 এর ভেতরে না" দুইভাবে লেখা যায়:
  print(!(x >= 1 && x <= 10));   // true
  print(x < 1 || x > 10);        // true, একই ফল, পড়তে সহজ
}` },
    { h: 'কমন ভুল' },
    { table: [['ভুল', 'কেন', 'ঠিক'], ['{{1 < x < 10}}', 'Dart এভাবে মেলায় না: {{1 < x}} হলো bool, তারপর bool < 10 মানে নেই', '{{x > 1 && x < 10}}'], ['{{x > 1 && < 10}}', 'দুই পাশেই পুরো তুলনা লাগে', '{{x > 1 && x < 10}}'], ['{{x == 1 || 2}}', '{{2}} bool না', '{{x == 1 || x == 2}}'], ['{{if (x = 5)}}', '{{=}} মান রাখে, তুলনা করে না', '{{if (x == 5)}}'], ['{{!x == 5}}', '{{!}} আগে x এর উপর বসে, কিন্তু x তো সংখ্যা', '{{!(x == 5)}} বা {{x != 5}}'], ['{{if (isOk == true)}}', 'চলে, কিন্তু বাড়তি', '{{if (isOk)}}']] },
    { code: "Error: A comparison expression can't be an operand of another comparison expression.", lang: 'plaintext' },
    'এটা {{1 < x < 10}} লিখলে আসে। {{x == 1 || 2}} বা {{if (x = 5)}} লিখলে আসে {{A value of type \'int\' can\'t be assigned to a variable of type \'bool\'.}} মানে "এখানে bool লাগতো, তুমি সংখ্যা দিয়েছ"।',
  ],
  how: [
    'Dart আগে তুলনাগুলো হিসাব করে ({{age >= 12}} → true বা false), তারপর logical operator গুলো বাম থেকে ডানে, আগে {{!}}, তারপর {{&&}}, তারপর {{||}}।',
    'হিসাব বাম পাশ থেকে শুরু। {{&&}} এর বাম পাশ false বা {{||}} এর বাম পাশ true হলে উত্তর জানা হয়ে যায়, ডান পাশ আর চালানো হয় না (short-circuit)।',
    'প্রতিটা logical operator এর ফলও একটা bool। তাই এদের আবার জোড়া লাগিয়ে আরো বড় শর্ত বানানো যায়, যত খুশি।',
    'নিচের যন্ত্রে দেখো ডান পাশ কখন বাদ পড়ে।',
  ],
  traces: ['shortc'],
  quiz: [
    { q: 'Output কী?', code: 'print(5 > 3 && 2 > 4);', opts: ['true', 'false', 'Error', '5'], a: 1, why: '{{5 > 3}} true, {{2 > 4}} false। {{&&}} এ দুইটাই লাগে → false।' },
    { q: 'Output কী?', code: 'print(5 > 3 || 2 > 4);', opts: ['true', 'false', 'Error', '2'], a: 0, why: '{{||}} এ একটা true হলেই true।' },
    { q: 'Output কী?', code: 'print(!(10 % 2 == 0));', opts: ['true', 'false', '0', 'Error'], a: 1, why: '{{10 % 2 == 0}} true (জোড়), {{!}} উল্টে false।' },
    { q: 'Output কী?', code: 'print(false || true && false);', opts: ['true', 'false', 'Error', 'null'], a: 1, why: '{{&&}} আগে: {{true && false}} = false। তারপর {{false || false}} = false।' },
    { q: 'x = 0 হলে কোনটা crash করবে না?', code: 'A) print(10 ~/ x > 2 && x != 0);\nB) print(x != 0 && 10 ~/ x > 2);', opts: ['শুধু A', 'শুধু B', 'দুইটাই crash করবে', 'কোনোটাই না'], a: 1, why: 'B তে বাম পাশ {{x != 0}} false, তাই ডান পাশের ভাগ আর হয়ই না (short-circuit)। A তে আগেই শূন্য দিয়ে ভাগ, crash।' },
    { q: '{{!(a || b)}} এর সমান কোনটা?', opts: ['!a || !b', '!a && !b', 'a && b', '!a || b'], a: 1, why: 'De Morgan: {{!}} ভেতরে ঢুকলে {{||}} হয়ে যায় {{&&}}।' },
  ],
  probs: [
    { l: 'e', q: 'truth table খাতায় পূরণ করো, তারপর কোড চালিয়ে মিলাও: a আর b এর ৪টা জোড়ার জন্য {{a && b}}, {{a || b}}, {{!a}}।', sol: `void main() {
  for (var a in [true, false]) {
    for (var b in [true, false]) {
      print('a=$a b=$b  &&:\${a && b}  ||:\${a || b}  !a:\${!a}');
    }
  }
}` },
    { l: 'e', q: 'একটা সংখ্যা 1 থেকে 100 এর মধ্যে (দুইটা সহ) কিনা প্রিন্ট করো। তারপর "বাইরে কিনা" ও প্রিন্ট করো।', sol: `void main() {
  int n = 150;
  print(n >= 1 && n <= 100);   // ভেতরে? false
  print(n < 1 || n > 100);     // বাইরে? true
}` },
    { l: 'e', q: 'দিনের নাম দেখে বলো ছুটি কিনা: শুক্রবার বা শনিবার হলে ছুটি।', sol: `void main() {
  String day = 'শনিবার';
  bool holiday = day == 'শুক্রবার' || day == 'শনিবার';
  print(holiday ? 'ছুটি' : 'স্কুল আছে');
}` },
    { l: 'e', q: 'ভুল ধরো আর ঠিক করো:', code: `int age = 15;
if (13 <= age <= 19) {
  print('টিনএজার');
}`, ans: "Dart এ {{13 <= age <= 19}} চলে না: {{A comparison expression can't be an operand of another comparison expression.}}\nঠিক: {{if (age >= 13 && age <= 19)}}" },
    { l: 'm', q: 'লগইন: username "rafi" আর password "dart123" দুইটাই মিললে "স্বাগতম", username ঠিক কিন্তু password ভুল হলে "পাসওয়ার্ড ভুল", না হলে "এমন কেউ নেই"।', sol: `void main() {
  String user = 'rafi', pass = 'abc';
  if (user == 'rafi' && pass == 'dart123') {
    print('স্বাগতম');
  } else if (user == 'rafi') {
    print('পাসওয়ার্ড ভুল');
  } else {
    print('এমন কেউ নেই');
  }
}` },
    { l: 'm', q: 'মেলা টিকিট: বয়স 5 এর কম অথবা 65 এর বেশি হলে ফ্রি। শুক্রবার হলে আর ছাত্র হলেও ফ্রি। বাকিদের 50 টাকা। একটা bool দিয়ে "ফ্রি কিনা" বের করো।', sol: `void main() {
  int age = 14;
  bool isStudent = true;
  String day = 'শুক্রবার';
  bool free = age < 5 || age > 65 || (day == 'শুক্রবার' && isStudent);
  print(free ? 'ফ্রি' : '50 টাকা');
}`, note: 'বন্ধনী না দিলেও একই ফল (&& আগে হয়), কিন্তু দিলে পড়তে সহজ।' },
    { l: 'm', q: 'De Morgan দিয়ে {{!}} সরিয়ে সহজ করো, তারপর দুইটা চালিয়ে একই ফল কিনা দেখো: {{!(age >= 18 && hasNid)}}', sol: `void main() {
  int age = 20;
  bool hasNid = false;
  print(!(age >= 18 && hasNid));   // true
  print(age < 18 || !hasNid);      // true, একই
}`, note: '{{!(a && b)}} = {{!a || !b}}। আর {{!(age >= 18)}} মানে {{age < 18}}।' },
    { l: 'm', q: 'Output খাতায় লেখো, কোন check চলে আর কোনটা চলে না সেটাও:', code: `bool check(String n, bool r) {
  print('check $n');
  return r;
}

void main() {
  print(check('A', false) && check('B', true));
  print(check('C', true) || check('D', false));
}`, ans: 'check A\nfalse\ncheck C\ntrue\nB আর D কখনো চলেনি: A false হওয়ায় && এর উত্তর জানা হয়ে গেছে, C true হওয়ায় || এর উত্তর জানা হয়ে গেছে (short-circuit)।' },
    { l: 'h', q: 'শক্ত পাসওয়ার্ড কিনা: অন্তত 8 অক্ষর, অন্তত একটা বড় হাতের অক্ষর, অন্তত একটা সংখ্যা, আর কোনো স্পেস নেই। প্রতিটা নিয়ম আলাদা নাম দেওয়া bool এ রাখো।', sol: `void main() {
  String pw = 'Dart2026';
  bool longEnough = pw.length >= 8;
  bool hasUpper = pw.contains(RegExp(r'[A-Z]'));
  bool hasDigit = pw.contains(RegExp(r'[0-9]'));
  bool noSpace = !pw.contains(' ');
  if (longEnough && hasUpper && hasDigit && noSpace) {
    print('শক্ত পাসওয়ার্ড');
  } else {
    print('দুর্বল পাসওয়ার্ড');
  }
}` },
    { l: 'h', q: 'XOR: "যেকোনো একটা, কিন্তু দুইটাই না"। a আর b দুইটা bool, ঠিক একটা true হলে true। শুধু && || ! দিয়ে লেখো, তারপর ছোট উপায়টা খুঁজে বের করো।', sol: `void main() {
  for (var a in [true, false]) {
    for (var b in [true, false]) {
      bool xor1 = (a || b) && !(a && b);
      bool xor2 = a != b;   // ছোট উপায়: দুইটা আলাদা হলেই
      print('$a $b → $xor1 $xor2');
    }
  }
}`, note: '"অন্তত একটা" ({{a || b}}) এবং "দুইটাই না" ({{!(a && b)}})। দুইটা bool আলাদা কিনা দেখলেও একই: {{a != b}}।' },
  ],
};

CARDS.push(
  { w: 2, f: '&& কখন true?', b: 'দুই পাশই true হলে\n(একটা false হলেই false)' },
  { w: 2, f: '|| কখন true?', b: 'অন্তত একটা true হলে\n(দুইটাই false হলে false)' },
  { w: 2, f: 'x, 1 থেকে 10 এর মধ্যে (Dart এ)', b: 'x >= 1 && x <= 10\n(1 <= x <= 10 চলে না!)' },
  { w: 2, f: 'কোনটা আগে: ! && ||', b: '! → && → ||\n(সন্দেহ হলে বন্ধনী)' },
  { w: 2, f: 'De Morgan', b: '!(a && b) == !a || !b\n!(a || b) == !a && !b' },
);
