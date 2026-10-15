// সপ্তাহ ৫, ৬, ৭

TRACES.func = {
  title: 'function ডাকলে কী হয়',
  code: ['int square(int x) {', '  int result = x * x;', '  return result;', '}', '', 'void main() {', '  int a = square(4);', '  print(a);', '}'],
  steps: [
    { l: 5, n: 'প্রোগ্রাম সবসময় {{main}} থেকে শুরু হয়, উপরের function টা এখনো চলেনি, শুধু লেখা আছে।' },
    { l: 6, n: '{{square(4)}} ডাকা হলো। main এখানে **অপেক্ষা করবে**, চলে যাবো square এর ভেতরে।' },
    { l: 0, v: { x: 4 }, n: 'parameter {{x}} এর বাক্সে argument 4 বসলো।' },
    { l: 1, v: { result: 16 }, n: '{{4 * 4}} = 16' },
    { l: 2, n: '{{return result}}: 16 নিয়ে ফেরত যাও যেখান থেকে ডাকা হয়েছিল।' },
    { l: 6, v: { x: null, result: null, a: 16 }, n: 'main এ ফিরে এলাম। {{square(4)}} এর জায়গায় 16 বসলো, a = 16। square এর x আর result মুছে গেছে।' },
    { l: 7, p: '16', n: 'প্রিন্ট।' },
  ],
};

TOPICS['functions-basic'] = {
  short: 'Function এর ভিত্তি', title: 'Function: কাজের প্যাকেট', days: 'দিন ১–২',
  goal: 'নিজের function বানানো, parameter দিয়ে তথ্য পাঠানো, return দিয়ে ফল ফেরত আনা।',
  learn: [
    'Function হলো **নাম দেওয়া একটা কাজের প্যাকেট**। একবার লিখে যতবার খুশি ডাকা যায়। যেমন চা বানানোর রেসিপি: উপকরণ দাও (input), চা পাও (output)। প্রতিবার পুরো রেসিপি নতুন করে লিখতে হয় না।',
    { widget: 'funcMachine' },
    { anat: [['int', 'return type: কী ফেরত দেবে'], ['add', 'function এর নাম'], ['(int a, int b)', 'parameter: কী কী নেবে'], ['{ return a + b; }', 'body: কাজ আর ফেরত']] },
    { code: `int add(int a, int b) {
  return a + b;
}

void greet(String name) {   // void = কিছু ফেরত দেয় না
  print('হ্যালো, $name!');
}

void main() {
  int result = add(3, 4);   // 3 আর 4 হলো argument
  print(result);            // 7
  greet('Rafi');
  greet('Mitu');
  print(add(10, add(1, 2))); // ভেতরেরটা আগে: add(10, 3) = 13
}`, out: '7\nহ্যালো, Rafi!\nহ্যালো, Mitu!\n13' },
    { table: [['শব্দ', 'মানে'], ['**parameter**', 'function বানানোর সময় ( ) এর ভেতরের নাম: {{a}}, {{b}}'], ['**argument**', 'ডাকার সময় যে মান পাঠাই: {{3}}, {{4}}'], ['**return**', 'ফল নিয়ে ফেরত যাও, function এখানেই শেষ'], ['**void**', 'এই function কিছু ফেরত দেয় না, শুধু কাজ করে']] },
    { h: 'print আর return এর পার্থক্য (খুব গুরুত্বপূর্ণ)' },
    { code: `void printSum(int a, int b) {
  print(a + b);   // শুধু দেখায়, ফল হারিয়ে যায়
}

int getSum(int a, int b) {
  return a + b;   // ফল ফেরত দেয়, পরে ব্যবহার করা যায়
}

void main() {
  printSum(2, 3);            // 5 দেখাবে
  int x = getSum(2, 3);      // x = 5, কিছু দেখাবে না
  print(x * 10);             // 50
  // int y = printSum(2, 3); // Error! printSum কিছু ফেরত দেয় না
}` },
    { tip: 'ভালো function সাধারণত **return করে**, print করে না। কারণ return করলে ফল দিয়ে আরো কাজ করা যায়। print করার কাজ main এর।' },
    { h: 'Scope: কোন variable কোথায় দেখা যায়' },
    { code: `int counter = 0;   // বাইরের (global): সবাই দেখে

void addOne() {
  int temp = 5;    // ভেতরের (local): শুধু addOne এর ভেতরে
  counter++;
}

void main() {
  addOne();
  print(counter);  // 1
  // print(temp);  // Error! temp এখানে নেই
}` },
  ],
  how: [
    'function লেখা মানে শুধু রেসিপি লিখে রাখা। **ডাকার (call) আগে কিছুই চলে না।**',
    'ডাকলে main সেখানে থেমে থাকে, argument গুলো parameter এর বাক্সে বসে, function এর body চলে।',
    '{{return}} পেলে ফল নিয়ে main এ ফেরত আসে, ঠিক যেখানে ডাকা হয়েছিল। function এর ভেতরের variable গুলো মুছে যায়।',
    '{{return}} এর পরের লাইন আর চলে না।',
  ],
  traces: ['func'],
  quiz: [
    { q: 'Output কী?', code: `int f(int n) {
  return n * 2;
  print('হ্যালো');
}
void main() {
  print(f(5));
}`, opts: ['10', 'হ্যালো\n10', '10\nহ্যালো', 'Error'], a: 0, why: 'return এর পরে function শেষ, হ্যালো কখনো চলে না।' },
    { q: 'Output কী?', code: `int twice(int x) => x * 2;
void main() {
  print(twice(twice(3)));
}`, opts: ['6', '12', '9', '3'], a: 1, why: 'ভেতরেরটা আগে: twice(3) = 6, তারপর twice(6) = 12।' },
    { q: 'কোন লাইন Error দেবে?', code: `void hello() {
  String msg = 'Hi';
  print(msg);
}
void main() {
  hello();
  print(msg);
}`, opts: ['hello();', 'print(msg); (main এ)', "String msg = 'Hi';", 'কোনোটাই না'], a: 1, why: '{{msg}} hello এর ভেতরের local variable, main থেকে দেখা যায় না।' },
  ],
  probs: [
    { l: 'e', q: '{{sayHello()}} নামে একটা function বানাও যা "আসসালামু আলাইকুম" প্রিন্ট করে। main থেকে ৩ বার ডাকো।', sol: `void sayHello() {
  print('আসসালামু আলাইকুম');
}

void main() {
  sayHello();
  sayHello();
  sayHello();
}` },
    { l: 'e', q: '{{square(n)}} function বানাও যা n এর বর্গ return করে।', sol: `int square(int n) {
  return n * n;
}

void main() {
  print(square(7)); // 49
}` },
    { l: 'e', q: '{{isEven(n)}} বানাও যা {{bool}} return করে।', sol: `bool isEven(int n) {
  return n % 2 == 0;
}

void main() {
  print(isEven(10)); // true
  print(isEven(7));  // false
}` },
    { l: 'e', q: '{{maxOf(a, b)}} বানাও যা দুইটার বড়টা return করে।', sol: `int maxOf(int a, int b) {
  if (a > b) {
    return a;
  }
  return b;
}

void main() {
  print(maxOf(4, 9)); // 9
}` },
    { l: 'e', q: '{{toFahrenheit(c)}} বানাও। তারপর 0, 37, 100 এর জন্য ডাকো।', sol: `double toFahrenheit(double c) {
  return c * 9 / 5 + 32;
}

void main() {
  print(toFahrenheit(0));   // 32.0
  print(toFahrenheit(37));  // 98.6
  print(toFahrenheit(100)); // 212.0
}` },
    { l: 'm', q: '{{circleArea(r)}} বানাও। তারপর loop দিয়ে r = 1 থেকে 5 এর ক্ষেত্রফল দেখাও (২ দশমিক)।', sol: `double circleArea(double r) {
  return 3.1416 * r * r;
}

void main() {
  for (int r = 1; r <= 5; r++) {
    print('r = $r: \${circleArea(r.toDouble()).toStringAsFixed(2)}');
  }
}` },
    { l: 'm', q: '{{isPrime(n)}} function বানাও। তারপর এটা ব্যবহার করে 1–50 এর সব মৌলিক সংখ্যা প্রিন্ট করো।', note: 'দেখো main কত সহজ হয়ে গেল! function দিয়ে বড় সমস্যা ছোট টুকরো হয়।', sol: `bool isPrime(int n) {
  if (n < 2) return false;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

void main() {
  for (int i = 1; i <= 50; i++) {
    if (isPrime(i)) print(i);
  }
}` },
    { l: 'm', q: '{{factorial(n)}} বানাও (loop দিয়ে)। 1 থেকে 10 এর factorial প্রিন্ট করো।', sol: `int factorial(int n) {
  int f = 1;
  for (int i = 2; i <= n; i++) {
    f *= i;
  }
  return f;
}

void main() {
  for (int i = 1; i <= 10; i++) {
    print('$i! = \${factorial(i)}');
  }
}` },
    { l: 'm', q: '{{sumOfDigits(n)}} বানাও।', sol: `int sumOfDigits(int n) {
  int s = 0;
  while (n > 0) {
    s += n % 10;
    n ~/= 10;
  }
  return s;
}

void main() {
  print(sumOfDigits(9875)); // 29
}` },
    { l: 'm', q: '{{countVowels(String s)}} বানাও যা একটা ইংরেজি লেখায় স্বরবর্ণ গোনে।', sol: `int countVowels(String s) {
  int c = 0;
  for (int i = 0; i < s.length; i++) {
    if ('aeiouAEIOU'.contains(s[i])) c++;
  }
  return c;
}

void main() {
  print(countVowels('Programming in Dart')); // 5
}` },
    { l: 'h', q: '{{isPalindrome(String s)}} বানাও (madam, level → true)।', hint: 'দুই মাথা থেকে মেলাও: {{s[i]}} আর {{s[s.length - 1 - i]}}। অর্ধেক পর্যন্ত গেলেই হবে।', sol: `bool isPalindrome(String s) {
  for (int i = 0; i < s.length ~/ 2; i++) {
    if (s[i] != s[s.length - 1 - i]) return false;
  }
  return true;
}

void main() {
  print(isPalindrome('madam')); // true
  print(isPalindrome('dart'));  // false
}` },
    { l: 'h', q: 'ছোট ছোট function দিয়ে রেজাল্ট কার্ড: {{total(a, b, c)}}, {{average(...)}}, {{grade(avg)}}, আর {{printCard(name, a, b, c)}} যা বাকিগুলো ব্যবহার করে।', sol: `int total(int a, int b, int c) => a + b + c;

double average(int a, int b, int c) => total(a, b, c) / 3;

String grade(double avg) {
  if (avg >= 80) return 'A+';
  if (avg >= 70) return 'A';
  if (avg >= 60) return 'A-';
  if (avg >= 50) return 'B';
  if (avg >= 33) return 'C';
  return 'F';
}

void printCard(String name, int a, int b, int c) {
  double avg = average(a, b, c);
  print('নাম: $name');
  print('মোট: \${total(a, b, c)}');
  print('গড়: \${avg.toStringAsFixed(1)}');
  print('গ্রেড: \${grade(avg)}');
}

void main() {
  printCard('Rafi', 78, 85, 69);
}` },
  ],
};

