function generateSudokuField(string) {
  const fieldArr = Array(9).fill([]).map(() => Array(9).fill(''));
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      fieldArr[j][i] = string[i * 9 + j];
    }
  }
  return fieldArr;
}

module.exports = generateSudokuField;
