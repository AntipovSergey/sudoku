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
  
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] !== '-') {
        newArr[i][j] = Number(newArr[i][j])
      }
    }
  }
  
  return newArr
}
//console.table(createArr(sudoku))


function mainCheck(boardString) {
let sudokuArray = createArr(sudoku);

for (let i = 0; i < sudokuArray.length; i++) {
  for (let j = 0; j < sudokuArray[i].length; j++) {

  }
}
  return sudokuArray
}
//console.table(makeHor(sudoku))

function searchHor(num) {
  let arrSearchHor = mainCheck(sudoku);

  for (let i = 0; i < arrSearchHor.length; i++) {
    for (let j = 0; j < arrSearchHor[i].length; j++ ) {
      if(arrSearchHor[i][j] === num) return false 
      }
  }

  return true
}
//console.log(searchHor(63));



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
