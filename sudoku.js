/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  // ==============> подстановка чисел(формирование массиов,replace) и вывод многомерного массива
  function sol(arrStr) {
    const arr = [];
    const ran = Math.ceil(Math.random() * 9);

    arrStr.forEach((element, i) => {
      if (element === "-" && !arrStr.includes(ran) && !arr.includes(ran)) {
        arr.push(ran);
      } else {
        arr.push(element);
      }
    });

    return arr;
  }

  //Принимает ф-ю solve и с помощью рекурсии, аполняет i-я горизонталь судоку
  function full(f) {
    if (f.includes("-")) {
      return full(sol(f));
    } else {
      return f;
    }
  }

  //Заполняет всё судоку с помощью ф-ции full(f)
  const res = [];
  boardString.forEach((el) => {
    res.push(full(el));
  });
  return res;
}

// Hello
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  // ==============> проверка на условие игры(в рамках квадрата/стобца/строки)
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  // ==============> конечный вариант для экспорта (оформление)
  return board
    .join(`\n`)
    .replace(/,/g, "")
    .replace(/(.{3})/g, (match, n) => `|${n}| `);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
