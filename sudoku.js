const fs = require("fs");
const sudoku = fs.readFileSync("./puzzles.txt", "utf-8");
let sudokuArr = sudoku.split("\n");
// console.log(sudokuArr[0][1]) let boardString = sudoku.split("\n")
function getBoard(board) {
  return board.map((el) => el.split("")).slice(0, 15);
}
console.log(getBoard(sudokuArr));
let myBoard = getBoard(sudokuArr)
/**
 *
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // let boardString = sudoku.split("\n")
  // for(let i = 0;i<boardString.legnth;i++){
  //   for
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
