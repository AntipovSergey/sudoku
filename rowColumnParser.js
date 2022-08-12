function rowColumnParser(index, puzzle) {
  const candidates = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = index[0]; i < 9; i += 1) {
    if (candidates.indexOf(puzzle[index[0]][i]) !== -1) {
      candidates.splice(candidates.indexOf(puzzle[index[0]][i]), 1);
    }
  }

  for (let j = index[1]; j < 9; j += 1) {
    if (candidates.indexOf(puzzle[j][index[1]]) !== -1) {
      candidates.splice(candidates.indexOf(puzzle[j][index[1]]), 1);
    }
  }
  return candidates;
}

module.exports = { rowColumnParser };
