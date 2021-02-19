function validation (board, position, value) { 
  //проверяю строки
  for (i = 0; i < board.length; i++) {
    if (board[position[0]][i] === value && i !== position[0])  return false;
  }
  //проверяю столбцы
  for (i = 0; i < board.length; i++) {
    if (board[i][position[0]] === value && i !== position[1]) return false;
  }
  //вычисляю начальные координаты квадрата моего судоку, а также количество ячеек в квадрате
  const sizeOfBox = Math.sqrt(board.length)
  const startOfboxOnRow = (Math.flow(position[0] / sizeOfBoard)) * sizeOfBoard;
  const startOfboxOnColumn = (Math.flow(position[1] / sizeOfBoard)) * sizeOfBoard;
  //проверяю квадрат
  for (i = startOfboxOnRow; i < startOfboxOnRow + sizeOfBox; i++) {
    for (j = startOfboxOnColumn; j < startOfboxOnColumn + sizeOfBox; j++) {
      if (board[i][j] === value && j !== position[1] && i !== position[1]) {
      } 
      return false
    }   
  }
  return true
}

