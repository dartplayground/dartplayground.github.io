// সপ্তাহ ৮, ৯, ১০

TOPICS['string-problems'] = {
  short: 'String সমস্যা', title: 'String নিয়ে সমস্যা সমাধান', days: 'দিন ১–৩',
  goal: 'String এর আরো method শেখা, আর অক্ষর ধরে ধরে loop চালিয়ে লেখা নিয়ে সমস্যা সমাধান।',
  learn: [
    'String আসলে অক্ষরের একটা সারি, অনেকটা List এর মতো। তাই loop, index, count, flag সব কৌশল এখানেও চলে।',
    { code: `void main() {
  String s = '  Hello Dart World  ';
  print(s.trim());                      // 'Hello Dart World' (দুই পাশের স্পেস বাদ)
  var words = s.trim().split(' ');      // [Hello, Dart, World]
  print(words.length);                  // 3
  print(words.join('-'));               // Hello-Dart-World
  print('dart'.replaceAll('a', '@'));   // d@rt
  print('Dart'.startsWith('Da'));       // true
  print('Dart'.endsWith('t'));          // true
  print('Rafi'.split('').reversed.join()); // ifaR

  // অক্ষর ধরে loop
  String w = 'abc';
  for (int i = 0; i < w.length; i++) {
    print('$i: \${w[i]}');
  }
}` },
    { h: 'অক্ষরের পেছনের সংখ্যা' },
    'কম্পিউটারের কাছে প্রতিটা অক্ষর আসলে একটা সংখ্যা। A = 65, B = 66, ... Z = 90। a = 97, ... z = 122। এটা দিয়ে অক্ষর সরানো, বড়-ছোট চেনা যায়।',
    { array: ['A:65', 'B:66', 'C:67', '...', 'Z:90', 'a:97', 'b:98', '...', 'z:122'], cap: 'অক্ষর → সংখ্যা (codeUnit)' },
    { code: `void main() {
  print('A'.codeUnitAt(0));          // 65
  print(String.fromCharCode(66));    // B
  String ch = 'c';
  int code = ch.codeUnitAt(0);
  print(code >= 97 && code <= 122);  // true: ছোট হাতের অক্ষর
  print(String.fromCharCode(code + 1)); // d
}` },
    { tip: 'অনেক টুকরো জোড়া দিয়ে বড় String বানাতে {{StringBuffer}} দ্রুত: {{var sb = StringBuffer(); sb.write(\'a\'); print(sb.toString());}}' },
  ],
  how: [
    '{{split(\' \')}} প্রতিটা স্পেসে কেটে টুকরোগুলোর List দেয়। {{join}} উল্টো কাজ করে।',
    "String বদলানো যায় না ({{s[0] = 'X'}} চলে না)। প্রতিটা method নতুন String বানিয়ে দেয়।",
    'অক্ষর নিয়ে সমস্যায় প্রায়ই লাগে: loop দিয়ে প্রতিটা অক্ষর দেখো, শর্ত মিলিয়ে count বা নতুন String এ যোগ করো।',
  ],
  quiz: [
    { q: 'Output কী?', code: "print('a,b,,c'.split(',').length);", opts: ['3', '4', '5', '7'], a: 1, why: "টুকরো: 'a', 'b', '' (খালি), 'c'। মোট 4।" },
    { q: 'Output কী?', code: "print('Dart'.indexOf('r'));", opts: ['1', '2', '3', '-1'], a: 1, why: 'D=0, a=1, r=2।' },
    { q: 'Output কী?', code: "print(String.fromCharCode('a'.codeUnitAt(0) + 2));", opts: ['a2', 'c', '99', 'b'], a: 1, why: "'a' = 97, 97 + 2 = 99 = 'c'।" },
  ],
  probs: [
    { l: 'e', q: '{{reversed}} ছাড়া loop দিয়ে String উল্টাও।', sol: `void main() {
  String s = 'Bangladesh';
  String r = '';
  for (int i = s.length - 1; i >= 0; i--) {
    r += s[i];
  }
  print(r); // hsedalgnaB
}` },
    { l: 'e', q: 'একটা বাক্যে কয়টা স্বরবর্ণ আর কয়টা ব্যঞ্জনবর্ণ (শুধু ইংরেজি অক্ষর গুনবে)।', sol: `void main() {
  String s = 'Hello World'.toLowerCase();
  int v = 0, c = 0;
  for (var ch in s.split('')) {
    if ('aeiou'.contains(ch)) {
      v++;
    } else if (ch.codeUnitAt(0) >= 97 && ch.codeUnitAt(0) <= 122) {
      c++;
    }
  }
  print('স্বর $v, ব্যঞ্জন $c'); // 3, 7
}` },
    { l: 'e', q: 'একটা বাক্যে কয়টা শব্দ।', sol: `void main() {
  String s = 'Dart is fun to learn';
  print(s.trim().split(' ').length); // 5
}` },
    { l: 'e', q: 'একটা String থেকে সব স্পেস বাদ দাও।', sol: `void main() {
  print('a b  c d'.replaceAll(' ', '')); // abcd
}` },
    { l: 'm', q: "palindrome কিনা বলো, বড়-ছোট হাতের অক্ষর আর স্পেস উপেক্ষা করে: 'Never odd or even' → true।", sol: `void main() {
  String s = 'Never odd or even';
  String clean = s.toLowerCase().replaceAll(' ', '');
  String rev = clean.split('').reversed.join();
  print(clean == rev); // true
}` },
    { l: 'm', q: "প্রতিটা শব্দের প্রথম অক্ষর বড় করো: 'i love dart' → 'I Love Dart'।", sol: `void main() {
  String s = 'i love dart';
  var words = s.split(' ').map((w) => w.isEmpty ? w : w[0].toUpperCase() + w.substring(1));
  print(words.join(' '));
}` },
    { l: 'm', q: 'বাক্যের সবচেয়ে লম্বা শব্দ।', sol: `void main() {
  String s = 'I am learning programming with Dart';
  String longest = '';
  for (var w in s.split(' ')) {
    if (w.length > longest.length) longest = w;
  }
  print(longest); // programming
}` },
    { l: 'm', q: 'বড় হাতের, ছোট হাতের, সংখ্যা আর অন্যান্য অক্ষর আলাদা করে গোনো: "Dart3 Is Fun!"', sol: `void main() {
  String s = 'Dart3 Is Fun!';
  int up = 0, low = 0, digit = 0, other = 0;
  for (int i = 0; i < s.length; i++) {
    int c = s.codeUnitAt(i);
    if (c >= 65 && c <= 90) {
      up++;
    } else if (c >= 97 && c <= 122) {
      low++;
    } else if (c >= 48 && c <= 57) {
      digit++;
    } else {
      other++;
    }
  }
  print('বড় $up, ছোট $low, সংখ্যা $digit, অন্যান্য $other'); // 3, 6, 1, 3
}` },
    { l: 'm', q: "শব্দগুলোর ক্রম উল্টাও: 'I love Dart' → 'Dart love I'।", sol: `void main() {
  String s = 'I love Dart';
  print(s.split(' ').reversed.join(' '));
}` },
    { l: 'h', q: "Caesar cipher: প্রতিটা ছোট হাতের অক্ষর 3 ঘর সরাও (x → a, y → b, z → c)। 'hello' → 'khoor'। তারপর উল্টো করে আবার ফেরত আনো।", hint: '{{(code - 97 + shift) % 26 + 97}}', sol: `String shift(String s, int k) {
  var sb = StringBuffer();
  for (int i = 0; i < s.length; i++) {
    int c = s.codeUnitAt(i);
    if (c >= 97 && c <= 122) {
      sb.writeCharCode((c - 97 + k) % 26 + 97);
    } else {
      sb.write(s[i]);
    }
  }
  return sb.toString();
}

void main() {
  String secret = shift('hello world', 3);
  print(secret);                // khoor zruog
  print(shift(secret, 26 - 3)); // hello world
}` },
    { l: 'h', q: "সংকোচন: 'aaabbcdddd' → 'a3b2c1d4'।", hint: 'একটা counter রাখো। পরের অক্ষর একই হলে বাড়াও, না হলে লিখে ফেলো আর counter 1।', sol: `void main() {
  String s = 'aaabbcdddd';
  var sb = StringBuffer();
  int count = 1;
  for (int i = 1; i <= s.length; i++) {
    if (i < s.length && s[i] == s[i - 1]) {
      count++;
    } else {
      sb.write('\${s[i - 1]}$count');
      count = 1;
    }
  }
  print(sb.toString()); // a3b2c1d4
}` },
    { l: 'h', q: "anagram কিনা, sort দিয়ে: অক্ষরগুলো সাজালে দুইটা একই হবে। 'Listen', 'Silent' → true।", sol: `bool isAnagram(String a, String b) {
  String sortIt(String s) => (s.toLowerCase().split('')..sort()).join();
  return sortIt(a) == sortIt(b);
}

void main() {
  print(isAnagram('Listen', 'Silent')); // true
}` },
  ],
};

