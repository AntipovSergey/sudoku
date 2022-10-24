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
  return line
    .match(/[\d-]{9}/g)
    .map((el) => el.split("").map((el) => (el === "-" ? null : Number(el))));
}

// Разбиение общего файла на строки судок
function splitBoards(fileData) {
  return fileData
    .trim()
    .split("\n")
    .map((el) => el.trim());
}

// Проверка валидности доски
function validate(board) {
  throw new Error('non implemented exception');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).

module.exports = {
  solve,
  isSolved,
  prettyBoard,
  parseBoard,
  splitBoards,
  validate,
};
