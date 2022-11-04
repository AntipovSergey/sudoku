/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
// const proc = process.argv[2];
// console.log(proc);

function solve(boardString) {
  const resultStr = [];
  for (let i = 0; i < boardString.length; i += 9) {
    resultStr.push(boardString.slice(i, i + 9));
  }
  const boardNumb = resultStr.map((el) => el.split('')).map((el) => el.map((cur) => +cur));
  for (let i = 0; i < boardNumb.length; i++) {
    for (let j = 0; j < boardNumb.length; j++) {
      if (isNaN(boardNumb[i][j])) {
        boardNumb[i][j] = 0;
      }
    }
  }
  const example = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.table(boardNumb);
}
console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
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
