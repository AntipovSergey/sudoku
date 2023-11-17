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

function selectionSolution(solution, prevSoluteion = []) {
  // let result = structuredClone(prevSoluteion);
  // let resultIter = [];
  // let i = 0;
  // for (i = 0; i < solution.length; i++) {
  //   if (isSolved(resultIter)) return resultIter;
  //   if (Array.isArray(solution[i])) {
  //     resultIter = iterating();
  //   }
  // }
  // if (isSolved(resultIter)) return resultIter;
  // return result;
  // function iterating() {
  //   const k = i;
  //   let resultIterating = structuredClone(solution);
  //   const varibles = solution[i];
  //   for (let j = 0; j < varibles.length; j++) {
  //     if (isSolved(resultIterating)) {
  //       return resultIterating;
  //     }
  //     resultIterating[k] = varibles[j];

  //     resultIterating = possibleValues(resultIterating);
  //     if (isSolved(resultIterating)) {
  //       return resultIterating;
  //     }
  //     if (isAnyArrays(resultIterating))
  //       resultIterating = selectionSolution(resultIterating,solution);
  //   }
  //   return resultIterating;
  // }

  for (let i = 0; i < solution.length; i++) {
    
    result = solution;

    if (Array.isArray(solution[i])) {
      const varibles = solution[i];
      for (let j = 0; j < varibles.length; j++) {
        
        let resultIter = [];
        solution[i] = varibles[j];

        resultIter = possibleValues(solution);
        if (isSolved(resultIter)) {
          return resultIter;
        } else if (isAnyArrays(resultIter)) result = selectionSolution(resultIter, solution);

      }
      prevSoluteion[i] = varibles;
      if (!isAnyArrays(result)) return solution;
    }
  }
  return prevSoluteion;
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
