/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

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

// Парсинг доски
function parseBoard(line) {
  let pars = line.split("").map((el) => (el === "-" ? null : Number(el)));
  const result = [];
  const count = 9;
  for (let i = 0, e = count; i < pars.length; i += count, e += count)
    result.push(pars.slice(i, e));
  return result;
}

// Разбиение общего файла на строки судок
function splitBoards(fileData) {
  return fileData
    .join()
    .split("\n")
    .map((el) => el.trim());
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).

module.exports = {
  solve,
  isSolved,
  prettyBoard,
  parseBoard,
  splitBoards,
};