TOPICS['algorithms'] = {
  short: 'Search, Sort, Matrix', title: 'Algorithm: খোঁজা, সাজানো, 2D List', days: 'দিন ৪–৫',
  goal: 'বিখ্যাত কয়েকটা algorithm নিজের হাতে লেখা, আর table এর মতো 2D list ব্যবহার করা।',
  learn: [
    '**Algorithm** মানে কোনো সমস্যা সমাধানের ধাপে ধাপে পদ্ধতি। রান্নার রেসিপির মতো। এখানে তিনটা বিখ্যাত algorithm নিজে লিখবে। Dart এর {{sort()}} আছে, কিন্তু নিজে লিখলে লজিক অনেক শক্ত হয়।',
    { h: 'Binary Search: অর্ধেক অর্ধেক করে খোঁজা' },
    'অভিধানে শব্দ খুঁজতে প্রথম পাতা থেকে পড়ো না, মাঝখানে খোলো। শব্দটা আগে হলে বাম অর্ধেকে, পরে হলে ডান অর্ধেকে। প্রতিবার অর্ধেক বাদ! **শর্ত: list সাজানো থাকতে হবে।**',
    { array: ['2', '5', '8', '12', '16', '23', '38', '56', '72', '91'], cap: '23 খুঁজছি: mid = 16 (ছোট, ডানে যাও) → mid = 56 (বড়, বামে যাও) → mid = 23 পেয়েছি! মাত্র ৩ ধাপ' },
    { code: `int binarySearch(List<int> list, int target) {
  int low = 0, high = list.length - 1;
  while (low <= high) {
    int mid = (low + high) ~/ 2;
    if (list[mid] == target) return mid;
    if (list[mid] < target) {
      low = mid + 1;    // ডান অর্ধেকে খোঁজো
    } else {
      high = mid - 1;   // বাম অর্ধেকে খোঁজো
    }
  }
  return -1;            // নেই
}

void main() {
  var nums = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  print(binarySearch(nums, 23)); // 5
  print(binarySearch(nums, 7));  // -1
}` },
    { h: 'Bubble Sort: পাশাপাশি তুলনা করে বদল' },
    { widget: 'sortLab' },
    { code: `void bubbleSort(List<int> a) {
  for (int i = 0; i < a.length - 1; i++) {
    for (int j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        int temp = a[j];      // swap: প্রথম সপ্তাহের কৌশল!
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
}

void main() {
  var nums = [5, 1, 4, 2, 8];
  bubbleSort(nums);
  print(nums); // [1, 2, 4, 5, 8]
}` },
    { list: ['প্রতি round এ সবচেয়ে বড়টা বুদবুদের মতো শেষে উঠে যায়।', 'তাই round {{i}} এর পরে শেষের {{i}} টা জায়গা ঠিক, ভেতরের loop {{length - 1 - i}} পর্যন্ত।'] },
    { h: '2D List (Matrix): সারি আর কলাম' },
    { code: `void main() {
  var m = [
    [1, 2, 3],   // row 0
    [4, 5, 6],   // row 1
  ];
  print(m[1][2]);      // 6  (row 1, column 2)
  print(m.length);     // 2  (কয়টা row)
  print(m[0].length);  // 3  (কয়টা column)

  for (int r = 0; r < m.length; r++) {
    String line = '';
    for (int c = 0; c < m[r].length; c++) {
      line += '\${m[r][c]} ';
    }
    print(line);
  }
}`, out: '6\n2\n3\n1 2 3 \n4 5 6 ' },
    { tip: '2D list মানে nested loop! বাইরের loop row, ভেতরের loop column। প্যাটার্নের সপ্তাহের অভিজ্ঞতা এখানে কাজে লাগবে।' },
  ],
  how: [
    'Linear search: প্রথম থেকে একটা একটা দেখো। 1000টা জিনিসে সবচেয়ে খারাপ হলে 1000 বার।',
    'Binary search: প্রতিবার অর্ধেক বাদ। 1000টা জিনিসে সর্বোচ্চ 10 বার! কিন্তু list সাজানো লাগবে।',
    'Bubble sort: পাশাপাশি দুইটা তুলনা, উল্টো থাকলে swap। n টা জিনিসে প্রায় n × n তুলনা। সহজ, কিন্তু বড় list এ ধীর।',
    '{{m[r][c]}}: আগে {{m[r]}} একটা row (নিজেই একটা list) দেয়, তারপর সেই list এর {{[c]}}।',
  ],
  quiz: [
    { q: 'Binary search কখন কাজ করে?', opts: ['যেকোনো list এ', 'শুধু সাজানো list এ', 'শুধু ছোট list এ', 'শুধু String এ'], a: 1, why: 'মাঝেরটা দেখে "বামে না ডানে" ঠিক করতে list সাজানো থাকা লাগে।' },
    { q: 'Output কী?', code: `var m = [[1, 2], [3, 4], [5, 6]];
print(m[2][0] + m[0][1]);`, opts: ['7', '5', '8', '3'], a: 0, why: 'm[2][0] = 5, m[0][1] = 2।' },
    { q: '[3, 1, 2] এ bubble sort এর প্রথম round এর পর list কী?', opts: ['[1, 2, 3]', '[1, 3, 2]', '[3, 1, 2]', '[2, 1, 3]'], a: 0, why: '3>1 swap → [1,3,2]; 3>2 swap → [1,2,3]।' },
  ],
  probs: [
    { l: 'e', q: 'একটা মান list এ কতবার আছে গোনো (linear search এর মতো)।', sol: `int countOf(List<int> list, int x) {
  int c = 0;
  for (var n in list) {
    if (n == x) c++;
  }
  return c;
}

void main() {
  print(countOf([1, 3, 3, 7, 3, 2], 3)); // 3
}` },
    { l: 'e', q: 'একটা 3×3 matrix এর সব সংখ্যার যোগফল।', sol: `void main() {
  var m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  int sum = 0;
  for (var row in m) {
    for (var x in row) {
      sum += x;
    }
  }
  print(sum); // 45
}` },
    { l: 'e', q: 'matrix এর প্রতিটা row এর যোগফল আলাদা করে প্রিন্ট করো।', sol: `void main() {
  var m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (int r = 0; r < m.length; r++) {
    int s = 0;
    for (var x in m[r]) s += x;
    print('row $r: $s');
  }
}` },
    { l: 'm', q: 'bubble sort নিজে লেখো, কিন্তু বড় থেকে ছোট ক্রমে।', hint: 'শুধু তুলনার চিহ্ন উল্টাও।', sol: `void bubbleDesc(List<int> a) {
  for (int i = 0; i < a.length - 1; i++) {
    for (int j = 0; j < a.length - 1 - i; j++) {
      if (a[j] < a[j + 1]) {
        int t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
}

void main() {
  var a = [5, 1, 9, 3, 7];
  bubbleDesc(a);
  print(a); // [9, 7, 5, 3, 1]
}` },
    { l: 'm', q: 'Selection sort: প্রতিবার বাকি অংশের সবচেয়ে ছোটটা খুঁজে সামনে আনো।', hint: 'বাইরের loop i: 0 থেকে। ভেতরে i থেকে শেষ পর্যন্ত সবচেয়ে ছোটর index খোঁজো, তারপর a[i] এর সাথে swap।', sol: `void selectionSort(List<int> a) {
  for (int i = 0; i < a.length - 1; i++) {
    int minI = i;
    for (int j = i + 1; j < a.length; j++) {
      if (a[j] < a[minI]) minI = j;
    }
    int t = a[i];
    a[i] = a[minI];
    a[minI] = t;
  }
}

void main() {
  var a = [64, 25, 12, 22, 11];
  selectionSort(a);
  print(a); // [11, 12, 22, 25, 64]
}` },
    { l: 'm', q: 'binary search নিজে লেখো, তারপর প্রতিটা ধাপে low, mid, high প্রিন্ট করে দেখো কিভাবে ছোট হচ্ছে।', sol: `int binarySearch(List<int> a, int target) {
  int low = 0, high = a.length - 1;
  while (low <= high) {
    int mid = (low + high) ~/ 2;
    print('low=$low mid=$mid high=$high');
    if (a[mid] == target) return mid;
    if (a[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

void main() {
  var a = [for (var i = 1; i <= 100; i++) i * 3]; // 3, 6, ..., 300
  print(binarySearch(a, 201)); // 66
}` },
    { l: 'm', q: 'দুইটা 2×2 matrix যোগ করো।', sol: `void main() {
  var a = [[1, 2], [3, 4]];
  var b = [[5, 6], [7, 8]];
  var c = [
    for (int r = 0; r < 2; r++) [for (int k = 0; k < 2; k++) a[r][k] + b[r][k]]
  ];
  print(c); // [[6, 8], [10, 12]]
}` },
    { l: 'm', q: 'matrix এর transpose: row গুলো column হয়ে যাবে। [[1,2,3],[4,5,6]] → [[1,4],[2,5],[3,6]]', sol: `void main() {
  var m = [[1, 2, 3], [4, 5, 6]];
  var t = <List<int>>[];
  for (int c = 0; c < m[0].length; c++) {
    var row = <int>[];
    for (int r = 0; r < m.length; r++) {
      row.add(m[r][c]);
    }
    t.add(row);
  }
  print(t);
}` },
    { l: 'm', q: 'বর্গ matrix এর দুই কর্ণের (diagonal) যোগফল আলাদা করে।', hint: 'প্রধান কর্ণ: {{m[i][i]}}। অন্যটা: {{m[i][n - 1 - i]}}।', sol: `void main() {
  var m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  int n = m.length, d1 = 0, d2 = 0;
  for (int i = 0; i < n; i++) {
    d1 += m[i][i];
    d2 += m[i][n - 1 - i];
  }
  print('$d1 $d2'); // 15 15
}` },
    { l: 'h', q: 'Insertion sort: তাস হাতে সাজানোর মতো। প্রতিটা নতুন তাস বাম দিকের সাজানো অংশে ঠিক জায়গায় ঢোকাও।', sol: `void insertionSort(List<int> a) {
  for (int i = 1; i < a.length; i++) {
    int key = a[i];
    int j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j]; // বড়গুলো এক ঘর ডানে সরাও
      j--;
    }
    a[j + 1] = key;
  }
}

void main() {
  var a = [12, 11, 13, 5, 6];
  insertionSort(a);
  print(a); // [5, 6, 11, 12, 13]
}` },
    { l: 'h', q: 'দুইটা সাজানো list কে মিলিয়ে একটা সাজানো list বানাও, sort() ছাড়া। [1, 4, 7] + [2, 3, 9] → [1, 2, 3, 4, 7, 9]', hint: 'দুইটা আঙুল (i, j) দুই list এর শুরুতে। যেটা ছোট সেটা নাও, সেই আঙুল এগোও।', sol: `List<int> merge(List<int> a, List<int> b) {
  var r = <int>[];
  int i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      r.add(a[i++]);
    } else {
      r.add(b[j++]);
    }
  }
  while (i < a.length) r.add(a[i++]);
  while (j < b.length) r.add(b[j++]);
  return r;
}

void main() {
  print(merge([1, 4, 7], [2, 3, 9]));
}` },
    { l: 'h', q: 'দুইটা 2×2 matrix গুণ করো। c[r][k] = a[r][0]×b[0][k] + a[r][1]×b[1][k]', sol: `void main() {
  var a = [[1, 2], [3, 4]];
  var b = [[5, 6], [7, 8]];
  var c = [[0, 0], [0, 0]];
  for (int r = 0; r < 2; r++) {
    for (int k = 0; k < 2; k++) {
      for (int x = 0; x < 2; x++) {
        c[r][k] += a[r][x] * b[x][k];
      }
    }
  }
  print(c); // [[19, 22], [43, 50]]
}` },
    { l: 'h', q: 'Two Sum: list এ এমন দুইটা সংখ্যার index বের করো যাদের যোগফল target। [2, 7, 11, 15], target 9 → [0, 1]', hint: 'সহজ উপায়: দুইটা loop। স্মার্ট উপায়: Map এ মনে রাখো কোন সংখ্যা কোন index এ দেখেছ।', sol: `List<int> twoSum(List<int> a, int target) {
  Map<int, int> seen = {};
  for (int i = 0; i < a.length; i++) {
    int need = target - a[i];
    if (seen.containsKey(need)) return [seen[need]!, i];
    seen[a[i]] = i;
  }
  return [];
}

void main() {
  print(twoSum([2, 7, 11, 15], 9));  // [0, 1]
  print(twoSum([3, 2, 4], 6));       // [1, 2]
}` },
  ],
};

