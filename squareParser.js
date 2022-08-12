function squareParser(myIndex, sudoku, masTmp) {
  const stroka = myIndex[0];
  const stolb = myIndex[1];
  let squareStroka;
  let squareStolb;

  if (stroka >= 0 && stroka < 3) squareStroka = 0;
  if (stroka > 2 && stroka < 6) squareStroka = 3;
  if (stroka > 5 && stroka < 9) squareStroka = 6;

  if (stolb >= 0 && stolb < 3) squareStolb = 0;
  if (stolb > 2 && stolb < 6) squareStolb = 3;
  if (stolb > 5 && stolb < 9) squareStolb = 6;

  for (let i = squareStroka; i < squareStroka + 3; i += 1) {
    for (let j = squareStolb; j < squareStolb + 3; j += 1) {
      if (masTmp.indexOf(sudoku[i][j]) !== -1) {
        masTmp.splice(masTmp.indexOf(sudoku[i][j]), 1);
      }
    }
  }
  return masTmp;
}

module.exports = { squareParser };
