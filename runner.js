const { getSudocu, checkSqure } = require("./sudoku");
const sudoc = getSudocu();
console.log(checkSqure(1, 2, sudoc));