TOPICS['class-object'] = {
  short: 'Class ও Object', title: 'Class আর Object', days: 'দিন ১–৩',
  goal: 'নিজের type বানানো: তথ্য (field) আর কাজ (method) এক জায়গায় রাখা।',
  learn: [
    'এতদিন একটা ছাত্রের তথ্য রাখতে আলাদা variable বা Map লাগতো। **Class** হলো নিজের type বানানোর নকশা (blueprint)। **Object** হলো সেই নকশা থেকে বানানো আসল জিনিস। পিঠার ছাঁচ একটা (class), পিঠা অনেক (object)।',
    { objs: { cls: 'Student', fields: ['String name', 'int roll', 'double gpa'], items: [['s1', 'Rafi', '7', '4.5'], ['s2', 'Mitu', '12', '3.8']] }, cap: 'একটা নকশা, দুইটা object, প্রতিটার নিজের মান' },
    { code: `class Student {
  // field: প্রতিটা object এর নিজের তথ্য
  String name;
  int roll;
  double gpa;

  // constructor: object বানানোর সময় চলে
  Student(this.name, this.roll, this.gpa);

  // named constructor: আরেকভাবে বানানো
  Student.newcomer(this.name, this.roll) : gpa = 0.0;

  // method: object এর কাজ
  void introduce() {
    print('আমি $name, রোল $roll');
  }

  // getter: হিসাব করা মান, field এর মতো পড়া যায়
  bool get isGood => gpa >= 4.0;
}

void main() {
  var s1 = Student('Rafi', 7, 4.5);
  var s2 = Student.newcomer('Mitu', 12);

  s1.introduce();       // আমি Rafi, রোল 7
  s2.introduce();       // আমি Mitu, রোল 12
  print(s1.isGood);     // true
  print(s2.gpa);        // 0.0
  s2.gpa = 3.8;         // field বদলানো
  print(s2.gpa);        // 3.8
}` },
    { list: ['{{this.name}} মানে "এই object এর name"। constructor এ {{this.name}} লিখলে argument সরাসরি field এ বসে।', '{{: gpa = 0.0}} কে বলে initializer list, body চলার আগে field এ মান বসায়।', 'getter ({{get}}) দেখতে field এর মতো ({{s1.isGood}}, বন্ধনী ছাড়া), কিন্তু প্রতিবার হিসাব হয়।'] },
    { h: 'named parameter দিয়ে constructor (Flutter এ সবসময় এটা)' },
    { code: `class Book {
  final String title;
  final String author;
  final double price;

  Book({required this.title, required this.author, this.price = 100});

  @override
  String toString() => '$title ($author) - $price টাকা';
}

void main() {
  var b = Book(title: 'পথের পাঁচালী', author: 'বিভূতিভূষণ');
  print(b);   // toString() নিজেই ডাকা হয়
}` },
    { h: 'Private (_), getter আর setter' },
    { code: `class BankAccount {
  final String owner;
  double _balance = 0;   // _ দিয়ে শুরু = বাইরের ফাইল থেকে ধরা যায় না

  BankAccount(this.owner);

  double get balance => _balance;   // পড়া যাবে, কিন্তু সরাসরি বদলানো যাবে না

  void deposit(double amount) {
    if (amount <= 0) {
      print('ভুল পরিমাণ');
      return;
    }
    _balance += amount;
  }

  bool withdraw(double amount) {
    if (amount > _balance) {
      print('যথেষ্ট টাকা নেই');
      return false;
    }
    _balance -= amount;
    return true;
  }
}

void main() {
  var acc = BankAccount('Rafi');
  acc.deposit(500);
  acc.withdraw(800);     // যথেষ্ট টাকা নেই
  acc.withdraw(200);
  print(acc.balance);    // 300.0
}` },
    { tip: 'class বানানোর আগে খাতায় লেখো: এই জিনিসটার **কী কী আছে** (field) আর **কী কী করতে পারে** (method)। যেমন ব্যাংক একাউন্ট: আছে মালিক, টাকা; পারে জমা, তোলা।' },
    { h: 'static: সব object এর জন্য একটাই' },
    { code: `class Student {
  static int count = 0;   // class এর, কোনো একটা object এর না
  String name;
  Student(this.name) {
    count++;
  }
}

void main() {
  Student('A');
  Student('B');
  print(Student.count);   // 2
}` },
  ],
  how: [
    '{{Student(\'Rafi\', 7, 4.5)}} লিখলে মেমরিতে নতুন একটা object তৈরি হয়, constructor চলে, field গুলোতে মান বসে।',
    'প্রতিটা object এর নিজের field আছে। s1 এর name বদলালে s2 এর name বদলায় না।',
    '{{s1.introduce()}} লিখলে method টা চলে s1 এর তথ্য নিয়ে, তাই ভেতরে {{name}} মানে s1 এর name।',
    '{{print(obj)}} লিখলে Dart object এর {{toString()}} ডাকে। নিজে না লিখলে দেখায় "Instance of \'Book\'"।',
  ],
  quiz: [
    { q: 'Output কী?', code: `class Box {
  int v;
  Box(this.v);
}
void main() {
  var a = Box(1);
  var b = Box(2);
  a.v = 10;
  print(b.v);
}`, opts: ['1', '2', '10', 'Error'], a: 1, why: 'a আর b আলাদা object। a বদলালে b বদলায় না।' },
    { q: 'Output কী?', code: `class Box {
  int v;
  Box(this.v);
}
void main() {
  var a = Box(1);
  var b = a;
  b.v = 10;
  print(a.v);
}`, opts: ['1', '10', 'Error', 'null'], a: 1, why: '{{var b = a}} নতুন object বানায় না! a আর b একই object এর দুইটা নাম। তাই b দিয়ে বদলালে a তেও বদলায়।' },
  ],
  probs: [
    { l: 'e', q: '{{Rectangle}} class: width, height field; {{area()}} আর {{perimeter()}} method।', sol: `class Rectangle {
  double width, height;
  Rectangle(this.width, this.height);

  double area() => width * height;
  double perimeter() => 2 * (width + height);
}

void main() {
  var r = Rectangle(5, 3);
  print(r.area());       // 15.0
  print(r.perimeter());  // 16.0
}` },
    { l: 'e', q: '{{Circle}} class: radius; area আর circumference getter হিসেবে।', sol: `class Circle {
  double radius;
  Circle(this.radius);

  double get area => 3.1416 * radius * radius;
  double get circumference => 2 * 3.1416 * radius;
}

void main() {
  var c = Circle(7);
  print(c.area.toStringAsFixed(2));          // 153.94
  print(c.circumference.toStringAsFixed(2)); // 43.98
}` },
    { l: 'e', q: '{{Book}} class: title, author, price; {{printInfo()}} method। তিনটা বই বানিয়ে প্রিন্ট করো।', sol: `class Book {
  String title, author;
  double price;
  Book(this.title, this.author, this.price);

  void printInfo() => print('$title - $author - $price টাকা');
}

void main() {
  var books = [
    Book('দেবদাস', 'শরৎচন্দ্র', 150),
    Book('হিমু', 'হুমায়ূন আহমেদ', 200),
    Book('ফেলুদা', 'সত্যজিৎ রায়', 250),
  ];
  for (var b in books) {
    b.printInfo();
  }
}` },
    { l: 'e', q: '{{Student}} class, named parameter দিয়ে constructor: {{required name}}, {{required roll}}, {{className = \'সপ্তম\'}}। toString override করো।', sol: `class Student {
  final String name;
  final int roll;
  final String className;

  Student({required this.name, required this.roll, this.className = 'সপ্তম'});

  @override
  String toString() => '$name (রোল $roll, $className)';
}

void main() {
  print(Student(name: 'Rafi', roll: 7));
  print(Student(roll: 3, name: 'Mitu', className: 'অষ্টম'));
}` },
    { l: 'm', q: '{{BankAccount}}: deposit, withdraw (টাকা না থাকলে না), আর একটা transaction history List যেখানে প্রতিটা লেনদেন লেখা থাকবে।', sol: `class BankAccount {
  final String owner;
  double _balance = 0;
  final List<String> history = [];

  BankAccount(this.owner);

  double get balance => _balance;

  void deposit(double amt) {
    _balance += amt;
    history.add('+$amt');
  }

  void withdraw(double amt) {
    if (amt > _balance) {
      history.add('ব্যর্থ: -$amt');
      return;
    }
    _balance -= amt;
    history.add('-$amt');
  }
}

void main() {
  var a = BankAccount('Rafi');
  a.deposit(1000);
  a.withdraw(300);
  a.withdraw(5000);
  print(a.balance);  // 700.0
  print(a.history);  // [+1000.0, -300.0, ব্যর্থ: -5000.0]
}` },
    { l: 'm', q: '{{Counter}} class: increment, decrement (0 এর নিচে যাবে না), reset।', sol: `class Counter {
  int _value = 0;
  int get value => _value;

  void increment() => _value++;
  void decrement() {
    if (_value > 0) _value--;
  }
  void reset() => _value = 0;
}

void main() {
  var c = Counter();
  c.increment();
  c.increment();
  c.decrement();
  c.decrement();
  c.decrement(); // 0 এর নিচে যাবে না
  print(c.value); // 0
}` },
    { l: 'm', q: '{{Temperature}} class: celsius field। fahrenheit getter আর setter (fahrenheit দিলে celsius বদলাবে)।', sol: `class Temperature {
  double celsius;
  Temperature(this.celsius);

  double get fahrenheit => celsius * 9 / 5 + 32;
  set fahrenheit(double f) => celsius = (f - 32) * 5 / 9;
}

void main() {
  var t = Temperature(25);
  print(t.fahrenheit); // 77.0
  t.fahrenheit = 212;
  print(t.celsius);    // 100.0
}` },
    { l: 'm', q: '{{Point}} class: x, y। {{distanceTo(Point other)}} method। (দূরত্ব = √((x2−x1)² + (y2−y1)²))', sol: `import 'dart:math';

class Point {
  final double x, y;
  const Point(this.x, this.y);

  double distanceTo(Point o) {
    double dx = o.x - x, dy = o.y - y;
    return sqrt(dx * dx + dy * dy);
  }
}

void main() {
  var a = Point(0, 0), b = Point(3, 4);
  print(a.distanceTo(b)); // 5.0
}` },
    { l: 'm', q: '{{List<Student>}} বানাও (name, gpa)। সবার গড় gpa, সবচেয়ে বেশি gpa এর ছাত্র, আর gpa অনুযায়ী সাজানো তালিকা।', sol: `class Student {
  final String name;
  final double gpa;
  Student(this.name, this.gpa);
}

void main() {
  var list = [
    Student('Rafi', 4.5),
    Student('Mitu', 4.9),
    Student('Tanim', 3.8),
  ];
  var avg = list.map((s) => s.gpa).reduce((a, b) => a + b) / list.length;
  print(avg.toStringAsFixed(2)); // 4.40

  var top = list.reduce((a, b) => a.gpa > b.gpa ? a : b);
  print(top.name); // Mitu

  list.sort((a, b) => b.gpa.compareTo(a.gpa));
  for (var s in list) {
    print('\${s.name}: \${s.gpa}');
  }
}` },
    { l: 'h', q: '{{Product}} (name, price) আর {{Cart}} class: add(product, qty), remove(name), total getter, printBill()।', sol: `class Product {
  final String name;
  final double price;
  Product(this.name, this.price);
}

class Cart {
  final Map<String, int> _qty = {};
  final Map<String, Product> _items = {};

  void add(Product p, [int qty = 1]) {
    _items[p.name] = p;
    _qty[p.name] = (_qty[p.name] ?? 0) + qty;
  }

  void remove(String name) {
    _items.remove(name);
    _qty.remove(name);
  }

  double get total {
    double t = 0;
    _items.forEach((name, p) => t += p.price * _qty[name]!);
    return t;
  }

  void printBill() {
    _items.forEach((name, p) {
      print('$name x \${_qty[name]} = \${p.price * _qty[name]!}');
    });
    print('মোট: $total');
  }
}

void main() {
  var cart = Cart();
  cart.add(Product('কলম', 12), 5);
  cart.add(Product('খাতা', 60), 2);
  cart.add(Product('কলম', 12));
  cart.printBill(); // কলম x 6 = 72.0, খাতা x 2 = 120.0, মোট: 192.0
}` },
    { l: 'h', q: "{{Time}} class (hour, minute)। {{addMinutes(int m)}} যা দিন পেরোলে আবার 0 থেকে গোনে। toString দুই অঙ্কে: '09:05'।", sol: `class Time {
  int hour, minute;
  Time(this.hour, this.minute);

  void addMinutes(int m) {
    int total = hour * 60 + minute + m;
    total %= 24 * 60;
    hour = total ~/ 60;
    minute = total % 60;
  }

  @override
  String toString() =>
      '\${hour.toString().padLeft(2, '0')}:\${minute.toString().padLeft(2, '0')}';
}

void main() {
  var t = Time(23, 50);
  t.addMinutes(75);
  print(t); // 01:05
}` },
  ],
};

