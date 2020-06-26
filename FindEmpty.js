function FindEmpty(puzzle) {
  const position = [];
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (puzzle[i][j] === 0) {
        position[0] = i;
        position[1] = j;
        return position;
      }
    }
  }
  return false;
}

module.exports = {
  FindEmpty,
};
