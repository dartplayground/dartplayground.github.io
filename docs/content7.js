// Extra টপিক (কোনো সপ্তাহে না): terminal (Linux/Mac), powershell (Windows), dart-compile
// topic এ lang: 'bash' দিলে ওই টপিকের সব কোড terminal command হিসেবে দেখায়। কোনো একটা কোড আলাদা হলে সেখানে lang দাও।

TRACES.cd = {
  title: 'Terminal এ ঘোরাঘুরি', lang: 'bash', box: 'এখন কোথায় আছি',
  code: ['pwd', 'ls', 'cd Documents', 'pwd', 'cd ..', 'mkdir khata', 'cd khata', 'touch notes.txt', 'ls', 'cd ~'],
  steps: [
    { l: 0, v: { 'ফোল্ডার': '/home/rafi' }, p: '/home/rafi', n: 'terminal খুললে তুমি থাকো নিজের home ফোল্ডারে। {{pwd}} সেটাই বলে দিল।' },
    { l: 1, p: 'Documents  Pictures  dart_practice', n: '{{ls}}: এই ফোল্ডারের ভেতরে কী কী আছে।' },
    { l: 2, v: { 'ফোল্ডার': '/home/rafi/Documents' }, n: '{{cd Documents}}: Documents এর ভেতরে ঢুকলাম। কিছু প্রিন্ট হয়নি, কিন্তু জায়গা বদলেছে।' },
    { l: 3, p: '/home/rafi/Documents', n: 'আবার {{pwd}}। এবার উত্তর আলাদা, কারণ আমরা সরে এসেছি।' },
    { l: 4, v: { 'ফোল্ডার': '/home/rafi' }, n: '{{..}} মানে "এক ধাপ উপরের ফোল্ডার"। আবার home এ ফিরলাম।' },
    { l: 5, n: '{{mkdir khata}}: home এ khata নামে নতুন ফোল্ডার হলো। কিন্তু আমরা এখনো home এই আছি, ভেতরে ঢুকিনি।' },
    { l: 6, v: { 'ফোল্ডার': '/home/rafi/khata' }, n: 'এবার khata তে ঢুকলাম।' },
    { l: 7, n: '{{touch notes.txt}}: khata এর ভেতরে খালি একটা ফাইল হলো।' },
    { l: 8, p: 'notes.txt', n: 'khata তে এখন শুধু notes.txt।' },
    { l: 9, v: { 'ফোল্ডার': '/home/rafi' }, n: '{{~}} মানে home। যেখান থেকেই লেখো, {{cd ~}} সোজা home এ নিয়ে যায়।' },
  ],
};

