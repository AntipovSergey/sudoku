// const {
//   rowColumnParser,
// } = require('./rowColumnParser');

const {
  squareParser,
} = require('./squareParser');

function runSudoku(massSudoku) {
  const start = new Date().getTime();
  while (1) {
    let massEmpties = [];
    for (let i = 0, k = 0; i < massSudoku.length; i++) {
      for (let j = 0; j < massSudoku[i].length; j++) {
        if (massSudoku[i][j] === '-') {
          massEmpties[k] = [i, j];
          k += 1;
        }
      }
		}
		console.log(massEmpties);
    if (massEmpties.length < 1)
      break;
		for (let i = 0; i < massEmpties.length; i++) {
			// massSudoku = rowColumnParser(massEmpties[i], massSudoku));
			massSudoku = squareParser(massEmpties[i], massSudoku);
		}
    const end = new Date().getTime();
		if (end - start >= 1500)
			break;
      // return { mass: massSudoku, fl: 0 };
  }
  return { mass: massSudoku, fl: 1 };
}

module.exports = { runSudoku };
