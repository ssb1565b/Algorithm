const solution = (my_string, index_list) => {
  let arr = "";
  [...index_list].map((el) => (arr += [...my_string][el]));
  return arr;
};