TOPICS['terminal'] = {
  short: 'Terminal (Linux/Mac)', title: 'Linux Command Line: Terminal এর প্রথম পাঠ', days: 'Input টপিকের আগে পড়ো', lang: 'bash',
  goal: 'মাউস ছাড়া, শুধু লিখে কম্পিউটারকে নির্দেশ দেওয়া: ফোল্ডারে ঘোরা, ফাইল বানানো, কপি করা, মোছা, আর নিজের Dart প্রোগ্রাম চালানো।',
  learn: [
    { tip: 'এই টপিক **Linux আর Mac** এর জন্য। Windows হলে [Terminal (Windows)](#powershell) টপিক পড়ো। দুইটা পড়ার দরকার নেই, তোমার কম্পিউটার যেটা, সেটা।' },
    'এতদিন DartPad এ কোড চালিয়েছ। কিন্তু নিজের কম্পিউটারে Dart চালাতে, input নিতে, বা পরে app বানাতে **terminal** লাগবে। terminal হলো একটা কালো জানালা যেখানে মাউস দিয়ে ক্লিক না করে **লিখে** নির্দেশ দাও। ফাইল ম্যানেজারে যা যা ক্লিক করে করো, terminal এ তার সবই লিখে করা যায়।',
    'তুমি যা লেখো, সেটা পড়ে আর চালায় একটা প্রোগ্রাম, নাম **shell**। Linux এ সাধারণত shell হলো **bash**। Ubuntu তে terminal খুলতে চাপো {{Ctrl + Alt + T}}। (Mac এর Terminal এও প্রায় সব command একই।)',
    { h: 'Prompt: terminal তোমার জন্য অপেক্ষা করছে' },
    { code: 'rafi@pc:~$ ', lang: 'plaintext' },
    { anat: [['rafi', 'কে ব্যবহার করছে (user)'], ['@pc', 'কোন কম্পিউটার'], [':~', 'এখন কোন ফোল্ডারে আছো (~ মানে home)'], ['$', 'এবার তোমার লেখার পালা']], cap: 'prompt এর প্রতিটা অংশ' },
    'prompt এর পরে command লেখো, তারপর **Enter**। Enter না চাপা পর্যন্ত কিছুই হয় না। এই পাতার উদাহরণে prompt আর লিখছি না, শুধু command।',
    { h: 'একটা command এর গঠন' },
    { anat: [['ls', 'command: কী করবে'], ['-l', 'option: কিভাবে করবে (- দিয়ে শুরু)'], ['Documents', 'argument: কিসের উপর করবে']], cap: 'শব্দগুলো স্পেস দিয়ে আলাদা। স্পেস খুব জরুরি: {{ls-l}} আর {{ls -l}} এক না।' },
    { warn: 'Linux এ **বড় আর ছোট হাতের অক্ষর আলাদা**। {{Documents}}, {{documents}} আর {{DOCUMENTS}} তিনটা আলাদা নাম। {{LS}} লিখলে command পাবে না।' },
    { h: 'ফোল্ডারের গাছ' },
    'কম্পিউটারের সব ফাইল একটা উল্টো গাছের মতো সাজানো। সবার উপরে {{/}}, একে বলে **root**। তার ভেতরে ফোল্ডার, তার ভেতরে আরো ফোল্ডার। তোমার নিজের সব জিনিস থাকে {{/home/rafi}} এ। এটাই তোমার **home**, ছোট করে {{~}}।',
    { code: `/
├── bin            (প্রোগ্রাম)
├── etc            (সেটিংস)
└── home
    └── rafi       ← ~ (তোমার home)
        ├── Documents
        │   └── notes.txt
        ├── Pictures
        └── dart_practice
            └── hello.dart`, lang: 'plaintext' },
    { h: 'কোথায় আছি, কী আছে: pwd আর ls' },
    { code: 'pwd\nls\nls -l\nls -a\nls Documents', out: '/home/rafi\nDocuments  Pictures  dart_practice\ndrwxr-xr-x 2 rafi rafi 4096 Oct 15 10:00 Documents\n...\n.  ..  .bashrc  Documents  Pictures  dart_practice\nnotes.txt' },
    { list: ['{{pwd}} (print working directory): এখন কোন ফোল্ডারে আছো, পুরো ঠিকানা।', '{{ls}} (list): এই ফোল্ডারে কী কী আছে।', '{{ls -l}}: লম্বা তালিকা। শুরুতে {{d}} থাকলে ফোল্ডার, {{-}} থাকলে ফাইল।', '{{ls -a}}: লুকানো ফাইলসহ সব। নাম {{.}} দিয়ে শুরু হলে সেটা লুকানো ফাইল।', '{{ls Documents}}: ভেতরে না ঢুকেই অন্য ফোল্ডারে কী আছে দেখা।'] },
    { h: 'ঘোরাফেরা: cd' },
    { code: 'cd Documents\ncd ..\ncd dart_practice/my_app\ncd ../..\ncd ~\ncd /etc\ncd' },
    { table: [['command', 'কোথায় যাবে'], ['{{cd Documents}}', 'এখনকার ফোল্ডারের ভেতরের Documents এ'], ['{{cd ..}}', 'এক ধাপ উপরে (parent ফোল্ডার)'], ['{{cd ../..}}', 'দুই ধাপ উপরে'], ['{{cd ~}} বা শুধু {{cd}}', 'home এ, যেখান থেকেই হোক'], ['{{cd /etc}}', 'root থেকে শুরু করে /etc এ'], ['{{cd -}}', 'ঠিক আগে যেখানে ছিলে সেখানে']] },
    { h: 'দুই ধরনের ঠিকানা (path)' },
    { table: [['', 'উদাহরণ', 'মানে'], ['**Absolute** (পূর্ণ ঠিকানা)', '{{/home/rafi/Documents}}', '{{/}} দিয়ে শুরু। যেখান থেকেই লেখো, একই জায়গা।'], ['**Relative** (আপেক্ষিক)', '{{Documents}}, {{../Pictures}}', 'এখন যেখানে আছো, সেখান থেকে হিসাব।']] },
    'বাড়ির ঠিকানার মতো: "বাংলাদেশ, ঢাকা, মিরপুর, রোড ৫, বাড়ি ১২" হলো absolute, সবাই খুঁজে পাবে। "পাশের বাসা" হলো relative, তুমি কোথায় দাঁড়িয়ে আছো তার উপর নির্ভর করে।',
    { tip: 'নামের প্রথম ২-৩ অক্ষর লিখে **Tab** চাপো, বাকিটা নিজে পূর্ণ হয়ে যাবে। এতে টাইপ কম, ভুলও কম। দুইবার Tab চাপলে মিলে যাওয়া সব নাম দেখায়।' },
    { h: 'ফাইল আর ফোল্ডার বানানো' },
    { code: "mkdir khata\nmkdir -p school/class7/math\ntouch notes.txt\necho 'আজ terminal শিখলাম' > notes.txt\necho 'কাল Dart চালাবো' >> notes.txt\ncat notes.txt", out: 'আজ terminal শিখলাম\nকাল Dart চালাবো' },
    { list: ['{{mkdir নাম}} (make directory): নতুন ফোল্ডার।', '{{mkdir -p a/b/c}}: মাঝের ফোল্ডারগুলো না থাকলে সেগুলোও বানায়।', '{{touch নাম}}: খালি ফাইল বানায়।', "{{echo 'লেখা'}}: লেখাটা স্ক্রিনে দেখায়, ঠিক Dart এর {{print}} এর মতো।", '{{>}}: স্ক্রিনে না দেখিয়ে ফাইলে লেখে। **আগের সব লেখা মুছে** নতুন করে লেখে।', '{{>>}}: ফাইলের শেষে যোগ করে, আগেরটা থাকে।', '{{cat ফাইল}}: ফাইলের ভেতরের লেখা দেখায়।'] },
    { h: 'কপি, সরানো, নাম বদলানো, মোছা' },
    { code: 'cp notes.txt backup.txt\ncp notes.txt Documents/\ncp -r school school_copy\nmv backup.txt old.txt\nmv old.txt Documents/\nrm Documents/old.txt\nrmdir khata\nrm -r school_copy' },
    { table: [['command', 'কাজ'], ['{{cp উৎস গন্তব্য}}', 'কপি। গন্তব্য ফোল্ডার হলে তার ভেতরে একই নামে কপি।'], ['{{cp -r}}', 'পুরো ফোল্ডার, ভেতরের সবকিছুসহ কপি।'], ['{{mv উৎস গন্তব্য}}', 'সরানো। একই ফোল্ডারে অন্য নাম দিলে মানে **নাম বদলানো**।'], ['{{rm ফাইল}}', 'ফাইল মোছা।'], ['{{rmdir ফোল্ডার}}', 'শুধু **খালি** ফোল্ডার মোছে।'], ['{{rm -r ফোল্ডার}}', 'ফোল্ডার আর তার ভেতরের সব মোছে।']] },
    { warn: 'terminal এ **Recycle Bin নেই**। {{rm}} দিয়ে মুছলে আর ফেরত আনা যায় না, কেউ জিজ্ঞেসও করে না "আপনি কি নিশ্চিত?"। {{rm -r}} চালানোর আগে {{pwd}} আর {{ls}} দিয়ে দেখে নাও কোথায় আছো আর কী মুছছো।' },
    { h: 'নিজে চালিয়ে দেখো' },
    { widget: 'termLab' },
    { h: 'যেগুলো প্রতিদিন কাজে লাগবে' },
    { table: [['চাপো / লেখো', 'কাজ'], ['**Tab**', 'নাম পূর্ণ করা'], ['**↑ / ↓**', 'আগের লেখা command ফেরত আনা'], ['**Ctrl + C**', 'চলতে থাকা প্রোগ্রাম থামানো (যেমন ভুল করে infinite loop)'], ['{{clear}} বা **Ctrl + L**', 'স্ক্রিন পরিষ্কার'], ['{{history}}', 'আগে কী কী লিখেছ তার তালিকা'], ['{{ls --help}}, {{man ls}}', 'কোনো command এর সাহায্য (man থেকে বের হতে q)'], ['{{sudo command}}', 'admin এর ক্ষমতায় চালানো, যেমন কিছু install করতে। নিশ্চিত না হলে কখনো না।']] },
    { warn: 'terminal এ **Ctrl + C মানে কপি না**, মানে "থামো"। terminal এ কপি করতে {{Ctrl + Shift + C}}, পেস্ট করতে {{Ctrl + Shift + V}}।' },
    { h: 'Terminal থেকে Dart চালানো' },
    'Dart install করা থাকলে ([dart.dev/get-dart](https://dart.dev/get-dart) দেখো), প্রথমে নিশ্চিত হও যে সেটা কাজ করছে:',
    { code: 'dart --version', out: 'Dart SDK version: 3.x.x (stable) ...' },
    'তারপর একটা ফোল্ডার বানিয়ে ভেতরে Dart ফাইল লেখো আর চালাও:',
    { code: 'mkdir -p ~/dart_practice\ncd ~/dart_practice\ncode hello.dart\ndart run hello.dart', out: 'Hello, Dart!' },
    { list: ['{{code hello.dart}}: VS Code এ ফাইলটা খোলে (না থাকলে নতুন বানায়)। কোড লিখে **save** করো (Ctrl + S)।', "{{dart run hello.dart}}: প্রোগ্রাম চালায়। {{stdin.readLineSync()}} থাকলে এখানেই input দিতে পারবে, যেটা DartPad এ পারতে না।", 'ফাইল যে ফোল্ডারে, terminal ও সেই ফোল্ডারে থাকতে হবে। না হলে Dart ফাইল খুঁজে পাবে না।'] },
    { code: "void main() {\n  print('Hello, Dart!');\n}", lang: 'dart' },
  ],
  how: [
    'Enter চাপলে shell পুরো লাইনটা **স্পেস দিয়ে ভাগ করে** শব্দ বানায়। প্রথম শব্দ হলো command, বাকিগুলো option আর argument।',
    'shell তারপর ওই নামের প্রোগ্রাম খোঁজে ({{ls}} আসলে {{/bin/ls}} নামের একটা ছোট প্রোগ্রাম), সেটা চালায়, আর তার output স্ক্রিনে দেখায়। কাজ শেষ হলে আবার prompt দেখায়।',
    'shell সবসময় মনে রাখে তুমি **এখন কোন ফোল্ডারে** আছো। relative path ({{Documents}}, {{..}}) সেখান থেকে হিসাব হয়। {{cd}} শুধু এই "এখন কোথায়" টা বদলায়।',
    '{{..}} মানে উপরের ফোল্ডার, {{.}} মানে এই ফোল্ডার, {{~}} মানে home। এগুলো ছোট ডাকনাম, shell আসল ঠিকানায় বদলে নেয়।',
    'নিচের যন্ত্রে ধাপে ধাপে দেখো, প্রতিটা command এর পরে "এখন কোথায় আছি" কিভাবে বদলায়।',
  ],
  traces: ['cd'],
  quiz: [
    { q: 'তুমি {{/home/rafi}} এ আছো। এই তিনটা চালালে কী দেখাবে?', code: 'cd Documents\ncd ..\npwd', opts: ['/home/rafi/Documents', '/home/rafi', '/home', '~'], a: 1, why: 'Documents এ ঢুকে {{..}} দিয়ে আবার এক ধাপ উপরে, মানে যেখান থেকে শুরু করেছিলে।' },
    { q: 'শেষে কী দেখাবে?', code: "echo 'hi' > a.txt\necho 'bye' > a.txt\ncat a.txt", opts: ['hi', 'bye', 'hi এর পরের লাইনে bye', 'কিছুই না'], a: 1, why: '{{>}} প্রতিবার আগের লেখা মুছে নতুন করে লেখে। দুইটাই রাখতে চাইলে দ্বিতীয়বার {{>>}}।' },
    { q: '{{my notes.txt}} নামের ফাইল মুছতে কেউ লিখলো {{rm my notes.txt}}। কী হবে?', opts: ['ফাইলটা মুছে যাবে', 'shell এটাকে দুইটা আলাদা ফাইল ভাববে: my আর notes.txt', 'rm দিয়ে ফাইল মোছা যায় না', 'নাম বদলে যাবে'], a: 1, why: "স্পেস দিয়ে শব্দ ভাগ হয়। নামে স্পেস থাকলে quote দাও: {{rm 'my notes.txt'}}। এজন্য ফাইলের নামে স্পেস না দিয়ে {{my_notes.txt}} লেখা ভালো।" },
    { q: 'কোনটা absolute path?', opts: ['Documents/notes.txt', '../Pictures', '/home/rafi/Pictures', './hello.dart'], a: 2, why: '{{/}} দিয়ে শুরু হলে absolute। বাকিগুলো এখনকার ফোল্ডার থেকে হিসাব হয়।' },
    { q: '{{khata}} ফোল্ডারে ২টা ফাইল আছে। {{rmdir khata}} চালালে?', opts: ['ফোল্ডার আর ফাইল সব মুছে যাবে', 'শুধু ফাইলগুলো মুছবে', 'Error: Directory not empty', 'ফোল্ডারটা খালি হয়ে যাবে'], a: 2, why: '{{rmdir}} শুধু খালি ফোল্ডার মোছে। ভেতরে কিছু থাকলে {{rm -r khata}}, আর সেটা সাবধানে।' },
  ],
  probs: [
    { l: 'e', q: 'তুমি এখন কোন ফোল্ডারে আছো দেখো, তারপর সেখানে কী কী আছে দেখো।', sol: 'pwd\nls' },
    { l: 'e', q: 'home এ {{khata}} নামে ফোল্ডার বানাও, তার ভেতরে যাও, তারপর নিশ্চিত হও যে সত্যিই ভেতরে আছো।', sol: 'cd ~\nmkdir khata\ncd khata\npwd   # /home/rafi/khata' },
    { l: 'e', q: 'home এ লুকানো ফাইলগুলোও দেখাও।', hint: 'লুকানো ফাইলের নাম {{.}} দিয়ে শুরু। {{ls}} এর একটা option লাগবে।', sol: 'cd ~\nls -a' },
    { l: 'e', q: '{{notes.txt}} ফাইলে লেখো "আজ terminal শিখলাম", তারপর ফাইলের ভেতরে কী আছে দেখো।', sol: "echo 'আজ terminal শিখলাম' > notes.txt\ncat notes.txt" },
    { l: 'e', q: '{{cd ..}} দুইবার না লিখে এক command এ দুই ধাপ উপরে যাও।', sol: 'cd ../..\npwd' },
    { l: 'e', q: 'ভুল খোঁজো: home এ {{Documents}} ফোল্ডার আছে, কিন্তু {{cd documents}} লিখলে আসে {{No such file or directory}}। কেন?', ans: 'Linux এ বড় আর ছোট হাতের অক্ষর আলাদা। ফোল্ডারের নাম **D** বড় হাতের, তুমি লিখেছ ছোট d।\nঠিক উপায়: {{cd Documents}}। আরো ভালো: {{cd Doc}} লিখে Tab চাপো, ভুলই হবে না।' },
    { l: 'm', q: '{{notes.txt}} এ আগের লেখা না মুছে আরেকটা লাইন যোগ করো: "কাল Dart চালাবো"। তারপর পুরো ফাইল দেখো।', hint: '{{>}} মুছে লেখে। যোগ করতে আরেকটা চিহ্ন লাগে।', sol: "echo 'কাল Dart চালাবো' >> notes.txt\ncat notes.txt" },
    { l: 'm', q: 'এক command এ এই গঠন বানাও: {{school/class7/math}} আর {{school/class7/science}}। তারপর {{school/class7}} এ কী আছে দেখো।', sol: 'mkdir -p school/class7/math school/class7/science\nls school/class7   # math  science' },
    { l: 'm', q: '{{notes.txt}} এর একটা কপি বানাও {{backup.txt}} নামে। তারপর {{notes.txt}} এর নাম বদলে {{diary.txt}} করো। শেষে {{ls}} এ কী দেখবে?', sol: 'cp notes.txt backup.txt\nmv notes.txt diary.txt\nls   # backup.txt  diary.txt' },
    { l: 'm', q: 'তুমি এখন কোথায় আছো জানো না। এক command এ home এর {{Pictures}} ফোল্ডারে যাও।', hint: 'এমন ঠিকানা লাগবে যেটা এখনকার জায়গার উপর নির্ভর করে না। {{~}} কাজে লাগবে।', sol: 'cd ~/Pictures' },
    { l: 'm', q: 'নিজের কম্পিউটারে {{~/dart_practice}} এ {{hello.dart}} বানাও যেটা তোমার নাম প্রিন্ট করে, তারপর terminal থেকে চালাও।', sol: "mkdir -p ~/dart_practice\ncd ~/dart_practice\ncode hello.dart        # কোড লিখে save করো\ndart run hello.dart", note: "hello.dart এর ভেতরে: {{void main() { print('আমি রাফি'); } }}। চালানোর আগে save করতে ভুলো না, না হলে Dart পুরানো (খালি) ফাইল চালাবে।" },
    { l: 'h', q: '{{old_project}} ফোল্ডারে অনেক ফাইল আছে। {{rmdir old_project}} কাজ করছে না। কেন? পুরো ফোল্ডারটা নিরাপদে মোছো।', sol: 'pwd                # ঠিক জায়গায় আছি তো?\nls old_project     # কী মুছছি দেখে নিই\nrm -r old_project\nls                 # সত্যিই চলে গেছে?', note: '{{rmdir}} শুধু খালি ফোল্ডার মোছে। {{rm -r}} সব মোছে, ফেরত আনা যায় না। তাই আগে দেখে নেওয়া।' },
    { l: 'h', q: 'কম্পিউটার ছাড়া, খাতায় dry run করো: নিচের command গুলো চালালে শেষে তুমি কোথায় থাকবে, আর শেষ {{ls}} কী দেখাবে? শুরু {{/home/rafi}} থেকে।', code: 'mkdir a\ncd a\nmkdir b c\ncd b\ntouch x.txt\ncd ../c\ntouch y.txt\ncd ..\nls', ans: 'শেষে আছো {{/home/rafi/a}}, আর {{ls}} দেখাবে {{b  c}}।\n{{cd ../c}} মানে b থেকে এক ধাপ উপরে (a), তারপর c তে। শেষের {{cd ..}} c থেকে a তে আনে। x.txt আছে b এর ভেতরে, y.txt c এর ভেতরে, তাই a তে সরাসরি শুধু দুইটা ফোল্ডার।' },
    { l: 'h', q: 'তোমার Dart প্রোগ্রামে ভুল করে infinite loop হয়ে গেছে, terminal এ একটানা লেখা আসছেই। কিভাবে থামাবে? তারপর আগের command টা আবার না লিখে কিভাবে চালাবে?', ans: '**Ctrl + C** চাপো, চলতে থাকা প্রোগ্রাম থেমে যাবে আর prompt ফিরে আসবে।\nকোড ঠিক করে save করো, তারপর **↑** চাপো, আগের {{dart run ...}} চলে আসবে। Enter চাপো।' },
  ],
};

