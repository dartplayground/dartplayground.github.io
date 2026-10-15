// আগের টপিকগুলোতে বাড়তি সমস্যা, আর নতুন টপিক: math-date, testing, oop-advanced, records-patterns, json
// সমস্যার ক্রম app.js নিজে ঠিক করে: সহজ → মাঝারি → কঠিন। প্রতিটা সমস্যায় শুধু ওই টপিক পর্যন্ত শেখা জিনিস ব্যবহার হয়েছে।

const more = (id, list) => TOPICS[id].probs.push(...list);

more('setup', [
  { l: 'e', q: 'একটা শিরোনাম "আমার পরিবার", তার নিচে একটা লাইন ({{----------}}), তারপর পরিবারের প্রতিটা সদস্যের নাম আলাদা লাইনে প্রিন্ট করো।', sol: `void main() {
  print('আমার পরিবার');
  print('----------');
  print('আব্বু');
  print('আম্মু');
  print('আপু');
  print('আমি');
}` },
  { l: 'e', q: 'বাক্য "আমি প্রতিদিন কোড শিখি" এর প্রতিটা শব্দ আলাদা লাইনে প্রিন্ট করো।', sol: `void main() {
  print('আমি');
  print('প্রতিদিন');
  print('কোড');
  print('শিখি');
}` },
  { l: 'e', q: "কোড না চালিয়ে বলো output এ কয়টা লাইন হবে, তারপর চালিয়ে মেলাও। ({{print('')}} একটা খালি লাইন প্রিন্ট করে।)", code: `void main() {
  print('এক');
  // print('দুই');
  print('');
  print('তিন'); print('চার');
}`, ans: '৪টা লাইন: "এক", একটা খালি লাইন, "তিন", "চার"।\n"দুই" comment, তাই চলেনি। {{print(\'\')}} কিছু না লিখলেও একটা লাইন নেয়।' },
  { l: 'm', q: 'print দিয়ে এই সপ্তাহের রুটিনের একটা টেবিল বানাও: দিন | বিষয়। কলামগুলো স্পেস দিয়ে সোজা রাখো।', sol: `void main() {
  print('দিন       | বিষয়');
  print('----------+-----------');
  print('শনিবার    | variable');
  print('রবিবার    | string');
  print('সোমবার    | operator');
}` },
  { l: 'm', q: 'একটা ৫ লাইনের ছোট গল্প প্রিন্ট করো। তারপর দ্বিতীয় আর চতুর্থ লাইন comment করে চালাও। গল্পের অর্থ কিভাবে বদলায়?', sol: `void main() {
  print('এক ছিল এক বিড়াল।');
  // print('সে মাছ খেতে খুব ভালোবাসতো।');
  print('একদিন সে নদীর পাড়ে গেল।');
  // print('সেখানে একটা বড় মাছ দেখলো।');
  print('তারপর সে খুশি মনে বাড়ি ফিরলো।');
}` },
]);

more('variables', [
  { l: 'e', q: 'তোমার স্কুলের নাম, প্রতিষ্ঠার সাল, ছাত্র সংখ্যা, আর সরকারি কিনা: ৪টা variable, সঠিক type দিয়ে। প্রিন্ট করো।', sol: `void main() {
  String school = 'আইডিয়াল স্কুল';
  int founded = 1965;
  int students = 2500;
  bool isGovt = false;
  print(school);
  print(founded);
  print(students);
  print(isGovt);
}` },
  { l: 'e', q: '{{const}} দিয়ে "সপ্তাহে দিন" (7) আর "দিনে ঘন্টা" (24) রাখো। এক সপ্তাহে কত ঘন্টা, আরেকটা variable এ রেখে প্রিন্ট করো।', sol: `void main() {
  const daysInWeek = 7;
  const hoursInDay = 24;
  int hoursInWeek = daysInWeek * hoursInDay;
  print(hoursInWeek); // 168
}` },
  { l: 'e', q: 'কোড না চালিয়ে বলো, শেষে কী প্রিন্ট হবে?', code: `void main() {
  int a = 5;
  int b = a;
  a = 10;
  print(b);
}`, ans: '5।\n{{int b = a;}} লেখার সময় a এর মান (5) কপি হয়ে b তে গেছে। পরে a বদলালেও b এর বাক্স বদলায় না। দুইটা আলাদা বাক্স।' },
  { l: 'm', q: 'সকালে তাপমাত্রা 24.5, দুপুরে 31.0, রাতে 22.5। তিনটা double variable বানিয়ে গড় তাপমাত্রা বের করো।', sol: `void main() {
  double morning = 24.5;
  double noon = 31.0;
  double night = 22.5;
  double avg = (morning + noon + night) / 3;
  print(avg); // 26.0
}` },
  { l: 'm', q: 'একজন ছাত্রের বাংলা, ইংরেজি, গণিতের নম্বর তিনটা variable এ। মোট আর গড় আলাদা variable এ রেখে প্রিন্ট করো।', sol: `void main() {
  int bangla = 78;
  int english = 65;
  int math = 92;
  int total = bangla + english + math;
  double avg = total / 3;
  print(total); // 235
  print(avg);   // 78.33333333333333
}` },
  { l: 'h', q: 'কোন লাইনগুলো Error দেবে? কারণ সহ লেখো।', code: `void main() {
  var a = 10;
  dynamic b = 10;
  a = 'দশ';
  b = 'দশ';
  final c = 5;
  c = 6;
}`, ans: "{{a = 'দশ';}} Error: var একবার int ঠিক হয়ে গেছে, String রাখা যাবে না।\n{{b = 'দশ';}} ঠিক: dynamic যেকোনো type নিতে পারে (তাই এটা বিপজ্জনক, ভুল ধরা পড়ে না)।\n{{c = 6;}} Error: final একবার মান পেলে আর বদলায় না।" },
]);

more('strings-basic', [
  { l: 'e', q: 'তোমার ইংরেজি নাম একবার ছোট হাতের অক্ষরে আর একবার বড় হাতের অক্ষরে প্রিন্ট করো।', sol: `void main() {
  String name = 'Rafi Ahmed';
  print(name.toLowerCase()); // rafi ahmed
  print(name.toUpperCase()); // RAFI AHMED
}` },
  { l: 'e', q: "{{'Dhaka'}} আর {{'Bangladesh'}} জোড়া দিয়ে {{'Dhaka, Bangladesh'}} বানাও, তারপর তার length প্রিন্ট করো।", sol: `void main() {
  String city = 'Dhaka', country = 'Bangladesh';
  String full = '$city, $country';
  print(full);        // Dhaka, Bangladesh
  print(full.length); // 17
}` },
  { l: 'e', q: "{{s = 'Hello World'}} এর index 6 এ কোন অক্ষর, আর 'World' কোন index থেকে শুরু?", sol: `void main() {
  String s = 'Hello World';
  print(s[6]);              // W
  print(s.indexOf('World')); // 6
}` },
  { l: 'm', q: "{{'programming'}} থেকে {{'gram'}} অংশটা {{indexOf}} আর {{substring}} দিয়ে বের করো।", sol: `void main() {
  String s = 'programming';
  int start = s.indexOf('gram');           // 3
  print(s.substring(start, start + 4));    // gram
}` },
  { l: 'm', q: "ফোন নম্বর {{'01712345678'}} থেকে প্রথম ৩ অঙ্ক (অপারেটর কোড) আর শেষ ৪ অঙ্ক আলাদা করে প্রিন্ট করো।", hint: 'শেষ ৪টা: {{substring(length - 4)}}। শেষ সংখ্যা না দিলে substring শেষ পর্যন্ত যায়।', sol: `void main() {
  String phone = '01712345678';
  print(phone.substring(0, 3));               // 017
  print(phone.substring(phone.length - 4));   // 5678
}` },
  { l: 'h', q: "{{'Hello World'}} এ 'World' এর জায়গায় 'Dart' বসাও, {{replaceAll}} ছাড়া, শুধু indexOf আর substring দিয়ে।", hint: "আগের অংশ + 'Dart' + পরের অংশ।", sol: `void main() {
  String s = 'Hello World';
  int i = s.indexOf('World');
  String result = s.substring(0, i) + 'Dart' + s.substring(i + 5);
  print(result); // Hello Dart
}` },
]);

more('operators', [
  { l: 'e', q: 'একটা সংখ্যা {{n = 6}} এর বর্গ আর ঘন প্রিন্ট করো।', sol: `void main() {
  int n = 6;
  print(n * n);      // 36
  print(n * n * n);  // 216
}` },
  { l: 'e', q: '1 ডলার = 120 টাকা। 45 ডলার কত টাকা? আর 9000 টাকা কত ডলার?', sol: `void main() {
  const rate = 120;
  print(45 * rate);    // 5400
  print(9000 / rate);  // 75.0
}` },
  { l: 'e', q: '{{a = 15}}, {{b = 20}}। "a আর b সমান?", "a কি b এর চেয়ে বড়?", "a আর b দুইটাই 10 এর বেশি?" তিনটা প্রশ্নের উত্তর bool হিসেবে প্রিন্ট করো।', sol: `void main() {
  int a = 15, b = 20;
  print(a == b);             // false
  print(a > b);              // false
  print(a > 10 && b > 10);   // true
}` },
  { l: 'm', q: '4 অঙ্কের সংখ্যা 2753 এর প্রথম আর শেষ অঙ্কের যোগফল বের করো (2 + 3 = 5)।', sol: `void main() {
  int n = 2753;
  int first = n ~/ 1000;  // 2
  int last = n % 10;      // 3
  print(first + last);    // 5
}` },
  { l: 'm', q: '1000 দিন = কত বছর, কত সপ্তাহ, কত দিন? (বছর = 365 দিন)', sol: `void main() {
  int d = 1000;
  int years = d ~/ 365;        // 2
  int rest = d % 365;          // 270
  int weeks = rest ~/ 7;       // 38
  int days = rest % 7;         // 4
  print('$years বছর $weeks সপ্তাহ $days দিন');
}` },
  { l: 'm', q: 'ক্লাসে 47 জন ছাত্র, প্রতি বেঞ্চে 5 জন বসে। কয়টা বেঞ্চ লাগবে? (if ছাড়া। শেষ বেঞ্চে কম থাকলেও একটা বেঞ্চ লাগে।)', hint: 'উপরের দিকে ভাগ: {{(a + b - 1) ~/ b}}। হাতে করে দেখো কেন কাজ করে।', sol: `void main() {
  int students = 47, perBench = 5;
  int benches = (students + perBench - 1) ~/ perBench;
  print(benches); // 10
}` },
  { l: 'h', q: 'সকাল 9:45 থেকে দুপুর 14:20 পর্যন্ত কত মিনিট?', hint: 'দুইটা সময়কেই "দিনের শুরু থেকে মোট মিনিট" বানাও, তারপর বিয়োগ।', sol: `void main() {
  int start = 9 * 60 + 45;   // 585
  int end = 14 * 60 + 20;    // 860
  int diff = end - start;
  print('$diff মিনিট = \${diff ~/ 60} ঘন্টা \${diff % 60} মিনিট'); // 275 = 4 ঘন্টা 35 মিনিট
}` },
  { l: 'h', q: 'একটা সংখ্যার পরের 10 এর গুণিতক বের করো, if ছাড়া: 37 → 40, 40 → 40, 41 → 50।', sol: `void main() {
  int n = 37;
  print((n + 9) ~/ 10 * 10); // 40
}` },
]);

