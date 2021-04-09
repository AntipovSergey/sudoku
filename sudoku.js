// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

// const string = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---" 
const board = boardString.match(/.{9}/g).map((el) => el.split(''))  // временный

function copyBoard(board) {
  const copyBoard = JSON.parse(JSON.stringify(board))
  return copyBoard
}

const arr = ['1','2','3','4','5','6','7','8','9'] // временный
function checkHorizontal(arr, board, loc) {
  for (let i = 0; i < board[loc.row].length; i += 1) {
    let indexRow = arr.indexOf(board[loc.row][i]) 
    if (indexRow !== -1) {
      arr.splice(indexRow, 1)
    } 
  }
}

function checkVertical(arr, board, loc) {
  let verticalLine = []
  for (let i = 0; i < board[loc.col].length; i += 1) {
    verticalLine.push(board[i][loc.col])
  }
  for (let i = 0; i < verticalLine.length; i += 1) {
    let indexCol = arr.indexOf(verticalLine[i]) 
    if (indexCol !== -1) {
      arr.splice(indexCol, 1)
    } 
  }
}

}
console.log(solve("1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---"))


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
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