TOPICS['inheritance'] = {
  short: 'Inheritance, abstract, mixin', title: 'Inheritance, abstract, interface, mixin, enum', days: 'দিন ৪–৫',
  goal: 'একটা class থেকে আরেকটা বানানো, একই কাজ ভিন্নভাবে করানো (override), আর সাধারণ নিয়ম বেঁধে দেওয়া।',
  learn: [
    '**Inheritance (উত্তরাধিকার)**: নতুন class পুরানো class এর সব কিছু পায়, তারপর নিজের জিনিস যোগ করে বা বদলায়। বাবার কাছ থেকে চেহারা পাওয়ার মতো।',
    { tree: ['Animal', ['Dog', 'Cat', 'Duck']], cap: 'Dog, Cat, Duck সবাই Animal, তাই Animal এর সব কিছু তাদের আছে' },
    { code: `class Animal {
  String name;
  Animal(this.name);

  void speak() => print('$name কিছু একটা বলে');
  void eat() => print('$name খাচ্ছে');
}

class Dog extends Animal {
  Dog(super.name);              // super = বাবা class এর constructor

  @override                     // বাবার method বদলে দিলাম
  void speak() => print('$name বলে: ঘেউ ঘেউ');

  void fetch() => print('$name বল নিয়ে এলো');   // শুধু Dog এর
}

class Cat extends Animal {
  Cat(String name) : super(name);   // আরেকভাবে লেখা
  @override
  void speak() => print('$name বলে: মিউ');
}

void main() {
  var d = Dog('Tommy');
  d.speak();   // Tommy বলে: ঘেউ ঘেউ
  d.eat();     // Tommy খাচ্ছে  (Animal থেকে পেয়েছে)
  d.fetch();

  List<Animal> pets = [Dog('Lalu'), Cat('Mini'), Animal('Tota')];
  for (var p in pets) {
    p.speak();   // প্রত্যেকে নিজের মতো বলে
  }
}` },
    { h: 'abstract class: অসম্পূর্ণ নকশা' },
    'কিছু class থেকে সরাসরি object বানানো অর্থহীন। "আকৃতি" (Shape) কেমন দেখতে? বলা যায় না। কিন্তু বলা যায় **প্রতিটা আকৃতির ক্ষেত্রফল থাকবে**। abstract class এই নিয়ম বেঁধে দেয়।',
    { code: `abstract class Shape {
  double area();           // শুধু ঘোষণা, body নেই
  void describe() => print('ক্ষেত্রফল: \${area().toStringAsFixed(2)}');
}

class Square extends Shape {
  double side;
  Square(this.side);
  @override
  double area() => side * side;
}

class Circle extends Shape {
  double r;
  Circle(this.r);
  @override
  double area() => 3.1416 * r * r;
}

void main() {
  // var s = Shape();  // Error! abstract থেকে object হয় না
  List<Shape> shapes = [Square(4), Circle(2)];
  for (var s in shapes) {
    s.describe();
  }
}` },
    { h: 'implements: শুধু নিয়ম মানা' },
    { code: `abstract class Printable {
  void printMe();
}

class Invoice implements Printable {
  @override
  void printMe() => print('চালান #101');
}` },
    { list: ['{{extends}}: বাবার সব কোড পায়, একটাই বাবা হতে পারে।', '{{implements}}: কোনো কোড পায় না, শুধু কথা দেয় "এই method গুলো আমি লিখবো"। একাধিক implement করা যায়।'] },
    { h: 'mixin: দক্ষতা যোগ করা' },
    { code: `mixin Swimmer {
  void swim() => print('সাঁতার কাটছি');
}
mixin Flyer {
  void fly() => print('উড়ছি');
}

class Duck extends Animal with Swimmer, Flyer {
  Duck(super.name);
}

class Animal {
  String name;
  Animal(this.name);
}

void main() {
  var d = Duck('Hasu');
  d.swim();
  d.fly();
}` },
    { h: 'enum: নির্দিষ্ট কয়েকটা মান' },
    { code: `enum Level { easy, medium, hard }

void main() {
  var l = Level.medium;
  print(l);          // Level.medium
  print(l.name);     // medium
  print(l.index);    // 1

  switch (l) {
    case Level.easy:
      print('সহজ');
    case Level.medium:
      print('মাঝারি');
    case Level.hard:
      print('কঠিন');
  }

  for (var x in Level.values) {
    print(x.name);
  }
}` },
  ],
  how: [
    '{{Dog extends Animal}} মানে Dog এর ভেতর Animal এর সব field আর method আছে।',
    'Dog object এ {{speak()}} ডাকলে Dart আগে Dog এ খোঁজে। পেলে সেটা চালায় (override)। না পেলে বাবা Animal এ খোঁজে।',
    '{{List<Animal>}} এ Dog, Cat সবাইকে রাখা যায়, কারণ সবাই Animal। কিন্তু {{speak()}} ডাকলে প্রত্যেকের নিজেরটা চলে। একে বলে polymorphism।',
    'enum এর বাইরের কোনো মান হতে পারে না, তাই ভুল বানানের ঝামেলা নেই।',
  ],
  quiz: [
    { q: 'Output কী?', code: `class A {
  void hi() => print('A');
}
class B extends A {
  @override
  void hi() => print('B');
}
void main() {
  A x = B();
  x.hi();
}`, opts: ['A', 'B', 'A\nB', 'Error'], a: 1, why: 'variable এর type A হলেও আসল object B। তাই B এর hi চলে।' },
    { q: 'কোনটা Error দেবে?', code: `abstract class Shape {
  double area();
}`, opts: ['class Sq extends Shape { double area() => 4; }', 'Shape s = Sq();', 'var s = Shape();', 'List<Shape> l = [];'], a: 2, why: 'abstract class থেকে সরাসরি object বানানো যায় না।' },
  ],
  probs: [
    { l: 'e', q: '{{Vehicle}} (name, wheels) থেকে {{Car}} আর {{Bike}} বানাও, প্রত্যেকে {{describe()}} override করবে।', sol: `class Vehicle {
  String name;
  int wheels;
  Vehicle(this.name, this.wheels);
  void describe() => print('$name এর $wheels চাকা');
}

class Car extends Vehicle {
  Car(String name) : super(name, 4);
  @override
  void describe() => print('গাড়ি $name, 4 চাকা, পেট্রোলে চলে');
}

class Bike extends Vehicle {
  Bike(String name) : super(name, 2);
  @override
  void describe() => print('সাইকেল $name, 2 চাকা, প্যাডেলে চলে');
}

void main() {
  for (var v in [Car('Toyota'), Bike('Phoenix')]) {
    v.describe();
  }
}` },
    { l: 'e', q: '{{Person}} (name, age) থেকে {{Student}} (roll যোগ)। Student এর introduce এ সব দেখাবে, super এর introduce ব্যবহার করে।', sol: `class Person {
  String name;
  int age;
  Person(this.name, this.age);
  void introduce() => print('আমি $name, বয়স $age');
}

class Student extends Person {
  int roll;
  Student(super.name, super.age, this.roll);

  @override
  void introduce() {
    super.introduce();   // বাবার টা আগে চালাও
    print('আমার রোল $roll');
  }
}

void main() {
  Student('Rafi', 14, 7).introduce();
}` },
    { l: 'e', q: '{{enum Day}} (sat থেকে fri) বানাও। switch দিয়ে শুক্রবার হলে "ছুটি", না হলে "স্কুল"। সব দিনের জন্য loop চালাও।', sol: `enum Day { sat, sun, mon, tue, wed, thu, fri }

String plan(Day d) => switch (d) {
      Day.fri => 'ছুটি',
      _ => 'স্কুল',
    };

void main() {
  for (var d in Day.values) {
    print('\${d.name}: \${plan(d)}');
  }
}` },
    { l: 'm', q: 'abstract {{Shape}} (area, perimeter)। Circle, Rectangle, Triangle (তিন বাহু, Heron সূত্র) বানাও। সব আকৃতির মোট ক্ষেত্রফল বের করো।', hint: 'Heron: s = (a+b+c)/2, area = √(s(s−a)(s−b)(s−c))', sol: `import 'dart:math';

abstract class Shape {
  double area();
  double perimeter();
}

class Circle extends Shape {
  double r;
  Circle(this.r);
  @override
  double area() => pi * r * r;
  @override
  double perimeter() => 2 * pi * r;
}

class Rectangle extends Shape {
  double w, h;
  Rectangle(this.w, this.h);
  @override
  double area() => w * h;
  @override
  double perimeter() => 2 * (w + h);
}

class Triangle extends Shape {
  double a, b, c;
  Triangle(this.a, this.b, this.c);
  @override
  double perimeter() => a + b + c;
  @override
  double area() {
    double s = perimeter() / 2;
    return sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

void main() {
  List<Shape> shapes = [Circle(1), Rectangle(2, 3), Triangle(3, 4, 5)];
  double total = shapes.fold(0, (sum, s) => sum + s.area());
  print(total.toStringAsFixed(2)); // 15.14
}` },
    { l: 'm', q: '{{Employee}} (name, baseSalary, {{salary()}}) থেকে {{Manager}} (bonus যোগ হবে) আর {{Intern}} (অর্ধেক বেতন)। সবার মোট বেতন।', sol: `class Employee {
  String name;
  double baseSalary;
  Employee(this.name, this.baseSalary);
  double salary() => baseSalary;
}

class Manager extends Employee {
  double bonus;
  Manager(super.name, super.baseSalary, this.bonus);
  @override
  double salary() => baseSalary + bonus;
}

class Intern extends Employee {
  Intern(super.name, super.baseSalary);
  @override
  double salary() => baseSalary / 2;
}

void main() {
  var staff = [Employee('A', 30000), Manager('B', 50000, 10000), Intern('C', 20000)];
  for (var e in staff) {
    print('\${e.name}: \${e.salary()}');
  }
  print('মোট: \${staff.fold(0.0, (s, e) => s + e.salary())}'); // 100000.0
}` },
    { l: 'm', q: '{{CanFly}} আর {{CanSwim}} mixin বানাও। Bird (শুধু ওড়ে), Fish (শুধু সাঁতারে), Duck (দুইটাই)।', sol: `mixin CanFly {
  void fly() => print('উড়ছি');
}
mixin CanSwim {
  void swim() => print('সাঁতার কাটছি');
}

class Bird with CanFly {}
class Fish with CanSwim {}
class Duck with CanFly, CanSwim {}

void main() {
  Bird().fly();
  Fish().swim();
  var d = Duck();
  d.fly();
  d.swim();
}` },
    { l: 'm', q: '{{Describable}} interface (abstract class, method {{String describe()}})। Book আর Movie দুইটাই implement করবে। একটা List<Describable> প্রিন্ট করো।', sol: `abstract class Describable {
  String describe();
}

class Book implements Describable {
  String title;
  Book(this.title);
  @override
  String describe() => 'বই: $title';
}

class Movie implements Describable {
  String title;
  int year;
  Movie(this.title, this.year);
  @override
  String describe() => 'সিনেমা: $title ($year)';
}

void main() {
  List<Describable> items = [Book('আমার বন্ধু রাশেদ'), Movie('মাটির ময়না', 2002)];
  for (var i in items) {
    print(i.describe());
  }
}` },
    { l: 'h', q: 'field সহ enum: {{enum Coin}} যেখানে প্রতিটা কয়েনের টাকার মান আছে (1, 2, 5)। একটা কয়েনের List এর মোট টাকা বের করো।', sol: `enum Coin {
  one(1),
  two(2),
  five(5);

  final int value;
  const Coin(this.value);
}

void main() {
  var pocket = [Coin.five, Coin.two, Coin.five, Coin.one];
  int total = pocket.fold(0, (s, c) => s + c.value);
  print(total); // 13
}` },
    { l: 'h', q: 'ছোট চিড়িয়াখানা: abstract {{Animal}} (name, {{sound()}}, {{food}} getter)। Lion, Elephant, Parrot। {{Zoo}} class এ animals list, {{add}}, {{feedAll()}} (প্রত্যেকে কী খায়), {{concert()}} (সবাই ডাকে)।', sol: `abstract class Animal {
  final String name;
  Animal(this.name);
  String sound();
  String get food;
}

class Lion extends Animal {
  Lion(super.name);
  @override
  String sound() => 'গর্জন!';
  @override
  String get food => 'মাংস';
}

class Elephant extends Animal {
  Elephant(super.name);
  @override
  String sound() => 'হুঁউউ';
  @override
  String get food => 'কলাগাছ';
}

class Parrot extends Animal {
  Parrot(super.name);
  @override
  String sound() => 'মিঠু মিঠু';
  @override
  String get food => 'ছোলা';
}

class Zoo {
  final List<Animal> _animals = [];
  void add(Animal a) => _animals.add(a);
  void feedAll() {
    for (var a in _animals) {
      print('\${a.name} খাচ্ছে \${a.food}');
    }
  }
  void concert() {
    for (var a in _animals) {
      print('\${a.name}: \${a.sound()}');
    }
  }
}

void main() {
  var zoo = Zoo();
  zoo.add(Lion('সিম্বা'));
  zoo.add(Elephant('ডাম্বো'));
  zoo.add(Parrot('টিয়া'));
  zoo.feedAll();
  zoo.concert();
}` },
  ],
};

