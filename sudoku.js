const data = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
];


function solve(board) {
  const size = 9;
  function searchEmpty(board) {
    const size = 9;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return null;
  }
  console.log(searchEmpty(data));
  function valid(num, pos, board) {

    const [i, j] = pos;

    for (let c = 0; c < size; c++) {
      if (board[i][c] === num) return false;
    }
    for (let c = 0; c < size; c++) {
      if (board[j][c] === num) return false;
    }

  }
  const solved = () => {
    const currPos = searchEmpty(board)
    if (currPose === null) return true

    for (let i = 1; i < size + 1; i++) {
      currentNum = i.toString()
      isValue = validate(currentNum, currPos, board)


    }

  }




  console.log(solve(data));

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
    solve,
    isSolved,
    prettyBoard,
  };
