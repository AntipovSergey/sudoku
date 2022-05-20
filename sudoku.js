let checkBox = require('./checkBox')
let checkRow = require('./checkRow')
let checkCols = require('./checkCols')
let checkEmpty = require('./checkEmpty')
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(str) {
  let board = []
  for (let j=0;j<str.length;j+=9) {
    let arr = []
    for (let i = j;i<j+9;i++) {
      arr.push(str[i])
    }
    board.push(arr)
  }

  function solver() {
    let emptyPos = checkEmpty(board) 
    if (!emptyPos) {return true}
    for (let j=1;j<=9;j++) {
      if (validator(board,emptyPos,j.toString())) {
        board[emptyPos[0]][emptyPos[1]] = j.toString()
        if (solver()) {return true}
        board[emptyPos[0]][emptyPos[1]] = '-'
      }
    }
    return false
  }

  function validator(board,emptyPos,num) {
    return checkRow(board,emptyPos,num) && checkCols(board,emptyPos,num) && checkBox(board,emptyPos,num) // ?
  }

  solver()
  return board
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  let result = true
  for (let i=0;i<board.length;i++) {
    if (board[i].includes('-')) {
      result = false
    }
  }
  return result
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let final = board.map(el => {
    return el.join('') + '\n'
  })
  return final.join('')
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