TOPICS['parameters'] = {
  short: 'Parameter এর ধরন', title: 'Parameter: positional, optional, named, required, default', days: 'দিন ৩–৪',
  goal: 'function এ মান পাঠানোর সব উপায় চেনা: কখন ক্রম লাগে, কখন নাম লাগে, কখন বাদ দেওয়া যায়।',
  learn: [
    'Dart এ parameter কয়েক রকম। Flutter এ সবচেয়ে বেশি লাগে **named parameter**, তাই এটা ভালো করে শেখো।',
    { table: [['ধরন', 'লেখার নিয়ম', 'ডাকার নিয়ম', 'কখন'], ['সাধারণ (positional)', '{{f(int a, int b)}}', '{{f(1, 2)}}', 'অল্প, অবশ্যই লাগবে এমন মান'], ['ঐচ্ছিক positional', '{{f(int a, [int b = 0])}}', '{{f(1)}} বা {{f(1, 2)}}', 'শেষের দিকের মান বাদ দেওয়া যাবে'], ['named', '{{ f({int a = 0}) }}', '{{f(a: 1)}}', 'অনেক parameter, ক্রম মনে রাখা কঠিন'], ['required named', '{{ f({required int a}) }}', '{{f(a: 1)}} (বাদ দিলে Error)', 'নাম দিয়ে পাঠাবে কিন্তু দিতেই হবে']] },
    { h: '১. সাধারণ (positional): ক্রম গুরুত্বপূর্ণ' },
    { code: `int sub(int a, int b) => a - b;

void main() {
  print(sub(10, 3));  // 7
  print(sub(3, 10));  // -7  (ক্রম বদলালে ফল বদলায়)
}` },
    { h: '২. ঐচ্ছিক positional: [ ]' },
    { code: `String greet(String name, [String? title]) {
  if (title == null) return 'হ্যালো $name';
  return 'হ্যালো $title $name';
}

int power(int base, [int exp = 2]) {   // default মান 2
  int r = 1;
  for (int i = 0; i < exp; i++) r *= base;
  return r;
}

void main() {
  print(greet('Rafi'));          // হ্যালো Rafi
  print(greet('Karim', 'Dr.'));  // হ্যালো Dr. Karim
  print(power(5));               // 25  (exp = 2 ধরে নিল)
  print(power(2, 10));           // 1024
}` },
    { h: '৩. named: { } আর ডাকার সময় নাম লিখতে হয়' },
    { code: `void makeTea({int sugar = 1, bool milk = true}) {
  print('চিনি: $sugar চামচ, দুধ: \${milk ? 'হ্যাঁ' : 'না'}');
}

void main() {
  makeTea();                       // চিনি: 1 চামচ, দুধ: হ্যাঁ
  makeTea(sugar: 2);               // চিনি: 2 চামচ, দুধ: হ্যাঁ
  makeTea(milk: false, sugar: 0);  // ক্রম যেকোনো!
}` },
    'named এর সুবিধা: {{makeTea(false, 0)}} দেখে বোঝা যায় না কোনটা কী। {{makeTea(milk: false, sugar: 0)}} পড়লেই বোঝা যায়।',
    { h: '৪. required named: নাম দিয়ে, কিন্তু দিতেই হবে' },
    { code: `void register({required String name, required int age, String city = 'Dhaka'}) {
  print('$name, $age বছর, $city');
}

void main() {
  register(name: 'Rafi', age: 14);                   // Rafi, 14 বছর, Dhaka
  register(age: 12, name: 'Mitu', city: 'Sylhet');   // Mitu, 12 বছর, Sylhet
  // register(name: 'Tanim');  // Error: age দেওয়া হয়নি
}` },
    { h: 'মিশিয়ে ব্যবহার' },
    { code: `// প্রথমে সাধারণ, তারপর named: চলে
double price(double base, {int qty = 1, double discount = 0}) {
  return base * qty - discount;
}

void main() {
  print(price(100));                         // 100.0
  print(price(100, qty: 3));                 // 300.0
  print(price(100, qty: 3, discount: 50));   // 250.0
}` },
    { warn: 'একই function এ {{[ ]}} আর {{ { } }} দুইটা একসাথে দেওয়া যায় না। আর nullable না হলে named/optional parameter এ default মান বা {{required}} দিতে হয়।' },
  ],
  how: [
    'positional: Dart argument গুলো ক্রম অনুযায়ী বসায়, প্রথমটা প্রথম parameter এ, দ্বিতীয়টা দ্বিতীয়তে।',
    'named: Dart নাম মিলিয়ে বসায়, তাই ক্রম যেকোনো।',
    'কোনো মান না পাঠালে default মান বসে। default না থাকলে (আর nullable হলে) null বসে।',
    '{{required}} থাকলে না পাঠালে কোড চালানোর আগেই Error।',
  ],
  quiz: [
    { q: 'Output কী?', code: `void f(int a, [int b = 5]) {
  print(a + b);
}
void main() {
  f(1);
}`, opts: ['1', '6', 'Error', 'null'], a: 1, why: 'b দেওয়া হয়নি, তাই default 5: 1 + 5 = 6।' },
    { q: 'Output কী?', code: `void f({int x = 2, int y = 3}) {
  print(x * y);
}
void main() {
  f(y: 10);
}`, opts: ['6', '20', '30', 'Error'], a: 1, why: 'x default 2, y = 10। 2 × 10 = 20।' },
    { q: 'কোনটা Error দেবে?', code: "void reg({required String name, int age = 0}) {}", opts: ["reg(name: 'A');", "reg(age: 5, name: 'A');", 'reg(age: 5);', "reg(name: 'A', age: 1);"], a: 2, why: 'name হলো required, দেওয়া হয়নি।' },
  ],
  probs: [
    { l: 'e', q: '{{introduce(String name, int age)}} বানাও যা "আমি রাফি, বয়স 14" প্রিন্ট করে। ক্রম উল্টে ডেকে দেখো কী Error আসে।', sol: `void introduce(String name, int age) {
  print('আমি $name, বয়স $age');
}

void main() {
  introduce('রাফি', 14);
  // introduce(14, 'রাফি'); // Error: type মেলে না
}` },
    { l: 'e', q: '{{power(int base, [int exp = 2])}} বানাও। {{power(4)}} আর {{power(2, 5)}} ডাকো।', sol: `int power(int base, [int exp = 2]) {
  int r = 1;
  for (int i = 0; i < exp; i++) r *= base;
  return r;
}

void main() {
  print(power(4));    // 16
  print(power(2, 5)); // 32
}` },
    { l: 'e', q: "{{greeting({String name = 'বন্ধু'})}} বানাও। নাম ছাড়া আর নাম দিয়ে দুইভাবে ডাকো।", sol: `void greeting({String name = 'বন্ধু'}) {
  print('কেমন আছো, $name?');
}

void main() {
  greeting();               // কেমন আছো, বন্ধু?
  greeting(name: 'Mitu');   // কেমন আছো, Mitu?
}` },
    { l: 'e', q: '{{rectArea({required double width, required double height})}} বানাও।', sol: `double rectArea({required double width, required double height}) {
  return width * height;
}

void main() {
  print(rectArea(height: 4, width: 6)); // 24.0
}` },
    { l: 'm', q: '{{total(double price, {int qty = 1, double discount = 0})}}: discount হলো শতাংশ (10 মানে 10%)। ৩ রকমভাবে ডাকো।', sol: `double total(double price, {int qty = 1, double discount = 0}) {
  double sum = price * qty;
  return sum - sum * discount / 100;
}

void main() {
  print(total(200));                          // 200.0
  print(total(200, qty: 3));                  // 600.0
  print(total(200, qty: 3, discount: 10));    // 540.0
}` },
    { l: 'm', q: "{{printLine([String ch = '-', int len = 20])}} বানাও যা একটা লাইন আঁকে। {{printLine()}}, {{printLine('*')}}, {{printLine('=', 5)}} ডাকো।", sol: `void printLine([String ch = '-', int len = 20]) {
  print(ch * len);
}

void main() {
  printLine();         // --------------------
  printLine('*');      // ********************
  printLine('=', 5);   // =====
}` },
    { l: 'm', q: "{{createProfile({required String name, String? bio})}}: bio না দিলে 'কোনো bio নেই' দেখাবে।", sol: `void createProfile({required String name, String? bio}) {
  print('নাম: $name');
  print('bio: \${bio ?? 'কোনো bio নেই'}');
}

void main() {
  createProfile(name: 'Rafi');
  createProfile(name: 'Mitu', bio: 'ছবি আঁকতে ভালোবাসি');
}` },
    { l: 'm', q: '{{sumAll(int a, int b, [int c = 0, int d = 0])}}: ২, ৩ বা ৪টা সংখ্যা যোগ করতে পারবে।', sol: `int sumAll(int a, int b, [int c = 0, int d = 0]) => a + b + c + d;

void main() {
  print(sumAll(1, 2));        // 3
  print(sumAll(1, 2, 3));     // 6
  print(sumAll(1, 2, 3, 4));  // 10
}` },
    { l: 'h', q: '{{bmi({required double weightKg, required double heightFeet})}}: ফুটকে মিটারে বদলে (1 ফুট = 0.3048 মি) BMI return করো।', sol: `double bmi({required double weightKg, required double heightFeet}) {
  double m = heightFeet * 0.3048;
  return weightKg / (m * m);
}

void main() {
  print(bmi(heightFeet: 5.5, weightKg: 60).toStringAsFixed(1)); // 21.3
}` },
    { l: 'h', q: "{{formatDate({required int d, required int m, int y = 2025, String sep = '/'})}}: দিন আর মাস দুই অঙ্কে দেখাবে (05/03/2025)।", hint: "{{'5'.padLeft(2, '0')}} = {{'05'}}", sol: `String formatDate({required int d, required int m, int y = 2025, String sep = '/'}) {
  String dd = d.toString().padLeft(2, '0');
  String mm = m.toString().padLeft(2, '0');
  return '$dd$sep$mm$sep$y';
}

void main() {
  print(formatDate(d: 5, m: 3));                       // 05/03/2025
  print(formatDate(m: 12, d: 16, y: 1971, sep: '-'));  // 16-12-1971
}` },
  ],
};

