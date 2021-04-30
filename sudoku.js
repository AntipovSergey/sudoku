// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

const sudoku = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

function createArr(boardString) {
  let newArr = [];
  let sudokuArr = boardString.split("")
  let size = 9

  for (let i = 0; i < size; i++) {
    newArr.push(sudokuArr.splice(0, size))
  }
  return newArr
}


function makeHor(boardString) {
let sudokuArray = createArr(sudoku);

for (let i = 0; i < sudokuArray.length; i++) {
  for (let j = 0; j < sudokuArray[i].length; j++) {
    if (sudokuArray[i][j] !== '-') {
      sudokuArray[i][j] = Number(sudokuArray[i][j])
    }
  }
}
return sudokuArray
}
console.table(makeHor(sudoku))



function solve(boardString) {

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
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