more('conversion', [
  { l: 'e', q: "{{'3.75'}} কে double বানিয়ে দ্বিগুণ করো।", sol: `void main() {
  double d = double.parse('3.75');
  print(d * 2); // 7.5
}` },
  { l: 'm', q: 'সংখ্যা 98765 এ কয়টা অঙ্ক? (loop ছাড়া, String বানিয়ে)', sol: `void main() {
  int n = 98765;
  print(n.toString().length); // 5
}` },
  { l: 'm', q: '2.678 কে দশমিকের পর ১ ঘর পর্যন্ত দেখাও, আর গোল করে int বানাও।', sol: `void main() {
  double x = 2.678;
  print(x.toStringAsFixed(1)); // 2.7
  print(x.round());            // 3
}` },
]);

more('null-safety', [
  { l: 'e', q: 'কোড না চালিয়ে বলো কী প্রিন্ট হবে।', code: `void main() {
  int? a;
  int? b = 5;
  print(a ?? b ?? 0);
}`, ans: '5।\na null, তাই {{??}} এর পরেরটা দেখে: b = 5, null না, তাই 5। শেষের 0 পর্যন্ত যেতেই হয় না।' },
  { l: 'm', q: "{{String? input}}। input null হলে অথবা খালি হলে 'অতিথি' দেখাও, না হলে input।", sol: `void main() {
  String? input = '';
  String name = (input == null || input.isEmpty) ? 'অতিথি' : input;
  print(name); // অতিথি
}` },
]);

more('if-else', [
  { l: 'e', q: 'তাপমাত্রা 30 এর বেশি হলে "গরম", 15 এর কম হলে "ঠান্ডা", না হলে "আরামদায়ক"।', sol: `void main() {
  int t = 22;
  if (t > 30) {
    print('গরম');
  } else if (t < 15) {
    print('ঠান্ডা');
  } else {
    print('আরামদায়ক');
  }
}` },
  { l: 'e', q: 'একটা সংখ্যা 10 থেকে 50 এর মধ্যে (দুইটা সহ) কিনা বলো।', sol: `void main() {
  int n = 37;
  if (n >= 10 && n <= 50) {
    print('মধ্যে আছে');
  } else {
    print('বাইরে');
  }
}` },
  { l: 'e', q: 'password এর দৈর্ঘ্য 8 এর কম হলে "দুর্বল", না হলে "চলবে"।', sol: `void main() {
  String pass = 'dart12';
  if (pass.length < 8) {
    print('দুর্বল');
  } else {
    print('চলবে');
  }
}` },
  { l: 'm', q: 'বয়স দেখে টিকিটের দাম: 5 এর কম ফ্রি, 5–12 হলে 50 টাকা, 60 বা বেশি হলে 50 টাকা, বাকি সবার 100 টাকা।', sol: `void main() {
  int age = 65;
  int price;
  if (age < 5) {
    price = 0;
  } else if (age <= 12 || age >= 60) {
    price = 50;
  } else {
    price = 100;
  }
  print('টিকিট: $price টাকা');
}` },
  { l: 'm', q: 'দুইটা সংখ্যার কোনটা বড়, আর পার্থক্য কত, এক বাক্যে বলো: "12 বড়, পার্থক্য 5"।', sol: `void main() {
  int a = 7, b = 12;
  if (a > b) {
    print('$a বড়, পার্থক্য \${a - b}');
  } else if (b > a) {
    print('$b বড়, পার্থক্য \${b - a}');
  } else {
    print('সমান');
  }
}` },
  { l: 'm', q: 'একটা ইংরেজি অক্ষর বড় হাতের, ছোট হাতের, নাকি অক্ষরই না (যেমন সংখ্যা)?', hint: "বড় হাতের অক্ষর {{ch.toUpperCase() == ch}} কিন্তু {{ch.toLowerCase() != ch}}।", sol: `void main() {
  String ch = 'g';
  if (ch.toUpperCase() == ch && ch.toLowerCase() != ch) {
    print('বড় হাতের');
  } else if (ch.toLowerCase() == ch && ch.toUpperCase() != ch) {
    print('ছোট হাতের');
  } else {
    print('অক্ষর না');
  }
}` },
  { l: 'h', q: 'দোকানের ছাড়: 5000 টাকার বেশি কিনলে 20%, 1000 এর বেশি হলে 10%, না হলে ছাড় নেই। সদস্য হলে আরো 5% বাড়তি ছাড়। কত টাকা দিতে হবে?', sol: `void main() {
  double amount = 6000;
  bool isMember = true;
  double percent = 0;
  if (amount > 5000) {
    percent = 20;
  } else if (amount > 1000) {
    percent = 10;
  }
  if (isMember) percent += 5;
  double pay = amount - amount * percent / 100;
  print('ছাড় $percent%, দিতে হবে $pay টাকা'); // 25%, 4500.0
}` },
  { l: 'h', q: 'একটা তারিখ (দিন, মাস) সঠিক কিনা বলো। ফেব্রুয়ারি 28 দিন (লিপ ইয়ার বাদ), এপ্রিল/জুন/সেপ্টেম্বর/নভেম্বর 30, বাকিগুলো 31।', sol: `void main() {
  int d = 31, m = 4;
  int maxDay;
  if (m == 2) {
    maxDay = 28;
  } else if (m == 4 || m == 6 || m == 9 || m == 11) {
    maxDay = 30;
  } else {
    maxDay = 31;
  }
  if (m < 1 || m > 12 || d < 1 || d > maxDay) {
    print('ভুল তারিখ');
  } else {
    print('সঠিক তারিখ');
  }
}` },
]);

more('switch-ternary', [
  { l: 'e', q: "switch দিয়ে গ্রেড ({{'A+'}}, {{'A'}}, {{'B'}}, {{'F'}}) দেখে একটা মন্তব্য প্রিন্ট করো।", sol: `void main() {
  String g = 'A';
  switch (g) {
    case 'A+':
      print('অসাধারণ!');
    case 'A':
      print('খুব ভালো');
    case 'B':
      print('ভালো, আরো চেষ্টা করো');
    case 'F':
      print('আবার চেষ্টা করো');
    default:
      print('অজানা গ্রেড');
  }
}` },
  { l: 'm', q: "ট্রাফিক লাইট: {{'লাল'}} → থামো, {{'হলুদ'}} → প্রস্তুত হও, {{'সবুজ'}} → চলো। switch expression দিয়ে।", sol: `void main() {
  String light = 'হলুদ';
  String action = switch (light) {
    'লাল' => 'থামো',
    'হলুদ' => 'প্রস্তুত হও',
    'সবুজ' => 'চলো',
    _ => 'লাইট নষ্ট',
  };
  print(action);
}` },
  { l: 'm', q: 'মাসের নম্বর থেকে ঋতু (switch expression): 12, 1, 2 শীত; 3, 4, 5 বসন্ত; 6, 7, 8 গ্রীষ্ম; 9, 10, 11 শরৎ।', sol: `void main() {
  int m = 7;
  String season = switch (m) {
    12 || 1 || 2 => 'শীত',
    3 || 4 || 5 => 'বসন্ত',
    6 || 7 || 8 => 'গ্রীষ্ম',
    9 || 10 || 11 => 'শরৎ',
    _ => 'ভুল মাস',
  };
  print(season);
}` },
]);

more('for-loop', [
  { l: 'e', q: '1 থেকে 20 এর সব বিজোড় সংখ্যার যোগফল।', out: '100', sol: `void main() {
  int sum = 0;
  for (int i = 1; i <= 20; i += 2) {
    sum += i;
  }
  print(sum);
}` },
  { l: 'e', q: '"আমি Dart শিখছি" ৫ বার প্রিন্ট করো, প্রতিটার আগে নম্বর দিয়ে।', sol: `void main() {
  for (int i = 1; i <= 5; i++) {
    print('$i. আমি Dart শিখছি');
  }
}` },
  { l: 'e', q: '1 থেকে 10 এর বর্গের টেবিল: {{3 এর বর্গ = 9}}', sol: `void main() {
  for (int i = 1; i <= 10; i++) {
    print('$i এর বর্গ = \${i * i}');
  }
}` },
  { l: 'm', q: '1 থেকে 100 এর মধ্যে কয়টা সংখ্যার শেষ অঙ্ক 7?', out: '10', sol: `void main() {
  int count = 0;
  for (int i = 1; i <= 100; i++) {
    if (i % 10 == 7) count++;
  }
  print(count);
}` },
  { l: 'm', q: '2 এর ঘাত 2⁰ থেকে 2¹⁰ পর্যন্ত প্রিন্ট করো: 1, 2, 4, ..., 1024। (গুণ জমানো)', sol: `void main() {
  int p = 1;
  for (int i = 0; i <= 10; i++) {
    print('2^$i = $p');
    p *= 2;
  }
}` },
  { l: 'm', q: "একটা String এর প্রতিটা অক্ষর তার index সহ আলাদা লাইনে প্রিন্ট করো: {{0: D}}, {{1: a}} ...", sol: `void main() {
  String s = 'Dart';
  for (int i = 0; i < s.length; i++) {
    print('$i: \${s[i]}');
  }
}` },
  { l: 'h', q: "1 থেকে 500 এর মধ্যে কয়টা সংখ্যায় অঙ্ক 3 আছে? (যেমন 3, 13, 30, 333)", hint: "{{i.toString().contains('3')}}", out: '176', sol: `void main() {
  int count = 0;
  for (int i = 1; i <= 500; i++) {
    if (i.toString().contains('3')) count++;
  }
  print(count);
}` },
]);

more('while-loop', [
  { l: 'e', q: '100 থেকে শুরু করে প্রতিবার 7 বিয়োগ করো আর প্রিন্ট করো, যতক্ষণ সংখ্যা পজিটিভ থাকে।', sol: `void main() {
  int n = 100;
  while (n > 0) {
    print(n);
    n -= 7;
  }
}` },
  { l: 'm', q: '10000 টাকা ব্যাংকে রাখলে প্রতি বছর 8% সুদ যোগ হয়। কত বছর পর টাকা দ্বিগুণ (20000 বা বেশি) হবে?', out: '10 বছর, তখন 21589 টাকা', sol: `void main() {
  double money = 10000;
  int years = 0;
  while (money < 20000) {
    money += money * 8 / 100;
    years++;
  }
  print('$years বছর, তখন \${money.toStringAsFixed(0)} টাকা');
}` },
  { l: 'm', q: 'একটা সংখ্যায় কয়টা জোড় অঙ্ক আছে? 284719 → 3 (2, 8, 4)', sol: `void main() {
  int n = 284719, count = 0;
  while (n > 0) {
    if ((n % 10) % 2 == 0) count++;
    n ~/= 10;
  }
  print(count); // 3
}` },
  { l: 'm', q: 'একটা সংখ্যার প্রথম অঙ্ক বের করো: 58213 → 5।', hint: 'এক অঙ্ক না হওয়া পর্যন্ত 10 দিয়ে ভাগ করতে থাকো।', sol: `void main() {
  int n = 58213;
  while (n >= 10) {
    n ~/= 10;
  }
  print(n); // 5
}` },
  { l: 'h', q: 'Happy number: অঙ্কগুলোর বর্গের যোগফল নিতে থাকো। 1 এ পৌঁছালে happy, 4 এ পৌঁছালে কখনো 1 হবে না (unhappy)। 19 → 82 → 68 → 100 → 1, happy।', sol: `void main() {
  int n = 19;
  while (n != 1 && n != 4) {
    int sum = 0;
    while (n > 0) {
      int d = n % 10;
      sum += d * d;
      n ~/= 10;
    }
    print(sum);
    n = sum;
  }
  print(n == 1 ? 'happy' : 'happy না');
}` },
]);

