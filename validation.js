const validation = (board, position, value) => {
  //проверяю строки
  for (i = 0; i < board.length; i++) {
    if (board[position[0]][i] === value && i !== position[1]) return false;
  }
  //проверяю столбцы
  for (i = 0; i < board.length; i++) {
    if (board[i][position[1]] === value && i !== position[0]) return false;
  }
  //вычисляю начальные координаты квадрата моего судоку, а также количество ячеек в квадрате
  const sizeOfBox = Math.sqrt(board.length)
  const startOfboxOnRow = (Math.floor(position[0] / sizeOfBox)) * sizeOfBox;
  const startOfboxOnColumn = (Math.floor(position[1] / sizeOfBox)) * sizeOfBox;
  //проверяю квадрат
  for (i = startOfboxOnRow; i < startOfboxOnRow + sizeOfBox; i++) {
    for (j = startOfboxOnColumn; j < startOfboxOnColumn + sizeOfBox; j++) {
      if (board[i][j] === value && j !== position[1] && i !== position[0]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  validation,
}
