const sudokuParse = require('./ranner');

const initialBoard = sudokuParse(process.argv[2])

function solve(boardString) {
  console.log('first changes');
}

function isSolved(board) {

}


function prettyBoard(board) {
  

}


module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