TRACES.psCd = {
  title: 'PowerShell এ ঘোরাঘুরি', lang: 'powershell', box: 'এখন কোথায় আছি',
  code: ['Get-Location', 'cd Documents', 'Get-Location', 'cd ..', 'mkdir khata', 'cd khata', 'New-Item notes.txt', 'Get-ChildItem', 'cd ~'],
  steps: [
    { l: 0, v: { 'ফোল্ডার': 'C:\\Users\\rafi' }, p: 'C:\\Users\\rafi', n: 'PowerShell খুললে তুমি থাকো নিজের ফোল্ডারে (home)। {{Get-Location}} সেটাই বলে দিল। (আসলটা উপরে {{Path}} আর {{----}} লিখে একটা ছোট টেবিল দেখায়।)' },
    { l: 1, v: { 'ফোল্ডার': 'C:\\Users\\rafi\\Documents' }, n: '{{cd Documents}}: Documents এর ভেতরে ঢুকলাম। কিছু প্রিন্ট হয়নি, কিন্তু জায়গা বদলেছে। prompt ও বদলে হয়েছে {{PS C:\\Users\\rafi\\Documents>}}।' },
    { l: 2, p: 'C:\\Users\\rafi\\Documents', n: 'আবার {{Get-Location}}। এবার উত্তর আলাদা, কারণ আমরা সরে এসেছি।' },
    { l: 3, v: { 'ফোল্ডার': 'C:\\Users\\rafi' }, n: '{{..}} মানে "এক ধাপ উপরের ফোল্ডার"। আবার home এ ফিরলাম।' },
    { l: 4, p: 'd----  khata', n: '{{mkdir khata}}: নতুন ফোল্ডার হলো। PowerShell বানানো জিনিসের একটা ছোট তালিকাও দেখায় ({{d}} মানে directory, মানে ফোল্ডার)। আমরা এখনো home এই আছি।' },
    { l: 5, v: { 'ফোল্ডার': 'C:\\Users\\rafi\\khata' }, n: 'এবার khata তে ঢুকলাম।' },
    { l: 6, p: '-a---  notes.txt', n: '{{New-Item notes.txt}}: খালি একটা ফাইল হলো। (Linux এর {{touch}} এর কাজ।)' },
    { l: 7, p: '-a---  notes.txt', n: '{{Get-ChildItem}} (বা {{ls}}, {{dir}}): khata তে এখন শুধু notes.txt।' },
    { l: 8, v: { 'ফোল্ডার': 'C:\\Users\\rafi' }, n: '{{~}} মানে home। যেখান থেকেই লেখো, {{cd ~}} সোজা home এ নিয়ে যায়।' },
  ],
};

