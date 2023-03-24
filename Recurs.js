function solveRecursive() {
  const currPos = findEmpty(solutionBoard);

  if (currPos === null) {
    return true;
  }
  for (let index = 1; index < SIZE + 1; index++) {
    const currNum = index.toString();
    const isValid = validate(currNum, currPos, solutionBoard);
    if (isValid) {
      const [x, y] = currPos;
      solutionBoard[x][y] = currNum;

      if (solveRecursive()) {
        return true;
      }

      solutionBoard[x][y] = "-";
    }
  }

  return false;
}

solveRecursive();