TOPICS['arrow-function'] = {
  short: 'Arrow ও ভাগ করে ভাবা', title: 'Arrow function (=>) আর সমস্যা ভাগ করা', days: 'দিন ৫',
  goal: 'এক লাইনের function ছোট করে লেখা, আর বড় সমস্যাকে ছোট ছোট function এ ভাগ করে ভাবা।',
  learn: [
    'function এর body যদি শুধু একটা মান return করে, তাহলে {{ { return ...; } }} না লিখে {{=> ...}} লেখা যায়।',
    { code: `// এই দুইটা হুবহু এক
int square(int x) {
  return x * x;
}
int square2(int x) => x * x;

bool isEven(int n) => n % 2 == 0;
String fullName(String f, String l) => '$f $l';
int maxOf(int a, int b) => a > b ? a : b;
void hello() => print('হ্যালো');

void main() {
  print(square2(6));          // 36
  print(isEven(3));           // false
  print(fullName('Abdur', 'Rahim'));
  print(maxOf(3, 8));         // 8
  hello();
}` },
    { warn: '{{=>}} এর পরে শুধু **একটা expression** (যার একটা মান হয়)। if-else statement, loop বা কয়েক লাইন চলবে না। দরকার হলে ternary {{? :}} ব্যবহার করো।' },
    { h: 'বড় সমস্যা, ছোট টুকরো' },
    'দুর্বল লজিকের সবচেয়ে বড় ওষুধ: পুরো সমস্যা একবারে না ভেবে **টুকরো করো**। প্রতিটা টুকরো একটা ছোট function, যেটা একটাই কাজ করে। তারপর টুকরোগুলো জোড়া দাও।',
    'যেমন "1 থেকে 100 এর মধ্যে যেসব সংখ্যার অঙ্কের যোগফল মৌলিক, সেগুলো প্রিন্ট করো" শুনতে কঠিন। কিন্তু ভাগ করলে:',
    { code: `int digitSum(int n) {           // টুকরো ১: অঙ্কের যোগফল
  int s = 0;
  while (n > 0) {
    s += n % 10;
    n ~/= 10;
  }
  return s;
}

bool isPrime(int n) {           // টুকরো ২: মৌলিক কিনা
  if (n < 2) return false;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

void main() {                   // জোড়া দেওয়া: খুবই সহজ
  for (int i = 1; i <= 100; i++) {
    if (isPrime(digitSum(i))) print(i);
  }
}` },
    { tip: 'প্রতিটা টুকরো আলাদা করে পরীক্ষা করো ({{print(digitSum(472))}})। ঠিক থাকলে তবেই জোড়া দাও। ভুল হলে খুঁজতে সহজ হয়।' },
  ],
  how: [
    '{{=> expr}} মানে "{{expr}} এর হিসাব করো, ফলটা return করো"।',
    'arrow function আর সাধারণ function এর মধ্যে কাজে কোনো পার্থক্য নেই, শুধু লেখা ছোট।',
    'function এর ভেতরে অন্য function ডাকা যায়। ফল ভেতর থেকে বাইরে আসে: {{isPrime(digitSum(23))}} → {{isPrime(5)}} → {{true}}।',
  ],
  quiz: [
    { q: 'Output কী?', code: `int triple(int x) => x * 3;
void main() {
  print(triple(triple(2)));
}`, opts: ['6', '9', '18', '12'], a: 2, why: 'triple(2) = 6, triple(6) = 18।' },
    { q: 'কোনটা ভুল arrow function?', opts: ['int f(int x) => x + 1;', "bool g(int x) => x > 0;", 'int h(int x) => if (x > 0) x else 0;', "String s() => 'hi';"], a: 2, why: '{{=>}} এর পরে if statement চলে না। লিখতে হবে {{x > 0 ? x : 0}}।' },
  ],
  probs: [
    { l: 'e', q: 'arrow দিয়ে {{square}} আর {{cube}} function বানাও।', sol: `int square(int x) => x * x;
int cube(int x) => x * x * x;

void main() {
  print(square(4)); // 16
  print(cube(3));   // 27
}` },
    { l: 'e', q: 'arrow দিয়ে {{isPositive(n)}} আর {{isEven(n)}} বানাও।', sol: `bool isPositive(int n) => n > 0;
bool isEven(int n) => n % 2 == 0;

void main() {
  print(isPositive(-3)); // false
  print(isEven(8));      // true
}` },
    { l: 'e', q: 'arrow দিয়ে {{minOf(a, b)}} বানাও (ternary লাগবে)।', sol: `int minOf(int a, int b) => a < b ? a : b;

void main() {
  print(minOf(7, 2)); // 2
}` },
    { l: 'm', q: 'arrow দিয়ে {{cToF}} আর {{fToC}} বানাও। 25 কে F এ নিয়ে আবার C তে আনলে 25 ফেরত আসে কিনা দেখো।', sol: `double cToF(double c) => c * 9 / 5 + 32;
double fToC(double f) => (f - 32) * 5 / 9;

void main() {
  double f = cToF(25);
  print(f);         // 77.0
  print(fToC(f));   // 25.0
}` },
    { l: 'm', q: 'arrow দিয়ে {{isLeap(year)}} বানাও।', sol: `bool isLeap(int y) => (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;

void main() {
  print(isLeap(2024)); // true
  print(isLeap(1900)); // false
}` },
    { l: 'm', q: "arrow দিয়ে {{isVowel(String ch)}} বানাও। তারপর একটা শব্দের স্বরবর্ণগুলো প্রিন্ট করো।", sol: `bool isVowel(String ch) => 'aeiouAEIOU'.contains(ch);

void main() {
  String w = 'Education';
  for (int i = 0; i < w.length; i++) {
    if (isVowel(w[i])) print(w[i]);
  }
}` },
    { l: 'h', q: 'টুকরো করে ভাবো: 1–500 এর মধ্যে যেসব সংখ্যা palindrome এবং মৌলিক, সেগুলো প্রিন্ট করো। {{reverse(n)}}, {{isPalindrome(n)}}, {{isPrime(n)}} আলাদা function।', sol: `int reverse(int n) {
  int r = 0;
  while (n > 0) {
    r = r * 10 + n % 10;
    n ~/= 10;
  }
  return r;
}

bool isPalindrome(int n) => n == reverse(n);

bool isPrime(int n) {
  if (n < 2) return false;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

void main() {
  for (int i = 1; i <= 500; i++) {
    if (isPalindrome(i) && isPrime(i)) print(i);
  }
}` },
    { l: 'h', q: 'টুকরো করে ভাবো: একটা সংখ্যার "digital root" বের করো। অঙ্কগুলো যোগ করতে থাকো যতক্ষণ না এক অঙ্ক থাকে। 9875 → 29 → 11 → 2।', sol: `int digitSum(int n) {
  int s = 0;
  while (n > 0) {
    s += n % 10;
    n ~/= 10;
  }
  return s;
}

int digitalRoot(int n) {
  while (n >= 10) {
    n = digitSum(n);
  }
  return n;
}

void main() {
  print(digitalRoot(9875)); // 2
}` },
  ],
};

