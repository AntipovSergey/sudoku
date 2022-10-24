/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function horizontal(boardArr, i, k) {
  return !boardArr[i].includes(k);
}
function vertical(boardArr, j, k) {
  return !boardArr.map(el => el[j]).includes(k);
}

function solve(boardString) {
  let boardArr = [];
  for (let i = 0; i < 81; i += 9) {
    boardArr.push(boardString.slice(i, i + 9).split(''));
  }
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (boardArr[i][j] === '-') {
        for (let k = 1; k < 10; k += 1) {
          if (horizontal(boardArr, i, k) && vertical(boardArr, j, k)) {
            boardArr[i][j] = k;
            break;
          }
        }
      } 
    }
  }
  console.log(boardArr)
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