more('nested-loop', [
  { l: 'e', q: '4 লাইন, প্রতিটায় {{1 2 3 4}} প্রিন্ট করো।', sol: `void main() {
  for (int i = 1; i <= 4; i++) {
    String line = '';
    for (int j = 1; j <= 4; j++) {
      line += '$j ';
    }
    print(line);
  }
}` },
  { l: 'm', q: 'উল্টো সংখ্যার ত্রিভুজ: 5 4 3 2 1 / 5 4 3 2 / 5 4 3 / 5 4 / 5', hint: 'row i তে 5 থেকে শুরু করে কয়টা? টেবিল বানাও: row 1 → 5টা, row 2 → 4টা।', sol: `void main() {
  for (int i = 1; i <= 5; i++) {
    String line = '';
    for (int j = 5; j >= i; j--) {
      line += '$j ';
    }
    print(line);
  }
}` },
  { l: 'm', q: '1 থেকে 5 এর গুণের গ্রিড: row আর column এর গুণফল।', sol: `void main() {
  for (int r = 1; r <= 5; r++) {
    String line = '';
    for (int c = 1; c <= 5; c++) {
      line += '\${r * c}'.padLeft(4);
    }
    print(line);
  }
}`, note: "{{padLeft(4)}} সংখ্যাকে ৪ ঘর জায়গা দেয়, তাই কলাম সোজা থাকে।" },
  { l: 'h', q: 'দাবার বোর্ড (8×8): ঘর কালো হলে {{#}}, সাদা হলে {{.}}।', hint: 'row + column জোড় হলে এক রং, বিজোড় হলে আরেক রং।', sol: `void main() {
  for (int r = 0; r < 8; r++) {
    String line = '';
    for (int c = 0; c < 8; c++) {
      line += (r + c) % 2 == 0 ? '# ' : '. ';
    }
    print(line);
  }
}` },
  { l: 'h', q: "Pascal's triangle এর প্রথম 6 row: প্রতিটা সংখ্যা উপরের দুইটার যোগফল।", hint: 'row i এর পরের সংখ্যা = আগের সংখ্যা × (i - j) ~/ (j + 1), শুরু 1।', sol: `void main() {
  for (int i = 0; i < 6; i++) {
    String line = ' ' * (6 - i);
    int v = 1;
    for (int j = 0; j <= i; j++) {
      line += '$v ';
      v = v * (i - j) ~/ (j + 1);
    }
    print(line);
  }
}` },
]);

more('functions-basic', [
  { l: 'e', q: '{{isAdult(int age)}} বানাও যা 18 বা বেশি হলে true দেয়।', sol: `bool isAdult(int age) {
  return age >= 18;
}

void main() {
  print(isAdult(20)); // true
  print(isAdult(15)); // false
}` },
  { l: 'e', q: '{{printTable(int n)}} বানাও যা n এর নামতা প্রিন্ট করে। 3 আর 9 এর জন্য ডাকো।', sol: `void printTable(int n) {
  for (int i = 1; i <= 10; i++) {
    print('$n x $i = \${n * i}');
  }
}

void main() {
  printTable(3);
  printTable(9);
}` },
  { l: 'm', q: '{{gcd(a, b)}} function বানাও। তারপর {{lcm(a, b)}} বানাও যা gcd কে ডাকে।', sol: `int gcd(int a, int b) {
  while (b != 0) {
    int t = b;
    b = a % b;
    a = t;
  }
  return a;
}

int lcm(int a, int b) {
  return a * b ~/ gcd(a, b);
}

void main() {
  print(gcd(24, 36)); // 12
  print(lcm(4, 6));   // 12
}` },
  { l: 'h', q: 'যেকোনো দৈর্ঘ্যের Armstrong সংখ্যা: n অঙ্কের সংখ্যার প্রতিটা অঙ্কের n ঘাতের যোগফল = সংখ্যাটা (9474 = 9⁴+4⁴+7⁴+4⁴)। {{countDigits}}, {{power}}, {{isArmstrong}} তিনটা function বানিয়ে 1–10000 এর সব খোঁজো।', sol: `int countDigits(int n) {
  int c = 0;
  while (n > 0) {
    c++;
    n ~/= 10;
  }
  return c;
}

int power(int a, int b) {
  int r = 1;
  for (int i = 0; i < b; i++) r *= a;
  return r;
}

bool isArmstrong(int n) {
  int k = countDigits(n), sum = 0, t = n;
  while (t > 0) {
    sum += power(t % 10, k);
    t ~/= 10;
  }
  return sum == n;
}

void main() {
  for (int i = 1; i <= 10000; i++) {
    if (isArmstrong(i)) print(i);
  }
  // 1-9, 153, 370, 371, 407, 1634, 8208, 9474
}` },
]);

more('parameters', [
  { l: 'e', q: "{{welcome(String name, [String city = 'ঢাকা'])}} বানাও। শহর দিয়ে আর ছাড়া দুইভাবে ডাকো।", sol: `void welcome(String name, [String city = 'ঢাকা']) {
  print('স্বাগতম $name, $city থেকে!');
}

void main() {
  welcome('Rafi');
  welcome('Mitu', 'রাজশাহী');
}` },
  { l: 'm', q: "{{box({int width = 5, int height = 3, String ch = '*'})}} বানাও যা ওই মাপের তারার আয়তক্ষেত্র আঁকে।", sol: `void box({int width = 5, int height = 3, String ch = '*'}) {
  for (int i = 0; i < height; i++) {
    print(ch * width);
  }
}

void main() {
  box();
  box(width: 8, ch: '#');
  box(height: 2);
}` },
]);

more('recursion', [
  { l: 'm', q: 'recursion দিয়ে একটা সংখ্যায় কয়টা অঙ্ক বের করো।', sol: `int digits(int n) {
  if (n < 10) return 1;
  return 1 + digits(n ~/ 10);
}

void main() {
  print(digits(98765)); // 5
}` },
  { l: 'h', q: 'recursion দিয়ে গসাগু: {{gcd(a, 0) = a}}, {{gcd(a, b) = gcd(b, a % b)}}।', sol: `int gcd(int a, int b) => b == 0 ? a : gcd(b, a % b);

void main() {
  print(gcd(48, 18)); // 6
}` },
]);

more('list', [
  { l: 'e', q: 'একটা list এর প্রতিটা সংখ্যা দ্বিগুণ করে নতুন list বানাও।', sol: `void main() {
  var nums = [3, 5, 8];
  var doubled = <int>[];
  for (var n in nums) {
    doubled.add(n * 2);
  }
  print(doubled); // [6, 10, 16]
}` },
  { l: 'e', q: 'list এ কয়টা নেগেটিভ সংখ্যা আছে?', sol: `void main() {
  var nums = [4, -2, 0, -7, 9, -1];
  int count = 0;
  for (var n in nums) {
    if (n < 0) count++;
  }
  print(count); // 3
}` },
  { l: 'm', q: 'দুইটা সমান লম্বা list এর পাশাপাশি উপাদান যোগ করো: [1, 2, 3] আর [4, 5, 6] → [5, 7, 9]।', sol: `void main() {
  var a = [1, 2, 3], b = [4, 5, 6];
  var c = <int>[];
  for (int i = 0; i < a.length; i++) {
    c.add(a[i] + b[i]);
  }
  print(c);
}` },
  { l: 'm', q: 'list এ কোনো সংখ্যা ঠিক গড়ের সমান আছে কিনা? [2, 4, 6] → হ্যাঁ (4)।', sol: `void main() {
  var a = [2, 4, 6];
  int sum = 0;
  for (var x in a) sum += x;
  double avg = sum / a.length;
  bool found = false;
  for (var x in a) {
    if (x == avg) found = true;
  }
  print(found); // true
}` },
  { l: 'h', q: 'list কে দুই ভাগ করো: জোড় index এর উপাদান আর বিজোড় index এর উপাদান। [10, 20, 30, 40, 50] → [10, 30, 50] আর [20, 40]', sol: `void main() {
  var a = [10, 20, 30, 40, 50];
  var even = <int>[], odd = <int>[];
  for (int i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      even.add(a[i]);
    } else {
      odd.add(a[i]);
    }
  }
  print(even);
  print(odd);
}` },
]);

more('set-map', [
  { l: 'e', q: '৩ জনের ফোন নম্বরের Map বানাও। একজনের নম্বর বদলাও, একজন নতুন যোগ করো, একজন মুছে ফেলো। প্রতিবার Map প্রিন্ট করো।', sol: `void main() {
  var phone = {'Rafi': '017', 'Mitu': '018', 'Tanim': '019'};
  phone['Mitu'] = '015';
  print(phone);
  phone['Sadia'] = '016';
  print(phone);
  phone.remove('Tanim');
  print(phone);
}` },
  { l: 'm', q: 'গ্রেডের list থেকে কোন গ্রেড কয়জন পেয়েছে গোনো: [A+, A, A+, B, A, A+] → {A+: 3, A: 2, B: 1}', sol: `void main() {
  var grades = ['A+', 'A', 'A+', 'B', 'A', 'A+'];
  Map<String, int> count = {};
  for (var g in grades) {
    count[g] = (count[g] ?? 0) + 1;
  }
  print(count);
}` },
  { l: 'h', q: 'দুইটা সমান লম্বা list (নাম আর নম্বর) থেকে একটা Map বানাও: [Rafi, Mitu] আর [80, 95] → {Rafi: 80, Mitu: 95}। তারপর 90 এর বেশি পাওয়াদের নাম।', sol: `void main() {
  var names = ['Rafi', 'Mitu', 'Tanim'];
  var marks = [80, 95, 91];
  Map<String, int> result = {};
  for (int i = 0; i < names.length; i++) {
    result[names[i]] = marks[i];
  }
  print(result);
  for (var e in result.entries) {
    if (e.value > 90) print(e.key);
  }
}` },
]);

more('collection-methods', [
  { l: 'e', q: 'নামের list কে কমা দিয়ে জোড়া একটা String বানাও: "Rafi, Mitu, Tanim"।', sol: `void main() {
  var names = ['Rafi', 'Mitu', 'Tanim'];
  print(names.join(', '));
}` },
  { l: 'm', q: 'where আর length দিয়ে কয়জন ফেল (33 এর কম) করেছে।', sol: `void main() {
  var marks = [45, 28, 67, 31, 90];
  print(marks.where((m) => m < 33).length); // 2
}` },
  { l: 'h', q: "map দিয়ে পুরো নামের list থেকে initials এর list: ['Abdur Rahim', 'Mitu Akter'] → ['A.R.', 'M.A.']", sol: `void main() {
  var names = ['Abdur Rahim', 'Mitu Akter'];
  var initials = names.map((n) {
    var parts = n.split(' ');
    return parts.map((p) => '\${p[0]}.').join();
  }).toList();
  print(initials);
}` },
]);

// ---------------- নতুন টপিক ----------------

