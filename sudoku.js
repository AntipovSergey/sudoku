/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

 function makeField(boardString) {
    const board = [];
    const arr = boardString.split('');
    for (let i = 0; i < arr.length; i++) {
      board.push(arr.splice(0, 9));
    }
    return board;
  }

  function searchNotNum(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return 0; 
  }
function validator(num, pos, board) {
  const [r, c] = pos;

  // Проверка строк
  for (let i = 0; i < 9; i++) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  // Проверка столбцов
  for (let i = 0; i < 9; i++) {
    if (board[r][i] === num && i !== c) {
      return false;
    }
  }
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

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

//Добавление веток