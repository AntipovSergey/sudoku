/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(str) { // ==============> подстановка чисел(формирование массиов,replace) и вывод многомерного массива 
  // let sud = str
  //   .replace(/(.{9})/g, (match, n) => `${n}\n`)
  //   .split(`\n`)
  //   .filter((el) => el !== ``)
  //   .map((el) => el.split(``));


  // for (let i = 0; i < sud.length; i++) {
  //   for (let j = 0; j < sud.length; j++) {
  //     if (sud[i][j] == "-") {
  //       sud[i][j] = Math.ceil(Math.random() * 9); // замена на рандомные числа
  //     }
  //     if (sud[i][j] !== Number(sud[i][j])) {
  //       // приводим к числовому значению
  //       sud[i][j] = Number(sud[i][j]);
  //     }
  //   }
  // }

  //console.log(sud.join(`\n`).replace(/,/g,'').replace(/(.{3})/g,(match,n)=> `|${n}| `))
  // return sud
}
// Hello
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  // const solveForColumn = tMatrix(board);
  // const mainUniq = [];

  // solveForColumn.forEach((el, k) => {
  //   const uniq = [];
  //   el.forEach((e, i) => {
  //     for (let j = 0; j < i; j++) {
  //       if (solveForColumn[k][j] === solveForColumn[k][i]) {
  //         uniq.push(solveForColumn[k][i]);
  //       }
  //     }
  //   });
  //   mainUniq.push(uniq);
  // });

  // return mainUniq.reduce((sum, cur) => sum + cur.length, 0) === 0; // ==============> проверка на условие игры(в рамках квадрата/стобца/строки)

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) { 
//   return board
//     .join(`\n`)
//     .replace(/,/g, "")
//     .replace(/(.{3})/g, (match, n) => `|${n}| `); 
 }


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
