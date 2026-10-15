// সপ্তাহ ১ আর ২
// নোট: JS template literal এর ভেতরে Dart এর ${...} লিখতে \${...} লিখতে হয়।

TOPICS['setup'] = {
  short: 'প্রথম প্রোগ্রাম', title: 'প্রথম প্রোগ্রাম: main() আর print()', days: 'দিন ২',
  goal: 'Dart প্রোগ্রাম কোথা থেকে শুরু হয় আর স্ক্রিনে কিছু দেখাতে হয় কিভাবে, সেটা বোঝা।',
  learn: [
    'প্রোগ্রাম মানে কম্পিউটারকে ধাপে ধাপে নির্দেশ দেওয়া। কম্পিউটার নিজে কিছু ভাবে না। তুমি যা লিখবে, ঠিক সেটাই করবে, **উপর থেকে নিচে, একটার পর একটা লাইন**।',
    { h: 'কোড কোথায় লিখবো?' },
    'শুরুতে কিছু install করতে হবে না। ব্রাউজারে [dartpad.dev](https://dartpad.dev) খোলো। বামে কোড লেখো, Run চাপো, ডানে output দেখবে। পরে কম্পিউটারে Dart SDK আর VS Code install করে নেবে।',
    { code: `void main() {
  print('Hello, Dart!');
  print('আমার নাম রাফি');
}`, out: 'Hello, Dart!\nআমার নাম রাফি' },
    { anat: [['void', 'কিছু ফেরত দেয় না'], ['main', 'প্রোগ্রামের দরজা, এখান থেকে শুরু'], ['( )', 'parameter এর জায়গা'], ['{ ... }', 'ভেতরের সব কাজ এই ব্লকে'], ["print('...')", 'স্ক্রিনে দেখাও'], [';', 'প্রতিটা নির্দেশ শেষে দাঁড়ি']], cap: 'প্রতিটা অংশের কাজ' },
    { list: ['{{main()}} প্রতিটা Dart প্রোগ্রামে থাকতেই হবে। Run চাপলে Dart এটাকেই খোঁজে।', '{{print()}} এর ভেতরে যা দেবে, সেটা স্ক্রিনে দেখাবে, তারপর নতুন লাইনে যাবে।', "লেখা (text) সবসময় {{' '}} বা {{\" \"}} এর ভেতরে থাকবে।", 'প্রতিটা নির্দেশের শেষে {{;}} লাগবে, বাংলায় যেমন দাঁড়ি।', "Dart বড়-ছোট হাতের অক্ষর আলাদা ধরে। {{Print}} আর {{print}} এক না।"] },
    { h: 'Comment: নিজের জন্য নোট' },
    { code: `void main() {
  // এই লাইন কম্পিউটার পড়ে না
  print('দেখা যাবে'); // লাইনের শেষেও comment দেওয়া যায়

  /*
    অনেক লাইনের comment
    এভাবে লেখা যায়
  */
}`, out: 'দেখা যাবে' },
    { warn: "সবচেয়ে কমন ভুল তিনটা: {{;}} ভুলে যাওয়া, {{' '}} বা {{( )}} জোড়া না মেলানো, আর {{print}} এর বানান ভুল। Error এলে ভয় পেও না। লাল লেখায় লাইন নম্বর থাকে, সেই লাইনে গিয়ে খোঁজো।" },
  ],
  how: [
    'Run চাপলে Dart প্রথমে {{main()}} খুঁজে বের করে।',
    '{{main}} এর {{ { } }} এর ভেতরের লাইনগুলো উপর থেকে নিচে, একটা একটা করে চলে।',
    '{{print()}} তার ভেতরের জিনিস স্ক্রিনে দেখায়, তারপর পরের লাইনে চলে যায়। তাই দুইটা print মানে দুইটা আলাদা লাইন।',
    'কোনো লাইনে ভুল থাকলে প্রোগ্রাম চলবেই না। আগে সব ভুল ঠিক করতে হয়।',
  ],
  quiz: [
    { q: 'Output কী হবে?', code: `void main() {
  print('A');
  print('B');
}`, opts: ['A B', 'A\nB', 'B\nA', 'AB'], a: 1, why: 'প্রতিটা {{print}} আলাদা লাইনে লেখে। তাই A, তারপর পরের লাইনে B।' },
    { q: 'কোন লাইনটা একদম ঠিক?', opts: ["print('Hi');", 'print(Hi);', "Print('Hi');", "print('Hi')"], a: 0, why: "লেখা {{' '}} এর ভেতরে লাগে, {{print}} ছোট হাতের, আর শেষে {{;}} লাগে।" },
    { q: 'Output কী হবে?', code: `void main() {
  print(2 + 3);
  print('2 + 3');
}`, opts: ['5\n5', '2 + 3\n2 + 3', '5\n2 + 3', 'Error'], a: 2, why: "কোটেশন ছাড়া {{2 + 3}} একটা হিসাব, তাই 5। কোটেশনের ভেতরে থাকলে সেটা শুধু লেখা, যেমন আছে তেমন দেখায়।" },
  ],
  probs: [
    { l: 'e', q: 'তোমার নাম, ক্লাস আর স্কুলের নাম আলাদা আলাদা লাইনে প্রিন্ট করো।', hint: 'তিনটা {{print()}} লাগবে।', sol: `void main() {
  print('নাম: রাফি');
  print('ক্লাস: সপ্তম');
  print('স্কুল: আইডিয়াল স্কুল');
}` },
    { l: 'e', q: 'তোমার প্রিয় ৩টা খাবারের নাম প্রিন্ট করো, প্রতিটার আগে নম্বর দিয়ে (1. বিরিয়ানি ...)।', sol: `void main() {
  print('1. বিরিয়ানি');
  print('2. খিচুড়ি');
  print('3. রসগোল্লা');
}` },
    { l: 'e', q: 'নিচের কোডে ৩টা ভুল আছে। খুঁজে ঠিক করো।', code: `void main() {
  print('Hello')
  Print('World');
  print('Dart);
}`, hint: 'প্রতিটা লাইনের শেষ, প্রথম অক্ষর আর কোটেশন জোড়া দেখো।', sol: `void main() {
  print('Hello');   // ; ছিল না
  print('World');   // Print → print
  print('Dart');    // শেষের ' ছিল না
}` },
    { l: 'e', q: 'নিচের মতো একটা বক্স প্রিন্ট করো।', out: '+-------+ | Dart  | +-------+', note: '', hint: 'তিন লাইন, তিনটা print।', sol: `void main() {
  print('+-------+');
  print('| Dart  |');
  print('+-------+');
}` },
    { l: 'e', q: 'একটা প্রোগ্রাম লেখো যার প্রতিটা লাইনের উপরে comment দিয়ে বাংলায় লেখা আছে লাইনটা কী করে।', sol: `void main() {
  // আমার নাম দেখাও
  print('রাফি');
  // আমার শহরের নাম দেখাও
  print('ঢাকা');
}` },
    { l: 'm', q: 'print দিয়ে একটা ছোট্ট ঘর আঁকো (চাল, দেয়াল, দরজা)।', hint: 'প্রতিটা লাইন আলাদা print। স্পেস দিয়ে জায়গা ঠিক করো।', sol: `void main() {
  print('    /\\\\    ');
  print('   /  \\\\   ');
  print('  /____\\\\  ');
  print('  |    |  ');
  print('  | [] |  ');
  print('  |____|  ');
}`, note: "Dart এ \\ একটা বিশেষ চিহ্ন। একটা \\ দেখাতে কোডে পরপর দুইটা লিখতে হয়।" },
    { l: 'm', q: 'তোমার নামের প্রথম অক্ষর (ইংরেজি) {{*}} দিয়ে বড় করে আঁকো। যেমন R।', sol: `void main() {
  print('****  ');
  print('*   * ');
  print('****  ');
  print('* *   ');
  print('*  *  ');
  print('*   * ');
}` },
    { l: 'm', q: 'কোড না চালিয়ে বলো output কী হবে, তারপর চালিয়ে মিলাও।', code: `void main() {
  print('১');
  // print('২');
  print('৩'); print('৪');
}`, sol: `// Output:
// ১
// ৩
// ৪
// '২' comment হয়ে গেছে, তাই চলেনি।
// এক লাইনে দুইটা নির্দেশ থাকলেও দুইটাই চলে।` },
  ],
};

