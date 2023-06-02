/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  


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

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
