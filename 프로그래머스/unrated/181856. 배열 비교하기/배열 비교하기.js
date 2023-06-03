const solution = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    if (
      arr1.reduce((acc, sum) => (acc += sum), 0) ===
      arr2.reduce((acc, sum) => (acc += sum), 0)
    ) {
      return 0;
    } else if (
      arr1.reduce((acc, sum) => (acc += sum), 0) >
      arr2.reduce((acc, sum) => (acc += sum), 0)
    ) {
      return 1;
    } else -1;
  }
  return arr1.length > arr2.length ? 1 : -1;
};