TOPICS['exceptions'] = {
  short: 'Error সামলানো', title: 'Exception: try, catch, throw', days: 'দিন ৬–৭',
  goal: 'ভুল হলে প্রোগ্রাম crash না করে সুন্দরভাবে সামলানো, আর নিজের নিয়ম ভাঙলে Error ছোঁড়া।',
  learn: [
    'কিছু ভুল কোড লেখার সময় ধরা যায় না, চলার সময় হয়: ইউজার সংখ্যার জায়গায় অক্ষর দিল, list এ নেই এমন index চাইলো। এগুলোকে বলে **exception**। না সামলালে প্রোগ্রাম থেমে যায়।',
    { code: `void main() {
  try {
    int n = int.parse('12a');   // এখানে সমস্যা
    print(n);                   // এটা আর চলবে না
  } on FormatException {
    print('এটা সংখ্যা না!');
  } catch (e) {
    print('অন্য সমস্যা: $e');
  } finally {
    print('এটা সবসময় চলে');
  }
  print('প্রোগ্রাম চলছেই');
}`, out: 'এটা সংখ্যা না!\nএটা সবসময় চলে\nপ্রোগ্রাম চলছেই' },
    { tip: 'কোন exception এর কী মানে আর কখন আসে, বাংলায় দেখো [Error অভিধান](#errors) এ।' },
    { table: [['অংশ', 'কাজ'], ['{{try}}', 'যে কোডে সমস্যা হতে পারে'], ['{{on Type}}', 'নির্দিষ্ট ধরনের সমস্যা ধরো'], ['{{catch (e)}}', 'যেকোনো সমস্যা ধরো, e তে বিবরণ'], ['{{finally}}', 'সমস্যা হোক বা না হোক, চলবে']] },
    { h: 'throw: নিজে সমস্যা জানানো' },
    { code: `double divide(int a, int b) {
  if (b == 0) {
    throw ArgumentError('শূন্য দিয়ে ভাগ করা যায় না');
  }
  return a / b;
}

void main() {
  try {
    print(divide(10, 2));   // 5.0
    print(divide(1, 0));
  } catch (e) {
    print('ধরা পড়েছে: $e');
  }
}` },
    { h: 'নিজের Exception class' },
    { code: `class InsufficientBalance implements Exception {
  final double need;
  InsufficientBalance(this.need);
  @override
  String toString() => 'আরো $need টাকা দরকার';
}

void withdraw(double balance, double amount) {
  if (amount > balance) throw InsufficientBalance(amount - balance);
  print('তোলা হলো $amount');
}

void main() {
  try {
    withdraw(500, 800);
  } on InsufficientBalance catch (e) {
    print(e);   // আরো 300.0 টাকা দরকার
  }
}` },
    { tip: 'সব কিছু try এ মুড়ে দিও না। যেখানে সত্যিই বাইরের কারণে সমস্যা হতে পারে (ইউজার input, ফাইল, ইন্টারনেট), সেখানে দাও। নিজের লজিকের ভুল try দিয়ে লুকাবে না, ঠিক করবে।' },
  ],
  how: [
    'try এর ভেতরে কোনো লাইনে exception হলে বাকি লাইনগুলো বাদ, সরাসরি মিলে যাওয়া {{on}}/{{catch}} এ লাফ।',
    'উপর থেকে প্রথম যে {{on}} মিলে সেটা চলে। {{catch}} সব ধরে, তাই সবার শেষে রাখো।',
    '{{throw}} লিখলে function সাথে সাথে থামে, exception উপরের দিকে যায় যতক্ষণ না কেউ catch করে।',
  ],
  quiz: [
    { q: 'Output কী?', code: `try {
  print('A');
  throw Exception('x');
  print('B');
} catch (e) {
  print('C');
} finally {
  print('D');
}`, opts: ['A B C D', 'A C D', 'A D', 'C D'], a: 1, why: 'A প্রিন্ট, তারপর throw, B বাদ। catch এ C, finally তে D।' },
    { q: 'Output কী?', code: `try {
  var l = [1, 2];
  print(l[5]);
} on FormatException {
  print('F');
} on RangeError {
  print('R');
}`, opts: ['F', 'R', 'F R', 'crash'], a: 1, why: 'index 5 নেই, এটা RangeError।' },
  ],
  probs: [
    { l: 'e', q: '{{safeParse(String s)}} বানাও: try/catch দিয়ে int return করবে, না পারলে 0।', sol: `int safeParse(String s) {
  try {
    return int.parse(s);
  } on FormatException {
    return 0;
  }
}

void main() {
  print(safeParse('42'));  // 42
  print(safeParse('abc')); // 0
}` },
    { l: 'e', q: '{{divide(a, b)}}: b শূন্য হলে throw করো। main এ catch করে বার্তা দেখাও।', sol: `double divide(int a, int b) {
  if (b == 0) throw ArgumentError('b শূন্য হতে পারবে না');
  return a / b;
}

void main() {
  try {
    print(divide(9, 0));
  } catch (e) {
    print('সমস্যা: $e');
  }
}` },
    { l: 'm', q: 'list এর বাইরের index চাইলে RangeError ধরো, আর finally তে "চেক শেষ" লেখো।', sol: `void main() {
  var nums = [10, 20, 30];
  try {
    print(nums[7]);
  } on RangeError {
    print('এই index নেই');
  } finally {
    print('চেক শেষ');
  }
}` },
    { l: 'm', q: '{{setAge(int age)}}: বয়স 0 এর কম বা 150 এর বেশি হলে {{ArgumentError}} throw।', sol: `void setAge(int age) {
  if (age < 0 || age > 150) {
    throw ArgumentError('অসম্ভব বয়স: $age');
  }
  print('বয়স সেট হলো: $age');
}

void main() {
  for (var a in [14, -3, 200]) {
    try {
      setAge(a);
    } on ArgumentError catch (e) {
      print(e.message);
    }
  }
}` },
    { l: 'm', q: 'BankAccount এর withdraw এ টাকা না থাকলে নিজের {{InsufficientFundsException}} throw করো।', sol: `class InsufficientFundsException implements Exception {
  final double shortBy;
  InsufficientFundsException(this.shortBy);
  @override
  String toString() => 'টাকা কম আছে: আরো $shortBy লাগবে';
}

class Account {
  double balance;
  Account(this.balance);

  void withdraw(double amt) {
    if (amt > balance) throw InsufficientFundsException(amt - balance);
    balance -= amt;
  }
}

void main() {
  var acc = Account(1000);
  try {
    acc.withdraw(400);
    acc.withdraw(900);
  } on InsufficientFundsException catch (e) {
    print(e);
  }
  print(acc.balance); // 600.0
}` },
    { l: 'h', q: "{{['10', 'x', '30', '4.5', '7']}} থেকে যেগুলো int হয় সেগুলোর যোগফল, আর কয়টা ভুল ছিল।", sol: `void main() {
  var data = ['10', 'x', '30', '4.5', '7'];
  int sum = 0, bad = 0;
  for (var s in data) {
    try {
      sum += int.parse(s);
    } on FormatException {
      bad++;
    }
  }
  print('যোগফল $sum, ভুল $bad টা'); // 47, 2
}` },
    { l: 'h', q: '(কম্পিউটারে চালাও) ইউজার সঠিক সংখ্যা না দেওয়া পর্যন্ত বারবার জিজ্ঞেস করো।', sol: `import 'dart:io';

int askNumber(String msg) {
  while (true) {
    stdout.write(msg);
    try {
      return int.parse(stdin.readLineSync() ?? '');
    } on FormatException {
      print('এটা সংখ্যা না, আবার দাও।');
    }
  }
}

void main() {
  int n = askNumber('একটা সংখ্যা: ');
  print('তুমি দিয়েছ $n, এর বর্গ \${n * n}');
}` },
  ],
};