TOPICS['math-date'] = {
  short: 'Math, Random, DateTime', title: 'dart:math, Random আর DateTime', days: 'দিন ৫–৬',
  goal: 'বর্গমূল, ঘাত, এলোমেলো সংখ্যা আর তারিখ-সময় নিয়ে কাজ করা। খেলা আর বাস্তব সমস্যায় এগুলো সবচেয়ে বেশি লাগে।',
  learn: [
    "Dart এর সাথে কিছু তৈরি টুলবক্স (library) আসে। গণিতের জন্য {{dart:math}}। ব্যবহার করতে ফাইলের উপরে {{import 'dart:math';}} লিখতে হয়।",
    { code: `import 'dart:math';

void main() {
  print(sqrt(16));        // 4.0   বর্গমূল
  print(pow(2, 10));      // 1024  ঘাত
  print(max(7, 3));       // 7
  print(min(7, 3));       // 3
  print(pi);              // 3.141592653589793
  print((-5).abs());      // 5     পরম মান (import লাগে না)
  print(15.clamp(0, 10)); // 10    সীমার মধ্যে আটকে রাখো
}` },
    { h: 'Random: এলোমেলো সংখ্যা' },
    { code: `import 'dart:math';

void main() {
  var rng = Random();
  print(rng.nextInt(6));        // 0 থেকে 5 এর মধ্যে যেকোনো একটা
  print(rng.nextInt(6) + 1);    // 1 থেকে 6: লুডুর ছক্কা!
  print(rng.nextDouble());      // 0.0 থেকে 1.0 এর মধ্যে
  print(rng.nextBool());        // true বা false: কয়েন টস

  var colors = ['লাল', 'নীল', 'সবুজ'];
  print(colors[rng.nextInt(colors.length)]); // list থেকে যেকোনো একটা
}` },
    { warn: '{{nextInt(6)}} দেয় 0 থেকে **5**, 6 কখনো না। 1 থেকে 6 চাইলে {{+ 1}}। এটা খুব কমন ভুল।' },
    { h: 'DateTime আর Duration' },
    { code: `void main() {
  var now = DateTime.now();
  print(now.year);     // এই বছর
  print(now.month);    // মাস (1–12)
  print(now.day);      // তারিখ
  print(now.weekday);  // 1 = সোমবার ... 7 = রবিবার

  var victory = DateTime(1971, 12, 16);
  Duration gap = now.difference(victory);
  print(gap.inDays);   // বিজয় দিবস থেকে কত দিন

  var later = now.add(Duration(days: 100));
  print('100 দিন পর: \${later.day}/\${later.month}/\${later.year}');

  print(victory.isBefore(now)); // true
}` },
    { table: [['জিনিস', 'মানে'], ['{{DateTime(2025, 3, 26)}}', 'নির্দিষ্ট একটা তারিখ'], ['{{a.difference(b)}}', 'দুই তারিখের মাঝের সময় (Duration)'], ['{{Duration(days: 3, hours: 2)}}', 'একটা সময়ের পরিমাণ'], ['{{d.inDays}}, {{d.inHours}}, {{d.inMinutes}}', 'Duration কে সংখ্যায়'], ['{{date.add(...)}}, {{date.subtract(...)}}', 'আগে-পরের তারিখ']] },
  ],
  how: [
    '{{Random()}} প্রতিবার আলাদা সংখ্যা দেয়, তাই এলোমেলো জিনিসের প্রোগ্রাম প্রতিবার আলাদা output দেয়। পরীক্ষা করতে অনেকবার চালাও।',
    'DateTime ভেতরে একটা বড় সংখ্যা রাখে: ১৯৭০ সাল থেকে কত মিলিসেকেন্ড। তাই দুই তারিখ বিয়োগ করা সহজ।',
    '{{pow}} এর ফল {{num}}। int লাগলে {{.toInt()}}।',
  ],
  quiz: [
    { q: '{{Random().nextInt(10)}} কোন সংখ্যা দিতে পারে?', opts: ['1 থেকে 10', '0 থেকে 10', '0 থেকে 9', '1 থেকে 9'], a: 2, why: 'nextInt(n) দেয় 0 থেকে n - 1।' },
    { q: 'Output কী?', code: `import 'dart:math';
void main() {
  print(max(3, min(8, 5)));
}`, opts: ['3', '5', '8', 'Error'], a: 1, why: 'ভেতরেরটা আগে: min(8, 5) = 5, তারপর max(3, 5) = 5।' },
  ],
  probs: [
    { l: 'e', q: 'লুডুর ছক্কা ৫ বার চালো, প্রতিবারের ফল প্রিন্ট করো।', sol: `import 'dart:math';

void main() {
  var rng = Random();
  for (int i = 1; i <= 5; i++) {
    print('চাল $i: \${rng.nextInt(6) + 1}');
  }
}` },
    { l: 'e', q: 'সমকোণী ত্রিভুজের দুই বাহু 3 আর 4। অতিভুজ কত? (পিথাগোরাস: √(a² + b²))', sol: `import 'dart:math';

void main() {
  double a = 3, b = 4;
  print(sqrt(a * a + b * b)); // 5.0
}` },
    { l: 'e', q: '{{max}} আর {{min}} দিয়ে তিনটা সংখ্যার সবচেয়ে বড় আর ছোট বের করো (if ছাড়া)।', sol: `import 'dart:math';

void main() {
  int a = 12, b = 45, c = 7;
  print(max(max(a, b), c)); // 45
  print(min(min(a, b), c)); // 7
}` },
    { l: 'e', q: 'আজকের তারিখ এই ফরম্যাটে প্রিন্ট করো: {{তারিখ: 15/10/2026}}', sol: `void main() {
  var d = DateTime.now();
  print('তারিখ: \${d.day}/\${d.month}/\${d.year}');
}` },
    { l: 'm', q: 'তোমার জন্মতারিখ থেকে আজ পর্যন্ত কত দিন বেঁচে আছো?', sol: `void main() {
  var birth = DateTime(2011, 5, 20);
  int days = DateTime.now().difference(birth).inDays;
  print('$days দিন');
}` },
    { l: 'm', q: 'কয়েন 1000 বার টস করো। কয়বার head (true) এলো? প্রায় অর্ধেক হয় কিনা দেখো।', sol: `import 'dart:math';

void main() {
  var rng = Random();
  int heads = 0;
  for (int i = 0; i < 1000; i++) {
    if (rng.nextBool()) heads++;
  }
  print('head: $heads, tail: \${1000 - heads}');
}` },
    { l: 'm', q: 'আজ থেকে 100 দিন পর কোন তারিখ, আর সেদিন সপ্তাহের কোন দিন?', hint: 'weekday 1–7 কে নামের list এর index বানাও: {{names[weekday - 1]}}।', sol: `void main() {
  var names = ['সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার', 'রবিবার'];
  var d = DateTime.now().add(Duration(days: 100));
  print('\${d.day}/\${d.month}/\${d.year}, \${names[d.weekday - 1]}');
}` },
    { l: 'm', q: '8 অক্ষরের একটা random password বানাও, অক্ষর আর সংখ্যা মিলিয়ে।', sol: `import 'dart:math';

void main() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var rng = Random();
  String pass = '';
  for (int i = 0; i < 8; i++) {
    pass += chars[rng.nextInt(chars.length)];
  }
  print(pass);
}` },
    { l: 'm', q: 'তোমার পরের জন্মদিন আসতে আর কত দিন বাকি?', hint: 'এই বছরের জন্মদিন পার হয়ে গেলে পরের বছরেরটা নাও।', sol: `void main() {
  var now = DateTime.now();
  var today = DateTime(now.year, now.month, now.day);
  var next = DateTime(now.year, 5, 20);
  if (next.isBefore(today)) next = DateTime(now.year + 1, 5, 20);
  print('আর \${next.difference(today).inDays} দিন');
}` },
    { l: 'h', q: 'Monte Carlo দিয়ে π অনুমান: 1×1 বর্গে লাখখানেক random বিন্দু ফেলো। যতগুলো বৃত্তের চতুর্ভাগের ভেতরে পড়ে ({{x² + y² <= 1}}), তার অনুপাত × 4 ≈ π।', sol: `import 'dart:math';

void main() {
  var rng = Random();
  const n = 1000000;
  int inside = 0;
  for (int i = 0; i < n; i++) {
    double x = rng.nextDouble(), y = rng.nextDouble();
    if (x * x + y * y <= 1) inside++;
  }
  print(4 * inside / n); // প্রায় 3.14
}` },
    { l: 'h', q: 'দুইটা ছক্কা একসাথে 10000 বার চালো। যোগফল (2–12) কোনটা কতবার এলো, Map এ রাখো। কোন যোগফল সবচেয়ে বেশি আসে আর কেন?', sol: `import 'dart:math';

void main() {
  var rng = Random();
  Map<int, int> count = {};
  for (int i = 0; i < 10000; i++) {
    int s = rng.nextInt(6) + 1 + rng.nextInt(6) + 1;
    count[s] = (count[s] ?? 0) + 1;
  }
  for (int s = 2; s <= 12; s++) {
    print('$s: \${'#' * ((count[s] ?? 0) ~/ 50)}');
  }
}`, note: '7 সবচেয়ে বেশি আসে, কারণ 7 বানানোর উপায় সবচেয়ে বেশি (1+6, 2+5, 3+4, 4+3, 5+2, 6+1)।' },
    { l: 'h', q: 'এই বছরে কয়টা শুক্রবার আছে? ১ জানুয়ারি থেকে দিন দিন এগিয়ে গোনো।', sol: `void main() {
  int year = DateTime.now().year;
  var d = DateTime(year, 1, 1);
  int fridays = 0;
  while (d.year == year) {
    if (d.weekday == DateTime.friday) fridays++;
    d = d.add(Duration(days: 1));
  }
  print('$year সালে শুক্রবার: $fridays টা');
}` },
  ],
};

