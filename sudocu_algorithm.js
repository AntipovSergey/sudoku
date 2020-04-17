// Main sudocu solver function
function sudocu(board) {
  let indexX = 0;
  let indexY = 0;

  for (indexX; indexX < board.length; indexX += 1) {
    for (indexY; indexY < board[indexX].length; indexY += 1) {
      for (let candidate = 1; candidate <= 9; candidate += 1) {
        if (board[indexX][indexY] !== '-') {
          if (correctSolving(indexX, indexY, candidate, board)) {
            board[indexX][indexY] = candidate;
            sudocu(board);
          }
        }
      }
      return false;
    }
  }
  return true;
}

function correctSolving(indexX, indexY, candidate, board) {
  let leftToRightCheck = [];
  let upToDownCheck = [];
  let cellCheck = [];
  let cellX = Math.floor(indexX / 3) * 3;
  let cellY = Math.floor(indexY / 3) * 3;

  for (let index = 0; index < board.length; index += 1) {

    leftToRightCheck[index] = board[indexX][index];
    upToDownCheck[index] = board[index][indexY];
  }

  for (let index = 0; index < 3; index += 1) {
    cellCheck[index] = board[cellX][cellY + Math.floor(index / 3)];
    cellCheck[index] = board[cellX + 1][cellY + Math.floor(index / 3)];
    cellCheck[index] = board[cellX + 2][cellY + Math.floor(index / 3)];
    // cellCheck[index] = board[cellX + Math.floor(index / 3)][cellY + Math.floor(index / 3)];
  }

  if ((leftToRightCheck.indexOf(candidate) === -1) && (upToDownCheck.indexOf(candidate) === -1) && (upToDownCheck.indexOf(candidate) === -1)) {
    return false;
  }
  return true;


  // cellCheck[0] = board[cellX][cellY]; //+
  // cellCheck[1] = board[cellX][cellY + 1];
  // cellCheck[2] = board[cellX][cellY + 2];
  // cellCheck[3] = board[cellX + 1][cellY];
  // cellCheck[4] = board[cellX + 1][cellY + 1];
  // cellCheck[5] = board[cellX + 1][cellY + 2];
  // cellCheck[6] = board[cellX + 2][cellY];
  // cellCheck[7] = board[cellX + 2][cellY + 1];
  // cellCheck[8] = board[cellX + 2][cellY + 2];
}
