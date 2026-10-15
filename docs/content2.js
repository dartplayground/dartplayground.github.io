// সপ্তাহ ৩ আর ৪

TRACES.ifelse = {
  title: 'কোন শর্তে ঢুকবে?',
  code: ['void main() {', '  int marks = 75;', '  if (marks >= 80) {', "    print('A+');", '  } else if (marks >= 70) {', "    print('A');", '  } else {', "    print('F');", '  }', "  print('শেষ');", '}'],
  steps: [
    { l: 1, v: { marks: 75 }, n: 'marks এ 75 রাখলাম।' },
    { l: 2, n: '{{75 >= 80}}? না, false। তাই এই ব্লকের ভেতরে ঢুকবো না, পরের শর্তে যাবো।' },
    { l: 4, n: '{{75 >= 70}}? হ্যাঁ, true! এই ব্লকে ঢুকবো।' },
    { l: 5, p: 'A', n: "A প্রিন্ট হলো। একটা শর্ত মিলে গেছে, তাই বাকি {{else}} আর দেখা হবে না।" },
    { l: 9, p: 'শেষ', n: 'পুরো if-else শেষ, পরের লাইনে চলে এলাম।' },
  ],
};

TOPICS['if-else'] = {
  short: 'if / else', title: 'if, else if, else: সিদ্ধান্ত নেওয়া', days: 'দিন ১–৩',
  goal: 'শর্তের উপর ভিত্তি করে প্রোগ্রামকে আলাদা আলাদা পথে পাঠানো।',
  learn: [
    'এতদিন প্রোগ্রাম সব লাইন চালাতো। এখন শিখবো **শর্ত (condition)** দেখে কিছু লাইন চালানো আর কিছু বাদ দেওয়া। ঠিক যেমন: "বৃষ্টি হলে ছাতা নাও, না হলে নিও না।"',
    { code: `void main() {
  int age = 16;
  if (age >= 18) {
    print('ভোট দিতে পারবে');
  } else {
    print('আরো \${18 - age} বছর অপেক্ষা করো');
  }
}`, out: 'আরো 2 বছর অপেক্ষা করো' },
    { list: ['{{if ( )}} এর ভেতরে এমন কিছু লাগবে যার ফল {{true}} বা {{false}}।', 'true হলে {{if}} এর {{ { } }} চলে, false হলে {{else}} এর {{ { } }} চলে।', '{{else}} না দিলেও চলে। তখন false হলে কিছুই হবে না।'] },
    { h: 'অনেকগুলো পথ: else if' },
    { chain: [['marks >= 80', 'A+'], ['marks >= 70', 'A'], ['marks >= 60', 'A-'], ['marks >= 50', 'B'], ['marks >= 33', 'C'], [null, 'F']] },
    { code: `void main() {
  int marks = 64;
  if (marks >= 80) {
    print('A+');
  } else if (marks >= 70) {
    print('A');
  } else if (marks >= 60) {
    print('A-');
  } else if (marks >= 50) {
    print('B');
  } else if (marks >= 33) {
    print('C');
  } else {
    print('F');
  }
}`, out: 'A-' },
    { warn: 'শর্তের **ক্রম** গুরুত্বপূর্ণ। যদি {{marks >= 33}} সবার আগে লেখো, 90 পেলেও C দেখাবে, কারণ প্রথম যে শর্ত true সেখানেই থেমে যায়।' },
    { h: 'নিজে দেখো: শর্তের পথ' },
    { widget: 'ifLab' },
    { h: 'তিন রকম গঠন, কখন কোনটা' },
    { table: [['গঠন', 'কী হয়', 'কখন'], ['শুধু {{if}}', 'true হলে কিছু করো, না হলে কিছুই না', 'একটা বাড়তি কাজ: "জন্মদিন হলে শুভেচ্ছা দেখাও"'], ['{{if}} … {{else}}', 'দুইটার একটা পথ অবশ্যই', 'হ্যাঁ/না: পাস/ফেল, জোড়/বিজোড়'], ['{{if}} … {{else if}} … {{else}}', 'অনেক পথের **ঠিক একটা**', 'গ্রেড, বয়সের দল, দিনের সময়'], ['আলাদা আলাদা {{if}}', 'প্রতিটা আলাদা চেক, **কয়েকটাও** চলতে পারে', 'স্বাধীন জিনিস: "ছাত্র হলে ছাড়" আর "শুক্রবার হলে বোনাস", দুইটাই হতে পারে']] },
    { h: 'একাধিক শর্ত একসাথে' },
    { code: `void main() {
  int age = 20;
  bool hasNid = true;
  if (age >= 18 && hasNid) {
    print('ভোট দিতে পারবে');
  }

  String day = 'শুক্রবার';
  if (day == 'শুক্রবার' || day == 'শনিবার') {
    print('ছুটির দিন');
  }
}` },
    { h: 'if এর ভেতরে if (nested)' },
    { code: `void main() {
  int n = -8;
  if (n > 0) {
    print('পজিটিভ');
  } else {
    if (n % 2 == 0) {
      print('নেগেটিভ জোড়');
    } else {
      print('নেগেটিভ বিজোড়');
    }
  }
}`, out: 'নেগেটিভ জোড়' },
    { warn: '{{=}} আর {{==}} এক না! {{=}} মানে "রাখো", {{==}} মানে "সমান কিনা?"। শর্তে সবসময় {{==}}।' },
    { h: 'nested if সহজ করা' },
    'ভেতরের if এর কোনো else না থাকলে, সিঁড়ি না বানিয়ে {{&&}} দিয়ে এক লাইনে আনা যায়। ([Logical operator](#logic) টপিকে বিস্তারিত।)',
    { code: `// সিঁড়ি
if (age >= 18) {
  if (hasNid) {
    print('ভোট দিতে পারবে');
  }
}

// একই কাজ, সোজা
if (age >= 18 && hasNid) {
  print('ভোট দিতে পারবে');
}` },
    { h: 'bool সরাসরি শর্তে' },
    { code: `void main() {
  bool isRaining = true;
  if (isRaining) {               // isRaining == true লেখার দরকার নেই
    print('ছাতা নাও');
  }
  if (!isRaining) {              // == false এর জায়গায় !
    print('রোদ চশমা নাও');
  }
}`, out: 'ছাতা নাও' },
    { h: 'লেখা (String) মেলানো' },
    { code: `void main() {
  String ans = 'Yes';
  if (ans == 'yes') print('মিললো'); else print('মিললো না');
  if (ans.toLowerCase() == 'yes') print('এবার মিললো');
}`, out: 'মিললো না\nএবার মিললো' },
    'String মেলাতে {{==}} চলে, কিন্তু বড়-ছোট হাতের অক্ষর আলাদা ধরে। ইউজারের লেখা হলে আগে {{toLowerCase()}} আর {{trim()}} করে নাও।',
    { h: 'তিনটা লুকানো ফাঁদ' },
    { code: `void main() {
  int x = 2;
  if (x > 5); {          // ফাঁদ ১: if এর পরে ;
    print('বড়!');        // এটা if এর অংশ না, সবসময় চলে!
  }
}`, out: 'বড়!' },
    { list: ['**ফাঁদ ১, {{if (...);}}**: সেমিকোলন মানে "if এর কাজ শেষ"। নিচের ব্লক আলাদা হয়ে যায়, শর্ত যাই হোক চলে। Dart Error দেয় না, তাই চোখে পড়ে না।', '**ফাঁদ ২, বন্ধনী ছাড়া if**: {{if (x > 0) print(\'a\'); print(\'b\');}}: শুধু প্রথম print টা if এর, দ্বিতীয়টা সবসময় চলে। সমাধান: **সবসময় {{ { } }} দাও**।', '**ফাঁদ ৩, কোন if এর else?**: বন্ধনী ছাড়া nested if এ else সবসময় **সবচেয়ে কাছের** if এর সাথে যায়। আবারও সমাধান: {{ { } }}।'] },
    { tip: 'VS Code এ format (Shift + Alt + F, Linux এ Ctrl + Shift + I) চাপলে indentation ঠিক হয়ে যায়, তখন এই ফাঁদগুলো চোখে পড়ে: যে লাইন if এর ভেতরে না, সে বাম দিকে সরে যায়।' },
  ],
  how: [
    'Dart প্রথমে {{( )}} এর ভেতরের শর্তের হিসাব করে, ফল হয় true বা false।',
    'true হলে ঠিক পরের {{ { } }} ব্লক চলে, তারপর পুরো if-else এর পরের লাইনে চলে যায়।',
    'false হলে পরের {{else if}} চেক করে। কোনোটাই true না হলে {{else}} চলে।',
    '**একটা if-else শৃঙ্খলে সর্বোচ্চ একটা ব্লক চলে।** নিচের যন্ত্রে দেখো।',
  ],
  traces: ['ifelse'],
  quiz: [
    { q: 'Output কী?', code: `int n = 0;
if (n > 0) {
  print('পজিটিভ');
} else if (n < 0) {
  print('নেগেটিভ');
} else {
  print('শূন্য');
}`, opts: ['পজিটিভ', 'নেগেটিভ', 'শূন্য', 'কিছুই না'], a: 2, why: 'প্রথম দুইটা শর্তই false, তাই else।' },
    { q: 'Output কী? (ক্রম খেয়াল করো)', code: `int m = 85;
if (m >= 33) {
  print('C');
} else if (m >= 80) {
  print('A+');
}`, opts: ['A+', 'C', 'C\nA+', 'কিছুই না'], a: 1, why: '85 >= 33 true, তাই প্রথমেই C প্রিন্ট করে থেমে গেল। এটা একটা bug, বড় শর্ত আগে দিতে হতো।' },
    { q: 'x = -2 হলে কোনটা প্রিন্ট হবে?', code: `if (x > 5 || x < 0) {
  print('বাইরে');
} else {
  print('ভেতরে');
}`, opts: ['বাইরে', 'ভেতরে', 'দুইটাই', 'Error'], a: 0, why: '{{x < 0}} true। {{||}} এ একটা true হলেই পুরোটা true।' },
  ],
  probs: [
    { l: 'e', q: 'একটা সংখ্যা জোড় না বিজোড় বলো।', hint: '{{n % 2 == 0}}', sol: `void main() {
  int n = 7;
  if (n % 2 == 0) {
    print('জোড়');
  } else {
    print('বিজোড়');
  }
}` },
    { l: 'e', q: 'একটা সংখ্যা পজিটিভ, নেগেটিভ নাকি শূন্য বলো।', sol: `void main() {
  int n = -4;
  if (n > 0) {
    print('পজিটিভ');
  } else if (n < 0) {
    print('নেগেটিভ');
  } else {
    print('শূন্য');
  }
}` },
    { l: 'e', q: 'দুইটা সংখ্যার মধ্যে বড়টা প্রিন্ট করো। সমান হলে "দুইটাই সমান"।', sol: `void main() {
  int a = 12, b = 9;
  if (a > b) {
    print(a);
  } else if (b > a) {
    print(b);
  } else {
    print('দুইটাই সমান');
  }
}` },
    { l: 'e', q: 'নম্বর 33 বা তার বেশি হলে "পাস", না হলে "ফেল"।', sol: `void main() {
  int marks = 45;
  if (marks >= 33) {
    print('পাস');
  } else {
    print('ফেল');
  }
}` },
    { l: 'e', q: 'একটা সংখ্যা 5 আর 11 দুইটা দিয়েই বিভাজ্য কিনা বলো।', sol: `void main() {
  int n = 55;
  if (n % 5 == 0 && n % 11 == 0) {
    print('দুইটা দিয়েই বিভাজ্য');
  } else {
    print('না');
  }
}` },
    { l: 'm', q: 'তিনটা সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো।', hint: 'একটা {{max}} variable এ প্রথমটা রাখো। তারপর বাকি দুইটার সাথে তুলনা করে বড় পেলে max বদলাও।', sol: `void main() {
  int a = 7, b = 19, c = 11;
  int max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  print(max); // 19
}`, note: 'এই "এখন পর্যন্ত সবচেয়ে বড়" কৌশলটা মনে রাখো, loop আর list এ বারবার লাগবে।' },
    { l: 'm', q: 'নম্বর থেকে গ্রেড বের করো (উপরের chain এর মতো)। 0 এর কম বা 100 এর বেশি হলে "ভুল নম্বর"।', sol: `void main() {
  int m = 72;
  if (m < 0 || m > 100) {
    print('ভুল নম্বর');
  } else if (m >= 80) {
    print('A+');
  } else if (m >= 70) {
    print('A');
  } else if (m >= 60) {
    print('A-');
  } else if (m >= 50) {
    print('B');
  } else if (m >= 33) {
    print('C');
  } else {
    print('F');
  }
}` },
    { l: 'm', q: 'একটা সাল লিপ ইয়ার কিনা if দিয়ে বলো। (2024 হ্যাঁ, 1900 না, 2000 হ্যাঁ)', sol: `void main() {
  int y = 1900;
  if (y % 400 == 0) {
    print('লিপ ইয়ার');
  } else if (y % 100 == 0) {
    print('লিপ ইয়ার না');
  } else if (y % 4 == 0) {
    print('লিপ ইয়ার');
  } else {
    print('লিপ ইয়ার না');
  }
}` },
    { l: 'm', q: 'একটা ইংরেজি অক্ষর স্বরবর্ণ (a, e, i, o, u) কিনা বলো। বড় হাতের হলেও কাজ করবে।', sol: `void main() {
  String ch = 'E'.toLowerCase();
  if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
    print('স্বরবর্ণ');
  } else {
    print('ব্যঞ্জনবর্ণ');
  }
}` },
    { l: 'm', q: 'তিনটা বাহু দিয়ে ত্রিভুজ বানানো সম্ভব কিনা। নিয়ম: যেকোনো দুই বাহুর যোগফল তৃতীয়টার চেয়ে বড়।', sol: `void main() {
  int a = 3, b = 4, c = 8;
  if (a + b > c && a + c > b && b + c > a) {
    print('ত্রিভুজ সম্ভব');
  } else {
    print('সম্ভব না');
  }
}` },
    { l: 'm', q: 'বিদ্যুৎ বিল: প্রথম 100 ইউনিট প্রতি ইউনিট 5 টাকা, পরের 100 ইউনিট 7 টাকা, 200 এর বেশি হলে বাকিগুলো 10 টাকা। 250 ইউনিটের বিল কত?', hint: 'হাতে করো: 100×5 + 100×7 + 50×10 = 1700', sol: `void main() {
  int u = 250;
  int bill;
  if (u <= 100) {
    bill = u * 5;
  } else if (u <= 200) {
    bill = 100 * 5 + (u - 100) * 7;
  } else {
    bill = 100 * 5 + 100 * 7 + (u - 200) * 10;
  }
  print(bill); // 1700
}` },
    { l: 'h', q: 'তিনটা সংখ্যা ছোট থেকে বড় ক্রমে প্রিন্ট করো, শুধু if আর swap দিয়ে।', hint: 'a > b হলে swap। তারপর b > c হলে swap। তারপর আবার a > b হলে swap।', sol: `void main() {
  int a = 9, b = 2, c = 5, t;
  if (a > b) { t = a; a = b; b = t; }
  if (b > c) { t = b; b = c; c = t; }
  if (a > b) { t = a; a = b; b = t; }
  print('$a $b $c'); // 2 5 9
}` },
    { l: 'h', q: 'তিন বাহু দেখে ত্রিভুজের ধরন বলো: সমবাহু (৩টাই সমান), সমদ্বিবাহু (২টা সমান), বিষমবাহু (সব আলাদা)। আগে চেক করো ত্রিভুজ সম্ভব কিনা।', sol: `void main() {
  int a = 5, b = 5, c = 8;
  if (!(a + b > c && a + c > b && b + c > a)) {
    print('ত্রিভুজ সম্ভব না');
  } else if (a == b && b == c) {
    print('সমবাহু');
  } else if (a == b || b == c || a == c) {
    print('সমদ্বিবাহু');
  } else {
    print('বিষমবাহু');
  }
}` },
    { l: 'h', q: 'ঘন্টা (0–23) দেখে বলো: 5–11 সকাল, 12–15 দুপুর, 16–17 বিকাল, 18–19 সন্ধ্যা, বাকিটা রাত।', sol: `void main() {
  int h = 17;
  if (h >= 5 && h <= 11) {
    print('সকাল');
  } else if (h >= 12 && h <= 15) {
    print('দুপুর');
  } else if (h >= 16 && h <= 17) {
    print('বিকাল');
  } else if (h >= 18 && h <= 19) {
    print('সন্ধ্যা');
  } else {
    print('রাত');
  }
}` },
    { l: 'h', q: 'BMI = ওজন(kg) / (উচ্চতা(m))²। BMI 18.5 এর কম হলে "কম ওজন", 25 এর কম হলে "স্বাভাবিক", 30 এর কম হলে "বেশি ওজন", না হলে "স্থূল"।', sol: `void main() {
  double w = 60, h = 1.65;
  double bmi = w / (h * h);
  print(bmi.toStringAsFixed(1)); // 22.0
  if (bmi < 18.5) {
    print('কম ওজন');
  } else if (bmi < 25) {
    print('স্বাভাবিক');
  } else if (bmi < 30) {
    print('বেশি ওজন');
  } else {
    print('স্থূল');
  }
}` },
  ],
};

