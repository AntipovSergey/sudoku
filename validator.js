//let { finalArr } = require('./getSudoku.js');


let finalArr = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-']
];

let finalArrPossibleValues = [
  [[], [1], [], [], [], [], [6, 5], [3], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []]
];


function lengthEqual1Validator() {
  for (let i = 0; i < finalArr.length; i += 1) {
    for (let j = 0; j < finalArr[i].length; j += 1) {
      if (finalArrPossibleValues[i][j].length === 1 && finalArr[i][j] === '-') {
        finalArr[i][j] = String(finalArrPossibleValues[i][j][0]);
      }
    }
  }
  // for (let i = 0; i < 81; i++) {
  //   if (arrFirst[i] == '-') { lengthEqual1Validator(); };
    
  // }
  // return finalArr;
}

console.log(lengthEqual1Validator())


// module.exports = {
//   finalArrPossibleValues, lengthEqual1Validator()
// }
