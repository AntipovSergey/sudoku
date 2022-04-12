function decision(board, rowCheck, colsCheck, blockCheck) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; i++) {
      if (board[i][j] === '-') {
        for (let k = 1; k <=9; k++) {
          if ((rowCheck[i].includes(k) === false) && (colsCheck[j].includes(k) === false) && (blockCheck[i].includes(k) === false)) {
            board[i][j] = k;
          }
        }
      }
    }
  }
}

// Поиск пустой клетки.
function findEmpty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return null;
}

// Проверка по строке
function isValidRow(key, row, board) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == key) {
      return false;
    }
  }
  return true;
}

// Проверка по стоблцу
function isValidColumn(key, column, board) {
  for (let i = 0; i < 9; i++) {
    if (board[i][column] == key) {
      return false;
    }
  }
  return true;
}

// Проверка по блоку
function isValidBlock(key, row, column, board) {
  row = Math.floor(row / 3) * 3;
  column = Math.floor(column / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[row + i][column + j] == key) {
        return false;
      }
    }
  }
  return true;
}

// Проверка цифры по строке, столбцу, блоку.
function isValid(key, row, column, board) {
  return isValidRow(key, row, board) && isValidColumn(key, column, board) && isValidBlock(key, row, column, board);
}

function decision(board) {
  let pos = findEmpty(board);
  if (pos === null) {
    return true;
  }
  for (let key = 1; key <= 9; key++) {
    let row = pos[0];
    let column = pos[1];
    isValid(key, row, column, board);
    if (isValid) {
      board[row][column] = key;
    } 
  }
  console.table(board);
  return board;
}