TOPICS['powershell'] = {
  short: 'Terminal (Windows)', title: 'Windows PowerShell: Terminal এর প্রথম পাঠ', days: 'Input টপিকের আগে পড়ো', lang: 'powershell',
  goal: 'Windows কম্পিউটারে মাউস ছাড়া, শুধু লিখে নির্দেশ দেওয়া: ফোল্ডারে ঘোরা, ফাইল বানানো, কপি করা, মোছা, আর নিজের Dart প্রোগ্রাম চালানো।',
  learn: [
    { tip: 'এই টপিক **Windows** এর জন্য। Linux বা Mac হলে [Terminal (Linux/Mac)](#terminal) টপিক পড়ো। দুইটা পড়ার দরকার নেই, তোমার কম্পিউটার যেটা, সেটা।' },
    'এতদিন DartPad এ কোড চালিয়েছ। কিন্তু নিজের কম্পিউটারে Dart চালাতে, input নিতে, বা পরে app বানাতে **terminal** লাগবে। terminal হলো একটা জানালা যেখানে মাউস দিয়ে ক্লিক না করে **লিখে** নির্দেশ দাও। File Explorer এ যা যা ক্লিক করে করো, terminal এ তার সবই লিখে করা যায়।',
    'Windows এর terminal এর নাম **PowerShell**। খুলতে: **Start** মেনুতে "PowerShell" বা "Terminal" লিখে Enter, অথবা {{Win + X}} চেপে **Terminal**। Windows এ দুইটা আছে: পুরানো **Windows PowerShell** (নীল জানালা, আগে থেকেই থাকে) আর নতুন **PowerShell 7**। এই পাতার সব কিছু দুইটাতেই চলে, শুধু Error এর লেখা একটু আলাদা দেখায়।',
    { h: 'Prompt: PowerShell তোমার জন্য অপেক্ষা করছে' },
    { code: 'PS C:\\Users\\rafi> ', lang: 'plaintext' },
    { anat: [['PS', 'এটা PowerShell'], ['C:', 'কোন drive (হার্ডডিস্কের ভাগ)'], ['\\Users\\rafi', 'এখন কোন ফোল্ডারে আছো'], ['>', 'এবার তোমার লেখার পালা']], cap: 'prompt এর প্রতিটা অংশ' },
    'prompt এর পরে command লেখো, তারপর **Enter**। Enter না চাপা পর্যন্ত কিছুই হয় না। এই পাতার উদাহরণে prompt আর লিখছি না, শুধু command।',
    { h: 'Command এর নাম: কাজ-জিনিস (Verb-Noun)' },
    'PowerShell এর আসল command গুলোর নাম খুব নিয়মমাফিক: **কী করবে** তারপর একটা {{-}} তারপর **কিসের উপর**। নাম দেখেই কাজ বোঝা যায়।',
    { anat: [['Get-ChildItem', 'command: Get (আনো) + ChildItem (ভেতরের জিনিস)'], ['-Path', 'parameter এর নাম (- দিয়ে শুরু)'], ['Documents', 'parameter এর মান'], ['-Force', 'switch: থাকলে চালু, না থাকলে বন্ধ']], cap: 'শব্দগুলো স্পেস দিয়ে আলাদা' },
    { table: [['Verb (কাজ)', 'মানে', 'উদাহরণ'], ['Get', 'দেখাও / আনো', '{{Get-Location}}, {{Get-Content}}'], ['Set', 'বদলাও / বসাও', '{{Set-Location}}, {{Set-Content}}'], ['New', 'নতুন বানাও', '{{New-Item}}'], ['Remove', 'মুছো', '{{Remove-Item}}'], ['Copy / Move / Rename', 'কপি / সরাও / নাম বদলাও', '{{Copy-Item}}, {{Move-Item}}, {{Rename-Item}}']] },
    'লম্বা নাম রোজ লিখতে কষ্ট, তাই প্রতিটার ছোট ডাকনাম আছে, যাকে বলে **alias**। মজার ব্যাপার: Linux এর পরিচিত নামগুলোও alias হিসেবে চলে: {{ls}}, {{cd}}, {{cat}}, {{cp}}, {{mv}}, {{rm}}, {{pwd}}, {{echo}}। আর পুরানো Windows এর {{dir}}, {{copy}}, {{del}}, {{type}} ও চলে। কোন alias আসলে কোন command, দেখতে: {{Get-Alias ls}}।',
    { warn: 'নাম এক হলেও **option আলাদা**। Linux এর {{ls -a}} বা {{rm -r}} এখানে Linux এর মতো কাজ করে না। PowerShell এ লেখো {{Get-ChildItem -Force}} আর {{Remove-Item -Recurse}}। আর {{touch}} PowerShell এ নেই।' },
    { tip: 'Linux এর উল্টো: Windows এ **বড়-ছোট হাতের অক্ষর কোনো ব্যাপার না**। {{get-childitem}}, {{GET-CHILDITEM}}, {{Documents}}, {{documents}}, সব একই। তবু সুন্দর দেখাতে সবাই {{Get-ChildItem}} এভাবে লেখে।' },
    { h: 'ফোল্ডারের গাছ আর ঠিকানা' },
    'Windows এ প্রতিটা drive এর আলাদা গাছ: {{C:\\}}, {{D:\\}}। ঠিকানায় ফোল্ডার আলাদা করা হয় **ব্যাকস্ল্যাশ** {{\\}} দিয়ে (Linux এ {{/}})। তোমার নিজের সব জিনিস থাকে {{C:\\Users\\rafi}} এ। এটাই তোমার **home**, ছোট করে {{~}}।',
    { code: `C:\\
├── Program Files     (install করা প্রোগ্রাম)
├── Windows           (Windows নিজে, হাত দিও না)
└── Users
    └── rafi          ← ~ (তোমার home)
        ├── Desktop
        ├── Documents
        │   └── notes.txt
        ├── Pictures
        └── dart_practice
            └── hello.dart`, lang: 'plaintext' },
    { table: [['', 'উদাহরণ', 'মানে'], ['**Absolute** (পূর্ণ ঠিকানা)', '{{C:\\Users\\rafi\\Documents}}', 'drive দিয়ে শুরু। যেখান থেকেই লেখো, একই জায়গা।'], ['**Relative** (আপেক্ষিক)', '{{Documents}}, {{..\\Pictures}}', 'এখন যেখানে আছো, সেখান থেকে হিসাব।']] },
    { tip: 'PowerShell {{/}} ও বোঝে: {{cd Documents/khata}} আর {{cd Documents\\khata}} একই। নামের প্রথম ২-৩ অক্ষর লিখে **Tab** চাপো, বাকিটা নিজে পূর্ণ হবে। আবার Tab চাপলে পরের মিলে যাওয়া নাম আসে।' },
    { h: 'কোথায় আছি, কী আছে, ঘোরাফেরা' },
    { code: 'Get-Location\nGet-ChildItem\nGet-ChildItem Documents\ncd Documents\ncd ..\ncd ~\ncd C:\\Windows', out: '\nPath\n----\nC:\\Users\\rafi\n\n    Directory: C:\\Users\\rafi\n\nMode         LastWriteTime   Length Name\n----         -------------   ------ ----\nd----   15-10-2026  10:00           Desktop\nd----   15-10-2026  10:00           Documents\n...' },
    { table: [['command', 'ছোট নাম', 'কাজ'], ['{{Get-Location}}', '{{pwd}}', 'এখন কোন ফোল্ডারে আছো'], ['{{Get-ChildItem}}', '{{ls}}, {{dir}}', 'এই ফোল্ডারে কী কী আছে। Mode এ {{d}} মানে ফোল্ডার, {{a}} মানে ফাইল।'], ['{{Get-ChildItem -Force}}', '', 'লুকানো ফাইলসহ সব'], ['{{Set-Location Documents}}', '{{cd Documents}}', 'Documents এ ঢোকো'], ['{{cd ..}}', '', 'এক ধাপ উপরে'], ['{{cd ~}}', '', 'home এ, যেখান থেকেই হোক']] },
    { h: 'ফাইল আর ফোল্ডার বানানো' },
    { code: "mkdir khata\nmkdir school\\class7\\math\nNew-Item notes.txt\nSet-Content notes.txt 'আজ PowerShell শিখলাম'\nAdd-Content notes.txt 'কাল Dart চালাবো'\nGet-Content notes.txt", out: 'আজ PowerShell শিখলাম\nকাল Dart চালাবো' },
    { list: ['{{mkdir নাম}}: নতুন ফোল্ডার। মাঝের ফোল্ডার না থাকলে সেগুলোও নিজে বানিয়ে নেয় (Linux এ এর জন্য {{-p}} লাগে)।', '{{New-Item নাম}}: খালি ফাইল। ফোল্ডার বানাতেও পারে: {{New-Item khata -ItemType Directory}}।', "{{Set-Content ফাইল 'লেখা'}}: ফাইলে লেখে, **আগের সব লেখা মুছে**।", "{{Add-Content ফাইল 'লেখা'}}: শেষে যোগ করে, আগেরটা থাকে।", "Linux এর মতো {{echo 'লেখা' > ফাইল}} আর {{>>}} ও চলে।", '{{Get-Content ফাইল}} (ছোট নাম {{cat}}, {{type}}): ফাইলের লেখা দেখায়।'] },
    { h: 'কপি, সরানো, নাম বদলানো, মোছা' },
    { code: 'Copy-Item notes.txt backup.txt\nCopy-Item notes.txt Documents\nCopy-Item school school_copy -Recurse\nRename-Item backup.txt old.txt\nMove-Item old.txt Documents\nRemove-Item Documents\\old.txt\nRemove-Item school_copy -Recurse' },
    { table: [['command', 'ছোট নাম', 'কাজ'], ['{{Copy-Item উৎস গন্তব্য}}', '{{cp}}, {{copy}}', 'কপি। ফোল্ডার আর তার ভেতরের সব কপি করতে {{-Recurse}}।'], ['{{Move-Item উৎস গন্তব্য}}', '{{mv}}, {{move}}', 'অন্য ফোল্ডারে সরানো।'], ['{{Rename-Item পুরানো নতুন}}', '{{ren}}', 'নাম বদলানো। নতুন নামে শুধু নাম, ঠিকানা না।'], ['{{Remove-Item নাম}}', '{{rm}}, {{del}}', 'মোছা। ভেতরে জিনিস আছে এমন ফোল্ডার মুছতে {{-Recurse}}।']] },
    { warn: 'PowerShell দিয়ে মুছলে **Recycle Bin এ যায় না**, সোজা চলে যায়, ফেরত আনা যায় না। {{Remove-Item ... -Recurse}} চালানোর আগে {{Get-Location}} আর {{Get-ChildItem}} দিয়ে দেখে নাও কোথায় আছো আর কী মুছছো।' },
    { h: 'নিজে চালিয়ে দেখো' },
    { widget: 'psLab' },
    { h: 'যেগুলো প্রতিদিন কাজে লাগবে' },
    { table: [['চাপো / লেখো', 'কাজ'], ['**Tab**', 'নাম পূর্ণ করা (বারবার চাপলে পরের মিল)'], ['**↑ / ↓**', 'আগের লেখা command ফেরত আনা'], ['**Ctrl + C**', 'কিছু select করা না থাকলে: চলতে থাকা প্রোগ্রাম থামানো (যেমন ভুল করে infinite loop)'], ['{{cls}} বা {{Clear-Host}}', 'স্ক্রিন পরিষ্কার'], ['{{Get-History}}', 'আগে কী কী লিখেছ'], ['{{Get-Help Get-ChildItem}}', 'কোনো command এর সাহায্য'], ['{{Get-Alias}}', 'কোন ছোট নাম কোন command']] },
    { tip: 'Windows Terminal এ লেখা select করে **Ctrl + C** চাপলে কপি হয়, **Ctrl + V** দিয়ে পেস্ট। কিছু select করা না থাকলে Ctrl + C মানে "থামো"। পুরানো নীল জানালায় পেস্ট করতে মাউসের ডান বাটন।' },
    { h: 'PowerShell থেকে Dart চালানো' },
    'Dart install করা থাকলে ([dart.dev/get-dart](https://dart.dev/get-dart) দেখো), **PowerShell বন্ধ করে আবার খোলো**, তারপর নিশ্চিত হও যে সেটা কাজ করছে:',
    { code: 'dart --version', out: 'Dart SDK version: 3.x.x (stable) ...' },
    { warn: "{{dart : The term 'dart' is not recognized...}} দেখালে মানে PowerShell Dart খুঁজে পাচ্ছে না। প্রথমে PowerShell বন্ধ করে আবার খোলো (install এর আগে খোলা জানালা নতুন ঠিকানা জানে না)। তাও না হলে Dart এর {{bin}} ফোল্ডার Windows এর **PATH** এ যোগ করতে হবে, dart.dev এর install পাতায় ধাপগুলো আছে।" },
    'তারপর একটা ফোল্ডার বানিয়ে ভেতরে Dart ফাইল লেখো আর চালাও:',
    { code: 'mkdir ~\\dart_practice\ncd ~\\dart_practice\ncode hello.dart\ndart run hello.dart', out: 'Hello, Dart!' },
    { list: ['{{code hello.dart}}: VS Code এ ফাইলটা খোলে (না থাকলে নতুন বানায়)। কোড লিখে **save** করো (Ctrl + S)। VS Code না থাকলে {{notepad hello.dart}} ও চলে।', '{{dart run hello.dart}}: প্রোগ্রাম চালায়। {{stdin.readLineSync()}} থাকলে এখানেই input দিতে পারবে, যেটা DartPad এ পারতে না।', 'ফাইল যে ফোল্ডারে, PowerShell ও সেই ফোল্ডারে থাকতে হবে। না হলে Dart ফাইল খুঁজে পাবে না।', 'VS Code এর ভেতরেও terminal আছে: **Ctrl + `** চাপো। Windows এ সেটা PowerShell ই।'] },
    { code: "void main() {\n  print('Hello, Dart!');\n}", lang: 'dart' },
  ],
  how: [
    'Enter চাপলে PowerShell লাইনটা **স্পেস দিয়ে ভাগ করে**। প্রথম শব্দ command। বাকিগুলোর মধ্যে {{-}} দিয়ে শুরু হলে parameter এর নাম, অন্যগুলো মান।',
    'প্রথম শব্দ alias হলে ({{ls}}, {{cd}}) আগে আসল নামে বদলায় ({{Get-ChildItem}}, {{Set-Location}})। তারপর command চালায় আর ফল দেখায়।',
    'PowerShell এর একটা বিশেষত্ব: command গুলো আসলে লেখা না, **object** ফেরত দেয়। যেমন {{Get-ChildItem}} প্রতিটা ফাইলের নাম, সাইজ, তারিখ সহ একটা করে object দেয়, PowerShell সেগুলো টেবিল বানিয়ে দেখায়। পরে এটা খুব কাজে লাগে, এখন শুধু জেনে রাখো।',
    'PowerShell সবসময় মনে রাখে তুমি **এখন কোন ফোল্ডারে** আছো। relative path ({{Documents}}, {{..}}) সেখান থেকে হিসাব হয়। {{cd}} শুধু এই "এখন কোথায়" টা বদলায়।',
    'নিচের যন্ত্রে ধাপে ধাপে দেখো, প্রতিটা command এর পরে "এখন কোথায় আছি" কিভাবে বদলায়।',
  ],
  traces: ['psCd'],
  quiz: [
    { q: 'তুমি {{C:\\Users\\rafi}} এ আছো। এই তিনটা চালালে কী দেখাবে?', code: 'cd Documents\ncd ..\nGet-Location', opts: ['C:\\Users\\rafi\\Documents', 'C:\\Users\\rafi', 'C:\\Users', 'C:\\'], a: 1, why: 'Documents এ ঢুকে {{..}} দিয়ে আবার এক ধাপ উপরে, মানে যেখান থেকে শুরু করেছিলে।' },
    { q: 'শেষে কী দেখাবে?', code: "Set-Content a.txt 'hi'\nAdd-Content a.txt 'bye'\nGet-Content a.txt", opts: ['hi', 'bye', 'hi এর পরের লাইনে bye', 'Error'], a: 2, why: '{{Set-Content}} লিখলো hi, {{Add-Content}} শেষে bye যোগ করলো। দুইটাই আছে।' },
    { q: 'কোনটা PowerShell এ কাজ **করবে না**?', opts: ['dir', 'ls', 'touch notes.txt', 'cd ..'], a: 2, why: '{{touch}} PowerShell এ নেই, তাই "is not recognized" Error। খালি ফাইল বানাতে {{New-Item notes.txt}}।' },
    { q: '{{GET-CHILDITEM DOCUMENTS}} লিখলে কী হবে? (ফোল্ডারের আসল নাম Documents)', opts: ['Documents এর ভেতরে কী আছে দেখাবে', 'Error: command পাওয়া যায়নি', 'Error: ফোল্ডার পাওয়া যায়নি', 'শুধু Admin হলে চলবে'], a: 0, why: 'Windows আর PowerShell বড়-ছোট হাতের অক্ষর আলাদা করে না। Linux হলে Error হতো।' },
    { q: '{{khata}} ফোল্ডারে ২টা ফাইল আছে। {{Remove-Item khata}} চালালে?', opts: ['ফোল্ডারসহ সব মুছে যাবে, কিছু জিজ্ঞেস না করে', 'থেমে জিজ্ঞেস করবে, কারণ ভেতরে জিনিস আছে আর -Recurse দেওয়া হয়নি', 'শুধু ফাইলগুলো মুছবে', 'ফোল্ডারটা Recycle Bin এ যাবে'], a: 1, why: 'ভেতরে জিনিস থাকলে PowerShell নিশ্চিত হতে চায়। জেনেবুঝে মুছতে {{Remove-Item khata -Recurse}}।' },
  ],
  probs: [
    { l: 'e', q: 'PowerShell এ তুমি এখন কোন ফোল্ডারে আছো দেখো, তারপর সেখানে কী কী আছে দেখো।', sol: 'Get-Location\nGet-ChildItem' },
    { l: 'e', q: 'PowerShell এ home এ {{khata}} নামে ফোল্ডার বানাও, তার ভেতরে যাও, তারপর নিশ্চিত হও যে সত্যিই ভেতরে আছো।', sol: 'cd ~\nmkdir khata\ncd khata\nGet-Location   # C:\\Users\\rafi\\khata' },
    { l: 'e', q: 'PowerShell এ {{notes.txt}} ফাইলে লেখো "আজ PowerShell শিখলাম", তারপর ফাইলের ভেতরে কী আছে দেখো।', sol: "Set-Content notes.txt 'আজ PowerShell শিখলাম'\nGet-Content notes.txt" },
    { l: 'e', q: 'PowerShell এ {{cd ..}} দুইবার না লিখে এক command এ দুই ধাপ উপরে যাও।', sol: 'cd ..\\..\nGet-Location' },
    { l: 'e', q: 'ভুল খোঁজো: Linux এর ভিডিও দেখে PowerShell এ লিখলাম {{touch notes.txt}}, এলো {{The term \'touch\' is not recognized}}। কেন? ঠিক command কী?', ans: '{{touch}} Linux এর command, PowerShell এ এই নামে কিছু নেই। "is not recognized" মানেই "এই নামে কোনো command চিনি না"।\nPowerShell এ খালি ফাইল বানাতে: {{New-Item notes.txt}} (ছোট নাম {{ni notes.txt}})।' },
    { l: 'e', q: 'বন্ধু PowerShell এ {{ls}} লিখলো, কাজ করলো। আরেক বন্ধু {{dir}} লিখলো, সেটাও কাজ করলো। কেন দুইটাই চলে? PowerShell কে দিয়েই প্রমাণ করো।', sol: 'Get-Alias ls\nGet-Alias dir', note: 'দুইটাই {{Get-ChildItem}} এর ছোট নাম (alias)। Output এ দেখাবে {{ls -> Get-ChildItem}} আর {{dir -> Get-ChildItem}}।' },
    { l: 'm', q: 'PowerShell এ {{notes.txt}} এ আগের লেখা না মুছে আরেকটা লাইন যোগ করো: "কাল Dart চালাবো"। তারপর পুরো ফাইল দেখো।', hint: '{{Set-Content}} মুছে লেখে। যোগ করার আলাদা command আছে।', sol: "Add-Content notes.txt 'কাল Dart চালাবো'\nGet-Content notes.txt" },
    { l: 'm', q: 'PowerShell এ এই গঠন বানাও: {{school\\class7\\math}} আর {{school\\class7\\science}}। তারপর {{school\\class7}} এ কী আছে দেখো।', sol: 'mkdir school\\class7\\math\nmkdir school\\class7\\science\nGet-ChildItem school\\class7', note: 'PowerShell এর {{mkdir}} মাঝের school আর class7 নিজেই বানিয়ে নেয়, Linux এর মতো {{-p}} লাগে না।' },
    { l: 'm', q: 'PowerShell এ {{notes.txt}} এর কপি বানাও {{backup.txt}} নামে। তারপর {{notes.txt}} এর নাম বদলে {{diary.txt}} করো। শেষে {{Get-ChildItem}} এ কী দেখবে?', sol: 'Copy-Item notes.txt backup.txt\nRename-Item notes.txt diary.txt\nGet-ChildItem   # backup.txt আর diary.txt' },
    { l: 'm', q: 'PowerShell এ তুমি এখন কোথায় আছো জানো না। এক command এ home এর {{Pictures}} ফোল্ডারে যাও।', hint: '{{~}} কাজে লাগবে।', sol: 'cd ~\\Pictures' },
    { l: 'm', q: 'Windows এ {{~\\dart_practice}} এ {{hello.dart}} বানাও যেটা তোমার নাম প্রিন্ট করে, তারপর PowerShell থেকে চালাও।', sol: "mkdir ~\\dart_practice\ncd ~\\dart_practice\ncode hello.dart        # কোড লিখে save করো\ndart run hello.dart", note: "hello.dart এর ভেতরে: {{void main() { print('আমি রাফি'); } }}। চালানোর আগে save করতে ভুলো না।" },
    { l: 'h', q: 'PowerShell এ {{old_project}} ফোল্ডারে অনেক ফাইল আছে। {{Remove-Item old_project}} চালালে থেমে কিছু জিজ্ঞেস করছে। কেন? পুরো ফোল্ডারটা নিরাপদে মোছো।', sol: 'Get-Location                    # ঠিক জায়গায় আছি তো?\nGet-ChildItem old_project       # কী মুছছি দেখে নিই\nRemove-Item old_project -Recurse\nGet-ChildItem                   # সত্যিই চলে গেছে?', note: 'ভেতরে জিনিস থাকলে PowerShell নিশ্চিত হতে চায়। {{-Recurse}} মানে "ভেতরের সবকিছুসহ"। Recycle Bin এ যায় না, তাই আগে দেখে নেওয়া।' },
    { l: 'h', q: 'PowerShell এ লিখলাম {{cd C:\\Program Files}}, এলো {{A positional parameter cannot be found that accepts argument \'Files\'}}। কেন? ঠিক করো।', sol: "cd 'C:\\Program Files'", note: 'স্পেস দিয়ে শব্দ ভাগ হয়, তাই PowerShell ভাবলো তুমি দুইটা জিনিস দিয়েছ: {{C:\\Program}} আর {{Files}}। নামে স্পেস থাকলে quote এর ভেতরে দাও। এজন্য নিজের ফাইল-ফোল্ডারের নামে স্পেস না দিয়ে {{my_notes}} লেখা ভালো।' },
    { l: 'h', q: 'কম্পিউটার ছাড়া, খাতায় dry run করো: নিচের command গুলো চালালে শেষে তুমি কোথায় থাকবে, আর শেষ {{Get-ChildItem}} কী দেখাবে? শুরু {{C:\\Users\\rafi}} থেকে।', code: 'mkdir a\ncd a\nmkdir b\nmkdir c\ncd b\nNew-Item x.txt\ncd ..\\c\nNew-Item y.txt\ncd ..\nGet-ChildItem', ans: 'শেষে আছো {{C:\\Users\\rafi\\a}}, আর {{Get-ChildItem}} দেখাবে দুইটা ফোল্ডার: {{b}} আর {{c}}।\n{{cd ..\\c}} মানে b থেকে এক ধাপ উপরে (a), তারপর c তে। শেষের {{cd ..}} c থেকে a তে আনে। x.txt আছে b এর ভেতরে, y.txt c এর ভেতরে।' },
  ],
};

