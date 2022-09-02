const fs = require('fs');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
// function isSolved(board) {
//   const size = 9;
//   const blockSize = 3;

//   // поиск первой пустой клетки

//   const emptyPosition (board) => {
//     for (let x = 0; x < size; x++) {
//       for (let y = 0; y < size; y++) {
//         if (board[y][x] !== '-') {
//           return [y, x]
//         }
//         else return null
//       }
//     }
//   }

//   // проверка строк и столбцов
//   const isValid (number, x, y) => {
//     for (let i = 0; i < size; i++) {
//       board[i][x] == number && board[i][x] !== x
//       return false
//     }
//     for (let i = 0; i < size; i++) {
//       board[y][i] == number && board[y][i] !== y
//       return false
//     }
//   }
// }

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };

function conversed() {
  const arr = fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf-8').split('\n');
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-use-before-define
    arr[i] = reversed(arr[i]);
  }
  arr.map((el) => console.table(el));
  return arr;
  function reversed(str) {
    const arrN = [];
    const strArr = str.split('');
    for (let k = 0; k < strArr.length; k += 1) {
      arrN.push(strArr.splice(0, 9));
      k = 0;
    }
    return arrN;
  }
}

conversed();
