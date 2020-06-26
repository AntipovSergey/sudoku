function ReturnString(puzzle) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      puzzle[i][j] = puzzle[i][j] + "";
    }
  }
}
