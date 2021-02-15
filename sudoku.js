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
  let result = null;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] === '-'){
        return [i, j];
      }
    }
  }
}

const checkVertical = (board, x) => {
  let allvariants = ['1','2','3','4','5','6','7','8','9'];
  for(let i = 0; i < board.length; i += 1){
     allvariants = allvariants.filter(el => el !== board[i][x]);
  }
  return allvariants;
} 

const checkGorizontal = (board, y, arr) => {
  let allvariants = arr;
  for(let i = 0; i < board.length; i += 1){
     allvariants = allvariants.filter(el => el !== board[y][i]);
  }
  return allvariants;
} 

const board = [
  ['1','-','5','8','-','2','-','-','-'],
  ['-','9','-','-','7','6','4','-','5'],
  ['2','-','-','4','-','-','8','1','9'],
  ['-','1','9','-','-','7','3','-','6'],
  ['7','6','2','-','8','3','-','9','-'],
  ['-','-','-','-','6','1','-','5','-'],
  ['-','-','7','6','-','-','-','3','-'],
  ['4','3','-','-','2','-','5','-','1'],
  ['6','-','-','3','-','8','9','-','-']
  ] 


// How you represent your board is up to you!
function solve(boardString) {
  const board = createBoard(boardString);
  const coord = findEmpty(board);

  const [x, y] = coord;

  const vertical = checkVertical(board, y);
  const gorizontal = checkGorizontal(board, x, vertical);

  console.log(gorizontal);

}
let text = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

solve(text)

function blockCheckout(board) {
  let newArr = [];
  for (let j = 0; j < board.length; j++) {
    let arr = [];
    for (let i = 0; i < board[j].length; i++) {
      arr.push(board[j][i]);
    }
    newArr.push(arr);
  }
  return newArr;
}

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
