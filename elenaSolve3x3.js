//const [a, b] = arr

function checkSector(board, num, position) {
  const sector = 3;
  const [a, b] = position;
  const sectorRow = Math.floor(a / sector) * sector;
  const sectorCol = Math.floor(b / sector) * sector;
  for (let i = sectorRow; i < sectorRow + sector; i++) {
    for (let j = sectorCol; j < sectorCol + sector; j++) {
      if (board[i][j] === num && i !== a && j !== b) {
        return false;
      }
    }
  }
  return true;
}
//module.exports = checkSector;

