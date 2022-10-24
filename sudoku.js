/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const result = [];
  const intResult = [];
  for (let i = 0; i < boardString.length; i += 9) {
    result.push(boardString.slice(i, i + 9).split(''));
  }
  for (let i = 0; i < result.length; i++) {
    recursive(result, i);
  }
  if (isSolved(result)) {
    return result;
  }

  for (let i = 0; i < result.length; i++) {
    intResult.push(result[i].join(''));
  } if (boardString !== intResult.join('')) return solve(intResult.join(''));
  for (let i = 0; i < result.length; i++) {
    recursiveRandom(result, i);
  }
}

function recursiveRandom(result, i, j = 0) {
  const base = '123456789';
  for (j; j < 9; j++) {
    let summ = '';
    if (result[i][j] === '-') {
      summ = stroke(result, i) + table(result, j, i) + column(result, j);
      for (let b = 0; b < base.length; b++) {
        if (!summ.includes(base[b])) result[i][j] = base[b];
      }
    }
  }
}
function recursive(result, i, j = 0) {
  const base = '123456789';
  for (j; j < 9; j++) {
    let summ = '';
    if (result[i][j] === '-') {
      let uniqeString = '';
      summ = stroke(result, i) + table(result, j, i) + column(result, j);
      for (let b = 0; b < base.length; b++) {
        if (!summ.includes(base[b])) uniqeString += base[b];
      }
      if (uniqeString.length === 1) {
        result[i][j] = uniqeString;
      } else recursive(result, i, j + 1);
    }
  }
}

function table(board, index, height) {
  let result = '';
  if (index < 3 && height < 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 6 && index >= 3 && height < 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 6; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 9 && index >= 6 && height < 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 6; j < 9; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 3 && height < 6 && height >= 3) {
    for (let i = 3; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 6 && index >= 3 && height < 6 && height >= 3) {
    for (let i = 3; i < 6; i++) {
      for (let j = 3; j < 6; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 9 && index >= 6 && height < 6 && height >= 3) {
    for (let i = 3; i < 6; i++) {
      for (let j = 6; j < 9; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 3 && height < 9 && height >= 6) {
    for (let i = 6; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 6 && index >= 3 && height < 9 && height >= 6) {
    for (let i = 6; i < 9; i++) {
      for (let j = 3; j < 6; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 9 && index >= 6 && height < 9 && height >= 6) {
    for (let i = 6; i < 9; i++) {
      for (let j = 6; j < 9; j++) {
        result += board[i][j];
      }
    } return result;
  }
}

function stroke(board, height) {
  let result = '';
  for (let i = 0; i < 9; i++) {
    result += board[height][i];
  }
  return result;
}

function column(board, index) {
  let result = '';
  for (let i = 0; i < board.length; i += 1) {
    result += board[i][index];
  }
  return result;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf('-') !== -1) return false;
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(result) {
  const intResult = [];
  for (let i = 0; i < result.length; i++) {
    intResult.push(result[i].join(''));
  } return solve(intResult.join(''));
}
// console.table(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
// const boardString = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
// const result = [];
// for (let i = 0; i < boardString.length; i += 9) {
//   result.push(boardString.slice(i, i + 9).split(''));
// }
// console.table(result);
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