TRACES.swap = {
  title: 'দুইটা বাক্সের মান অদলবদল (swap)',
  code: ['void main() {', '  int a = 5;', '  int b = 9;', '  int temp = a;', '  a = b;', '  b = temp;', "  print('a = $a, b = $b');", '}'],
  steps: [
    { l: 0, n: 'main() থেকে শুরু।' },
    { l: 1, v: { a: 5 }, n: '{{a}} নামের বাক্স বানিয়ে 5 রাখলাম।' },
    { l: 2, v: { b: 9 }, n: '{{b}} নামের বাক্সে 9।' },
    { l: 3, v: { temp: 5 }, n: 'সরাসরি {{a = b}} করলে a এর 5 হারিয়ে যেত! তাই আগে 5 টা {{temp}} বাক্সে সাবধানে রেখে দিলাম।' },
    { l: 4, v: { a: 9 }, n: '{{a}} তে b এর মান 9 বসলো। পুরানো 5 মুছে গেল, কিন্তু temp এ কপি আছে।' },
    { l: 5, v: { b: 5 }, n: '{{b}} তে temp এর 5 বসলো। অদলবদল শেষ!' },
    { l: 6, p: 'a = 9, b = 5', n: 'প্রিন্ট হলো। যেমন দুই গ্লাসের পানি বদলাতে তৃতীয় একটা খালি গ্লাস লাগে।' },
  ],
};

