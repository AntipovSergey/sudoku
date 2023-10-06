const fs = require("fs");
const { possibleValues } = require("./possibleValues");
// const { getRendering } = require("./getRendering");

function read(filename) {
  let result = [];
  const puzzles = fs.readFileSync(__dirname + filename, "utf8");
  result = puzzles
    .replaceAll("-", 0)
    .split("\n")
    .map((row) => row.split("").map((el) => Number(el)));
  return result.slice(0, -1);
}

function solve(puzle) {
  const solution = possibleValues(pazle);
  getRendering(solution);
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

module.exports = { read, solve, isSolved, prettyBoard };
