const fs = require('fs');
const text = fs.readFileSync('./puzzles.txt', 'utf-8');
const fullBoard = text.split('\n');
const boardString = [];
const newArr = [];

for (let i = 0; i < fullBoard[0].length; i = i + 9) {
  boardString.push(fullBoard[0].slice(i, i + 9).split(''));

  //newArr.push(arr);
}

console.log(boardString);
