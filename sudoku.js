/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function checkRow(arr, position) {
  let num = '_';
  const i = position[0];
  const k = position[1];
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sortedArr = digits.sort(func);
  function func(a, b) {
    return 0.5 - Math.random();
  }
  for (let j = 0; j < sortedArr.length; j++) {
    if (!arr[i].includes(sortedArr[j].toString())) {
      const arrayCol = [];
      for (let n = 0; n < arr[k].length; n += 1) {
        arrayCol.push(arr[n][k]);
      }
      if (!arrayCol.includes(sortedArr[j].toString())) {
        const newTempArrPos = position.map((x) => (Math.floor(x / 3) * 3));
        const arraySquare = [];
        for (let r = newTempArrPos[0]; r < newTempArrPos[0] + 3; r += 1) {
          for (let c = newTempArrPos[1]; c < newTempArrPos[1] + 3; c += 1) {
            arraySquare.push(arr[r][c]);
          }
          if (!arraySquare.includes(sortedArr[j].toString())) {
            num = sortedArr[j];
          }
        }
      }
    }
  }
  return num;
}

function solve(board) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < 9; i++) {
    const arr2 = [];
    for (let j = 0; j < 9; j++) {
      arr2.push(board[count]);
      count += 1;
    }
    arr.push(arr2);
  }

  let position;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        position = [i, j];
        arr[i][j] = checkRow(arr, position).toString();
      }
    }
  }

  return arr;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  const puzzle = JSON.stringify(board);
  if (!puzzle.includes('-')) return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const f = [];
  for (let n = 0; n < board.length; n += 1) {
    f.push(board[n].join(' '));
  }
  const newBoard = f.join('\n');
  const trimmedNewBoard = newBoard.trim();
  return trimmedNewBoard;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
