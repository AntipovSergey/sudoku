const fs = require('fs');

function read(num) {
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8')
    .trim()
    .split('\n')[num].split('');
  const res = [];
  for (let i = 0; i < 9; i += 1) {
    res.push(puzzles.splice(0, 9));
  }
  return res;
}

console.table(read(0));

// function find() {
//   const func = read();
//   const res = [];
//   for (let i = 0; i < 9; i += 1) {
//     for (let j = 0; j < 9; j += 1) {
//       if (func[i][j] === '-') {
//         res.push([i, j]);
//       }
//     }
//   }
//   return res;
// }

// console.log(find()); // мы старались, но ничего не получилось

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

function solve(board) {

}

function isSolved() {

}

function prettyBoard() {
  /**
       * Принимает игровое поле в том формате, в котором его вернули из функции solve.
       * Выводит в консоль/терминал судоку.
       * Подумай, как симпатичнее его вывести.
       */
}
