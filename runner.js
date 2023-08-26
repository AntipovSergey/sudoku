const {
    read,
    prettyBoard,
} = require('./sudoku.js');

function runner() {
    const value = Number(process.argv[2]);
    prettyBoard(read(value));
}
runner();
