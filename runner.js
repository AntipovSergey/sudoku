// const fs = require('fs');
// const sudoku = require('./sudoku');
// const sud = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber]
    .split('');
  const newBoard = [];
  for (let i = 0; i < puzzle.length; i += 1) {
    newBoard.push(puzzle.splice(0, 9));
  }
  // console.log(newBoard);
  // eslint-disable-next-line arrow-body-style
  const arrBoard = newBoard.map((el) => {
    return el.map((elem) => {
      if (elem === '-') {
        return 0;
      } return Number(elem);
    });
  });
  return arrBoard;
}

module.exports = sudokuParse;
// console.table(sudokuParse(sud, 0));