TOPICS['anonymous'] = {
  short: 'Anonymous function', title: 'Anonymous function: নাম ছাড়া function', days: 'দিন ১–২',
  goal: 'function কেও একটা মান হিসেবে দেখা: variable এ রাখা, অন্য function কে পাঠানো।',
  learn: [
    'Dart এ function ও একটা **মান**, ঠিক সংখ্যা বা String এর মতো। তাই function কে variable এ রাখা যায়, অন্য function কে পাঠানো যায়। নাম ছাড়া যে function লিখি তাকে বলে **anonymous function** (বা lambda)।',
    { anat: [['(int a, int b)', 'parameter, নাম নেই'], ['{ return a + b; }', 'body'], ['বা', ''], ['(a, b) => a + b', 'arrow রূপে']], cap: 'নাম ছাড়া function এর গঠন' },
    { code: `void main() {
  // নাম ছাড়া function, variable এ রাখলাম
  var add = (int a, int b) {
    return a + b;
  };
  var multiply = (int a, int b) => a * b;

  print(add(2, 3));       // 5
  print(multiply(2, 3));  // 6

  // type সহ লেখা: "int নেয়, int দেয়"
  int Function(int) doubleIt = (x) => x * 2;
  print(doubleIt(7));     // 14
}` },
    { h: 'অন্য function কে পাঠানো' },
    { code: `int calculate(int a, int b, int Function(int, int) op) {
  return op(a, b);   // যে function পাঠানো হলো, সেটা চালাও
}

void main() {
  print(calculate(10, 5, (x, y) => x + y));  // 15
  print(calculate(10, 5, (x, y) => x - y));  // 5
  print(calculate(10, 5, (x, y) => x * y));  // 50
}` },
    'এক {{calculate}} দিয়ে যোগ, বিয়োগ, গুণ সব হচ্ছে, কারণ **কী কাজ করবে সেটা বাইরে থেকে পাঠাচ্ছি**।',
    { h: 'সবচেয়ে বেশি দেখা যাবে: forEach' },
    { code: `void main() {
  var fruits = ['আম', 'জাম', 'কাঁঠাল'];
  fruits.forEach((f) {
    print('আমার প্রিয় ফল $f');
  });
  fruits.forEach((f) => print(f.length));
}` },
    { h: 'typedef: function type এর ডাকনাম' },
    { code: `typedef MathOp = int Function(int, int);

int apply(int a, int b, MathOp op) => op(a, b);

void main() {
  MathOp mod = (a, b) => a % b;
  print(apply(17, 5, mod)); // 2
}` },
    { tip: 'Flutter এ বোতাম চাপলে কী হবে সেটা এভাবেই দেওয়া হয়: {{onPressed: () { ... } }}। সেটা একটা anonymous function!' },
  ],
  how: [
    '{{var add = (a, b) => a + b;}} লিখলে add বাক্সে একটা **function** রাখা হয়, কোনো সংখ্যা না।',
    '{{add(2, 3)}} লিখলে বাক্সের function টা চলে।',
    '{{add}} (বন্ধনী ছাড়া) মানে function টা নিজে। {{add()}} (বন্ধনী সহ) মানে function চালাও।',
    '{{forEach}} list এর প্রতিটা জিনিস নিয়ে একবার করে তোমার পাঠানো function কে ডাকে।',
  ],
  quiz: [
    { q: 'Output কী?', code: `var f = (int x) => x + 1;
print(f(f(1)));`, opts: ['2', '3', '1', 'Error'], a: 1, why: 'f(1) = 2, f(2) = 3।' },
    { q: 'Hi দেখাতে কোনটা লিখবে?', code: "var g = () => 'Hi';", opts: ['print(g);', 'print(g());', "print('g');", 'g;'], a: 1, why: '{{g()}} চালালে Hi পাওয়া যায়। {{print(g)}} লিখলে function টার বর্ণনা দেখাবে (Closure: ...)।' },
  ],
  probs: [
    { l: 'e', q: 'একটা anonymous function variable {{greet}} বানাও যা নাম নিয়ে "হ্যালো, নাম!" প্রিন্ট করে।', sol: `void main() {
  var greet = (String name) {
    print('হ্যালো, $name!');
  };
  greet('Rafi');
  greet('Mitu');
}` },
    { l: 'e', q: '{{[3, 7, 2, 9]}} list এর প্রতিটা সংখ্যার দ্বিগুণ forEach দিয়ে প্রিন্ট করো।', sol: `void main() {
  var nums = [3, 7, 2, 9];
  nums.forEach((n) => print(n * 2));
}` },
    { l: 'e', q: '{{subtract}} আর {{divide}} দুইটা anonymous function variable বানিয়ে ব্যবহার করো।', sol: `void main() {
  var subtract = (int a, int b) => a - b;
  var divide = (int a, int b) => a / b;
  print(subtract(10, 4)); // 6
  print(divide(10, 4));   // 2.5
}` },
    { l: 'm', q: '{{calculate(a, b, op)}} বানাও। চার রকম anonymous function পাঠিয়ে +, -, *, ~/ করো।', sol: `int calculate(int a, int b, int Function(int, int) op) => op(a, b);

void main() {
  print(calculate(20, 6, (x, y) => x + y));   // 26
  print(calculate(20, 6, (x, y) => x - y));   // 14
  print(calculate(20, 6, (x, y) => x * y));   // 120
  print(calculate(20, 6, (x, y) => x ~/ y));  // 3
}` },
    { l: 'm', q: "{{typedef Validator = bool Function(String);}} বানাও। দুইটা validator: {{notEmpty}} আর {{longEnough}} (৬ অক্ষরের বেশি)। একটা password দুইটা দিয়েই পরীক্ষা করো।", sol: `typedef Validator = bool Function(String);

void main() {
  Validator notEmpty = (s) => s.isNotEmpty;
  Validator longEnough = (s) => s.length > 6;

  String pass = 'dart123';
  print(notEmpty(pass) && longEnough(pass)); // true
}` },
    { l: 'm', q: '{{applyTwice(f, x)}} বানাও যা {{f(f(x))}} return করে। {{(n) => n + 3}} আর {{(n) => n * n}} দিয়ে পরীক্ষা করো।', sol: `int applyTwice(int Function(int) f, int x) => f(f(x));

void main() {
  print(applyTwice((n) => n + 3, 10)); // 16
  print(applyTwice((n) => n * n, 3));  // 81
}` },
    { l: 'm', q: "একটা Map বানাও যেখানে চিহ্ন → function: {{'+': (a, b) => a + b}} ইত্যাদি। তারপর {{ops['*']!(6, 7)}} চালাও। (Map আগের সপ্তাহে শিখেছ)", sol: `void main() {
  Map<String, int Function(int, int)> ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  print(ops['*']!(6, 7)); // 42
  print(ops['-']!(6, 7)); // -1
}` },
    { l: 'h', q: 'function এর একটা list: {{[(x) => x + 1, (x) => x * 2, (x) => x * x]}}। 3 থেকে শুরু করে একটার পর একটা চালাও। ফল: ((3 + 1) × 2)² = 64।', sol: `void main() {
  List<int Function(int)> steps = [
    (x) => x + 1,
    (x) => x * 2,
    (x) => x * x,
  ];
  int value = 3;
  for (var f in steps) {
    value = f(value);
  }
  print(value); // 64
}` },
    { l: 'h', q: 'নিজের {{repeat(int n, void Function(int) action)}} বানাও যা 1 থেকে n পর্যন্ত প্রতিটা সংখ্যা নিয়ে action ডাকে। এটা দিয়ে 5 এর নামতা প্রিন্ট করো।', sol: `void repeat(int n, void Function(int) action) {
  for (int i = 1; i <= n; i++) {
    action(i);
  }
}

void main() {
  repeat(10, (i) => print('5 x $i = \${5 * i}'));
}` },
  ],
};

TOPICS['higher-order-closure'] = {
  short: 'Higher-order ও Closure', title: 'Higher-order function আর Closure', days: 'দিন ৩–৪',
  goal: 'function যে function ফেরত দেয়, আর function যে নিজের চারপাশের variable মনে রাখে, সেটা বোঝা।',
  learn: [
    '**Higher-order function**: যে function অন্য function নেয় (আগের টপিকে দেখেছ) অথবা function **ফেরত দেয়**।',
    '**Closure**: ভেতরের function তার জন্মস্থানের variable গুলো মনে রাখে, বাইরের function শেষ হয়ে গেলেও। যেন একটা ব্যাগ, ভেতরে নিজের জিনিস নিয়ে ঘোরে।',
    { code: `int Function() makeCounter() {
  int count = 0;          // এই বাক্সটা ভেতরের function মনে রাখবে
  return () {
    count++;
    return count;
  };
}

int Function(int) makeMultiplier(int m) {
  return (int x) => x * m;   // m মনে রাখে
}

void main() {
  var c1 = makeCounter();
  print(c1()); // 1
  print(c1()); // 2
  print(c1()); // 3

  var c2 = makeCounter();
  print(c2()); // 1  (c2 এর নিজের আলাদা count)

  var triple = makeMultiplier(3);
  var times10 = makeMultiplier(10);
  print(triple(5));   // 15
  print(times10(5));  // 50
}`, out: '1\n2\n3\n1\n15\n50' },
    { list: ['{{int Function()}} মানে "এমন function যা কিছু নেয় না, int দেয়"। makeCounter এমন একটা function ফেরত দেয়।', 'প্রতিবার {{makeCounter()}} ডাকলে নতুন একটা {{count}} বাক্স তৈরি হয়, নতুন ভেতরের function সেটা মনে রাখে।', 'তাই c1 আর c2 এর count আলাদা।'] },
    { tip: 'Closure একটু মাথা ঘোরানো জিনিস। খাতায় ছবি আঁকো: c1 এর পাশে একটা বাক্স count, c2 এর পাশে আরেকটা। প্রতিবার ডাকলে নিজের বাক্সে +1।' },
  ],
  how: [
    '{{makeCounter()}} চলে, {{count = 0}} বানায়, একটা function ফেরত দেয়, তারপর makeCounter শেষ।',
    'সাধারণত function শেষ হলে local variable মুছে যায়। কিন্তু ফেরত দেওয়া function টা count ব্যবহার করে, তাই Dart count কে মুছে না, function এর সাথে বেঁধে রাখে।',
    '{{c1()}} ডাকলে সেই বাঁধা count বাড়ে আর ফেরত আসে।',
  ],
  quiz: [
    { q: 'Output কী?', code: `int Function(int) adder(int n) => (x) => x + n;
void main() {
  var add5 = adder(5);
  print(add5(10));
}`, opts: ['5', '10', '15', 'Error'], a: 2, why: 'add5 মনে রাখে n = 5। add5(10) = 10 + 5।' },
    { q: 'শেষ লাইনের output কী?', code: `var a = makeCounter();
var b = makeCounter();
a(); a(); b();
print(a());`, opts: ['1', '2', '3', '4'], a: 2, why: 'a এর নিজের count: তিনবার ডাকা হলো, 3। b এর ডাক a কে প্রভাবিত করে না।' },
  ],
  probs: [
    { l: 'e', q: '{{makeAdder(n)}} বানাও যা এমন function দেয় যেটা যেকোনো সংখ্যায় n যোগ করে।', sol: `int Function(int) makeAdder(int n) => (x) => x + n;

void main() {
  var add2 = makeAdder(2);
  var add100 = makeAdder(100);
  print(add2(5));    // 7
  print(add100(5));  // 105
}` },
    { l: 'm', q: "{{makeGreeter(String greeting)}} বানাও। {{makeGreeter('শুভ সকাল')('Rafi')}} যেন \"শুভ সকাল, Rafi\" দেয়।", sol: `String Function(String) makeGreeter(String greeting) {
  return (name) => '$greeting, $name';
}

void main() {
  var morning = makeGreeter('শুভ সকাল');
  print(morning('Rafi'));
  print(makeGreeter('শুভ রাত্রি')('Mitu'));
}` },
    { l: 'm', q: '{{makeCounter({int step = 1})}} বানাও যা প্রতিবার step পরিমাণ বাড়ে।', sol: `int Function() makeCounter({int step = 1}) {
  int count = 0;
  return () {
    count += step;
    return count;
  };
}

void main() {
  var byFive = makeCounter(step: 5);
  print(byFive()); // 5
  print(byFive()); // 10
}` },
    { l: 'm', q: '{{compose(f, g)}} বানাও যা {{(x) => f(g(x))}} ফেরত দেয়।', sol: `int Function(int) compose(int Function(int) f, int Function(int) g) {
  return (x) => f(g(x));
}

void main() {
  var addOneThenDouble = compose((x) => x * 2, (x) => x + 1);
  print(addOneThenDouble(5)); // (5 + 1) * 2 = 12
}` },
    { l: 'm', q: '{{makeWallet(int start)}} বানাও যা একটা function দেয়: টাকা পাঠালে যোগ করে নতুন balance ফেরত দেয় (নেগেটিভ মানে খরচ)।', sol: `int Function(int) makeWallet(int start) {
  int balance = start;
  return (amount) {
    balance += amount;
    return balance;
  };
}

void main() {
  var wallet = makeWallet(500);
  print(wallet(200));   // 700
  print(wallet(-150));  // 550
}` },
    { l: 'h', q: 'নিজের {{myMap(List<int> list, int Function(int) f)}} বানাও যা প্রতিটা জিনিসে f চালিয়ে নতুন list দেয়। আর {{myWhere}} বানাও যা শর্ত মিললে রাখে।', sol: `List<int> myMap(List<int> list, int Function(int) f) {
  List<int> result = [];
  for (var x in list) {
    result.add(f(x));
  }
  return result;
}

List<int> myWhere(List<int> list, bool Function(int) test) {
  List<int> result = [];
  for (var x in list) {
    if (test(x)) result.add(x);
  }
  return result;
}

void main() {
  var nums = [1, 2, 3, 4, 5, 6];
  print(myMap(nums, (x) => x * x));        // [1, 4, 9, 16, 25, 36]
  print(myWhere(nums, (x) => x % 2 == 0)); // [2, 4, 6]
}` },
    { l: 'h', q: "{{makeSlowSquare()}} বানাও: ফেরত দেওয়া function প্রথমবার কোনো সংখ্যার বর্গ হিসাব করলে 'হিসাব করছি...' প্রিন্ট করবে, আর একটা Map এ মনে রাখবে। পরে একই সংখ্যা এলে প্রিন্ট ছাড়াই মনে রাখা মান দেবে।", sol: `int Function(int) makeSlowSquare() {
  Map<int, int> memory = {};
  return (n) {
    if (memory.containsKey(n)) return memory[n]!;
    print('হিসাব করছি $n...');
    int r = n * n;
    memory[n] = r;
    return r;
  };
}

void main() {
  var sq = makeSlowSquare();
  print(sq(9));  // হিসাব করছি 9... তারপর 81
  print(sq(9));  // সরাসরি 81
}` },
  ],
};

