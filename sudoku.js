/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 * возвращаем 2мерный массив
 */
function solve(boardString) {

  const board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    let arr = [];
    for (let j = 0; j < 9; j += 1) {
      arr.push(boardString[j + i]);
    };
    board.push(arr);
  };
  return board;
}

// console.log('20==',solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 * возвращает true or false
 */
function isSolved(board) {
  const set = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //проверяем строки на дубликаты
  for (let i = 0; i < 9; i++) {
    // console.log('31==',board[i]);
    let row = board[i];
    if (row.filter((el, index) => row.indexOf(el) === index).length < 9) return false;
  };

  //проверяем столбцы на дубликаты

  for (let j = 0; j < 9; j++) {
    let column = [];
    for (let i = 0; i < 9; i++) {
      column.push(board[i][j])
    };
    // console.log('44==', column);

    if (column.filter((el, index) => column.indexOf(el) === index).length < 9) return false;
  };


  //проверяем квадраты на дубликаты
  let abc = [];
  let count = 0
  for (let m = 0; m <= 6; m += 3) {
    for (let k = 0; k <= 6; k += 3) {
      let square = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          square.push(board[i + m][j + k]);
        };
      };
      //уровень квадрата
      if (square.filter((el, index) => square.indexOf(el) === index).length < 9) return false;

    };
  };

  return true;
};
const wrongSudoku = '123456789321654987123456789123456789123456789123456789123456789123456789123456789'
const rigthSudoku = '123456789456789123789123456234567891567891234891234567345678912678912345912345678'
console.log(isSolved(solve(rigthSudoku)));
// console.log(isSolved(solve(wrongSudoku)));


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
