function solution(a, b) {
  const text = a.toString() + b.toString();
  const calc = a * b * 2;
  return text < calc ? calc : Number(text);
}