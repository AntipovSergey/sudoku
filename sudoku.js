/* eslint-disable no-labels */
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

let boardString =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

function solve(boardString) {
  const arr = boardString.split("");
  const board = [];
  const sqwrs = [];

  for (let i = 0; i < 9; i++) {
    board.push(arr.slice(0, 9));
    arr.splice(0, 9);
  }

  let a = 0;
  let b = 3;
  for (let g = 0; g < 3; g++) {
    let x = 0;
    let y = 3;
    for (let h = 0; h < 3; h++) {
      let nmbrs = [];
      for (let i = a; i < b; i++) {
        for (let j = x; j < y; j++) {
          nmbrs.push(board[i][j]);
        }
      }
      sqwrs.push(nmbrs);
      x += 3;
      y += 3;
    }
    a += 3;
    b += 3;
  }

  function compliteSudocu(field, sqwr) {
    const numberPool = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let startField = field;

    for (let i = 0; i < startField.length; i += 1) {
      startField[i].forEach((num, index) => {
        if (num === "-") {
          // console.log(`${num} === "-"`); // сработает
          // eslint-disable-next-line no-restricted-syntax
          slovo: for (let j = 0; j < numberPool.length; j += 1) {
            // console.log(`${j} пошел`);

            if (
              !startField[i].includes(numberPool[j]) &&
              startField[0][index] !== numberPool[j] &&
              startField[1][index] !== numberPool[j] &&
              startField[2][index] !== numberPool[j]
            ) {
              for (let h = 0; h < sqwr.length; h++) {
                if (sqwr[h].includes(num)) {
                  console.log(
                    `${startField[i].indexOf(num)} nahidtsya v kvadrat ${h}`
                  );
                  if (!sqwr[h].includes(numberPool[j])) {
                    startField[i][index] = numberPool[j];
                    break slovo;
                  }
                }
              }
              // console.log("if includes сработал");
              // startField[i][index] = numberPool[j];
            }
          }
        }
      });
    }

    for (element of field) {
      if (!element.includes("-")) return startField;
      return startField;
    }
  }

  compliteSudocu(board, sqwrs);
  return board;
}

console.log(solve(boardString));
// console.log(isSolved(solve(boardString)));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 1; i <= 9; i++) {
    if (board.indexOf(i) === -1) {
      return false;
    }
  }

  return true;
}

console.log(isSolved(solve(boardString)));
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let result = [];
  for (let i = 0; i < board.length; i += 1) {
    let newArray1 = board[i].slice(0, 3);
    if (i === 0) newArray1.unshift("\n");
    if (i === 3 || i == 6) newArray1.unshift("---------------------", "\n");
    newArray1.push(
      "|",
      board[i].slice(3, 6).join(" "),
      "|",
      board[i].slice(6).join(" "),
      "\n"
    );
    result.push(newArray1.join(" "));
  }

  return result.join(" ");
}
console.log(prettyBoard(solve(boardString)));
// const field = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];

// console.log(isSolved(solve(boardString)));
// console.log(prettyBoard(solve(boardString)));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
