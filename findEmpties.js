const read = require("./read.js");
const replaceEmpty = require("./replaceEmpty");

function findEmpties() {
  const arr = read().flat();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === "-") {
        replaceEmpty(arr, j)
        console.log('------')
        return j;
      }
    }
  }
}

findEmpties();

module.exports = findEmpties;
