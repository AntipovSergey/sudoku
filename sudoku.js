const fs = require('fs');

function read() {
  const str = (fs.readFileSync('puzzles.txt', 'utf8')).split('\n')[0];

  const newStr = [...str.replace(/-/g, 0)];

  const arrPazzle = [];
  const smallArr = [];
  for (let i = 0; i < newStr.length; i++) {
    if (smallArr.length < 9) {
      smallArr.push(newStr[i]);
      arrPazzle.push(smallArr);
    }
  }


  console.log(arrPazzle)
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
