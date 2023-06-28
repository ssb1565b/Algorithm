const solution = (names) => {
  const division = [];
  const answer = [];
  const length = Math.ceil(names.length / 5);
  for (let i = 0; i < length; i++) {
    division.push(names.splice(0, 5));
    console.log(division);
    answer.push(division[i][0] || "");
  }
  return answer;
};