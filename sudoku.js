// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function arrayBoardFromStringBoard(boardString) {
  const arrOfStr = boardString.match(/.{9}/g)
  const result = [];
  for (let i = 0; i < arrOfStr.length; i++) {
    result.push(arrOfStr[i].split(''))
  }
  return result
}

function solvingSudoku(string) {
  // making array board 
  const board = arrayBoardFromStringBoard(string);
  // making array of indexes of empty string in format[indexOfArray, indexOfElement]
  function findAllEmptyCells(board) {
    const arrayOfIndexesOfEmptyStrings = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '-') {
          // const indexOfArray = i;
          // const indexOfElement = j;
          arrayOfIndexesOfEmptyStrings.push([i,j]);
        }
      }
    }
    return arrayOfIndexesOfEmptyStrings
  };
  // go through emptycell ine by one
  
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


