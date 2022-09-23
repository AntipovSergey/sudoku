// Подключить модуль работы с файловой системой.
const fs = require('fs');

// Подключить функцию readAndSolve из соответствующего файла.
const readAndSolve = require('./readAndSolve');
const {
  solve,
  isSolved,
  prettyBoard,
} = require('./sudoku');

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.
// fs.readFile(
//   './puzzles.txt',
//   'utf-8',
//   readAndSolve,
// );
function startSudoku() {
  const arr = readAndSolve();
}
startSudoku();
