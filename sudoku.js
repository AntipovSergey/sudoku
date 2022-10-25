/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function createBordLines(boardString) {
  let board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    board.push(boardString.slice(i, i + 9).split(''));
  }
  return board;
}

// возвращает массив возможных значений
function getPossibleValues(coordinates, board) {
  let [r, c] = coordinates;

  let digits = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };
  //проверка по строке
  for (let i = 0; i < 9; i++) {
    for (let key in digits) {
      if (board[r][i] === key) {
        delete digits[key];
      }
    }
  }
  //проверка по столбцу
  for (let i = 0; i < 9; i++) {
    for (let key in digits) {
      if (board[i][c] === key) {
        delete digits[key];
      }
    }
  }

  //провеpка в секции 3 на 3
  let rowStartBlock = Math.floor(r / 3) * 3;
  let colStarBlock = Math.floor(c / 3) * 3;
  for (let i = rowStartBlock; i < rowStartBlock + 3; i += 1) {
    for (let k = colStarBlock; k < colStarBlock + 3; k += 1) {
      for (let key in digits) {
        if (board[i][k] === key) {
          delete digits[key];
        }
      }
    }
  }
  return Object.values(digits);
}
//******************************************************************* */
//******************************************************************* */
function solve(boardString) {
  let board = createBordLines(boardString);
  function getSolution(board) {
    for (let r = 0; r < board.length; r += 1) {
      for (let c = 0; c < board.length; c += 1) {
        if (board[r][c] === '-') {
          let coordinates = [r, c];
          let posibleValues = getPossibleValues(coordinates, board);
          if (posibleValues.length === 1) {
            board[r][c] = posibleValues[0];
          }
        }
      }
    }
    for (let r = 0; r < board.length; r += 1) {
      for (let c = 0; c < board.length; c += 1) {
        if (board[r][c] === '-') return getSolution(board);
      }
    }
  }
  getSolution(board);
  return board;
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let el of board[i]) {
      if (board[i].indexOf(el) !== board[i].lastIndexOf(el)) {
        return false;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    let subArr = board.map((el) => el[i]);
    for (item of subArr) {
      if (subArr.indexOf(item) !== subArr.lastIndexOf(item)) {
        return false;
      }
    }
  }

  for (let i = 0; i < 9; i += 3) {
    let array = [];
    for (let j = 0; j < 3; j++) {
      for (let k = i; k < 3; k++) {
        array.push(board[j][k]);
      }
    }
    for (item of array) {
      if (array.indexOf(item) !== array.lastIndexOf(item)) {
        return false;
      }
    }
  }
  for (let i = 3; i < 12; i += 3) {
    let array = [];
    for (let j = 3; j < 6; j++) {
      for (let k = i; k < 3; k++) {
        array.push(board[j][k]);
      }
    }
    for (item of array) {
      if (array.indexOf(item) !== array.lastIndexOf(item)) {
        return false;
      }
    }
  }
  for (let i = 6; i < 15; i += 3) {
    let array = [];
    for (let j = 6; j < 9; j++) {
      for (let k = i; k < 3; k++) {
        array.push(board[j][k]);
      }
    }
    for (item of array) {
      if (array.indexOf(item) !== array.lastIndexOf(item)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  const a = board.map((el) => {
    const row = [];
    for (let i = 0; i < el.length; i += 3) {
      row.push(el.slice(i, i + 3).join(''));
    }
    return row.join('   ');
  });
  let res = '';
  for (let i = 0; i < a.length; i += 1) {
    if (i === 2 || i === 5) {
      res += a[i] + '\n\n';
    } else {
      res += a[i] + '\n';
    }
  }
  return res;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
