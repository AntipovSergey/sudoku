function solve(board) {
  const bigSide = 9;
  const squareSide = 3;

  function findEmpty() {
    for (let x = 0; x < bigSide; x += 1) {
      for (let y = 0; y < bigSide; y += 1) {
        if (board[x][y] === '-') {
          return [x, y];
        }
      }
    }
    return null;
  }

  function checkBoard(num, position) {
    const [x, y] = position;

    // Проверка строки
    for (let i = 0; i < bigSide; i += 1) {
      if (board[x][i] === num && i !== y) {
        return false;
      }
    }

    // Проверка колонок

    for (let i = 0; i < bigSide; i += 1) {
      if (board[i][y] === num && i !== x) {
        return false;
      }
    }
    // Проверка квадратиков
    const squareX = Math.floor(x / squareSide) * squareSide;
    const squareY = Math.floor(y / squareSide) * squareSide;
    for (let i = 0; i < squareX + squareSide; i += 1) {
      for (let j = 0; j < squareY + squareSide; j += 1) {
        if (board[i][j] === num && i !== x && j !== y) {
          return false;
        }
      }
    }
    return true;
  }

  // Подставляем числа в судоку
  console.log('-------------------------------------------------');
  const position = findEmpty();
  if (position === null) {
    return board;
  }
  const [row, col] = position;

  for (let i = 1; i < 10; i += 1) {
    const num = i.toString();
    const valid = checkBoard(num, position);
    console.log('pos', position, 'num', num, 'valid', valid);
    if (valid) {
      board[row][col] = num;

      if (solve(board)) {
        return board;
      }
    }
    board[row][col] = '-';
  }
  return false;
}

function isSolved(board) {
  if (solve(board)) {
    return true;
  }
  return false;
}

function prettyBoard(board) {
  const newBoard = board.map((row) => row.join(' ')).join('\n');
  return newBoard;
}

solve(controlArr);
