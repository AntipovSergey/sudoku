const { sudokuParse } = require('./parser');
const { sudoku } = require('./sudoku');

// for (let i = 0; i < 15; i++) {
console.table(sudoku(sudokuParse('./sudoku-puzzles.txt', 13)));
// }

