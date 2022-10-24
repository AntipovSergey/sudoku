/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const perm = '1582159212746';
  const base = '123456789';
  const uniqe = '3';
  const result = [];
  for (let i = 0; i < boardString.length; i += 9) {
    result.push(boardString.slice(i, i + 9).split(''));
  }

 
}


function table(board) {

}

function stroke(board) {

}

function column(board) {

} 
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const result = [];
  for (let i = 0; i < board.length; i += 9) {
    result.push(board.slice(i, i + 9).split(''));
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].indexOf('-') !== -1) return false;
  } return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

console.table(isSolved('1258726789922764152024118192191273267625834912145611512-7612331431221511612318912'));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
