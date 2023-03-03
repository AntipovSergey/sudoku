function checkingForEmpty(boardString) {
  for (let r = 0; r < boardString.length; r++) {
    for (let c = 0; c < boardString[c].length; c++)
      if (boardString[c] === 0) {
        return boardString[(r, c)];
      }
  }
}
