
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(column / 3) * 3;
  
    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === number && i !== row && j !== column) {
          return false;
        }
      }
    }

