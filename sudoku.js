
const fs = require('fs');
const data = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const array =  data.split("\n");
array.pop()

function sudoku  (el, x, arr1){
for (let i = 0; i < arr1[x].length; i++) {
  if (Number(arr1[x][i]) !==el) {
  return true
  }
}
return false
}

console.log(sudoku(8,0,array))

