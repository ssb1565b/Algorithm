function solution(number) {
   const numberArr = [...number].map(Number)
   const accArr = numberArr.reduce((acc, num) => acc + num, 0)
   return accArr%9;
}