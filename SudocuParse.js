function sudokuParse(string) {
  let resultPuzzle = [[], [], [], [], [], [], [], [], []];
  let puzzle = string.split("");
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[0] != "\n") resultPuzzle[i][j] = puzzle.shift();
    }
  }
  return resultPuzzle;
}