TOPICS['testing'] = {
  short: 'নিজের কোড Test করা', title: 'Test: নিজের কোড নিজে পরীক্ষা', days: 'দিন ৭',
  goal: 'কোড "মনে হয় ঠিক" না, প্রমাণ করে ঠিক জানা। ছোট ছোট পরীক্ষা লিখে ভুল আগেই ধরা।',
  learn: [
    'একটা function লিখে একবার চালিয়ে ঠিক দেখলেই সেটা ঠিক না। হয়তো শুধু ওই একটা input এ কাজ করে। পেশাদার প্রোগ্রামাররা **test** লেখে: অনেকগুলো input আর প্রত্যাশিত output, প্রতিবার সব একসাথে চেক।',
    { h: 'নিজের ছোট্ট test যন্ত্র' },
    { code: `void check(String name, Object? actual, Object? expected) {
  if (actual == expected) {
    print('✓ $name');
  } else {
    print('✗ $name: আশা ছিল $expected, পেলাম $actual');
  }
}

int maxOf(List<int> a) {
  int best = a[0];
  for (var x in a) {
    if (x > best) best = x;
  }
  return best;
}

void main() {
  check('সাধারণ', maxOf([3, 9, 2]), 9);
  check('সব নেগেটিভ', maxOf([-5, -2, -9]), -2);
  check('একটাই', maxOf([7]), 7);
  check('সবাই সমান', maxOf([4, 4, 4]), 4);
  check('বড়টা শেষে', maxOf([1, 2, 30]), 30);
}`, out: '✓ সাধারণ\n✓ সব নেগেটিভ\n✓ একটাই\n✓ সবাই সমান\n✓ বড়টা শেষে' },
    { h: 'কোন কোন test লিখবো?' },
    { table: [['ধরন', 'উদাহরণ (maxOf)'], ['**সাধারণ** input', '[3, 9, 2]'], ['**সীমানা** (একদম শুরু/শেষ)', 'বড়টা প্রথমে, বড়টা শেষে'], ['**ছোট** input', 'একটাই জিনিস'], ['**অদ্ভুত** input', 'সব নেগেটিভ, সব সমান, শূন্য'], ['**ভুল** input', 'খালি list (crash করে? করা উচিত?)']] },
    { h: 'আগে test, তারপর কোড' },
    'একটা দারুণ অভ্যাস: function লেখার **আগেই** test গুলো লিখে ফেলো। এতে বাধ্য হয়ে ভাবতে হয় "আসলে কী চাই?"। তারপর কোড লেখো যতক্ষণ না সব ✓ হয়। এটাই লজিক বানানোর আরেকটা উপায়।',
    { h: 'assert' },
    { code: `int square(int x) => x * x;

void main() {
  assert(square(3) == 9);
  assert(square(-4) == 16, 'নেগেটিভের বর্গ পজিটিভ হওয়া উচিত');
  print('সব ঠিক');
}` },
    { tip: "{{assert}} এর শর্ত false হলে প্রোগ্রাম থেমে মেসেজ দেখায়। কম্পিউটারে চালালে {{dart run --enable-asserts main.dart}} লিখতে হয়, না হলে assert চুপচাপ বাদ পড়ে। উপরের {{check}} function সব জায়গায় কাজ করে।" },
  ],
  how: [
    '{{check}} শুধু দুইটা মান মেলায়: যা পেলাম আর যা আশা করেছিলাম। মিললে ✓, না মিললে ✗ আর দুইটাই দেখায়।',
    'কোড বদলানোর পর আবার সব test চালাও। আগে ঠিক ছিল এমন কিছু ভেঙে গেলে সাথে সাথে ধরা পড়বে।',
    '✗ দেখলে সেই input দিয়ে খাতায় dry run করো। ভুল কোথায় সেটা প্রায় সবসময় সেখানেই।',
  ],
  quiz: [
    { q: '{{isEven}} এর জন্য কোন test টা সবচেয়ে বেশি দরকারি যা মানুষ প্রায়ই ভুলে যায়?', opts: ['isEven(4)', 'isEven(7)', 'isEven(0) আর নেগেটিভ', 'isEven(100)'], a: 2, why: '0 আর নেগেটিভ হলো "অদ্ভুত" input। এগুলোতেই লুকানো ভুল থাকে।' },
  ],
  probs: [
    { l: 'e', q: '{{check}} যন্ত্র কপি করো। {{isEven(int n)}} লেখো আর অন্তত ৫টা test দাও (জোড়, বিজোড়, 0, নেগেটিভ জোড়, নেগেটিভ বিজোড়)।', sol: `void check(String name, Object? actual, Object? expected) {
  print(actual == expected ? '✓ $name' : '✗ $name: আশা $expected, পেলাম $actual');
}

bool isEven(int n) => n % 2 == 0;

void main() {
  check('4', isEven(4), true);
  check('7', isEven(7), false);
  check('0', isEven(0), true);
  check('-6', isEven(-6), true);
  check('-3', isEven(-3), false);
}` },
    { l: 'e', q: '{{isLeap(int y)}} এর জন্য test লেখো: 2024 (হ্যাঁ), 2023 (না), 1900 (না), 2000 (হ্যাঁ)। তারপর function লেখো যতক্ষণ না সব ✓।', sol: `void check(String name, Object? actual, Object? expected) {
  print(actual == expected ? '✓ $name' : '✗ $name: আশা $expected, পেলাম $actual');
}

bool isLeap(int y) => (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;

void main() {
  check('2024', isLeap(2024), true);
  check('2023', isLeap(2023), false);
  check('1900', isLeap(1900), false);
  check('2000', isLeap(2000), true);
}` },
    { l: 'm', q: 'এই function এ একটা bug আছে। এমন test লেখো যা ✗ দেখিয়ে bug টা ধরে ফেলে, তারপর ঠিক করো।', code: `int sumTo(int n) {
  int s = 0;
  for (int i = 1; i < n; i++) {
    s += i;
  }
  return s;
}`, sol: `void check(String name, Object? actual, Object? expected) {
  print(actual == expected ? '✓ $name' : '✗ $name: আশা $expected, পেলাম $actual');
}

int sumTo(int n) {
  int s = 0;
  for (int i = 1; i <= n; i++) {   // < ছিল
    s += i;
  }
  return s;
}

void main() {
  check('1', sumTo(1), 1);       // আগে এটা 0 দিত, ✗
  check('4', sumTo(4), 10);
  check('0', sumTo(0), 0);
}`, note: 'ছোট input (n = 1) দিয়ে test করলেই off-by-one bug ধরা পড়ে।' },
    { l: 'm', q: 'আগে test, পরে কোড: {{reverse(String s)}} এর জন্য ৪টা test লেখো (সাধারণ শব্দ, এক অক্ষর, খালি String, palindrome)। তারপর function লেখো।', sol: `void check(String name, Object? actual, Object? expected) {
  print(actual == expected ? '✓ $name' : '✗ $name: আশা $expected, পেলাম $actual');
}

String reverse(String s) {
  String r = '';
  for (int i = s.length - 1; i >= 0; i--) {
    r += s[i];
  }
  return r;
}

void main() {
  check('সাধারণ', reverse('dart'), 'trad');
  check('এক অক্ষর', reverse('a'), 'a');
  check('খালি', reverse(''), '');
  check('palindrome', reverse('madam'), 'madam');
}` },
    { l: 'm', q: '{{average(List<int> a)}} এর জন্য test লেখো। খালি list এ কী হওয়া উচিত ঠিক করো (0? null? Error?), সেটাও test করো।', sol: `void check(String name, Object? actual, Object? expected) {
  print(actual == expected ? '✓ $name' : '✗ $name: আশা $expected, পেলাম $actual');
}

double? average(List<int> a) {
  if (a.isEmpty) return null;   // ঠিক করলাম: খালি হলে null
  int s = 0;
  for (var x in a) s += x;
  return s / a.length;
}

void main() {
  check('সাধারণ', average([2, 4, 6]), 4.0);
  check('দশমিক', average([7, 8]), 7.5);
  check('একটা', average([5]), 5.0);
  check('খালি', average([]), null);
}` },
    { l: 'm', q: 'তোমার আগের সপ্তাহের যেকোনো ৩টা function (যেমন isPrime, factorial, countVowels) নাও। প্রতিটার জন্য অন্তত ৪টা test লেখো, অন্তত একটা "অদ্ভুত" input সহ।', sol: `void check(String name, Object? actual, Object? expected) {
  print(actual == expected ? '✓ $name' : '✗ $name: আশা $expected, পেলাম $actual');
}

bool isPrime(int n) {
  if (n < 2) return false;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

int factorial(int n) {
  int f = 1;
  for (int i = 2; i <= n; i++) f *= i;
  return f;
}

void main() {
  check('prime 2', isPrime(2), true);
  check('prime 1', isPrime(1), false);
  check('prime 9', isPrime(9), false);
  check('prime 97', isPrime(97), true);
  check('fact 0', factorial(0), 1);
  check('fact 1', factorial(1), 1);
  check('fact 5', factorial(5), 120);
  check('fact 10', factorial(10), 3628800);
}` },
    { l: 'h', q: 'test গুলো দেওয়া আছে। এমন {{fizz(int n)}} লেখো যাতে সব ✓ হয়।', code: `check('1', fizz(1), '1');
check('3', fizz(3), 'Fizz');
check('5', fizz(5), 'Buzz');
check('15', fizz(15), 'FizzBuzz');
check('30', fizz(30), 'FizzBuzz');
check('9', fizz(9), 'Fizz');`, sol: `void check(String name, Object? actual, Object? expected) {
  print(actual == expected ? '✓ $name' : '✗ $name: আশা $expected, পেলাম $actual');
}

String fizz(int n) {
  if (n % 15 == 0) return 'FizzBuzz';
  if (n % 3 == 0) return 'Fizz';
  if (n % 5 == 0) return 'Buzz';
  return '$n';
}

void main() {
  check('1', fizz(1), '1');
  check('3', fizz(3), 'Fizz');
  check('5', fizz(5), 'Buzz');
  check('15', fizz(15), 'FizzBuzz');
  check('30', fizz(30), 'FizzBuzz');
  check('9', fizz(9), 'Fizz');
}` },
    { l: 'h', q: 'একটা test list বানাও: প্রতিটা উপাদান {{[input, expected]}}। একটা loop দিয়ে সবগুলো test চালাও, শেষে "৮টার মধ্যে ৮টা পাস" দেখাও। {{digitSum}} দিয়ে চেষ্টা করো।', sol: `int digitSum(int n) {
  int s = 0;
  while (n > 0) {
    s += n % 10;
    n ~/= 10;
  }
  return s;
}

void main() {
  var cases = [
    [0, 0], [5, 5], [10, 1], [99, 18],
    [123, 6], [1000, 1], [9999, 36], [472, 13],
  ];
  int pass = 0;
  for (var c in cases) {
    int got = digitSum(c[0]);
    if (got == c[1]) {
      pass++;
    } else {
      print('✗ \${c[0]}: আশা \${c[1]}, পেলাম $got');
    }
  }
  print('\${cases.length}টার মধ্যে $passটা পাস');
}` },
  ],
};

