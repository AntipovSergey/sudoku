
function solve(boardString) {
  let arr = boardString.split('')
  let sudokuBoard = []
   for (let i = 0; i < arr.length; i += 9) {
        sudokuBoard.push(arr.slice(i, i+9))
   }
  return sudokuBoard
  // console.log(console.table(sudokuBoard))
}


