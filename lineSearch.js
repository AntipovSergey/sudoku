const { makeBoard } = require('./board');

const boardStr =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
const candidates = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const testBoard = makeBoard(boardStr);
const coordinates = [0, 4];

function lineSearch(board, candidates, coordinates) {
  let survivCandidates = [];

  for (let i = coordinates[0]; i < board.length; i++) {
    let boardOne = board[i];

    for (let j = 0; j < candidates.length; j++) {
      if (!boardOne.includes(candidates[j])) {
        survivCandidates.push(candidates[j]);
      }
    }
    return survivCandidates;
  }
}
console.table(testBoard);
console.log(coordinates);
console.log(lineSearch(testBoard, candidates, coordinates));
