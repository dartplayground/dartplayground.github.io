// "শুরুর আগে" টপিক: naming (Dart এ নাম রাখার নিয়ম আর ভালো অভ্যাস), ইংরেজি দুর্বলদের কথা মাথায় রেখে
// words: বাংলা → ইংরেজি শব্দ ভাণ্ডার, nameLab widget খোঁজে আর নাম বানায়। k: 'n' জিনিস, 'v' কাজ, 'a' অবস্থা (bool এর জন্য)

TOPICS['naming'] = {
  short: 'নাম রাখার নিয়ম', title: 'নাম রাখার নিয়ম: variable, function, class এর ভালো নাম', days: 'Variable শেখার সাথে সাথে',
  goal: 'Dart এর নিয়ম আর অভ্যাস মেনে এমন নাম দেওয়া যেটা পড়লেই বোঝা যায় ভেতরে কী আছে বা কী কাজ করে। ইংরেজি কম জানলেও ছোট কয়েকটা শব্দ দিয়ে।',
  learn: [
    'রাফি এক মাস আগে একটা প্রোগ্রাম লিখেছিল: {{var a = 120; var b = 3; var c = a * b;}}। আজ খুলে নিজেই বুঝছে না {{a}} কী, {{b}} কী। অথচ যদি লিখতো {{var price = 120; var quantity = 3; var total = price * quantity;}}, পড়লেই বুঝতো: দাম, কয়টা, মোট। **ভালো নাম হলো কোডের ভেতরে লেখা ব্যাখ্যা।**',
    { tip: 'ইংরেজি দুর্বল? চিন্তা নেই। প্রোগ্রামে একই ৫০-১০০টা সহজ শব্দ বারবার লাগে: total, count, name, price, find, add, is, has ... নিচে বাংলা থেকে ইংরেজি শব্দ খোঁজার যন্ত্র আছে। আর অচেনা শব্দ দেখলে [শব্দকোষ](#glossary)।' },
    { h: 'নিয়ম (না মানলে Error)' },
    { table: [['নিয়ম', 'ঠিক', 'ভুল'], ['শুধু ইংরেজি অক্ষর (a-z, A-Z), সংখ্যা (0-9), আর {{_}}', '{{age}}, {{total_2}}', '{{বয়স}}, {{total-price}}'], ['সংখ্যা দিয়ে শুরু না', '{{player2}}', '{{2player}}'], ['মাঝে স্পেস না', '{{totalPrice}}', '{{total price}}'], ['Dart এর নিজের শব্দ (keyword) না', '{{myClass}}', '{{class}}, {{if}}, {{for}}, {{var}}, {{void}}'], ['বড়-ছোট হাতের অক্ষর আলাদা', '{{age}} আর {{Age}} দুইটা আলাদা variable', '(তাই একই নাম দুই রকমে লিখো না)']] },
    { code: "Error: The non-ASCII character 'ব' (U+09AC) can't be used in identifiers, only in strings and comments.", lang: 'plaintext' },
    'বাংলা নাম দিলে এই Error। বাংলা চলবে **শুধু লেখার ভেতরে** ({{\'বয়স\'}}) আর **comment এ** ({{// বয়স}})। নাম সবসময় ইংরেজি অক্ষরে।',
    { h: 'অভ্যাস (মানলে সবাই সহজে পড়ে)' },
    'নিয়ম না মানলে কোড চলেই না। অভ্যাস না মানলে কোড চলে, কিন্তু অন্যরা (আর VS Code) বলবে "এভাবে লেখো না"। সারা পৃথিবীর Dart প্রোগ্রামাররা একই অভ্যাস মানে, তাই অন্যের কোড পড়তে সহজ লাগে। মূল ৩টা লেখার ধরন:',
    { table: [['ধরন', 'দেখতে কেমন', 'কিভাবে'], ['**lowerCamelCase**', '{{totalPrice}}, {{studentName}}, {{isPassed}}', 'প্রথম শব্দ পুরো ছোট হাতের, পরের প্রতিটা শব্দের প্রথম অক্ষর বড়। উটের কুঁজের মতো উঁচু-নিচু, তাই নাম "camel"।'], ['**UpperCamelCase**', '{{Student}}, {{BankAccount}}', 'একই, শুধু প্রথম অক্ষরও বড়।'], ['**snake_case**', '{{my_app.dart}}, {{bank_account.dart}}', 'সব ছোট হাতের, শব্দের মাঝে {{_}}। সাপের মতো লম্বা, তাই "snake"।']] },
    { table: [['কী', 'ধরন', 'উদাহরণ'], ['variable, parameter', 'lowerCamelCase', '{{age}}, {{totalMarks}}, {{userName}}'], ['function, method', 'lowerCamelCase', '{{calculateTotal()}}, {{printReport()}}'], ['const আর final', 'lowerCamelCase (সব বড় হাতের না!)', '{{const maxScore = 100;}}'], ['class, enum', 'UpperCamelCase', '{{Student}}, {{BankAccount}}, {{Color}}'], ['ফাইল, ফোল্ডার, প্রজেক্ট', 'snake_case', '{{student_card.dart}}, {{guess_game}}'], ['শুধু এই ফাইলের ভেতরে (private)', 'শুরুতে {{_}}', '{{_secret}}, {{_Helper}}']] },
    { warn: 'অন্য ভাষা (Java, C, Python) থেকে আসলে অভ্যাস থাকে ধ্রুবকের নাম {{MAX_SCORE}} লেখার। Dart এ এটা চলে, কিন্তু Dart এর অভ্যাস হলো {{maxScore}}। আর {{student_name}} এর মতো snake_case শুধু **ফাইলের নামে**, variable এ না।' },
    { h: 'নিজে খেলো: নাম যাচাই আর নাম বানাও' },
    { widget: 'nameLab', arg: 'naming' },
    { h: 'কিসের নাম কেমন হবে: ছোট রেসিপি' },
    { table: [['কী', 'নামের গঠন', 'ভালো উদাহরণ', 'খারাপ উদাহরণ'], ['সাধারণ variable', '**জিনিসের নাম** (noun): ভেতরে কী আছে', '{{price}}, {{studentName}}, {{totalMarks}}', '{{x}}, {{data}}, {{temp}}'], ['bool (true/false)', '**is / has / can / should** + অবস্থা: পড়লে প্রশ্নের মতো', '{{isPassed}}, {{hasTicket}}, {{canVote}}', '{{pass}}, {{ticket}}, {{flag}}'], ['List, Set', '**বহুবচন** (শেষে s): অনেকগুলো', '{{students}}, {{prices}}, {{names}}', '{{studentList1}}, {{s}}'], ['Map', 'কী থেকে কী: **"key" By / To / Of**', '{{priceOfItem}}, {{ageByName}}', '{{map1}}'], ['গোনা, যোগফল', '**জিনিস + Count / total / sum**', '{{studentCount}}, {{totalPrice}}, {{sumOfMarks}}', '{{c}}, {{t}}'], ['function', '**কাজ (verb) + জিনিস**: কী করে', '{{calculateTotal()}}, {{findMax()}}, {{printReport()}}', '{{total()}}, {{doIt()}}, {{func1()}}'], ['true/false ফেরত দেওয়া function', '**is / has / can** + অবস্থা', '{{isEven(n)}}, {{hasSpace(text)}}', '{{checkEven(n)}}'], ['class', '**একবচন জিনিস**, বড় হাতে শুরু', '{{Student}}, {{BankAccount}}', '{{Students}}, {{student}}, {{Data}}'], ['loop এর গণনা', 'ছোট এলাকায় {{i}}, {{j}}, {{k}} চলে', '{{for (int i = 0; ...)}}', 'বড় এলাকায় এক অক্ষর']] },
    { h: 'আগে আর পরে' },
    { code: `// আগে: কাজ করে, কিন্তু কী করে?
var l = [72, 45, 88];
var c = 0;
for (var x in l) {
  if (x >= 40) c++;
}
bool f = c == l.length;

// পরে: পড়লেই বোঝা যায়
var marks = [72, 45, 88];
var passCount = 0;
for (var mark in marks) {
  if (mark >= 40) passCount++;
}
bool isAllPassed = passCount == marks.length;` },
    { h: 'এড়িয়ে চলো' },
    { list: ['**অদ্ভুত ছোট রূপ**: {{cnt}}, {{std}}, {{nm}}, {{tmp}}। পুরো লেখো: {{count}}, {{student}}, {{name}}। লম্বা নামে কোনো ক্ষতি নেই, VS Code নিজেই পুরো করে দেয় (Tab)।', '**নামের শেষে সংখ্যা**: {{list1}}, {{list2}}। কী পার্থক্য? {{oldPrices}}, {{newPrices}} লেখো।', '**অস্পষ্ট নাম**: {{data}}, {{info}}, {{value}}, {{thing}}, {{stuff}}। কিসের data?', '**মিথ্যা নাম**: {{maxAge}} নামে ছোট বয়স রাখা, বা {{isOpen}} নামের function যেটা আসলে দোকান খোলে। নাম যা বলে, কাজও যেন তাই হয়।', '**Banglish**: {{dam}}, {{nambar}}, {{boyosh}}। চলে, কিন্তু বানান একেকজন একেক রকম লেখে, আর বিদেশি কেউ পড়তে পারে না। সহজ ইংরেজি শব্দই ভালো: {{price}}, {{number}}, {{age}}।', '**শুধু বড়-ছোট অক্ষরে আলাদা দুইটা নাম**: {{age}} আর {{Age}} একসাথে। নিশ্চিত গোলমাল।'] },
    { h: 'ছোট শব্দ (acronym) কিভাবে' },
    'Dart এর অভ্যাস: তিন বা বেশি অক্ষরের ছোট রূপ সাধারণ শব্দের মতো লেখো: {{HttpRequest}} ({{HTTPRequest}} না), {{userId}}, {{htmlText}}। নাম ছোট হাতের অক্ষরে শুরু হলে ছোট রূপটাও ছোট: {{urlText}}, {{idCard}}।',
    { h: 'যন্ত্রকে পাহারায় রাখো' },
    { code: 'dart analyze', lang: 'bash', out: "info - bin/main.dart:2:5 - The variable name 'student_age' isn't a lowerCamelCase identifier. Try changing the name to follow the lowerCamelCase style.\ninfo - bin/main.dart:3:7 - The type name 'student_card' isn't an UpperCamelCase identifier. Try changing the name to follow the UpperCamelCase style." },
    '{{dart create}} দিয়ে বানানো প্রজেক্টে {{dart analyze}} (আর VS Code এর নীল দাগ) এই অভ্যাসগুলো নিজেই পাহারা দেয়। নাম বদলাতে নামের উপর **F2** (Android Studio তে **Shift + F6**): সব জায়গায় একসাথে বদলাবে।',
  ],
  how: [
    'কম্পিউটারের কাছে নামের কোনো মানে নেই: {{a}} আর {{totalPrice}} তার কাছে একই। Dart নাম দিয়ে শুধু চেনে কোনটা কোন variable। মানে শুধু **মানুষের** জন্য।',
    'নাম দেখে Dart চেনে এটা নাম, নাকি সংখ্যা, নাকি চিহ্ন। সংখ্যা দিয়ে শুরু হলে সে ভাবে সংখ্যা, স্পেস থাকলে ভাবে দুইটা আলাদা শব্দ, তাই এগুলো নিয়ম।',
    'বড়-ছোট অক্ষরের ধরন (camelCase ইত্যাদি) Dart চালাতে লাগে না, কিন্তু একনজরে বোঝায় এটা কী: বড় হাতে শুরু মানে class, ছোট হাতে শুরু মানে variable বা function, শুরুতে {{_}} মানে private।',
  ],
  quiz: [
    { q: 'কোনটা Dart এ চলবেই না (Error)?', opts: ['total_price', 'totalPrice', '2ndPlayer', 'TotalPrice'], a: 2, why: 'সংখ্যা দিয়ে শুরু চলে না। বাকিগুলো চলে, যদিও variable এর জন্য অভ্যাস মতো শুধু {{totalPrice}} ঠিক।' },
    { q: 'একজন ছাত্র পাস করেছে কিনা, এই bool variable এর সবচেয়ে ভালো নাম?', opts: ['pass', 'passed', 'isPassed', 'PASS'], a: 2, why: 'bool এর নাম is/has/can দিয়ে, পড়লে প্রশ্নের মতো: {{if (isPassed)}} = "যদি পাস করে থাকে"।' },
    { q: 'class এর নাম কোনটা ঠিক?', opts: ['bankAccount', 'BankAccount', 'bank_account', 'BANK_ACCOUNT'], a: 1, why: 'class: UpperCamelCase। ফাইলের নাম হবে {{bank_account.dart}}।' },
    { q: 'সর্বোচ্চ নম্বর 100, কখনো বদলাবে না। Dart এর অভ্যাস মতো কোনটা?', opts: ['const MAX_SCORE = 100;', 'const maxScore = 100;', 'const MaxScore = 100;', 'const max_score = 100;'], a: 1, why: 'Dart এ const ও lowerCamelCase। (MAX_SCORE চলে, কিন্তু dart analyze সতর্ক করবে।)' },
    { q: 'কোন function এর নাম সবচেয়ে ভালো?', opts: ['total()', 'calculateTotal()', 'doTotal1()', 'tot()'], a: 1, why: 'function কাজ করে, তাই নাম কাজ (verb) দিয়ে শুরু: calculate, find, print, add।' },
  ],
  probs: [
    { l: 'e', q: 'এই নামগুলো ঠিক করো (lowerCamelCase): {{Student_Name}}, {{TOTAL}}, {{phone number}}, {{1stPrize}}, {{user-age}}', ans: '{{studentName}}, {{total}}, {{phoneNumber}}, {{firstPrize}}, {{userAge}}।\nস্পেস, {{-}}, {{_}} সরিয়ে পরের শব্দের প্রথম অক্ষর বড়। সংখ্যা দিয়ে শুরু হলে শব্দে লেখো (first)।' },
    { l: 'e', q: 'এগুলোর জন্য ইংরেজি নাম দাও (নিচের যন্ত্রে শব্দ খুঁজে নিতে পারো): মোট দাম, ছাত্রের বয়স, টিকিট আছে কিনা, ছাত্রদের তালিকা, সবচেয়ে বড় নম্বর।', ans: '{{totalPrice}}, {{studentAge}}, {{hasTicket}}, {{students}}, {{maxMarks}} (বা {{highestMark}})।\nbool এর আগে has/is, তালিকা বহুবচন।' },
    { l: 'e', q: 'কোনটা কী: variable, function, class না ফাইল? বড়-ছোট অক্ষর দেখে বলো: {{Player}}, {{playerName}}, {{player_card.dart}}, {{movePlayer()}}, {{_score}}', ans: '{{Player}}: class (বড় হাতে শুরু)\n{{playerName}}: variable\n{{player_card.dart}}: ফাইল (snake_case)\n{{movePlayer()}}: function (কাজ + বন্ধনী)\n{{_score}}: private variable (শুরুতে _)' },
    { l: 'm', q: 'নিচের কোডের সব নাম ভালো করো, কাজ একই রেখে।', code: `void main() {
  var L = [450, 120, 80];
  var T = 0;
  for (var I in L) {
    T += I;
  }
  bool B = T > 500;
  print(B);
}`, sol: `void main() {
  var prices = [450, 120, 80];
  var totalPrice = 0;
  for (var price in prices) {
    totalPrice += price;
  }
  bool isExpensive = totalPrice > 500;
  print(isExpensive);
}`, note: 'list বহুবচন (prices), তার একটা জিনিস একবচন (price), bool is দিয়ে। এখন শেষ লাইনটা পড়লেই বোঝা যায়: "দামি কিনা প্রিন্ট করো"।' },
    { l: 'm', q: 'এই function গুলোর নাম দাও: (ক) দুইটা সংখ্যার বড়টা ফেরত দেয়, (খ) একটা সংখ্যা মৌলিক কিনা বলে, (গ) ছাত্রের রিপোর্ট কার্ড প্রিন্ট করে, (ঘ) list থেকে একটা নাম মুছে।', ans: '(ক) {{maxOf(a, b)}} বা {{findLarger(a, b)}}\n(খ) {{isPrime(n)}}: true/false দেয়, তাই is\n(গ) {{printReportCard(student)}}\n(ঘ) {{removeName(names, name)}}\nসবগুলো কাজের শব্দ (verb) দিয়ে শুরু, true/false হলে is।' },
    { l: 'h', q: 'একটা ছোট দোকানের হিসাবের জন্য নাম ঠিক করো (শুধু নাম, কোড না): class (জিনিস), class এর ভেতরে নাম আর দাম, সব জিনিসের তালিকা, মোট দাম বের করার function, স্টকে আছে কিনা এমন bool, ফাইলের নাম।', ans: 'class: {{Product}} (একবচন, বড় হাতে)\nভেতরে: {{name}}, {{price}} (class এর নাম আবার লিখতে হয় না, {{productName}} না)\nতালিকা: {{products}}\nfunction: {{calculateTotalPrice(products)}}\nbool: {{isInStock}}\nফাইল: {{product.dart}} বা {{shop.dart}} (snake_case)' },
  ],
  words: [
    // জিনিস (noun)
    { bn: 'নাম', en: 'name', k: 'n' }, { bn: 'বয়স', en: 'age', k: 'n' }, { bn: 'দাম', en: 'price', k: 'n' }, { bn: 'মোট', en: 'total', k: 'n' },
    { bn: 'যোগফল', en: 'sum', k: 'n' }, { bn: 'গড়', en: 'average', k: 'n' }, { bn: 'সংখ্যা (কয়টা)', en: 'count', k: 'n' }, { bn: 'সংখ্যা (number)', en: 'number', k: 'n' },
    { bn: 'নম্বর (পরীক্ষার)', en: 'mark', k: 'n' }, { bn: 'ফলাফল', en: 'result', k: 'n' }, { bn: 'স্কোর', en: 'score', k: 'n' }, { bn: 'ছাত্র', en: 'student', k: 'n' },
    { bn: 'শিক্ষক', en: 'teacher', k: 'n' }, { bn: 'ক্লাস / শ্রেণি', en: 'grade', k: 'n' }, { bn: 'বিষয়', en: 'subject', k: 'n' }, { bn: 'খেলোয়াড়', en: 'player', k: 'n' },
    { bn: 'ব্যবহারকারী', en: 'user', k: 'n' }, { bn: 'পাসওয়ার্ড', en: 'password', k: 'n' }, { bn: 'বার্তা', en: 'message', k: 'n' }, { bn: 'লেখা', en: 'text', k: 'n' },
    { bn: 'শব্দ', en: 'word', k: 'n' }, { bn: 'অক্ষর', en: 'letter', k: 'n' }, { bn: 'বাক্য', en: 'sentence', k: 'n' }, { bn: 'তালিকা', en: 'list', k: 'n' },
    { bn: 'জিনিস', en: 'item', k: 'n' }, { bn: 'পণ্য', en: 'product', k: 'n' }, { bn: 'দোকান', en: 'shop', k: 'n' }, { bn: 'টাকা', en: 'money', k: 'n' },
    { bn: 'ব্যালেন্স / বাকি টাকা', en: 'balance', k: 'n' }, { bn: 'ছাড়', en: 'discount', k: 'n' }, { bn: 'পরিমাণ', en: 'amount', k: 'n' }, { bn: 'কয়টা (পরিমাণ)', en: 'quantity', k: 'n' },
    { bn: 'তারিখ', en: 'date', k: 'n' }, { bn: 'সময়', en: 'time', k: 'n' }, { bn: 'দিন', en: 'day', k: 'n' }, { bn: 'বছর', en: 'year', k: 'n' },
    { bn: 'শহর', en: 'city', k: 'n' }, { bn: 'ঠিকানা', en: 'address', k: 'n' }, { bn: 'ফোন', en: 'phone', k: 'n' }, { bn: 'দৈর্ঘ্য', en: 'length', k: 'n' },
    { bn: 'প্রস্থ', en: 'width', k: 'n' }, { bn: 'উচ্চতা', en: 'height', k: 'n' }, { bn: 'ওজন', en: 'weight', k: 'n' }, { bn: 'তাপমাত্রা', en: 'temperature', k: 'n' },
    { bn: 'দূরত্ব', en: 'distance', k: 'n' }, { bn: 'গতি', en: 'speed', k: 'n' }, { bn: 'সারি', en: 'row', k: 'n' }, { bn: 'কলাম', en: 'column', k: 'n' },
    { bn: 'ক্রম নম্বর', en: 'index', k: 'n' }, { bn: 'প্রথম', en: 'first', k: 'n' }, { bn: 'শেষ', en: 'last', k: 'n' }, { bn: 'সর্বোচ্চ / সবচেয়ে বড়', en: 'max', k: 'n' },
    { bn: 'সর্বনিম্ন / সবচেয়ে ছোট', en: 'min', k: 'n' }, { bn: 'আগের', en: 'previous', k: 'n' }, { bn: 'পরের', en: 'next', k: 'n' }, { bn: 'নতুন', en: 'new', k: 'n' },
    { bn: 'পুরানো', en: 'old', k: 'n' }, { bn: 'জীবন (গেমে)', en: 'life', k: 'n' }, { bn: 'লেভেল', en: 'level', k: 'n' }, { bn: 'প্রশ্ন', en: 'question', k: 'n' },
    { bn: 'উত্তর', en: 'answer', k: 'n' }, { bn: 'হিসাব (ব্যাংকের)', en: 'account', k: 'n' }, { bn: 'ভাড়া', en: 'fare', k: 'n' }, { bn: 'বিল', en: 'bill', k: 'n' },
    // কাজ (verb), function এর শুরুতে
    { bn: 'হিসাব করো', en: 'calculate', k: 'v' }, { bn: 'খুঁজে বের করো', en: 'find', k: 'v' }, { bn: 'দাও / আনো', en: 'get', k: 'v' }, { bn: 'বসাও / ঠিক করো', en: 'set', k: 'v' },
    { bn: 'যোগ করো (তালিকায়)', en: 'add', k: 'v' }, { bn: 'মুছো', en: 'remove', k: 'v' }, { bn: 'বদলাও / হালনাগাদ', en: 'update', k: 'v' }, { bn: 'দেখাও', en: 'show', k: 'v' },
    { bn: 'প্রিন্ট করো', en: 'print', k: 'v' }, { bn: 'গোনো', en: 'count', k: 'v' }, { bn: 'যাচাই করো', en: 'check', k: 'v' }, { bn: 'বদলে অন্য রূপ দাও', en: 'convert', k: 'v' },
    { bn: 'সাজাও', en: 'sort', k: 'v' }, { bn: 'খোঁজো', en: 'search', k: 'v' }, { bn: 'লোড করো / আনো', en: 'load', k: 'v' }, { bn: 'সেভ করো', en: 'save', k: 'v' },
    { bn: 'বানাও', en: 'create', k: 'v' }, { bn: 'শুরু করো', en: 'start', k: 'v' }, { bn: 'থামাও', en: 'stop', k: 'v' }, { bn: 'পড়ো', en: 'read', k: 'v' },
    { bn: 'লেখো', en: 'write', k: 'v' }, { bn: 'উল্টাও', en: 'reverse', k: 'v' }, { bn: 'ছাঁকো / বাছাই করো', en: 'filter', k: 'v' }, { bn: 'মেলাও / তুলনা করো', en: 'compare', k: 'v' },
    { bn: 'ভাগ করো', en: 'split', k: 'v' }, { bn: 'জোড়া লাগাও', en: 'join', k: 'v' }, { bn: 'খেলো', en: 'play', k: 'v' }, { bn: 'সরাও', en: 'move', k: 'v' },
    // অবস্থা (bool এর জন্য: is/has/can + এটা)
    { bn: 'পাস করেছে', en: 'passed', k: 'a' }, { bn: 'খালি', en: 'empty', k: 'a' }, { bn: 'পূর্ণ / ভরা', en: 'full', k: 'a' }, { bn: 'ঠিক / বৈধ', en: 'valid', k: 'a' },
    { bn: 'খোলা', en: 'open', k: 'a' }, { bn: 'বন্ধ', en: 'closed', k: 'a' }, { bn: 'চালু', en: 'active', k: 'a' }, { bn: 'পাওয়া গেছে', en: 'found', k: 'a' },
    { bn: 'শেষ হয়েছে', en: 'done', k: 'a' }, { bn: 'লগইন করা', en: 'loggedIn', k: 'a' }, { bn: 'জোড়', en: 'even', k: 'a' }, { bn: 'মৌলিক', en: 'prime', k: 'a' },
    { bn: 'প্রাপ্তবয়স্ক', en: 'adult', k: 'a' }, { bn: 'ছুটির দিন', en: 'holiday', k: 'a' }, { bn: 'দামি', en: 'expensive', k: 'a' }, { bn: 'স্টকে আছে', en: 'inStock', k: 'a' },
  ],
};

CARDS.push(
  { w: 's', f: 'variable আর function এর নামের ধরন', b: 'lowerCamelCase\ntotalPrice, calculateTotal()' },
  { w: 's', f: 'class এর নাম / ফাইলের নাম', b: 'class: BankAccount (UpperCamelCase)\nফাইল: bank_account.dart (snake_case)' },
  { w: 's', f: 'bool এর নাম কিভাবে শুরু', b: 'is / has / can / should\nisPassed, hasTicket, canVote' },
  { w: 's', f: 'List এর নাম', b: 'বহুবচন: students, prices\nএকটা জিনিস: for (var student in students)' },
  { w: 's', f: 'নামে কোনটা চলে না', b: 'বাংলা অক্ষর, স্পেস, - চিহ্ন,\nসংখ্যা দিয়ে শুরু, keyword (class, if)' },
);
