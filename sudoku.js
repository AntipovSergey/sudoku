function read() {
  const fs = require("fs");
  const text = fs.readFileSync("puzzles.txt", "utf8")
  const array = text.split("\n")
  
  const firstString = array[0].split('')
 
  const board = []
  for (let i = 0; i < 9; i++) {
    board.push(firstString.splice(0,9))
  } 
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
