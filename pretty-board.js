function paintPrettyBoard(board) {
  let strings = '';
  strings += '-------------\n';
  for (let i = 0; i < 27; i += 9) {
    strings += '|';
    strings += board.slice(i, i + 3);
    strings += '|';
    strings += board.slice(i + 3, i + 6);
    strings += '|';
    strings += board.slice(i + 6, i + 9);
    strings += '|';
    strings += '\n';
  }
  strings += '-------------\n';
  for (let i = 27; i < 54; i += 9) {
    strings += '|';
    strings += board.slice(i, i + 3);
    strings += '|';
    strings += board.slice(i + 3, i + 6);
    strings += '|';
    strings += board.slice(i + 6, i + 9);
    strings += '|';
    strings += '\n';
  }
  strings += '-------------\n';
  for (let i = 54; i < 81; i += 9) {
    strings += '|';
    strings += board.slice(i, i + 3);
    strings += '|';
    strings += board.slice(i + 3, i + 6);
    strings += '|';
    strings += board.slice(i + 6, i + 9);
    strings += '|';
    strings += '\n';
  }
  strings += '-------------\n';
  return strings;
}


module.exports = paintPrettyBoard;
