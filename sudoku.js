const fs = require("fs");
const text = fs.readFileSync("puzzles.txt", "utf8")

const arrSudoku = text.split("\n")
const sudoku1 = arrSudoku[0];
const board1 = [];
// const sudokuLength = sudoku1.length / 9;
for (let i = 0; i< sudoku1.length; i+=9){

 board1.push(sudoku1.slice(0,9))

}

//   board1.push(
//     sudoku1.slice(0,9)
//   )
// const board1Split = board1.split(0,9)
// for (let i = 0; i<board1Split.length; i+=9){
  console.log(board1)
// }
// for (let i= 0; i < arrSudoku.length; i++) {
//   board1.push(i)
// }
// const sudoku1 =  arrSudoku[0];


// const sudokuLength = sudoku1.length / 9;
// for (let i = 0; i< sudokuLength; i++){
//   board1.push(
//     sudoku1.slice(0,9)
//   )
// sudoku1.slice(0,9)
// }

// console.log(sudoku1)

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
