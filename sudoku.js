// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let board =[]
  let arrBoardString = boardString.split('')
  for (let i = 0; i < 9; i++) {
    board.push(arrBoardString.splice(0,9))
  }

  return board
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(number, position, board) {
    let goriz = position[0];
    let vertical = position[1]
    let line = Math.floor(goriz / 3) * 3;
    let colum = Math.floor(vertical / 3) * 3;
    for (let elem = 0; elem < 9; elem++) {
        if (board[elem][vertical] === number && elem !== goriz) {
            return false
        }
    }
    for (let el = 0; el < 9; el++) {
        if (board[goriz][el] === number && el !== vertical) {
            return false
        }
    }
    for (let el = line; el < line + 3; el++) {
        for (let ele = colum; ele < colum + 3; ele++) {
            if (board[el][ele] === number && el !== goriz && ele !== vertical) {
                return false
            }
        }

    }
    return true

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

function prettyBoard(board) {
  let result = [];
  for (let i = 0; i < board.length; i++){
    result.push(board[i].join(' ') + '\n')
  }
  return result.join('')
}

// Exports all the functions to use them in another file.
module.exports = {
    solve,
    isSolved,
    prettyBoard,
};
