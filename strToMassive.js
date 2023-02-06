const fs = require('fs');

const str = fs.readFileSync('./puzzles.txt', 'utf-8');

function strToMassive(str) {
  const massive = [];
  for (let i = 0; i < 81; i += 9) {
    massive.push(str.slice(i, i + 9).split(''));
  }
  return massive;
}

console.log(strToMassive(str));

module.exports = strToMassive;
