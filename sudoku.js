function solve(boardString) {
  let newArr = boardString.split("");
  let size = 9;
  let subArr = [];
  for (let i = 0; i < Math.ceil(newArr.length / size); i++) {
    subArr[i] = newArr.slice(i * size, i * size + size);
  }
  return subArr;
}

module.exports = {
  solve: solve,
};
