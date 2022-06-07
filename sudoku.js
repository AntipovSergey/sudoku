function boardStringToArray(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 9) {
    result.push(string.slice(i, i + 9).split(''));
  }

  let res = result.map(el => el.map(element => {
    if (element === '-') {
      return 0;
    } else {
      return +element;
    }
  }));

  return res;
}

function nextEmptySpot(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function checkRow(board, row, value){
  for(let i = 0; i < board[row].length; i++) {
  if(board[row][i] === value) {
  return false;
  }
  }
  
  return true;
  }
  
  function checkColumn(board, column, value){
  for(var i = 0; i < board.length; i++) {
  if(board[i][column] === value) {
  return false;
  }
  }
  
  return true;
  };

function solve(boardString) {
console.log('first changes');

}

function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return false;
      }
    }
  }

  return true;
}

function prettyBoard(board) {
  return board.join('\n').split(',').join(' ');
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

