console.log('Ghbjkkl');
// в solve(board) -
// 1. найти пустую ячейку
// 2. подставить число и провести проверку
// 3. вернуть решеный борд

// isSolved(board, который вернулся из ф-ции solve)

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const fs = require('fs');
  let sudokuBaza = fs.readFileSync('./puzzles.txt', 'utf-8');
  sudokuBaza = sudokuBaza.split('\n');
  // console.log(sudokuBaza);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // console.table(boradsudoku);

  for (let index = 0; index <= 2; index++) {
    const boradsudoku = prettyBoard(sudokuBaza[index]);
    for (let row = 0; row < boradsudoku.length; row++) {
      let accCol = '';
      for (let col = 0; col < boradsudoku.length; col++) {
        if (boradsudoku[row][col] === '-') {
          for (let rowMy = [row]; rowMy < boradsudoku.length; rowMy++) {
            accCol += boradsudoku[rowMy][col];
          }
          // console.log(accCol)
          // console.log(boradsudoku[row], boradsudoku[col])
          // console.log([row, col], index);
          // const proverka = (num, row, col) => {
          //   console.log (el)
          // for (let i=0; i < boradsudoku.length; i++){
          for (const num of numbers) {
            if (!boradsudoku[row].includes(num) && !accCol.includes(num)) {
              // console.log(1)
              boradsudoku[row][col] = num;
            }
          }
        }
      }
    }
    console.table(boradsudoku);
  }
}
console.log(solve());

// sudokuBaza.forEach((sudoku, sudokuIndex) => {

// let strings = []
// let columns = []
// for (let index = 0; index < sudoku.length; index += 9) {
// let myColumns = ''
// let myString = strings.push(sudoku.slice(index, index +9));
// for (let i = 0; i < sudoku.length; i += 9) {
// myColumns += sudoku[i]
// }
// // columns.push(myColumns)

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let row = 0; row < boradsudoku.length; row++) {
    for (let col = 0; col < boradsudoku.length; col++) {
      if (board[row][col] == '.') {
        for (let num = 0; num < numbers.length; num++) {
          if (isValid(row, col, num)) { // название функции ???
            board[row][col] = String(num);
            if (solve(boardString)) {
              return true;
            }
            board[row][col] == '-';
          }
        }
        return false;
      }
    }
  }
  return true;
}
isSolved();
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const sudokuBoard = [];
  let i = 0;
  while (i < board.length) {
    const row = board.substring(i, i + 9);
    sudokuBoard.push(Array.from(row));
    i += 9;
  }
  return sudokuBoard;
}
// [[0,1,2,3,4,5,6,7,8], [9,10,11,12,13,14,15,16,17]]

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
