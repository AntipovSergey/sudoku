// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(num,points,board) {
  let [x,y] = points

  //checking rows 
  for (let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
    if (board[j][y] == num && j != x) return false 
    }
  }
  //checking columns 
  for (let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
    if (board[x][i] == num && i != y) return false 
    }
  }

//sqr check
  const boxRow = Math.floor((x/3)*3)
  const boxCol = Math.floor((y/3)*3)

  for (let i = boxRow; i < boxRow + 3; i++){
    for (let j = boxCol; j < boxCol + 3; j++){
      if(board[i][j] == num && i != x && j != y) return false 
    }
  }
  
  return true 
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
