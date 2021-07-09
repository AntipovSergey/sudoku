// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const fs = require("fs");
const boardString = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function boardToArray(boardString, n) {
  const boardChanged = boardString.replace(/-/gmi, 0);
  const kek = boardChanged.match(/.{81}/gmi);
  const boardArr = kek[n].match(/(\d{9})/gmi);
  return boardArr.map((el) => el.split(''));
}

console.table(boardToArray(boardString, 0));
const array = boardToArray(boardString, 0);

function checkNum(array) {
  const rowcol = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (array[row][col] == 0) {
        rowcol.push([row, col]);
      }
    }
  } return rowcol;
}
console.log(checkNum(array));

const rowcol = checkNum(array);
console.log(rowcol);
const randomInteger = (min, max) => {
  const randomNumber = min + Math.random() * (max - min);
  return Math.round(randomNumber);
};
function randomSudoku(array, rowcol) {
  let randomResult = array.slice(0,);
  for (let i = 0; i < rowcol.length; i++) {
    for (let j = 0; j < rowcol.length; j++) {
      randomResult[rowcol[i]][rowcol[j]] = randomInteger(1, 9);
    }
  }
  return randomResult;
}
const randomResult = randomSudoku(array, rowcol);
console.table(randomResult);

