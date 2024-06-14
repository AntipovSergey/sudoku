const fs = require("fs");
const matrix = require("./utils/matrix");
// const puzzles = fs.readFileSync("./puzzles.txt", "utf-8").split("\n");
// const puzzle1 = puzzles[0];

// function matrix(str, size) {
//   str = [...str];
//   const result = [];
//   let i = 0;

//   while (i < str.length) {
//     result.push(str.slice(i, i + size));
//     i += size;
//   }
//   return result;
// }
// console.table(matrix(puzzle1, 9));

function generateRandomMatrix(m, n, minValue, maxValue) {
  const matrix = [];
  for (let i = 0; i < m; i += 1) {
    const row = [];
    for (let j = 0; j < n; j += 1) {
      row.push(
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
      );
    }
    matrix.push(row);
  }
  return matrix;
}

const m = 9;
const n = 9;
const minValue = 0;
const maxValue = 9;

const randomMatrix = generateRandomMatrix(m, n, minValue, maxValue);
console.table(randomMatrix);

const checkEmpty = (board) => {
  const res = [];
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; i) {
      if (j === 0) {
        res.push([i, j]);
      }
    }
  }
  if (res.length <= 0) {
    return true;
  }
};
console.log(checkEmpty(randomMatrix));
