const fs = require('fs');
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(puzzle) {
  const board = puzzle.split(/(.{9})/).filter((el) => el).map((el) => el.split(''));
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  };

  const validate = (num, pos, board) => {
    const [r, c] = pos;

    // Check rows
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // Check cols
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Check box
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  const solveProgress = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solveProgress()) {
          return true;
        }

        board[x][y] = '-';
      }
    }

    return false;
  };

  solveProgress();
  console.table(board);
  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  // const size = 9;
  // const box = 3;
  for (let i = 0; i < board.length; i += 1) {
    if (board[i].includes('-')) {
      return false;
    }
  }
  return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  fs.writeFileSync('./solvedPuzzle', board.join('\n'), 'utf-8');
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

// }
// if(res.length===0){
//   return true
// }
// return false
// }

// function checkCol(){
//   let res = []
//   for(let i = 0;i<size;i++){
//     for(let j = 0; j<size;){
//       res.push(board[i[j]])
//     }
//     return res
//   }
// }
