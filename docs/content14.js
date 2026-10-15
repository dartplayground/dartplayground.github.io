// মেমরির ছবি (memLab widget এর ধাপ) আর আগের টপিকগুলোতে বাড়তি প্রশ্ন-সমস্যা:
// variables, strings-basic, list, null-safety (মেমরি), if-else (বেশি উদাহরণ)
// memLab ধাপ: { l: কোডের লাইন, n: ব্যাখ্যা, set: {নাম: ঠিকানা বা 'null'}, ty: {নাম: type}, obj: {ঠিকানা: [type, মান]}, mut: {ঠিকানা: নতুন মান}, p: output, err: Error }
// কাউকে না দেখানো object নিজে থেকেই "garbage" দেখায়, পরের ধাপে মুছে যায়

TOPICS['variables'].mem = [
  { title: 'বানানো আর reassign', code: ['int age = 14;', 'age = 15;', 'int b = age;', 'b = 20;', 'print(age);', 'print(b);'], steps: [
    { l: 0, obj: { '#1': ['int', '14'] }, set: { age: '#1' }, ty: { age: 'int' }, n: 'মেমরিতে 14 রাখার একটা জায়গা হলো, তার ঠিকানা {{#1}}। {{age}} নামটা একটা লেবেল, যার তীর সেই জায়গার দিকে।' },
    { l: 1, obj: { '#2': ['int', '15'] }, set: { age: '#2' }, n: '**reassign**: নতুন মান 15 এলো, age এর তীর ঘুরে গেল 15 এর দিকে। 14 কে এখন কেউ দেখছে না, তাই সেটা **garbage**: Dart নিজেই মুছে ফেলবে।' },
    { l: 2, set: { b: '#2' }, ty: { b: 'int' }, n: '{{b = age}} মানে: age এখন যেদিকে দেখাচ্ছে, b ও সেদিকে দেখাক। দুইটা তীর, একটাই 15।' },
    { l: 3, obj: { '#3': ['int', '20'] }, set: { b: '#3' }, n: 'b কে 20 দিলাম: শুধু **b এর তীর** ঘুরলো। age এর তীর যেমন ছিল তেমন আছে।' },
    { l: 4, p: '15', n: 'তাই age এখনো 15। b বদলালে age বদলায় না।' },
    { l: 5, p: '20', n: 'b হলো 20।' },
  ] },
  { title: 'final আর const', code: ['final year = 2026;', 'var score = 10;', 'score = score + 5;', '// year = 2027;  ← Error'], steps: [
    { l: 0, obj: { '#1': ['int', '2026'] }, set: { year: '#1' }, ty: { year: 'final int' }, n: '{{final}} মানে তীরটা **আঠা দিয়ে আটকানো**: একবার যেদিকে দেখালো, আর ঘোরানো যাবে না।' },
    { l: 1, obj: { '#2': ['int', '10'] }, set: { score: '#2' }, ty: { score: 'int' }, n: '{{var}} এর তীর খোলা, যখন খুশি ঘোরানো যায়।' },
    { l: 2, obj: { '#3': ['int', '15'] }, set: { score: '#3' }, n: 'ডান পাশ আগে হিসাব হয় ({{10 + 5 = 15}}), নতুন মান 15, তারপর score এর তীর সেদিকে। পুরানো 10 garbage।' },
    { l: 3, n: "year এর তীর আটকানো, তাই {{year = 2027}} লিখলে চালানোর আগেই Error: {{Can't assign to the final variable 'year'.}}" },
  ] },
];

TOPICS['strings-basic'].mem = [
  { title: 'String বদলানো যায় না', code: ["String s = 'rafi';", 's.toUpperCase();', 'String t = s;', "s = s + ' hasan';", 'print(t);', 'print(s);'], steps: [
    { l: 0, obj: { '#1': ['String', "'rafi'"] }, set: { s: '#1' }, ty: { s: 'String' }, n: "মেমরিতে লেখা 'rafi', s এর তীর সেদিকে।" },
    { l: 1, obj: { '#2': ['String', "'RAFI'"] }, n: "{{toUpperCase()}} s কে বদলায় **না**! সে একটা **নতুন** String 'RAFI' বানিয়ে ফেরত দেয়। আমরা সেটা কোথাও রাখিনি, তাই সাথে সাথে garbage। s এখনো 'rafi'।" },
    { l: 2, set: { t: '#1' }, ty: { t: 'String' }, n: "t ও একই 'rafi' এর দিকে দেখায়।" },
    { l: 3, obj: { '#3': ['String', "'rafi hasan'"] }, set: { s: '#3' }, n: "{{+}} দিয়ে জোড়া লাগালে আগের লেখা বদলায় না, **নতুন** লেখা 'rafi hasan' তৈরি হয়। শুধু s এর তীর সেদিকে ঘুরলো।" },
    { l: 4, p: 'rafi', n: "t এখনো পুরানো 'rafi' দেখছে।" },
    { l: 5, p: 'rafi hasan', n: 'String কখনো "জায়গায় বসে" বদলায় না। বদলাতে চাইলে নতুনটা আবার variable এ রাখতে হয়: {{s = s.toUpperCase();}}' },
  ] },
];

