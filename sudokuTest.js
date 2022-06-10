const initialBoard = [
[1,0,5],     [8,0,2],     [0,0,0],
[0,9,0],     [0,7,6],     [4,0,5],
[2,0,0],     [4,0,0],     [8,1,9],
[0,1,9],     [0,0,7],     [3,0,6],
[7,6,2],     [0,8,3],     [0,9,0],
[0,0,0],     [0,6,1],     [0,5,0],
[0,0,7] ,    [6,0,0] ,    [0,3,0],
[4,3,0],     [0,2,0] ,    [5,0,1],
[6,0,0],     [3,0,8],     [9,0,0]
]
  let tempBoard = JSON.parse(JSON.stringify(initialBoard))

const displayBoard = function (board) {
  console.log(board) // table
}
const checkLine = function (board, index, number){
  for (let j = 0; j < board.length; j++) {
    if(number === Number(board [index][j])) return false
  }
  return true
}

displayBoard(tempBoard)
console.log(checkLine(tempBoard,0,2))