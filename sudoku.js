const fs = require('fs');
const sudoku = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');


function sudokuParse(content, puzzleNumber = 0) {
  return content.split('\n')[puzzleNumber];
}

let puzzle = sudokuParse(sudoku, 0);

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
function isSolved(board) {

}



function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
