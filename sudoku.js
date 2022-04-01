const sudokuParse = require('./ranner');

const initialBoard = sudokuParse(process.argv[2])

function solve(boardString) {
  console.log('first changes');
}

function isSolved(board) {

}


function prettyBoard(board) {
  

}

const checkResult = function (board) {
  for (let i = 0; i < initialBoard.length; i++) {
    for (let j = 0; j < initialBoard.length; j++) {
      if (board[i][j] === ')
    }
  }
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
