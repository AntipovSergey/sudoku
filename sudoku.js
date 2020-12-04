let str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
function prettyBoard(str) {
  let newstr1 = str.replace(/\D/g, "0");
  let newStr = newstr1.split("");
  let sudoku = [];
  for (let i = 0; i < newStr.length; i += 1) {
    sudoku.push(newStr.splice(0, 9));
  }
  return sudoku;
}
console.log(prettyBoard(str))
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let testNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 0) {
        board[i][j] = testNumber

      }
    }
  }
  return board
}

function solving (boardWithArrays){
  for (let i=0;i<boardWithArrays.length;i++){
    for (let j=0;j<boardWithArrays[i].length;j++){
      if (boardWithArrays[i][j]==testNumber){
      }
    }
  }
return boardWithArrays
}

console.log(solving(solve(prettyBoard(str))))
// function(solve)

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.


// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
