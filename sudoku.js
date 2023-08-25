function read(number) {
  const fs = require('fs');
  const arr = (fs.readFileSync('puzzles.txt', 'utf8')).split('\n');
  const resArr = [];
  resArr.push(arr[number - 1]);
  const resArr2 = [];
  for (let i = 0; i < resArr[0].length; i += 9) {
    resArr2.push([resArr[0].slice(i, i + 9)]);
  }
  console.log(resArr2)
}
read(1)

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
