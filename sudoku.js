/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) { }

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) { }

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function toArr(str) {
  const arrBoard = [];

  for (let i = 0; i < str.length; i += 9) {
    arrBoard.push(str.slice(i, i + 9).split(''));
  }

  return arrBoard;
}

function rotateArr(arr) {
  const row = arr.length;
  const col = arr[0].length;

  const rotate = [];

  for (let i = 0; i < col; i += 1) {
    rotate.push([]);
    for (let j = 0; j < row; j += 1) {
      rotate[i].push(arr[j][i]);
    }
  }

  return rotate;
}

function searchEmpty(arr) {
  const arrCol = rotateArr(arr);
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let y = 0; y < arr.length; y += 1) {
    for (let x = 0; x < arr.length; x += 1) {
      if (arr[y][x] === '-') {
        const row = nums.filter((el) => !arr[y].includes(el));
        const col = nums.filter((el) => !arrCol[y].includes(el));
        arr[y][x] = `${row.find((el) => !col.includes(el)) || Math.floor(Math.random() * 10)}`;
        // const podhod = checkRow(arr, x, y);
        // const newPodhod = checkCol(arrCol, x, y, podhod);
      }
    }
  }

  return arr;
}

const arr = toArr(str);

console.log(searchEmpty(arr));