TRACES.args = {
  title: 'Argument কিভাবে main এ পৌঁছায়',
  code: ['// terminal: dart run greet.dart Rafi 14', 'void main(List<String> args) {', '  String name = args[0];', '  int age = int.parse(args[1]);', "  print('$name, আগামী বছর ${age + 1}');", '}'],
  steps: [
    { l: 0, n: 'terminal এ লিখলাম। shell লাইনটা স্পেসে ভাগ করলো: program হলো greet.dart, তারপরের দুইটা শব্দ argument।' },
    { l: 1, v: { args: "['Rafi', '14']" }, n: 'Dart argument গুলো দিয়ে একটা {{List<String>}} বানিয়ে main এ দিল। খেয়াল করো, 14 ও String, সংখ্যা না।' },
    { l: 2, v: { name: "'Rafi'" }, n: '{{args[0]}} = প্রথম argument।' },
    { l: 3, v: { age: 14 }, n: "{{int.parse}} দিয়ে '14' কে সংখ্যা 14 বানালাম। এখন হিসাব করা যাবে।" },
    { l: 4, p: 'Rafi, আগামী বছর 15', n: 'args[1] সরাসরি +1 করলে Error হতো, কারণ String এ int যোগ হয় না।' },
  ],
};

TOPICS['dart-compile'] = {
  short: 'Compile ও Argument', title: 'Dart কিভাবে চলে: Compile, Machine Code আর Argument', days: 'List শেখার পরে, Mini Project এর আগে',
  goal: 'বোঝা যে তোমার লেখা কোড কিভাবে কম্পিউটারের ভাষায় (machine code) বদলায়, নিজের প্রোগ্রামকে আলাদা app (exe ফাইল) বানানো, আর terminal থেকে প্রোগ্রামে argument পাঠানো।',
  learn: [
    "কম্পিউটারের মগজ, মানে **CPU**, শুধু একটা ভাষা বোঝে: **machine code**। এগুলো 0 আর 1 দিয়ে লেখা খুব ছোট ছোট নির্দেশ: \"এই সংখ্যাটা ওই ঘরে রাখো\", \"এই দুইটা যোগ করো\", \"ওই লাইনে লাফ দাও\"। {{print('Hello')}} CPU সরাসরি বোঝে না। তাই মাঝখানে একজন অনুবাদক লাগে, তার নাম **compiler**।",
    { h: 'অনুবাদের দুই উপায়: JIT আর AOT' },
    'ধরো বিদেশি এক বন্ধুকে কিছু বলবে। **JIT** মানে পাশে একজন দোভাষী বসে আছে। তুমি একটা করে বাক্য বলছো, সে সাথে সাথে অনুবাদ করছে। **AOT** মানে পুরো চিঠিটা আগেই অনুবাদ করে ছাপিয়ে রাখা। দেওয়ার সময় আর দোভাষী লাগে না, বন্ধু সাথে সাথে পড়ে ফেলে। Dart দুইটাই পারে।',
    { table: [['', 'JIT (Just-In-Time)', 'AOT (Ahead-Of-Time)'], ['কখন অনুবাদ', 'চলতে চলতে, যখন যে অংশ লাগে', 'চালানোর আগেই, পুরোটা একবারে'], ['command', '{{dart run}}', '{{dart compile exe}}'], ['শুরু হতে', 'একটু সময় লাগে', 'প্রায় সাথে সাথে'], ['কোড বদলালে', 'সাথে সাথে আবার চালানো যায়', 'আবার compile করতে হয়'], ['অন্য কম্পিউটারে চালাতে', 'সেখানেও Dart লাগবে', 'Dart ছাড়াই চলে'], ['কখন ব্যবহার', 'লিখছো আর পরীক্ষা করছো', 'তৈরি app অন্যকে দেওয়ার সময়']] },
    { tip: 'Flutter এর বিখ্যাত **hot reload** (কোড বদলালে app না থামিয়েই সাথে সাথে বদল দেখা) সম্ভব হয় JIT এর জন্য। আর Play Store এ যে app যায়, সেটা AOT দিয়ে বানানো, তাই দ্রুত চলে।' },
    { h: 'ভেতরে কী কী ধাপ হয়' },
    { code: `main.dart  (তোমার লেখা কোড)
    |
    |  ধাপ ১: পড়ো আর check করো (syntax, type, null)
    v
kernel  (মাঝামাঝি রূপ: মানুষের ভাষাও না, CPU এর ভাষাও না)
    |
    +-- dart run --------------> Dart VM: চলতে চলতে machine code (JIT)
    |
    +-- dart compile exe ------> আগেই পুরো machine code (AOT) --> main.exe`, lang: 'plaintext' },
    { list: ['**ধাপ ১, পড়া আর check**: compiler পুরো কোড পড়ে। {{;}} বাদ পড়লে, String এর জায়গায় int দিলে, বা null হতে পারে এমন জিনিস সাবধানে না ব্যবহার করলে এখানেই থেমে যায়। একটা লাইনও চলে না।', '**ধাপ ২, kernel**: কোড একটা মাঝামাঝি রূপে বদলায়। এটা Dart এর নিজস্ব, সব কম্পিউটারের জন্য একই।', '**ধাপ ৩, machine code**: kernel থেকে তোমার CPU এর ধরন অনুযায়ী (যেমন Intel/AMD এর x64, বা মোবাইলের ARM) machine code বানানো হয়। JIT এ চলতে চলতে, AOT এ আগেই।'] },
    { h: 'দুই ধরনের Error' },
    'ধাপ ১ থাকার একটা বড় লাভ: অনেক ভুল চালানোর **আগেই** ধরা পড়ে। এগুলোকে বলে **compile-time error**। কিছু ভুল আগে বোঝা সম্ভব না, চালানোর সময় ধরা পড়ে, এগুলো **runtime error** (exception)।',
    { code: `void main() {
  int a = 'ten';            // compile-time: String কে int এ রাখা যায় না
  int b = int.parse('ten'); // runtime: চলার সময় FormatException
}` },
    { tip: 'compile-time error ভালো জিনিস! ভুলটা তোমার বন্ধু বা ইউজার না, তুমি নিজেই আগে দেখো। VS Code লাল দাগ দিয়ে এগুলোই দেখায়, চালানোর আগেই।' },
    { h: 'নিজের app বানাও: dart compile exe' },
    { code: 'cd ~/dart_practice\ndart compile exe hello.dart\nls\n./hello.exe', lang: 'bash', out: 'Generated: /home/rafi/dart_practice/hello.exe\nhello.dart  hello.exe\nHello, Dart!' },
    { tip: "**Windows (PowerShell) এ**: চালাতে {{.\\hello.exe}} (ব্যাকস্ল্যাশ)। বাকি সব একই। [PowerShell টপিক](#powershell) এ terminal এর বাকি জিনিস আছে।" },
    { list: ['{{hello.exe}} এখন একটা আসল প্রোগ্রাম। ভেতরে machine code আর Dart এর ছোট একটা runtime (memory গোছানোর কাজ করে) একসাথে প্যাক করা।', '{{./hello.exe}}: {{./}} মানে "এই ফোল্ডারের"। নিরাপত্তার জন্য Linux নিজে থেকে এখনকার ফোল্ডারে প্রোগ্রাম খোঁজে না, তাই বলে দিতে হয়।', 'নিজের পছন্দের নাম দিতে {{-o}}: {{dart compile exe hello.dart -o hello}}, তারপর {{./hello}}।', 'নাম {{.exe}} হলেও Linux এ এটা Linux এর প্রোগ্রাম। নামটা শুধু Dart এর অভ্যাস।'] },
    { warn: 'যে ধরনের কম্পিউটারে compile করবে, exe শুধু সেই ধরনেই চলবে। Linux এ বানানো ফাইল Windows বা Mac এ চলবে না, কারণ প্রতিটার machine code আর নিয়ম আলাদা। Windows এর জন্য exe লাগলে Windows এ compile করো।' },
    { table: [['command', 'কী বানায়'], ['{{dart compile exe}}', 'নিজে নিজে চলা app (native machine code)'], ['{{dart compile aot-snapshot}}', 'শুধু machine code, চালাতে {{dartaotruntime}} লাগে, ফাইল ছোট'], ['{{dart compile js}}', 'JavaScript, ব্রাউজারে চলার জন্য'], ['{{dart compile wasm}}', 'WebAssembly, ব্রাউজারে আরো দ্রুত চলার জন্য']] },
    'তফাত নিজে দেখো। {{time}} লিখে তারপর command দিলে কত সময় লাগলো বলে দেয়:',
    { code: 'time dart run hello.dart\ntime ./hello.exe', lang: 'bash' },
    'দুইটার {{real}} সময় তুলনা করো। exe অনেক তাড়াতাড়ি শুরু হয়, কারণ অনুবাদ আগেই হয়ে আছে।',
    { code: 'Measure-Command { dart run hello.dart }\nMeasure-Command { .\\hello.exe }', lang: 'powershell', out: '(Windows PowerShell এ একই কাজ: TotalMilliseconds দেখো)' },
    { h: 'Argument পাঠানো: main(List<String> args)' },
    'এতদিন {{main()}} এর ব্র্যাকেট খালি ছিল। কিন্তু main একটা List নিতে পারে। terminal এ প্রোগ্রামের নামের পরে যা লিখবে, স্পেস দিয়ে ভাগ হয়ে সেগুলো এই List এ চলে আসে। input নেওয়ার এটা আরেক উপায়: প্রোগ্রাম চলার পরে জিজ্ঞেস না করে, চালানোর সময়ই বলে দেওয়া।',
    { code: `void main(List<String> args) {
  print('কয়টা argument: \${args.length}');
  for (int i = 0; i < args.length; i++) {
    print('args[$i] = \${args[i]}');
  }
}` },
    { code: 'dart run greet.dart Rafi 14 "Dhaka City"', lang: 'bash', out: 'কয়টা argument: 3\nargs[0] = Rafi\nargs[1] = 14\nargs[2] = Dhaka City' },
    { array: ['Rafi', '14', 'Dhaka City'], cap: 'args List: সবগুলো String, এমনকি 14 ও' },
    { list: ['সব argument **String**। সংখ্যা লাগলে {{int.parse(args[1])}} বা নিরাপদে {{int.tryParse(args[1])}}।', 'স্পেসসহ লেখা এক argument এ রাখতে quote: {{"Dhaka City"}}।', 'কিছু না দিলে args খালি List। তখন {{args[0]}} লিখলে crash (RangeError)। তাই আগে {{args.isEmpty}} বা {{args.length}} চেক।', 'compile করা app এও একই: {{./greet.exe Rafi 14}}।'] },
    { code: `void main(List<String> args) {
  if (args.length != 2) {
    print('ব্যবহার: dart run add.dart <সংখ্যা> <সংখ্যা>');
    return;
  }
  int? a = int.tryParse(args[0]);
  int? b = int.tryParse(args[1]);
  if (a == null || b == null) {
    print('দুইটাই সংখ্যা হতে হবে');
    return;
  }
  print('$a + $b = \${a + b}');
}`, out: '(dart run add.dart 7 5 দিলে)\n7 + 5 = 12' },
    { tip: 'বড় প্রোগ্রামে {{--name=Rafi}}, {{-v}} এর মতো অনেক option লাগলে Dart টিমের {{args}} package ব্যবহার করে: [pub.dev/packages/args](https://pub.dev/packages/args)।' },
    { h: 'Exit code: প্রোগ্রাম ঠিকঠাক শেষ হলো কিনা' },
    "প্রতিটা প্রোগ্রাম শেষে একটা সংখ্যা ফেরত দেয়: **0** মানে সব ঠিক, অন্য কিছু মানে সমস্যা। Dart এ {{import 'dart:io';}} করে {{exit(1)}} দিয়ে সাথে সাথে থেমে সমস্যা জানানো যায়। terminal এ {{echo $?}} লিখলে শেষ প্রোগ্রামের exit code দেখায়। Windows PowerShell এ লেখো {{$LASTEXITCODE}}।",
  ],
  how: [
    '{{dart run file.dart}} লিখলে Dart আগে পুরো ফাইল পড়ে আর check করে। ভুল থাকলে এখানেই থামে, একটা লাইনও চলে না।',
    'ঠিক থাকলে kernel এ বদলায়, তারপর **Dart VM** চালানো শুরু করে। কোনো function প্রথমবার ডাকা হলে VM তখন সেটার machine code বানায় (JIT)। কোনো function বারবার ডাকা হলে VM সেটাকে আরো দ্রুত machine code এ আবার বানায়।',
    '{{dart compile exe}} এ এই অনুবাদ চালানোর আগেই পুরোটা হয়ে যায়। machine code আর ছোট একটা runtime এক ফাইলে প্যাক হয়, তাই অন্য কম্পিউটারে Dart install ছাড়াই চলে (একই ধরনের OS আর CPU হলে)।',
    'terminal এ {{./greet.exe Rafi 14}} লিখলে shell লাইনটা স্পেসে ভাগ করে: প্রথম শব্দ প্রোগ্রাম, বাকিগুলো argument। Dart সেগুলো দিয়ে {{List<String>}} বানিয়ে main এ পাঠায়।',
  ],
  traces: ['args'],
  quiz: [
    { q: '{{dart run calc.dart 5 10}} চালালে Output কী?', code: 'void main(List<String> args) {\n  print(args[0] + args[1]);\n}', opts: ['15', '510', 'Error', '5 10'], a: 1, why: 'দুইটাই String, তাই {{+}} জোড়া লাগায়। যোগ করতে আগে {{int.parse}}।' },
    { q: 'কোনটা চালানোর আগেই (compile-time) ধরা পড়বে?', opts: ["int x = 'hello';", "int.parse('abc')", '[1, 2][5]', '10 ~/ 0'], a: 0, why: 'String কে int এ রাখা যায় না, এটা type দেখেই বোঝা যায়। বাকিগুলো কোড হিসেবে ঠিক, কিন্তু চলার সময় crash করে।' },
    { q: 'Linux এ {{dart compile exe app.dart}} দিয়ে বানানো {{app.exe}} কোথায় চলবে?', opts: ['যেকোনো কম্পিউটারে', 'শুধু যেখানে Dart install করা আছে', 'একই ধরনের Linux কম্পিউটারে, Dart ছাড়াই', 'শুধু ব্রাউজারে'], a: 2, why: 'ভেতরে machine code আর runtime আছে, তাই Dart লাগে না। কিন্তু machine code নির্দিষ্ট OS আর CPU এর জন্য।' },
    { q: 'কোড লিখছো আর একটু পর পর বদলে চালিয়ে দেখছো। কোনটা সুবিধা?', opts: ['dart run (JIT)', 'dart compile exe (AOT)', 'dart compile js', 'কোনোটাই না'], a: 0, why: 'প্রতিবার compile করার ঝামেলা নেই, বদলাও আর চালাও। তৈরি হয়ে গেলে অন্যকে দেওয়ার সময় compile exe।' },
    { q: '{{dart run greet.dart}} চালালে (কোনো argument ছাড়া) কী হবে?', code: "void main(List<String> args) {\n  print('হ্যালো \${args[0]}');\n}", opts: ['হ্যালো ', 'হ্যালো null', 'RangeError দিয়ে crash', 'compile-time error'], a: 2, why: 'args খালি List, তাই {{args[0]}} বলে কিছু নেই। আগে {{args.isEmpty}} চেক করা উচিত।' },
  ],
  probs: [
    { l: 'e', q: '{{hello.dart}} কে compile করে {{hello}} নামের app বানাও আর চালাও।', lang: 'bash', sol: 'dart compile exe hello.dart -o hello\n./hello' },
    { l: 'e', q: 'প্রোগ্রাম বানাও যা প্রথম argument কে "হ্যালো, X!" বলে। কোনো argument না দিলে বলে "নাম দাও"।', sol: `void main(List<String> args) {
  if (args.isEmpty) {
    print('নাম দাও');
    return;
  }
  print('হ্যালো, \${args[0]}!');
}` },
    { l: 'e', q: 'কয়টা argument এসেছে প্রিন্ট করো, তারপর প্রতিটা argument আলাদা লাইনে।', sol: `void main(List<String> args) {
  print('মোট: \${args.length}');
  for (String a in args) {
    print(a);
  }
}` },
    { l: 'm', q: 'সব argument যোগ করো। যেটা সংখ্যা না, সেটা বাদ দাও আর বলে দাও। {{dart run sum.dart 5 10 abc 3}} → "abc সংখ্যা না, বাদ দিলাম" আর "যোগফল: 18"।', sol: `void main(List<String> args) {
  int sum = 0;
  for (String a in args) {
    int? n = int.tryParse(a);
    if (n == null) {
      print('$a সংখ্যা না, বাদ দিলাম');
    } else {
      sum += n;
    }
  }
  print('যোগফল: $sum');
}` },
    { l: 'm', q: 'argument এ একটা সংখ্যা n নিয়ে তার নামতা (n x 1 থেকে n x 10) প্রিন্ট করো। argument না দিলে বা সংখ্যা না হলে ব্যবহারের নিয়ম দেখাও।', sol: `void main(List<String> args) {
  int? n = args.isEmpty ? null : int.tryParse(args[0]);
  if (n == null) {
    print('ব্যবহার: dart run table.dart <সংখ্যা>');
    return;
  }
  for (int i = 1; i <= 10; i++) {
    print('$n x $i = \${n * i}');
  }
}` },
    { l: 'm', q: 'নিচের প্রতিটা ভুল কখন ধরা পড়বে: compile করার সময়, নাকি চলার সময়?', code: `int a = 'ten';                     // ১
int b = int.parse('ten');          // ২
String s = null;                   // ৩
var list = [1, 2]; print(list[3]); // ৪
int c = 10; c.length;              // ৫`, ans: '১: **compile-time**। String কে int এ রাখা যায় না।\n২: **runtime**। কোড হিসেবে ঠিক, কিন্তু চলার সময় FormatException।\n৩: **compile-time**। null safety: {{String}} এ null রাখা যায় না, {{String?}} লাগবে।\n৪: **runtime**। List এ কয়টা জিনিস থাকবে compiler আগে ধরে না, চলার সময় RangeError।\n৫: **compile-time**। int এর {{length}} বলে কিছু নেই।' },
    { l: 'm', q: '1 থেকে 50,000,000 পর্যন্ত যোগ করার প্রোগ্রাম বানাও। তারপর {{dart run}} আর compile করা exe, দুইভাবে চালিয়ে {{time}} দিয়ে সময় তুলনা করো।', sol: `void main() {
  int sum = 0;
  for (int i = 1; i <= 50000000; i++) {
    sum += i;
  }
  print(sum);
}`, note: 'চালাও: {{time dart run big_sum.dart}}, তারপর {{dart compile exe big_sum.dart}} আর {{time ./big_sum.exe}}। দুইটার {{real}} সময় খাতায় লিখে তুলনা করো। কোনটা দ্রুত হলো, কেন, নিজের ভাষায় লেখো।' },
    { l: 'h', q: 'ছোট calculator: {{dart run calc.dart 12 x 5}} → {{60}}। চিহ্ন হতে পারে {{+}}, {{-}}, {{x}}, {{/}}। ভুল ইনপুটে বুঝিয়ে বলো। গুণের জন্য {{*}} না নিয়ে {{x}} কেন নিলাম, খুঁজে বের করো।', hint: 'args.length 3 কিনা দেখো। তারপর মাঝেরটা দিয়ে switch।', sol: `void main(List<String> args) {
  if (args.length != 3) {
    print('ব্যবহার: dart run calc.dart <সংখ্যা> <+ - x /> <সংখ্যা>');
    return;
  }
  double? a = double.tryParse(args[0]);
  double? b = double.tryParse(args[2]);
  if (a == null || b == null) {
    print('দুই পাশে সংখ্যা দাও');
    return;
  }
  switch (args[1]) {
    case '+':
      print(a + b);
    case '-':
      print(a - b);
    case 'x':
      print(a * b);
    case '/':
      print(b == 0 ? 'শূন্য দিয়ে ভাগ হয় না' : a / b);
    default:
      print('চিহ্ন বুঝিনি: \${args[1]}');
  }
}`, note: "{{*}} shell এর কাছে বিশেষ চিহ্ন: মানে \"এই ফোল্ডারের সব ফাইলের নাম\"। তাই {{12 * 5}} লিখলে Dart এর কাছে * এর জায়গায় ফাইলের নামগুলো পৌঁছায়! {{'*'}} এভাবে quote দিলে ঠিক থাকে, কিন্তু x সহজ, আর Linux, Mac, Windows সব জায়গায় একইভাবে চলে।" },
    { l: 'h', q: 'argument এ একটা সংখ্যা নাও। মৌলিক হলে "মৌলিক" প্রিন্ট করে exit code 0, না হলে "মৌলিক না" প্রিন্ট করে exit code 1। terminal এ {{echo $?}} দিয়ে যাচাই করো।', sol: `import 'dart:io';

void main(List<String> args) {
  int n = int.tryParse(args.isEmpty ? '' : args[0]) ?? 0;
  bool prime = n >= 2;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  print(prime ? 'মৌলিক' : 'মৌলিক না');
  exit(prime ? 0 : 1);
}`, note: 'চালাও: {{dart run prime.dart 17}} তারপর {{echo $?}} (দেখাবে 0)। {{dart run prime.dart 15}} তারপর {{echo $?}} (দেখাবে 1)। Windows PowerShell এ {{echo $?}} এর জায়গায় {{$LASTEXITCODE}}। অন্য প্রোগ্রাম বা script এই সংখ্যা দেখে বুঝে নিতে পারে কাজ সফল হলো কিনা।' },
    { l: 'h', q: 'argument হিসেবে একটা বাক্য নাও ({{dart run words.dart আমি ভাত খাই আমি পানি খাই}})। কোন শব্দ কতবার এসেছে প্রিন্ট করো।', sol: `void main(List<String> args) {
  Map<String, int> count = {};
  for (String w in args) {
    count[w] = (count[w] ?? 0) + 1;
  }
  count.forEach((w, n) => print('$w: $n'));
}`, note: 'shell আগেই স্পেস দিয়ে ভাগ করে দিয়েছে, তাই {{split}} লাগলো না। বাক্যটা quote এর ভেতরে দিলে পুরোটা একটাই argument হবে, তখন {{args[0].split(\' \')}} লাগবে।' },
  ],
};

