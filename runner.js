const fs = require('fs');
const readAndSolve = require('./readAndSolve');

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.
fs.readFile(
  './puzzles.txt',
  'utf-8',
  readAndSolve,
);