TOPICS['list'].mem = [
  { title: 'দুই নাম, এক list', code: ['var a = [1, 2];', 'var b = a;', 'b.add(3);', 'print(a);', 'b = [9];', 'print(a);'], steps: [
    { l: 0, obj: { '#1': ['List<int>', '[1, 2]'] }, set: { a: '#1' }, ty: { a: 'List<int>' }, n: 'মেমরিতে একটা list তৈরি হলো, a এর তীর সেদিকে।' },
    { l: 1, set: { b: '#1' }, ty: { b: 'List<int>' }, n: '{{b = a}} **নতুন list বানায় না!** b ও একই list এর দিকে দেখায়। একটা list, দুইটা নাম।' },
    { l: 2, mut: { '#1': '[1, 2, 3]' }, n: 'b দিয়ে add করলাম। কিন্তু list তো একটাই, তাই a দিয়ে দেখলেও বদলে গেছে।' },
    { l: 3, p: '[1, 2, 3]', n: 'a প্রিন্ট করলে 3 ও আছে! নতুনদের সবচেয়ে বড় অবাক হওয়ার জায়গা।' },
    { l: 4, obj: { '#2': ['List<int>', '[9]'] }, set: { b: '#2' }, n: '**reassign** আলাদা জিনিস: b এর তীর নতুন list [9] এর দিকে ঘুরলো। a এর list এ কেউ হাত দেয়নি।' },
    { l: 5, p: '[1, 2, 3]', n: 'list এর ভেতরে বদলানো ({{add}}) আর তীর ঘোরানো ({{=}}) দুইটা একদম আলাদা কাজ।' },
  ] },
  { title: 'কপি বানানো', code: ['var a = [1, 2];', 'var c = [...a];', 'c.add(3);', 'print(a);', 'print(c);', 'a = [];'], steps: [
    { l: 0, obj: { '#1': ['List<int>', '[1, 2]'] }, set: { a: '#1' }, ty: { a: 'List<int>' }, n: 'একটা list।' },
    { l: 1, obj: { '#2': ['List<int>', '[1, 2]'] }, set: { c: '#2' }, ty: { c: 'List<int>' }, n: '{{[...a]}} মানে "a এর জিনিসগুলো ঢেলে **নতুন** list বানাও"। এখন দুইটা আলাদা list, দেখতে একই। ({{List.of(a)}} ও একই কাজ করে।)' },
    { l: 2, mut: { '#2': '[1, 2, 3]' }, n: 'c তে add করলে শুধু c এর list বদলায়।' },
    { l: 3, p: '[1, 2]', n: 'a অক্ষত।' },
    { l: 4, p: '[1, 2, 3]', n: 'c বদলেছে।' },
    { l: 5, obj: { '#3': ['List<int>', '[]'] }, set: { a: '#3' }, n: 'a কে নতুন খালি list দিলাম। পুরানো [1, 2] কে আর কেউ দেখছে না: garbage।' },
  ] },
  { title: 'final list', code: ['final nums = [1, 2];', 'nums.add(3);', '// nums = [];  ← Error', 'const fixed = [1, 2];', '// fixed.add(3);  ← চলার সময় Error'], steps: [
    { l: 0, obj: { '#1': ['List<int>', '[1, 2]'] }, set: { nums: '#1' }, ty: { nums: 'final' }, n: '{{final}}: nums এর **তীর আটকানো**।' },
    { l: 1, mut: { '#1': '[1, 2, 3]' }, n: 'কিন্তু list এর **ভেতরে** বদলানো যায়! final তীর আটকায়, বাক্সের ভেতরটা না।' },
    { l: 2, n: "nums = [] মানে তীর ঘোরানো, final এ সেটা নিষেধ: {{Can't assign to the final variable 'nums'.}}" },
    { l: 3, obj: { '#2': ['const List<int>', '[1, 2]'] }, set: { fixed: '#2' }, ty: { fixed: 'const' }, n: '{{const}}: তীরও আটকানো, **ভেতরটাও** তালা দেওয়া।' },
    { l: 4, err: '{{Unsupported operation: Cannot add to an unmodifiable list}}', n: 'const list এ add করলে চলার সময় Error।' },
  ] },
];

