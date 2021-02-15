const strToArr = (sudoku) => {
  const sudokuArr = [];
  let result = sudoku.split('');
  for (let i = 0; i < result.length; i++) {
    sudokuArr.push(result.splice(0, 9));
  }

  return sudokuArr;
};

module.exports = strToArr;
