const { getSudoku } = require("./getSudoku");

const firstPuzzle = () => {
  const result = [];
  const newArr = getSudoku().replaceAll("-", 0).split("");

  for (let i = 0; i < newArr.length; i += 1) {
    result.push(newArr.splice(0, 9));
  }

  return [result.map((el) => el.map((item) => +item))];
};

module.exports = {
  firstPuzzle,
};