TOPICS['null-safety'].mem = [
  { title: '? মানে খালি থাকতে পারে', code: ['String? nick;', 'print(nick);', "nick = 'রাফু';", 'print(nick.length);', 'nick = null;'], steps: [
    { l: 0, set: { nick: 'null' }, ty: { nick: 'String?' }, n: '{{String?}} মানে: এই তীর **কোনো লেখার দিকে দেখাতে পারে, আবার কোথাও না দেখাতেও পারে**। শুরুতে কোথাও দেখায় না: null।' },
    { l: 1, p: 'null', n: 'কোনো লেখা নেই, তাই null প্রিন্ট।' },
    { l: 2, obj: { '#1': ['String', "'রাফু'"] }, set: { nick: '#1' }, n: 'এবার তীর একটা আসল লেখার দিকে।' },
    { l: 3, p: '4', n: 'Dart দেখেছে এইমাত্র মান দেওয়া হয়েছে, তাই জানে এখন null না, {{.length}} চলে।' },
    { l: 4, set: { nick: 'null' }, n: 'আবার null করলাম। "রাফু" কে কেউ দেখছে না: garbage।' },
  ] },
  { title: '?? আর !', code: ['String? city;', "print(city ?? 'অজানা');", "city ??= 'ঢাকা';", 'print(city.length);', 'String? town;', 'print(town!.length);'], steps: [
    { l: 0, set: { city: 'null' }, ty: { city: 'String?' }, n: 'city কোথাও দেখায় না।' },
    { l: 1, p: 'অজানা', n: '{{??}}: "তীর কোথাও না দেখালে ডান পাশেরটা নাও"। city null, তাই অজানা।' },
    { l: 2, obj: { '#1': ['String', "'ঢাকা'"] }, set: { city: '#1' }, n: '{{??=}}: "null হলে তবেই মান বসাও"। null ছিল, তাই বসলো।' },
    { l: 3, p: '4', n: 'এখন city নিশ্চিত null না।' },
    { l: 4, set: { town: 'null' }, ty: { town: 'String?' }, n: 'town কোথাও দেখায় না।' },
    { l: 5, err: '{{Null check operator used on a null value}}', n: '{{!}} মানে "কথা দিলাম, এটা null না"। কিন্তু তীর তো কোথাও দেখাচ্ছে না! কথা ভঙ্গ, প্রোগ্রাম crash। তাই {{!}} কম, {{??}} বেশি।' },
  ] },
  { title: '? ছাড়া: null অসম্ভব', code: ["String name = 'রাফি';", '// name = null;  ← Error'], steps: [
    { l: 0, obj: { '#1': ['String', "'রাফি'"] }, set: { name: '#1' }, ty: { name: 'String' }, n: '{{String}} ({{?}} ছাড়া) মানে Dart কে কথা দিলাম: এই তীর **সবসময়** কোনো লেখার দিকে দেখাবে। তাই শুরুতেই মান দিতে হয়।' },
    { l: 1, n: "null দিতে গেলে চালানোর আগেই আটকায়: {{A value of type 'Null' can't be assigned to a variable of type 'String'.}} এজন্যই এটা **null safety**: crash হওয়ার আগেই Dart ভুল ধরে।" },
  ] },
];

