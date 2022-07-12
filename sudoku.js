/* eslint-disable max-len */
const fs = require("fs");

function getPuzzle(sudoNum) {
  const puzzles = fs
    .readFileSync("./puzzles.txt", "utf-8")
    .split("\n")
    .filter((line) => line !== "");

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = Number(process.argv[2]) || sudoNum || 1;
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = puzzles[puzzleNumber - 1];

  console.log(`Решаем судоку №${puzzleNumber}:`);
  // console.log(puzzle, '\n');
  return puzzle;
}

function getArrayFromString(string) {
  const arrayFromString = string.split("");
  const size = 9;
  const subarray = [];
  for (let i = 0; i < arrayFromString.length / size; i++) {
    subarray[i] = arrayFromString.slice(i * size, i * size + size);
  }

  return subarray;
}

// console.log(getArrayFromString(getPuzzle()));

function solve(board) {
  function getRowColIndex(sudo) {
    for (let r = 0; r < sudo.length; r++) {
      for (let c = 0; c < sudo[r].length; c++) {
        if (sudo[r][c] === "-") {
          return [r, c];
        }
      }
    }
    return true;
  }
  function solveCheck(num, pos, sudo) {
    const [r, c] = pos;
    // Перебор проверка строк
    for (let i = 0; i < 9; i++) {
      if (sudo[i][c] === num && i !== r) {
        // сравнение каждого элемента с числом от 1 до 9, кроме пустого
        return false;
      }
    }
    // Перебор проверка столбцов
    for (let i = 0; i < 9; i++) {
      if (sudo[r][i] === num && i !== c) {
        // сравнение каждого элемента с числом от 1 до 9, кроме пустого
        return false;
      }
    }
    // Проверка секции
    const sectionRow = Math.floor(r / 3) * 3;
    const sectionCol = Math.floor(c / 3) * 3; // ищем правый верхний угол секции 3х3
    for (let i = sectionRow; i < sectionRow + 3; i++) {
      // только 3 иттерации по строке секции
      for (let k = sectionCol; k < sectionCol + 3; k++) {
        // только 3 иттерации по столбцу секции
        if (sudo[i][k] === num && i !== r && k !== c) {
          // сравнение каждого элемента секции с числом от 1-9, кроме пустого
          return false;
        }
      }
    }
    return true;
  }

  function sudoSolve() {
    const emptySpace = getRowColIndex(board);
    if (emptySpace === true) {
      return true;
    }
    for (let i = 1; i <= 9; i++) {
      const candidate = i.toString();
      const checkResult = solveCheck(candidate, emptySpace, board);
      // console.log(emptySpace, candidate, checkResult);
      if (checkResult) {
        const [r, c] = emptySpace;
        board[r][c] = candidate;
        if (sudoSolve()) {
          return true;
        }
        board[r][c] = "-";
      }
    }
    return false;
  }
  sudoSolve();
  return board;
}

console.table(getArrayFromString(getPuzzle()));
console.table(solve(getArrayFromString(getPuzzle())));

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "-") {
        return false;
      }
    }
  }
  return true;
}

function prettyBoard(board) {
  const emptyStr = "---------------------------------";
  const arr = board.map((el) => el.toString().split(",").join(" | "));
  arr.splice(3, 0, emptyStr);
  arr.splice(7, 0, emptyStr);

  const finalArr = arr.toString().split(",").join("\n");
  return finalArr;
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
  getPuzzle,
  getArrayFromString,
};
