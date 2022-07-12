const fs = require('fs');

// function err(fileData) {
//   const str = fs.readFileSync(fileData, 'utf-8');
//   if (str.match(/[a-zA-Z]/g)) {
//     throw Error('Invalid input');
//   }
//   return str;
// }

// console.log(err('./ERRpuzzles.txt'))

function make() {
  const sudStr = makeArr();
  function makeArr() {
    const str = fs.readFileSync('./puzzles.txt', 'utf-8');
    const puzzles = str
      .split('\n')
      .filter((line) => line !== '');
    return puzzles;
  }

  const ranNum = randomNumber();
  function randomNumber() {
    if (process.argv[2]) {
      return process.argv[2];
    }
    return Math.floor(Math.random() * 4);
  }

  function arr(str) {
    return str.replace(/(.{9})/g, (match, n) => `${n}\n`)
      .split('\n')
      .filter((line) => line !== '')
      .map((el) => el.split(''));
  }
  return arr(sudStr[ranNum]);
}

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(board) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => { // функция возвращает пустую позицыю в матрице
    for (let r = 0; r < size; r++) { // проходим цыклом по строкам
      for (let c = 0; c < size; c++) { // проходим цыклом по столбцам
        if (board[r][c] === '-') { // проверям пустой ли елемент по заданым корденатам
          return [r, c]; // возвращае масив с местом в строке, и место в колонке
        }
      }
    }
    return null;
  };

  const validate = (num, pos, board) => {
    const [r, c] = pos;
    // 1.Проверка строк
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }
    // 2.Проверка столбцов
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }
    // 3.Проверка квадрата из 9 чисел на повторение чисел
    // Сначала вычислим позицию элемента в нашем секторе для строк
    const boxRow = Math.floor(r / boxSize) * boxSize;
    // Такую же конструкцию повторям и для столбцов
    const boxCol = Math.floor(c / boxSize) * boxSize;
    //  Проверка по всему квадрату на повторение чисел, поэтому делаем два вложенных цикла:
    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  };

  const solveBoard = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solveBoard()) {
          return true;
        }

        board[x][y] = '-';
      }
    }

    return false;
  };

  solveBoard();
  return board;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).


/* const solveSudoku = function (board) {
  // const size = 9;
  // const boxSize = 3;

  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  };

  const validate = (num, pos, board) => {
    const [r, c] = pos;

    // Check rows
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // Check cols
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Check box
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    } */

  //   return true;
  // };



// };

console.table(solve(make()));

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};