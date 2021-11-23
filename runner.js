function sudokuParse(cont, puzzleNumber = 0) {
  const puzzle = cont.replaceAll('-', '0').split('\n')[puzzleNumber].split('');
  const tempArray = [];
  let num = 9;
  for (let i = 0; i < 81; i += 9) {
    tempArray.push(puzzle.slice(i, num));
    num += 9;
  }
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length; j++) {
      tempArray[i][j] = Number(tempArray[i][j]);
    }
  }
  return tempArray;
}

module.exports = sudokuParse;
