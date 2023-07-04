const solution = (my_strings, parts) => {
  const newArr = my_strings.map((el, idx) => {
    newRule = [...parts[idx], parts[idx][1] + 1];
    newRule.splice(1, 1);
    return el.substring(...newRule);
  });
  return newArr.join("");
};