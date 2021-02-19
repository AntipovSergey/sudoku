//  преобразование исходных данных в массив

function stringToArray(sudoku) {

  const lengthStr = Math.sqrt(sudoku.length);
  const result = [];
  let arr = [];

  for (let i = 1; i < sudoku.length + 1; i++) {
    arr.push(sudoku[i - 1]);

    if (i % lengthStr === 0) {
      result.push(arr);
      arr = [];
    }
  }
  return result;
};

module.exports = {
  stringToArray
}

