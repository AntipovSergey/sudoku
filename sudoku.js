// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let arr = [
    [1,2,3],
    [0,5,6],
    [7,8,9]
  ]
return arr
}



// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

// [2,9,3,4,5,7,6,8,1],
// [4,7,5,1,8,6,3,9,2],
// [1,6,8,3,9,2,7,4,5],
// [9,4,2,0,7,1,8,6,3],
// [3,8,1,6,2,9,5,7,4],
// [6,5,7,8,3,4,1,2,9],
// [7,2,6,9,1,3,9,3,7],
// [8,3,9,7,4,5,2,1,6]



function isSolvedHorizont(board, num, row) {


  for(let i = 0; i < board[row].length; i++){

    if(board[row][i] === num){
      console.log(board[row][i])
      return false
    } else {
      console.log(board[row][i])
      
    }
  }
  return true
}

function isSolvedVertical(board, num, col) {


  for(let i = 0; i < board[col].length; i++){

    if(board[i][col] === num){
      console.log(board[i][col])
      return false
    } else {
      console.log(board[i][col])
      
    }
  }
  return true
}
let board = [
  [2,9,3],
  [4,7,5],
  [1,6,8],
]

function isSolvedCube(board, num, row, col){
  let x = Math.floor((row/3))*3
  let y = Math.floor((col/3))*3
  console.log(x)
  console.log(y)
  for(let i = x; i < 3; i++){
    for(let j = y; j < 3; j++){
      if(board[i][j] == num){
        return false
      }
    }
  }
  return true
}


console.log(isSolvedCube(board, 4, 1, 2))
console.log(isSolvedHorizont(board, 4, 1))
console.log(isSolvedVertical(board, 8, 1))



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
