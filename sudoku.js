// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}

let puzzle = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function sudokuData (puzzle) {
  let puzzleArr = puzzle.match(/.{1,9}/g)
  let puzzleArrData = []
  for (let i=0; i<puzzleArr.length; i++) {
    puzzleArrData.push(puzzleArr[i].split(''))
  }
  let sudoku = []
  let nums = [1,2,3,4,5,6,7,8,9]
  for (let i=0; i<puzzleArrData.length; i++) {
    for (let j=0; j<puzzleArrData.length; j++) {
      let obj = {
        row: i,
        col: j,
        boxNum: [(Math.floor(i/Math.sqrt(puzzleArrData.length))), (Math.floor(j/Math.sqrt(puzzleArrData.length)))]
      }
      if (puzzleArrData[i][j]=== '-') {
        obj.numbers = nums
        obj.isInitNum = false
      } else {
        obj.numbers = puzzleArrData[i][j]
        obj.isInitNum = true
      } 
      sudoku.push(obj)
    } 
  }
  return sudoku
}
  
console.table(sudokuData(puzzle))



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
