// Подключить модуль работы с файловой системой.
const fs = require("fs");

// Подключить функцию readAndSolve из соответствующего файла.
const readAndSolve = require("./readAndSolve");

const fileData = fs.readFile("./puzzles.txt", "utf-8", readAndSolve);
// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.
