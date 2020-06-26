const isValid = require("./validations");
const findEmpty = require("./FindEmpty");

const sudokuSolver = (puzzle) => {
  const emptyPos = findEmpty.FindEmpty(puzzle);
  if (!emptyPos) return true;

  for (let i = 1; i <= 9; i++) {
    if (isValid.isValid(puzzle, i, emptyPos)) {
      puzzle[emptyPos[0]][emptyPos[1]] = i;
      if (sudokuSolver(puzzle)) {
        return true;
      }
      puzzle[emptyPos[0]][emptyPos[1]] = 0;
    }
  }
  return false;
};
module.exports = { sudokuSolver };
