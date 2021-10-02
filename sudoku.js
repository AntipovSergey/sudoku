function parse(str) {
  let result = [];
  for (let i = 0; i < str.length / 9; i++) {
    result.push(str.slice(i * 9, i * 9 + 9));
  }
  return result.map((elem) => elem.split(''));
}

function packInStr(board) {
  return board.map((el) => el.join('')).join('');
}

function flatten(arr) {
  const flattened = [];
  const flat = (arr) => {
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        flat(el);
      } else {
        flattened.push(el);
      }
    });
  };
  flat(arr);
  return flattened;
}

function getRowNumbers(rowIndex, board) {
  return board[rowIndex].filter((el) => el !== '-');
}

function getColumnNumbers(columnIndex, board) {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    result.push(board[i][columnIndex]);
  }
  return result.filter((el) => el !== '-');
}

function getSquareNumbers(rowIndex, columnIndex, board) {
  const squares = {
    1: ['00', '01', '02', '10', '11', '12', '20', '21', '22'],
    2: ['03', '04', '05', '13', '14', '15', '23', '24', '25'],
    3: ['06', '07', '08', '16', '17', '18', '26', '27', '28'],
    4: ['30', '31', '32', '40', '41', '42', '50', '51', '52'],
    5: ['33', '34', '35', '43', '44', '45', '53', '54', '55'],
    6: ['36', '37', '38', '46', '47', '48', '56', '57', '58'],
    7: ['60', '61', '62', '70', '71', '72', '80', '81', '82'],
    8: ['63', '64', '65', '73', '74', '75', '83', '84', '85'],
    9: ['66', '67', '68', '76', '77', '78', '86', '87', '88'],
  };
  const keys = Object.keys(squares);
  const strIndex = `${rowIndex}${columnIndex}`;
  let currentSquare;
  for (let key of keys) {
    if (squares[key].includes(strIndex)) {
      currentSquare = squares[key];
    }
  }
  const elemsInSquare = currentSquare.map((el) => board[el[0]][el[1]]);
  return elemsInSquare.filter((el) => el !== '-');
}

function diffArray(etalon, arr) {
  return etalon.filter((el) => !arr.includes(el));
}

function testBoard(i, j, board) {
  const elem = board[i][j];
  const newBoard = [...board.map((row) => [...row])];
  newBoard[i][j] = '-';
  const columnNumbers = getColumnNumbers(j, newBoard);
  const rowNumbers = getRowNumbers(i, newBoard);
  const squareNumbers = getSquareNumbers(i, j, newBoard);
  return (
    !columnNumbers.includes(elem) &&
    !rowNumbers.includes(elem) &&
    !squareNumbers.includes(elem)
  );
}

function baseSolve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
        const excludedNumbers = [
          ...getSquareNumbers(i, j, board),
          ...getColumnNumbers(j, board),
          ...getRowNumbers(i, board),
        ].filter((el) => el !== '-');
        const uniqeExcludedNumbers = [...new Set(excludedNumbers)].sort();
        const etalon = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const decisions = diffArray(etalon, uniqeExcludedNumbers);
        if (decisions.length === 1) {
          const newBoard = [...board.map((row) => [...row])];
          newBoard[i][j] = decisions[0];
          return baseSolve(newBoard);
        }
      }
    }
  }
  return board;
}

function commonSolve(board, firstResultFinded) {
  if (firstResultFinded.first) return;
  const result = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (firstResultFinded.first) break;
      if (!testBoard(i, j, board)) {
        result.push({
          board: [],
          result: false,
        });
        return result;
      }
      if (board[i][j] === '-') {
        const excludedNumbers = [
          ...getSquareNumbers(i, j, board),
          ...getColumnNumbers(j, board),
          ...getRowNumbers(i, board),
        ];
        const uniqeExcludedNumbers = [...new Set(excludedNumbers)].sort();
        const etalon = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const decisions = diffArray(etalon, uniqeExcludedNumbers);
        const boardsDecision = [];
        for (let k = 0; k < decisions.length; k++) {
          if (firstResultFinded.first) break;
          const newBoard = [...board.map((row) => [...row])];
          newBoard[i][j] = decisions[k];
          const newBoardString = newBoard;
          const iter = commonSolve(newBoardString, firstResultFinded);
          boardsDecision.push(iter);
        }
        return boardsDecision;
      }
    }
  }
  if (!packInStr(board).includes('-')) {
    firstResultFinded.first = true;
    return {
      board: [...board.map((row) => [...row])],
      result: true,
    };
  }
}

function solve(boardString) {
  const firstResultFinded = {
    first: false,
  };
  const board = parse(boardString);
  const baseBoard = baseSolve(board);
  if (!packInStr(baseBoard).includes('-')) {
    return baseBoard;
  }
  const solvedBoard = commonSolve(baseBoard, firstResultFinded);
  const [result] = flatten(solvedBoard);
  return result.board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!testBoard(i, j, board)) {
        return false;
      }
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
  return console.table(board);
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
