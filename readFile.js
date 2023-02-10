const sudoku = require("./sudoku");
const fs = require("fs");

function readFile() {
  const readFileSudoku = fs.readFileSync("./puzzles.txt", "utf-8").split("\n");
  const firstSudoku = readFileSudoku[0].split("");
  const res = [];
  for (let i = 0; i < firstSudoku.length; i += 9) {
    const chunk = firstSudoku.slice(i, i + 9);
    res.push(chunk);
  }
  return res;
}

module.exports = readFile;
