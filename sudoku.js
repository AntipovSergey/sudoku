/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

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
    const checkHorizontal = chess[r].join('').includes(String(num));
    // if (!(checkHorizontal) === false) return false

    for (let i = 0; i < size; i++) {
      if (!checkHorizontal && i !== r) return false;
    }

    // проверка по вертикали
    let lineVertical = '';
    for (let t = 0; t < 9; t++) {
      lineVertical += chess[r][t];
    }
    const checkVertical = lineVertical.includes(String(num));
    // if (!(checkVertical) === false) return false

    for (let i = 0; i < size; i++) {
      if (!checkVertical && i !== c) return false;
    }

    // проверка в квадрате
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;
    for (let i = boxRow; i < boxRow + boxSize; i += 1) { /** проверка по всему сектору */
      for (let j = boxCol; j < boxCol + boxSize; j += 1) { /** делаем 2 вложенных цикла */
        if (chess[i][j] === num && i !== r && j !== c) { /** проверяем текущую позицию */
          return false;
        }
      }
    }

    return true;
  }

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
  return board;
}

console.table(solve(str));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
