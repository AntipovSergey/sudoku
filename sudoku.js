const fs = require('fs');

const newBoard = [];

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

  console.log(arrPazzle);
  return arrPazzle;
}

read();

// function solve() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции read.
//    * Возвращает игровое поле после попытки его решить.
//    */

// }
function missingNumbers(arr) {
  const findmissingNumbers = [];
  for (let num = 1; num <= 9; num++) {
    if (!arr.includes(num)) {
      findmissingNumbers.push(num);
    }
  }
  return findmissingNumbers;
}

function checkColums(arrPazzle) {
  const arr1 = [];
  for (let col = 0; col < 9; col++) {
    const rowValues = [];
    for (let row = 0; row < 9; row++) {
      rowValues.push(arrPazzle[row][col]);
    }
    const missNum = missingNumbers(rowValues);
    arr1.push({ column: col + 1, missing: missNum });
  }
  return arr1;
}

function checkRow(arrPazzle) {
  const arr1 = [];
  for (let row = 0; row < 9; row++) {
    const colValues = [];
    for (let col = 0; col < 9; col++) {
      colValues.push(arrPazzle[col][row]);
    }
    const missNum = missingNumbers(colValues);
    arr1.push({ row: row + 1, missing: missNum });
  }
  return arr1;
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

module.exports = {
  read,
  checkColums,
  checkRow,
  missingNumbers,
};
