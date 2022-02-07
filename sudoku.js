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


  const solveElem = () => {
      let elem = findElem(board)
      if (elem === null) {
          return true
      }
      for (let i = 1; i < 10; i++) {
          let elemNumber = i.toString()
          let isChecked = isSolved(elemNumber, elem, board)

          if (isSolved) {
              const [x, y] = elem
              board[x][y] = elemNumber

              if (solveElem()) {
                  return true
              }

              board[x][y] = '-'
          }
      }
      return false
  }
  solveElem()
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

let input = [
  ["5", "3", "-", "-", "7", "-", "-", "-", "-"],
  ["6", "-", "-", "1", "9", "5", "-", "-", "-"],
  ["-", "9", "8", "-", "-", "-", "-", "6", "-"],
  ["8", "-", "-", "-", "6", "-", "-", "-", "3"],
  ["4", "-", "-", "8", "-", "3", "-", "-", "1"],
  ["7", "-", "-", "-", "2", "-", "-", "-", "6"],
  ["-", "6", "-", "-", "-", "-", "2", "8", "-"],
  ["-", "-", "-", "4", "1", "9", "-", "-", "5"],
  ["-", "-", "-", "-", "8", "-", "-", "7", "9"]
];

function prettyBoard(board) {
  let result = [];
  for (let i = 0; i < board.length; i++){
    result.push(board[i].join(' ') + '\n')
  }
  return result.join('')
}

// console.log(prettyBoard(input))

// Exports all the functions to use them in another file.
module.exports = {
    solve,
    isSolved,
    prettyBoard,
};