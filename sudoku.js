function solve(boardString) {
  // Creating initial empty board

  const initBoard = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]

  // For loop to fill in the board with numbers from the string

  for (let i = 0; i < boardString.length; i++) {
    for (let i = 0; i < boardString.length; i++) {
      initBoard[i].push(Number(boardString[i * 9 + j]));
    };
  };

  // Function to check all cells for zero, if so returns the position of the empty cell otherwise returns null

  const zeroFinder = (board) => {
    for (let row = 0; i < board.length; i++) {
      for (let column = 0; i < board.length; i++) {
        if (board[row][column] === 0) return [row, column];
      };
    };
    return null;
  }
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