TOPICS['async'] = {
  short: 'Future ও async', title: 'Future, async আর await', days: 'দিন ৩–৪',
  goal: 'যে কাজের ফল পরে আসে (ইন্টারনেট, ফাইল, টাইমার), সেটার জন্য অপেক্ষা করা, প্রোগ্রাম আটকে না রেখে।',
  learn: [
    'রেস্টুরেন্টে খাবার অর্ডার দিলে একটা টোকেন দেয়। খাবার এখনো আসেনি, কিন্তু আসবে। ততক্ষণ তুমি অন্য কাজ করতে পারো। Dart এ এই টোকেনের নাম **Future**।',
    'ইন্টারনেট থেকে ডাটা আনা, ফাইল পড়া, এগুলো সময় নেয়। Flutter এ এগুলো সবসময় Future।',
    { code: `Future<String> orderFood() async {
  await Future.delayed(Duration(seconds: 2));   // ২ সেকেন্ড অপেক্ষা
  return 'বিরিয়ানি';
}

void main() async {
  print('অর্ডার দিলাম');
  String food = await orderFood();   // খাবার না আসা পর্যন্ত এখানে অপেক্ষা
  print('পেয়ে গেছি: $food');
}`, out: 'অর্ডার দিলাম\n(২ সেকেন্ড পর)\nপেয়ে গেছি: বিরিয়ানি' },
    { list: ['{{Future<String>}}: "ভবিষ্যতে একটা String আসবে"।', '{{async}}: এই function এর ভেতরে {{await}} ব্যবহার করবো।', '{{await}}: Future শেষ না হওয়া পর্যন্ত এই function এখানে অপেক্ষা করো, তারপর ফলটা দাও।', '{{await}} শুধু {{async}} function এর ভেতরে লেখা যায়।'] },
    { h: 'await না দিলে কী হয়?' },
    { code: `void main() {
  print('১');
  Future.delayed(Duration(seconds: 1), () => print('২'));
  print('৩');
}`, out: '১\n৩\n২' },
    'Dart অপেক্ষা না করে সামনে এগিয়ে গেল! টাইমার শেষে পরে "২" এলো। এটাই asynchronous: **কাজ শুরু করে দাও, ফল এলে দেখবো**।',
    { h: 'Error আর একসাথে অনেক Future' },
    { code: `Future<int> fetchScore(String name) async {
  await Future.delayed(Duration(milliseconds: 500));
  if (name.isEmpty) throw Exception('নাম খালি');
  return name.length * 10;
}

void main() async {
  try {
    int s = await fetchScore('');
    print(s);
  } catch (e) {
    print('সমস্যা: $e');
  }

  // তিনটা একসাথে শুরু, সবগুলোর জন্য একবারে অপেক্ষা
  var results = await Future.wait([
    fetchScore('Rafi'),
    fetchScore('Mitu'),
    fetchScore('Tanim'),
  ]);
  print(results); // [40, 40, 50]
}` },
  ],
  how: [
    'async function ডাকলে সাথে সাথে একটা Future ফেরত আসে, আসল কাজ পেছনে চলতে থাকে।',
    '{{await}} এ পৌঁছালে function টা "বিরতি" নেয়, Dart অন্য কাজ করে। Future শেষ হলে ঠিক সেখান থেকে আবার চলে।',
    'await ছাড়া Future প্রিন্ট করলে দেখাবে {{Instance of \'Future<String>\'}}, ফল না।',
    'async function এর ভেতরে throw হলে, await এর জায়গায় সেটা exception হিসেবে আসে, তাই try/catch চলে।',
  ],
  quiz: [
    { q: 'Output এর ক্রম কী?', code: `void main() async {
  print('A');
  await Future.delayed(Duration(seconds: 1));
  print('B');
  print('C');
}`, opts: ['A B C', 'A C B', 'B C A', 'C A B'], a: 0, why: 'await আছে, তাই অপেক্ষা করে B, তারপর C।' },
    { q: 'Output এর ক্রম কী?', code: `void main() {
  Future.delayed(Duration(seconds: 1), () => print('X'));
  print('Y');
}`, opts: ['X Y', 'Y X', 'শুধু Y', 'শুধু X'], a: 1, why: 'await নেই, তাই Y আগে, ১ সেকেন্ড পর X।' },
  ],
  probs: [
    { l: 'e', q: '৩ সেকেন্ড পর "হ্যালো" প্রিন্ট করো (await দিয়ে)।', sol: `void main() async {
  print('অপেক্ষা করো...');
  await Future.delayed(Duration(seconds: 3));
  print('হ্যালো');
}` },
    { l: 'e', q: '5 থেকে 1 পর্যন্ত countdown, প্রতি সেকেন্ডে একটা, শেষে "শুরু!"।', sol: `void main() async {
  for (int i = 5; i >= 1; i--) {
    print(i);
    await Future.delayed(Duration(seconds: 1));
  }
  print('শুরু!');
}` },
    { l: 'm', q: "একটা ভুয়া {{fetchUser()}}: 1 সেকেন্ড পর {{ {'name': 'Rafi', 'age': 14} }} Map ফেরত দেয়। main এ await করে নাম প্রিন্ট করো।", sol: `Future<Map<String, Object>> fetchUser() async {
  await Future.delayed(Duration(seconds: 1));
  return {'name': 'Rafi', 'age': 14};
}

void main() async {
  print('লোড হচ্ছে...');
  var user = await fetchUser();
  print('স্বাগতম, \${user['name']}');
}` },
    { l: 'm', q: 'দুইটা Future (একটা 2 সেকেন্ড, একটা 3 সেকেন্ড)। আগে একটার পর একটা await করো, তারপর Future.wait দিয়ে। {{Stopwatch}} দিয়ে সময় মাপো।', sol: `Future<String> task(String name, int sec) async {
  await Future.delayed(Duration(seconds: sec));
  return name;
}

void main() async {
  var sw = Stopwatch()..start();
  await task('A', 2);
  await task('B', 3);
  print('একটার পর একটা: \${sw.elapsed.inSeconds} সেকেন্ড'); // 5

  sw.reset();
  await Future.wait([task('A', 2), task('B', 3)]);
  print('একসাথে: \${sw.elapsed.inSeconds} সেকেন্ড'); // 3
}` },
    { l: 'm', q: 'একটা async function যা 50% সম্ভাবনায় throw করে। try/catch দিয়ে সামলাও।', sol: `import 'dart:math';

Future<String> download() async {
  await Future.delayed(Duration(seconds: 1));
  if (Random().nextBool()) throw Exception('নেটওয়ার্ক সমস্যা');
  return 'ফাইল নামানো শেষ';
}

void main() async {
  try {
    print(await download());
  } catch (e) {
    print('ব্যর্থ: $e');
  }
}` },
    { l: 'h', q: 'download এর অভিনয়: 0% থেকে 100% পর্যন্ত, প্রতি 300ms এ 20% করে বাড়বে, একটা progress bar এর মতো প্রিন্ট করবে ({{[####      ] 40%}})। শেষে "সম্পূর্ণ"।', sol: `void main() async {
  for (int p = 0; p <= 100; p += 20) {
    int filled = p ~/ 10;
    String bar = '#' * filled + ' ' * (10 - filled);
    print('[$bar] $p%');
    await Future.delayed(Duration(milliseconds: 300));
  }
  print('সম্পূর্ণ');
}` },
  ],
};

