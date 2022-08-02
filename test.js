
// let input = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ];
const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


const solveSudoku = function (boardString) {
  // const size = 9;
  // const boxSize = 3;
  let board = makeArray(boardString)

  function findEmpty(board) {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }


  function makeArray(boardString) {
    let arr = boardString.split("")
    let board = [];
    for (let i = 0; i < arr.length; i += 1) {
      board.push(arr.splice(0, 9))
    }
    return board;
  }


  function validate(num, pos, board) {
    const [r, c] = pos;//[0, 1]

    //Check rows
    for (let i = 0; i < 9; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    //Check cols
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }


    //Check box
    const rowStart = Math.floor(r / 3) * 3;
    const colStart = Math.floor(c / 3) * 3;

    for (let i = rowStart; i < rowStart + 3; i++) {
      for (let j = colStart; j < colStart + 3; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  }

  const solve = () => {
    const pos = findEmpty(board);

    if (pos === null) {
      return true;
    }
    //console.log('------------------------------');
    for (let i = 1; i < 9 + 1; i++) {
      const num = i.toString();
      const isValid = validate(num, pos, board);
      //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
      if (isValid) {
        const [x, y] = pos;
        board[x][y] = num;

        if (solve()) {
          return true;
        }

        board[x][y] = '-';
      }
    }

    return false;
  }

  solve();
  return board;
};

// console.table(input);
console.table(solveSudoku(boardString));