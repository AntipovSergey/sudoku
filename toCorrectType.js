function toCorrectType(boardString) {
  const board = [];
  let string = boardString;
  while (string.length > 7) {
    board.push(string.split('', 9));
    string = string.slice(9);
  }
  return board;
}

module.exports = {
  toCorrectType,
}