TOPICS['projects'] = {
  short: 'Mini Project', title: 'Mini Project: সব একসাথে', days: 'পুরো সপ্তাহ',
  goal: 'এতদিনের সব জিনিস মিলিয়ে ছোট ছোট পূর্ণ প্রোগ্রাম বানানো। এখানেই আসল শেখা হয়।',
  learn: [
    'প্রজেক্ট মানে আর কেউ ধাপ বলে দেবে না। তোমাকেই ঠিক করতে হবে কোন class লাগবে, কোন function লাগবে, কোন loop লাগবে। এটাই প্রোগ্রামারের আসল কাজ।',
    { h: 'প্রজেক্ট শুরুর নিয়ম' },
    { list: ['**১. খাতায় লেখো** প্রোগ্রামটা কী কী করবে। যেমন: "মেনু দেখাবে, ইউজার 1 চাপলে যোগ করবে, 2 চাপলে দেখাবে, 0 চাপলে বের হবে"।', '**২. ছোট থেকে শুরু**: আগে শুধু মেনু দেখানো আর বের হওয়া। চালাও। তারপর একটা একটা feature যোগ করো, প্রতিবার চালাও।', '**৩. ডাটা আগে ভাবো**: কী কী তথ্য রাখতে হবে? কোনটা class হবে, কোনটা List, কোনটা Map?', '**৪. আটকে গেলে**: সমস্যাটা ছোট করো। পুরো প্রজেক্ট না, শুধু যে অংশটা কাজ করছে না সেটা আলাদা ফাইলে চালাও।'] },
    { code: `import 'dart:io';

// প্রায় সব কনসোল প্রজেক্টের কঙ্কাল: মেনু loop
void main() {
  while (true) {
    print('\\n১. কাজ এক   ২. কাজ দুই   ০. বের হও');
    stdout.write('বাছাই করো: ');
    String? choice = stdin.readLineSync();
    if (choice == '0') break;
    switch (choice) {
      case '1':
        print('কাজ এক হচ্ছে');
      case '2':
        print('কাজ দুই হচ্ছে');
      default:
        print('ভুল বাছাই');
    }
  }
  print('আল্লাহ হাফেজ!');
}` },
    { warn: 'এই প্রজেক্টগুলো input নেয়, তাই কম্পিউটারে Dart install করে টার্মিনালে চালাও: {{dart run main.dart}}। DartPad এ stdin কাজ করে না। (চাইলে input এর জায়গায় variable দিয়ে DartPad এও পরীক্ষা করতে পারো)' },
  ],
  how: [
    'প্রতিটা প্রজেক্টে লেখা আছে কোন সপ্তাহের কোন জিনিস লাগবে। ভুলে গেলে সেই টপিকে ফিরে যাও।',
    'সমাধান দেখার আগে অন্তত একদিন নিজে চেষ্টা করো। তোমার সমাধান আলাদা হতেই পারে, কাজ করলেই ঠিক।',
    'শেষ করে নিজে কিছু feature যোগ করো। সেটাই সবচেয়ে বড় শেখা।',
  ],
  probs: [
    { l: 'p', q: '**ক্যালকুলেটর**: ইউজার দুইটা সংখ্যা আর একটা চিহ্ন দেবে, ফল দেখাবে। "q" না দেওয়া পর্যন্ত চলতে থাকবে। ভুল সংখ্যা বা শূন্য দিয়ে ভাগে crash করবে না। (লাগবে: loop, switch, tryParse, function)', sol: `import 'dart:io';

double? calc(double a, double b, String op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b == 0 ? null : a / b;
  }
  return null;
}

void main() {
  while (true) {
    stdout.write('প্রথম সংখ্যা (q = বের হও): ');
    String? s = stdin.readLineSync();
    if (s == 'q') break;
    double? a = double.tryParse(s ?? '');
    stdout.write('চিহ্ন (+ - * /): ');
    String op = stdin.readLineSync() ?? '';
    stdout.write('দ্বিতীয় সংখ্যা: ');
    double? b = double.tryParse(stdin.readLineSync() ?? '');
    if (a == null || b == null) {
      print('সংখ্যা ঠিক নেই');
      continue;
    }
    double? r = calc(a, b, op);
    print(r == null ? 'হিসাব করা যায়নি' : '$a $op $b = $r');
  }
}` },
    { l: 'p', q: '**সংখ্যা অনুমান খেলা (উন্নত)**: কঠিনতা বাছাই (সহজ 1–50, কঠিন 1–200), সীমিত চেষ্টা (সহজে 10, কঠিনে 8)। শেষে আবার খেলবে কিনা জিজ্ঞেস করবে, আর সবচেয়ে কম চেষ্টার রেকর্ড মনে রাখবে। (লাগবে: Random, while, do-while, function)', sol: `import 'dart:io';
import 'dart:math';

int? playOnce(int max, int limit) {
  int secret = Random().nextInt(max) + 1;
  for (int t = 1; t <= limit; t++) {
    stdout.write('চেষ্টা $t/$limit: ');
    int g = int.tryParse(stdin.readLineSync() ?? '') ?? -1;
    if (g == secret) {
      print('ঠিক! $t বারে');
      return t;
    }
    print(g < secret ? 'আরো বড়' : 'আরো ছোট');
  }
  print('হেরে গেছ। সংখ্যা ছিল $secret');
  return null;
}

void main() {
  int? best;
  String again;
  do {
    stdout.write('১ = সহজ, ২ = কঠিন: ');
    bool hard = stdin.readLineSync() == '2';
    int? tries = playOnce(hard ? 200 : 50, hard ? 8 : 10);
    if (tries != null && (best == null || tries < best)) {
      best = tries;
      print('নতুন রেকর্ড!');
    }
    stdout.write('আবার খেলবে? (y/n): ');
    again = stdin.readLineSync() ?? 'n';
  } while (again == 'y');
  print('সেরা রেকর্ড: \${best ?? 'নেই'}');
}` },
    { l: 'p', q: '**রেজাল্ট ম্যানেজার**: Student class (name, ৩ বিষয়ের নম্বর)। মেনু: ছাত্র যোগ, সবার রেজাল্ট (মোট, গড়, গ্রেড), প্রথম ৩ জন, ফেল করা ছাত্র। (লাগবে: class, getter, List, sort, where)', sol: `import 'dart:io';

class Student {
  final String name;
  final List<int> marks;
  Student(this.name, this.marks);

  int get total => marks.reduce((a, b) => a + b);
  double get avg => total / marks.length;
  bool get failed => marks.any((m) => m < 33);
  String get grade {
    if (failed) return 'F';
    if (avg >= 80) return 'A+';
    if (avg >= 70) return 'A';
    if (avg >= 60) return 'A-';
    if (avg >= 50) return 'B';
    return 'C';
  }

  @override
  String toString() => '$name: মোট $total, গড় \${avg.toStringAsFixed(1)}, গ্রেড $grade';
}

int ask(String msg) {
  stdout.write(msg);
  return int.tryParse(stdin.readLineSync() ?? '') ?? 0;
}

void main() {
  var students = <Student>[];
  while (true) {
    print('\\n১. ছাত্র যোগ  ২. সবার রেজাল্ট  ৩. প্রথম ৩ জন  ৪. ফেল  ০. বের হও');
    int c = ask('বাছাই: ');
    if (c == 0) break;
    if (c == 1) {
      stdout.write('নাম: ');
      String name = stdin.readLineSync() ?? '';
      var m = [ask('বাংলা: '), ask('ইংরেজি: '), ask('গণিত: ')];
      students.add(Student(name, m));
    } else if (c == 2) {
      students.forEach(print);
    } else if (c == 3) {
      var sorted = [...students]..sort((a, b) => b.total - a.total);
      sorted.take(3).forEach(print);
    } else if (c == 4) {
      students.where((s) => s.failed).forEach(print);
    }
  }
}` },
    { l: 'p', q: '**ব্যাংক সিস্টেম**: একাধিক Account (নম্বর, মালিক, balance)। মেনু: নতুন একাউন্ট, জমা, তোলা, এক একাউন্ট থেকে আরেকটায় ট্রান্সফার, সব দেখাও। টাকা কম থাকলে নিজের exception। (লাগবে: class, Map, exception, private field)', sol: `import 'dart:io';

class InsufficientFunds implements Exception {
  @override
  String toString() => 'যথেষ্ট টাকা নেই';
}

class Account {
  final int number;
  final String owner;
  double _balance = 0;
  Account(this.number, this.owner);

  double get balance => _balance;
  void deposit(double a) => _balance += a;
  void withdraw(double a) {
    if (a > _balance) throw InsufficientFunds();
    _balance -= a;
  }

  @override
  String toString() => '#$number $owner: $_balance টাকা';
}

class Bank {
  final Map<int, Account> _accounts = {};
  int _next = 1001;

  Account open(String owner) {
    var a = Account(_next++, owner);
    _accounts[a.number] = a;
    return a;
  }

  Account find(int n) {
    var a = _accounts[n];
    if (a == null) throw ArgumentError('একাউন্ট $n নেই');
    return a;
  }

  void transfer(int from, int to, double amt) {
    var a = find(from), b = find(to);
    a.withdraw(amt);
    b.deposit(amt);
  }

  void showAll() => _accounts.values.forEach(print);
}

String read(String msg) {
  stdout.write(msg);
  return stdin.readLineSync() ?? '';
}

void main() {
  var bank = Bank();
  while (true) {
    print('\\n১. নতুন  ২. জমা  ৩. তোলা  ৪. ট্রান্সফার  ৫. সব  ০. বের হও');
    String c = read('বাছাই: ');
    if (c == '0') break;
    try {
      switch (c) {
        case '1':
          print('খোলা হলো: \${bank.open(read('নাম: '))}');
        case '2':
          bank.find(int.parse(read('নম্বর: '))).deposit(double.parse(read('টাকা: ')));
        case '3':
          bank.find(int.parse(read('নম্বর: '))).withdraw(double.parse(read('টাকা: ')));
        case '4':
          bank.transfer(int.parse(read('থেকে: ')), int.parse(read('তে: ')), double.parse(read('টাকা: ')));
        case '5':
          bank.showAll();
      }
    } on FormatException {
      print('সংখ্যা ঠিক নেই');
    } catch (e) {
      print('সমস্যা: $e');
    }
  }
}` },
    { l: 'p', q: '**টু-ডু লিস্ট**: Task class (title, done)। মেনু: কাজ যোগ, সব দেখাও (✓ বা ✗ সহ নম্বর দিয়ে), নম্বর দিয়ে শেষ চিহ্নিত করো, নম্বর দিয়ে মুছো, শুধু বাকি কাজ দেখাও। (লাগবে: class, List, index, where)', sol: `import 'dart:io';

class Task {
  String title;
  bool done = false;
  Task(this.title);
}

void show(List<Task> tasks) {
  if (tasks.isEmpty) {
    print('কোনো কাজ নেই');
    return;
  }
  for (int i = 0; i < tasks.length; i++) {
    print('\${i + 1}. [\${tasks[i].done ? '✓' : '✗'}] \${tasks[i].title}');
  }
}

int? askIndex(int length) {
  stdout.write('নম্বর: ');
  int? n = int.tryParse(stdin.readLineSync() ?? '');
  if (n == null || n < 1 || n > length) {
    print('ভুল নম্বর');
    return null;
  }
  return n - 1;
}

void main() {
  var tasks = <Task>[];
  while (true) {
    print('\\n১. যোগ  ২. সব  ৩. শেষ হয়েছে  ৪. মুছো  ৫. বাকিগুলো  ০. বের হও');
    stdout.write('বাছাই: ');
    String c = stdin.readLineSync() ?? '';
    if (c == '0') break;
    switch (c) {
      case '1':
        stdout.write('কাজ: ');
        tasks.add(Task(stdin.readLineSync() ?? ''));
      case '2':
        show(tasks);
      case '3':
        var d = askIndex(tasks.length);
        if (d != null) tasks[d].done = true;
      case '4':
        var r = askIndex(tasks.length);
        if (r != null) tasks.removeAt(r);
      case '5':
        show(tasks.where((t) => !t.done).toList());
    }
  }
}` },
    { l: 'p', q: '**লাইব্রেরি**: Book (id, title, author, isAvailable) আর Member (name, ধার নেওয়া বইয়ের List, সর্বোচ্চ ৩টা)। Library class: বই যোগ, খোঁজা (title এর অংশ দিয়ে), ধার দেওয়া, ফেরত নেওয়া, কার কাছে কোন বই। সব নিয়ম ভাঙলে exception। (লাগবে: একাধিক class, List, Map, exception, where)', sol: `class Book {
  final int id;
  final String title, author;
  bool isAvailable = true;
  Book(this.id, this.title, this.author);
  @override
  String toString() => '#$id $title ($author)\${isAvailable ? '' : ' [ধার দেওয়া]'}';
}

class Member {
  final String name;
  final List<Book> borrowed = [];
  Member(this.name);
}

class Library {
  final Map<int, Book> _books = {};
  final Map<String, Member> _members = {};

  void addBook(Book b) => _books[b.id] = b;
  Member member(String name) => _members.putIfAbsent(name, () => Member(name));

  List<Book> search(String q) =>
      _books.values.where((b) => b.title.toLowerCase().contains(q.toLowerCase())).toList();

  void lend(int id, String name) {
    var b = _books[id];
    if (b == null) throw ArgumentError('বই #$id নেই');
    if (!b.isAvailable) throw StateError('\${b.title} এখন ধার দেওয়া');
    var m = member(name);
    if (m.borrowed.length >= 3) throw StateError('$name এর কাছে আগেই ৩টা বই');
    b.isAvailable = false;
    m.borrowed.add(b);
  }

  void giveBack(int id, String name) {
    var m = member(name);
    var b = m.borrowed.firstWhere((x) => x.id == id,
        orElse: () => throw StateError('$name এর কাছে #$id নেই'));
    m.borrowed.remove(b);
    b.isAvailable = true;
  }

  void report() {
    _members.forEach((n, m) => print('$n: \${m.borrowed.map((b) => b.title).join(', ')}'));
  }
}

void main() {
  var lib = Library();
  lib.addBook(Book(1, 'Dart Basics', 'Rahim'));
  lib.addBook(Book(2, 'Flutter Guide', 'Karim'));
  lib.addBook(Book(3, 'Dart Advanced', 'Rahim'));

  print(lib.search('dart'));
  lib.lend(1, 'Rafi');
  lib.lend(2, 'Rafi');
  try {
    lib.lend(1, 'Mitu');
  } catch (e) {
    print('সমস্যা: $e');
  }
  lib.giveBack(1, 'Rafi');
  lib.lend(1, 'Mitu');
  lib.report();
}` },
    { l: 'p', q: '**টিক-ট্যাক-টো**: দুইজন খেলোয়াড় (X আর O), 3×3 বোর্ড (2D List)। পালা করে ঘর নম্বর (1–9) দেবে। প্রতি চালের পর বোর্ড দেখাও, জয় বা ড্র চেক করো। ভরা ঘরে চাল দেওয়া যাবে না। (লাগবে: 2D List, nested loop, function, while)', sol: `import 'dart:io';

final board = List.generate(3, (_) => List.filled(3, ' '));

void show() {
  for (int r = 0; r < 3; r++) {
    print(' \${board[r].join(' | ')}');
    if (r < 2) print('---+---+---');
  }
}

bool wins(String p) {
  for (int i = 0; i < 3; i++) {
    if (board[i].every((c) => c == p)) return true;              // row
    if ([0, 1, 2].every((r) => board[r][i] == p)) return true;   // column
  }
  if ([0, 1, 2].every((i) => board[i][i] == p)) return true;      // কর্ণ
  if ([0, 1, 2].every((i) => board[i][2 - i] == p)) return true;  // উল্টো কর্ণ
  return false;
}

void main() {
  String player = 'X';
  for (int turn = 0; turn < 9; turn++) {
    show();
    int? cell;
    while (true) {
      stdout.write('$player এর চাল (1-9): ');
      cell = int.tryParse(stdin.readLineSync() ?? '');
      if (cell != null && cell >= 1 && cell <= 9) {
        int r = (cell - 1) ~/ 3, c = (cell - 1) % 3;
        if (board[r][c] == ' ') {
          board[r][c] = player;
          break;
        }
      }
      print('ঐ ঘরে চাল দেওয়া যাবে না');
    }
    if (wins(player)) {
      show();
      print('$player জিতেছে!');
      return;
    }
    player = player == 'X' ? 'O' : 'X';
  }
  show();
  print('ড্র!');
}` },
    { l: 'p', q: '**কুইজ গেম**: Question class (প্রশ্ন, ৪টা অপশন, সঠিক index)। কয়েকটা Dart প্রশ্ন (নিজে আরো যোগ করো) এলোমেলো ক্রমে জিজ্ঞেস করো, প্রতিটার জন্য 10 সেকেন্ড সময় দেখাও (async countdown না, শুধু সময় মাপো Stopwatch দিয়ে, দেরি হলে নম্বর নেই)। শেষে স্কোর আর ভুলগুলোর সঠিক উত্তর। (লাগবে: class, List.shuffle, Stopwatch, সব কিছু)', sol: `import 'dart:io';

class Question {
  final String text;
  final List<String> options;
  final int answer;
  const Question(this.text, this.options, this.answer);
}

const questions = [
  Question('10 ~/ 3 = ?', ['3.33', '3', '1', '4'], 1),
  Question('কোনটা null রাখতে পারে?', ['int', 'String', 'int?', 'bool'], 2),
  Question('List এর প্রথম index?', ['1', '0', '-1', 'যেকোনো'], 1),
  Question('ডুপ্লিকেট ছাড়া সংগ্রহ?', ['List', 'Map', 'Set', 'String'], 2),
  Question('function কিছু ফেরত না দিলে type?', ['null', 'void', 'empty', 'none'], 1),
];

void main() {
  var qs = [...questions]..shuffle();
  int score = 0;
  var wrong = <Question>[];
  for (var q in qs) {
    print('\\n\${q.text}');
    for (int i = 0; i < q.options.length; i++) {
      print('  \${i + 1}. \${q.options[i]}');
    }
    var sw = Stopwatch()..start();
    stdout.write('উত্তর (10 সেকেন্ডের মধ্যে): ');
    int? a = int.tryParse(stdin.readLineSync() ?? '');
    sw.stop();
    if (sw.elapsed.inSeconds > 10) {
      print('দেরি হয়ে গেছে!');
      wrong.add(q);
    } else if (a != null && a - 1 == q.answer) {
      print('ঠিক!');
      score++;
    } else {
      print('ভুল');
      wrong.add(q);
    }
  }
  print('\\nস্কোর: $score / \${qs.length}');
  for (var q in wrong) {
    print('\${q.text} → \${q.options[q.answer]}');
  }
}` },
  ],
};

