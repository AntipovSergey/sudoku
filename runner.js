// Подключить модуль работы с файловой системой.
const fs = require("fs");
const readAndSolve = require("./readAndSolve");

// Подключить функцию readAndSolve из соответствующего файла.

// ! ErrorSudoku.txt
// ! puzzles.txt

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл  в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.

const dataFile = fs.readFileSync("./puzzles.txt", "utf-8");
readAndSolve(dataFile);
