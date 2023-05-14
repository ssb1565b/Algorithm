const solution = (my_string, is_prefix) => {
  let result = 0;
  for (let i = 0; i <= [...my_string].length; i += 1) {
    result += my_string.slice(0, i) == is_prefix ? 1 : 0;
  }
  return result;
};