const fs = require('fs');

let pars = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
pars = pars.split('\n');
// const array = [];

function parsing(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 9) {
    arr.push(str.slice(i, i+9))
  }
   console.log(arr);
  return arr
}

function getRightString(num) {
  return pars[num-1]
}

// console.log();
parsing(getRighString(13))
module.exports = {parsing}