TOPICS['oop-advanced'] = {
  short: 'static, factory, extension', title: 'Class এর আরো কৌশল: static, factory, operator, extension', days: 'দিন ৬–৭',
  goal: 'বাস্তব কোডে (আর Flutter এ) প্রতিদিন দেখা যায় এমন class এর বাড়তি জিনিসগুলো চেনা আর ব্যবহার করা।',
  learn: [
    { h: 'static: class এর নিজের জিনিস' },
    { code: `class Student {
  static int total = 0;          // সব object মিলিয়ে একটাই
  static const school = 'আইডিয়াল';
  final int id;
  final String name;

  Student(this.name) : id = ++total;   // প্রতিটা নতুন ছাত্র পরের id পায়

  static bool isValidName(String n) => n.trim().length >= 2;
}

void main() {
  var a = Student('Rafi');
  var b = Student('Mitu');
  print('\${a.id} \${b.id}');          // 1 2
  print(Student.total);              // 2
  print(Student.isValidName('X'));   // false
}` },
    { h: 'const constructor' },
    { code: `class Point {
  final int x, y;
  const Point(this.x, this.y);
}

void main() {
  const a = Point(1, 2);
  const b = Point(1, 2);
  print(identical(a, b)); // true: একই object, মেমরি বাঁচে
}` },
    'Flutter এ {{const Text(\'Hi\')}} এর মতো লেখা দেখবে। const object একবারই তৈরি হয়, অ্যাপ দ্রুত চলে।',
    { h: 'factory constructor' },
    'সাধারণ constructor সবসময় নতুন object বানায়। **factory** নিজে ঠিক করতে পারে কী ফেরত দেবে: আগের তৈরি object, অন্য constructor, বা যাচাই করে Error।',
    { code: `class Temperature {
  final double celsius;
  Temperature(this.celsius);

  factory Temperature.fromFahrenheit(double f) {
    return Temperature((f - 32) * 5 / 9);
  }

  factory Temperature.parse(String s) {   // '25C' বা '77F'
    double v = double.parse(s.substring(0, s.length - 1));
    return s.endsWith('F') ? Temperature.fromFahrenheit(v) : Temperature(v);
  }
}

void main() {
  print(Temperature.parse('77F').celsius); // 25.0
}` },
    { h: 'operator: নিজের class এ + আর ==' },
    { code: `class Money {
  final int taka;
  const Money(this.taka);

  Money operator +(Money other) => Money(taka + other.taka);
  bool operator >(Money other) => taka > other.taka;

  @override
  bool operator ==(Object other) => other is Money && other.taka == taka;
  @override
  int get hashCode => taka.hashCode;

  @override
  String toString() => '$taka টাকা';
}

void main() {
  var a = Money(500), b = Money(250);
  print(a + b);                 // 750 টাকা
  print(a > b);                 // true
  print(Money(5) == Money(5));  // true (== না লিখলে false হতো!)
}` },
    { warn: '{{==}} বদলালে {{hashCode}} ও বদলাতে হয়। না হলে Set আর Map এ object ঠিকমতো খুঁজে পাওয়া যায় না।' },
    { h: 'extension: অন্যের class এ নতুন method' },
    { code: `extension NumberTricks on int {
  bool get isPrime {
    if (this < 2) return false;
    for (int i = 2; i * i <= this; i++) {
      if (this % i == 0) return false;
    }
    return true;
  }

  int get digitSum {
    int n = this, s = 0;
    while (n > 0) {
      s += n % 10;
      n ~/= 10;
    }
    return s;
  }
}

extension Fancy on String {
  String get capitalized => isEmpty ? this : this[0].toUpperCase() + substring(1);
}

void main() {
  print(17.isPrime);           // true  (int এ নতুন getter!)
  print(472.digitSum);         // 13
  print('dart'.capitalized);   // Dart
}` },
    { h: 'cascade (..): একই object এ পরপর কাজ' },
    { code: `class Order {
  final List<String> items = [];
  String note = '';
  void add(String item) => items.add(item);
}

void main() {
  var order = Order()
    ..add('বার্গার')
    ..add('কোক')
    ..note = 'ঝাল কম';
  print('\${order.items} (\${order.note})');
}` },
    { h: 'Comparable: নিজের object সাজানো' },
    { code: `class Player implements Comparable<Player> {
  final String name;
  final int score;
  Player(this.name, this.score);

  @override
  int compareTo(Player other) => other.score - score;   // বেশি স্কোর আগে

  @override
  String toString() => '$name($score)';
}

void main() {
  var list = [Player('A', 40), Player('B', 90), Player('C', 65)];
  list.sort();     // compareTo নিজেই ব্যবহার হয়
  print(list);     // [B(90), C(65), A(40)]
}` },
  ],
  how: [
    '{{static}} জিনিস object এর না, class এর। তাই {{Student.total}} লিখে ডাকো, কোনো object লাগে না।',
    '{{a + b}} লিখলে Dart আসলে {{a.+(b)}} ডাকে। তাই {{operator +}} লিখলে নিজের class এ + কাজ করে।',
    'extension আসল class বদলায় না। Dart শুধু জানে "int এ isPrime লিখলে এই কোড চালাও"।',
    '{{..}} প্রতিবার object টাই ফেরত দেয়, method এর ফল না। তাই পরপর লেখা যায়।',
  ],
  quiz: [
    { q: 'Output কী?', code: `class C {
  static int n = 0;
  C() { n++; }
}
void main() {
  C(); C(); C();
  print(C.n);
}`, opts: ['0', '1', '3', 'Error'], a: 2, why: 'static n সব object এর মধ্যে একটাই, ৩ বার বেড়েছে।' },
    { q: '{{==}} override না করলে {{Money(5) == Money(5)}} কী দেয়?', opts: ['true', 'false', 'Error', 'null'], a: 1, why: 'default {{==}} দেখে দুইটা একই object কিনা। এরা দুইটা আলাদা object, মান এক হলেও।' },
  ],
  probs: [
    { l: 'e', q: '{{Ticket}} class: static counter দিয়ে প্রতিটা নতুন টিকিট পরের নম্বর পাবে (101, 102, ...)।', sol: `class Ticket {
  static int _next = 101;
  final int number;
  final String name;
  Ticket(this.name) : number = _next++;
}

void main() {
  for (var n in ['Rafi', 'Mitu', 'Tanim']) {
    var t = Ticket(n);
    print('\${t.name}: টিকিট \${t.number}');
  }
}` },
    { l: 'e', q: "String এ extension বানাও: {{isPalindrome}} getter আর {{reversed}} getter। {{'level'.isPalindrome}} → true।", sol: `extension StringTricks on String {
  String get reversed => split('').reversed.join();
  bool get isPalindrome => toLowerCase() == toLowerCase().reversed;
}

void main() {
  print('level'.isPalindrome); // true
  print('Dart'.reversed);      // traD
}` },
    { l: 'e', q: 'List<int> এ extension: {{sum}} আর {{average}} getter।', sol: `extension Stats on List<int> {
  int get sum => fold(0, (s, x) => s + x);
  double get average => isEmpty ? 0 : sum / length;
}

void main() {
  var marks = [80, 65, 92];
  print(marks.sum);      // 237
  print(marks.average);  // 79.0
}` },
    { l: 'm', q: '{{Vector}} class (x, y): {{+}}, {{-}}, {{*}} (সংখ্যা দিয়ে গুণ), {{==}}, toString। {{Vector(1, 2) + Vector(3, 4)}} → {{(4, 6)}}', sol: `class Vector {
  final double x, y;
  const Vector(this.x, this.y);

  Vector operator +(Vector o) => Vector(x + o.x, y + o.y);
  Vector operator -(Vector o) => Vector(x - o.x, y - o.y);
  Vector operator *(double k) => Vector(x * k, y * k);

  @override
  bool operator ==(Object o) => o is Vector && o.x == x && o.y == y;
  @override
  int get hashCode => Object.hash(x, y);
  @override
  String toString() => '($x, $y)';
}

void main() {
  var a = Vector(1, 2), b = Vector(3, 4);
  print(a + b);              // (4.0, 6.0)
  print(b - a);              // (2.0, 2.0)
  print(a * 3);              // (3.0, 6.0)
  print(a + b == Vector(4, 6)); // true
}` },
    { l: 'm', q: "{{Time}} class এ {{factory Time.parse(String s)}} বানাও ({{'09:30'}} থেকে), আর {{operator <}} যাতে দুইটা সময় তুলনা করা যায়।", sol: `class Time {
  final int h, m;
  Time(this.h, this.m);

  factory Time.parse(String s) {
    var p = s.split(':');
    return Time(int.parse(p[0]), int.parse(p[1]));
  }

  int get minutes => h * 60 + m;
  bool operator <(Time o) => minutes < o.minutes;
}

void main() {
  var a = Time.parse('09:30'), b = Time.parse('14:05');
  print(a < b); // true
  print(b < a); // false
}` },
    { l: 'm', q: '{{Student}} class এ Comparable বানাও: gpa বেশি আগে, gpa সমান হলে নাম অনুযায়ী। {{list.sort()}} দিয়ে সাজাও।', sol: `class Student implements Comparable<Student> {
  final String name;
  final double gpa;
  Student(this.name, this.gpa);

  @override
  int compareTo(Student o) {
    int c = o.gpa.compareTo(gpa);
    return c != 0 ? c : name.compareTo(o.name);
  }

  @override
  String toString() => '$name($gpa)';
}

void main() {
  var list = [Student('Tanim', 4.5), Student('Mitu', 5.0), Student('Arif', 4.5)];
  list.sort();
  print(list); // [Mitu(5.0), Arif(4.5), Tanim(4.5)]
}` },
    { l: 'm', q: 'cascade দিয়ে একটা {{Profile}} object বানাও আর কয়েকটা field আর list একসাথে ভরো, এক statement এ।', sol: `class Profile {
  String name = '';
  int age = 0;
  final List<String> hobbies = [];
}

void main() {
  var p = Profile()
    ..name = 'Rafi'
    ..age = 14
    ..hobbies.add('ক্রিকেট')
    ..hobbies.add('কোডিং');
  print('\${p.name}, \${p.age}, \${p.hobbies}');
}` },
    { l: 'h', q: 'Singleton: {{Logger}} class যেটার সবসময় একটাই object থাকবে। {{factory}} দিয়ে আগে বানানো object ফেরত দাও। দুইবার {{Logger()}} ডেকে {{identical}} দিয়ে প্রমাণ করো।', sol: `class Logger {
  static final Logger _only = Logger._internal();
  final List<String> lines = [];

  Logger._internal();
  factory Logger() => _only;

  void log(String msg) => lines.add(msg);
}

void main() {
  var a = Logger();
  var b = Logger();
  a.log('শুরু');
  b.log('শেষ');
  print(identical(a, b)); // true
  print(a.lines);         // [শুরু, শেষ]
}` },
    { l: 'h', q: '{{Fraction}} (ভগ্নাংশ) class: সবসময় লঘিষ্ঠ আকারে রাখো (2/4 → 1/2), {{+}}, {{*}}, {{==}} আর toString। 1/2 + 1/3 = 5/6।', sol: `class Fraction {
  final int num, den;

  factory Fraction(int n, int d) {
    int g = _gcd(n.abs(), d.abs());
    if (d < 0) {
      n = -n;
      d = -d;
    }
    return Fraction._(n ~/ g, d ~/ g);
  }
  Fraction._(this.num, this.den);

  static int _gcd(int a, int b) => b == 0 ? a : _gcd(b, a % b);

  Fraction operator +(Fraction o) => Fraction(num * o.den + o.num * den, den * o.den);
  Fraction operator *(Fraction o) => Fraction(num * o.num, den * o.den);

  @override
  bool operator ==(Object o) => o is Fraction && o.num == num && o.den == den;
  @override
  int get hashCode => Object.hash(num, den);
  @override
  String toString() => '$num/$den';
}

void main() {
  print(Fraction(2, 4));                     // 1/2
  print(Fraction(1, 2) + Fraction(1, 3));    // 5/6
  print(Fraction(2, 3) * Fraction(3, 4));    // 1/2
  print(Fraction(1, 2) == Fraction(3, 6));   // true
}` },
  ],
};

