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

console.table(createArr(sudoku))
let sudokuArray = createArr(sudoku);

function mainCheck(sudokuArray) {

for (let i = 0; i < sudokuArray.length; i++) {
  for (let j = 0; j < sudokuArray[i].length; j++) {
    if (sudokuArray[i][j] === '-') {
      for (let num = 1; num <= 9; num += 1) {
        if (checkValidNum(sudokuArray, num, i, j)) {
          
        }
      }
      findHor(sudokuArray, i, j)
        }
      } 
    }
  return false
}
  
function checkValidNum(arr, num, row, col) {
  return checkRow(arr, num, row, col) && checkCol(arr, num, row, col) && checkSmallSquare(arr, num, row, col)
}


function checkRow (arr, num, row, col) {
  let currentRow = arr[row]
  return currentRow.includes(num)
}

function checkCol(arr, num, row, col) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index][col] === num) return false
  }
  return true
}

function check


console.table(mainCheck(sudoku));




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

// // Exports all the functions to use them in another file.
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }
