let puzzle = [
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],
  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0],
  [0, 2, 0, 5, 0, 0, 1, 0, 3],
];


const solveSudoku = (puzzle) => {



  const findZero = puzzle => {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle.length; j++) {
        if (puzzle[i][j] === 0) {
          return [i, j]
        }
      }
    }
    return null
  }

  // записывает рандомное число вместо в массив со значением сроки и столбца
  const randomNum = (coordinates, puzzle) => {
    let [x, y] = coordinates
    puzzle[x][y] = Math.floor(Math.random() * 9)
  }

  // проверять есть ли в массиве 0 и возвращает  true или false
  const validate = (number, position, puzzle) => {

    let [x, y] = position

    // проверка по строке и по столбцу
    for (let i = 0; i < puzzle.length; i++) {
      if (puzzle[i][y] === number && i !== x) { // проверка все кроме текущей строки и столбцаа
        return false
      }
    }

    for (let i = 0; i < puzzle.length; i++) {
      if (puzzle[x][i] === number && i !== y) {
        return false
      }
    }

    // по квадрату ...


    // -- создадим рандомное число для проверки на валидность вставки в судоку 
    // const randomNum = 


    return true

    // false - true
    // console.log('board ' + `[${x}, ${y}]` + ' передаваемое число ' + number + ' == ' + puzzle[x, y][1])
  }


  const solve = () => {
    const pos = findZero(puzzle)
    if (pos === null) {
      return true
    }

    for (let i = 1; i < puzzle.length + 1; i++) {
      const currentNum = i
      const currentPos = findZero(puzzle)
      const isValid = validate(currentNum, currentPos, puzzle)

      if (isValid) {
        const [x, y] = currentPos
        puzzle[x][y] = currentNum
        // puzzle[x][y] = randomNum(currentPos, puzzle)
        if (solve()) {
          return true
        }
        puzzle[x][y] = '.'
      }
    }

    return false
  }

  solve()
  return puzzle
}


// const currentPosition = findZero(puzzle)
// console.table(puzzle)
// console.log(randomNum(currentPosition, puzzle))
// console.table(puzzle)

console.table(solveSudoku(puzzle))
console.table(puzzle)

// console.log(solve())













// const isValid = validate(5, currentPosition, board)
// console.log(puzzle.length)

// console.log(validate(5, currentPosition, puzzle))
