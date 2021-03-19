function prettyBoard(board) {
  let arr = board.split("");
  let tempArr = [];
  let sudoku = [];
  let chunkSize = 9;
  for (let i = 0; i < arr.length; i += chunkSize) {
    tempArr = arr.slice(i, i + chunkSize);
    sudoku.push(tempArr);
  }
  return sudoku;
}

console.log(
  prettyBoard(
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
  )
);

module.exports = { prettyBoard };
