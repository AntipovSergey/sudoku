function solve(puzzle) {
  const boxSize = 3;
  const size = 9;
  const board = [];
  for (let i = 0; i < puzzle.length; i += 9) {
    board.push(puzzle.slice(i, i + 9).split(''));
  }

  const findIndex = (chess) => {
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        if (chess[i][j] === '-') return [i, j];
      }
    }
    return null;
  };

  const validate = (num, pos, chess) => {
    const [r, c] = pos;

    // проверка по горизонтали
    for (let i = 0; i < size; i += 1) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // проверка по вертикали
    for (let i = 0; i < size; i += 1) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // проверка в квадрате
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;
    for (let i = boxRow; i < boxRow + boxSize; i += 1) {
      for (let j = boxCol; j < boxCol + boxSize; j += 1) {
        if (chess[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  const solver = () => {
    const currentPos = findIndex(board);
    if (currentPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i += 1) {
      const currentNum = i.toString();
      const isValid = validate(currentNum, currentPos, board);
      if (isValid) {
        const [r, c] = currentPos;
        board[r][c] = currentNum;
        if (solver()) return true;
        board[r][c] = '-';
      }
    }
    return false;
  };

  solver();
  console.table(board);
  return board;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[i][j] === '-') return false;
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
  return 'You\'re great!';
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
