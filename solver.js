// function rowValidator(element) {
//   // let checkRows =
// }
// function collumnValidator(element) {

// }

// function squareValidator(element) {

// }


const { finalArr } = require('./getSudoku');
let arrColumn = [];
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

let massiveArrColumn = [];
// eslint-disable-next-line max-len
massiveArrColumn.push(column1, column2, column3, column4, column5, column6, column7, column8, column9);
console.table(massiveArrColumn);

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       for (let k = 0; k < 9; k++) {
        
        
//       }
// }

// }




module.exports = {
  massiveArrColumn,

};