TOPICS['records-patterns'] = {
  short: 'Record ও Pattern', title: 'Record আর Pattern matching (Dart 3)', days: 'দিন ৪–৫',
  goal: 'class না বানিয়েই কয়েকটা মান একসাথে রাখা, function থেকে একাধিক মান ফেরত দেওয়া, আর pattern দিয়ে ডাটা খুলে দেখা।',
  learn: [
    { h: 'Record: কয়েকটা মান এক প্যাকেটে' },
    'function থেকে একটা মানই return করা যায়। কিন্তু যদি সবচেয়ে ছোট আর সবচেয়ে বড় দুইটাই ফেরত দিতে চাও? আগে class বানাতে হতো। এখন **record**।',
    { code: `(int, int) minMax(List<int> a) {
  int lo = a[0], hi = a[0];
  for (var x in a) {
    if (x < lo) lo = x;
    if (x > hi) hi = x;
  }
  return (lo, hi);                 // দুইটা মান একসাথে
}

void main() {
  var r = minMax([4, 9, 1, 7]);
  print(r);                        // (1, 9)
  print(r.$1);                     // 1   প্রথমটা
  print(r.$2);                     // 9   দ্বিতীয়টা

  var (lo, hi) = minMax([4, 9, 1, 7]);   // সরাসরি খুলে দুইটা variable
  print('ছোট $lo, বড় $hi');
}` },
    { h: 'নাম দেওয়া field' },
    { code: `({String name, int age}) getUser() => (name: 'Rafi', age: 14);

void main() {
  var u = getUser();
  print(u.name);       // Rafi
  print(u.age);        // 14

  var (:name, :age) = getUser();   // নাম ধরে খোলা
  print('$name $age');
}` },
    { h: 'এক লাইনে swap' },
    { code: `void main() {
  var a = 1, b = 2;
  (a, b) = (b, a);     // temp লাগে না!
  print('$a $b');      // 2 1
}` },
    { h: 'Pattern: switch আরো শক্তিশালী' },
    { code: `String describe(Object x) => switch (x) {
      0 => 'শূন্য',
      int n when n < 0 => 'নেগেটিভ সংখ্যা $n',
      int n => 'পজিটিভ সংখ্যা $n',
      String s when s.isEmpty => 'খালি লেখা',
      String s => 'লেখা: $s',
      [] => 'খালি list',
      [var only] => 'একটাই জিনিসের list: $only',
      [var first, ...] => 'list, প্রথমটা $first',
      _ => 'অন্য কিছু',
    };

void main() {
  print(describe(-3));
  print(describe('Dart'));
  print(describe([7]));
  print(describe([1, 2, 3]));
}` },
    { table: [['Pattern', 'মেলে যদি'], ['{{0}}, {{\'হ্যাঁ\'}}', 'ঠিক এই মান'], ['{{int n}}', 'int হয়, আর মানটা n এ রাখো'], ['{{> 0}}, {{>= 90}}', 'তুলনা সত্য হয়'], ['{{1 || 2}}', 'যেকোনো একটা'], ['{{... when শর্ত}}', 'pattern মেলে আর শর্তও সত্য'], ['{{[a, b]}}', 'ঠিক দুই জিনিসের list'], ['{{[first, ...rest]}}', 'অন্তত একটা জিনিস; বাকিগুলো rest এ'], ['{{ {\'name\': String n} }}', 'Map এ name আছে আর সেটা String'], ['{{(x, y)}}', 'দুই মানের record'], ['{{_}}', 'যেকোনো কিছু']] },
    { h: 'if-case: Map থেকে নিরাপদে বের করা' },
    { code: `void main() {
  Map<String, Object> data = {'name': 'Mitu', 'age': 12};
  if (data case {'name': String name, 'age': int age}) {
    print('$name এর বয়স $age');
  } else {
    print('ডাটা ঠিক নেই');
  }
}` },
    { h: 'sealed class: সব ধরন সামলানো বাধ্যতামূলক' },
    { code: `sealed class Shape {}
class Circle extends Shape {
  final double r;
  Circle(this.r);
}
class Square extends Shape {
  final double side;
  Square(this.side);
}

double area(Shape s) => switch (s) {
      Circle(r: var r) => 3.1416 * r * r,
      Square(side: var a) => a * a,
      // নতুন একটা Shape যোগ করলে এখানে না লিখলে Dart Error দেবে!
    };

void main() {
  print(area(Circle(1)));
  print(area(Square(3)));
}` },
  ],
  how: [
    'record হলো হালকা, নামহীন একটা class এর মতো। মানগুলো ক্রমে থাকে ({{$1}}, {{$2}}) অথবা নামে।',
    'pattern দুইটা কাজ একসাথে করে: **মেলায়** (এটা কি int? list এ কি ২টা জিনিস?) আর **খোলে** (মানটা n এ রাখো)।',
    'switch উপর থেকে প্রথম মেলা pattern টা নেয়, তাই নির্দিষ্টগুলো আগে, সাধারণগুলো (যেমন {{int n}} বা {{_}}) পরে।',
    'sealed class এ Dart জানে সব সন্তান কারা, তাই কোনোটা বাদ পড়লে কোড চালানোর আগেই জানিয়ে দেয়।',
  ],
  quiz: [
    { q: 'Output কী?', code: `var r = (3, 'হ্যাঁ', true);
print(r.$2);`, opts: ['3', 'হ্যাঁ', 'true', 'Error'], a: 1, why: '{{$1}} = 3, {{$2}} = হ্যাঁ। গণনা 1 থেকে, list এর মতো 0 থেকে না।' },
    { q: 'describe(5) কী দেবে?', code: `String describe(int n) => switch (n) {
  < 0 => 'নেগেটিভ',
  0 => 'শূন্য',
  < 10 => 'ছোট',
  _ => 'বড়',
};`, opts: ['নেগেটিভ', 'শূন্য', 'ছোট', 'বড়'], a: 2, why: 'উপর থেকে: 5 < 0? না। 5 == 0? না। 5 < 10? হ্যাঁ।' },
  ],
  probs: [
    { l: 'e', q: '{{divide(int a, int b)}} বানাও যা record এ ভাগফল আর ভাগশেষ দুইটাই ফেরত দেয়। {{var (q, r) = divide(17, 5);}}', sol: `(int, int) divide(int a, int b) => (a ~/ b, a % b);

void main() {
  var (q, r) = divide(17, 5);
  print('ভাগফল $q, ভাগশেষ $r'); // 3, 2
}` },
    { l: 'e', q: 'record দিয়ে তিনটা variable ঘোরাও: a, b, c = 1, 2, 3 → 2, 3, 1, এক লাইনে।', sol: `void main() {
  var a = 1, b = 2, c = 3;
  (a, b, c) = (b, c, a);
  print('$a $b $c'); // 2 3 1
}` },
    { l: 'e', q: 'নামসহ record: {{({String name, double gpa})}} এর একটা list বানাও, সবার নাম আর gpa প্রিন্ট করো।', sol: `void main() {
  List<({String name, double gpa})> students = [
    (name: 'Rafi', gpa: 4.5),
    (name: 'Mitu', gpa: 5.0),
  ];
  for (var s in students) {
    print('\${s.name}: \${s.gpa}');
  }
}` },
    { l: 'm', q: 'switch expression আর তুলনা pattern দিয়ে নম্বর থেকে গ্রেড: {{>= 80 => \'A+\'}} ইত্যাদি।', sol: `String grade(int m) => switch (m) {
      < 0 || > 100 => 'ভুল নম্বর',
      >= 80 => 'A+',
      >= 70 => 'A',
      >= 60 => 'A-',
      >= 50 => 'B',
      >= 33 => 'C',
      _ => 'F',
    };

void main() {
  for (var m in [95, 72, 40, 10, 120]) {
    print('$m: \${grade(m)}');
  }
}` },
    { l: 'm', q: "{{'2:45'}} থেকে record {{(int h, int m)}} বানাও, তারপর মোট মিনিট।", sol: `(int, int) parseTime(String s) {
  var p = s.split(':');
  return (int.parse(p[0]), int.parse(p[1]));
}

void main() {
  var (h, m) = parseTime('2:45');
  print(h * 60 + m); // 165
}` },
    { l: 'm', q: 'বিন্দু {{(x, y)}} কোন চতুর্ভাগে আছে, switch আর record pattern দিয়ে: প্রথম, দ্বিতীয়, তৃতীয়, চতুর্থ, অক্ষের উপর, কেন্দ্র।', sol: `String quadrant((int, int) p) => switch (p) {
      (0, 0) => 'কেন্দ্র',
      (0, _) || (_, 0) => 'অক্ষের উপর',
      (> 0, > 0) => 'প্রথম',
      (< 0, > 0) => 'দ্বিতীয়',
      (< 0, < 0) => 'তৃতীয়',
      _ => 'চতুর্থ',
    };

void main() {
  for (var p in [(3, 4), (-2, 5), (-1, -1), (4, -3), (0, 7), (0, 0)]) {
    print('$p: \${quadrant(p)}');
  }
}` },
    { l: 'm', q: 'list pattern দিয়ে recursion: {{[]}} হলে 0, {{[first, ...rest]}} হলে first + sum(rest)।', sol: `int sum(List<int> a) => switch (a) {
      [] => 0,
      [var first, ...var rest] => first + sum(rest),
    };

void main() {
  print(sum([4, 8, 15, 16, 23, 42])); // 108
}` },
    { l: 'h', q: "Map এর ডাটা যাচাই: if-case দিয়ে দেখো {{ {'name': String, 'marks': List<int>} }} আছে কিনা, থাকলে গড় দেখাও, না থাকলে 'ডাটা ভুল'।", sol: `void show(Map<String, Object> data) {
  if (data case {'name': String name, 'marks': List<int> marks} when marks.isNotEmpty) {
    double avg = marks.reduce((a, b) => a + b) / marks.length;
    print('$name: গড় \${avg.toStringAsFixed(1)}');
  } else {
    print('ডাটা ভুল');
  }
}

void main() {
  show({'name': 'Rafi', 'marks': [80, 90, 70]});
  show({'name': 'Mitu'});
  show({'name': 5, 'marks': [1]});
}` },
    { l: 'h', q: 'sealed class দিয়ে ব্যাংক লেনদেন: {{Deposit(amount)}}, {{Withdraw(amount)}}, {{Transfer(amount, to)}}। একটা লেনদেনের list থেকে switch দিয়ে শেষ balance বের করো।', sol: `sealed class Tx {}
class Deposit extends Tx {
  final int amount;
  Deposit(this.amount);
}
class Withdraw extends Tx {
  final int amount;
  Withdraw(this.amount);
}
class Transfer extends Tx {
  final int amount;
  final String to;
  Transfer(this.amount, this.to);
}

void main() {
  var txs = [Deposit(1000), Withdraw(200), Transfer(300, 'Mitu'), Deposit(50)];
  int balance = 0;
  for (var t in txs) {
    switch (t) {
      case Deposit(:var amount):
        balance += amount;
      case Withdraw(:var amount):
        balance -= amount;
      case Transfer(:var amount, :var to):
        balance -= amount;
        print('$to কে $amount পাঠালাম');
    }
  }
  print('balance: $balance'); // 550
}` },
  ],
};

