const fs = require('fs');
const txtPzls = fs.readFileSync('sudoku-puzzles.txt', 'utf-8');
const arrPzls = txtPzls.trim().split('\n');
const maps = [];

function sudokuMapShifter(size) {
  for(let l = 0; l < arrPzls.length; l++){
    let arr = [...arrPzls[l].split('')]
  const x = new Array(size);
    for (let i = 0; i < size; i++) {
      x[i] = new Array(size);
    }  
  for (let j = 0; j < size; j++) {
    for (let k = 0; k < size; k++) {
      x[j][k] = arr.shift();
    }
  } 
  maps.push(x); 
}
return maps;
}
module.exports = sudokuMapShifter;
