// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// function solve(boardString) {
//   console.log('first changes');
//   let arr = boardString.split('');
//   console.log(arr)
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 9) {
//     newArr.push([
//       [arr[i], arr[i + 1], arr[i + 2]],
//       [arr[i + 3], arr[i + 4], arr[i + 5]],
//       [arr[i + 6], arr[i + 7], arr[i + 8]]
//     ])
//   }
//   console.log(newArr);
// }
function solve(boardString) {
  console.log('first changes');
  let board = [...Array(9)].map(line => [...Array(9)]);
  let boardCols = [...Array(9)].map(line => [...Array(9)]);
  let arr = boardString.split('');
  let index = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] = arr[index];
      boardCols[j][i] = arr[index];
      index++
    }
  }
  let blocks = [];
  for (let c = 0; c < 9; c += 3) {
    for (let w = 0; w < 9; w += 3) {
      for (let i = c; i < c + 3; i += 1) {
        for (let j = w; j < w + 3; j += 1) {
          blocks.push(board[i][j]);
        }
      }
    }
  }

  let boardBlocks = [];
  for (let i = 0; i < blocks.length; i += 9) {
    boardBlocks.push([
      blocks[i], blocks[i + 1], blocks[i + 2],
      blocks[i + 3], blocks[i + 4], blocks[i + 5],
      blocks[i + 6], blocks[i + 7], blocks[i + 8],
    ])
  }
  // console.table(boardCols);
  let rowCheck = [];
  let colsCheck = [];
  let blockCheck = [];
  for (let i = 0; i < 9; i++) {
    rowCheck.push([...checkRow(board[i])]);
    colsCheck.push([...checkCols(boardCols[i])]);
    blockCheck.push([...checkRow(boardBlocks[i])]);
  }
  console.log(rowCheck);
  decision(board, rowCheck, colsCheck, blockCheck);
  // const resBlock = [];
  // resBlock.push(
  //   [board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]],
  //   [board[3][0], board[3][1], board[3][2], board[4][0], board[4][1], board[4][2], board[5][0], board[5][1], board[5][2]],
  //   [board[6][0], board[6][1], board[6][2], board[7][0], board[7][1], board[7][2], board[8][0], board[8][1], board[8][2]],
  //   [board[0][3], board[0][4], board[0][5], board[1][3], board[1][4], board[1][5], board[2][3], board[2][4], board[2][5]],
  //   [board[3][3], board[3][4], board[3][5], board[4][3], board[4][4], board[4][5], board[5][3], board[5][4], board[5][5]],
  //   [board[6][3], board[6][4], board[6][5], board[7][3], board[7][4], board[7][5], board[8][3], board[8][4], board[8][5]],
  //   [board[0][6], board[0][7], board[0][8], board[1][6], board[1][7], board[1][8], board[2][6], board[2][7], board[2][8]],
  //   [board[3][6], board[3][7], board[3][8], board[4][6], board[4][7], board[4][8], board[5][6], board[5][7], board[5][8]],
  //   [board[6][6], board[6][7], board[6][8], board[7][6], board[7][7], board[7][8], board[8][6], board[8][7], board[8][8]],
  // );
  // console.log('resBlock');
  // console.table(resBlock);
}

function checkRow(row) {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let rowNums = row.filter((el) => el !== '-').map((el) => Number(el));
  let res = num.filter((el) => !rowNums.includes(el));
  // console.log(res);
  return res;
}

function checkCols(col) {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let colNums = col.filter((el) => el !== '-').map((el) => Number(el));
  let res = num.filter((el) => !colNums.includes(el));
  // console.log(res);
  return res;
}

function decision(board, rowCheck, colsCheck, blockCheck) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 9; i++) {
      console.log(board[j][i]);
      if (board[i][j] === '-') {
        for (let k = 1; k <= 9; k++) {
          if ((rowCheck[i].includes(k) === false) && (colsCheck[j].includes(k) === false) && (blockCheck[i].includes(k) === false)) {
            board[i][j] = k;
          }
        }
      }
    }
  }
  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  // return (!board.includes('-'));
}

// let table = [
//   [ '1', '-', '5', '8', '-', '2', '-', '-', '-'],
//   [ '-', '9', '-' , '-', '7', '6', '4', '-', '5'],
//   [ '2', '-', '-' , '4', '-', '-', '8', '1', '9'],
//   [ '-', '1', '9', '-', '-', '7', '3', '-', '6'],
//   [ '7', '6', '2', '-', '8', '3', '-', '9', '-'],
//   [ '-', '-', '-', '-', '6', '1', '-', '5', '-'],
//   [ '-', '-', '7', '6', '-', '-', '-', '3', '-'],
//   [ '4', '3', '-', '-', '2', '-', '5', '-', '1'],
//   [ '6', '-', '-', '3', '-', '8', '9', '-', '-'],
//   ] 
// function temp(table) {
//   console.log(!table.includes('-'));
// }
// temp(table)


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  console.log(board.map(item => item.join(' ')).join('\n'));
}


// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

