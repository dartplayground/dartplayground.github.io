void main() {
  var nums = [1, 2, 3, 4];
  for (var n in nums) {
    if (n.isEven) nums.remove(n);
  }
}