TOPICS['switch-ternary'] = {
  short: 'switch ও ternary', title: 'switch আর ternary ( ? : )', days: 'দিন ৪–৭',
  goal: 'একটা মানের অনেকগুলো সম্ভাবনা সামলাতে switch, আর ছোট if-else এক লাইনে লিখতে ternary।',
  learn: [
    { h: 'Ternary: এক লাইনের if-else' },
    { anat: [['শর্ত', 'true না false?'], ['?', 'true হলে'], ['মান১', 'এটা'], [':', 'না হলে'], ['মান২', 'এটা']], cap: 'condition ? valueIfTrue : valueIfFalse' },
    { code: `void main() {
  int n = 7;
  String type = n % 2 == 0 ? 'জোড়' : 'বিজোড়';
  print(type);                       // বিজোড়

  int a = 10, b = 25;
  int bigger = a > b ? a : b;
  print(bigger);                     // 25

  print('তুমি \${n >= 18 ? 'প্রাপ্তবয়স্ক' : 'ছোট'}');
}` },
    { tip: 'ternary শুধু তখন যখন দুইটা মানের একটা বেছে নিতে হবে। লম্বা কাজ থাকলে সাধারণ if-else পড়তে সহজ।' },
    { h: 'switch: একটা মান, অনেক পথ' },
    'একটা variable এর মান 1, 2, 3, ... এর মধ্যে কোনটা, সেটা দেখে আলাদা কাজ করতে অনেকগুলো {{else if}} না লিখে {{switch}} লেখা যায়।',
    { code: `void main() {
  int day = 3;
  switch (day) {
    case 1:
      print('শনিবার');
    case 2:
      print('রবিবার');
    case 3:
      print('সোমবার');
    case 4 || 5:
      print('মঙ্গল বা বুধবার');
    default:
      print('অন্য দিন');
  }
}`, out: 'সোমবার' },
    { list: ['{{case}} এর মান মিললে সেই অংশ চলে, তারপর switch শেষ।', '{{default}} চলে যদি কোনো case না মেলে (else এর মতো)।', 'Dart 3 থেকে {{break}} লাগে না। পুরানো কোডে {{break;}} দেখলে অবাক হয়ো না, দিলেও চলে।', '{{case 4 || 5:}} মানে 4 অথবা 5।'] },
    { h: 'switch expression (মান ফেরত দেয়)' },
    { code: `void main() {
  String grade = 'A';
  double point = switch (grade) {
    'A+' => 5.0,
    'A' => 4.0,
    'A-' => 3.5,
    'B' => 3.0,
    _ => 0.0,     // _ মানে "বাকি সব"
  };
  print(point);   // 4.0
}` },
  ],
  how: [
    'ternary তে আগে শর্তের হিসাব হয়। true হলে {{?}} এর পরের মান, false হলে {{:}} এর পরের মান পুরো জিনিসটার ফল হয়।',
    'switch মানটা উপর থেকে প্রতিটা {{case}} এর সাথে মেলায়। প্রথম যেটা মেলে সেটা চালায়।',
    'switch expression এ প্রতিটা লাইন {{মান => ফল}}, আর শেষে {{_}} দিয়ে বাকি সব ধরতে হয়।',
  ],
  quiz: [
    { q: 'Output কী?', code: `int a = 7;
print(a % 2 == 0 ? 'জোড়' : 'বিজোড়');`, opts: ['জোড়', 'বিজোড়', 'true', 'Error'], a: 1, why: '7 % 2 = 1, তাই শর্ত false, {{:}} এর পরেরটা।' },
    { q: 'Output কী?', code: `int x = 9;
switch (x) {
  case 1:
    print('এক');
  case 2:
    print('দুই');
  default:
    print('জানি না');
}`, opts: ['এক', 'দুই', 'জানি না', 'কিছুই না'], a: 2, why: '9 কোনো case এ নেই, তাই default।' },
  ],
  probs: [
    { l: 'e', q: 'ternary দিয়ে জোড়/বিজোড় প্রিন্ট করো।', sol: `void main() {
  int n = 12;
  print(n % 2 == 0 ? 'জোড়' : 'বিজোড়');
}` },
    { l: 'e', q: 'ternary দিয়ে দুইটা সংখ্যার ছোটটা বের করো।', sol: `void main() {
  int a = 4, b = 9;
  int small = a < b ? a : b;
  print(small);
}` },
    { l: 'e', q: 'switch দিয়ে মাসের নম্বর (1–12) থেকে মাসের নাম প্রিন্ট করো। ভুল নম্বরে "ভুল মাস"।', sol: `void main() {
  int m = 4;
  switch (m) {
    case 1: print('জানুয়ারি');
    case 2: print('ফেব্রুয়ারি');
    case 3: print('মার্চ');
    case 4: print('এপ্রিল');
    case 5: print('মে');
    case 6: print('জুন');
    case 7: print('জুলাই');
    case 8: print('আগস্ট');
    case 9: print('সেপ্টেম্বর');
    case 10: print('অক্টোবর');
    case 11: print('নভেম্বর');
    case 12: print('ডিসেম্বর');
    default: print('ভুল মাস');
  }
}` },
    { l: 'e', q: "switch দিয়ে ছোট ক্যালকুলেটর: {{a}}, {{b}} আর {{op}} ({{'+'}}, {{'-'}}, {{'*'}}, {{'/'}})।", sol: `void main() {
  double a = 12, b = 4;
  String op = '*';
  switch (op) {
    case '+': print(a + b);
    case '-': print(a - b);
    case '*': print(a * b);
    case '/': print(b == 0 ? 'শূন্য দিয়ে ভাগ হয় না' : a / b);
    default: print('অজানা চিহ্ন');
  }
}` },
    { l: 'm', q: 'ternary দিয়ে একটা সংখ্যার absolute value (পরম মান) বের করো: -7 → 7।', sol: `void main() {
  int n = -7;
  int abs = n < 0 ? -n : n;
  print(abs); // 7
}` },
    { l: 'm', q: 'মাসের নম্বর থেকে কত দিন: 2 → 28, 4/6/9/11 → 30, বাকি সব → 31। switch এ case একসাথে করো।', sol: `void main() {
  int m = 9;
  switch (m) {
    case 2:
      print(28);
    case 4 || 6 || 9 || 11:
      print(30);
    default:
      print(31);
  }
}` },
    { l: 'm', q: 'switch expression দিয়ে দিনের নম্বর (1–7) থেকে "ছুটি" বা "কাজের দিন" বের করো। শুক্র (6) আর শনি (7) ছুটি।', sol: `void main() {
  int d = 6;
  String type = switch (d) {
    6 || 7 => 'ছুটি',
    _ => 'কাজের দিন',
  };
  print(type);
}` },
    { l: 'm', q: 'nested ternary দিয়ে তিনটা সংখ্যার বড়টা বের করো। তারপর ভাবো if দিয়ে লেখা পড়তে সহজ কিনা।', sol: `void main() {
  int a = 4, b = 11, c = 7;
  int max = a > b ? (a > c ? a : c) : (b > c ? b : c);
  print(max); // 11
}` },
    { l: 'h', q: "রক-পেপার-সিজার: দুই খেলোয়াড়ের চয়েস ({{'rock'}}, {{'paper'}}, {{'scissors'}}) থেকে বিজয়ী বলো। ternary দিয়ে ফল একটা String variable এ রাখো।", hint: "রক সিজারকে হারায়, সিজার পেপারকে, পেপার রককে। প্লেয়ার ১ এর জেতার তিনটা উপায় {{||}} দিয়ে জোড়া দাও।", sol: `void main() {
  String p1 = 'paper', p2 = 'rock';
  bool p1Wins = (p1 == 'rock' && p2 == 'scissors') ||
      (p1 == 'scissors' && p2 == 'paper') ||
      (p1 == 'paper' && p2 == 'rock');
  String result = p1 == p2 ? 'ড্র' : (p1Wins ? 'প্লেয়ার ১ জিতেছে' : 'প্লেয়ার ২ জিতেছে');
  print(result);
}`, note: 'সপ্তাহ ১০ এ Record আর Pattern শিখলে এটা switch দিয়ে আরো সুন্দর করে লিখবে।' },
  ],
};

