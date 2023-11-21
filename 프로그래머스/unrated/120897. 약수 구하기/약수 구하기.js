function solution(n) {
  return (result = Array(n)
    .fill()
    .map((_, index) => index + 1)).filter((el) => n % el === 0);
}

console.log(solution(24));
console.log(solution(29));
