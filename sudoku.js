const fs = require('fs');
const sudoku = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');


function sudokuParse(content, puzzleNumber = 0) {
  return content.split('\n')[puzzleNumber];
}

let puzzle = sudokuParse(sudoku, 15);

function solve(puzzle) {
  let board = [];
  let rowBoard = [];
  for (let i = 0; i < puzzle.length; i++) {
    rowBoard.push(puzzle[i]);
    if (rowBoard.length === 9) {
      board.push(rowBoard);
      rowBoard = [];
    }
  }
  return board;
}

console.table(solve(puzzle));

// Создать функцию, которая будет находить пустые ячейки getEmptyCell
// Создать функцию, которая будет находить возможное решение для ряда
// Создать функцию, которая будет находить возможное решение для столбца
// Создать функцию, которая будет определять квадрат для текущей ячейки
// Создать функцию, которая будет находить возможное решение для квадрата
// Создать функцию проверки, на правильное заполнение доски судоку, если True то возращаем заполненную доску, а если False Err

function getEmptyCell(board) {
  let listEmptyCell = {
    row: -1,
    col: -1,
  };
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === '-') {
        listEmptyCell.row = row;
        listEmptyCell.col = col;
      }
    }
  }
  return listEmptyCell;
}
console.log(getEmptyCell(solve(puzzle)));

function isNotSolved (board) {
  for (let row = 0; row < board.length; row++) {
    if (board[row].includes('-')) return true;
  }
}

function getAvailableSolutions(board, cell) {
  let solutions = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  //console.log('Start: ', solutions)
  solutions = solutions.filter((el) => !board[cell.row].includes(el)) // отфильтровали все решения по ряду
  //console.log('Filter row: ', solutions)

  for (let r = 0; r < board.length; r++) {
    solutions = solutions.filter((el) => el !== board[r][cell.col]) // отфильтровали все решения по столбцу
  }
  //console.log('Filter col: ', solutions)

  let qr = Math.floor(cell.row / 3) * 3 // координаты верхнего левого угла квадрата
  let qc = Math.floor(cell.col / 3) * 3
  let quad = board[qr].slice(qc, qc + 3).concat(board[qr + 1].slice(qc, qc + 3), board[qr + 2].slice(qc, qc + 3)) // вырезали квадрат из доски

  solutions = solutions.filter((el) => !quad.includes(el))  // отфильтровали все решения по квадрату
  //console.log('Filter quad: ', solutions)
  return solutions
}


function isSolved(board) {
for (let row = 0; row < board.length; row++) {
 if (board[row].reduce((accum, currentValue) => 
  accum + Number(currentValue), 0) != 45) return false
  }
  for (let col = 0; col < board.length; col++){
    let sum = 0;
    for (let row = 0; row < board[col].length; row++){
      sum += board[row][col];
    }
    if (sum != 45) return false
  }
  for (let qr = 0; qr < board.length; qr+=3) {
    for (let qc = 0; qc < board.length; qc+=3){
      let quad = board[qr].slice(qc, qc + 3).concat(board[qr + 1].slice(qc, qc + 3), board[qr + 2].slice(qc, qc + 3))
    }
    if (quad.reduce((accum, currentValue) => 
    accum + Number(currentValue), 0) != 45) return false
  }
  return true;
}
console.log(isSolved(solve(puzzle)));



function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
};
