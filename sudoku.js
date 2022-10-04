
const fs = require('fs');
const sudoku = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n'); 
let randomSud = Math.floor(Math.random(sudoku) * 15) 


function solvee(boardString) {
  let result = []
  let resSplit = boardString.split('')
  for (let i = 0; i < resSplit.length; i = i + 9) {
    result.push(resSplit.slice(i, i + 9))

  }
  return result
}


let board = solvee(sudoku[`${randomSud}`])


let solveSudoku = function (board) {
  // let board = solve(boardString)
  const size = 9
  const boxsize = 3

  // ищем пустые элементы
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') {
          return [r, c]
        }
      }
    }
    return null
  }

  // проверка на валидность
  const validate = (num, pos, board) => {
    const [r, c] = pos

    // проверка строкт
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false
      }
    }
    // проверка столбцов
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false
      }
    }

    // проверка кубов
    const boxRow = Math.floor(r / boxsize) * boxsize
    const boxCol = Math.floor(c / boxsize) * boxsize

    for (let i = boxRow; i < boxRow + boxsize; i++) {
      for (let j = boxCol; i < boxRow + boxsize; i++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false
        }
      }

    }
    return true

  }


  // подставление цифр
  const solve = () => {
    const currPos = findEmpty(board)

    if (currPos === null) {
      return true
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString()
      const isValid = validate(currNum, currPos, board)

      if (isValid) {
        const [x, y] = currPos
        board[x][y] = currNum

        if (solve()) {
          return true
        }
        board[x][y] = '-'
      }
    }

    return false
  }

  solve()
  return board
}

console.log(solveSudoku(board))



module.exports = {
  solvee,
  solveSudoku,

};