TRACES.sum = {
  title: 'for loop দিয়ে 1 + 2 + 3',
  code: ['void main() {', '  int sum = 0;', '  for (int i = 1; i <= 3; i++) {', '    sum = sum + i;', '  }', "  print('যোগফল: $sum');", '}'],
  steps: [
    { l: 0, n: 'main() শুরু।' },
    { l: 1, v: { sum: 0 }, n: '{{sum}} বাক্স খালি (0) দিয়ে শুরু। যোগফল জমানোর বাক্স সবসময় 0 দিয়ে শুরু হয়।' },
    { l: 2, v: { i: 1 }, n: 'loop শুরু: {{i = 1}}। শর্ত {{1 <= 3}}? true, ভেতরে ঢুকি।' },
    { l: 3, v: { sum: 1 }, n: '{{sum = 0 + 1}} = 1' },
    { l: 2, v: { i: 2 }, n: '{{i++}}, i এখন 2। {{2 <= 3}}? true, আবার ভেতরে।' },
    { l: 3, v: { sum: 3 }, n: '{{sum = 1 + 2}} = 3' },
    { l: 2, v: { i: 3 }, n: 'i এখন 3। {{3 <= 3}}? true।' },
    { l: 3, v: { sum: 6 }, n: '{{sum = 3 + 3}} = 6' },
    { l: 2, v: { i: 4 }, n: 'i এখন 4। {{4 <= 3}}? **false**! loop শেষ।' },
    { l: 5, v: { i: null }, p: 'যোগফল: 6', n: 'loop এর পরের লাইন। {{i}} শুধু loop এর ভেতরে ছিল, এখন আর নেই।' },
  ],
};