TOPICS['variables'] = {
  short: 'Variable ও Data Type', title: 'Variable আর Data Type', days: 'দিন ৩–৫',
  goal: 'মান মনে রাখার জন্য variable বানানো, আর কোন মানের জন্য কোন type সেটা চেনা।',
  learn: [
    'Variable হলো **নাম লেখা একটা বাক্স**। বাক্সে একটা মান (value) রাখো, পরে নাম ধরে ডাকলেই সেই মান পাওয়া যায়। বাক্সের গায়ে type লেখা থাকে, মানে কী ধরনের জিনিস রাখা যাবে।',
    { boxes: [['age', 'int', '14'], ['height', 'double', '5.4'], ['name', 'String', "'Rafi'"], ['isStudent', 'bool', 'true']] },
    { table: [['Type', 'কী রাখে', 'উদাহরণ'], ['{{int}}', 'পূর্ণসংখ্যা (দশমিক ছাড়া)', '{{10}}, {{-3}}, {{0}}'], ['{{double}}', 'দশমিক সংখ্যা', '{{3.14}}, {{5.0}}'], ['{{String}}', 'লেখা', "{{'Hello'}}, {{'১২৩'}}"], ['{{bool}}', 'শুধু হ্যাঁ/না', '{{true}}, {{false}}']] },
    { code: `void main() {
  int age = 14;
  double height = 5.4;
  String name = 'Rafi';
  bool isStudent = true;

  print(name);
  print(age);

  age = 15; // একই বাক্সে নতুন মান, পুরানোটা মুছে গেল
  print(age);
  print(isStudent);
}`, out: 'Rafi\n14\n15\ntrue' },
    { h: 'var: Dart কে type বুঝে নিতে দাও' },
    "{{var}} লিখলে Dart প্রথম মান দেখে নিজেই type ঠিক করে নেয়। কিন্তু **একবার type ঠিক হয়ে গেলে আর বদলায় না**।",
    { code: `void main() {
  var city = 'Dhaka';   // Dart বুঝলো: String
  city = 'Khulna';      // ঠিক আছে
  // city = 10;         // Error! String বাক্সে int রাখা যায় না
  print(city);
}`, out: 'Khulna' },
    { h: 'final আর const: যে মান বদলাবে না' },
    { code: `void main() {
  const pi = 3.1416;          // লেখার সময়ই মান জানা
  final birthYear = 2011;     // একবার রাখলে আর বদলানো যাবে না
  final now = DateTime.now(); // final হলে চলবে, const হলে Error
  // pi = 3;                  // Error!
  print(pi * 2);
}` },
    { list: ['{{const}}: মানটা কোড লেখার সময়ই জানা থাকতে হবে (যেমন pi)।', '{{final}}: প্রোগ্রাম চলার সময় একবার মান বসবে, তারপর আর বদলাবে না।', '{{dynamic}}: যেকোনো type, পরে type বদলাতেও পারে। শুরুতে এটা এড়িয়ে চলো, ভুল ধরা কঠিন হয়।'] },
    { h: 'নাম রাখার নিয়ম' },
    { list: ['অক্ষর বা {{_}} দিয়ে শুরু হবে, সংখ্যা দিয়ে না: {{student1}} ঠিক, {{1student}} ভুল।', 'নামের মাঝে স্পেস চলবে না: {{totalMarks}} ঠিক, {{total marks}} ভুল।', 'নিয়ম হলো camelCase: প্রথম শব্দ ছোট হাতের, পরের শব্দের প্রথম অক্ষর বড়।', 'Dart এর নিজের শব্দ ({{int}}, {{class}}, {{if}}) নাম হিসেবে চলবে না।', 'অর্থবোধক নাম দাও: {{x}} এর চেয়ে {{price}} ভালো।'] },
  ],
  how: [
    '{{int age = 14;}} লিখলে মেমরিতে {{age}} নামের একটা বাক্স তৈরি হয়, ভেতরে 14 রাখা হয়।',
    '{{age = 15;}} লিখলে নতুন বাক্স হয় না। পুরানো বাক্সের মান বদলে যায়। আগের মান আর পাওয়া যায় না।',
    '{{=}} চিহ্নের মানে "সমান" না, মানে "ডানের মান বামের বাক্সে রাখো"। তাই {{x = x + 1}} মানে: x এর মান নাও, 1 যোগ করো, আবার x এ রাখো।',
    'নিচের যন্ত্রে দেখো দুইটা বাক্সের মান কিভাবে অদলবদল করা হয়। এটা লজিকের প্রথম বড় ধাঁধা।',
  ],
  traces: ['swap'],
  quiz: [
    { q: 'Output কী হবে?', code: `void main() {
  int x = 10;
  x = 20;
  x = x + 5;
  print(x);
}`, opts: ['10', '20', '25', '35'], a: 2, why: 'x প্রথমে 10, তারপর 20 হয়ে গেল (10 মুছে গেল)। তারপর 20 + 5 = 25।' },
    { q: 'কোন লাইনে Error হবে?', opts: ['int n = 7;', 'double d = 7;', 'int n = 3.5;', "String s = '7';"], a: 2, why: '{{int}} বাক্সে দশমিক সংখ্যা রাখা যায় না। কিন্তু {{double d = 7;}} চলে, Dart 7 কে 7.0 বানিয়ে নেয়।' },
    { q: 'কোনটা Error দেবে?', opts: ['final t = DateTime.now();', 'const t = DateTime.now();', 'const n = 5;', 'final n = 5;'], a: 1, why: 'এখনকার সময় কোড লেখার সময় জানা যায় না, চলার সময় জানা যায়। তাই const হবে না, final হবে।' },
  ],
  probs: [
    { l: 'e', q: 'তোমার নাম, বয়স, উচ্চতা আর তুমি ছাত্র কিনা, এই ৪টা variable বানাও (সঠিক type দিয়ে), তারপর প্রিন্ট করো।', sol: `void main() {
  String name = 'Rafi';
  int age = 14;
  double height = 5.2;
  bool isStudent = true;
  print(name);
  print(age);
  print(height);
  print(isStudent);
}` },
    { l: 'e', q: '{{score}} নামে একটা variable বানাও, মান 0। তারপর তিনবার মান বদলাও (10, 25, 40) আর প্রতিবার প্রিন্ট করো।', sol: `void main() {
  int score = 0;
  print(score);
  score = 10;
  print(score);
  score = 25;
  print(score);
  score = 40;
  print(score);
}` },
    { l: 'e', q: 'এগুলোর মধ্যে কোনগুলো valid variable নাম? {{2ndName}}, {{my name}}, {{totalMarks}}, {{_count}}, {{class}}, {{student1}}', sol: `// valid:   totalMarks, _count, student1
// invalid: 2ndName  (সংখ্যা দিয়ে শুরু)
//          my name  (স্পেস আছে)
//          class    (Dart এর নিজের শব্দ)` },
    { l: 'e', q: 'প্রতিটার type বলো: {{42}}, {{\'Dhaka\'}}, {{3.0}}, {{false}}, {{\'42\'}}', hint: 'কোটেশনের ভেতরে থাকলে সংখ্যা হলেও সেটা লেখা।', sol: `// 42      → int
// 'Dhaka' → String
// 3.0     → double
// false   → bool
// '42'    → String (কোটেশনের ভেতরে!)` },
    { l: 'm', q: 'একটা আয়তক্ষেত্রের {{length = 8}}, {{width = 5}}। ক্ষেত্রফল আর পরিসীমা আলাদা variable এ রেখে প্রিন্ট করো।', hint: 'ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ, পরিসীমা = 2 × (দৈর্ঘ্য + প্রস্থ)', sol: `void main() {
  int length = 8;
  int width = 5;
  int area = length * width;
  int perimeter = 2 * (length + width);
  print(area);       // 40
  print(perimeter);  // 26
}` },
    { l: 'm', q: 'একটা কলমের দাম 12 টাকা। 7টা কলম কিনলে মোট কত? দোকানদারকে 100 টাকা দিলে কত ফেরত পাবে? variable দিয়ে করো।', sol: `void main() {
  int price = 12;
  int qty = 7;
  int total = price * qty;
  int paid = 100;
  int change = paid - total;
  print(total);   // 84
  print(change);  // 16
}` },
    { l: 'm', q: 'তৃতীয় একটা variable ব্যবহার করে {{a = 3}} আর {{b = 8}} এর মান অদলবদল করো। (উপরের Dry Run দেখো)', sol: `void main() {
  int a = 3;
  int b = 8;
  int temp = a;
  a = b;
  b = temp;
  print(a); // 8
  print(b); // 3
}` },
    { l: 'm', q: 'নিচের কোডে কোথায় কোথায় সমস্যা? ঠিক করো।', code: `void main() {
  const year;
  year = 2025;
  var name = 'Rafi';
  name = 15;
  int 1st = 1;
}`, sol: `void main() {
  const year = 2025;   // const এর মান সাথে সাথেই দিতে হয়, পরে বদলানো যায় না
  var name = 'Rafi';
  name = 'Rahim';      // String এ int রাখা যায় না
  int first = 1;       // নাম সংখ্যা দিয়ে শুরু হতে পারে না
  print(year);
  print(name);
  print(first);
}` },
    { l: 'h', q: 'তৃতীয় variable ছাড়া {{a = 3}}, {{b = 8}} এর মান অদলবদল করো।', hint: 'যোগ-বিয়োগ দিয়ে: আগে a তে দুইটার যোগফল রাখো।', sol: `void main() {
  int a = 3, b = 8;
  a = a + b;  // a = 11
  b = a - b;  // b = 11 - 8 = 3
  a = a - b;  // a = 11 - 3 = 8
  print(a);   // 8
  print(b);   // 3
}` },
    { l: 'h', q: '{{a = 1, b = 2, c = 3}}। মানগুলো ঘুরিয়ে দাও যেন হয় {{a = 2, b = 3, c = 1}}। খাতায় আগে বাক্স এঁকে দেখো।', sol: `void main() {
  int a = 1, b = 2, c = 3;
  int temp = a;  // 1 সরিয়ে রাখলাম
  a = b;         // a = 2
  b = c;         // b = 3
  c = temp;      // c = 1
  print(a); // 2
  print(b); // 3
  print(c); // 1
}` },
  ],
};

