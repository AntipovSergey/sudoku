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
  let board = [...Array(9)].map(line => [...Array(9)])
  let arr = boardString.split('');
  let index = 0
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board.length; j++) {
      board[i][j] = arr[index]
      index++
    }
  }
  console.table(board);
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return (!board.includes('-'))
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

