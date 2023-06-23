/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require("fs");

const board = fs.readFileSync("./puzzles.txt", "utf8");
const regexp = /.{81}/g;
const boardArr = board.match(regexp);
// console.log(boardArr[0]);



function solve(boardString) {
  function arrayedString() {
    const array = boardString.split("");
    let step = 9;
    let res = [];
    for (let i = 0; i < array.length; i += step) {
      res.push(array.slice(i, i + step));
    }
    return res;
  }
  let matrix = arrayedString()
  return matrix
}


console.log(
  solve(
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
  )
);
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
function prettyBoard(board) {
  let result = '';
  for (let i = 0; i < board.length; i++) {
    result += `${board[i].join('')}`;
  }
  return result.trim();
}
// const sudokuArray = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];
const sudokuString = prettyBoard(solve(
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
));
const prettyReger = /(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})(.{3})/mg
let prettyRegerResult = sudokuString.replace(prettyReger, `▁▁▁▁▁▁▁▁▁▁▁▁▁\n┃$1┃$2┃$3┃\n┃$4┃$5┃$6┃\n┃$7┃$8┃$9┃\n━━━━━━━━━━━━━\n┃$10┃$11┃$12┃\n┃$13┃$14┃$15┃\n┃$16┃$17┃$18┃\n━━━━━━━━━━━━━\n┃$19┃$20┃$21┃\n┃$22┃$23┃$24┃\n┃$25┃$26┃$27┃\n▔▔▔▔▔▔▔▔▔▔▔▔▔`)
console.log(prettyRegerResult);

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
