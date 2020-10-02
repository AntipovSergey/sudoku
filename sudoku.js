const {
  getRow,
  getColumn,
  getSquare,
}
 = require('./get.js');

const {
  tableIsFinished,
  isValidArray,
  isValidTable
} = require('./validate.js');

const {
  transform,
  prettyBoard
} = require('./transform.js');



function solve(board) {
  if (!isValidTable(board)) {
    return null;
  };

  if (tableIsFinished(board)) {
    console.clear();
    return prettyBoard(board);
  };

  let newNumberIndex = board.indexOf(null);
  console.log(board);

  for (let newNumber = 1; newNumber <= 9; newNumber += 1) {
    let newBoard = [...board];
    newBoard[newNumberIndex] = newNumber;

    newBoard = solve(newBoard); 
    
    if (newBoard) {
      return newBoard;
    };
  };
}

module.exports = {
  transform,
	solve,
	prettyBoard,
  tableIsFinished
}
