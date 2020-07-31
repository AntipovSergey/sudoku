// function rowValidator(element) {
//   // let checkRows =
// }
// function collumnValidator(element) {

// }

// function squareValidator(element) {

// }

module.exports = {

};
const { finalArr } = require('./test2');
/*
let squareArr1 = [];
let squareArr2 = [];
let squareArr3 = [];
let squareArr4 = [];
let squareArr5 = [];
let squareArr6 = [];
let squareArr7 = [];
let squareArr8 = [];
let squareArr9 = [];
*/

// function createArrayOfSquares(finalArr) {
//   let squareArr = [];
//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {
//       squareArr.push(finalArr[i][j]);
//     }
//   }
//   return squareArr;
// };

//let sq = createArrayOfSquares(finalArr);
//console.log(sq);

function createArrayOfColumns(finalArr) {
  let arrColumn = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 9; j++) {
      arrColumn.push(finalArr[j][i]);
    }
  }
  return arrColumn;
}
console.log(createArrayOfColumns(finalArr));

const x = arrFirst.slice(0, 9);
const row2 = arrFirst.slice(9, 18);
const row3 = arrFirst.slice(18, 27);
const row4 = arrFirst.slice(27, 36);
const row5 = arrFirst.slice(36, 45);
const row6 = arrFirst.slice(45, 54);
const row7 = arrFirst.slice(54, 63);
const row8 = arrFirst.slice(63, 72);
const row9 = arrFirst.slice(72, 81);
