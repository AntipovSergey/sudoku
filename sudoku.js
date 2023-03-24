/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

  const size = 9;

  function stringToArray(string) {
    const sudokuArr = [];
    for (let i = 0; i < sudokuString.length; i += size) {
      const subString = sudokuString.slice(i, i + size).split('');
      sudokuArr.push(subString);
    }
    return sudokuArr;
  }


  function solve() {
    const currPos = findEmpty(board);

    if (currPos == null) {
      return true;
    }
    for (let i = 0; i <= size; i++) {
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
  }
}






































const size = 9;
const boxSize = 3;

const findEmpty = (board) => {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (board[r][c] === "-") {
        return [r, c];
      }
    }
  }
  return null;
};
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  return board.map((el) => el.map((el)=> +el))
}


// // Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
