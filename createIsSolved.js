function isSolved(solve) {
  for (let i = 0; i < solve.length; i++) {
    for (let j = 0; j < solve[i].length; j++) {
      if (solve[i][j] !== arr[i][j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = { isSolved };