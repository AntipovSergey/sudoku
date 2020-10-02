const getRow = (array, n) => {
  const resArr = [];
  for (let i = 9 * n; i < (9 + 9 * n); i += 1) {
    resArr.push(array[i]);
  }
  return resArr;
};

const getColumn = (array, n) => {
  const resArr = [];
  for (let i = 0 + n; i < 72 + n; i += 9) {
    resArr.push(array[i]);
  }
  return resArr;
};

const getSquare = (array, n) => {
  const colStart = Math.floor((n % 3) * 3);
  const rowStart = Math.floor(n / 3) * 3;
  const resArr = [];
  for (let i = rowStart; i < rowStart + 3; i += 1) {
    for (let j = colStart; j < colStart + 3; j += 1) {
      resArr.push(array[i * 9 + j]);
    }
  }
  return resArr;
};
//
// Функция, проверяющая массив на валидность
//

module.exports = {
  getRow,
  getColumn,
  getSquare,
  // validateArray
}