// ---- বাড়তি প্রশ্ন আর সমস্যা ----
TOPICS['variables'].quiz.push(
  { q: 'Output কী?', code: 'int a = 5;\nint b = a;\na = 10;\nprint(b);', opts: ['5', '10', '15', 'Error'], a: 0, why: '{{b = a}} এর সময় b ও 5 এর দিকে দেখালো। পরে শুধু a এর তীর 10 এ ঘুরলো, b এর না।' },
);
TOPICS['variables'].probs.push(
  { l: 'e', q: 'খাতায় মেমরির ছবি আঁকো (নাম → মান তীর দিয়ে) প্রতিটা লাইনের পরে, তারপর output লেখো।', code: `void main() {
  int x = 3;
  int y = x;
  x = x + 4;
  y = y * 2;
  print(x);
  print(y);
}`, ans: 'লাইন ১: x → 3\nলাইন ২: x → 3, y → 3 (একই)\nলাইন ৩: x → 7 (নতুন মান), y → 3\nলাইন ৪: x → 7, y → 6\noutput: 7 তারপর 6। একজনকে বদলালে আরেকজনের কিছু হয় না।' },
  { l: 'm', q: 'দুইটা variable এর মান অদলবদল (swap) করো: a = 5, b = 9 থেকে a = 9, b = 5। প্রথমে এমনভাবে চেষ্টা করো: {{a = b; b = a;}} কী হয় দেখো, তারপর ঠিক করো।', sol: `void main() {
  int a = 5, b = 9;
  int temp = a;   // a এর মান হারানোর আগে ধরে রাখি
  a = b;
  b = temp;
  print('a=$a b=$b'); // a=9 b=5
}`, note: '{{a = b}} এর পরেই a এর আগের 5 কে আর কেউ দেখে না, হারিয়ে যায়। তাই b = a দিলে দুইটাই 9। তৃতীয় একটা নাম (temp) দিয়ে আগে ধরে রাখতে হয়। (Dart 3 এ ছোট উপায়ও আছে: {{(a, b) = (b, a);}})' },
);
TOPICS['strings-basic'].quiz.push(
  { q: 'Output কী?', code: "String s = 'dart';\ns.toUpperCase();\nprint(s);", opts: ['DART', 'dart', 'Dart', 'Error'], a: 1, why: '{{toUpperCase()}} নতুন String ফেরত দেয়, s বদলায় না। বদলাতে {{s = s.toUpperCase();}}' },
);
TOPICS['strings-basic'].probs.push(
  { l: 'e', q: 'নাম \'rafi\' কে বড় হাতের অক্ষরে প্রিন্ট করো, তারপর প্রমাণ করো যে আসল variable বদলায়নি।', sol: `void main() {
  String name = 'rafi';
  String big = name.toUpperCase();
  print(big);   // RAFI
  print(name);  // rafi, আসলটা অক্ষত
}` },
);
TOPICS['list'].quiz.push(
  { q: 'Output কী?', code: 'var a = [1, 2];\nvar b = a;\nb.add(3);\nprint(a.length);', opts: ['2', '3', 'Error', '1'], a: 1, why: '{{b = a}} একই list এর দুইটা নাম। b দিয়ে add করলে a দিয়েও দেখা যায়।' },
  { q: 'Output কী?', code: 'print([1, 2] == [1, 2]);', opts: ['true', 'false', 'Error', '[1, 2]'], a: 1, why: 'Dart এ দুইটা List এর {{==}} দেখে **একই list কিনা** (একই ঠিকানা), ভেতরের জিনিস একই কিনা না। এরা দেখতে এক, কিন্তু মেমরিতে দুইটা আলাদা list।' },
);
TOPICS['list'].probs.push(
  { l: 'm', q: 'আম্মু বাজারের লিস্ট বানালো। তুমি "নিজের কপি" বানিয়ে তাতে চকলেট যোগ করলে, কিন্তু আম্মুর লিস্টেও চকলেট চলে এলো! কেন? ঠিক করো।', code: `void main() {
  var mom = ['চাল', 'ডাল'];
  var mine = mom;
  mine.add('চকলেট');
  print(mom);
}`, sol: `void main() {
  var mom = ['চাল', 'ডাল'];
  var mine = [...mom];     // আসল কপি
  mine.add('চকলেট');
  print(mom);   // [চাল, ডাল]
  print(mine);  // [চাল, ডাল, চকলেট]
}`, note: '{{var mine = mom;}} কপি বানায় না, একই list এর আরেকটা নাম দেয়। আলাদা কপি চাইলে {{[...mom]}} বা {{List.of(mom)}}।' },
);
TOPICS['null-safety'].quiz.push(
  { q: '{{String? name;}} লিখলে name এর তীর শুরুতে কোথায় দেখায়?', opts: ["খালি লেখা ''", 'কোথাও না (null)', 'Error', "'name'"], a: 1, why: "{{?}} type এর variable এ মান না দিলে শুরুতে null। খালি লেখা {{''}} আর null এক না: খালি লেখা হলো একটা আসল String যার length 0।" },
);
TOPICS['null-safety'].probs.push(
  { l: 'e', q: 'প্রতিটা লাইনের পরে খাতায় তীরের ছবি আঁকো, আর বলো কোন লাইন crash করবে।', code: `void main() {
  String? a;
  String? b = 'হ্যালো';
  print(b.length);
  a = b;
  b = null;
  print(a.length);
  print(b ?? 'খালি');
  print(b!.length);
}`, ans: "a → null, b → 'হ্যালো'। {{b.length}} = 6 (Dart জানে b এখন null না। আর হ্যাঁ, 6: হ + ্ + য + া + ল + ো, কার আর হসন্ত চিহ্ন আলাদা গোনা হয়)।\n{{a = b}}: a ও 'হ্যালো' এর দিকে। {{b = null}}: শুধু b এর তীর সরলো, a এখনো 'হ্যালো' দেখে, তাই {{a.length}} = 6।\n{{b ?? 'খালি'}} → খালি।\n{{b!.length}}: b null অথচ ! দিয়ে কথা দিলাম → **crash**: Null check operator used on a null value।" },
);

