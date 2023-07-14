function checkLine(arr, line, value) {
  const newArr = [];
  for (let i = 0; i < arr[line].length; i += 1) {
    if (arr[line][i].includes(String(value))) {
      return false;
    }
  }
  return true;
}

function getLineFree(arr, line) {
  const newArr = [];
  for (let i = 1; i <= 9; i += 1) {
    if (lineCheck(arr, line, i)) {
      newArr.push(String(i));
    }
  }
  return newArr;
}

module.exports = {
  checkLine,
  getLineFree,
};
