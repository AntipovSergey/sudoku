function boardStringToArray(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 9) {
    result.push(string.slice(i, i + 9).split(''));
  }

  let res = result.map(el => el.map(element => {
    if (element === '-') {
      return 0;
    } else {
      return +element;
    }
  }));

  return res;
}

function nextEmptySpot(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function checkRow(board, row, value){
  for(let i = 0; i < board[row].length; i++) {
    if(board[row][i] === value) {
      return false;
    }
  }
  
  return true;
}
  
function checkColumn(board, column, value){
  for(var i = 0; i < board.length; i++) {
    if(board[i][column] === value) {
      return false;
    }
  }
  
  return true;
};

function checkSquare(board, row, column, value){
  boxRow = Math.floor(row / 3) * 3;
  boxCol = Math.floor(column / 3) * 3;
  
  for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[boxRow + r][boxCol + c] === value) {
          return false;
        }
    }
  }

  return true;
};

function checkValue(board, row, column, value) {
  if(checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)) {
    return true;
  }
}

function solve(board) {
  let emptySpot = nextEmptySpot(board); // ищем следующее пустое место. если не нашли => [-1, -1]
  let row = emptySpot[0]; // присваиваем индекс строки пустого места
  let col = emptySpot[1]; // присваиваем индекс колонки пустого места

  // проверяем, решен ли судоку полностью
  if (row === -1) {
    return board;
  }
  /* 1 4 5 8 9 2 6 7 3
     - 9 - - 7 6 4 - 5
     2 - - 4 - - 8 1 9
     - 1 9 - - 7 3 - 6
     7 6 2 - 8 3 - 9 -
     - - - - 6 1 - 5 -
     - - 7 6 - - - 3 -
     4 3 - - 2 - 5 - 1
     6 - - 3 - 8 9 - -
  */

  
  for(let num = 1; num <= 9; num++) { // итерируемся по значениям
    if (checkValue(board, row, col, num)) { // проверяем есть ли возможность подставить заданный num
      // console.log(`row: ${row}, col: ${col}, num: ${num}`);
      board[row][col] = num; // присвиваем подходящее значение пустому месту
      solve(board); // запускаем рекурсию для следующих пустых мест
    }
  }

  if (nextEmptySpot(board)[0] !== -1) { // если не нашли подходящего значения за весь цикл, то обнуляем его
    board[row][col] = 0;
  }

  return board;
}

function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return false;
      }
    }
  }

  return true;
}

function prettyBoard(board) {
  return board.join('\n').split(',').join(' ');
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
  boardStringToArray
};

