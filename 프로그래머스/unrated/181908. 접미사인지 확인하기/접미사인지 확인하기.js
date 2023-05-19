const solution = (my_string, is_suffix) =>
  my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0;