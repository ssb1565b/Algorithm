function solution(n) {
  const result = [];
  result.push(n);
  while (n > 1) {
    if (n % 2) {
      n = 3 * n + 1;
      result.push(n);
    }
    n = n / 2;
    result.push(n);
  }

  return result;
}
