const {
    read,
    solve,
    isSolved,
    prettyBoard,
} = require('./sudoku.js');

const readed = read(4);
const solved = isSolved(readed);
const pretty = prettyBoard(solve(readed));
if (solved) {
    console.log(prettyBoard(solve(readed)));
}