TRACES.fact = {
  title: 'recursion: fact(3)',
  code: ['int fact(int n) {', '  if (n == 1) return 1;', '  return n * fact(n - 1);', '}', '', 'void main() {', '  print(fact(3));', '}'],
  steps: [
    { l: 6, n: 'main থেকে {{fact(3)}} ডাকা হলো।' },
    { l: 0, v: { 'ডাকের স্তূপ': 'fact(3)', n: 3 }, n: 'fact এর ভেতর, n = 3।' },
    { l: 1, n: '{{3 == 1}}? না। base case না।' },
    { l: 2, n: '{{3 * fact(2)}} লাগবে। কিন্তু fact(2) জানি না! তাই fact(3) **অপেক্ষায় থাকলো**, fact(2) ডাকলাম।' },
    { l: 0, v: { 'ডাকের স্তূপ': 'fact(3) → fact(2)', n: 2 }, n: 'নতুন একটা fact চলছে, এর নিজের n = 2।' },
    { l: 1, n: '{{2 == 1}}? না।' },
    { l: 2, n: '{{2 * fact(1)}} লাগবে। fact(2) অপেক্ষায়, fact(1) ডাকলাম।' },
    { l: 0, v: { 'ডাকের স্তূপ': 'fact(3) → fact(2) → fact(1)', n: 1 }, n: 'n = 1।' },
    { l: 1, n: '{{1 == 1}}? **হ্যাঁ! base case।** আর কাউকে ডাকতে হবে না, 1 return।' },
    { l: 2, v: { 'ডাকের স্তূপ': 'fact(3) → fact(2)', n: 2 }, n: 'fact(2) তে ফিরে এলাম: {{2 * 1}} = 2, return 2।' },
    { l: 2, v: { 'ডাকের স্তূপ': 'fact(3)', n: 3 }, n: 'fact(3) তে ফিরে এলাম: {{3 * 2}} = 6, return 6।' },
    { l: 6, v: { 'ডাকের স্তূপ': null, n: null }, p: '6', n: 'main এ 6 পৌঁছালো। নিচে নামা, base case, তারপর উপরে উঠতে উঠতে গুণ।' },
  ],
};

TOPICS['recursion'] = {
  short: 'Recursion', title: 'Recursion: নিজেকে ডাকা function', days: 'দিন ৬–৭',
  goal: 'যে function নিজেকেই ডাকে সেটা কিভাবে থামে আর ফল কিভাবে ফিরে আসে, সেটা বোঝা।',
  learn: [
    'Recursion মানে function **নিজেকেই** ডাকে, প্রতিবার একটু ছোট সমস্যা নিয়ে। যেমন রাশিয়ান পুতুল: একটা খুললে ভেতরে ছোট আরেকটা, তার ভেতরে আরো ছোট, শেষে একদম ছোটটা যেটা আর খোলে না।',
    'প্রতিটা recursive function এ **দুইটা জিনিস লাগবেই**:',
    { list: ['**Base case**: কখন থামবে। সবচেয়ে ছোট সমস্যা, যার উত্তর সরাসরি জানা।', '**Recursive case**: সমস্যাটাকে একটু ছোট করে নিজেকে ডাকো।'] },
    { code: `void countdown(int n) {
  if (n == 0) {              // base case
    print('শুরু!');
    return;
  }
  print(n);
  countdown(n - 1);          // ছোট সমস্যা নিয়ে নিজেকে ডাকো
}

int fact(int n) {
  if (n == 1) return 1;      // base case: 1! = 1
  return n * fact(n - 1);    // n! = n × (n-1)!
}

int sumTo(int n) => n == 0 ? 0 : n + sumTo(n - 1);

void main() {
  countdown(3);
  print(fact(5));    // 120
  print(sumTo(100)); // 5050
}`, out: '3\n2\n1\nশুরু!\n120\n5050' },
    { warn: 'base case না দিলে বা সমস্যা ছোট না হলে function অনন্তকাল নিজেকে ডাকতে থাকবে। শেষে **Stack Overflow** Error দিয়ে crash।' },
    { tip: 'recursion লেখার কৌশল: "ধরে নাও ছোট সমস্যার উত্তর জাদুর মতো পেয়ে গেছ। সেটা দিয়ে বড়টা কিভাবে বানাবে?" যেমন: fact(4) জানলে fact(5) = 5 × fact(4)।' },
  ],
  how: [
    'প্রতিটা ডাক একটা নতুন "কপি" তৈরি করে, যার নিজের {{n}} আছে।',
    'base case না আসা পর্যন্ত ডাকগুলো একটার উপর আরেকটা জমতে থাকে (স্তূপ বা stack)।',
    'base case এ পৌঁছালে উত্তর ফিরতে শুরু করে, শেষেরটা থেকে প্রথমটার দিকে।',
  ],
  traces: ['fact'],
  quiz: [
    { q: 'f(4) কত?', code: 'int f(int n) => n == 0 ? 0 : n + f(n - 1);', opts: ['4', '10', '24', 'অসীম'], a: 1, why: '4 + 3 + 2 + 1 + 0 = 10।' },
    { q: 'কী হবে?', code: `int g(int n) {
  return n * g(n - 1);
}
void main() {
  print(g(3));
}`, opts: ['6', '0', 'Stack Overflow', '3'], a: 2, why: 'base case নেই, n কমতেই থাকে: 3, 2, 1, 0, -1, ... থামে না।' },
  ],
  probs: [
    { l: 'e', q: 'recursion দিয়ে {{countdown(n)}}: n থেকে 1 পর্যন্ত, তারপর "শেষ"।', sol: `void countdown(int n) {
  if (n == 0) {
    print('শেষ');
    return;
  }
  print(n);
  countdown(n - 1);
}

void main() {
  countdown(5);
}` },
    { l: 'e', q: 'recursion দিয়ে 1 থেকে n এর যোগফল।', sol: `int sumTo(int n) {
  if (n == 0) return 0;
  return n + sumTo(n - 1);
}

void main() {
  print(sumTo(10)); // 55
}` },
    { l: 'e', q: 'recursion দিয়ে 1 থেকে n পর্যন্ত **সোজা** ক্রমে প্রিন্ট করো (উল্টো না)।', hint: 'আগে নিজেকে ডাকো, তারপর প্রিন্ট করো।', sol: `void printUp(int n) {
  if (n == 0) return;
  printUp(n - 1);  // আগে ছোটগুলো
  print(n);        // তারপর নিজে
}

void main() {
  printUp(5); // 1 2 3 4 5
}` },
    { l: 'm', q: 'recursion দিয়ে {{power(a, b)}}। a^0 = 1, a^b = a × a^(b-1)।', sol: `int power(int a, int b) {
  if (b == 0) return 1;
  return a * power(a, b - 1);
}

void main() {
  print(power(3, 4)); // 81
}` },
    { l: 'm', q: 'recursion দিয়ে n তম Fibonacci: fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2)।', sol: `int fib(int n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

void main() {
  for (int i = 0; i < 10; i++) {
    print(fib(i));
  }
}`, note: 'n = 40 দিয়ে চালিয়ে দেখো, অনেক সময় লাগে। কারণ একই হিসাব বারবার হয়। loop দিয়ে করলে মুহূর্তেই হয়।' },
    { l: 'm', q: 'recursion দিয়ে অঙ্কের যোগফল: 472 → 4 + 7 + 2।', sol: `int digitSum(int n) {
  if (n < 10) return n;
  return n % 10 + digitSum(n ~/ 10);
}

void main() {
  print(digitSum(472)); // 13
}` },
    { l: 'm', q: 'recursion দিয়ে String উল্টাও: "dart" → "trad"।', hint: 'উল্টো(s) = উল্টো(প্রথম অক্ষর বাদে বাকিটা) + প্রথম অক্ষর', sol: `String reverse(String s) {
  if (s.isEmpty) return '';
  return reverse(s.substring(1)) + s[0];
}

void main() {
  print(reverse('dart')); // trad
}` },
    { l: 'h', q: 'recursion দিয়ে palindrome চেক।', hint: 'প্রথম আর শেষ অক্ষর মিললে, মাঝের অংশ palindrome কিনা দেখো।', sol: `bool isPal(String s) {
  if (s.length <= 1) return true;
  if (s[0] != s[s.length - 1]) return false;
  return isPal(s.substring(1, s.length - 1));
}

void main() {
  print(isPal('racecar')); // true
  print(isPal('rocket'));  // false
}` },
    { l: 'h', q: 'recursion দিয়ে দশমিক থেকে binary String: 13 → "1101"।', sol: `String toBinary(int n) {
  if (n < 2) return '$n';
  return toBinary(n ~/ 2) + '\${n % 2}';
}

void main() {
  print(toBinary(13)); // 1101
}` },
    { l: 'h', q: 'Tower of Hanoi: ৩টা খুঁটি A, B, C। A তে 3টা চাকতি (বড় নিচে)। সবগুলো C তে নিতে হবে, B সাহায্য করবে। বড়টা কখনো ছোটর উপর না। সব চাল প্রিন্ট করো।', hint: 'n টা সরাতে: উপরের n-1 টা A থেকে B তে (C সাহায্যে), বড়টা A থেকে C তে, তারপর n-1 টা B থেকে C তে (A সাহায্যে)।', sol: `void hanoi(int n, String from, String to, String via) {
  if (n == 0) return;
  hanoi(n - 1, from, via, to);
  print('চাকতি $n: $from → $to');
  hanoi(n - 1, via, to, from);
}

void main() {
  hanoi(3, 'A', 'C', 'B'); // 7 টা চাল
}` },
  ],
};

