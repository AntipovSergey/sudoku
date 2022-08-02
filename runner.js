// Подключить модуль работы с файловой системой.
const fs = require("fs");

// Подключить функцию readAndSolve из соответствующего файла.

// ! ErrorSudoku.txt
// ! puzzles.txt
const readAndSolve = require("./readAndSolve");

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл  в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.

const dataFile = fs.readFileSync("./puzzles.txt", "utf-8");
// test
readAndSolve(dataFile);
