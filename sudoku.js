function solve(boardString) {
  const bordArray = boardString.split('');
  const size = 9;
  const subarray = [];
  for (let i = 0; i < Math.ceil(bordArray.length / size); i += +1) {
    subarray[i] = bordArray.slice(i * size, i * size + size);
  }
  return subarray;
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
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
