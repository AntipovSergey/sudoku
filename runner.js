// // Подключить модуль работы с файловой системой.
// const fs = require('fs');

// // Подключить функцию readAndSolve из соответствующего файла.
// const readAndSolve = require('./readAndSolve');

// // Все судоку для решения доступны в файле puzzles.txt.
// // Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в фукцию readAndSolve.
// fs.readFile(
//   './puzzles.txt',
//   'utf-8',
//   readAndSolve,
// );

const { log } = require('console');
const fs = require('fs');

function getBoards(sudokuNumber) {
  const readTxt = fs.readFileSync('./puzzles.txt', 'utf-8');
  const strings = readTxt.split('\n');
  strings.pop();
  const getArrays = strings.map((el) => el.split(''));
  console.log(getArrays);
  for (let i = 0; i < getArrays.length; i++) {
    const size = 9;
    const sub = [];
    for (let j = 0; j < getArrays[i].length/size; j++) {
      sub[j] = getArrays[i].slice((j * size), j * size + size);
    } return sub;
  }
  return sub[sudokuNumber];
}
console.table(getBoards(process.argv[2]));
