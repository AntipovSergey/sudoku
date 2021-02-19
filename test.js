const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function stringToBoard(boardString) {
  let renderBoardString = boardString.split('')
  let result = []
  for (let i = 0; i < 9; i++) {
    result.push(renderBoardString.splice(0, 9))

  }
  return result
}
// console.table(stringToBoard(boardString));

let board = stringToBoard(boardString)
function searchEmpty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '-') {
        return [i, j]
      }
    }
  }
}


// searchEmpty(board)
// console.log(searchEmpty(board));
function checkBoard(board, row, col) {


}






// solve(boardString){








// }



// function isSolved(board) {

// }



// function prettyBoard(board) {

// }




