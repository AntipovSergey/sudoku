// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
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

// const data = parse('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
// console.table(data);

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

//console.log(diffArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3]));

function solve(boardString) {
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
          return solve(packedBoard);
        }
      }
    }
  }
  return packInStr(board);
}

const board = parse(
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
);
// console.table(board);
// console.log('------------------------------------------------------');
// console.log(packInStr(board))
console.log('---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----');
console.table(solve('---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