TOPICS['strings-basic'] = {
  short: 'String ও Interpolation', title: 'String আর Interpolation', days: 'দিন ৬–৭',
  goal: 'লেখার সাথে variable এর মান মিশিয়ে সুন্দর করে দেখানো, আর String এর কাজের জিনিসগুলো চেনা।',
  learn: [
    "String মানে লেখা। {{' '}} বা {{\" \"}} এর ভেতরে লিখতে হয়। লেখার মধ্যে variable এর মান বসাতে চাইলে {{$}} চিহ্ন ব্যবহার করো। একে বলে **interpolation**।",
    { code: `void main() {
  String name = 'Rafi';
  int age = 14;

  print('আমার নাম ' + name);              // + দিয়ে জোড়া
  print('আমার নাম $name');                // interpolation
  print('আমার বয়স $age বছর');
  print('আগামী বছর হবে \${age + 1} বছর');  // হিসাব থাকলে \${ }
}`, out: 'আমার নাম Rafi\nআমার নাম Rafi\nআমার বয়স 14 বছর\nআগামী বছর হবে 15 বছর' },
    { list: ['{{$name}}: শুধু একটা variable এর মান বসাতে।', '{{ ${age + 1} }}: হিসাব বা method থাকলে {{ {} }} লাগে।', "{{'বয়স ' + age}} Error দেয়, কারণ String এর সাথে int সরাসরি {{+}} হয় না। interpolation দিয়ে করো।"] },
    { h: 'String এর কাজের জিনিস' },
    { array: ['B', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h'], cap: "String s = 'Bangladesh'; প্রতিটা অক্ষরের একটা নম্বর (index), শুরু 0 থেকে" },
    { code: `void main() {
  String s = 'Bangladesh';
  print(s.length);             // 10
  print(s.toUpperCase());      // BANGLADESH
  print(s.toLowerCase());      // bangladesh
  print(s[0]);                 // B
  print(s[s.length - 1]);      // h (শেষ অক্ষর)
  print(s.contains('desh'));   // true
  print(s.substring(0, 6));    // Bangla (0 থেকে 5 পর্যন্ত, 6 বাদ)
  print(s.indexOf('g'));       // 3
}` },
    { h: 'কয়েকটা বিশেষ লেখা' },
    { code: `void main() {
  print('It\\'s Dart');         // ' এর আগে \\ দিলে লেখার অংশ হয়
  print("It's Dart");           // অথবা বাইরে " ব্যবহার করো
  print('এক লাইন\\nদুই লাইন');  // \\n = নতুন লাইন
  print('দাম: \\$50');          // $ দেখাতে চাইলে \\$
  print('''
অনেক লাইনের
লেখা এভাবে
''');
}` },
    { tip: '{{substring(a, b)}} এ শুরু {{a}} নেয়, কিন্তু শেষ {{b}} নেয় না। মনে রাখো: "a থেকে b এর আগ পর্যন্ত"।' },
  ],
  how: [
    'Dart যখন {{$name}} দেখে, তখন {{name}} বাক্সের মান বের করে ঠিক সেই জায়গায় বসিয়ে দেয়।',
    '{{ ${...} }} এর ভেতরে আগে হিসাব হয়, তারপর ফলাফল বসে।',
    'String এর প্রতিটা অক্ষরের একটা index আছে, শুরু 0 থেকে। তাই শেষ অক্ষরের index সবসময় {{length - 1}}।',
    '{{s.toUpperCase()}} মূল {{s}} বদলায় না, নতুন একটা String বানিয়ে দেয়।',
  ],
  quiz: [
    { q: 'Output কী হবে?', code: `int a = 3, b = 4;
print('$a + $b');`, opts: ['3 + 4', '7', '$a + $b', 'Error'], a: 0, why: '{{$a}} এর জায়গায় 3, {{$b}} এর জায়গায় 4 বসে। মাঝের {{+}} শুধু লেখা।' },
    { q: 'Output কী হবে?', code: `int a = 3, b = 4;
print('\${a + b}');`, opts: ['3 + 4', '7', 'a + b', 'Error'], a: 1, why: '{{ ${} }} এর ভেতরে হিসাব হয়: 3 + 4 = 7।' },
    { q: 'Output কী হবে?', code: `String s = 'Dart';
print(s[s.length - 1]);`, opts: ['D', 't', '4', 'Error'], a: 1, why: 'length 4, তাই শেষ index 3। {{s[3]}} হলো t।' },
  ],
  probs: [
    { l: 'e', q: '{{name}} আর {{city}} variable বানিয়ে interpolation দিয়ে প্রিন্ট করো: "আমি রাফি, ঢাকায় থাকি।"', sol: `void main() {
  String name = 'রাফি';
  String city = 'ঢাকা';
  print('আমি $name, \${city}য় থাকি।');
}`, note: "এখানে {{ ${city} }} লাগলো কারণ ঠিক পরেই 'য়' অক্ষর আছে। {{$cityয়}} লিখলে Dart ভাববে variable এর নাম cityয়।" },
    { l: 'e', q: '{{\'Programming\'}} শব্দটায় কয়টা অক্ষর, প্রিন্ট করো। আর পুরোটা বড় হাতের অক্ষরে দেখাও।', sol: `void main() {
  String w = 'Programming';
  print(w.length);         // 11
  print(w.toUpperCase());  // PROGRAMMING
}` },
    { l: 'e', q: '{{\'Programming\'}} এর প্রথম আর শেষ অক্ষর প্রিন্ট করো।', sol: `void main() {
  String w = 'Programming';
  print(w[0]);              // P
  print(w[w.length - 1]);   // g
}` },
    { l: 'e', q: 'দুইটা সংখ্যা {{a = 5}}, {{b = 3}}। এই ফরম্যাটে প্রিন্ট করো: {{5 x 3 = 15}}', sol: `void main() {
  int a = 5, b = 3;
  print('$a x $b = \${a * b}');
}` },
    { l: 'm', q: '{{firstName}} আর {{lastName}} জোড়া লাগিয়ে {{fullName}} বানাও (মাঝে স্পেস), তারপর পুরো নাম আর তার length প্রিন্ট করো।', sol: `void main() {
  String firstName = 'Abdur';
  String lastName = 'Rahim';
  String fullName = '$firstName $lastName';
  print(fullName);         // Abdur Rahim
  print(fullName.length);  // 11
}` },
    { l: 'm', q: 'একটা বাক্যে "Dart" শব্দটা আছে কিনা বের করো, আর থাকলে কোন index এ শুরু।', sol: `void main() {
  String s = 'I am learning Dart today';
  print(s.contains('Dart'));  // true
  print(s.indexOf('Dart'));   // 14
}` },
    { l: 'm', q: "email {{'rafi@gmail.com'}} থেকে @ এর আগের অংশ (username) বের করো।", hint: "{{indexOf('@')}} দিয়ে @ এর জায়গা বের করো, তারপর {{substring}}।", sol: `void main() {
  String email = 'rafi@gmail.com';
  int at = email.indexOf('@');      // 4
  String user = email.substring(0, at);
  print(user);                      // rafi
}` },
    { l: 'm', q: 'একটা ছোট রিসিট প্রিন্ট করো: জিনিসের নাম, দাম, পরিমাণ থেকে মোট দাম। সব interpolation দিয়ে।', out: 'কলম x 3 = 36 টাকা', sol: `void main() {
  String item = 'কলম';
  int price = 12;
  int qty = 3;
  print('$item x $qty = \${price * qty} টাকা');
}` },
    { l: 'h', q: "নাম {{'Abdur Rahim'}} থেকে initials বানাও: {{A.R.}}  (স্পেসের জায়গা খুঁজে)", hint: "প্রথম অক্ষর {{name[0]}}। স্পেসের পরের অক্ষর হলো {{name[indexOf(' ') + 1]}}।", sol: `void main() {
  String name = 'Abdur Rahim';
  int space = name.indexOf(' ');
  String initials = '\${name[0]}.\${name[space + 1]}.';
  print(initials); // A.R.
}` },
  ],
};

TOPICS['operators'] = {
  short: 'Operator', title: 'Operator: হিসাব, তুলনা আর যুক্তি', days: 'দিন ১–২',
  goal: 'যোগ-বিয়োগ থেকে শুরু করে ভাগশেষ ({{%}}), তুলনা আর {{&&}} {{||}} দিয়ে শর্ত বানানো।',
  learn: [
    { table: [['Operator', 'কাজ', 'উদাহরণ (a = 7, b = 2)', 'ফল'], ['{{+}}', 'যোগ', '{{a + b}}', '9'], ['{{-}}', 'বিয়োগ', '{{a - b}}', '5'], ['{{*}}', 'গুণ', '{{a * b}}', '14'], ['{{/}}', 'ভাগ (double দেয়)', '{{a / b}}', '3.5'], ['{{~/}}', 'ভাগফল (পূর্ণসংখ্যা)', '{{a ~/ b}}', '3'], ['{{%}}', 'ভাগশেষ', '{{a % b}}', '1']] },
    { widget: 'opLab' },
    '{{%}} (modulo) প্রোগ্রামিং এ খুবই কাজের। **{{n % 2 == 0}} হলে n জোড়**। **{{n % 10}} দিলে শেষ অঙ্ক**। **{{n ~/ 10}} দিলে শেষ অঙ্ক বাদে বাকিটা**। এই তিনটা মনে রাখো, অনেক সমস্যায় লাগবে।',
    { h: 'Assignment এর শর্টকাট' },
    { code: `void main() {
  int x = 10;
  x += 5;   // x = x + 5  → 15
  x -= 3;   // x = x - 3  → 12
  x *= 2;   // x = x * 2  → 24
  x ~/= 5;  // x = x ~/ 5 → 4
  x++;      // x = x + 1  → 5
  x--;      // x = x - 1  → 4
  print(x);
}`, out: '4' },
    { h: 'তুলনা (ফল সবসময় true বা false)' },
    { table: [['Operator', 'মানে', 'উদাহরণ', 'ফল'], ['{{==}}', 'সমান?', '{{5 == 5}}', 'true'], ['{{!=}}', 'সমান না?', '{{5 != 3}}', 'true'], ['{{>}}', 'বড়?', '{{5 > 8}}', 'false'], ['{{<}}', 'ছোট?', '{{5 < 8}}', 'true'], ['{{>=}}', 'বড় বা সমান?', '{{5 >= 5}}', 'true'], ['{{<=}}', 'ছোট বা সমান?', '{{4 <= 3}}', 'false']] },
    { h: 'যুক্তি: && || !' },
    'একাধিক শর্ত একসাথে মেলাতে। {{&&}} মানে "এবং", {{||}} মানে "অথবা", {{!}} মানে "উল্টো"।',
    { widget: 'truth' },
    { code: `void main() {
  int age = 15;
  bool hasTicket = true;
  print(age >= 12 && hasTicket);  // true: দুইটাই সত্য
  print(age < 5 || age > 60);     // false: কোনোটাই সত্য না
  print(!hasTicket);              // false
  print(2 + 3 * 4);               // 14 (গুণ আগে!)
  print((2 + 3) * 4);             // 20
}` },
    { tip: 'গুণ-ভাগ আগে, যোগ-বিয়োগ পরে, অংকের মতোই। সন্দেহ হলে {{( )}} দাও, পড়তেও সহজ হয়।' },
  ],
  how: [
    '{{/}} সবসময় double দেয়: {{10 / 2}} হলো {{5.0}}, 5 না।',
    '{{~/}} ভাগ করে দশমিক অংশ ফেলে দেয়: {{17 ~/ 5}} = 3।',
    '{{%}} ভাগশেষ দেয়: 17 কে 5 দিয়ে ভাগ করলে 3 বার যায়, 2 থাকে। তাই {{17 % 5}} = 2।',
    'একটা সংখ্যাকে {{% 10}} আর {{~/ 10}} বারবার করলে অঙ্কগুলো আলাদা হয়: 583 → শেষ অঙ্ক 3, বাকি 58 → শেষ অঙ্ক 8, বাকি 5।',
  ],
  quiz: [
    { q: 'Output কী?', code: 'print(10 / 2);', opts: ['5', '5.0', '2', 'Error'], a: 1, why: '{{/}} সবসময় double দেয়।' },
    { q: 'Output কী?', code: 'print(19 % 4);', opts: ['4', '4.75', '3', '0'], a: 2, why: '19 এর মধ্যে 4 আছে 4 বার (16), বাকি থাকে 3।' },
    { q: 'Output কী?', code: `int x = 5;
x *= 2;
x--;
print(x);`, opts: ['10', '9', '11', '4'], a: 1, why: '5 × 2 = 10, তারপর 1 কমে 9।' },
    { q: 'Output কী?', code: 'print(7 > 3 && 2 > 5);', opts: ['true', 'false', '7', 'Error'], a: 1, why: '{{&&}} এ দুইটাই true লাগে। 2 > 5 false, তাই পুরোটা false।' },
  ],
  probs: [
    { l: 'e', q: '{{a = 20}}, {{b = 6}}। যোগ, বিয়োগ, গুণ, ভাগ, ভাগফল ({{~/}}) আর ভাগশেষ প্রিন্ট করো, সুন্দর ফরম্যাটে।', sol: `void main() {
  int a = 20, b = 6;
  print('$a + $b = \${a + b}');
  print('$a - $b = \${a - b}');
  print('$a * $b = \${a * b}');
  print('$a / $b = \${a / b}');
  print('$a ~/ $b = \${a ~/ b}');
  print('$a % $b = \${a % b}');
}` },
    { l: 'e', q: 'সেলসিয়াস থেকে ফারেনহাইট: {{F = C * 9 / 5 + 32}}। {{C = 37}} হলে F কত?', sol: `void main() {
  double c = 37;
  double f = c * 9 / 5 + 32;
  print(f); // 98.6
}` },
    { l: 'e', q: 'বৃত্তের ব্যাসার্ধ {{r = 7}}। ক্ষেত্রফল (πr²) আর পরিধি (2πr) বের করো। {{const pi = 3.1416}}', sol: `void main() {
  const pi = 3.1416;
  double r = 7;
  print(pi * r * r);   // 153.9384
  print(2 * pi * r);   // 43.9824
}` },
    { l: 'e', q: '250 মিনিট = কত ঘন্টা কত মিনিট?', hint: 'ঘন্টা = {{~/ 60}}, বাকি মিনিট = {{% 60}}', sol: `void main() {
  int total = 250;
  int h = total ~/ 60;  // 4
  int m = total % 60;   // 10
  print('$h ঘন্টা $m মিনিট');
}` },
    { l: 'm', q: 'কোড না চালিয়ে উত্তর বের করো: {{5 + 2 * 3}}, {{(5 + 2) * 3}}, {{20 ~/ 6 % 2}}, {{7 > 3 && 2 > 5}}, {{!(4 == 4) || 3 < 9}}', sol: `// 5 + 2 * 3        → 11  (গুণ আগে)
// (5 + 2) * 3      → 21
// 20 ~/ 6 % 2      → 3 % 2 → 1  (বাম থেকে ডানে)
// 7 > 3 && 2 > 5   → true && false → false
// !(4 == 4) || 3 < 9 → false || true → true` },
    { l: 'm', q: '3 অঙ্কের সংখ্যা {{583}} এর তিনটা অঙ্ক আলাদা করে প্রিন্ট করো।', hint: 'শেষ অঙ্ক {{n % 10}}। মাঝের অঙ্ক {{(n ~/ 10) % 10}}। প্রথম অঙ্ক {{n ~/ 100}}।', sol: `void main() {
  int n = 583;
  int first = n ~/ 100;          // 5
  int middle = (n ~/ 10) % 10;   // 58 % 10 = 8
  int last = n % 10;             // 3
  print('$first $middle $last');
}` },
    { l: 'm', q: 'একটা 3 অঙ্কের সংখ্যার অঙ্কগুলোর যোগফল বের করো (583 → 16)।', sol: `void main() {
  int n = 583;
  int sum = n ~/ 100 + (n ~/ 10) % 10 + n % 10;
  print(sum); // 16
}` },
    { l: 'm', q: '3725 সেকেন্ড = কত ঘন্টা, মিনিট, সেকেন্ড? ({{1:2:5}})', sol: `void main() {
  int s = 3725;
  int h = s ~/ 3600;          // 1
  int m = (s % 3600) ~/ 60;   // 2
  int sec = s % 60;           // 5
  print('$h:$m:$sec');
}` },
    { l: 'h', q: '1878 টাকা ভাংতি দিতে কোন নোট কয়টা লাগবে? নোট: 1000, 500, 100, 50, 20, 10, 5, 2, 1। (if/loop ছাড়া)', hint: 'প্রতিবার {{~/}} দিয়ে নোটের সংখ্যা, {{%}} দিয়ে বাকি টাকা।', sol: `void main() {
  int t = 1878;
  print('1000: \${t ~/ 1000}'); t %= 1000;
  print('500: \${t ~/ 500}');   t %= 500;
  print('100: \${t ~/ 100}');   t %= 100;
  print('50: \${t ~/ 50}');     t %= 50;
  print('20: \${t ~/ 20}');     t %= 20;
  print('10: \${t ~/ 10}');     t %= 10;
  print('5: \${t ~/ 5}');       t %= 5;
  print('2: \${t ~/ 2}');       t %= 2;
  print('1: $t');
}` },
    { l: 'h', q: 'একটা সাল লিপ ইয়ার কিনা, if ছাড়া শুধু একটা bool expression দিয়ে বের করো। নিয়ম: 4 দিয়ে বিভাজ্য এবং 100 দিয়ে না, অথবা 400 দিয়ে বিভাজ্য।', sol: `void main() {
  int y = 2024;
  bool leap = (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
  print(leap); // true
  // 1900 → false, 2000 → true দিয়েও পরীক্ষা করো
}` },
  ],
};

TOPICS['conversion'] = {
  short: 'Type বদল ও Input', title: 'Type Conversion আর ইউজার Input', days: 'দিন ৪',
  goal: "{{'25'}} আর {{25}} এর পার্থক্য বোঝা, এক type থেকে আরেক type এ বদলানো, আর কিবোর্ড থেকে input নেওয়া।",
  learn: [
    "ইউজার কিবোর্ড থেকে যা টাইপ করে, সব **String** হয়ে আসে। {{'25'}} একটা লেখা, {{25}} একটা সংখ্যা। হিসাব করতে হলে আগে convert করতে হয়।",
    { code: `void main() {
  String s = '25';
  int n = int.parse(s);              // String → int
  double d = double.parse('3.5');    // String → double
  String t = n.toString();           // int → String

  print(n + 5);      // 30  (সংখ্যার যোগ)
  print(s + '5');    // 255 (লেখা জোড়া!)

  print(3.7.round());   // 4  (কাছের পূর্ণসংখ্যা)
  print(3.7.toInt());   // 3  (দশমিক কেটে ফেলে)
  print(3.2.ceil());    // 4  (উপরের দিকে)
  print(3.7.floor());   // 3  (নিচের দিকে)
  print(5.toDouble());  // 5.0

  print(10 / 3);                       // 3.3333333333333335
  print((10 / 3).toStringAsFixed(2));  // 3.33
}` },
    { tip: "{{int.parse('abc')}} দিলে প্রোগ্রাম crash করে। নিরাপদ উপায়: {{int.tryParse('abc')}}, এটা crash না করে {{null}} দেয়। null কী, পরের টপিকে দেখবে।" },
    { h: 'কিবোর্ড থেকে input' },
    'নিজের কম্পিউটারে Dart চালালে {{stdin}} দিয়ে input নেওয়া যায়। **DartPad এ input নেওয়া যায় না**, তাই DartPad এ প্র্যাকটিসের সময় variable এ সরাসরি মান বসিয়ে নাও। কম্পিউটারে চালাতে terminal এ লেখো {{dart run main.dart}} (আগের টপিক Terminal এ দেখেছো)।',
    { code: `import 'dart:io';

void main() {
  stdout.write('তোমার নাম লেখো: ');    // write এ নতুন লাইন হয় না
  String name = stdin.readLineSync()!;

  stdout.write('তোমার বয়স লেখো: ');
  int age = int.parse(stdin.readLineSync()!);

  print('হ্যালো $name! ৫ বছর পর তোমার বয়স হবে \${age + 5}');
}` },
    { list: ["{{import 'dart:io';}} ফাইলের একদম উপরে লাগবে।", '{{stdin.readLineSync()}} ইউজারের একটা লাইন পড়ে, String হিসেবে দেয়।', 'শেষের {{!}} এর মানে পরের টপিকে বুঝবে। আপাতত লিখে দাও।'] },
  ],
  how: [
    "{{int.parse('25')}} লেখার প্রতিটা অক্ষর পড়ে সংখ্যা বানায়। অক্ষরের মধ্যে সংখ্যা ছাড়া কিছু থাকলে (যেমন {{'25a'}}) পারে না, Error দেয়।",
    "{{+}} এর কাজ নির্ভর করে type এর উপর: দুইটা সংখ্যা হলে যোগ, দুইটা String হলে জোড়া লাগানো।",
    '{{toStringAsFixed(2)}} দশমিকের পর ২ ঘর রাখে, আর ফল দেয় String হিসেবে।',
  ],
  quiz: [
    { q: 'Output কী?', code: "print('5' + '5');", opts: ['10', '55', "'5''5'", 'Error'], a: 1, why: 'দুইটাই String, তাই জোড়া লাগে।' },
    { q: 'Output কী?', code: "print(int.parse('5') + 5);", opts: ['10', '55', 'Error', '5.5'], a: 0, why: "{{int.parse('5')}} সংখ্যা 5 বানায়, 5 + 5 = 10।" },
    { q: 'Output কী?', code: 'print(7.9.toInt());', opts: ['8', '7', '7.9', '8.0'], a: 1, why: '{{toInt()}} গোল করে না, শুধু দশমিক কেটে ফেলে।' },
  ],
  probs: [
    { l: 'e', q: "{{'120'}} আর {{'80'}} দুইটা String। সংখ্যায় বদলে যোগফল প্রিন্ট করো।", sol: `void main() {
  String a = '120', b = '80';
  int sum = int.parse(a) + int.parse(b);
  print(sum); // 200
}` },
    { l: 'e', q: '{{22 / 7}} এর মান দশমিকের পর ২ ঘর পর্যন্ত দেখাও।', sol: `void main() {
  print((22 / 7).toStringAsFixed(2)); // 3.14
}` },
    { l: 'e', q: '{{4.5}} আর {{-4.5}} এর {{round()}}, {{toInt()}}, {{ceil()}}, {{floor()}} প্রিন্ট করে পার্থক্য লিখে রাখো।', sol: `void main() {
  print('\${4.5.round()} \${4.5.toInt()} \${4.5.ceil()} \${4.5.floor()}');
  // 5 4 5 4
  print('\${(-4.5).round()} \${(-4.5).toInt()} \${(-4.5).ceil()} \${(-4.5).floor()}');
  // -5 -4 -4 -5
}` },
    { l: 'm', q: '(কম্পিউটারে চালাও) ইউজারের নাম আর জন্মসাল নিয়ে তার বয়স বলো।', sol: `import 'dart:io';

void main() {
  stdout.write('নাম: ');
  String name = stdin.readLineSync()!;
  stdout.write('জন্মসাল: ');
  int year = int.parse(stdin.readLineSync()!);
  int age = DateTime.now().year - year;
  print('$name, তোমার বয়স প্রায় $age বছর');
}` },
    { l: 'm', q: '(কম্পিউটারে চালাও) ইউজারের কাছ থেকে তিনটা নম্বর নিয়ে গড় দেখাও, দশমিকের পর ২ ঘর।', sol: `import 'dart:io';

void main() {
  stdout.write('প্রথম: ');
  double a = double.parse(stdin.readLineSync()!);
  stdout.write('দ্বিতীয়: ');
  double b = double.parse(stdin.readLineSync()!);
  stdout.write('তৃতীয়: ');
  double c = double.parse(stdin.readLineSync()!);
  print('গড়: \${((a + b + c) / 3).toStringAsFixed(2)}');
}` },
    { l: 'm', q: "{{int.tryParse('abc')}} আর {{int.tryParse('42')}} প্রিন্ট করে দেখো কী আসে।", sol: `void main() {
  print(int.tryParse('abc')); // null
  print(int.tryParse('42'));  // 42
}` },
    { l: 'h', q: "String {{'1234'}} থেকে অঙ্কগুলোর যোগফল বের করো (loop ছাড়া)।", hint: "{{s[0]}} হলো {{'1'}}, সেটাকে {{int.parse}} করো।", sol: `void main() {
  String s = '1234';
  int sum = int.parse(s[0]) + int.parse(s[1]) + int.parse(s[2]) + int.parse(s[3]);
  print(sum); // 10
}` },
    { l: 'h', q: "সময় {{'2:45'}} (ঘন্টা:মিনিট) থেকে মোট মিনিট বের করো।", hint: "{{split(':')}} একটা list দেয়: {{['2', '45']}}। list পরে বিস্তারিত শিখবে, আপাতত {{[0]}} আর {{[1]}} দিয়ে ধরো।", sol: `void main() {
  String time = '2:45';
  var parts = time.split(':');
  int h = int.parse(parts[0]);
  int m = int.parse(parts[1]);
  print(h * 60 + m); // 165
}` },
  ],
};

TOPICS['null-safety'] = {
  short: 'Null Safety', title: 'Null Safety: ? ! ?? আর late', days: 'দিন ৫–৭',
  goal: '"মান নেই" অবস্থা (null) নিরাপদে সামলানো, যাতে প্রোগ্রাম হঠাৎ crash না করে।',
  learn: [
    '{{null}} মানে **"কোনো মান নেই"**, খালি বাক্স। Dart এ সাধারণ variable এ null রাখা যায় না। এতে অনেক ভুল কোড চালানোর আগেই ধরা পড়ে।',
    { boxes: [['name', 'String', "'Rafi'"], ['nickname', 'String?', 'null'], ['score', 'int?', '42']], cap: 'type এর পরে ? দিলে বাক্সটা খালিও থাকতে পারে' },
    { code: `void main() {
  // String name = null;   // Error! সাধারণ String এ null চলে না
  String? nickname;        // ? দিলে null রাখা যায়, শুরুতে null
  print(nickname);         // null

  nickname = 'Rafu';
  print(nickname.length);  // 4

  String? city;
  print(city ?? 'অজানা');   // city null, তাই 'অজানা'

  city ??= 'Dhaka';        // null থাকলে তবেই মান বসাও
  city ??= 'Khulna';       // এখন আর null না, তাই কিছু হবে না
  print(city);             // Dhaka

  String? word;
  print(word?.length);     // null, crash করবে না
}` },
    { table: [['চিহ্ন', 'নাম', 'মানে'], ['{{Type?}}', 'nullable', 'এই বাক্স খালি (null) থাকতে পারে'], ['{{a ?? b}}', 'if-null', 'a null হলে b নাও, না হলে a'], ['{{a ??= b}}', 'null-assign', 'a null হলে তবেই a তে b রাখো'], ['{{a?.x}}', 'null-aware', 'a null হলে null দাও, না হলে a.x'], ['{{a!}}', 'null assertion', '"আমি নিশ্চিত a null না" (ভুল হলে crash)']] },
    { warn: '{{!}} দিয়ে বলছো "আমি নিশ্চিত"। যদি আসলে null হয়, প্রোগ্রাম সাথে সাথে crash করবে। তাই {{!}} কম ব্যবহার করো, {{??}} বেশি।' },
    { h: 'late: পরে মান দেবো' },
    { code: `late String message;

void main() {
  message = 'পরে মান দিলাম';  // ব্যবহারের আগে দিলেই হলো
  print(message);
}` },
  ],
  how: [
    '{{String?}} লিখলে Dart জানে এই বাক্স খালি থাকতে পারে, তাই {{.length}} এর মতো জিনিস সরাসরি ব্যবহার করতে দেয় না, আগে চেক করতে বলে।',
    '{{??}} বাম দিকটা দেখে: মান থাকলে সেটা নেয়, null হলে ডান দিকেরটা নেয়।',
    "{{int.tryParse(s) ?? 0}} খুব কাজের জোড়া: সংখ্যা হলে সংখ্যা, না হলে 0।",
  ],
  quiz: [
    { q: 'Output কী?', code: `int? a;
print(a ?? 5);`, opts: ['null', '5', '0', 'Error'], a: 1, why: 'a null, তাই {{??}} এর ডান দিকের 5।' },
    { q: 'Output কী?', code: `int? b = 3;
b ??= 10;
print(b);`, opts: ['3', '10', '13', 'null'], a: 0, why: 'b null না (3), তাই {{??=}} কিছুই করে না।' },
    { q: 'Output কী?', code: `String? s;
print(s?.length);`, opts: ['0', 'null', 'Error', '1'], a: 1, why: 's null, তাই {{?.}} পুরো জিনিসটাকে null বানিয়ে দেয়, crash না করে।' },
  ],
  probs: [
    { l: 'e', q: "{{String? middleName}} (null)। প্রিন্ট করো, null হলে যেন {{'নেই'}} দেখায়।", sol: `void main() {
  String? middleName;
  print(middleName ?? 'নেই');
}` },
    { l: 'e', q: '{{int? score}} বানাও। {{??=}} দিয়ে 0 বসাও, তারপর 10 যোগ করে প্রিন্ট করো।', sol: `void main() {
  int? score;
  score ??= 0;
  score += 10;
  print(score); // 10
}` },
    { l: 'e', q: 'কোন লাইনগুলো Error দেবে, আর কেন?', code: `int a = null;
int? b = null;
String? c;
double d;
print(d);`, sol: `// int a = null;  → Error: int এ null চলে না
// int? b = null; → ঠিক
// String? c;     → ঠিক (শুরুতে null)
// double d; print(d); → Error: মান না দিয়ে ব্যবহার করা যায় না` },
    { l: 'm', q: '{{double? discount}} (null হতে পারে)। জিনিসের দাম 500। discount null হলে 0 ধরে আসল দাম বের করো।', sol: `void main() {
  double? discount;
  double price = 500 - (discount ?? 0);
  print(price); // 500.0
  discount = 50;
  print(500 - (discount ?? 0)); // 450.0
}` },
    { l: 'm', q: "{{'12a'}} কে নিরাপদে int বানাও। না পারলে 0 হবে।", sol: `void main() {
  int n = int.tryParse('12a') ?? 0;
  print(n); // 0
}` },
    { l: 'm', q: 'একটা nullable String এর length বের করো, null হলে 0।', hint: '{{?.}} আর {{??}} একসাথে।', sol: `void main() {
  String? s;
  print(s?.length ?? 0); // 0
  s = 'Dart';
  print(s?.length ?? 0); // 4
}` },
    { l: 'h', q: 'একটা {{late}} variable মান না দিয়েই প্রিন্ট করে দেখো কী Error আসে। তারপর ঠিক করো।', sol: `late int value;

void main() {
  // print(value); // LateInitializationError: Field 'value' has not been initialized.
  value = 7;
  print(value);
}` },
  ],
};

CARDS.push(
  { w: 1, f: 'স্ক্রিনে Hello দেখাও', b: "print('Hello');" },
  { w: 1, f: 'প্রোগ্রামের শুরুর function', b: 'void main() {\n  // কোড এখানে\n}' },
  { w: 1, f: 'এক লাইনের comment', b: '// এটা comment' },
  { w: 1, f: 'পূর্ণসংখ্যা, দশমিক, লেখা, হ্যাঁ/না এর type', b: 'int, double, String, bool' },
  { w: 1, f: 'যে মান আর বদলাবে না (চলার সময় ঠিক হয়)', b: 'final x = 10;' },
  { w: 1, f: 'লেখার মধ্যে variable বসাও', b: "'নাম: $name'\n'যোগফল: ${a + b}'" },
  { w: 1, f: 'String এর অক্ষর সংখ্যা', b: 's.length' },
  { w: 1, f: 'String এর একটা অংশ কাটো', b: 's.substring(start, end) // end বাদ' },
  { w: 2, f: 'পূর্ণ ভাগফল আর ভাগশেষ', b: 'a ~/ b   // ভাগফল\na % b    // ভাগশেষ' },
  { w: 2, f: 'n জোড় কিনা', b: 'n % 2 == 0' },
  { w: 2, f: 'এবং, অথবা, উল্টো', b: '&&   ||   !' },
  { w: 2, f: 'String থেকে int', b: "int.parse('25')\nint.tryParse('ab') // null" },
  { w: 2, f: 'দশমিকের পর ২ ঘর', b: 'x.toStringAsFixed(2)' },
  { w: 2, f: 'কিবোর্ড থেকে এক লাইন পড়ো', b: "import 'dart:io';\nString s = stdin.readLineSync()!;" },
  { w: 2, f: 'null হলে অন্য মান নাও', b: "name ?? 'অজানা'" },
  { w: 2, f: 'null হতে পারে এমন int', b: 'int? score;' },
);
