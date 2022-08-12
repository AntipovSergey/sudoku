const {
  rowColumnParser,
} = require('./rowColumnParser');

const {
  squareParser,
} = require('./squareParser');

function runSudoku(massSudoku) {
  const start = new Date().getTime();
  while (massSudoku.flat(1).includes('-')) {
    let candid;
    for (let i = 0; i < massSudoku.length; i += 1) {
      for (let j = 0; j < massSudoku[i].length; j += 1) {
        if (massSudoku[i][j] === '-') {
          candid = rowColumnParser([i, j], massSudoku);
          candid = squareParser([i, j], massSudoku, candid);
          if (candid.length === 1) {
            massSudoku[i][j] = candid[0];
          }
        }
      }
    }
    const end = new Date().getTime();
    if (end - start >= 15) {
      return { mass: massSudoku, fl: 0 };
    }
  }
  return { mass: massSudoku, fl: 1 };
}

module.exports = { runSudoku };