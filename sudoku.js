const { table } = require("console");
const { arrayBuffer } = require("stream/consumers");
const fs = require('fs');
const { join } = require("path/posix");
const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\n').slice(0, 15);
const strPzl1 = sudokuPuzzles[0]
const strPzl2 = sudokuPuzzles[1]
const strPzl3 = sudokuPuzzles[2]
const strPzl4 = sudokuPuzzles[3]
const strPzl5 = sudokuPuzzles[4]
const strPzl6 = sudokuPuzzles[5]
const strPzl7 = sudokuPuzzles[6]
const strPzl8 = sudokuPuzzles[7]
const strPzl9 = sudokuPuzzles[8]
const strPzl10 = sudokuPuzzles[9]
const strPzl11 = sudokuPuzzles[10]
const strPzl12 = sudokuPuzzles[11]
const strPzl13 = sudokuPuzzles[12]
const strPzl14 = sudokuPuzzles[13]
const strPzl15 = sudokuPuzzles[14]


const board = createTable(strPzl15);

function solve() {
  let empty = searchEmptyCell(board)
  if (empty === null) {
    return true;
  }
  for (let i = 1; i <= 9; i++) {
    const numI = i.toString()
    let validColumn = searchNumberInColumn(board, numI, empty)
    let validRow = searchNumberInRow(board, numI, empty)
    let validSquare = searchNumberInSquare(board, numI, empty)
    if (validColumn && validRow && validSquare) {
      const [row, column] = empty;
      board[row][column] = numI;
      if (solve()) {
        return true
      }
      board[row][column] = '-';
    }
  }
  return false;
}
solve();
// console.table(board)


function searchEmptyCell(table) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (table[i][j] === '-') {
        return [i, j]
      }
    }
  }
  return null;
}

function searchNumberInColumn(table, number, emptyInRow) {
  const [row, column] = emptyInRow;
  for (let i = 0; i < table.length; i++) {
    if (table[row][i] === number && i !== column) {
      return false;
    }
  }
  return true;
}


function searchNumberInRow(table, number, emptyInRow) {
  const [row, column] = emptyInRow;
  for (let i = 0; i < table.length; i++) {
    if (table[i][column] === number && i !== row) {
      return false
    }
  }
  return true;
}


function searchNumberInSquare(table, number, emptyInRow) {
  const [row, column] = emptyInRow;
  const hor = Math.floor(row / 3) * 3;
  const vert = Math.floor(column / 3) * 3;
  for (let k = hor; k < hor + 3; k++) {
    for (let l = vert; l < vert + 3; l++) {
      if (table[k][l] === number && k !== row && l !== column) {
        return false
      }
    }
  }
  return true;
}


function createTable(input) {
  const line = [];
  for (let i = 0; i < input.length; i += 9) {
    const subLine = [];
    for (let j = i; j < i + 9; j++) {
      subLine.push(input[j])
    }
    line.push(subLine)
  }
  return line;
}


function isSolved(board) {
if (solve()){
  return "The board was solved!";
} return "The board wasn't solved :(";
}
console.log(isSolved());


function prettyBoard(table) {
table = board;
let boardSudoku = '';
const sudoku = table.flat().join(' ')
for (let i = 0; i < sudoku.length; i+=18){
boardSudoku += sudoku.slice(i, i + 18) + '\n'
}
return boardSudoku
}
console.log(prettyBoard())

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
