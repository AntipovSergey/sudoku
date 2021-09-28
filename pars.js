const fs = require('fs');

let pars = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
pars = pars.split('\n');


function parsing(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 9) {
    arr.push(str.slice(i, i+9).split(''))
  }

  return arr;
}

function getRightString(num) {
  return pars[num - 1];
}


parsing(getRightString(13))
module.exports = {parsing}
