function validRowsAndColumn(num, curPos, board) {
    // горизонталь
    const [row, col] = curPos;
    for (let i = 0; i < board.length; i += 1) {
        if (board[i][col] !== num && i !== row) {
          return true;
        }
    }
    // вертикаль
    for (let k = 0; k < board.length; k += 1) {
        if (board[row][k] !== num && k !== col) {
          return true;
        }
  }