TOPICS['json'] = {
  short: 'JSON', title: 'JSON: অ্যাপ আর ইন্টারনেটের ডাটার ভাষা', days: 'দিন ১–২',
  goal: 'JSON লেখা পড়া করা, আর JSON কে নিজের class এ বদলানো (Flutter এ API থেকে ডাটা আনার সময় এটা প্রতিদিন লাগে)।',
  learn: [
    'ইন্টারনেট থেকে ডাটা আনলে সেটা আসে লেখা (String) হিসেবে, একটা নির্দিষ্ট ফরম্যাটে: **JSON**। দেখতে প্রায় Dart এর Map আর List এর মতো।',
    { code: `{
  "name": "Rafi",
  "age": 14,
  "isStudent": true,
  "marks": [80, 92, 75],
  "address": { "city": "Dhaka", "zip": "1207" }
}` },
    { list: ['key সবসময় {{"double quote"}} এ।', 'মান হতে পারে: লেখা, সংখ্যা, true/false, null, list {{[ ]}}, অথবা আরেকটা object {{ { } }}।'] },
    { h: 'jsonDecode: লেখা থেকে Map' },
    { code: `import 'dart:convert';

void main() {
  String text = '{"name": "Rafi", "age": 14, "marks": [80, 92, 75]}';
  Map<String, dynamic> data = jsonDecode(text);

  print(data['name']);          // Rafi
  int age = data['age'];
  List marks = data['marks'];
  print(age + 1);               // 15
  print(marks.length);          // 3
}` },
    { h: 'jsonEncode: Map থেকে লেখা' },
    { code: `import 'dart:convert';

void main() {
  var user = {'name': 'Mitu', 'age': 12, 'hobbies': ['আঁকা', 'গান']};
  String text = jsonEncode(user);
  print(text);   // {"name":"Mitu","age":12,"hobbies":["আঁকা","গান"]}

  var pretty = JsonEncoder.withIndent('  ').convert(user);
  print(pretty); // সুন্দর করে সাজানো
}` },
    { h: 'নিজের class এ বদলানো: fromJson আর toJson' },
    'Map এ {{data[\'nmae\']}} বানান ভুল করলে কেউ ধরে না, শুধু null আসে। তাই JSON কে একটা class এ বদলে নাও। তখন ভুল বানানে লাল দাগ পড়বে।',
    { code: `import 'dart:convert';

class Student {
  final String name;
  final int age;
  final List<int> marks;

  Student({required this.name, required this.age, required this.marks});

  factory Student.fromJson(Map<String, dynamic> j) => Student(
        name: j['name'] as String,
        age: j['age'] as int,
        marks: (j['marks'] as List).cast<int>(),
      );

  Map<String, dynamic> toJson() => {'name': name, 'age': age, 'marks': marks};

  double get average => marks.reduce((a, b) => a + b) / marks.length;
}

void main() {
  String text = '[{"name":"Rafi","age":14,"marks":[80,90]},{"name":"Mitu","age":12,"marks":[95,85]}]';
  List list = jsonDecode(text);
  var students = list.map((j) => Student.fromJson(j)).toList();

  for (var s in students) {
    print('\${s.name}: \${s.average}');
  }
  print(jsonEncode(students.first.toJson()));
}` },
    { warn: 'ভুল JSON (যেমন key তে quote নেই, শেষে বাড়তি কমা) দিলে {{jsonDecode}} {{FormatException}} দেয়। বাইরে থেকে আসা ডাটা সবসময় try/catch এ রাখো।' },
  ],
  how: [
    '{{jsonDecode}} লেখাটা অক্ষর ধরে পড়ে: {{ { }} দেখলে Map, {{[}} দেখলে List, quote দেখলে String বানায়।',
    'ফল {{dynamic}}, কারণ Dart আগে থেকে জানে না ভেতরে কী আছে। তাই {{as int}} দিয়ে বলে দাও, বা fromJson এ একবারে বদলে নাও।',
    '{{jsonEncode}} উল্টো কাজ: Map/List/String/সংখ্যা/bool থেকে JSON লেখা বানায়। নিজের class হলে আগে {{toJson()}} দিয়ে Map বানাতে হয়।',
  ],
  quiz: [
    { q: 'এর মধ্যে কোনটা ঠিক JSON?', opts: ["{name: 'Rafi'}", '{"name": "Rafi"}', "{'name': 'Rafi'}", '{"name": "Rafi",}'], a: 1, why: 'JSON এ key আর লেখা দুইটাই double quote এ, আর শেষে বাড়তি কমা চলে না।' },
    { q: "{{jsonDecode('[1, 2, 3]')}} কী ফেরত দেয়?", opts: ['String', 'Map', 'List', 'int'], a: 2, why: '{{[ ]}} মানে list।' },
  ],
  probs: [
    { l: 'e', q: "JSON {{'{\"city\": \"Sylhet\", \"temp\": 24.5}'}} decode করে শহর আর তাপমাত্রা প্রিন্ট করো।", sol: `import 'dart:convert';

void main() {
  var data = jsonDecode('{"city": "Sylhet", "temp": 24.5}');
  print('\${data['city']}: \${data['temp']}°C');
}` },
    { l: 'e', q: 'একটা বইয়ের Map (title, author, price, tags list) বানিয়ে jsonEncode করো, তারপর আবার decode করে title প্রিন্ট করো।', sol: `import 'dart:convert';

void main() {
  var book = {'title': 'হিমু', 'author': 'হুমায়ূন আহমেদ', 'price': 200, 'tags': ['উপন্যাস', 'মজার']};
  String text = jsonEncode(book);
  print(text);
  var back = jsonDecode(text);
  print(back['title']);
}` },
    { l: 'e', q: "JSON list {{'[5, 12, 8, 20]'}} decode করে যোগফল বের করো।", sol: `import 'dart:convert';

void main() {
  List nums = jsonDecode('[5, 12, 8, 20]');
  int sum = 0;
  for (var n in nums) sum += n as int;
  print(sum); // 45
}` },
    { l: 'm', q: '{{Book}} class বানাও (title, author, price) সাথে {{fromJson}} আর {{toJson}}। JSON লেখা থেকে object, তারপর আবার JSON।', sol: `import 'dart:convert';

class Book {
  final String title, author;
  final double price;
  Book(this.title, this.author, this.price);

  factory Book.fromJson(Map<String, dynamic> j) =>
      Book(j['title'], j['author'], (j['price'] as num).toDouble());

  Map<String, dynamic> toJson() => {'title': title, 'author': author, 'price': price};
}

void main() {
  var b = Book.fromJson(jsonDecode('{"title":"দেবদাস","author":"শরৎচন্দ্র","price":150}'));
  print('\${b.title} - \${b.price}');
  print(jsonEncode(b.toJson()));
}`, note: "{{(j['price'] as num).toDouble()}}: JSON এ 150 আসে int হিসেবে, 150.5 আসে double হিসেবে। num হিসেবে নিয়ে double বানালে দুইটাই চলে।" },
    { l: 'm', q: 'ছাত্রদের JSON list থেকে সবার গড় নম্বর আর সর্বোচ্চ নম্বরধারীর নাম।', code: `[{"name":"Rafi","marks":78},{"name":"Mitu","marks":92},{"name":"Tanim","marks":85}]`, sol: `import 'dart:convert';

void main() {
  String text = '[{"name":"Rafi","marks":78},{"name":"Mitu","marks":92},{"name":"Tanim","marks":85}]';
  List list = jsonDecode(text);
  int total = 0;
  Map best = list[0];
  for (Map s in list) {
    total += s['marks'] as int;
    if (s['marks'] > best['marks']) best = s;
  }
  print('গড়: \${(total / list.length).toStringAsFixed(1)}');
  print('সেরা: \${best['name']}');
}` },
    { l: 'm', q: 'ভেতরে ভেতরে (nested) JSON: user এর address এর city বের করো, আর phones list এর দ্বিতীয় নম্বর।', code: `{"name":"Rafi","address":{"city":"Dhaka","area":"Mirpur"},"phones":["017","018"]}`, sol: `import 'dart:convert';

void main() {
  var u = jsonDecode('{"name":"Rafi","address":{"city":"Dhaka","area":"Mirpur"},"phones":["017","018"]}');
  print(u['address']['city']); // Dhaka
  print(u['phones'][1]);       // 018
}` },
    { l: 'm', q: 'ভুল JSON try/catch দিয়ে সামলাও: তিনটা লেখা দাও, একটা ঠিক, দুইটা ভুল। প্রতিটার জন্য "ঠিক" বা "ভুল JSON" দেখাও।', sol: `import 'dart:convert';

void main() {
  var inputs = ['{"a": 1}', "{'a': 1}", '{"a": 1,}'];
  for (var s in inputs) {
    try {
      jsonDecode(s);
      print('$s → ঠিক');
    } on FormatException {
      print('$s → ভুল JSON');
    }
  }
}` },
    { l: 'h', q: 'দোকানের পণ্যের JSON থেকে: 100 টাকার কম দামের পণ্যের নাম, প্রতিটা category তে কয়টা পণ্য (Map), আর সব মিলিয়ে stock এর মোট দাম।', code: `[{"name":"কলম","price":12,"category":"স্টেশনারি","stock":50},
 {"name":"খাতা","price":60,"category":"স্টেশনারি","stock":30},
 {"name":"চকলেট","price":120,"category":"খাবার","stock":10},
 {"name":"বিস্কুট","price":40,"category":"খাবার","stock":25}]`, sol: `import 'dart:convert';

class Product {
  final String name, category;
  final int price, stock;
  Product(this.name, this.price, this.category, this.stock);
  factory Product.fromJson(Map<String, dynamic> j) =>
      Product(j['name'], j['price'], j['category'], j['stock']);
}

void main() {
  String text = '''[{"name":"কলম","price":12,"category":"স্টেশনারি","stock":50},
 {"name":"খাতা","price":60,"category":"স্টেশনারি","stock":30},
 {"name":"চকলেট","price":120,"category":"খাবার","stock":10},
 {"name":"বিস্কুট","price":40,"category":"খাবার","stock":25}]''';
  var items = (jsonDecode(text) as List).map((j) => Product.fromJson(j)).toList();

  print(items.where((p) => p.price < 100).map((p) => p.name).toList());

  Map<String, int> perCat = {};
  for (var p in items) {
    perCat[p.category] = (perCat[p.category] ?? 0) + 1;
  }
  print(perCat);

  int value = items.fold(0, (s, p) => s + p.price * p.stock);
  print('stock এর মোট দাম: $value টাকা'); // 4600
}` },
    { l: 'h', q: 'round-trip: {{Student}} এর list বানাও, jsonEncode করে String বানাও (যেন ফাইলে সেভ করছো), তারপর সেই String থেকে আবার list বানাও। দুইটা মিলে কিনা প্রমাণ করো।', sol: `import 'dart:convert';

class Student {
  final String name;
  final int roll;
  Student(this.name, this.roll);
  factory Student.fromJson(Map<String, dynamic> j) => Student(j['name'], j['roll']);
  Map<String, dynamic> toJson() => {'name': name, 'roll': roll};
}

void main() {
  var original = [Student('Rafi', 7), Student('Mitu', 12)];
  String saved = jsonEncode(original.map((s) => s.toJson()).toList());
  print(saved);

  var loaded = (jsonDecode(saved) as List).map((j) => Student.fromJson(j)).toList();
  bool same = loaded.length == original.length;
  for (int i = 0; i < loaded.length; i++) {
    if (loaded[i].name != original[i].name || loaded[i].roll != original[i].roll) same = false;
  }
  print(same ? 'হুবহু মিলেছে' : 'মেলেনি');
}`, note: '{{jsonEncode}} নিজের class বোঝে না, তাই আগে প্রতিটাকে {{toJson()}} দিয়ে Map বানালাম।' },
  ],
};

CARDS.push(
  { w: 6, f: 'বর্গমূল, ঘাত (import সহ)', b: "import 'dart:math';\nsqrt(16)   // 4.0\npow(2, 10) // 1024" },
  { w: 6, f: '1 থেকে 6 random সংখ্যা', b: 'Random().nextInt(6) + 1' },
  { w: 6, f: 'দুই তারিখের মাঝে কত দিন', b: 'b.difference(a).inDays' },
  { w: 6, f: 'নিজের test যন্ত্র', b: "void check(String n, Object? got, Object? want) {\n  print(got == want ? '✓ $n' : '✗ $n');\n}" },
  { w: 9, f: 'class এর নিজের (object এর না) variable', b: 'static int count = 0;\nClassName.count' },
  { w: 9, f: 'int এ নতুন getter যোগ করো', b: 'extension X on int {\n  bool get isOdd2 => this % 2 == 1;\n}' },
  { w: 9, f: 'নিজের class এ + চালু করো', b: 'Money operator +(Money o) => Money(taka + o.taka);' },
  { w: 9, f: 'একই object এ পরপর কাজ', b: 'var o = Order()\n  ..add(\'a\')\n  ..note = \'b\';' },
  { w: 10, f: 'function থেকে দুইটা মান ফেরত', b: '(int, int) f() => (1, 2);\nvar (a, b) = f();' },
  { w: 10, f: 'এক লাইনে swap', b: '(a, b) = (b, a);' },
  { w: 10, f: 'switch এ শর্তসহ pattern', b: 'int n when n < 0 => \'নেগেটিভ\',' },
  { w: 11, f: 'JSON লেখা থেকে Map', b: "import 'dart:convert';\nvar m = jsonDecode(text);" },
  { w: 11, f: 'Map থেকে JSON লেখা', b: 'String s = jsonEncode(map);' },
  { w: 11, f: 'JSON থেকে নিজের class', b: 'factory User.fromJson(Map<String, dynamic> j) =>\n    User(j[\'name\'], j[\'age\']);' },
);
