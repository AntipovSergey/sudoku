// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {



for (let num = 1; num < 9; num++) {
  f
    
  }
  
}
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
let x = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function prettyBoard(board) {
  let reg = /.{9}/g
  let arr = board.match(reg)
  // список строк
  let newArr = arr.map((board) => board.split(''))
  return newArr
}
console.log(prettyBoard(x));
// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}


//
function nextEmptySpot(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '-')
        return [i, j]

    }
  }
  return [-1, -1]
}

function checkRow(board, row, value){
  for (let i = 0; i < board; i++) {
    
    
  }
}
