function validate(num, pos, board) {
  const [r, c] = pos;

  // проверка на строку 
  for (let i = 0; i < size; i += 1) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }
  // проверка на столбец
  for (let i = 0; i < size; i += 1) {
    if (board[i][r] === num && i !== c) {
      return false;
    }
  }
  // проверка в квадрате
  const boxRow = math.floor(r / boxSize) * boxSize;
  const boxCol = math.floor(c / boxSize) * boxSize;
  for (let i = boxRow; i < boxCol + boxSize; i += 1) {
    for (let j = boxCol; j < boxCol + boxSize; j += 1) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false
      }
    }
  }

  return true;

}
