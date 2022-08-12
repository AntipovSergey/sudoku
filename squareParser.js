function squareParser(myIndex, sudoku)
{
  let stroka = myIndex[0];
  let stolb = myIndex[1];
  let squareStroka;
  let squareStolb;
  let masTmp = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //инициализация строки
  if (stroka >= 0 && stroka < 3) squareStroka = 0;
  if (stroka > 2 && stroka < 6) squareStroka = 3;
  if (stroka > 5 && stroka < 9) squareStroka = 6;
  //инициализация столбца
  if (stolb >= 0 && stolb < 3) squareStolb = 0;
  if (stolb > 2 && stolb < 6) squareStolb = 3;
  if (stolb > 5 && stolb < 9) squareStolb = 6;
	//перебор столбца, при отсуствии только 1 элемента, ищем подходящий и меняем
	for (let i = squareStroka; i < squareStroka + 3; i++) {
    //цикл отсева с массива [1,2,3,4,5,6,7,8,9]
    for (let j = squareStolb; j < squareStolb + 3; j++) {
      if (masTmp.indexOf(sudoku[i][j]) !== -1)
        masTmp.splice(masTmp.indexOf(sudoku[i][j]), 1);
    }
    //если массив осечен до 1 индекса, делаем замену в клетке "-"
    if (masTmp.length === 1) {
      sudoku[stroka][stolb] = masTmp[0];
      console.table(sudoku);
      return sudoku;
    }
  }
  console.table(sudoku);
  return sudoku;
}

