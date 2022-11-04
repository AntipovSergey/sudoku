const fs = require('fs');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const read = fs.readFileSync('./puzzles.txt', 'utf-8');
const slice = read.split('\n').filter((line) => line !== '')
// console.log(slice);
// function boardString() {
//   return read.slice(0, 82)
// }
function solve(boardString) {
 
console.log('xxxxxx',slice);
  let r;
for (let x = 0; x < slice.length; x = x+9) {
    r = slice.slice(x,x+10)
  
}
console.log(r);
}

solve(slice)

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

};


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
