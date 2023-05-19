const solution = (str_list, ex) =>  str_list
    .filter((el) => !el.includes(ex))
    .join(",")
    .replaceAll(",", "");
