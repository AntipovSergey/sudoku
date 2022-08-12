// const {
//   rowColumnParser,
// } = require('./rowColumnParser');

// const {
//   squareParser,
// } = require('./squareParser');

function runSudoku(massSudoku) {
  let isEnd = true;
  while (isEnd) {
    let massEmpties = [];
    for (let i = 0, k = 0; i < massSudoku.length; i++) {
      for (let j = 0; j < massSudoku[i].length; j++) {
        if (!(massSudoku[i][j] >= '0' && massSudoku[i][j] <= '9')) {
          massEmpties[k] = [i, j];
          k++;
        }
      }
    }
    if (massEmpties.length < 1) {
      isEnd = false;
      continue;
    }
    break;
    // for (let i = 0; i < massEmpties.length; i++) {
    //   massSudoku = rowColumnParser(massEmpties[i], massSudoku);
    //   massSudoku = squareParser(massEmpties[i], massSudoku);
    // }
  }
  return ({mass:massSudoku, fl:1});
}

module.exports = { runSudoku };