CARDS.push(
  { w: 8, f: 'String কে শব্দে ভাঙো / আবার জোড়া দাও', b: "var words = s.split(' ');\nwords.join(' ');" },
  { w: 8, f: 'অক্ষরের সংখ্যা মান, আর উল্টোটা', b: "'A'.codeUnitAt(0)   // 65\nString.fromCharCode(66) // B" },
  { w: 8, f: 'দুই পাশের স্পেস বাদ / সব বদলাও', b: "s.trim()\ns.replaceAll('a', 'b')" },
  { w: 8, f: 'binary search এর মূল লাইন', b: 'int mid = (low + high) ~/ 2;\nif (a[mid] < x) low = mid + 1;\nelse high = mid - 1;' },
  { w: 8, f: '2D list এর row r, column c', b: 'm[r][c]' },
  { w: 9, f: 'class, field, constructor', b: 'class Dog {\n  String name;\n  Dog(this.name);\n}' },
  { w: 9, f: 'named parameter সহ constructor', b: 'Book({required this.title, this.price = 0});' },
  { w: 9, f: 'getter আর setter', b: 'int get value => _v;\nset value(int x) => _v = x;' },
  { w: 9, f: 'print(obj) এ কী দেখাবে ঠিক করো', b: "@override\nString toString() => 'Dog($name)';" },
  { w: 9, f: 'উত্তরাধিকার আর বাবার constructor', b: 'class Dog extends Animal {\n  Dog(super.name);\n}' },
  { w: 9, f: 'body ছাড়া method সহ class', b: 'abstract class Shape {\n  double area();\n}' },
  { w: 9, f: 'mixin যোগ করো', b: 'class Duck extends Bird with Swimmer {}' },
  { w: 9, f: 'enum', b: 'enum Level { easy, hard }\nLevel.easy.name // easy' },
  { w: 10, f: 'সমস্যা ধরো', b: 'try {\n  ...\n} on FormatException {\n  ...\n} catch (e) {\n  ...\n} finally {\n  ...\n}' },
  { w: 10, f: 'নিজে সমস্যা ছোঁড়ো', b: "throw ArgumentError('ভুল মান');" },
  { w: 11, f: 'async function যা পরে String দেয়', b: "Future<String> load() async {\n  await Future.delayed(Duration(seconds: 1));\n  return 'ok';\n}" },
  { w: 11, f: 'Future এর ফলের জন্য অপেক্ষা', b: 'var x = await load();  // async function এর ভেতরে' },
);
