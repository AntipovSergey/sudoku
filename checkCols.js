// функция проверяет наличие цифры в колонке
function checkCols (board,emptyPos,num) {
  let result = true;
  let [row, col] = emptyPos
    for(let i = 0; i < 9; i++){
      if(board[i][col] === num) {
        result = false;
      } 
  }
  return result;
}

module.exports = checkCols

