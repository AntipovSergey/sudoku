const fs = require("fs");

function read() {
  const puzzleAr = fs.readFileSync("./puzzles.txt", "utf-8").split("\n");
  const puzzleArSec = puzzleAr[0].split("");
  let emptyArr = [];
  for (let i = 0; i < puzzleArSec.length; i += 9) {
    emptyArr.push(puzzleArSec.slice(i, i + 9));
  }

  return emptyArr;
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  //----
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
