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
const board1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
function prettyBoard(board) {
let parts = board.split(/(.{9})/).filter(O=>O);
const result = parts.map(item=> item.split(''))
const arr =[...result[0]] + '\n' + [...result[1]] + '\n' + [...result[2]]+ '\n' + [...result[3]]+ '\n' + [...result[4]]+ '\n' + [...result[5]]+ '\n' + [...result[6]]+ '\n' + [...result[7]]+ '\n' + [...result[8]];
const newresult = arr.replace(/[\,%]/g, ' ');
return newresult;
}
  
console.log(prettyBoard(board1));
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
