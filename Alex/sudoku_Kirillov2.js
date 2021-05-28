function searchInColumn(board, ArrLength) {
  let newArr = [];
  for (let i = 0; i < board.length; i++) {
    newArr.push([]);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < ArrLength; j++) {
      newArr[j].push(board[i][j]);
    }
  }

  let sorted = newArr.sort((x, y) => x - y);
  for (let i = 0; i < sorted.length; i++)
    if (sorted[i] == sorted[i + 1]) {
      return false;
    } else {
      return true;
    }
}
