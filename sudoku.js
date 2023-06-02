/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
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

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