TOPICS['list'] = {
  short: 'List', title: 'List: সারি করে রাখা মান', days: 'দিন ১–২',
  goal: 'অনেকগুলো মান এক নামে রাখা, index দিয়ে ধরা, যোগ-মোছা, আর loop দিয়ে ঘোরা।',
  learn: [
    '৫০ জন ছাত্রের নম্বর রাখতে ৫০টা variable? না! **List** হলো সারি করে রাখা অনেকগুলো বাক্স, এক নামে। প্রতিটা বাক্সের একটা নম্বর (index), শুরু **0** থেকে।',
    { array: ['80', '65', '92', '75'], cap: 'List<int> marks = [80, 65, 92, 75];  marks[0] = 80, marks[3] = 75' },
    { widget: 'listLab' },
    { code: `void main() {
  List<int> marks = [80, 65, 92];
  print(marks[0]);       // 80
  print(marks.length);   // 3

  marks.add(75);         // শেষে যোগ        → [80, 65, 92, 75]
  marks.insert(0, 50);   // 0 নম্বরে ঢোকাও → [50, 80, 65, 92, 75]
  marks[1] = 85;         // মান বদলাও       → [50, 85, 65, 92, 75]
  marks.remove(65);      // মান ধরে মোছো    → [50, 85, 92, 75]
  marks.removeAt(0);     // index ধরে মোছো  → [85, 92, 75]
  print(marks);

  print(marks.contains(92)); // true
  print(marks.indexOf(75));  // 2  (না থাকলে -1)
  print(marks.first);        // 85
  print(marks.last);         // 75
  print(marks.isEmpty);      // false
}`, out: '80\n3\n[85, 92, 75]\ntrue\n2\n85\n75\nfalse' },
    { h: 'loop দিয়ে List ঘোরা' },
    { code: `void main() {
  var names = ['Rafi', 'Mitu', 'Tanim'];

  // index লাগলে
  for (int i = 0; i < names.length; i++) {
    print('\${i + 1}. \${names[i]}');
  }

  // শুধু মান লাগলে
  for (var n in names) {
    print(n);
  }
}` },
    { warn: 'সবচেয়ে কমন ভুল: {{list[list.length]}}। শেষ index হলো {{length - 1}}। এর বাইরে গেলে **RangeError**। loop এ {{i < list.length}}, {{<=}} না।' },
    { tip: 'খালি list বানাতে: {{List<int> nums = [];}} বা {{var nums = <int>[];}}। তারপর loop এ {{add}} করে ভরো।' },
  ],
  how: [
    'List মেমরিতে পাশাপাশি বাক্সের মতো। {{marks[2]}} মানে "শুরু থেকে 2 ঘর পরের বাক্স"। তাই প্রথমটা 0 ঘর পরে, index 0।',
    '{{add}} শেষে নতুন বাক্স যোগ করে, length 1 বাড়ে।',
    '{{insert}} বা {{removeAt}} করলে পরের সবগুলো এক ঘর সরে যায়, তাদের index বদলায়।',
    'আগের সব কৌশল (sum, count, max, flag) এখন list এর উপর loop দিয়ে করা যায়।',
  ],
  quiz: [
    { q: 'Output কী?', code: `var l = [1, 2, 3];
l.add(4);
l.removeAt(1);
print(l);`, opts: ['[1, 2, 3, 4]', '[1, 3, 4]', '[2, 3, 4]', '[1, 2, 4]'], a: 1, why: 'add এর পর [1, 2, 3, 4]। index 1 এ আছে 2, সেটা মুছলে [1, 3, 4]।' },
    { q: 'কী হবে?', code: `var l = [10, 20, 30];
print(l[3]);`, opts: ['30', 'null', 'RangeError', '0'], a: 2, why: 'index 0, 1, 2 আছে। 3 নেই।' },
    { q: 'Output কী?', code: `var l = [4, 8, 15];
int s = 0;
for (var x in l) s += x;
print(s);`, opts: ['27', '3', '15', '[4, 8, 15]'], a: 0, why: '4 + 8 + 15 = 27।' },
  ],
  probs: [
    { l: 'e', q: '৫ জন বন্ধুর নামের একটা list বানাও, নম্বর দিয়ে প্রিন্ট করো (1. Rafi ...)।', sol: `void main() {
  var friends = ['Rafi', 'Mitu', 'Tanim', 'Sadia', 'Arif'];
  for (int i = 0; i < friends.length; i++) {
    print('\${i + 1}. \${friends[i]}');
  }
}` },
    { l: 'e', q: '{{[12, 45, 7, 23, 56, 89]}} এর যোগফল।', sol: `void main() {
  var nums = [12, 45, 7, 23, 56, 89];
  int sum = 0;
  for (var n in nums) sum += n;
  print(sum); // 232
}` },
    { l: 'e', q: 'একই list এর গড়, দুই দশমিকে।', sol: `void main() {
  var nums = [12, 45, 7, 23, 56, 89];
  int sum = 0;
  for (var n in nums) sum += n;
  print((sum / nums.length).toStringAsFixed(2)); // 38.67
}` },
    { l: 'e', q: 'loop দিয়ে সবচেয়ে বড় সংখ্যা বের করো (কোনো built-in ছাড়া)।', hint: '"এখন পর্যন্ত সবচেয়ে বড়" = প্রথমটা। তারপর বাকিদের সাথে তুলনা।', sol: `void main() {
  var nums = [12, 45, 7, 23, 56, 89, 3];
  int max = nums[0];
  for (var n in nums) {
    if (n > max) max = n;
  }
  print(max); // 89
}` },
    { l: 'e', q: 'সবচেয়ে ছোট সংখ্যা আর সেটার index বের করো।', sol: `void main() {
  var nums = [12, 45, 7, 23, 56, 89, 3, 40];
  int minIndex = 0;
  for (int i = 1; i < nums.length; i++) {
    if (nums[i] < nums[minIndex]) minIndex = i;
  }
  print('সবচেয়ে ছোট \${nums[minIndex]}, index $minIndex'); // 3, index 6
}` },
    { l: 'm', q: 'list এ কয়টা জোড় আর কয়টা বিজোড় সংখ্যা আছে গোনো।', sol: `void main() {
  var nums = [3, 8, 11, 20, 7, 6, 15];
  int even = 0, odd = 0;
  for (var n in nums) {
    if (n % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  print('জোড় $even, বিজোড় $odd'); // 3, 4
}` },
    { l: 'm', q: '{{reversed}} ছাড়া একটা list উল্টাও (নতুন list বানিয়ে)।', hint: 'শেষ index থেকে 0 পর্যন্ত loop চালিয়ে add করো।', sol: `void main() {
  var nums = [1, 2, 3, 4, 5];
  var rev = <int>[];
  for (int i = nums.length - 1; i >= 0; i--) {
    rev.add(nums[i]);
  }
  print(rev); // [5, 4, 3, 2, 1]
}` },
    { l: 'm', q: 'linear search: একটা মান list এ কোন index এ আছে বের করো, না থাকলে -1। (indexOf ছাড়া)', sol: `int search(List<int> list, int target) {
  for (int i = 0; i < list.length; i++) {
    if (list[i] == target) return i;
  }
  return -1;
}

void main() {
  var nums = [4, 9, 2, 7, 5];
  print(search(nums, 7));  // 3
  print(search(nums, 10)); // -1
}` },
    { l: 'm', q: 'list থেকে ডুপ্লিকেট বাদ দিয়ে নতুন list বানাও: [1, 2, 2, 3, 1, 4] → [1, 2, 3, 4]।', sol: `void main() {
  var nums = [1, 2, 2, 3, 1, 4];
  var unique = <int>[];
  for (var n in nums) {
    if (!unique.contains(n)) unique.add(n);
  }
  print(unique);
}` },
    { l: 'm', q: 'দুইটা list এক করো: [1, 2, 3] আর [4, 5] → [1, 2, 3, 4, 5]। (loop দিয়ে, তারপর {{addAll}} দিয়ে, তারপর {{[...a, ...b]}} দিয়ে)', sol: `void main() {
  var a = [1, 2, 3], b = [4, 5];
  var c = <int>[];
  for (var x in a) c.add(x);
  for (var x in b) c.add(x);
  print(c);

  var d = [...a];
  d.addAll(b);
  print(d);

  print([...a, ...b]);
}` },
    { l: 'm', q: 'list এর দ্বিতীয় বড় সংখ্যা বের করো (sort ছাড়া)।', hint: 'দুইটা variable: {{first}} আর {{second}}। নতুন সংখ্যা first এর বড় হলে, পুরানো first দ্বিতীয় হয়ে যায়।', sol: `void main() {
  var nums = [12, 45, 7, 89, 56, 23];
  int first = nums[0], second = -999999;
  for (var n in nums) {
    if (n > first) {
      second = first;
      first = n;
    } else if (n > second && n != first) {
      second = n;
    }
  }
  print(second); // 56
}` },
    { l: 'h', q: 'list কে বাম দিকে এক ঘর ঘোরাও: [1, 2, 3, 4] → [2, 3, 4, 1]। নতুন list না বানিয়ে, একই list এ।', sol: `void main() {
  var a = [1, 2, 3, 4];
  int first = a[0];
  for (int i = 0; i < a.length - 1; i++) {
    a[i] = a[i + 1];
  }
  a[a.length - 1] = first;
  print(a); // [2, 3, 4, 1]
}` },
    { l: 'h', q: 'দুইটা list এর common জিনিসগুলো বের করো: [1, 4, 6, 9] আর [2, 4, 9, 10] → [4, 9]।', sol: `void main() {
  var a = [1, 4, 6, 9], b = [2, 4, 9, 10];
  var common = <int>[];
  for (var x in a) {
    if (b.contains(x) && !common.contains(x)) common.add(x);
  }
  print(common);
}` },
    { l: 'h', q: '1 থেকে n এর সংখ্যাগুলো থেকে একটা হারিয়ে গেছে: [1, 2, 4, 5, 6] (n = 6)। কোনটা নেই?', hint: '1 থেকে n এর যোগফল = n × (n + 1) / 2। সেখান থেকে list এর যোগফল বিয়োগ করো।', sol: `void main() {
  var nums = [1, 2, 4, 5, 6];
  int n = nums.length + 1;
  int expected = n * (n + 1) ~/ 2;
  int actual = 0;
  for (var x in nums) actual += x;
  print(expected - actual); // 3
}` },
  ],
};

