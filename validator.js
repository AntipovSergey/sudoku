let finalArr = require('./runner.js');



// let testArr = "1-58-2---".split('');

let testArr1 = [
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

// let testArrLength = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

  let testArrPossibleValues = [
    [[], [4], [], [], [5, 4, 3], [], [5], [], []],
    [[2], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [1], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []]
  ];

// function possibleValueValidator() {
// for (let i = 0; i < testArr1.length; i += 1) {
//   for (let j = 0; j < testArr1[i].length; j += 1) {
//     if (testArr1[i][j] === '-') {

// testArrLength[i][j] += 1;
//     }
//   }
// }
// }

// function dashValidator() {
//   for (let i = 0; i < testArr1.length; i += 1) {
//     for (let j = 0; j < testArr1[i].length; j += 1) {
//       if (testArr1[i][j] === '-') {
//         testArrPossibleValues[i][j].push();
// testArrLength[i][j] += 1;
//       }
//     }
//   }
// }

function lengthEqual1Validator() {
  for (let i = 0; i < testArrPossibleValue.length; i += 1) {
    for (let j = 0; j < testArrPossibleValue[i].length; j += 1) {
      if (testArrPossibleValue[i][j].length === 1 && testArr1[i][j] === '-') {
        testArr1[i][j] = testArrPossibleValues[i][j];
      }
    }
  }
}

console.log(lengthEqual1Validator())


module.exports = {

}
