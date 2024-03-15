const solve = require("./solve.js")

function isSolved() {
  const arr = solve(1);
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].reduce((s, n) => s + n) === 45
      && arr[i].includes(1)
      && arr[i].includes(2)
      && arr[i].includes(3)
      && arr[i].includes(4)
      && arr[i].includes(5)
      && arr[i].includes(6)
      && arr[i].includes(7)
      && arr[i].includes(8)
      && arr[i].includes(9)) {
      result += 1;
    }
  }
  if (result === 9) {
    return true;
  }
  return false;
}

module.exports = isSolved;
