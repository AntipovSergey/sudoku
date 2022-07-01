const fs = require('fs');


// Первое судоку из файла

function parsing() {
  const arrPuzzle = fs.readFileSync('./puzzles.txt','utf-8');
  const str = arrPuzzle.split('\n');
  console.log(str)
  const board = [];
  const newStr = str[0].split('');
   for (let i = 0; i < newStr.length; i++) {
    board.push(newStr.splice(0, 9));
  }
  return board;
}

// console.table(parsing());


module.exports = {
    parsing,
}