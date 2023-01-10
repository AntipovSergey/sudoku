/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

// const str = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
function solve(boardString) {
  // Функция преобразования строки в массив
  const getBoard = function (string) {
    const array = string.split('');
    const board = [];
    while (array.length) {
      board.push(array.splice(0, 9));
    }
    return board;
  };
  // Создаем доску в виде массива
  const board = getBoard(boardString);

  return board;
}

// solve(boardString);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const size = board.length;
  const boxSize = 3;

  // findEmpty функция поиска незаполненого элемента в массиве
  const findEmpty = (board) => {
    // const arr = []
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        if (board[row][column] === '-') {
          // arr.push([row, column])
          return [row, column];
        }
      }
    }
    // return arr
    return null;
  };

  const validate = (num, pos, board) => {
    const [row, column] = pos;

    // Проверка строки
    for (let i = 0; i < size; i += 1) {
      if (board[i][column] === num && i !== row) {
        return false;
      }
    }

    // Проверка колонки
    for (let i = 0; i < size; i += 1) {
      if (board[row][i] === num && i !== column) {
        return false;
      }
    }

    // Поиск начального значения в выбраном квадрате 3х3
    const boxRow = Math.floor(row / boxSize) * boxSize;
    const boxColumn = Math.floor(column / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i += 1) {
      for (let j = boxColumn; j < boxColumn + boxSize; j += 1) {
        if (board[i][j] === num && i === row && j !== column) {
          return false;
        }
      }
    }
    return true;
  };

  const mySolve = () => {
    const currPosition = findEmpty(board);
    if (currPosition === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i += 1) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPosition, board);
      if (isValid) {
        const [x, y] = currPosition;
        board[x][y] = currNum;

        if (mySolve()) {
          return true;
        }
        board[x][y] = '-';
      }
    }
  };

  return mySolve();
  // return board;
}

// const board = solve(str);
// isSolved(board);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {
//   let result = '';
//   for (let i = 1; i <= board.length; i += 1) {
//     result += `${board[i]}\n`.replaceAll(',', ' | ');
//   }
//   return result;
// }

function prettyBoard(board) {
  let res = '';
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      res = `${res} \n------------------------`;
    }
    for (let j = 0; j < board.length; j++) {
      if (j % 3 === 0 && j !== 0) {
        res = ` ${res}` + ' | ';
      }
      if (j % 9 === 0) {
        res = `${res} \n`;
      }
      res = `${res} ${board[i][j]}`;
    }
  }
  return res;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
