// строки и колонки
function valide(number, position, board) {
  let i = 0;
  while (i < size) {
    if (board[i][column] === number && i !== row) {
      return false;
    }
    i++;
  }

  for (let i = 0; i < size; i++) {
    if (board[row][i] === num && i !== row) {
      return false;
    }
  }
}