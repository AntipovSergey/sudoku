function checkColumn(arr, column, value) {
  for (let i = 0; i <= 9; i++) {
    if (arr[i][column].includes(String(value))) {
      return false;
    }
  }
  return true;
}

function returnVal(arr, column) {
  const result = [];
  for (let i = 1; i <= 9; i++) {
    if (checkColumn(arr, column, i)) {
      result.push(String(i));
    }
  }
  return result;
}

module.exports = {
  checkColumn,
  returnVal,
};
