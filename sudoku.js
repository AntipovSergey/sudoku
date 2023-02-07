const fs = require('fs');

const { prettyBoard } = require('./prettyboard');

const inputStrings = fs.readFileSync('./puzzles.txt', 'utf-8');

const arrOfBoards = inputStrings.split('\n');

function prettyB(board) {
  const newBordNum = board.map(el => {
    el.split('');
    const size = 9;
    const subarray = [];
    for (let i = 0; i < Math.ceil(el.length / size); i += +1) {
      subarray[i] = el.slice(i * size, i * size + size);
    }
    return subarray.map(elem => elem.split(''));
  });

  return newBordNum;
}

function isSolved(board) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return null;
}

function solve(boardString) {
  const size = 9;
  const boxSize = 3;

  const validate = (num, pos, board) => {
    const [r, c] = pos;

    for (let i = 0; i < size; i += 1) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }
    for (let i = 0; i < size; i += 1) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i += 1) {
      for (let j = boxCol; j < boxCol + boxSize; j += 1) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  };

  const solveSudoku = () => {
    const currPos = isSolved(boardString);
    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i += 1) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, boardString);

      if (isValid) {
        const [x, y] = currPos;
        boardString[x][y] = currNum;

        if (solveSudoku()) {
          return true;
        }

        boardString[x][y] = '-';
      }
    }
    return false;
  };
  solveSudoku();
  return boardString;
}

const sudokuBoardStr = prettyB(arrOfBoards);

function startChecker() {
  for (let i = 0; i < sudokuBoardStr.length; i += 1) {
    for (let j = 0; j < sudokuBoardStr[i].length; j += 1) {
      if (
        sudokuBoardStr[i].lastIndexOf(sudokuBoardStr[i][j]) !==
        sudokuBoardStr[i].indexOf(sudokuBoardStr[i][j])
      ) {
        return 'Сдаюсь, стартовые числа неверно расположены по горизонтали';
      }
    }
  }

  for (let i = 0; i < sudokuBoardStr.length; i += 1) {
    for (let j = 0; j < sudokuBoardStr[i].length; j += 1) {
      if (
        sudokuBoardStr[j].lastIndexOf(sudokuBoardStr[j][i]) !==
        sudokuBoardStr[j].indexOf(sudokuBoardStr[j][i])
      ) {
        return 'Сдаюсь, стартовые числа неверно расположены по вертикали';
      }
    }
  }
  return 'Стартовый Судоку подан правильно';
}
console.log(startChecker(sudokuBoardStr[Number(process.argv[2])]));
console.log('\n');
console.log(prettyBoard(sudokuBoardStr[Number(process.argv[2])]));
console.log('\n');
console.log(prettyBoard(solve(sudokuBoardStr[Number(process.argv[2])])));

module.exports = {
  solve,
  isSolved,
};
