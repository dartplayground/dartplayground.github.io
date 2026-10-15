void setAge(int a) { if (a < 0) throw ArgumentError('বয়স negative হতে পারে না'); }
void main() => setAge(-5);
