const fs = require('fs');
const sudoku = require('./sudoku');

function sudokuParse(filename, rowNumber) {
  // парсим файл в строку.
  const text = fs.readFileSync(filename, 'utf8');
  // разбиваем строки на массивы строк по разделителю \n
  const stringsArray = text.split('\n'); //
  // возвращаем строку первой судоку
  return stringsArray[rowNumber];
}
// Вызываем функцию парсинга для конкретного файла sudoku-puzzles.txt и результат помещаем в строку parsedString
const parsedString = sudokuParse('./sudoku-puzzles.txt', 14);


function createArrs(parsedString) {
  const arr = parsedString.split('');
  let result = [];

  for (let i = 0; i < arr.length; i += 9) {
    result.push(arr.slice(i, i + 9));
  }
  return result;
}
console.table(createArrs(parsedString));


// function readAndSolve(err, data) {
//   if (err) {
//     throw err;
//   }
//   let puzzle = sudokuParse(data);

//   let solvedPuzzle = sudoku.solve(puzzle);
//   if (sudoku.isSolved(solvedPuzzle)) {
//     console.log('The board was solved!');
//     console.log(sudoku.prettyBoard(solvedPuzzle));
//   } else {
//     console.log("The board wasn't solved :(");
//   }
// }
