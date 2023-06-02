/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

    function getString(boardString) {
    const board = boardString.split('\n').join('').split('');
    return board;
  }

  const box = 3;
  const size = 9;
  const findEmpty = function (board) {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') return [r, c];
      }
    }
    return undefined;
  };

  const checkPos = function (num, pos, board) {
    const [r, c] = pos;

    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    const boxRow = Math.floor(r / box) * box;
    const boxCol = Math.floor(c / box) * box;

    for (let i = boxRow; i < boxRow + box; i++) {
      for (let j = boxCol; j < boxCol + box; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  const master = () => {
    const currPos = findEmpty(board);
    if (currPos === undefined) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = checkPos(currNum, currPos, board);
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (master()) return true;
        board[x][y] = '-';
      }
    }
    return false;
  };

  master();
  return board;

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
let newBoard = Array.isArray(board)
for (let i = 0; i < 9; i++) {
  if(!isNaN(newBoard[row][column])) {
    return false
  }
  else {
    return true;
  }
}
}

//   for(let i = 0; i < board.length; i++) {
//     const rows = 3 * Math.floor(board.row / 3) + Math.floor(i / 3)
//     const column = 3 * Math.floor(board.column / 3) + i % 3
//     if (board[rows][column] === board[board.row][board.column] && (rows !== board.row || column !== board.column)) {
//   }
//   return true
// }
// return false
// }

// board.row && board.column могут быть названы по другому в других ветках, нужно иметь это ввиду

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let finalBoard = '';
  for (let i = 0; i < board.length; i++) {
    const newArray = board[i];

    if (i === 0) {
      finalBoard += '------------------------------------\n';
      finalBoard += '|';
    }
    if (i) {
      finalBoard += '|';
    }
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === 3) {
        finalBoard += ' ';
      } else {
        finalBoard += `  ${newArray[j]}`;
      }
      if ((j + 1) % 3 === 0) {
        finalBoard += ' | ';
      }
    }
    finalBoard += '\n';
    if ((i) === 8) {
      finalBoard += '------------------------------------';
    }
    if ((i + 1) % 3 === 0 && (i + 1) % 9 !== 0) {
      finalBoard += '------------------------------------\n';
    }
  }
  return finalBoard;
}

const array = [
  [1, 2, 6, 7, 8, 9, 0, 6, 7],
  [1, 2, 6, 7, 8, 9, 0, 6, 7],
  [1, 4, 6, 7, 8, 9, 0, 6, 7],
  [1, 2, 6, 7, 8, 9, 0, 6, 7],
  [1, 2, 6, 7, 8, 9, 0, 6, 7],
  [1, 2, 6, 7, 8, 9, 0, 6, 7],
  [1, 2, 6, 7, 8, 9, 0, 6, 7],
  [1, 2, 6, 7, 8, 9, 0, 6, 7],
  [1, 2, 6, 7, 8, 9, 0, 6, 7],
];
console.log(prettyBoard(array));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
