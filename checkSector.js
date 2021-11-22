function checkSector(num, pos, board) {
  const sector = 3;

  const [r, c] = pos;

  const sectorRow = Math.floor(r / sector) * sector;
  const sectorCol = Math.floor(c / sector) * sector;

  for (let i = sectorRow; i < sectorRow + sector; i++) {
    for (let j = sectorCol; j < sectorCol + sector; j++) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false;
      }
    }
  }

  return true;
}
