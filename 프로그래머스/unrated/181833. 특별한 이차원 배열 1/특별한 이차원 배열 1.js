function solution(n) {
  const arr = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr[i].push(1);
      } else {
        arr[i].push(0);
      }
    }
  }
  return arr;
}