TOPICS['for-loop'] = {
  short: 'for loop', title: 'for loop: গুনে গুনে বারবার', days: 'দিন ১–২',
  goal: 'একই কাজ নির্দিষ্ট সংখ্যক বার করানো, আর loop দিয়ে যোগফল, গণনা, খোঁজার মতো কাজ করা।',
  learn: [
    '1 থেকে 100 পর্যন্ত প্রিন্ট করতে 100 লাইন লিখবে? না! **loop** দিয়ে 3 লাইনে হয়।',
    { anat: [['for (', ''], ['int i = 1;', '① শুরু: একবারই চলে'], ['i <= 5;', '② শর্ত: প্রতিবার আগে চেক'], ['i++', '④ পরিবর্তন: প্রতিবার শেষে'], [') { print(i); }', '③ কাজ: শর্ত true হলে']], cap: 'for loop এর চারটা অংশ। ক্রম: ① → ② → ③ → ④ → ② → ③ → ④ → ...' },
    { widget: 'stepSort' },
    { code: `void main() {
  for (int i = 1; i <= 5; i++) {
    print(i);
  }
}`, out: '1\n2\n3\n4\n5' },
    { code: `void main() {
  // উল্টো গণনা
  for (int i = 5; i >= 1; i--) {
    print(i);
  }
  // 2 করে বাড়ানো: 0 2 4 6 8 10
  for (int i = 0; i <= 10; i += 2) {
    print(i);
  }
  // list এর প্রতিটা জিনিস (for-in), list বিস্তারিত সপ্তাহ ৬ এ
  for (var fruit in ['আম', 'জাম', 'লিচু']) {
    print(fruit);
  }
}` },
    { h: 'Loop দিয়ে চিন্তা করার ৩টা কৌশল' },
    'অনেক সমস্যা এই তিনটা ছাঁচের কোনো একটায় পড়ে। নতুন সমস্যা দেখলে ভাবো কোনটা লাগবে।',
    { table: [['কৌশল', 'কখন', 'ছাঁচ'], ['**জমানো (sum)**', 'যোগফল/গুণফল চাই', '{{sum = 0}} আগে, loop এ {{sum += i}}'], ['**গোনা (count)**', 'কয়টা আছে চাই', '{{count = 0}} আগে, শর্ত মিললে {{count++}}'], ['**খোঁজা (flag)**', 'আছে কিনা চাই', '{{found = false}} আগে, পেলে {{found = true}}']] },
    { code: `void main() {
  // জমানো: 1 থেকে 10 এর যোগফল
  int sum = 0;
  for (int i = 1; i <= 10; i++) {
    sum += i;
  }
  print(sum); // 55

  // গোনা: 1–50 এর মধ্যে 7 দিয়ে বিভাজ্য কয়টা
  int count = 0;
  for (int i = 1; i <= 50; i++) {
    if (i % 7 == 0) count++;
  }
  print(count); // 7

  // খোঁজা: 91 এর কোনো উৎপাদক আছে কিনা (1 আর 91 বাদে)
  bool found = false;
  for (int i = 2; i < 91; i++) {
    if (91 % i == 0) found = true;
  }
  print(found); // true (7 × 13)
}` },
  ],
  how: [
    '① {{int i = 1}} একবারই চলে, শুরুতে।',
    '② শর্ত {{i <= 5}} চেক হয়। false হলে loop শেষ।',
    '③ true হলে {{ { } }} এর ভেতরের কাজ চলে।',
    '④ {{i++}} চলে, তারপর আবার ② এ ফিরে যায়।',
    'নিচের যন্ত্রে প্রতিটা ধাপে {{i}} আর {{sum}} এর মান দেখো। তারপর খাতায় 1 থেকে 4 এর জন্য নিজে এই টেবিল বানাও।',
  ],
  traces: ['sum'],
  quiz: [
    { q: 'Output কী?', code: `for (int i = 0; i < 3; i++) {
  print(i);
}`, opts: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'], a: 1, why: 'i = 0 থেকে শুরু, 3 এর কম পর্যন্ত। 3 হলে শর্ত false।' },
    { q: 'কয়বার প্রিন্ট হবে?', code: `for (int i = 10; i > 0; i -= 3) {
  print(i);
}`, opts: ['3', '4', '10', '0'], a: 1, why: '10, 7, 4, 1 প্রিন্ট হয়। তারপর i = -2, শর্ত false।' },
    { q: 'Output কী?', code: `int s = 0;
for (int i = 1; i <= 4; i++) {
  s += i;
}
print(s);`, opts: ['4', '10', '6', '24'], a: 1, why: '1 + 2 + 3 + 4 = 10।' },
  ],
  probs: [
    { l: 'e', q: '1 থেকে 10 পর্যন্ত প্রিন্ট করো।', sol: `void main() {
  for (int i = 1; i <= 10; i++) {
    print(i);
  }
}` },
    { l: 'e', q: '10 থেকে 1 পর্যন্ত উল্টো প্রিন্ট করো।', sol: `void main() {
  for (int i = 10; i >= 1; i--) {
    print(i);
  }
}` },
    { l: 'e', q: '1 থেকে 50 এর সব জোড় সংখ্যা প্রিন্ট করো। (দুইভাবে: {{i += 2}} দিয়ে, আর {{%}} দিয়ে)', sol: `void main() {
  for (int i = 2; i <= 50; i += 2) {
    print(i);
  }
  // অথবা
  for (int i = 1; i <= 50; i++) {
    if (i % 2 == 0) print(i);
  }
}` },
    { l: 'e', q: '7 এর নামতা প্রিন্ট করো: {{7 x 1 = 7}} থেকে {{7 x 10 = 70}}।', sol: `void main() {
  int n = 7;
  for (int i = 1; i <= 10; i++) {
    print('$n x $i = \${n * i}');
  }
}` },
    { l: 'e', q: '1 থেকে 100 এর যোগফল বের করো।', out: '5050', sol: `void main() {
  int sum = 0;
  for (int i = 1; i <= 100; i++) {
    sum += i;
  }
  print(sum);
}` },
    { l: 'e', q: 'n = 5 এর factorial (5! = 1×2×3×4×5) বের করো।', hint: 'গুণফল জমাতে শুরুর মান 0 না, 1।', sol: `void main() {
  int n = 5;
  int f = 1;
  for (int i = 1; i <= n; i++) {
    f *= i;
  }
  print(f); // 120
}` },
    { l: 'm', q: '1 থেকে 100 এর মধ্যে যেসব সংখ্যা 3 আর 5 দুইটা দিয়েই বিভাজ্য, সেগুলো আর মোট কয়টা প্রিন্ট করো।', sol: `void main() {
  int count = 0;
  for (int i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      print(i);
      count++;
    }
  }
  print('মোট $count টা'); // 6
}` },
    { l: 'm', q: 'FizzBuzz: 1–30। 3 দিয়ে বিভাজ্য হলে "Fizz", 5 দিয়ে হলে "Buzz", দুইটা দিয়েই হলে "FizzBuzz", না হলে সংখ্যাটা।', hint: 'দুইটা দিয়েই বিভাজ্যের শর্তটা সবার আগে চেক করো। কেন?', sol: `void main() {
  for (int i = 1; i <= 30; i++) {
    if (i % 15 == 0) {
      print('FizzBuzz');
    } else if (i % 3 == 0) {
      print('Fizz');
    } else if (i % 5 == 0) {
      print('Buzz');
    } else {
      print(i);
    }
  }
}` },
    { l: 'm', q: '36 এর সব উৎপাদক (divisor) প্রিন্ট করো।', out: '1 2 3 4 6 9 12 18 36', sol: `void main() {
  int n = 36;
  for (int i = 1; i <= n; i++) {
    if (n % i == 0) print(i);
  }
}` },
    { l: 'm', q: 'একটা সংখ্যা মৌলিক (prime) কিনা বলো। মৌলিক মানে 1 আর নিজে ছাড়া কোনো উৎপাদক নেই।', hint: 'খোঁজা (flag) কৌশল। 2 থেকে n-1 পর্যন্ত কেউ ভাগ করতে পারলে মৌলিক না।', sol: `void main() {
  int n = 29;
  bool isPrime = n > 1;
  for (int i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
    }
  }
  print(isPrime ? 'মৌলিক' : 'মৌলিক না');
}`, note: 'পরের টপিকে {{break}} শিখবে, তখন একটা উৎপাদক পাওয়া মাত্র loop থামিয়ে দিতে পারবে।' },
    { l: 'm', q: 'Fibonacci এর প্রথম 10টা সংখ্যা: 0 1 1 2 3 5 8 13 21 34। প্রতিটা আগের দুইটার যোগফল।', hint: '{{a = 0, b = 1}}। প্রতিবার a প্রিন্ট, তারপর {{next = a + b; a = b; b = next;}}', sol: `void main() {
  int a = 0, b = 1;
  for (int i = 1; i <= 10; i++) {
    print(a);
    int next = a + b;
    a = b;
    b = next;
  }
}` },
    { l: 'm', q: '1² + 2² + ... + 10² বের করো।', out: '385', sol: `void main() {
  int sum = 0;
  for (int i = 1; i <= 10; i++) {
    sum += i * i;
  }
  print(sum);
}` },
    { l: 'h', q: '1 থেকে 100 এর সব মৌলিক সংখ্যা প্রিন্ট করো।', hint: 'বাইরের loop প্রতিটা সংখ্যা নেবে, ভেতরের loop সেটা মৌলিক কিনা চেক করবে।', sol: `void main() {
  for (int n = 2; n <= 100; n++) {
    bool isPrime = true;
    for (int i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        isPrime = false;
      }
    }
    if (isPrime) print(n);
  }
}`, note: '{{i * i <= n}} পর্যন্ত চেক করলেই হয়। 36 এর উৎপাদক জোড়ায় আসে (2×18, 3×12, 6×6), ছোটটা সবসময় 6 এর মধ্যে।' },
    { l: 'h', q: '1 থেকে 1000 এর perfect number খোঁজো। perfect মানে নিজে বাদে সব উৎপাদকের যোগফল = সংখ্যাটা (6 = 1 + 2 + 3)।', out: '6 28 496', sol: `void main() {
  for (int n = 2; n <= 1000; n++) {
    int sum = 0;
    for (int i = 1; i < n; i++) {
      if (n % i == 0) sum += i;
    }
    if (sum == n) print(n);
  }
}` },
    { l: 'h', q: 'loop দিয়ে {{a}} এর {{b}} ঘাত (a^b) বের করো, 2^10 = 1024।', sol: `void main() {
  int a = 2, b = 10;
  int result = 1;
  for (int i = 1; i <= b; i++) {
    result *= a;
  }
  print(result);
}` },
  ],
};

TRACES.digits = {
  title: 'while দিয়ে অঙ্কের যোগফল (472)',
  code: ['void main() {', '  int n = 472;', '  int sum = 0;', '  while (n > 0) {', '    int d = n % 10;', '    sum += d;', '    n = n ~/ 10;', '  }', '  print(sum);', '}'],
  steps: [
    { l: 1, v: { n: 472 }, n: 'n = 472' },
    { l: 2, v: { sum: 0 }, n: 'যোগফল জমানোর বাক্স 0।' },
    { l: 3, n: '{{472 > 0}}? true, ভেতরে।' },
    { l: 4, v: { d: 2 }, n: '{{472 % 10}} = 2, শেষ অঙ্ক পেলাম।' },
    { l: 5, v: { sum: 2 }, n: 'sum = 0 + 2 = 2' },
    { l: 6, v: { n: 47 }, n: '{{472 ~/ 10}} = 47। শেষ অঙ্কটা কেটে ফেললাম।' },
    { l: 3, v: { d: null }, n: '{{47 > 0}}? true, আবার ঘুরি।' },
    { l: 4, v: { d: 7 }, n: '{{47 % 10}} = 7' },
    { l: 5, v: { sum: 9 }, n: 'sum = 2 + 7 = 9' },
    { l: 6, v: { n: 4 }, n: '{{47 ~/ 10}} = 4' },
    { l: 3, v: { d: null }, n: '{{4 > 0}}? true।' },
    { l: 4, v: { d: 4 }, n: '{{4 % 10}} = 4' },
    { l: 5, v: { sum: 13 }, n: 'sum = 9 + 4 = 13' },
    { l: 6, v: { n: 0 }, n: '{{4 ~/ 10}} = 0। সব অঙ্ক শেষ।' },
    { l: 3, v: { d: null }, n: '{{0 > 0}}? **false**। loop শেষ।' },
    { l: 8, p: '13', n: '4 + 7 + 2 = 13। আমরা জানতাম না loop কতবার ঘুরবে, তাই while।' },
  ],
};

TOPICS['while-loop'] = {
  short: 'while, break, continue', title: 'while, do-while, break, continue', days: 'দিন ৩–৪',
  goal: 'কতবার ঘুরবে আগে থেকে জানা না থাকলে while ব্যবহার করা, আর loop থামানো বা এক ঘুর বাদ দেওয়া।',
  learn: [
    '{{for}} ভালো যখন জানি কতবার ঘুরবে (1 থেকে 10)। {{while}} ভালো যখন জানি না, শুধু জানি **কখন থামতে হবে**। যেমন: "সংখ্যা 0 না হওয়া পর্যন্ত অঙ্ক কাটো"।',
    { code: `void main() {
  int n = 1;
  while (n <= 5) {
    print(n);
    n++;   // এটা ভুলে গেলে loop কখনো থামবে না!
  }
}`, out: '1\n2\n3\n4\n5' },
    { warn: 'while এর ভেতরে এমন কিছু থাকতেই হবে যা একসময় শর্তকে false বানাবে। না হলে **infinite loop**: প্রোগ্রাম আটকে যাবে। DartPad এ হলে পেজ reload করো।' },
    { h: 'do-while: অন্তত একবার চলবেই' },
    { code: `void main() {
  int i = 10;
  do {
    print(i);   // শর্ত false হলেও একবার চলে
    i++;
  } while (i < 5);
}`, out: '10' },
    { h: 'break আর continue' },
    { code: `void main() {
  for (int i = 1; i <= 10; i++) {
    if (i == 3) continue; // 3 বাদ, সরাসরি পরের ঘুরে যাও
    if (i == 6) break;    // 6 এ পৌঁছালে loop থেকেই বের হয়ে যাও
    print(i);
  }
}`, out: '1\n2\n4\n5' },
    { list: ['{{break}}: পুরো loop এখনই শেষ।', '{{continue}}: এই ঘুরের বাকি কাজ বাদ, পরের ঘুর শুরু।'] },
  ],
  how: [
    'while প্রতিবার আগে শর্ত চেক করে, true হলে ভেতরের কাজ করে, তারপর আবার শর্ত চেক করে।',
    'do-while আগে কাজ করে, পরে শর্ত চেক করে। তাই অন্তত একবার চলে।',
    'নিচে দেখো, একটা সংখ্যার অঙ্কগুলো {{% 10}} আর {{~/ 10}} দিয়ে কিভাবে একটা একটা করে বের হয়। এই কৌশল অনেক সমস্যায় লাগবে।',
  ],
  traces: ['digits'],
  quiz: [
    { q: 'কয়বার প্রিন্ট হবে?', code: `int i = 10;
do {
  print(i);
  i++;
} while (i < 5);`, opts: ['0 বার', '1 বার', '5 বার', 'অসীম'], a: 1, why: 'do-while আগে চলে, পরে চেক করে।' },
    { q: 'Output কী?', code: `int n = 1;
while (true) {
  if (n > 3) break;
  print(n);
  n++;
}`, opts: ['1 2 3', '1 2 3 4', 'অসীম loop', '0 1 2 3'], a: 0, why: '{{while (true)}} থামে শুধু break এ। n = 4 হলে break।' },
    { q: 'Output কী?', code: `for (int i = 1; i <= 5; i++) {
  if (i % 2 == 0) continue;
  print(i);
}`, opts: ['2 4', '1 3 5', '1 2 3 4 5', '1'], a: 1, why: 'জোড় হলে continue, প্রিন্ট বাদ।' },
  ],
  probs: [
    { l: 'e', q: 'while দিয়ে 1 থেকে 10 প্রিন্ট করো।', sol: `void main() {
  int i = 1;
  while (i <= 10) {
    print(i);
    i++;
  }
}` },
    { l: 'e', q: 'একটা সংখ্যায় কয়টা অঙ্ক আছে বের করো (98765 → 5)।', sol: `void main() {
  int n = 98765;
  int count = 0;
  while (n > 0) {
    count++;
    n = n ~/ 10;
  }
  print(count);
}` },
    { l: 'e', q: '1 থেকে 20, কিন্তু 4 দিয়ে বিভাজ্যগুলো বাদ (continue দিয়ে)।', sol: `void main() {
  for (int i = 1; i <= 20; i++) {
    if (i % 4 == 0) continue;
    print(i);
  }
}` },
    { l: 'm', q: 'একটা সংখ্যা উল্টাও: 1234 → 4321।', hint: 'প্রতিবার শেষ অঙ্ক নাও, {{rev = rev * 10 + d}}।', sol: `void main() {
  int n = 1234;
  int rev = 0;
  while (n > 0) {
    int d = n % 10;
    rev = rev * 10 + d;
    n = n ~/ 10;
  }
  print(rev); // 4321
}` },
    { l: 'm', q: 'একটা সংখ্যা palindrome কিনা (উল্টালেও একই, যেমন 12321)।', hint: 'আগের সমস্যার উল্টানো সংখ্যার সাথে মূল সংখ্যা মেলাও। কিন্তু loop এ n বদলে যায়, তাই আগে কপি রাখো।', sol: `void main() {
  int n = 12321;
  int original = n, rev = 0;
  while (n > 0) {
    rev = rev * 10 + n % 10;
    n ~/= 10;
  }
  print(original == rev ? 'palindrome' : 'palindrome না');
}` },
    { l: 'm', q: 'Armstrong সংখ্যা: 3 অঙ্কের সংখ্যার প্রতিটা অঙ্কের ঘন (cube) এর যোগফল = সংখ্যাটা। 153 = 1³ + 5³ + 3³। 100–999 এর সব খোঁজো।', out: '153 370 371 407', sol: `void main() {
  for (int n = 100; n <= 999; n++) {
    int t = n, sum = 0;
    while (t > 0) {
      int d = t % 10;
      sum += d * d * d;
      t ~/= 10;
    }
    if (sum == n) print(n);
  }
}` },
    { l: 'm', q: 'দুইটা সংখ্যার গসাগু (GCD) বের করো। ইউক্লিডের নিয়ম: b 0 না হওয়া পর্যন্ত {{(a, b) = (b, a % b)}}।', sol: `void main() {
  int a = 48, b = 18;
  while (b != 0) {
    int t = b;
    b = a % b;
    a = t;
  }
  print(a); // 6
}` },
    { l: 'm', q: 'দুইটা সংখ্যার লসাগু (LCM) বের করো। সূত্র: {{a * b ~/ gcd}}।', sol: `void main() {
  int a = 12, b = 18;
  int x = a, y = b;
  while (y != 0) {
    int t = y;
    y = x % y;
    x = t;
  }
  print(a * b ~/ x); // 36
}` },
    { l: 'm', q: '1 + 2 + 3 + ... এভাবে যোগ করতে থাকলে কয়টা সংখ্যা যোগ করলে যোগফল প্রথমবার 100 পার হয়?', sol: `void main() {
  int sum = 0, i = 0;
  while (sum <= 100) {
    i++;
    sum += i;
  }
  print('$i টা সংখ্যা, যোগফল $sum'); // 14 টা, 105
}` },
    { l: 'h', q: 'Collatz: n জোড় হলে n/2, বিজোড় হলে 3n+1। n = 1 না হওয়া পর্যন্ত চালাও। 27 থেকে শুরু করলে কত ধাপ লাগে?', out: '111', sol: `void main() {
  int n = 27, steps = 0;
  while (n != 1) {
    n = n % 2 == 0 ? n ~/ 2 : 3 * n + 1;
    steps++;
  }
  print(steps);
}` },
    { l: 'h', q: 'দশমিক থেকে binary: 13 → 1101।', hint: 'বারবার 2 দিয়ে ভাগ করো, ভাগশেষগুলো উল্টো ক্রমে পড়ো। String এর সামনে জোড়া লাগাও।', sol: `void main() {
  int n = 13;
  String bin = '';
  while (n > 0) {
    bin = '\${n % 2}$bin';
    n ~/= 2;
  }
  print(bin); // 1101
}` },
    { l: 'h', q: '(কম্পিউটারে চালাও) সংখ্যা অনুমান খেলা: কম্পিউটার 1–100 এর একটা সংখ্যা ভাববে। ইউজার অনুমান করবে, প্রতিবার "বড়" বা "ছোট" বলবে, মিললে কত চেষ্টায় পেরেছে বলবে।', sol: `import 'dart:io';
import 'dart:math';

void main() {
  int secret = Random().nextInt(100) + 1;
  int tries = 0;
  int guess;
  do {
    stdout.write('অনুমান করো: ');
    guess = int.tryParse(stdin.readLineSync() ?? '') ?? 0;
    tries++;
    if (guess > secret) print('আরো ছোট');
    if (guess < secret) print('আরো বড়');
  } while (guess != secret);
  print('সঠিক! $tries বার চেষ্টায় পেরেছ');
}` },
  ],
};

TRACES.pattern = {
  title: 'loop এর ভেতর loop: ত্রিভুজ',
  code: ['void main() {', '  for (int i = 1; i <= 3; i++) {', "    String line = '';", '    for (int j = 1; j <= i; j++) {', "      line += '* ';", '    }', '    print(line);', '  }', '}'],
  steps: [
    { l: 1, v: { i: 1 }, n: 'বাইরের loop: row 1। {{1 <= 3}} true।' },
    { l: 2, v: { line: "''" }, n: 'এই row এর জন্য খালি লেখা।' },
    { l: 3, v: { j: 1 }, n: 'ভেতরের loop: j = 1, {{1 <= i(1)}} true।' },
    { l: 4, v: { line: "'* '" }, n: 'একটা তারা যোগ।' },
    { l: 3, v: { j: 2 }, n: 'j = 2, {{2 <= 1}} false। ভেতরের loop শেষ।' },
    { l: 6, v: { j: null }, p: '* ', n: 'row 1 প্রিন্ট: 1টা তারা।' },
    { l: 1, v: { i: 2 }, n: 'বাইরের loop: row 2।' },
    { l: 2, v: { line: "''" }, n: 'আবার খালি লেখা দিয়ে শুরু।' },
    { l: 3, v: { j: 1 }, n: 'ভেতরের loop **আবার 1 থেকে** শুরু। {{1 <= 2}} true।' },
    { l: 4, v: { line: "'* '" }, n: 'তারা ১' },
    { l: 3, v: { j: 2 }, n: '{{2 <= 2}} true।' },
    { l: 4, v: { line: "'* * '" }, n: 'তারা ২' },
    { l: 3, v: { j: 3 }, n: '{{3 <= 2}} false, ভেতরের শেষ।' },
    { l: 6, v: { j: null }, p: '* * ', n: 'row 2: 2টা তারা।' },
    { l: 1, v: { i: 3 }, n: 'row 3।' },
    { l: 2, v: { line: "''" }, n: 'খালি লেখা।' },
    { l: 3, v: { j: 1 }, n: 'j = 1' },
    { l: 4, v: { line: "'* '" }, n: '' },
    { l: 3, v: { j: 2 }, n: 'j = 2' },
    { l: 4, v: { line: "'* * '" }, n: '' },
    { l: 3, v: { j: 3 }, n: 'j = 3' },
    { l: 4, v: { line: "'* * * '" }, n: '' },
    { l: 3, v: { j: 4 }, n: '{{4 <= 3}} false।' },
    { l: 6, v: { j: null }, p: '* * * ', n: 'row 3: 3টা তারা।' },
    { l: 1, v: { i: 4, line: null }, n: '{{4 <= 3}} false। সব শেষ! খেয়াল করো: row i তে ঠিক i টা তারা, কারণ ভেতরের শর্ত {{j <= i}}।' },
  ],
};

TOPICS['nested-loop'] = {
  short: 'Nested loop ও Pattern', title: 'Nested Loop আর Pattern', days: 'দিন ৫–৬',
  goal: 'loop এর ভেতর loop কিভাবে ঘোরে সেটা বোঝা, আর যেকোনো pattern এর নিয়ম বের করে কোড লেখা।',
  learn: [
    'loop এর ভেতরে loop। **বাইরের loop একবার ঘুরলে, ভেতরের loop পুরোটা ঘোরে।** ঘড়ির মতো: ঘন্টার কাঁটা এক ঘর গেলে মিনিটের কাঁটা পুরো এক চক্কর দেয়।',
    { code: `void main() {
  for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
      print('i = $i, j = $j');
    }
  }
}`, out: 'i = 1, j = 1\ni = 1, j = 2\ni = 2, j = 1\ni = 2, j = 2\ni = 3, j = 1\ni = 3, j = 2' },
    { h: 'Pattern বানানোর কৌশল' },
    'প্যাটার্ন দেখে সরাসরি কোড লিখতে যেও না। আগে খাতায় একটা টেবিল বানাও: **row নম্বর (i) → ঐ row তে কী কয়টা**। তারপর i এর সাথে সম্পর্কটা খোঁজো। সেটাই ভেতরের loop এর শর্ত।',
    { widget: 'patternLab' },
    { tip: 'বাইরের loop = কয়টা লাইন (row)। ভেতরের loop = প্রতিটা লাইনে কী। প্রতিটা row শুরুর আগে {{line = \'\'}}, শেষে {{print(line)}}।' },
  ],
  how: [
    'বাইরের loop এর প্রতিটা ঘুরে ভেতরের loop নতুন করে শুরু হয়, j আবার 1।',
    'মোট কতবার ভেতরের কাজ চলে = বাইরের ঘুর × ভেতরের ঘুর (যদি ভেতরেরটা নির্দিষ্ট হয়)।',
    'নিচের যন্ত্রে দেখো কিভাবে row প্রতি তারার সংখ্যা বাড়ে।',
  ],
  traces: ['pattern'],
  quiz: [
    { q: 'print কয়বার হবে?', code: `for (int i = 1; i <= 3; i++) {
  for (int j = 1; j <= 4; j++) {
    print('*');
  }
}`, opts: ['3', '4', '7', '12'], a: 3, why: '3 টা row, প্রতিটায় 4 বার: 3 × 4 = 12।' },
    { q: 'শেষ লাইনের output কী?', code: `for (int i = 1; i <= 4; i++) {
  String s = '';
  for (int j = i; j <= 4; j++) {
    s += '$j';
  }
  print(s);
}`, opts: ['1234', '4', '44', '1'], a: 1, why: 'শেষ row এ i = 4, ভেতরের loop j = 4 থেকে 4 পর্যন্ত, একটাই: "4"।' },
  ],
  probs: [
    { l: 'e', q: '5×5 তারার বর্গ প্রিন্ট করো।', sol: `void main() {
  for (int i = 1; i <= 5; i++) {
    String line = '';
    for (int j = 1; j <= 5; j++) {
      line += '* ';
    }
    print(line);
  }
}` },
    { l: 'e', q: 'ডান ত্রিভুজ (n = 5): প্রথম row এ 1টা তারা, শেষ row এ 5টা।', sol: `void main() {
  int n = 5;
  for (int i = 1; i <= n; i++) {
    String line = '';
    for (int j = 1; j <= i; j++) {
      line += '* ';
    }
    print(line);
  }
}` },
    { l: 'e', q: 'উল্টো ত্রিভুজ (n = 5): প্রথম row এ 5টা, শেষে 1টা।', hint: 'টেবিল: row 1 → 5, row 2 → 4, ... row i → n - i + 1', sol: `void main() {
  int n = 5;
  for (int i = 1; i <= n; i++) {
    String line = '';
    for (int j = 1; j <= n - i + 1; j++) {
      line += '* ';
    }
    print(line);
  }
}` },
    { l: 'e', q: 'সংখ্যার ত্রিভুজ: 1 / 1 2 / 1 2 3 / 1 2 3 4', sol: `void main() {
  for (int i = 1; i <= 4; i++) {
    String line = '';
    for (int j = 1; j <= i; j++) {
      line += '$j ';
    }
    print(line);
  }
}` },
    { l: 'm', q: 'এই প্যাটার্ন: 1 / 2 2 / 3 3 3 / 4 4 4 4', hint: 'আগেরটার সাথে পার্থক্য শুধু কী প্রিন্ট হচ্ছে: j না, i।', sol: `void main() {
  for (int i = 1; i <= 4; i++) {
    String line = '';
    for (int j = 1; j <= i; j++) {
      line += '$i ';
    }
    print(line);
  }
}` },
    { l: 'm', q: "Floyd's triangle: 1 / 2 3 / 4 5 6 / 7 8 9 10", hint: 'একটা আলাদা counter লাগবে যেটা loop এর বাইরে থেকে শুধু বাড়তেই থাকে।', sol: `void main() {
  int k = 1;
  for (int i = 1; i <= 4; i++) {
    String line = '';
    for (int j = 1; j <= i; j++) {
      line += '$k ';
      k++;
    }
    print(line);
  }
}` },
    { l: 'm', q: 'পিরামিড (n = 4): আগে স্পেস, তারপর তারা। উপরের প্যাটার্ন ল্যাবে নিয়ম দেখো।', sol: `void main() {
  int n = 4;
  for (int i = 1; i <= n; i++) {
    String line = '';
    for (int s = 1; s <= n - i; s++) line += ' ';
    for (int j = 1; j <= 2 * i - 1; j++) line += '*';
    print(line);
  }
}` },
    { l: 'm', q: '1 থেকে 10 পর্যন্ত সবগুলোর নামতা প্রিন্ট করো, প্রতিটা নামতার পর একটা ফাঁকা লাইন।', sol: `void main() {
  for (int n = 1; n <= 10; n++) {
    for (int i = 1; i <= 10; i++) {
      print('$n x $i = \${n * i}');
    }
    print('');
  }
}` },
    { l: 'm', q: 'ফাঁপা বর্গ (n = 5): শুধু কিনারায় তারা, ভেতরে স্পেস।', hint: 'তারা বসবে যদি প্রথম/শেষ row অথবা প্রথম/শেষ column হয়।', sol: `void main() {
  int n = 5;
  for (int i = 1; i <= n; i++) {
    String line = '';
    for (int j = 1; j <= n; j++) {
      if (i == 1 || i == n || j == 1 || j == n) {
        line += '* ';
      } else {
        line += '  ';
      }
    }
    print(line);
  }
}` },
    { l: 'h', q: 'হীরা (diamond), n = 4: উপরে পিরামিড, নিচে উল্টো পিরামিড।', hint: 'দুইটা আলাদা বাইরের loop: একটা 1 থেকে n, আরেকটা n-1 থেকে 1।', sol: `void main() {
  int n = 4;
  for (int i = 1; i <= n; i++) {
    print(' ' * (n - i) + '*' * (2 * i - 1));
  }
  for (int i = n - 1; i >= 1; i--) {
    print(' ' * (n - i) + '*' * (2 * i - 1));
  }
}`, note: "Dart এ {{'*' * 3}} = {{'***'}}। String কে সংখ্যা দিয়ে গুণ করলে ততবার পুনরাবৃত্তি হয়। ভেতরের loop এর বদলে এটা ব্যবহার করলাম।" },
    { l: 'h', q: '0-1 ত্রিভুজ: 1 / 0 1 / 1 0 1 / 0 1 0 1', hint: 'i + j জোড় হলে 1, বিজোড় হলে 0। টেবিল বানিয়ে মিলিয়ে দেখো।', sol: `void main() {
  for (int i = 1; i <= 4; i++) {
    String line = '';
    for (int j = 1; j <= i; j++) {
      line += (i + j) % 2 == 0 ? '1 ' : '0 ';
    }
    print(line);
  }
}` },
    { l: 'h', q: 'অক্ষরের ত্রিভুজ: A / A B / A B C / A B C D', hint: "{{String.fromCharCode(65)}} হলো 'A', 66 হলো 'B'।", sol: `void main() {
  for (int i = 1; i <= 4; i++) {
    String line = '';
    for (int j = 0; j < i; j++) {
      line += '\${String.fromCharCode(65 + j)} ';
    }
    print(line);
  }
}` },
  ],
};

CARDS.push(
  { w: 3, f: 'শর্ত সত্য হলে এক কাজ, না হলে আরেক', b: "if (x > 0) {\n  ...\n} else {\n  ...\n}" },
  { w: 3, f: 'অনেকগুলো শর্ত পরপর', b: 'if (a) {\n} else if (b) {\n} else {\n}' },
  { w: 3, f: 'এক লাইনের if-else (ternary)', b: "var s = n > 0 ? 'হ্যাঁ' : 'না';" },
  { w: 3, f: 'switch এর গঠন', b: "switch (x) {\n  case 1:\n    print('এক');\n  default:\n    print('অন্য');\n}" },
  { w: 3, f: 'switch expression', b: "var s = switch (x) {\n  1 => 'এক',\n  _ => 'অন্য',\n};" },
  { w: 4, f: '1 থেকে n পর্যন্ত for loop', b: 'for (int i = 1; i <= n; i++) {\n  ...\n}' },
  { w: 4, f: 'list এর প্রতিটা জিনিসে loop', b: 'for (var x in list) {\n  ...\n}' },
  { w: 4, f: 'শর্ত সত্য থাকা পর্যন্ত loop', b: 'while (n > 0) {\n  ...\n}' },
  { w: 4, f: 'loop থামাও / এই ঘুর বাদ দাও', b: 'break;\ncontinue;' },
  { w: 4, f: 'সংখ্যার শেষ অঙ্ক / শেষ অঙ্ক বাদ', b: 'n % 10\nn ~/ 10' },
  { w: 4, f: 'একটা অক্ষর n বার', b: "'*' * n" },
);
