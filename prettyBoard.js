function prettyBoard(arr) {
  const chertArr = new Array(9).fill('-');
  const count = arr.length;
  for (let i = 0; i < count; i++) {
    const index = i * 2 + 1;
    arr.splice(index, 0, chertArr);
  }
  arr.pop();
  console.log(arr.join('\n').replaceAll(',', ' | '));
}
prettyBoard(arr);

module.exports = {
  prettyBoard,
};
