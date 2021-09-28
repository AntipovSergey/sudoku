// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const { checkNumber } = require('./check'); 
const { parsing } = require('./pars');
const { argv } = require('process');


function solve(boardString) {
  for (let r = 0; r < boardString.length; r += 1) {
    for (let c = 0; c < boardString.length; c += 1) {
      let findEmpty = boardString[r][c];
      if (findEmpty === '-') {
        for (let num = 1; num <= 9; num += 1) {
          if (checkNumber(boardString, [r,c], num)) {
            findEmpty = num;
            if (solve(boardString)) {
              return boardString;
            }
          } findEmpty = '-';
        } 
      } return false;
    }
  }
  return boardString;
}
// solve(boardStringFromPars);

function isSolved (boardString) {
  const result = solve(parsing(boardString));
  if (result === false) return false;
  return boardString;
}



// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(boardString) {
  const result = isSolved(boardString);
  if (result === false) console.log('Решения нет');
  console.table(result);
}
prettyBoard(process.argv[2]);
// console.log(process.argv);
// Exports all the functions to use them in another file.
module.exports = {
 solve,
}