CARDS.push(
  { w: 'x', f: 'এখন কোন ফোল্ডারে আছি', b: 'pwd' },
  { w: 'x', f: 'লুকানো ফাইলসহ সব দেখাও', b: 'ls -a' },
  { w: 'x', f: 'এক ধাপ উপরে যাও / home এ যাও', b: 'cd ..\ncd ~' },
  { w: 'x', f: 'মাঝের ফোল্ডারসহ ফোল্ডার বানাও', b: 'mkdir -p a/b/c' },
  { w: 'x', f: 'ফাইলে লেখো (মুছে) / শেষে যোগ করো', b: "echo 'লেখা' > file.txt\necho 'লেখা' >> file.txt" },
  { w: 'x', f: 'ফাইলের ভেতরের লেখা দেখাও', b: 'cat file.txt' },
  { w: 'x', f: 'কপি / সরাও বা নাম বদলাও', b: 'cp a.txt b.txt\nmv a.txt b.txt' },
  { w: 'x', f: 'ভেতরের সবকিছুসহ ফোল্ডার মোছো', b: 'rm -r folder' },
  { w: 'x', f: 'চলতে থাকা প্রোগ্রাম থামাও', b: 'Ctrl + C' },
  { w: 'x', f: 'terminal থেকে Dart ফাইল চালাও', b: 'dart run main.dart' },
  { w: 'x', f: 'PowerShell: এখন কোথায় / কী আছে', b: 'Get-Location   (pwd)\nGet-ChildItem  (ls, dir)' },
  { w: 'x', f: 'PowerShell: খালি ফাইল বানাও', b: 'New-Item notes.txt' },
  { w: 'x', f: 'PowerShell: ফাইলে লেখো / শেষে যোগ করো', b: "Set-Content notes.txt 'লেখা'\nAdd-Content notes.txt 'লেখা'" },
  { w: 'x', f: 'PowerShell: নাম বদলাও', b: 'Rename-Item old.txt new.txt' },
  { w: 'x', f: 'PowerShell: ভেতরের সবসহ ফোল্ডার মোছো', b: 'Remove-Item folder -Recurse' },
  { w: 'x', f: 'PowerShell: কোন ছোট নাম কোন command', b: 'Get-Alias ls' },
  { w: 'x', f: 'Dart ফাইল থেকে app বানাও (নিজের নাম দিয়ে)', b: 'dart compile exe main.dart -o app\n./app' },
  { w: 'x', f: 'argument নেয় এমন main', b: 'void main(List<String> args) { }' },
  { w: 'x', f: 'argument না দিলে থামো', b: "if (args.isEmpty) {\n  print('ব্যবহার: ...');\n  return;\n}" },
  { w: 'x', f: 'প্রথম argument কে সংখ্যা বানাও (নিরাপদে)', b: 'int? n = int.tryParse(args[0]);' },
  { w: 'x', f: 'সমস্যা জানিয়ে প্রোগ্রাম থামাও', b: "import 'dart:io';\nexit(1);" },
);
