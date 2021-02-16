function createBoard(str) {
  const matrix = [];
  let idx = 0;
  for (let i = 0; i < 9; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < 9; j += 1) {
      matrix[i].push(str[idx]);
      idx += 1
    }
  }
  return matrix;
}

function findEmpty(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return null;
}

const checkVertical = (board, x) => {
  let allvariants = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < board.length; i += 1) {
    allvariants = allvariants.filter(el => el !== board[i][x]);
  }
  return allvariants;
}

const checkGorizontal = (board, y, arr) => {
  let allvariants = arr;
  for (let i = 0; i < board.length; i += 1) {
    allvariants = allvariants.filter(el => el !== board[y][i]);
  }
  return allvariants;
}

function blockCheckout(board, arrValue, x, y) {
  const newArr = [];
  const boxRow = Math.floor(x / 3) * 3;
  const boxCol = Math.floor(y / 3) * 3;


  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if(board[i][j] !== '-'){
        newArr.push(board[i][j])
      }
    }
  }

  const result = arrValue.filter(el => !el.includes(newArr));
  // console.log(result);
  // console.log(board[x][y]);

  board[x][y] = result[0];
  // console.log(board);
  return board;

}





// How you represent your board is up to you!
function solve(boardString) {
  const board = createBoard(boardString);
  
  const coord = findEmpty(board);
  if(!findEmpty(board)) return board; 

  const [x, y] = coord;

  const vertical = checkVertical(board, y);
  const gorizontal = checkGorizontal(board, x, vertical);

  const value =  blockCheckout(board, gorizontal, x, y);
  console.log(value);

}
let text = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
solve(text)



// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}


// const board = [
//   ['-', '-', '5', '-', '3', '-', '-', '8', '1'],
//   ['9', '-', '2', '8', '5', '-', '-', '6', '-'],
//   ['6', '-', '-', '-', '-', '4', '-', '5', '-'],
//   ['-', '-', '7', '4', '-', '2', '8', '3', '-'],
//   ['3', '4', '9', '7', '6', '-', '-', '-', '5'],
//   ['-', '-', '8', '3', '-', '-', '4', '9', '-'],
//   ['1', '5', '-', '-', '8', '7', '-', '-', '2'],
//   ['-', '9', '-', '-', '-', '-', '6', '-', '-'],
//   ['-', '2', '6', '-', '4', '9', '5', '-', '3']
// ]




