function read(number = Math.floor(Math.random() * 16)) {
  const fs = require('fs');
  const arr = fs.readFileSync('puzzles.txt', 'utf8').split('\r\n');
  const resArr = [];
  resArr.push(arr[number - 1]);
  const resArr2 = [];
  for (let i = 0; i < resArr[0].length; i += 9) {
    resArr2.push([resArr[0].slice(i, i + 9)]);
  }
  const newArr = resArr2.map((row) => row[0].split('').map((char) => char));
  return newArr;
}

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

  function checkBoard(num, position, board) {
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
    for (let i = squareX; i < squareX + squareSide; i += 1) {
      for (let j = squareY; j < squareY + squareSide; j += 1) {
        if (board[i][j] === num && i !== x && j !== y) {
          return false;
        }
      }
    }
    return true;
  }

  // Подставляем числа в судоку

  const position = findEmpty();
  if (position === null) {
    return board;
  }
  const [row, col] = position;

  for (let i = 1; i < 10; i += 1) {
    const num = i.toString();
    const valid = checkBoard(num, position, board);
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

function prettyBoard(board) {
  solve(board);
  // const newBoard = board.map((row) => row.join(' ')).join('\n');
  console.table(board);
}

module.exports = {
  read,
  solve,
  prettyBoard,
};
