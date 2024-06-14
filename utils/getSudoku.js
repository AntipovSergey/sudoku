const fs = require("fs");

const sudokuIndex = process.argv[2];

function getSudoku() {
  return fs.readFileSync("../puzzles.txt", "utf-8").trim().split("\n")[
    sudokuIndex
  ];
}

module.exports = {
  getSudoku,
};
