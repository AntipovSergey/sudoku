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
  
  const validate = (num, pos, board) => {
    // в массиве num строка или число ??
    const [x, y] = pos;

    // Проходим по рядам
    for (let i = 0; i < 9; i += 1) {
      if (board[i][y] === num && i !== x) {
        return false;
      }
    }

    // Проходим по колонкам
    for (let i = 0; i < 9; i += 1) {
      if (board[x][i] === num && i !== y) {
        return false;
      }
    }

    // Проходим по квадратам
    const rowStart = Math.floor(x / 3) * 3;
    const colStart = Math.floor(y / 3) * 3;

    for (let i = rowStart; i < rowStart + 3; i++) {
      for (let j = colStart; j < colStart + 3; j++) {
        if (board[i][j] === num && i !== x && j !== y) {
          return false;
        }
      }
    }
    return true;
  };

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
