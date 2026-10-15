// Extra টপিক: Error অভিধান। Dart এর কমন exception আর compile error, বাংলায় মানে আর সমাধান
// dict এর প্রতিটা: n = নাম, k = 'run' (চলার সময়) বা 'compile' (চালানোর আগে), msg = আসল মেসেজ যেমন দেখায়,
// m = বাংলায় মানে, bad = যে কোডে হয়, good = ঠিক করা কোড, fix = কী করবে, tags = খোঁজার জন্য বাড়তি শব্দ
// app.js এর errLab widget এই তালিকা দেখায় আর খোঁজে

TOPICS['errors'] = {
  short: 'Error অভিধান', title: 'Error অভিধান: Dart এর কমন Error বাংলায়', days: 'যখনই Error দেখবে',
  goal: 'লাল Error মেসেজ দেখে ভয় না পেয়ে বুঝতে পারা: কী হয়েছে, কোন লাইনে, কেন, আর কিভাবে ঠিক করবো।',
  learn: [
    'Error মেসেজ ইংরেজিতে, লম্বা আর ভয়ের মনে হয়। কিন্তু আসলে প্রতিটা মেসেজ খুব নির্দিষ্ট করে বলে কী সমস্যা। একই অল্প কয়েকটা Error বারবার আসে। এই পাতায় সবচেয়ে কমন গুলো বাংলায় লেখা আছে। নিচের অভিধানে তোমার Error টা **কপি-পেস্ট** করো, মিলে যাওয়াটা উপরে চলে আসবে।',
    { h: 'দুই সময়ের Error' },
    { table: [['', 'চালানোর আগে (compile-time)', 'চলার সময় (runtime)'], ['কখন', '{{dart run}} চাপার সাথে সাথে, বা VS Code এ লাল দাগ', 'প্রোগ্রাম চলতে চলতে হঠাৎ থেমে যায় (crash)'], ['কী দেখায়', '{{Error: ...}} আর লাইন নম্বর', '{{Unhandled exception:}} তারপর Error এর নাম'], ['একটা লাইনও চলে?', 'না', 'হ্যাঁ, সমস্যার লাইন পর্যন্ত চলে'], ['উদাহরণ', '{{;}} নেই, ভুল type, বানান ভুল', 'ভুল index, null, সংখ্যা না এমন লেখা parse']] },
    { h: 'চালানোর আগের Error পড়া' },
    { code: `bin/main.dart:4:20: Error: A value of type 'String' can't be assigned to a variable of type 'int'.
  int age = 'চৌদ্দ';
            ^`, lang: 'plaintext' },
    { list: ['{{bin/main.dart}}: কোন ফাইলে।', '{{4:20}}: লাইন 4, কলাম 20।', '{{Error: ...}}: কী সমস্যা। নিচের অভিধানে এই লেখাটা খোঁজো।', '{{^}}: ঠিক কোন জায়গায়।'] },
    { h: 'চলার সময়ের Error পড়া: stack trace' },
    { code: `Unhandled exception:
RangeError (index): Index out of range: index should be less than 3: 5
#0      List.[] (dart:core-patch/growable_array.dart)
#1      showItem (file:///home/rafi/app/bin/main.dart:7:15)
#2      main (file:///home/rafi/app/bin/main.dart:2:3)`, lang: 'plaintext' },
    { list: ['**প্রথম লাইন** ({{Unhandled exception:}}): কেউ এই সমস্যা ধরেনি ({{try/catch}} নেই), তাই প্রোগ্রাম থেমে গেছে।', '**দ্বিতীয় লাইন**: Error এর নাম আর বিবরণ। এটাই সবচেয়ে জরুরি, এটা অভিধানে খোঁজো।', '**{{#0, #1, #2...}}**: এই লাইনগুলোকে বলে **stack trace**। কোন function কাকে ডেকেছিল, উল্টো ক্রমে। {{#0}} হলো ঠিক যেখানে সমস্যা হলো।', '**{{dart:core}} এর লাইন বাদ দাও**, নিচে নামতে থাকো যতক্ষণ না **তোমার ফাইলের নাম** পাও। উপরের উদাহরণে {{main.dart:7:15}}: তোমার ফাইলের লাইন 7। ওখানে যাও।'] },
    { h: 'Exception নাকি Error?' },
    'নামের শেষে দুই রকম শব্দ দেখবে, এদের মানে একটু আলাদা:',
    { table: [['', '{{...Exception}}', '{{...Error}}'], ['মানে', 'বাইরের কারণে সমস্যা, হতেই পারে', 'প্রোগ্রামারের (তোমার) কোডে ভুল'], ['উদাহরণ', 'ইউজার সংখ্যার জায়গায় অক্ষর দিল ({{FormatException}}), ফাইল নেই ({{FileSystemException}})', 'নেই এমন index চাইলে ({{RangeError}}), null এ {{!}} ({{TypeError}})'], ['কী করবে', '{{try/catch}} দিয়ে ধরো, ইউজারকে সুন্দর করে বলো', 'catch করে লুকিয়ো না, **কোড ঠিক করো**']] },
    { h: 'অভিধান' },
    { widget: 'errLab' },
    { tip: 'অভিধানে না পেলে মেসেজের মূল অংশটা (ফাইলের নাম আর লাইন নম্বর বাদ দিয়ে) Google এ খোঁজো। প্রায় সবসময় কেউ না কেউ আগে একই সমস্যায় পড়েছে।' },
  ],
  how: [
    'কোনো লাইনে সমস্যা হলে Dart একটা **Error object** বানায় আর সেটা "ছুঁড়ে দেয়" (throw)। object এর ভেতরে থাকে নাম আর বিবরণ।',
    'Dart দেখে এই লাইন কোনো {{try}} এর ভেতরে আছে কিনা। থাকলে মিলে যাওয়া {{catch}} এ চলে যায়, প্রোগ্রাম চলতে থাকে।',
    'না থাকলে যে function এই function কে ডেকেছিল, সেখানে খোঁজে। এভাবে main পর্যন্ত। কোথাও না পেলে প্রোগ্রাম থেমে যায় আর {{Unhandled exception}} আর stack trace দেখায়। stack trace হলো এই খোঁজার পথের তালিকা।',
    'চালানোর আগের Error এ কিছুই চলে না: Dart কোড পড়েই বুঝে যায় সমস্যা আছে, তাই চালানোর চেষ্টাই করে না।',
  ],
  quiz: [
    { q: 'নিচের stack trace এ তুমি কোন ফাইলের কোন লাইনে আগে দেখবে?', code: `Unhandled exception:
Null check operator used on a null value
#0      getName (file:///home/rafi/app/bin/user.dart:12:20)
#1      main (file:///home/rafi/app/bin/main.dart:5:9)`, lang: 'plaintext', opts: ['main.dart লাইন 5', 'user.dart লাইন 12', 'dart:core এর ভেতরে', 'প্রথম লাইনে'], a: 1, why: '{{#0}} হলো ঠিক যেখানে সমস্যা হয়েছে, আর সেটা তোমার নিজের ফাইল: user.dart এর লাইন 12, কলাম 20। main.dart লাইন 5 শুধু ওই function কে ডেকেছিল।' },
    { q: '{{RangeError (index): Index out of range: index should be less than 3: 3}} মানে কী?', opts: ['list এ 3টা জিনিস আছে, তুমি index 3 চেয়েছ', 'list এ 4টা জিনিস আছে', 'index 3 টা বেশি', 'list খালি'], a: 0, why: '3টা জিনিস মানে index 0, 1, 2। "less than 3" মানে 3 এর ছোট হতে হবে। শেষের {{: 3}} হলো তুমি যেটা চেয়েছ।' },
    { q: 'কোনটা {{try/catch}} দিয়ে ধরার মতো, কোড ঠিক করার বদলে?', opts: ['ইউজারের লেখা int.parse করতে FormatException', 'list[10] এ RangeError (list এ 3টা জিনিস)', 'null এ ! দিয়ে TypeError', 'Stack Overflow'], a: 0, why: 'ইউজার কী লিখবে তুমি আগে থেকে জানো না, তাই এটা আসতেই পারে: ধরো আর সুন্দর করে বলো (অথবা {{int.tryParse}})। বাকিগুলো তোমার কোডের ভুল, কোড ঠিক করো।' },
    { q: "{{Error: The getter 'lenght' isn't defined for the type 'String'.}} কখন দেখাবে?", opts: ['চালানোর আগেই', 'চলার মাঝখানে', 'শুধু ইন্টারনেট না থাকলে', 'কখনো না'], a: 0, why: 'বানান ভুল ({{lenght}} এর জায়গায় {{length}})। Dart কোড পড়েই বোঝে String এ এই নামে কিছু নেই, তাই চালানোর আগেই থামায়।' },
  ],
  probs: [
    { l: 'e', q: 'এই কোড চালালে কোন Error আসবে, আর কেন? ঠিক করো।', code: `void main() {
  var fruits = ['আম', 'জাম', 'কাঁঠাল'];
  print(fruits[3]);
}`, ans: '{{RangeError (index): Index out of range: index should be less than 3: 3}}।\n৩টা জিনিসের index 0, 1, 2। শেষেরটা চাইলে {{fruits[2]}} বা {{fruits.last}} বা {{fruits[fruits.length - 1]}}।' },
    { l: 'e', q: 'ইউজার বয়স লিখলো "চৌদ্দ"। {{int.parse(input)}} এ কী হবে? crash না করে কিভাবে সামলাবে?', sol: `void main() {
  String input = 'চৌদ্দ';
  int? age = int.tryParse(input);
  if (age == null) {
    print('সংখ্যায় লেখো, যেমন 14');
  } else {
    print('বয়স: $age');
  }
}`, note: '{{int.parse}} হলে {{FormatException: Invalid radix-10 number}} দিয়ে crash হতো। {{int.tryParse}} crash না করে null দেয়।' },
    { l: 'e', q: "{{Error: Undefined name 'nmae'.}} দেখাচ্ছে। কোড দেখে কারণ বলো।", code: `void main() {
  String name = 'রাফি';
  print(nmae);
}`, ans: "বানান ভুল: variable এর নাম {{name}}, লেখা হয়েছে {{nmae}}। Dart {{nmae}} নামে কিছু চেনে না, তাই \"Undefined name\"।\nঠিক: {{print(name);}}। VS Code এ নাম লিখতে শুরু করলে যে তালিকা আসে, সেখান থেকে বেছে নিলে বানান ভুল হয় না।" },
    { l: 'm', q: 'এই কোডে কোন Error আসবে? দুইভাবে ঠিক করো।', code: `void main() {
  List<int> marks = [];
  print(marks.first);
}`, ans: '{{Bad state: No element}} ({{StateError}})। খালি list এর {{first}} নেই।\nউপায় ১: আগে চেক করো: {{if (marks.isNotEmpty) print(marks.first);}}\nউপায় ২: {{marks.firstOrNull}} (Dart 3 থেকে আছে), এটা খালি হলে crash না করে null দেয়।' },
    { l: 'm', q: 'loop চলাকালীন list থেকে জোড় সংখ্যা মুছতে চাইলাম। কী Error আসবে, কেন? ঠিক করো।', code: `void main() {
  var nums = [1, 2, 3, 4, 5, 6];
  for (var n in nums) {
    if (n % 2 == 0) nums.remove(n);
  }
  print(nums);
}`, sol: `void main() {
  var nums = [1, 2, 3, 4, 5, 6];
  nums.removeWhere((n) => n % 2 == 0);
  print(nums); // [1, 3, 5]
}`, note: '{{Concurrent modification during iteration}}। যে list এর উপর {{for-in}} ঘুরছে, তার ভেতরেই কিছু মুছলে Dart গুলিয়ে ফেলে কোনটার পরে কোনটা। {{removeWhere}} একবারে নিরাপদে মোছে। অথবা নতুন list বানাও: {{nums.where((n) => n % 2 != 0).toList()}}।' },
    { l: 'm', q: 'এই কোড "Null check operator used on a null value" দিয়ে crash করছে। কেন? এমনভাবে ঠিক করো যাতে নাম না থাকলে "অতিথি" দেখায়।', code: `void main() {
  Map<String, String> user = {'city': 'ঢাকা'};
  String name = user['name']!;
  print('হ্যালো $name');
}`, sol: `void main() {
  Map<String, String> user = {'city': 'ঢাকা'};
  String name = user['name'] ?? 'অতিথি';
  print('হ্যালো $name');
}`, note: "Map এ {{'name'}} key নেই, তাই {{user['name']}} হলো null। {{!}} মানে \"আমি নিশ্চিত এটা null না\", কিন্তু ছিল null, তাই crash। {{??}} দিয়ে বিকল্প মান দাও।" },
    { l: 'm', q: 'recursion এ এই function চালালে কী হবে? কেন? ঠিক করো।', code: `int factorial(int n) {
  return n * factorial(n - 1);
}

void main() {
  print(factorial(5));
}`, sol: `int factorial(int n) {
  if (n <= 1) return 1;     // থামার শর্ত (base case)
  return n * factorial(n - 1);
}

void main() {
  print(factorial(5)); // 120
}`, note: '{{Stack Overflow}}। থামার শর্ত নেই, তাই 5, 4, 3, ... 0, -1, -2 ... চলতেই থাকে। প্রতিটা ডাক memory তে জায়গা নেয়, একসময় জায়গা শেষ।' },
    { l: 'h', q: 'JSON থেকে বয়স পড়তে গিয়ে এলো {{type \'String\' is not a subtype of type \'int\'}}। কোড দেখে কারণ বলো আর এমনভাবে ঠিক করো যাতে বয়স String বা int যেভাবেই আসুক, কাজ করে।', code: `import 'dart:convert';

void main() {
  var data = jsonDecode('{"name": "Rafi", "age": "14"}');
  int age = data['age'];
  print(age + 1);
}`, sol: `import 'dart:convert';

void main() {
  var data = jsonDecode('{"name": "Rafi", "age": "14"}');
  var raw = data['age'];
  int age = raw is int ? raw : int.parse(raw.toString());
  print(age + 1); // 15
}`, note: 'JSON এ {{"14"}} quote এর ভেতরে, মানে String। {{jsonDecode}} সেটা String হিসেবেই দেয়। int variable এ রাখতে গেলে চলার সময় TypeError। আসার পর {{is}} দিয়ে type দেখে নাও।' },
    { l: 'h', q: 'এই class এ কোন Error আসবে, কখন? দুইভাবে ঠিক করো।', code: `class Player {
  late String name;
  void greet() => print('হ্যালো $name');
}

void main() {
  var p = Player();
  p.greet();
}`, ans: "{{LateInitializationError: Field 'name' has not been initialized.}} চলার সময়, {{greet()}} ডাকার মুহূর্তে।\n{{late}} মানে \"পরে মান দেবো, কথা দিলাম\"। কিন্তু মান দেওয়ার আগেই পড়া হয়েছে।\nউপায় ১: constructor এ মান নাও: {{Player(this.name);}} আর {{late}} বাদ।\nউপায় ২: পড়ার আগে মান দাও: {{p.name = 'রাফি';}} তারপর {{p.greet();}}।" },
  ],
  // ---- অভিধানের তালিকা ----
  dict: [
    // ===== চলার সময় (runtime) =====
    { n: 'FormatException', k: 'run', msg: 'FormatException: Invalid radix-10 number (at character 1)', tags: 'int.parse double.parse invalid double number parse',
      m: 'লেখাকে (String) সংখ্যায় বদলাতে চেয়েছ, কিন্তু লেখাটা সংখ্যা না। "radix-10" মানে দশভিত্তিক সংখ্যা, "character 1" মানে প্রথম অক্ষরেই গোলমাল।',
      bad: `int n = int.parse('12a');`, good: `int? n = int.tryParse('12a'); // null, crash না\nif (n == null) print('সংখ্যা দাও');`,
      fix: 'ইউজারের লেখা হলে {{int.tryParse}} / {{double.tryParse}} ব্যবহার করো, null হলে বুঝিয়ে বলো। লেখায় স্পেস থাকলে আগে {{.trim()}}। দশমিক থাকলে {{int.parse}} না, {{double.parse}}। JSON ভুল হলেও এই নামে Error আসে ({{Unexpected character}})।' },
    { n: 'RangeError (index)', k: 'run', msg: 'RangeError (index): Index out of range: index should be less than 3: 5', tags: 'list index out of range no indices are valid IndexError',
      m: 'list এ যে index নেই সেটা চেয়েছ। "less than 3" মানে list এ ৩টা জিনিস, তাই index 0 থেকে 2 পর্যন্ত চলে। শেষের সংখ্যা (5) হলো তুমি যেটা চেয়েছ। খালি list হলে লেখা থাকে "no indices are valid"।',
      bad: `var list = [10, 20, 30];\nprint(list[3]);`, good: `var list = [10, 20, 30];\nprint(list[list.length - 1]); // শেষেরটা: 30`,
      fix: 'শেষ index হলো {{length - 1}}, {{length}} না। loop এ {{i <= list.length}} থাকলে {{i < list.length}} করো (এক বেশি ভুল)। খালি list এর {{[0]}} চাওয়ার আগে {{isNotEmpty}} চেক।' },
    { n: 'RangeError (substring)', k: 'run', msg: 'RangeError (end): Invalid value: Not in inclusive range 1..3: 5', tags: 'substring string range start end invalid value',
      m: 'String এর এমন অংশ কাটতে চেয়েছ যেটা লেখার বাইরে। "1..3" হলো যে মানগুলো চলতো, 5 হলো তুমি যা দিয়েছ। ৩ অক্ষরের লেখার শেষ সীমা 3।',
      bad: `String s = 'abc';\nprint(s.substring(1, 5));`, good: `String s = 'abc';\nprint(s.substring(1, s.length)); // bc`,
      fix: '{{substring(start, end)}} এ end সর্বোচ্চ {{length}} হতে পারে। হিসাব করে বসানো সংখ্যা হলে আগে {{print(s.length)}} দেখে নাও।' },
    { n: 'Null check operator', k: 'run', msg: 'Null check operator used on a null value', tags: 'TypeError null bang ! exclamation',
      m: '{{!}} দিয়ে Dart কে কথা দিয়েছিলে "এটা null না", কিন্তু চলার সময় দেখা গেল ওটা null। কথা ভঙ্গ, তাই crash।',
      bad: `String? name;\nprint(name!.length);`, good: `String? name;\nprint(name?.length ?? 0); // 0`,
      fix: '{{!}} শুধু তখন দাও যখন ১০০% নিশ্চিত। নইলে {{??}} দিয়ে বিকল্প মান, {{?.}} দিয়ে null হলে থেমে যাওয়া, বা আগে {{if (x != null)}}। Map থেকে মান নিলে ({{map[key]!}}) key টা আছে কিনা দেখো।' },
    { n: "type 'Null' is not a subtype", k: 'run', msg: "type 'Null' is not a subtype of type 'String'", tags: 'TypeError null json map key missing',
      m: 'একটা জায়গায় String থাকার কথা, কিন্তু এলো null। বেশিরভাগ সময় JSON বা Map এ যে key খুঁজছ সেটা নেই, বা বানান আলাদা।',
      bad: `Map<String, dynamic> j = {'nam': 'Rafi'};\nString name = j['name'];`, good: `Map<String, dynamic> j = {'nam': 'Rafi'};\nString name = j['name'] ?? 'অজানা';`,
      fix: 'key এর বানান মেলাও ({{print(j.keys)}} দিয়ে দেখো কী কী আছে)। না থাকতে পারলে {{??}} দিয়ে বিকল্প, বা variable কে {{String?}} করো।' },
    { n: "type 'X' is not a subtype of type 'Y'", k: 'run', msg: "type 'String' is not a subtype of type 'int' in type cast", tags: 'TypeError as cast json dynamic subtype',
      m: 'এক type এর জিনিসকে অন্য type বলে ধরে নিয়েছ। যেমন ভেতরে আছে String {{"14"}}, কিন্তু তুমি int ভেবেছ। সাধারণত {{as}} দিয়ে বা {{dynamic}} / JSON থেকে আসা মানে হয়।',
      bad: `dynamic age = '14';\nint n = age as int;`, good: `dynamic age = '14';\nint n = age is int ? age : int.parse(age.toString());`,
      fix: 'মেসেজের প্রথম type হলো আসলে যা আছে, দ্বিতীয়টা যা তুমি ভেবেছ। {{print(x.runtimeType)}} দিয়ে দেখো আসলে কী। দরকার হলে {{int.parse}} / {{toString()}} দিয়ে বদলাও।' },
    { n: 'LateInitializationError', k: 'run', msg: "LateInitializationError: Field 'name' has not been initialized.", tags: 'late field local initialized',
      m: '{{late}} দিয়ে বলেছিলে "পরে মান দেবো"। কিন্তু মান দেওয়ার আগেই variable টা পড়া হয়েছে। Field মানে class এর variable, Local মানে function এর ভেতরের।',
      bad: `late String name;\nvoid main() {\n  print(name);\n}`, good: `late String name;\nvoid main() {\n  name = 'রাফি';\n  print(name);\n}`,
      fix: 'পড়ার আগে মান দাও। অনেক সময় {{late}} এর দরকারই নেই: constructor এ মান নাও, বা {{String? name}} করে null চেক করো।' },
    { n: 'StateError (Bad state)', k: 'run', msg: 'Bad state: No element', tags: 'StateError first last single reduce empty too many elements',
      m: 'যে কাজ চাইছ, জিনিসটার এখনকার অবস্থায় সেটা সম্ভব না। "No element" মানে খালি list এ {{first}}, {{last}}, {{reduce}} বা {{firstWhere}} (কিছু মেলেনি)। "Too many elements" মানে {{single}} কিন্তু একাধিক আছে।',
      bad: `List<int> nums = [];\nprint(nums.first);`, good: `List<int> nums = [];\nprint(nums.isEmpty ? 'খালি' : nums.first);`,
      fix: 'আগে {{isEmpty}} চেক করো। {{firstWhere}} এ {{orElse: () => ...}} দাও। যোগফলের জন্য {{reduce}} এর বদলে {{fold(0, ...)}}, ওটা খালি list এও চলে।' },
    { n: 'IntegerDivisionByZeroException', k: 'run', msg: 'IntegerDivisionByZeroException', tags: 'divide zero ~/ % unsupported operation infinity',
      m: '{{~/}} (ভাগফল) বা {{%}} (ভাগশেষ) এ শূন্য দিয়ে ভাগ করেছ। নতুন Dart এ মেসেজটা {{Unsupported operation: Result of truncating division is Infinity}} এর মতোও দেখাতে পারে। খেয়াল করো: {{/}} দিয়ে শূন্যে ভাগ করলে Error না, ফল আসে {{Infinity}}।',
      bad: `int total = 10, people = 0;\nprint(total ~/ people);`, good: `int total = 10, people = 0;\nprint(people == 0 ? 'কেউ নেই' : total ~/ people);`,
      fix: 'ভাগের আগে ভাজক 0 কিনা চেক করো। গড় বের করার সময় খালি list এ এটা খুব হয় ({{sum ~/ list.length}})।' },
    { n: 'NoSuchMethodError', k: 'run', msg: "NoSuchMethodError: Class 'int' has no instance getter 'length'.", tags: 'dynamic getter method called on null receiver tried calling',
      m: 'এমন method বা getter ডেকেছ যেটা ওই জিনিসের নেই। এটা চলার সময় আসে শুধু {{dynamic}} বা {{var}} দিয়ে type হারালে। "was called on null" লেখা থাকলে জিনিসটা আসলে null ছিল।',
      bad: `dynamic x = 5;\nprint(x.length);`, good: `dynamic x = 5;\nprint(x.toString().length); // 1`,
      fix: '{{dynamic}} কম ব্যবহার করো, আসল type দাও ({{int}}, {{String}}), তাহলে এই ভুল চালানোর আগেই ধরা পড়বে। {{print(x.runtimeType)}} দিয়ে দেখো আসলে কী আছে।' },
    { n: 'Concurrent modification', k: 'run', msg: "Concurrent modification during iteration: Instance(length:5) of '_GrowableList'.", tags: 'ConcurrentModificationError for in loop remove add while iterating',
      m: 'একটা list এর উপর {{for-in}} দিয়ে ঘুরছ, আর সেই loop এর ভেতরেই list এ যোগ বা মোছা করছ। Dart গুলিয়ে ফেলে কোনটার পর কোনটা, তাই থামিয়ে দেয়।',
      bad: `var nums = [1, 2, 3, 4];\nfor (var n in nums) {\n  if (n.isEven) nums.remove(n);\n}`, good: `var nums = [1, 2, 3, 4];\nnums.removeWhere((n) => n.isEven);`,
      fix: 'মুছতে {{removeWhere}}। যোগ করতে নতুন list বানিয়ে loop শেষে যোগ করো। অথবা কপির উপর ঘোরো: {{for (var n in [...nums])}}।' },
    { n: 'Stack Overflow', k: 'run', msg: 'Stack Overflow', tags: 'StackOverflowError recursion infinite base case',
      m: 'function নিজেকে ডাকছে তো ডাকছেই, থামছে না। প্রতিটা ডাক memory তে (stack এ) একটু জায়গা নেয়, একসময় জায়গা শেষ।',
      bad: `int sum(int n) => n + sum(n - 1);`, good: `int sum(int n) => n <= 0 ? 0 : n + sum(n - 1);`,
      fix: 'recursion এ **থামার শর্ত** (base case) আছে কিনা দেখো, আর প্রতিবার ডাকার সময় মান থামার দিকে এগোচ্ছে কিনা ({{n - 1}}, {{n + 1}} না)। class এর getter নিজেকেই পড়লেও এটা হয়।' },
    { n: 'Unsupported operation', k: 'run', msg: 'Unsupported operation: Cannot add to an unmodifiable list', tags: 'UnsupportedError const fixed-length list add remove unmodifiable',
      m: 'যে list বদলানো যায় না, সেটা বদলাতে চেয়েছ। {{const}} list, {{List.unmodifiable}} বদলানো যায় না। {{List.filled}} এ সংখ্যা বদলানো যায়, কিন্তু যোগ-মোছা যায় না ("fixed-length list")।',
      bad: `const colors = ['লাল', 'নীল'];\ncolors.add('সবুজ');`, good: `var colors = ['লাল', 'নীল'];\ncolors.add('সবুজ');`,
      fix: 'বদলাতে চাইলে {{const}} না, {{var}} / {{final}} দিয়ে সাধারণ list বানাও। দরকার হলে কপি: {{var copy = [...colors];}}। {{List.filled(3, 0, growable: true)}} দিলে বড় করা যায়।' },
    { n: 'ArgumentError', k: 'run', msg: 'Invalid argument(s): বয়স negative হতে পারে না', tags: 'ArgumentError invalid argument value throw',
      m: 'function কে এমন মান দিয়েছ যেটা সে নিতে পারে না। অনেক সময় কোনো function নিজেই এটা ছোঁড়ে, যেমন তুমি নিজে লিখেছ {{throw ArgumentError(...)}}।',
      bad: `void setAge(int a) {\n  if (a < 0) throw ArgumentError('বয়স negative হতে পারে না');\n}\nvoid main() => setAge(-5);`, good: `void main() => setAge(14);`,
      fix: 'মেসেজ পড়ো, কোন মান নিয়ে আপত্তি। যে মান পাঠাচ্ছ সেটা {{print}} করে দেখো, কোথা থেকে ভুল মান আসছে খুঁজে ঠিক করো।' },
    { n: 'AssertionError', k: 'run', msg: "Failed assertion: line 3 pos 10: 'total >= 0': is not true.", tags: 'assert failed assertion enable-asserts',
      m: '{{assert(শর্ত)}} দিয়ে বলেছিলে "এই শর্ত সবসময় সত্য হবে"। কিন্তু হয়নি। মানে কোডের কোথাও logic ভুল। (assert শুধু {{--enable-asserts}} দিয়ে চালালে বা Flutter debug এ চলে।)',
      bad: `int total = -5;\nassert(total >= 0);`, good: `// assert ঠিক আছে, ভুল হলো total কেন -5 হলো\n// সেটা খুঁজে ঠিক করো`,
      fix: 'assert বদলিও না। লাইন নম্বর দেখো, তারপর পেছনে গিয়ে খোঁজো মানটা কেন এমন হলো। assert হলো তোমার নিজের পাহারাদার।' },
    { n: 'FileSystemException', k: 'run', msg: "FileSystemException: Cannot open file, path = 'data.txt' (OS Error: No such file or directory, errno = 2)", tags: 'file io dart:io open read write path OS error',
      m: 'ফাইল খুলতে পারেনি। "No such file or directory" মানে এই নামে এই জায়গায় ফাইল নেই। "Permission denied" মানে খোলার অনুমতি নেই।',
      bad: `import 'dart:io';\nvoid main() {\n  print(File('data.txt').readAsStringSync());\n}`, good: `import 'dart:io';\nvoid main() {\n  var f = File('data.txt');\n  print(f.existsSync() ? f.readAsStringSync() : 'ফাইল নেই');\n}`,
      fix: 'relative path হিসাব হয় **terminal যেখানে আছে** সেখান থেকে, ফাইল যেখানে সেখান থেকে না। terminal এ {{pwd}} (Windows এ {{Get-Location}}) দিয়ে দেখো কোথায় আছো। ফাইলের নাম, বানান, এক্সটেনশন মেলাও।' },
    { n: 'TimeoutException', k: 'run', msg: 'TimeoutException after 0:00:05.000000: Future not completed', tags: 'timeout future async await network',
      m: 'একটা Future কে বলেছিলে নির্দিষ্ট সময়ের মধ্যে শেষ হতে ({{.timeout(...)}}), কিন্তু হয়নি। সাধারণত ইন্টারনেট ধীর বা server উত্তর দিচ্ছে না।',
      bad: `await download().timeout(Duration(seconds: 5));`, good: `try {\n  await download().timeout(Duration(seconds: 5));\n} on TimeoutException {\n  print('সময় শেষ, আবার চেষ্টা করো');\n}`,
      fix: 'এটা বাইরের কারণে হতেই পারে, তাই {{try / on TimeoutException}} দিয়ে ধরো, ইউজারকে বলো। {{import \'dart:async\';}} লাগে।' },
    { n: 'JsonUnsupportedObjectError', k: 'run', msg: "Converting object to an encodable object failed: Instance of 'User'", tags: 'json encode jsonEncode toJson class object',
      m: '{{jsonEncode}} শুধু সংখ্যা, String, bool, null, List আর Map চেনে। নিজের বানানো class এর object সরাসরি JSON বানাতে পারে না।',
      bad: `jsonEncode(User('Rafi', 14));`, good: `class User {\n  final String name; final int age;\n  User(this.name, this.age);\n  Map<String, dynamic> toJson() => {'name': name, 'age': age};\n}\n// jsonEncode(user) এখন চলবে`,
      fix: 'class এ {{toJson()}} method লেখো যেটা Map ফেরত দেয়। jsonEncode নিজে থেকেই সেটা ডাকবে।' },

    // ===== চালানোর আগে (compile-time) =====
    { n: "Expected ';'", k: 'compile', msg: "Error: Expected ';' after this.", tags: 'semicolon syntax expected',
      m: 'লাইনের শেষে দাঁড়ি ({{;}}) দাওনি। {{^}} চিহ্ন যেখানে, ঠিক তার পরেই {{;}} লাগবে।',
      bad: `print('Hello')`, good: `print('Hello');`,
      fix: 'চিহ্নিত জায়গায় {{;}} দাও। কখনো কখনো আসল ভুল আগের লাইনে, তাই এক লাইন উপরেও দেখো।' },
    { n: "Can't find '}' to match '{'", k: 'compile', msg: "Error: Can't find '}' to match '{'.", tags: 'brace bracket curly parenthesis ) ] match',
      m: 'একটা {{ { }} খুলেছ, কিন্তু বন্ধ করোনি। একই রকম মেসেজ আসে {{(}} বা {{[}} এর জন্য।',
      bad: `void main() {\n  if (true) {\n    print('হ্যাঁ');\n}`, good: `void main() {\n  if (true) {\n    print('হ্যাঁ');\n  }\n}`,
      fix: 'VS Code এ একটা {{ { }} এর উপর cursor রাখলে তার জোড়াটা আলো হয়। **Shift + Alt + F** (format) চাপলে ভেতরের লাইনগুলো সরে, তখন কোথায় বন্ধ হয়নি বোঝা সহজ।' },
    { n: "Undefined name", k: 'compile', msg: "Error: Undefined name 'nmae'.", tags: 'undefined name variable not found spelling scope',
      m: 'এমন নাম ব্যবহার করেছ যেটা Dart চেনে না। হয় বানান ভুল, নয়তো variable টা অন্য ব্লকের ভেতরে বানানো (ওখানের বাইরে দেখা যায় না), নয়তো {{import}} করা হয়নি।',
      bad: `String name = 'রাফি';\nprint(nmae);`, good: `String name = 'রাফি';\nprint(name);`,
      fix: 'বানান মেলাও (বড়-ছোট অক্ষরও)। {{if}} বা loop এর ভেতরে বানানো variable বাইরে চাইলে, variable টা ব্লকের আগে বানাও। {{stdin}}, {{File}} এর জন্য {{import \'dart:io\';}}।' },
    { n: "isn't defined for the type", k: 'compile', msg: "Error: The getter 'lenght' isn't defined for the type 'String'.", tags: 'getter method isnt defined type class spelling',
      m: 'এই type এ এই নামে কোনো getter / method নেই। প্রায় সবসময় বানান ভুল, নয়তো ভুল type এ ডাকছ (যেমন int এ {{length}})।',
      bad: `String s = 'abc';\nprint(s.lenght);`, good: `String s = 'abc';\nprint(s.length);`,
      fix: 'জিনিসের পরে {{.}} লিখলে VS Code যে তালিকা দেখায়, সেখান থেকে বেছে নাও। type ঠিক কিনা দেখো।' },
    { n: "can't be assigned to a variable", k: 'compile', msg: "Error: A value of type 'String' can't be assigned to a variable of type 'int'.", tags: 'value type assigned variable int string double',
      m: 'variable এর type যা, তার মধ্যে অন্য type এর মান রাখতে চেয়েছ। বাক্সের গায়ে লেখা "int", তুমি ঢোকাচ্ছ লেখা।',
      bad: `int age = '14';`, good: `int age = int.parse('14');\n// অথবা সরাসরি: int age = 14;`,
      fix: 'মানটাকে ঠিক type এ বদলাও ({{int.parse}}, {{toString()}}, {{toDouble()}}), অথবা variable এর type বদলাও। int এ দশমিক রাখা যায় না, তাই {{int x = 2.5}} ও এই Error দেয়।' },
    { n: 'nullable can\'t be assigned', k: 'compile', msg: "Error: The argument type 'String?' can't be assigned to the parameter type 'String' because 'String?' is nullable and 'String' isn't.", tags: 'nullable null safety argument parameter ? type',
      m: 'যেখানে null চলবে না ({{String}}), সেখানে এমন জিনিস দিয়েছ যেটা null হতে পারে ({{String?}})। Dart আগেই সাবধান করছে।',
      bad: `String? input = stdin.readLineSync();\ngreet(input);  // greet(String name)`, good: `String input = stdin.readLineSync() ?? '';\ngreet(input);`,
      fix: '{{??}} দিয়ে বিকল্প মান দাও, অথবা আগে {{if (input != null)}} চেক করো (তার ভেতরে Dart বোঝে এটা আর null না)। নিশ্চিত হলে {{!}}, কিন্তু সাবধানে।' },
    { n: 'potentially null', k: 'compile', msg: "Error: Property 'length' cannot be accessed on 'String?' because it is potentially null.", tags: 'potentially null property method access ?. null safety',
      m: 'null হতে পারে এমন জিনিসের ভেতরের কিছু চাইছ। null এর তো কোনো length নেই, তাই Dart আগেই থামাচ্ছে।',
      bad: `String? name;\nprint(name.length);`, good: `String? name;\nprint(name?.length ?? 0);`,
      fix: '{{?.}} (null হলে null দাও), {{??}} (বিকল্প), বা আগে {{if (name != null)}}। মান সবসময় থাকবে জানলে type থেকে {{?}} সরাও আর শুরুতেই মান দাও।' },
    { n: 'must be assigned before it can be used', k: 'compile', msg: "Error: Non-nullable variable 'total' must be assigned before it can be used.", tags: 'non-nullable local variable assigned before used initialize',
      m: 'variable বানিয়েছ কিন্তু মান দাওনি, আর মান দেওয়ার আগেই ব্যবহার করছ। অথবা কোনো একটা পথে ({{if}} এর এক দিকে) মান দেওয়া হয় না।',
      bad: `int total;\nprint(total);`, good: `int total = 0;\nprint(total);`,
      fix: 'বানানোর সময়ই শুরুর মান দাও ({{= 0}}, {{= \'\'}})। {{if/else}} এ মান দিলে দুই দিকেই দাও।' },
    { n: 'positional arguments', k: 'compile', msg: 'Error: Too few positional arguments: 2 required, 1 given.', tags: 'too few too many positional arguments function call required given',
      m: 'function এর যতগুলো মান লাগে, ততগুলো দাওনি (বা বেশি দিয়েছ)। "2 required, 1 given" মানে লাগে ২টা, দিয়েছ ১টা।',
      bad: `int add(int a, int b) => a + b;\nprint(add(5));`, good: `int add(int a, int b) => a + b;\nprint(add(5, 3));`,
      fix: 'function এর সংজ্ঞা দেখো কয়টা parameter। কোনোটা ঐচ্ছিক বানাতে চাইলে {{[int b = 0]}} দাও।' },
    { n: 'Required named parameter', k: 'compile', msg: "Error: Required named parameter 'name' must be provided.", tags: 'required named parameter provided constructor',
      m: '{{required}} named parameter দাওনি। function বা constructor ডাকার সময় {{name: ...}} লিখতে হবে।',
      bad: `void greet({required String name}) {}\ngreet();`, good: `void greet({required String name}) {}\ngreet(name: 'রাফি');`,
      fix: 'ডাকার সময় নাম দিয়ে মানটা দাও। ঐচ্ছিক বানাতে চাইলে {{required}} বাদ দিয়ে default দাও: {{{String name = \'অতিথি\'} }}।' },
    { n: 'must be returned', k: 'compile', msg: "Error: A non-null value must be returned since the return type 'int' doesn't allow null.", tags: 'return type function missing return null',
      m: 'function বলছে সে {{int}} ফেরত দেবে, কিন্তু কোনো একটা পথে ({{if}} এর বাইরে, loop এর পরে) {{return}} নেই।',
      bad: `int sign(int n) {\n  if (n > 0) return 1;\n  if (n < 0) return -1;\n}`, good: `int sign(int n) {\n  if (n > 0) return 1;\n  if (n < 0) return -1;\n  return 0;\n}`,
      fix: 'function এর একদম শেষে একটা {{return}} দাও, যাতে কোনো শর্ত না মিললেও কিছু ফেরত যায়।' },
    { n: "Can't assign to the final variable", k: 'compile', msg: "Error: Can't assign to the final variable 'pi'.", tags: 'final const assign reassign change',
      m: '{{final}} বা {{const}} variable এর মান একবার দেওয়ার পর আর বদলানো যায় না। তুমি বদলাতে চেয়েছ।',
      bad: `final score = 10;\nscore = 20;`, good: `var score = 10;\nscore = 20;`,
      fix: 'মান বদলাতে হলে {{final}} এর জায়গায় {{var}} বা type ({{int}}) দাও। না বদলানোর কথা থাকলে ভুলটা হলো দ্বিতীয়বার মান দেওয়ার লাইন।' },
    { n: 'Missing concrete implementation', k: 'compile', msg: "Error: The non-abstract class 'Dog' is missing implementations for these members:\n - Animal.sound", tags: 'abstract class implements extends override missing implementation',
      m: 'abstract class (বা interface) বলেছে "এই method থাকতেই হবে", কিন্তু তোমার class এ সেটা লেখোনি।',
      bad: `abstract class Animal { void sound(); }\nclass Dog extends Animal {}`, good: `abstract class Animal { void sound(); }\nclass Dog extends Animal {\n  @override\n  void sound() => print('ঘেউ');\n}`,
      fix: 'মেসেজে তালিকা দেওয়া থাকে কোনগুলো বাকি। সেগুলো {{@override}} দিয়ে লেখো। VS Code এ class এর নামের উপর Quick Fix (Ctrl + .) চাপলে নিজেই খালি method বানিয়ে দেয়।' },
  ],
};

CARDS.push(
  { w: 'x', f: 'stack trace এ প্রথমে কোন লাইন দেখবো?', b: 'Error এর নাম (২য় লাইন), তারপর\n#0, #1... এর মধ্যে প্রথম যেটায়\nতোমার নিজের ফাইলের নাম আছে' },
  { w: 'x', f: 'RangeError (index) এর সবচেয়ে কমন কারণ', b: 'i <= list.length\n(হবে i < list.length,\nশেষ index = length - 1)' },
  { w: 'x', f: 'Null check operator used on a null value', b: 'x! দিয়েছিলে কিন্তু x ছিল null\nসমাধান: x ?? বিকল্প, x?.কিছু, if (x != null)' },
  { w: 'x', f: 'Bad state: No element', b: 'খালি list এ first / last / reduce\nআগে isEmpty চেক, বা fold' },
  { w: 'x', f: 'crash ছাড়া String থেকে int', b: "int? n = int.tryParse('12a'); // null" },
);
