
const solution = (num_list) => {
  const even = num_list
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, cur) => (acc += cur), 0);
  const odd = num_list
    .filter((_, index) => index % 2 === 1)
    .reduce((acc, cur) => (acc += cur), 0);
  return Math.max(odd, even);
};
