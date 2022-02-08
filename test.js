const fs = require('fs');

const allBoard = fs.readFileSync('./sudoku-puzzles.txt', 'utf8').split('\n')
const inputStr = allBoard[5]
let arrayString = (
  inputStr.slice(0, 9) +' '+ inputStr.slice(9,18) + ' ' + inputStr.slice(18,27) + ' ' + 
  inputStr.slice(27,36) + ' ' + inputStr.slice(36,45) + ' ' + inputStr.slice(45,54) + ' ' + 
  inputStr.slice(54,63) + ' ' + inputStr.slice(63,72) + ' ' + inputStr.slice(72,81)
).split(' ');
let inputBoard = arrayString.map((el) => el.split(''))

// console.log(inputBoard)

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
console.table(inputBoard);
console.table(solve(inputBoard));
