/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

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
    const numberPool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let startField = field;

    for (let i = 0; i < startField.length; i += 1) {
      startField[i].forEach((num, index) => {
        if (num === "-") {
          console.log(`${num} === "-"`); // сработает
          for (let j = 0; j < numberPool.length; j += 1) {
            console.log(`${j} пошел`);

            if (
              !sqwr.includes(numberPool[j]) &&
              !startField[i].includes(numberPool[j]) &&
              startField[0][index] !== numberPool[j] &&
              startField[1][index] !== numberPool[j] &&
              startField[2][index] !== numberPool[j]
            ) {
              console.log("if includes сработал");
              startField[i][index] = numberPool[j];
              break;
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
}
solve(boardString);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        return false;
      }
    }
  }
  return true;
}
console.log(isSolved(board));
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

const field = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

console.log(prettyBoard(field));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
