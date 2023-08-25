const fs = require('fs');

function read() {
  const a = process.argv[2];
  console.log(a);

  const str = (fs.readFileSync('puzzles.txt', 'utf8')).split('\n')[a - 1];

  console.log(str);

  const newStr = [...str.replace(/-/g, 0)];
  const arrPazzle = [];
  let smallArr = [];

  for (let i = 0; i <= newStr.length; i++) {
    if (smallArr.length < 9) {
      smallArr.push(newStr[i]);
    } else {
      arrPazzle.push(smallArr);
      smallArr = [newStr[i]];
    }
  }
  console.log(arrPazzle);
  return arrPazzle;
}

read();

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