TOPICS['set-map'] = {
  short: 'Set ও Map', title: 'Set আর Map', days: 'দিন ৩–৪',
  goal: 'ডুপ্লিকেট ছাড়া সংগ্রহ (Set) আর নাম দিয়ে মান খোঁজা (Map) ব্যবহার করা।',
  learn: [
    { h: 'Set: প্রতিটা জিনিস একবারই' },
    { code: `void main() {
  Set<String> colors = {'লাল', 'নীল', 'লাল'};
  print(colors);              // {লাল, নীল}  ডুপ্লিকেট নিজেই বাদ
  colors.add('সবুজ');
  colors.add('নীল');          // আগে থেকে আছে, কিছু হবে না
  print(colors.length);       // 3
  print(colors.contains('নীল')); // true

  var a = {1, 2, 3, 4}, b = {3, 4, 5};
  print(a.union(b));          // {1, 2, 3, 4, 5}
  print(a.intersection(b));   // {3, 4}
  print(a.difference(b));     // {1, 2}

  var list = [1, 1, 2, 3, 3, 3];
  print(list.toSet().toList()); // [1, 2, 3]
}` },
    { h: 'Map: চাবি → মান (অভিধানের মতো)' },
    'অভিধানে শব্দ খুঁজলে অর্থ পাও। Map এ **key** দিলে **value** পাও। List এ index হয় 0, 1, 2; Map এ key যা খুশি হতে পারে (নাম, শব্দ, সংখ্যা)।',
    { map: [["'Rafi'", '14'], ["'Mitu'", '12'], ["'Tanim'", '16']], cap: 'Map<String, int> age  (key → value)' },
    { code: `void main() {
  Map<String, int> age = {
    'Rafi': 14,
    'Mitu': 12,
  };
  print(age['Rafi']);       // 14
  age['Tanim'] = 16;        // নতুন key, যোগ হলো
  age['Mitu'] = 13;         // পুরানো key, মান বদলালো
  age.remove('Rafi');
  print(age);               // {Mitu: 13, Tanim: 16}
  print(age['Nobody']);     // null  (key না থাকলে)
  print(age.containsKey('Mitu')); // true
  print(age.keys);          // (Mitu, Tanim)
  print(age.values);        // (13, 16)

  for (var e in age.entries) {
    print('\${e.key} → \${e.value}');
  }
}` },
    { h: 'সবচেয়ে কাজের কৌশল: গোনা (frequency)' },
    { code: `void main() {
  String text = 'banana';
  Map<String, int> count = {};
  for (var ch in text.split('')) {
    count[ch] = (count[ch] ?? 0) + 1;
  }
  print(count); // {b: 1, a: 3, n: 2}
}`, out: '{b: 1, a: 3, n: 2}' },
    { tip: '{{(count[ch] ?? 0) + 1}} মানে: আগে কত ছিল দেখো (না থাকলে 0), এক বাড়াও। এই এক লাইন অনেক সমস্যা সমাধান করে দেয়।' },
  ],
  how: [
    'Set এ add করার আগে Dart দেখে জিনিসটা আছে কিনা। থাকলে আর যোগ করে না।',
    'Map এ {{age[key] = value}} লিখলে: key না থাকলে নতুন জোড়া যোগ, থাকলে মান বদল।',
    'Map থেকে পড়লে type হয় nullable ({{int?}}), কারণ key না থাকতে পারে। তাই {{??}} বা {{!}} লাগে।',
  ],
  quiz: [
    { q: 'Output কী?', code: `var s = {1, 1, 2, 2, 2};
print(s.length);`, opts: ['5', '2', '3', '1'], a: 1, why: 'Set এ শুধু {1, 2} থাকে।' },
    { q: 'Output কী?', code: `var m = {'a': 1, 'b': 2};
m['a'] = 5;
m['c'] = 3;
print(m.length);`, opts: ['2', '3', '4', 'Error'], a: 1, why: "'a' আগে থেকে ছিল, শুধু মান বদলালো। 'c' নতুন। মোট 3টা key।" },
    { q: 'Output কী?', code: `var m = {'x': 10};
print(m['y'] ?? 0);`, opts: ['10', 'null', '0', 'Error'], a: 2, why: "'y' key নেই, null, তাই {{??}} এর 0।" },
  ],
  probs: [
    { l: 'e', q: '৫টা দেশ আর রাজধানীর Map বানাও, সবগুলো "দেশ → রাজধানী" প্রিন্ট করো।', sol: `void main() {
  var capitals = {
    'বাংলাদেশ': 'ঢাকা',
    'ভারত': 'নয়াদিল্লি',
    'জাপান': 'টোকিও',
    'মিশর': 'কায়রো',
    'ব্রাজিল': 'ব্রাসিলিয়া',
  };
  for (var e in capitals.entries) {
    print('\${e.key} → \${e.value}');
  }
}` },
    { l: 'e', q: 'Set দিয়ে list থেকে ডুপ্লিকেট বাদ দাও: {{[5, 3, 5, 1, 3, 9]}}।', sol: `void main() {
  var nums = [5, 3, 5, 1, 3, 9];
  print(nums.toSet()); // {5, 3, 1, 9}
}` },
    { l: 'e', q: 'ফোনবুক Map (নাম → নম্বর)। একটা নাম খুঁজো, না থাকলে "পাওয়া যায়নি"।', sol: `void main() {
  var phone = {'Rafi': '01711-000000', 'Mitu': '01811-111111'};
  String name = 'Tanim';
  print(phone[name] ?? 'পাওয়া যায়নি');
}` },
    { l: 'm', q: 'একটা শব্দে প্রতিটা অক্ষর কতবার আছে গোনো: "programming"।', sol: `void main() {
  String w = 'programming';
  Map<String, int> count = {};
  for (var ch in w.split('')) {
    count[ch] = (count[ch] ?? 0) + 1;
  }
  print(count); // {p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1}
}` },
    { l: 'm', q: 'একটা বাক্যে প্রতিটা শব্দ কতবার এসেছে গোনো।', sol: `void main() {
  String s = 'the cat and the dog and the bird';
  Map<String, int> count = {};
  for (var w in s.split(' ')) {
    count[w] = (count[w] ?? 0) + 1;
  }
  print(count); // {the: 3, cat: 1, and: 2, dog: 1, bird: 1}
}` },
    { l: 'm', q: 'ছাত্র → নম্বর Map থেকে সবচেয়ে বেশি নম্বর পাওয়া ছাত্রের নাম বের করো।', sol: `void main() {
  var marks = {'Rafi': 78, 'Mitu': 92, 'Tanim': 85};
  String top = '';
  int best = -1;
  for (var e in marks.entries) {
    if (e.value > best) {
      best = e.value;
      top = e.key;
    }
  }
  print('$top ($best)'); // Mitu (92)
}` },
    { l: 'm', q: 'দুই দলের খেলোয়াড়ের Set। কারা দুই দলেই আছে, কারা শুধু প্রথম দলে, আর সব মিলিয়ে কারা?', sol: `void main() {
  var teamA = {'Rafi', 'Mitu', 'Tanim', 'Sadia'};
  var teamB = {'Tanim', 'Arif', 'Sadia'};
  print(teamA.intersection(teamB)); // {Tanim, Sadia}
  print(teamA.difference(teamB));   // {Rafi, Mitu}
  print(teamA.union(teamB));        // সবাই
}` },
    { l: 'm', q: "Map এর key আর value উল্টাও: {{ {'a': 1, 'b': 2} }} → {{ {1: 'a', 2: 'b'} }}", sol: `void main() {
  var m = {'a': 1, 'b': 2, 'c': 3};
  Map<int, String> rev = {};
  for (var e in m.entries) {
    rev[e.value] = e.key;
  }
  print(rev); // {1: a, 2: b, 3: c}
}` },
    { l: 'h', q: 'একটা বাক্যে সবচেয়ে বেশিবার আসা অক্ষর (স্পেস বাদে) বের করো।', sol: `void main() {
  String s = 'dart is a great language';
  Map<String, int> count = {};
  for (var ch in s.split('')) {
    if (ch == ' ') continue;
    count[ch] = (count[ch] ?? 0) + 1;
  }
  String best = '';
  int max = 0;
  for (var e in count.entries) {
    if (e.value > max) {
      max = e.value;
      best = e.key;
    }
  }
  print('$best, $max বার'); // a, 5 বার
}` },
    { l: 'h', q: "দুইটা শব্দ anagram কিনা (একই অক্ষর, একই সংখ্যায়): 'listen' আর 'silent'। frequency Map দিয়ে।", sol: `Map<String, int> freq(String s) {
  Map<String, int> m = {};
  for (var ch in s.split('')) {
    m[ch] = (m[ch] ?? 0) + 1;
  }
  return m;
}

bool isAnagram(String a, String b) {
  if (a.length != b.length) return false;
  var fa = freq(a), fb = freq(b);
  for (var k in fa.keys) {
    if (fa[k] != fb[k]) return false;
  }
  return true;
}

void main() {
  print(isAnagram('listen', 'silent')); // true
  print(isAnagram('hello', 'world'));   // false
}` },
    { l: 'h', q: 'শপিং কার্ট: {{price}} Map (জিনিস → দাম) আর {{cart}} Map (জিনিস → কয়টা)। প্রতিটা লাইন আর মোট বিল প্রিন্ট করো। দামের তালিকায় না থাকলে "দাম জানা নেই"।', sol: `void main() {
  var price = {'চাল': 70.0, 'ডাল': 120.0, 'তেল': 180.0};
  var cart = {'চাল': 5, 'তেল': 2, 'চিনি': 1};
  double total = 0;
  for (var e in cart.entries) {
    double? p = price[e.key];
    if (p == null) {
      print('\${e.key}: দাম জানা নেই');
    } else {
      double line = p * e.value;
      total += line;
      print('\${e.key} x \${e.value} = $line');
    }
  }
  print('মোট: $total'); // 710.0
}` },
  ],
};

