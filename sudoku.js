function findEmpty(arr) {
  const arrN = [];
  for (let i = 0; i < arr.length; i++) {
    for (let g = 0; g < arr[i].length; g++) {
      if (arr[i][[g]] === '-') {
        arrN.push([i, g]);
      }
    }
  }
  return arrN;
}
//num - подставляемое число

function checkSquare(arr, pos, num) {
  const [r, c] = pos; //Деструктуризация получаем данные о позиции
  const boxRow = Math.floor(r / 3) * 3;
  const boxCol = Math.floor(c / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (arr[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}
// example [1,1] - верхний левый угол  [0,0]
// const boxRow = Math.floor(1 / 3) * 3;   0*3
// const boxCol = Math.floor(1 / 3) * 3;   0*3

// example [7,7] - верхний левый угол  [6,6]
// const boxRow = Math.floor(7 / 3) * 3;   0*3
// const boxCol = Math.floor(7 / 3) * 3;   0*3

function createArrays(boardString) {
  const result = [];
  const boardArr = boardString.split('');
  while (boardArr.length > 0) {
    result.push(boardArr.splice(0, 9));
  }
  return result;
}

function checkRow(arr, pos, num) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[pos[0]][i] === num) {
      return false;
    }
  }
  return true;
}

function checkColumn(arr, pos, num) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][pos[1]] === num) {
      return false;
    }
  }
  return true;
}

function checkNum(arr, pos, num) {
  return checkColumn(arr, pos, num) && checkRow(arr, pos, num) && checkSquare(arr, pos, num);
}

function fillBoard(board, prevBoard = '') {
  const emptyPosArr = findEmpty(board);
  const numArr = [];
  const boardIn = board.map((el) => el.join('')).join('');

  if (board.flat().indexOf('-') === -1) {
    return true;
  }
  if (prevBoard === boardIn) {
    return false;
  }

  for (let i = 0; i < emptyPosArr.length; i++) {
    for (let j = 1; j < 10; j++) {
      if (checkNum(board, emptyPosArr[i], j.toString())) {
        numArr.push(j.toString());
      }
    }
    if (numArr.length === 1) {
      board[emptyPosArr[i][0]][emptyPosArr[i][1]] = numArr[0];
    }
    numArr.length = 0;
  }
  return fillBoard(board, boardIn);
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
  const boardArr = createArrays(boardString);
  fillBoard(boardArr);
  console.log(prettyBoard(boardArr));
  return boardArr;
}
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  // const arr = solve(board);
  // if (findEmpty(arr).length !== 0) {
  //   return false;
  // }
  // return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

function prettyBoard(board) {
  return board.map((el) => el.join(' ')).join('\n');
}

solve('----------2-65-------18--4--9----6-4-3---57-------------------73------9----------');

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
}
