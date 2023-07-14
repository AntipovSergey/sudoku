// Подключить модуль работы с файловой системой.
const fs = require('fs');


// Подключить функцию readAndSolve из соответствующего файла.
const readAndSolve = require('./readAndSolve');

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.
fs.readFile(
  './puzzles.txt',
  'utf-8',
  readAndSolve,
);

const sudoku = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
console.log(sudoku.length);