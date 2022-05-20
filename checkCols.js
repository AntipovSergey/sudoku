// функция проверяет наличие цифры в колонке
function checkCols (board,emptyPos,num) {
  let [row,col] = emptyPos
  let curColmn = []
   for (let i = 0; i < 9; i++) {
    curColmn.push(board[i][col])
  }
  console.log(curColmn)
  return !curColmn.includes(num)
}


