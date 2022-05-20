// const fs = require("fs");
// const arr = fs.readFileSync("./sudoku-puzzles.txt", "utf-8").trim().split("\n");

let arr =
[
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,], 
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
  [1,2,3,4,5,6,7,8,9,],
];
//[1,0,5,8,0,2,0,0,0]

let num = 8;
function lineSearch(arr, num) {
  for (let i = 0; i < arr.length; i += 1) {
    let res = [];
    for (let j = 0; j < arr[i]; j += 1) {
      res.push(arr[i][j]);
      console.log(res);
    }
    if (res.join('').includes(num)) return true;
  }
  return false;
}
console.log(lineSearch(arr, num));
