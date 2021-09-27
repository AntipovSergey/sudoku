// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const testArr = [
  '1-58-2---', '-9--764-5',
  '2--4--819', '-19--73-6',
  '762-83-9-', '----61-5-',
  '--76---3-', '43--2-5-1',
  '6--3-89--'
];

function solve(boardString) {
  for (let r = 0; r < boardString.length; r += 1) {
    for (let c = 0; c < boardString.length; c += 1) {
      let findEmpty = boardString[r][c];
      if (findEmpty === '-') {
        for (let num = 1; num <= 9; num += 1) {
          if (isSolved(boardString, [r,c], num)) {
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

console.log(solve(testArr));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(testArr, [r,c], num) {
  return true;
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
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
