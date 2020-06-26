function solve(boardString) {
  let newArr = boardString.split("");
  let size = 9;
  let subArr = [];
  for (let i = 0; i < Math.ceil(newArr.length / size); i++) {
    subArr[i] = newArr.slice(i * size, i * size + size);
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (subArr[i][j] !== "-") {
        subArr[i][j] = Number.parseInt(subArr[i][j]);
      }
    }
  }
  return subArr;
}

module.exports = {
  solve: solve,
};
