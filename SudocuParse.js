function sudokuParse(string) {
  const resultPuzzle = [[], [], [], [], [], [], [], [], []];
  const puzzle = string.split('');
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[0] != '\n') {
        resultPuzzle[i][j] = parseFloat(puzzle.shift());
        if (isNaN(resultPuzzle[i][j])) resultPuzzle[i][j] = 0;
      }
    }
  }
  return resultPuzzle;
}
module.exports = {
  sudokuParse,
};
