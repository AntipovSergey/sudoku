const tableBoard = require('./board');

function findEmpty(arr) {
  const empty = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === '-') {
        return [i, k];
      }
    }
  }
  return null;
}

console.log(findEmpty(tableBoard));
