function isInVertical(value, y, x, board){
  for (let i=0; i<board.lenght; i++){
      if (board[i][x]===value)
      return false;
  }
  return true;
}

module.exports=isInVertical;
