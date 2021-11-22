const fs = require('fs');
const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const sudokuParse = require('./runner');
const board2 = sudokuParse(content, 1);
const empty = require('./empty');
const arrNew = empty(board2);
const checkGV = require('./test');
const numb = checkGV(board2, arrNew[0], arrNew[1]);

function checkSector(board, num, pos) {
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
// console.log(checkSector(board2, numb, arrNew));

module.exports = checkSector;
