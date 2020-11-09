// console.log('hello!')

// const {maria} = require ('./maria')
// const {greetings} = require ('./sofia')

// console.log(maria())
// console.log(greetings())

let array = [
  [1, "", 5, 8, "", 2, "", "", ""],
  ["", 9, "", "", 7, 6, 4, "", 5],
  [2, "", "", 4, "", "", 8, 1, 9],
  ["", 1, 9, "", "", 7, 3, "", 6],
  [7, 6, 2, "", 8, 3, "", 9, ""],
  ["", "", "", "", 6, 1, "", 5, ""],
  ["", "", 7, 6, "", "", "", 3, ""],
  [4, 3, "", "", 2, "", 5, "", 1],
  [6, "", "", 3, "", 8, 9, "", ""],
];

function solveRow(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (((typeof(arr[i][j]) == "string"))) {
        arr[i][j] = "123456789";
        for (let k = 0; k < 9; k++) {
          if (arr[i][j].includes(arr[i][k]) && j !== k && !isNaN(arr[i][k])) {
            let index = arr[i][j].indexOf(arr[i][k]);
            arr[i][j] =
              arr[i][j].slice(0, index) +
              arr[i][j].slice(index + 1, arr[i][j].length);
          }
        }
      }
      if (arr[i][j].length == 1) {
        arr[i][j] = +arr[i][j];
      }
    }
  }
  return arr;
}

// console.log(solveRow(array));


function solveColumn(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (((typeof(arr[i][j]) == "string"))) {
        for (let k = 0; k < 9; k++) {
          if (arr[i][j].includes(arr[k][j]) && i !== k && !isNaN(arr[k][j])) {
            let index = arr[i][j].indexOf(arr[k][j]);
            arr[i][j] =
              arr[i][j].slice(0, index) +
              arr[i][j].slice(index + 1, arr[i][j].length);
          }
        }
      }
    }
  }
  return arr;
}

let arr1 = solveRow(array)

console.log(solveColumn(arr1));
