const checkHorisontal = (value, y, x, board) => {
  //board[y][x]
  for(let x = 0; x < board[y].length; x++){
    if(board[y][x] === value){
      return false;
    }
  }
  return true;
}

module.export = {
  checkHorisontal,
}


