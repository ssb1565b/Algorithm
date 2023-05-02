const solution = (arr, n) => {
  let result = [...arr];
  let start = arr.length % 2 === 1 ? 0 : 1
  for (let i = start; i < arr.length; i += 2) result[i] += n;
  return result;
}