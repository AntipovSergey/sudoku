let board = [1, 3, 3, 6, 2];

function searchInRow(board) {
  let sorted = board.sort((x, y) => x - y);
  for (let i = 0; i < sorted.length; i++)
    if (sorted[i] == sorted[i + 1]) {
      return false;
    } else {
      return true;
    }
}

console.log(searchInRow(board));