// ---- if / else: আরো উদাহরণ, প্রশ্ন, সমস্যা ----
TOPICS['if-else'].quiz.push(
  { q: 'marks = 85 হলে কয়টা লাইন প্রিন্ট হবে?', code: "if (marks >= 80) print('A+');\nif (marks >= 70) print('A');\nif (marks >= 33) print('পাস');", opts: ['1', '2', '3', '0'], a: 2, why: 'else নেই, তাই তিনটা আলাদা if, প্রতিটা আলাদা করে চেক হয়, তিনটাই true। একটা চাইলে else if।' },
  { q: 'x = 2 হলে Output কী?', code: "if (x > 5); {\n  print('বড়');\n}", opts: ['কিছুই না', 'বড়', 'Error', '2'], a: 1, why: 'if এর পরে {{;}} মানে "শর্ত true হলে কিছুই করো না"। নিচের {{ { } }} if এর অংশই না, সবসময় চলে। এই bug চোখে পড়ে না, তাই সাবধান!' },
  { q: 'a = true, b = false হলে কী প্রিন্ট হবে?', code: "if (a)\n  if (b) print('দুইটাই');\n  else print('শুধু a');", opts: ['দুইটাই', 'শুধু a', 'কিছুই না', 'Error'], a: 1, why: 'else সবসময় **সবচেয়ে কাছের** if এর সাথে জোড়া লাগে, মানে {{if (b)}} এর। b false, তাই "শুধু a"। ঝামেলা এড়াতে সবসময় {{ { } }} দাও।' },
  { q: "ans = 'Yes' হলে কী প্রিন্ট হবে?", code: "if (ans == 'yes') {\n  print('হ্যাঁ বলেছে');\n} else {\n  print('না বলেছে');\n}", opts: ['হ্যাঁ বলেছে', 'না বলেছে', 'Error', 'কিছুই না'], a: 1, why: "'Yes' আর 'yes' আলাদা লেখা (বড় Y)। তুলনার আগে {{ans.toLowerCase() == 'yes'}}।" },
);
TOPICS['if-else'].probs.push(
  { l: 'e', q: 'ভুল ধরো: সবসময় "জ্বর আছে" দেখাচ্ছে, এমনকি 98 তেও।', code: `void main() {
  double temp = 98;
  if (temp > 100); {
    print('জ্বর আছে');
  }
}`, ans: "if এর পরের {{;}} টা মুছে দাও: {{if (temp > 100) {}}।\n{{;}} থাকলে if এর কাজ ওখানেই শেষ, নিচের ব্লক আলাদা, সবসময় চলে।" },
  { l: 'e', q: 'ইউজার "yes", "Yes", "YES" যেভাবেই লিখুক, "রাজি" দেখাও। বাকি সব হলে "রাজি না"।', sol: `void main() {
  String ans = 'YES';
  if (ans.toLowerCase() == 'yes') {
    print('রাজি');
  } else {
    print('রাজি না');
  }
}` },
  { l: 'm', q: 'nested if কে && দিয়ে একটা if এ আনো, ফল যেন একই থাকে।', code: `void main() {
  int age = 20;
  bool hasTicket = true;
  if (age >= 18) {
    if (hasTicket) {
      print('ঢুকতে পারো');
    }
  }
}`, sol: `void main() {
  int age = 20;
  bool hasTicket = true;
  if (age >= 18 && hasTicket) {
    print('ঢুকতে পারো');
  }
}`, note: 'ভেতরের if এর কোনো else না থাকলে দুইটা শর্ত {{&&}} দিয়ে জোড়া যায়। কম সিঁড়ি, পড়তে সহজ।' },
  { l: 'm', q: 'এই আলাদা if গুলো 85 এর জন্য তিনটা লাইন প্রিন্ট করে। এমনভাবে বদলাও যাতে শুধু একটা (সবচেয়ে ভালো গ্রেড) প্রিন্ট হয়।', code: `void main() {
  int marks = 85;
  if (marks >= 80) print('A+');
  if (marks >= 70) print('A');
  if (marks >= 33) print('পাস');
}`, sol: `void main() {
  int marks = 85;
  if (marks >= 80) {
    print('A+');
  } else if (marks >= 70) {
    print('A');
  } else if (marks >= 33) {
    print('পাস');
  } else {
    print('ফেল');
  }
}`, note: 'else if শৃঙ্খলে প্রথম true পেলেই থামে। আর বড় শর্ত আগে, না হলে 85 ও "পাস" দেখাবে।' },
  { l: 'm', q: 'মোবাইল ব্যালেন্স: 0 এর কম হলে "ভুল", 0 হলে "রিচার্জ করো", 1-19 "কম আছে", 20-99 "চলবে", 100 বা বেশি "ভালো আছে"। সীমার মানগুলো (0, 19, 20, 99, 100) দিয়ে পরীক্ষা করো।', sol: `void main() {
  for (var b in [-5, 0, 19, 20, 99, 100]) {
    String msg;
    if (b < 0) {
      msg = 'ভুল';
    } else if (b == 0) {
      msg = 'রিচার্জ করো';
    } else if (b < 20) {
      msg = 'কম আছে';
    } else if (b < 100) {
      msg = 'চলবে';
    } else {
      msg = 'ভালো আছে';
    }
    print('$b → $msg');
  }
}`, note: 'সীমার মান (boundary) দিয়ে পরীক্ষাই সবচেয়ে বেশি ভুল ধরে: {{<}} নাকি {{<=}} এর ভুল এখানেই ধরা পড়ে। খেয়াল করো: আগের শর্তগুলো বাদ পড়ায় পরেরগুলোতে নিচের সীমা লিখতে হয়নি।' },
  { l: 'h', q: 'রক-পেপার-সিজার: দুইজনের পছন্দ ("rock", "paper", "scissors") দেখে কে জিতলো বলো। কম সংখ্যক শর্তে লেখার চেষ্টা করো।', sol: `void main() {
  String p1 = 'rock', p2 = 'scissors';
  if (p1 == p2) {
    print('ড্র');
  } else if ((p1 == 'rock' && p2 == 'scissors') ||
      (p1 == 'paper' && p2 == 'rock') ||
      (p1 == 'scissors' && p2 == 'paper')) {
    print('প্রথমজন জিতেছে');
  } else {
    print('দ্বিতীয়জন জিতেছে');
  }
}`, note: 'চালাকি: আগে ড্র বাদ, তারপর শুধু প্রথমজনের জেতার ৩টা উপায় লেখো, বাকি সব মানেই দ্বিতীয়জন। ৯টা জোড়া আলাদা আলাদা লিখতে হলো না।' },
);

CARDS.push(
  { w: 1, f: 'b = a; তারপর a = 10; b কত?', b: 'আগের মানই। b এর তীর সরেনি,\nশুধু a এর তীর নতুন মানে গেছে।' },
  { w: 1, f: 'garbage কী?', b: 'যে মান কে আর কোনো নাম দেখছে না।\nDart নিজেই মেমরি থেকে মুছে দেয়।' },
  { w: 6, f: 'list এর আলাদা কপি', b: 'var copy = [...a];\n// বা List.of(a)\n(var copy = a; কপি না!)' },
  { w: 3, f: 'if এর পরে ; দিলে কী হয়?', b: 'if (x > 5); { ... }\nব্লকটা if এর না, সবসময় চলে!' },
);
