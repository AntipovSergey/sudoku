const fs = require("fs");
let data = fs.readFileSync('./sudoku-puzzles.txt', "utf8");

let data2 = data.split("\n");
data2 = data2[4];

newArr = [];
newArr2 = [];
for (let i = 0; i < data2.length; i+= 9) {
  newArr = data2.slice(i, i + 8);
  newArr2.push(newArr.split(''));
}
console.log(newArr2)

const nineToNine = newArr2
console.log(nineToNine.join('\n').replace(/,/g, ' '));
console.log('-----------------')
sodokoSolver(nineToNine);
console.log(nineToNine.join('\n').replace(/,/g, ' '));

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
  }
  return true;
}


function sodokoSolver(data) {
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (data[i][j] == '-') {
      for (let k = 1; k <= 9; k++) {
        if (isValid(data, i, j, k)) {
          data[i][j] = `${k}`;
        if (sodokoSolver(data)) {
         return true;
        } else {
         data[i][j] = '-';
        }
       }
     }
     return false;
   }
 }
}
return true;
}

