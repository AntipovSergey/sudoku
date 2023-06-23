/**
 * Принимает строку с данными и конвертирует её в двумерный массив
 */
function convertString(str) {
  const arrayWithElements = str.split('');
  const chunk = 9;
  let board = [];
  for (let i = 0; i < arrayWithElements.length; i += chunk) {
    board.push(arrayWithElements.slice(i, i + chunk));
  }

  return board;
}

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const board = convertString(boardString);
  const object = {};

  board.forEach((row, i) => {
    row.forEach((el, j) => {
      if (board[i][j] === '-') object[`${i}${j}`] = [];
    });
  });

  for (const key in object) {
    let row = +key[0];
    let column = +key[1];
  
    for (let j = 0; j < 9; j += 1) {
      if (board[row][j] !== '-' && !object[key].includes(`${board[row][j]}`)) {
        object[key].push(`${board[row][j]}`);
      }
    }

    for (let i = 0; i < 9; i += 1) {
      if (board[i][column] !== '-' && !object[key].includes(`${board[i][column]}`)) {
        object[key].push(`${board[i][column]}`);
      }
    }
  }

  let check = 1;

  while (check === 1) {
    check = 0;
    for (const key in object) {
      if (object[key].length = 8) {
        board[+key[0]][+key[1]] = (45 - object[key].reduce( (acc, cur) => acc + +cur, 0)) + '';
        object[key].push(board[key[0]][+key[1]] + '');
      }
    }

    for (const key in object) {
      if (object[key].length < 9) check = 1;
    }
  }

  return board;
}

console.log(solve('-6-584917547219368891-63245278-451391593274866-4891572785132694416958723923476851'));

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
