const string = '---------------------------------------------------------------------------------';
  function boardString(string) {
    const board = [];
    for (let i = 0; i < string.length; i += 9) {
      const arr = [];
      for (let j = 0; j < 9; j += 1) {
        arr.push(string[j + i]);
      }
      board.push(arr);
    }
    return board;
  }
  // console.log(boardString(string));

  function solve() {
    const board = boardString(string);
    const size = 9;
    const boxSize = 3;

    const findEmpty = (board) => {
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (board[r][c] === '-') {
            return [r, c];
          }
        }
      }
      return null;
    };

    const validate = (num, pos, board) => {
      const [r, c] = pos;
      // console.log('========;;;;', board);

      // Check rows
      for (let i = 0; i < size; i++) {
        if (board[i][c] === num && i !== r) {
          return false;
        }
      }

      // Check cols
      for (let i = 0; i < size; i++) {
        if (board[r][i] === num && i !== c) {
          return false;
        }
      }

      // Check box
      const boxRow = Math.floor(r / boxSize) * boxSize;
      const boxCol = Math.floor(c / boxSize) * boxSize;

      for (let i = boxRow; i < boxRow + boxSize; i++) {
        for (let j = boxCol; j < boxCol + boxSize; j++) {
          if (board[i][j] === num && i !== r && j !== c) {
            return false;
          }
        }
      }

      return true;
    };

    const solve_ = () => {
      const currPos = findEmpty(board);

      if (currPos === null) {
        return true;
      }
      // console.log('------------------------------');
      for (let i = 1; i < size + 1; i++) {
        const currNum = i.toString();
        const isValid = validate(currNum, currPos, board);
        // console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
        if (isValid) {
          const [x, y] = currPos;
          board[x][y] = currNum;

          if (solve_()) {
            return true;
          }

          board[x][y] = '-';
        }
      }

      return false;
    };

    solve_();
    return board;
  }


// console.table(board);
console.table(solve());

// console.log(solve('---------------------------------------------------------------------------------'));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 * возвращает true or false
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve. Массив
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку. Оставим реалиазацию на потом
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
