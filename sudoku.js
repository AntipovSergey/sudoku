

function num () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        if ((findValVer(empty, arr[i]) && findValHor(empty, arr[i]))) {
            newArr[findEmpty(newArr)[0]][findEmpty(newArr)[1]] = arr[i];
            // вызов функции самой себя
        }
    return arr[i];
    }
      }

let number = num();

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  let newArr = [];
  for (let i = 0; i < boardString.length; i = i + 9) {
    newArr.push(boardString.split("").slice(i, i + 9));
  }
  // ищем пустое место
  function findEmpty(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === "-") {
          return [i, j];
        }
      }
    }
  }
  // Определеили пустое место
  let empty = findEmpty(newArr);
function num () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        if ((findValVer(empty, arr[i]) && findValHor(empty, arr[i]))) {
            newArr[findEmpty(newArr)[0]][findEmpty(newArr)[1]] = arr[i];
            // вызов функции самой себя
        }
    return arr[i];
    }
      }

let number = num();
  return findEmpty(newArr);
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
