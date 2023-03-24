  // проверка поля 3х3
  const boxRow = Math.floor(row / BOX_SIZE) * BOX_SIZE;
  const boxColum = Math.floor(colum / BOX_SIZE) * BOX_SIZE;

  for (let i = boxRow; i < boxRow + BOX_SIZE; i++) {
    for (let j = boxColum; j < boxColum + BOX_SIZE; j++){
        if (board[i][j] === num && i !== row && j !== colum) {
            return false;
        }
    }
    
  }
