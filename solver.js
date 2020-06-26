const isValid = require('./validations');
const findEmpty = require('./FindEmpty');
const front = require('./front');

const sudokuSolver = (puzzle) => {
  const emptyPos = findEmpty.FindEmpty(puzzle);
  if (!emptyPos) return true;

  for (let i = 1; i <= 9; i++) {
    if (isValid.isValid(puzzle, i, emptyPos)) {
      puzzle[emptyPos[0]][emptyPos[1]] = i;
      //   console.log(puzzle);
      if (sudokuSolver(puzzle)) {
        return true;
      }
      puzzle[emptyPos[0]][emptyPos[1]] = 0;
    //   console.log(puzzle);
    }
  }
  return false;
};
module.exports = { sudokuSolver, front };
