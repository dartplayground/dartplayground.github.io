int sum(int n) => n + sum(n - 1);
void main() { print(sum(5)); }
