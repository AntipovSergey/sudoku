/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 * возвращаем 2мерный массив
 */
function solve(boardString) {
  const board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    const arr = [];
    for (let j = 0; j < 9; j += 1) {
      arr.push(boardString[j + i]);
    }
    board.push(arr);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
        let newInteger = Math.floor(1 + Math.random() * 9).toString();
        while (board[i].includes(newInteger)) {
          newInteger = Math.floor(1 + Math.random() * 9).toString();
        }
        board[i][j] = newInteger;
      }
    }
  }
  return board;
}

console.log('20==', solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

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

