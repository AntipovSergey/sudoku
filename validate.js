const { getRow, getColumn, getSquare } = require("./get");

const isValidArray = (arr9) => {
  const arr = arr9.sort((a, b) => a - b);
  for (let i = 0; i < 8; i += 1) {
    if (arr[i] === arr[i + 1]) {
      if (arr[i] !== null) {
        return false;
      }
    }
  }
  return true
}

const isValidTable = (arr81) => {
  for (let i = 0; i < 9; i += 1) {
    if (
      !isValidArray(getRow(arr81, i))
      || !isValidArray(getColumn(arr81, i)) 
      || !isValidArray(getSquare(arr81, i))
    ) {
      return false
    }
  }
  return true
}

const tableIsFinished = function(arr) {
  return !arr.includes(null);
}

module.exports = {
  tableIsFinished,
  isValidArray,
  isValidTable
}
