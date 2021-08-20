// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}
let board = [[1, 4, 5, 3, 5, 3, 6, 7, 2],
[1, 4, 5, 3, 5, 3, 6, 7, 2],
[1, 4, 5, 3, 5, 3, 6, 7, 2],
[1, 4, 5, 3, 5, 3, 6, 7, 2],
[1, 4, 5, 3, 5, 3, 6, 7, 2],
[1, 4, 5, 3, 5, 3, 6, 7, 2],
[1, 4, 5, 3, 5, 3, 6, 7, 2],
[1, 4, 5, 3, 5, 3, 6, 7, 2],
[1, 4, 5, 3, 5, 3, 6, 7, 2]
]




// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
}
function sliceArrayCol(arr, col) {
  let column = [];
  for (let i = 0; i < 8; i++) {
    column.push(arr[col][i])

  }
  return column

}
function sliceArraySquare(arr, sq) {
  let square = [];
  let obji ={
    1:0,
    2:0,
    3:0,
    4:3,
    5:3,
    6:3,
    7:6,
    8:6,
    9:6,
  };
  let objn ={
    1:0,
    2:3,
    3:6,
    4:0,
    5:3,
    6:6,
    7:0,
    8:3,
    9:6,
    
  };
 
  let i = obji[sq]
     for(let a = 0;a < 3; a++){
      let n = objn[sq]
       for(let b = 0;b < 3;b++){
       
        square.push(arr[i][n])
        n++
     }
     i++
     }
  return square
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
