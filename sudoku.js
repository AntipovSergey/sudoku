/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(board) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => {
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  };

  const validate = (num, pus, board) => {
    const [r, c] = pus;

    // проверяем строки
    for (let i = 0; i < size; i += 1) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // проверка колонки
    for (let i = 0; i < size; i += 1) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // проверка маленького квадрата
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i += 1) {
      for (let j = boxCol; j < boxCol + boxSize; j += 1) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  const solve = () => {
    const currPos = findEmpty(board);
    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i += 1) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }

        board[x][y] = '-';
      }
    }
    return false;
  };
  solve();
  return board;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
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
function prettyBoard() {
  return ('Ты молодец 🥳');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
