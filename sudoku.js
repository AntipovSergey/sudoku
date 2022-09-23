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
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let resultArr = [];
  for (let i = 0; i < board.length; i = i + 9) {
    resultArr.push(board.slice(i, i + 9));
    // resultArr.push(board.slice(i + 3, i + 6));
    // resultArr.push(board.slice(i + 6, i + 9));
  }
  let newArr = resultArr.map(el => el.split('').join(' '));


  return newArr;

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};


const solveboard1 = '145892673893176425276435819519247386762583194384961752957614238438729561621358947';
console.log(prettyBoard(solveboard1));