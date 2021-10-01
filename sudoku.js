// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  let size = 3 //кол-во строк по горизонтали
  let boxSize = 9 //кол-во строк в одном квадрате
  for (let i = 0; i < size; i++) {
    // пройдем по всем строкам по горизонтали
    for (let j = 0; j < size; j++) {
      // пройдем по всем строкам по вертикали
      if (board[i][j] === '.') {
        // если в доске по горизонтали и по вертикали строго равно пустому элементу
        return [i, j] // то возвращаем пустой элемент
      }
    }
  }
  return null //если все заполнено то возвращаем null
}

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
}
