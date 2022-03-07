const fs = require('fs');

const boardStringVar = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const boardString = boardStringVar.split('\n').map((el) => [...el]);
console.table(boardString[0]);
//console.log(boardString[0]);
function abc(strArr){
  let arr = [];
  for(let i = 0;i < strArr.length; i+= 1){
    if(i < 9) {
      arr.push(strArr[i]);
    }
  }
  return arr;
}

 console.log(abc(boardString[0]));
// Принимает доску как строку в формате
// вы видите в файле головоломки. Возвращает
// что-то, представляющее доску после
// ваш решатель пытался ее решить.
// То, как вы представляете свою доску, зависит от вас!

function solve(boardString) {
  console.log('first changes');
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
