function validate(currNum, currPos, board) {
  [row, col] = currPos;

  //check rows
  for (let i = 0; i < size ; i++) {
     if(board[i][col] === currNum && i !== row)
        return false
    }

  for (let i = 0; i < size; i ++) {
    if(board[row][i] === currNum && i !== col)
    return false
  }

  //Определение верхней/левой угловой точки каждого квадрата

  const boxRow = Math.floor(r / boxSize) * boxSize
  const boxCol = Math.floor(c / boxSize) * boxSize

  // Проверка currNum по ячейкам
  for (let i = boxRow; i < boxRow + boxSize ; i++) {
    for (let j = boxCol; j < boxCol + boxSize ; j++) {
      if(board[i][j] === currNum && i !== row && j !== col) {
        return false
      }
    }
  }

  return true
}