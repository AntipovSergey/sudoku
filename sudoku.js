// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!


function parse(boardString) {
  let boardArr =  boardString.split('')
  let newArr = []
  for (let i = 0; i <= 8; i++) {
   let res = boardArr.slice(0,9)
    boardArr.splice(0,9)
    newArr.push(res)
  } return newArr
}

function getRowNumbers(rowIndex, board) {
  return board[rowIndex];
}

function getColumnNumbers(columnIndex, board) {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    result.push(board[i][columnIndex]);
  }
  return result;
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
  return elemsInSquare;
}

function diffArray(etalon, arr) {
  return etalon.filter((el) => !arr.includes(el));
}

function prettyBoard(board) {
  return console.table(board);
}

function baseSolve(boardString) {
  const board = parse(boardString);
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
          [board[i][j]] = [decisions];
          const packedBoard = packInStr(board);
          return baseSolve(packedBoard);
        }
      }
    }
  }
  return packInStr(board);
}

function solve(boardString) {
  const board = baseSolve(boardString);
  return parse(board);
}

let reference = 0;
for (let i = 1; i <= 9; i++) {
  reference += i;
}

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const result = row.reduce((acc, el) => acc + el, 0);
    //  console.log(result)
    if (result !== reference) return false;
  }
  return true;
}

function isSolved2(board) {
  if (checkHorizeontl(board)) {
    newStr = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < 9; j++) {
        const column = board[j][i];
        newStr.push(column);
      }
    }

    const reversedArr = all(newStr);

    return checkHorizeontl(reversedArr);
  }

  return false;
}

function all(newStr1) {
  const result = [];
  for (let i = 0; i < 9; i++) {
    const count = newStr1.slice(0, 9);
    newStr1.splice(0, 9);
    result.push(count);
  }

  return result;
}

function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solutionСheck,
  solve,
  isSolved,
  prettyBoard,
}
