
const fs = require("fs");
let data = fs.readFileSync('./sudoku-puzzles.txt', "utf8");

let data2 = data.split("\n");
data2 = data2[0];

newArr = [];
newArr2 = [];
for (let i = 0; i < data2.length; i+= 9) {
  newArr = data2.slice(i, i + 8);
  newArr2.push(newArr.split(''));
}
