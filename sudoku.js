// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}




//
function findEmpty(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        return [i, j]
      }
      }
    }
    return -1
  }


  function validatePosition(num, position, board) {

    const [row, column] = position;
  
    // Find Row
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === num) return false
    }
  
    // Find Column
    for (let i = 0; i < board.length; i++) {
      if (board[i][column] === num) return false
    }
  
    // Find Section's
    const boxStartRow = Math.floor(r / 3) * 3;
    const boxStartColumn = Math.floor(c / 3) * 3;
    for (let i = boxStartRow; i < boxStartRow + 3; i++) {
      for (let j = boxStartColumn; j < boxStartColumn + 3; j++) {
        if(board[i][j] === num) return false
      }
    }
    return true
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

let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function emptyArray() {
  const arr = [];
  for(let i=0; i<9; i++) {
    arr.push([]);
  }
  fillArray(arr,str);
  return arr;
}

function fillArray(arr,string) {
  let count = 0;
  for(let i=0; i<string.length; i++) {
    arr[count].push(string[i]);
    if(arr[count].length === 9) {
      count++
    }
  }
}

emptyArray();

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard

}
