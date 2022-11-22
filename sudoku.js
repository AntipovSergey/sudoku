// /* eslint-disable no-unused-vars */
// /**
//  * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
//  * Возвращает игровое поле после попытки его решить.
//  * Договорись со своей командой, в каком формате возвращать этот результат.
//  */

function isSolved(board) {
  const dict = {};
  const numArr = board.split('');
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === '-') {
      return false;
    }
    if (!(+numArr[i] in dict)) {
      dict[Number(numArr[i])] = 1;
    } else {
      dict[Number(numArr[i])] += 1;
    }
  }
  return Object.values(dict).every((el) => el === 9);
}

// // console.log(isSolved('98765432112345678912456789123456789123456789123456789123456789123456789123456789'));
// /**
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает строку с игровым полем для последующего вывода в консоль.
//  * Подумай, как симпатичнее сформировать эту строку.
//  */
// function prettyBoard(board) {

// }

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   // solve,
//   isSolved,
//   prettyBoard,
// };
