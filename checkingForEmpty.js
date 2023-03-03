function checkingForEmpty(boardString) {
  for (let r = 0; r < boardString.length; r++) {
    for (let c = 0; c < boardString[r].length; c++)
      if (boardString[r][c] === "-") {
        return [r, c];
      }
  }
}
