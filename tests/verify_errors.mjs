// Error অভিধানের প্রতিটা মেসেজ আসল Dart চালিয়ে মেলায়।
// চালাও: node tests/verify_errors.mjs   (PATH এ dart লাগবে)
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import vm from 'node:vm';

const ctx = { TOPICS: {}, TRACES: {}, CARDS: [] };
vm.runInNewContext(readFileSync(new URL('../dart_roadmap/content8.js', import.meta.url), 'utf8'), ctx);
const dict = ctx.TOPICS.errors.dict;

// অভিধানের নাম → tests/errors/ এর ফাইল
const FILE = {
  'FormatException': 'format', 'RangeError (list এর index)': 'range_index', 'RangeError (substring)': 'range_substring',
  'Null check operator': 'null_check', "type 'Null' is not a subtype": 'null_subtype', "type 'X' is not a subtype of type 'Y'": 'cast',
  'LateInitializationError': 'late_field', 'StateError (Bad state)': 'bad_state', 'IntegerDivisionByZeroException': 'int_div_zero',
  'NoSuchMethodError': 'no_such_method', 'Concurrent modification': 'concurrent', 'Stack Overflow': 'stack_overflow',
  'Unsupported operation': 'unsupported', 'ArgumentError': 'argument', 'AssertionError': 'assertion',
  'PathNotFoundException (FileSystemException)': 'file_system', 'TimeoutException': 'timeout', 'JsonUnsupportedObjectError': 'json_encode',
  "Expected ';'": 'c_semicolon', "Can't find '}' to match '{'": 'c_brace', 'Undefined name': 'c_undefined',
  "isn't defined for the type": 'c_getter', "can't be assigned to a variable": 'c_assign', "argument type 'String?' can't be assigned": 'c_nullable_arg',
  'potentially null': 'c_potentially_null', 'must be assigned before it can be used': 'c_unassigned', 'positional arguments': 'c_positional',
  'Required named parameter': 'c_required_named', 'must be returned': 'c_return', "Can't assign to the final variable": 'c_final',
  'Missing concrete implementation': 'c_abstract',
};

let fail = 0;
for (const e of dict) {
  const f = FILE[e.n];
  if (!f) { console.log(`MISSING TEST  ${e.n}`); fail++; continue; }
  const args = ['run', ...(f === 'assertion' ? ['--enable-asserts'] : []), `tests/errors/${f}.dart`];
  let out = '';
  try { out = execFileSync('dart', args, { encoding: 'utf8', stdio: 'pipe', timeout: 120000 }); }
  catch (err) { out = (err.stdout || '') + (err.stderr || ''); }
  // বাংলা অভিধানে ছোট করা উদাহরণের বদলে আসল মেসেজের মূল অংশ মেলাই: সংখ্যা/নাম নির্দিষ্ট ফাইলের সাথে মিলিয়ে লেখা
  const ok = out.includes(e.msg);
  console.log(`${ok ? 'ok  ' : 'FAIL'}  ${e.n}${ok ? '' : `\n      expected: ${e.msg}\n      got:      ${out.split('\n').filter(l => l && !l.startsWith('#')).slice(0, 3).join(' | ')}`}`);
  if (!ok) fail++;
}
console.log(fail ? `\n${fail} টা মেলেনি` : `\nসব ${dict.length} টা মিলেছে`);
process.exit(fail ? 1 : 0);
