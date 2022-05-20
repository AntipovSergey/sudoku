function checkRow(board,emptyPos,num) {
  let result = true;
  let [row, col] = emptyPos
    for(let i = 0; i < 9; i++){
      if(board[row][i] === num) {
        result = false;
      } 
   }
  return result;
}

