module.exports = { sudokuSolver };

const sudokuSolver = (puzzle) => {
  emptyPos = findEmpty(puzzle);
  if (!emptyPos) return true;

  for (let i = 1; i <= 9; i++) {
    if (isValid(puzzle, i, emptyPos)) {
      puzzle[emptyPos[0]][emptyPos[1]] = i;
      if (solver(puzzle)) {
        return true;
      }
      puzzle[emptyPos[0]][emptyPos[1]] = '-';
    }
  }
  return false;
};
