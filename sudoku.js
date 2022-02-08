const fs = require('fs');
const { kill } = require('process');
const sudoku = fs.readFileSync('./sudoku-puzzles.txt', 'UTF8');

function toPuzzle(content, puzzleNumber = 0) {
  return content.split('\n')[puzzleNumber];
}

let puzzle = toPuzzle(sudoku, 13);

function generateBoard(str) {
  let arr = [];
  for (let i = 0; i < str.length; i += 9) {
    arr.push(str.slice(i, i + 9).split(''));
  }
  return arr;
};

function getEmptyCell(board) {
  let x;
  let y;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
        x = i;
        y = j;
        return [x, y];
      };
    };
  };
};

function isNotSolved(board) {
  for (let row = 0; row < board.length; row++) {
    if (board[row].includes('-')) return true;
  }
}

function getAvailableSolutions(board, cell) {
  let solution = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  solution = solution.filter((el) => !board[cell[0]].includes(el));
  let colon = [];
  for (let p = 0; p < board.length; p++) {
    colon.push(board[p][cell[1]]);
  }
  solution = solution.filter((el) => !colon.includes(el));

  let qr = Math.floor(cell[0] / 3) * 3;
  let qc = Math.floor(cell[1] / 3) * 3;
  let square = board[qr].slice(qc, qc + 3).concat(board[qr + 1].slice(qc, qc + 3),
    board[qr + 2].slice(qc, qc + 3));
  solution = solution.filter((el) => !square.includes(el));
  return solution;
};

function isSolved(board) {
  for (let row = 0; row < board.length; row++) {
    if ((board[row].reduce((acc, val) => Number(acc) + Number(val), 0)) != 45) {
      return false;
    }
  }
  for (let col = 0; col < board.length; col++) {
    let sum = 0;
    for (let i = 0; i < board.length; i++) {
      sum += Number(board[i][col]);
    }
    if (sum != 45) return false;
  }
  for (let qr = 0; qr < board.length; qr += 3) {
    for (let qc = 0; qc < board[qr].length; qc += 3) {
      let square = board[qr].slice(qc, qc + 3).concat(board[qr + 1].slice(qc, qc + 3),
        board[qr + 2].slice(qc, qc + 3));
      if (square.reduce((acc, val) => Number(acc) + Number(val), 0) != 45) {
        return false;
      }
    }
  }
  return true;
}

function prettyBoard(board) {
  return board.join('\n').replace(/,/gi, ' ');
}

function recurseSudoku(board) {
  if (isNotSolved(board)) {
    let cell = getEmptyCell(board);
    let solutions = getAvailableSolutions(board, cell);
    for (let i = 0; i < solutions.length; i++) {
      board[cell[0]][cell[1]] = solutions[i];
      recurseSudoku(board);
      if (!isNotSolved(board)) return board;
      board[cell[0]][cell[1]] = '-';
    }
  }
}

let sudokuSolved = recurseSudoku(generateBoard(puzzle));
console.log(prettyBoard(generateBoard(puzzle)) + '\n');
console.log(prettyBoard(sudokuSolved));
