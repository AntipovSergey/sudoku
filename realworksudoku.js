const fs = require("fs");
const findEmpty = require("./findEmpty");
const validate = require("./validate");
function parser(filename, puzzle) {
  let sudoku = fs.readFileSync(filename, "utf8").split("\n")[puzzle - 1];
  sudoku = sudoku.match(/(\S{9})/g).map((el) => (el = el.split("")));
  return sudoku;
}
let filename = "./sudoku-puzzles.txt";

function solver(board) {
  const boardSize = 9;

 // Let's start recursion to add numbers in empty spaces

  function recursion() {
    const currentPos = findEmpty(board);
    if (currentPos === null) {
      return true;
    }
    for (let i = 1; i < boardSize + 1; i += 1) {
      let currentNum = i.toString();
      const isValidate = validate(currentNum, currentPos, board);
      if (isValidate) {
        const [row, col] = currentPos;
        board[row][col] = currentNum;
        if (recursion()) {
          return true;
        }
        board[row][col] = "-";
      }
    }
    return false;
  }
  recursion();
  return board;
}
console.table(solver(parser(filename, 14)));
