function read() {
  return [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ]
}

function emptyEl(arr) {

  let pos = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        pos.push([i, j])
      }
    }
  }
  return null
}

console.log(emptyEl(board));


function isValid(row, colum, num, board) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === num && board[row][i] !== board[row][colum]) {
      return false
    }
  }

  for (let j = 0; j < board.length; j++) {
    if (board[i][colum] === num && board[i][colum] !== board[row][colum]) {
      return false
    }
  }

let countRow = Math.floor(row / 3) * 3
let countColum = Math.floor(colum / 3) * 3

  for (let e = countRow; e < countRow + 3; e++) {
    for (let l = countColum; l < countColum + 3; l++) {
      if (board[e][l] === num && board[e][l] !== board[row][colum]) {
        return false
      }
      if (board[l][e] === num && board[l][e] !== board[colum][row]) {
        return false
      }
    }
  }

return true
}

function countNumber(pos) {
  if (pos.length === 0) {
    return true
  } else {
    for (let num = 1; num < 10; num += 1) {
      for (let position = 0; position < pos.length; position++) {
        let [row, colum] = [position[i][0], position[i][1]]
        if (isvalid(row, colum, num)) {
          board[row][colum] = num
        }
      }
    }
  }
  console.log(sudokuFirstLine)
}

console.log(countNumber(solve()))

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
