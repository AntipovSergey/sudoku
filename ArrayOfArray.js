function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content
    .replaceAll('-', '0')
    .split('\n')
    [puzzleNumber].split('');

  let tempArray = [];
  let num = 9;

  for (let i = 0; i < 81; i += 9) {
    tempArray.push(puzzle.slice(i, num));
    num += 9;
  }

  return tempArray.map((el) => el.map((el) => Number(el)));
}
