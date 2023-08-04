// Подключить модуль работы с файловой системой.
const fs = require('fs');

// Подключить функцию readAndSolve из соответствующего файла.
// const readAndSolve = require('./readAndSolve');

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.

const fileData = fs.readFileSync('./puzzles.txt', 'utf-8').slice(0, 81);

const sudokuArray = [];

for (let i = 0; i < fileData.length; i += 9) {
  sudokuArray.push(fileData.slice(i, i + 9).split(''));
}

console.table(sudokuArray);
