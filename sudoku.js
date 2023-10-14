const fs = require("fs");
const { possibleValues } = require("./possibleValues");
// const { getRendering } = require("./getRendering");
const { isAnyArrays } = require("./isAnyArrays.js");
// const {selectionSolution} = require('./selectionSolution.js')

function read(filename) {
  let result = [];
  const puzzles = fs.readFileSync(__dirname + filename, "utf8");
  result = puzzles
    .replaceAll("-", 0)
    .split("\n")
    .map((row) =>
      row
        .trim()
        .split("")
        .map((el) => Number(el))
    );
  return result.slice(0, -1);
}

function selectionSolution(solution) {
  let result = structuredClone(solution);
  let i = 0;
  for (i = 0; i < solution.length; i++) {
    if (Array.isArray(solution[i])) {
      result = iterating();
    }
  }
  return result;
  function iterating() {
    const k = i;
    let resultIterating = structuredClone(solution);
    const varibles = solution[i];
    for (let j = 0; j < varibles.length; j++) {
      result[k] = varibles[j];

      resultIterating = possibleValues(result);
      if (isSolved(resultIterating)) {
        return resultIterating;
      }
      if (isAnyArrays(resultIterating))
        resultIterating = selectionSolution(resultIterating);
    }
    return result;
  }

  // for (let i = 0; i < solution.length; i++) {
  //   result = [];

  //   if (Array.isArray(solution[i])) {
  //     const varibles = solution[i];
  //     for (let j = 0; j < varibles.length; j++) {
  //       result[i] = varibles[j];

  //       result = possibleValues(result);
  //       if (isSolved(result)) {
  //         return result;
  //       } else if (isAnyArrays(result)) result = selectionSolution(result, solutionNow);

  //     }
  //     solution[i] = varibles;
  //     if (!isAnyArrays(result)) return solution;
  //   }
  // }
  // return solution;
}

function solve(puzle) {
  let solutionRight = false;
  let solution = possibleValues(puzle);
  solutionRight = isSolved(solution);
  prettyBoard(solution);
  if (!solutionRight) {
    solution = selectionSolution(solution);
  }
  console.log(isSolved(solution));
  prettyBoard(solution);
}

function isSolved(board) {
  if (board.length !== 81) {
    return false; // Проверяем, что массив имеет 81 элемент
  }

  if (isAnyArrays(board)) {
    return false;
  }
  const N = 9;

  // Проверка строки
  const isRowValid = (row, board) => {
    const set = new Set();
    for (let i = 0; i < N; i++) {
      const num = board[row * N + i];
      if (num !== "." && set.has(num)) {
        return false;
      }
      set.add(num);
    }
    return true;
  };

  // Проверка столбца
  const isColValid = (col, board) => {
    const set = new Set();
    for (let i = 0; i < N; i++) {
      const num = board[col + i * N];
      if (num !== "." && set.has(num)) {
        return false;
      }
      set.add(num);
    }
    return true;
  };

  // Проверка блока 3x3
  const isBlockValid = (startRow, startCol, board) => {
    const set = new Set();
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        const num = board[i * N + j];
        if (num !== "." && set.has(num)) {
          return false;
        }
        set.add(num);
      }
    }
    return true;
  };

  // Проверка всего поля судоку
  for (let i = 0; i < N; i++) {
    if (
      !isRowValid(i, board) ||
      !isColValid(i, board) ||
      !isBlockValid(Math.floor(i / 3) * 3, (i % 3) * 3, board)
    ) {
      return false;
    }
  }

  return true;
}

function prettyBoard(puzzle) {
  let result = "";
  const index = "";
  for (let i = 0; i < puzzle.length; i++) {
    result += `${puzzle[i]}  `;
    // index += i+'  ';
    if ((i + 1) % 9 === 0) {
      // result += '     '+index;
      // index = '';
      result += "\n\n";
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard,
};
