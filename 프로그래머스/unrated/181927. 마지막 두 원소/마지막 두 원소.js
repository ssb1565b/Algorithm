const solution = (num_list) => {
  const list = num_list.reverse();
  const result = list[0] > list[1] ? list[0] - list[1] : list[0] * 2;
  num_list.reverse().push(result);
  return num_list;
};