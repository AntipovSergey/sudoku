const fs = require("fs");
function read() {
  const file = fs.readFileSync("./puzzles.txt", "utf-8").replaceAll("\n", "");
  const sud = [];
  for (let i = 0; i < 15; i++) {
    for (let i = 0; i < file.length; i += 9) {
      sud.push(file.slice(i, i + 9));
    }
  }
  const board = [];
  for (let i = 0; i < 15; i += 1) {
    board.push(sud.splice(0, 9));
  }
  return board.map((sudoku) => sudoku.map((row) => row.split("")));
}
console.log(read());

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
