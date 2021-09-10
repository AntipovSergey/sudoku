
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function convertBoard(str) {
  const numberArr = str.replace(/\-/g, '0').split('')
  let newBoard = []
  let row = []
  for (let i = 0; i < numberArr.length; i++) {
    row.push(+numberArr[i])
    if(row.length === 9){
      newBoard.push(row)
      row = []
    }
  }
  return newBoard
}



function solve(boardString) {
  // convertBoard(boardString)

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
 let resultStr = ''
 //if (board === undefined) return resultStr
 for (let i = 0; i < board.length; i++){
   resultStr += board[i].join(' ') + '\n'
 }
 return resultStr
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
