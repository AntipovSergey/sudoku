function solve(boardString) {
  let array = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      array[i][j] = boardString[i * 9 + j];
    }
  }
  return array;
}
boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-';
console.log(solve(boardString));
