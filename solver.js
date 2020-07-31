// function rowValidator(element) {
//   // let checkRows =
// }
// function collumnValidator(element) {

// }

// создание функции, создающей многомерный массив из колонок судоку
const { finalArr, arrFirst } = require('./getSudoku');

const arrColumn = [];
function createArrayOfColumns(finalArr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      arrColumn.push(finalArr[j][i]);
    }
  }
  return arrColumn;
}

createArrayOfColumns(finalArr);

const column1 = arrColumn.slice(0, 9);
const column2 = arrColumn.slice(9, 18);
const column3 = arrColumn.slice(18, 27);
const column4 = arrColumn.slice(27, 36);
const column5 = arrColumn.slice(36, 45);
const column6 = arrColumn.slice(45, 54);
const column7 = arrColumn.slice(54, 63);
const column8 = arrColumn.slice(63, 72);
const column9 = arrColumn.slice(72, 81);

const massiveArrColumn = [];
// eslint-disable-next-line max-len
// получение многомерного массива
massiveArrColumn.push(column1, column2, column3, column4, column5, column6, column7, column8, column9);
// console.table(massiveArrColumn);

// цикл который ищет совпадающие значения

const massAdder = [];
// const massAdder2 = [];

const k = 1;

function gorisontSearch(k) {
  while (k <= 9) {
    let j = 1;
    // k += 1;
    for (let i = 0; i < 9; i++) {
      if (String(k) === finalArr[0][j]) {
        k += 1;//        finalArrPossibleValues.push(k);
      }
      j += 1;
    }
    if (j === 9) {
      if (verticalSearch(k) > 0) {
        massAdder.push(k);
      }
    }
    k += 1;
  }

  return massAdder;
}

gorisontSearch(k);

function verticalSearch(k) {
  let vert = 0;
  for (let counter = 0; counter < 9; counter++) {
    if (String(k) !== massiveArrColumn[0][vert]) {
      vert += 1;//        finalArrPossibleValues.push(k);
      // massAdder2.push(massiveArrColumn[0][counter]);
    }
  }
  if (vert === 9) {
    return k;
  } return -1;
}

console.log(massAdder);

module.exports = {
  massiveArrColumn,

};
