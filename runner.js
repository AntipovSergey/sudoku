// Подключить модуль работы с файловой системой.
const fs = require('fs');
const { runMain } = require('module');

// Подключить функцию readAndSolve из соответствующего файла.
const readAndSolve = require('./readAndSolve');

function run() {
  fs.readFile()
  solve()
}

run()

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.
fs.readFile(
  './puzzles.txt',
  'utf-8',
  readAndSolve,
);
