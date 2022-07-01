const fs = require('fs');
const arrPuzzle = fs.readFileSync('./puzzles.txt','utf-8');


// Первое судоку из файла
const str = arrPuzzle.split('\n');

function parsing(str) {
  const board = [];
  const newStr = str.split('');
   for (let i = 0; i < newStr.length; i++) {
    board.push(newStr.splice(0, 9));
  }
  return board;
}

console.table(parsing(str[0]));


module.exports = {
    parsing,
}