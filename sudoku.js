/* eslint-disable no-unused-vars */
const fs = require("fs");

function read(num) {
  const arr = fs
    .readFileSync("./puzzles.txt", "utf-8")
    .split("\r\n")
    .map((el) => el.replaceAll("-", 0));
  const arrNum = arr[num].split("").map(Number);
  const emptyArr = [];
  for (let i = 0; i < arrNum.length; i += 9) {
    emptyArr.push(arrNum.slice(i, i + 9));
  }
  return emptyArr;
}
console.log(read(1));

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