TOPICS['collection-methods'] = {
  short: 'map, where, reduce...', title: 'Collection method: map, where, reduce, fold, sort', days: 'দিন ৫–৭',
  goal: 'loop না লিখে list এর উপর ছাঁকা, বদলানো, যোগ করা, সাজানো। এখানে anonymous function সবচেয়ে বেশি কাজে লাগে।',
  learn: [
    'এতদিন যে কাজগুলো loop দিয়ে করেছ (ছাঁকা, বদলানো, যোগ), Dart এ সেগুলোর তৈরি method আছে। প্রতিটা method একটা **anonymous function** নেয়, যেটা বলে কী করতে হবে।',
    { widget: 'pipeLab' },
    { table: [['Method', 'কাজ', 'উদাহরণ', 'ফল'], ['{{map}}', 'প্রতিটা বদলাও', '{{[1,2,3].map((x) => x * 10)}}', '(10, 20, 30)'], ['{{where}}', 'শর্ত মিললে রাখো', '{{[1,2,3,4].where((x) => x > 2)}}', '(3, 4)'], ['{{reduce}}', 'সব মিলিয়ে একটা', '{{[1,2,3].reduce((a, b) => a + b)}}', '6'], ['{{fold}}', 'শুরুর মান দিয়ে reduce', '{{[1,2,3].fold(10, (s, x) => s + x)}}', '16'], ['{{any}}', 'অন্তত একটা মেলে?', '{{[1,5].any((x) => x > 4)}}', 'true'], ['{{every}}', 'সবগুলো মেলে?', '{{[1,5].every((x) => x > 4)}}', 'false']] },
    { code: `void main() {
  var nums = [5, 3, 8, 1, 9, 2];

  var doubled = nums.map((n) => n * 2).toList();
  print(doubled);                     // [10, 6, 16, 2, 18, 4]

  var evens = nums.where((n) => n % 2 == 0).toList();
  print(evens);                       // [8, 2]

  print(nums.reduce((a, b) => a + b));       // 28
  print(nums.fold<int>(0, (sum, n) => sum + n)); // 28
  print(nums.any((n) => n > 8));             // true
  print(nums.every((n) => n > 0));           // true

  // একটার পর একটা জোড়া (chain)
  var result = nums.where((n) => n > 2).map((n) => n * n).toList();
  print(result);                      // [25, 9, 64, 81]

  print(nums.join(' - '));            // 5 - 3 - 8 - 1 - 9 - 2
}` },
    { h: 'সাজানো (sort)' },
    { code: `void main() {
  var nums = [5, 3, 8, 1];
  nums.sort();                        // ছোট থেকে বড়, মূল list বদলায়
  print(nums);                        // [1, 3, 5, 8]
  nums.sort((a, b) => b - a);         // বড় থেকে ছোট
  print(nums);                        // [8, 5, 3, 1]

  var words = ['আম', 'কাঁঠাল', 'জাম'];
  words.sort((a, b) => a.length.compareTo(b.length)); // দৈর্ঘ্য অনুযায়ী
  print(words);
}` },
    { list: ['sort এর function দুইটা জিনিস {{a}}, {{b}} নেয়। নেগেটিভ দিলে a আগে, পজিটিভ দিলে b আগে।', '{{a.compareTo(b)}} এই হিসাব নিজেই করে দেয়।'] },
    { h: 'Spread আর collection if/for' },
    { code: `void main() {
  var a = [1, 2], b = [3, 4];
  var all = [...a, ...b, 5];                   // [1, 2, 3, 4, 5]

  bool hungry = true;
  var menu = ['ভাত', 'ডাল', if (hungry) 'মাংস'];
  var squares = [for (var i = 1; i <= 5; i++) i * i]; // [1, 4, 9, 16, 25]

  print(all);
  print(menu);
  print(squares);
}` },
    { tip: '{{map}} আর {{where}} সরাসরি List দেয় না, একটা "Iterable" দেয় (প্রিন্ট করলে {{( )}} দেখায়)। List লাগলে শেষে {{.toList()}}।' },
  ],
  how: [
    '{{map}} প্রতিটা জিনিসের উপর তোমার function চালায়, যা return করে সেগুলো দিয়ে নতুন সংগ্রহ বানায়।',
    '{{where}} প্রতিটা জিনিসের উপর তোমার function চালায়, true পেলে রাখে, false পেলে ফেলে দেয়।',
    '{{reduce((a, b) => a + b)}}: প্রথম দুইটা নিয়ে a + b, তারপর সেই ফল আর তৃতীয়টা, এভাবে শেষ পর্যন্ত। [5, 3, 8] → 5+3 = 8 → 8+8 = 16।',
    'এগুলো ভেতরে আসলে loop ই চালায়, যেটা তুমি আগের টপিকে নিজে লিখেছ।',
  ],
  quiz: [
    { q: 'Output কী?', code: 'print([1, 2, 3].map((x) => x * x).toList());', opts: ['[1, 2, 3]', '[1, 4, 9]', '14', '[2, 4, 6]'], a: 1, why: 'প্রতিটা নিজের সাথে গুণ।' },
    { q: 'Output কী?', code: 'print([1, 2, 3, 4].where((x) => x > 2).length);', opts: ['2', '4', '7', '[3, 4]'], a: 0, why: 'থাকে [3, 4], length 2।' },
    { q: 'Output কী?', code: "print([2, 3, 4].fold(1, (p, x) => p * x));", opts: ['9', '24', '10', '1'], a: 1, why: '1 × 2 × 3 × 4 = 24।' },
  ],
  probs: [
    { l: 'e', q: "map দিয়ে নামের list এর সবগুলো বড় হাতের অক্ষরে বানাও।", sol: `void main() {
  var names = ['rafi', 'mitu', 'tanim'];
  print(names.map((n) => n.toUpperCase()).toList()); // [RAFI, MITU, TANIM]
}` },
    { l: 'e', q: 'where দিয়ে 50 এর বেশি নম্বরগুলো আলাদা করো।', sol: `void main() {
  var marks = [45, 78, 32, 91, 50, 66];
  print(marks.where((m) => m > 50).toList()); // [78, 91, 66]
}` },
    { l: 'e', q: 'reduce দিয়ে {{[1, 2, 3, 4, 5]}} এর গুণফল।', sol: `void main() {
  print([1, 2, 3, 4, 5].reduce((a, b) => a * b)); // 120
}` },
    { l: 'e', q: 'any দিয়ে দেখো কেউ ফেল (33 এর কম) করেছে কিনা। every দিয়ে দেখো সবাই পাস কিনা।', sol: `void main() {
  var marks = [45, 78, 32, 91];
  print(marks.any((m) => m < 33));    // true
  print(marks.every((m) => m >= 33)); // false
}` },
    { l: 'm', q: 'chain করে: list এর জোড় সংখ্যাগুলোর বর্গের যোগফল। [1..10] → 4 + 16 + 36 + 64 + 100।', sol: `void main() {
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var r = nums.where((n) => n % 2 == 0).map((n) => n * n).fold(0, (s, n) => s + n);
  print(r); // 220
}` },
    { l: 'm', q: 'শব্দের list দৈর্ঘ্য অনুযায়ী সাজাও, ছোট থেকে বড়। দৈর্ঘ্য সমান হলে বর্ণানুক্রমে।', sol: `void main() {
  var words = ['banana', 'kiwi', 'apple', 'fig', 'grape'];
  words.sort((a, b) {
    int c = a.length.compareTo(b.length);
    return c != 0 ? c : a.compareTo(b);
  });
  print(words); // [fig, kiwi, apple, grape, banana]
}` },
    { l: 'm', q: 'ছাত্র → নম্বর Map কে নম্বর অনুযায়ী (বেশি থেকে কম) সাজিয়ে প্রিন্ট করো।', hint: '{{map.entries.toList()}} দিয়ে list বানাও, তারপর sort।', sol: `void main() {
  var marks = {'Rafi': 78, 'Mitu': 92, 'Tanim': 85, 'Sadia': 88};
  var list = marks.entries.toList();
  list.sort((a, b) => b.value - a.value);
  for (var e in list) {
    print('\${e.key}: \${e.value}');
  }
}` },
    { l: 'm', q: 'collection for দিয়ে 7 এর নামতার String list বানাও: [\'7 x 1 = 7\', ...]।', sol: `void main() {
  var table = [for (var i = 1; i <= 10; i++) '7 x $i = \${7 * i}'];
  table.forEach(print);
}`, note: '{{forEach(print)}}: print নিজেই একটা function, তাই সরাসরি পাঠানো যায়।' },
    { l: 'm', q: 'spread দিয়ে দুইটা list জোড়া দাও, তারপর ডুপ্লিকেট বাদ দিয়ে সাজাও।', sol: `void main() {
  var a = [5, 1, 3], b = [3, 7, 1, 9];
  var r = [...a, ...b].toSet().toList()..sort();
  print(r); // [1, 3, 5, 7, 9]
}`, note: '{{..sort()}} হলো cascade: sort চালাও, কিন্তু list টাই ফেরত দাও।' },
    { l: 'h', q: "ছাত্রদের list (প্রতিটা একটা Map: {{ {'name': ..., 'marks': ...} }})। পাশ করা ছাত্রদের নাম আর সবার গড় নম্বর বের করো।", sol: `void main() {
  var students = [
    {'name': 'Rafi', 'marks': 78},
    {'name': 'Mitu', 'marks': 28},
    {'name': 'Tanim', 'marks': 85},
    {'name': 'Sadia', 'marks': 31},
  ];
  var passed = students
      .where((s) => (s['marks'] as int) >= 33)
      .map((s) => s['name'])
      .toList();
  print(passed); // [Rafi, Tanim]

  var total = students.fold(0, (sum, s) => sum + (s['marks'] as int));
  print(total / students.length); // 55.5
}`, note: "{{as int}} বলে দেয় মানটা int। Map এ বিভিন্ন type থাকায় Dart নিজে বুঝতে পারে না। পরে class শিখলে এটা আরো সুন্দর হবে।" },
    { l: 'h', q: 'fold দিয়ে সবচেয়ে লম্বা শব্দ বের করো।', sol: `void main() {
  var words = ['Dart', 'Flutter', 'is', 'awesome', 'programming'];
  var longest = words.fold('', (best, w) => w.length > best.length ? w : best);
  print(longest); // programming
}` },
  ],
};

CARDS.push(
  { w: 5, f: 'দুইটা int নিয়ে যোগফল return করে এমন function', b: 'int add(int a, int b) {\n  return a + b;\n}' },
  { w: 5, f: 'arrow function', b: 'int square(int x) => x * x;' },
  { w: 5, f: 'ঐচ্ছিক positional parameter (default সহ)', b: 'void f(int a, [int b = 0]) {}' },
  { w: 5, f: 'named parameter (default সহ)', b: 'void f({int a = 0, String? b}) {}\nf(a: 5);' },
  { w: 5, f: 'required named parameter', b: 'void f({required String name}) {}' },
  { w: 7, f: 'anonymous function variable এ রাখো', b: 'var add = (int a, int b) => a + b;' },
  { w: 7, f: 'function কে parameter হিসেবে নাও', b: 'int calc(int a, int b, int Function(int, int) op) {\n  return op(a, b);\n}' },
  { w: 7, f: 'function type এর ডাকনাম', b: 'typedef MathOp = int Function(int, int);' },
  { w: 7, f: 'function ফেরত দেয় এমন function', b: 'int Function(int) adder(int n) {\n  return (x) => x + n;\n}' },
  { w: 5, f: 'recursion এর দুই অংশ', b: '১. base case: কখন থামবে\n২. ছোট সমস্যা নিয়ে নিজেকে ডাকো' },
  { w: 6, f: 'List বানাও, শেষে যোগ করো', b: 'var l = [1, 2, 3];\nl.add(4);' },
  { w: 6, f: 'List এর নির্দিষ্ট index এ ঢোকাও / মোছো', b: 'l.insert(0, 99);\nl.removeAt(2);' },
  { w: 6, f: 'Map বানাও, মান পড়ো, যোগ করো', b: "var m = {'a': 1};\nprint(m['a']);\nm['b'] = 2;" },
  { w: 6, f: 'ডুপ্লিকেট ছাড়া সংগ্রহ', b: 'var s = {1, 2, 3};\nlist.toSet();' },
  { w: 6, f: 'গোনার এক লাইন (frequency)', b: 'count[x] = (count[x] ?? 0) + 1;' },
  { w: 7, f: 'শর্ত মিলিয়ে ছাঁকো, তারপর বদলাও', b: 'list.where((x) => x > 2).map((x) => x * 2).toList()' },
  { w: 7, f: 'সব যোগ করো (দুই উপায়)', b: 'list.reduce((a, b) => a + b)\nlist.fold(0, (s, x) => s + x)' },
  { w: 7, f: 'বড় থেকে ছোট সাজাও', b: 'list.sort((a, b) => b - a);' },
);
