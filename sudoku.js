// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const board = require('./runner.js')
const { sudokuParse } = require('./runner.js');
// Принимает отформатированную доску из функции sudokuParse. И решает судоку. 
function solve(board) {
  const size = 9;
  const boxSize = 3;
  // Ищем пустые места в массиве. Возвращаем нулл если они закончились, если находим то возвращаем массив с индексами стр-колонка
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if(board[r][c] === '-') {
                return [r,c];
            }
        }
    }
    return null;
}
  // проверяем валидность того или иного числа 
  const valid = (number, position, board) => {
    const [r, c] = position;

    // Проверяем строки:
    for (let i=0; i < size; i++) {
      if (board[i][c] === number && i !== number) {
        return false
      }
    }
    // Проверяем колонки:
    for (let i=0; i < size; i++) {
      if (board[r][i] === number && i !== c) {
        return false
      }
    } 
    // Проверяем сектора: 
    const BoxRow = Math.floor(r / boxSize) * boxSize;
    const BoxCollumn = Math.floor(c / boxSize) * boxSize;

    for (let i = BoxRow; i < BoxRow + boxSize; i++) {
      for (let j = BoxCollumn; j < BoxCollumn + boxSize; j++) {
        if (board[i][j] === number && i !== r && j !== c) {
          return false
        }
      }
    }
    return true;
  }
  // Заполняем доску числом, если оно прошло проверку функции 'valid' 
  const solveBoard = () => {
    const currentPosition = findEmpty(board);
    if (currentPosition === null) {
      return true
    }

    for (let i=1; i <= size; i++) {
      const currentNumber = i.toString();
      const isValid = valid(currentNumber, currentPosition, board);

      if(isValid) {
        const [x, y] = currentPosition;
        board[x][y] = currentNumber;

        if (solveBoard()) {
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false
  }
  solveBoard();
  return board;
}
const inputBoard = sudokuParse(content, puzzleNumber = 0)
console.log(solve(inputBoard))

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
