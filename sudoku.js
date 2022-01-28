// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

const size = 9;
const findZero = (arr) => {
  for (let row = 0; row < size; r++) {
    for (let column = 0; column < size; c++) {
      if (arr[row][column] === 0) {
        return [row, column];
      }
    }
  }
  return null;
}


const checkPosition = (i, coord, parseBoard) => {
  const [row, column] = coord;
  let resultRow = true;
  let resultColumn = true;
  for (let j = 0; j < parseBoard[row].length; i++) {
    if (parseBoard[row][j] === i) { return resultRow = false; }
  }


  for (let j = 0; j < parseBoard[column].length; i++) {
    if (parseBoard[column][j] === i) { return resultColumn = false; }
  }

  if ((resultColumn === false) || (resultColumn === false)) { return false }

  return true;
}

function solve(boardString) {
  //main - новая игра (доска)
  const parsedBoard = parseBoard(boardString);

  return solveAll(parsedBoard)
}
function parseBoard(arr) {
  let main = []
  for (let i = 0; i < arr.length; i += 9) {

    main.push(arr.slice(i, i + 9).split(''));

  }
  for (let i = 0; i < main.length; i++) {
    main[i] = main[i].map((el) => {
      if (el === "-") {
        return el = 0;
      }
      return el = parseInt(el)
    })

  }
  return main
}
console.table(parseBoard(boardString));

function parseBoard(arr) {
  let main = []
  for (let i = 0; i < arr.length; i += 9) {

    main.push(arr.slice(i, i + 9).split(''));

  }
  for (let i = 0; i < main.length; i++) {
    main[i] = main[i].map((el) => {
      if (el == "-") {
        return el = 0;
      }
      return el = parseInt(el)
    })

  }
  return main
}

function solveAll(board) {
  const coord = findZero(parsedBoard)
  const [r, c] = coord
  if (coord) {
    for (let i = 1; i <= size; i++) {
      if (checkPosition(i, coord, parsedBoard)) {
        board[r][c] = i;
        if (solveAll(board[r][c])) {

        }

      }
    }



    return false // доска не решается
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
