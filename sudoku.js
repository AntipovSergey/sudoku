// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
<<<<<<< HEAD
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
=======
//git init

const su =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve(boardString) {
  const convertStringtoArr = boardString.replace(/-/g, 0).match(/.{9}/g);

  return convertStringtoArr.map((item) => item.split(''));
}
// console.log(solve(su));

// // Returns a boolean indicating whether
// // or not the provided board is solved.
// // The input board will be in whatever
// // form `solve` returns.
function isSolved(board) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let itemBoard = 0; itemBoard < board.length; i++) {
     const xz=board[i].map((element) => {
      if (element === 0) {
        if (!arr[i].includes(board[i])) {
          element = arr[i];
        }
      }
    });
  }
  retu
>>>>>>> 0c984000eb5315d39ab34f7a317c3630a2df8cfb
}
console.log(isSolved(solve(su)));

<<<<<<< HEAD
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}
=======
// // Takes in a board in some form and
// // returns a String that's well formatted
// // for output to the screen.
// // The input board will be in whatever
// // form `solve` returns.
// function prettyBoard(board) {

// }
>>>>>>> 0c984000eb5315d39ab34f7a317c3630a2df8cfb

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
<<<<<<< HEAD
  isSolved: isSolved,
  prettyBoard: prettyBoard,
}
=======
  // isSolved: isSolved,
  // prettyBoard: prettyBoard
};
>>>>>>> 0c984000eb5315d39ab34f7a317c3630a2df8cfb
