const {
  rowColumnParser,
} = require('./rowColumnParser');

const {
  squareParser,
} = require('./squareParser');

function runSudoku(massSudoku) {
  let isEnd = true;
  //10 ctr
  const start = new Date().getTime();
  while (isEnd) {
    let massEmpties = [];
    for (let i = 0, k = 0; i < massSudoku.length; i++) {
      for (let j = 0; j < massSudoku[i].length; j++) {
        if (!(massSudoku[i][j] >= '0' && massSudoku[i][j] <= '9')) {
          massEmpties[k] = [i, j];
          k += 1;
        }
      }
    }
    if (massEmpties.length < 1) {
      break;
    }
    for (let i = 0; i < massEmpties.length; i++)
      massSudoku = squareParser(massEmpties[i], massSudoku, rowColumnParser(massEmpties[i], massSudoku));
    const end = new Date().getTime(); 
    if (end - start >= 10)
      return { mass: massSudoku, fl: 0 };
  }
  return { mass: massSudoku, fl: 1 };
}

module.exports = { runSudoku };
