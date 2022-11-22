// /* eslint-disable no-unused-vars */
// /**
//  * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
//  * Возвращает игровое поле после попытки его решить.
//  * Договорись со своей командой, в каком формате возвращать этот результат.
//  */

// возвращает все числа в квадрате 3 на 3 для элемента с координатами х и у
function getSquareElements(board, x, y) {
  const a = Math.floor(x / 3);
  const b = Math.floor(y / 3);
  const arr = [];
  for (let i = 3 * a; i < 3 * a + 3; i++) {
    for (let j = 3 * b; j < 3 * b + 3; j++) {
      arr.push(board[i][j]);
    }
  }
  return arr.filter(el => el !== '-');
}

// для восьми известных чисел возвращает девятое в виде строки
function findLastNumber(arrUnique) {
  for (let i = 1; i <= 9; i++) {
    if (!arrUnique.includes(i.toString())) {
      return i.toString();
    }
  }
}

// проверяет массив на наличие незаполненных цифрами ячеек
function hasEmptyCells(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] === '-') {
        return true;
      }
    }
  }
  return false;
}

// приводит массив к строке
function getString(arr) {
  let res = '';
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      res += arr[i][j];
    }
  }
  return res;
}

// генерирует 9 различных досок, заполняя первое пустое поле числами от 1 до 9
function nextBoards(board) {
  let resBoards = [];
  const [x, y] = findEmptySquare(board);
  for (let i = 1; i <= 9; i++) {
    // создаем глубокую копию массива
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[x][y] = i.toString();
    resBoards.push(newBoard);
  }
  return resBoards;
}

// поиск первой пустой ячейки, возвращает координаты этой ячейки
function findEmptySquare(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '-') {
        return [i, j];
      }
    }
  }
}

function searchForSolution(boards) {
  if (boards.length < 1) {
    return false;
  } else {
    // рекурсивная проверка сгенерированных досок и поиск решения
    const firstBoard = boards.shift();
    const solved = solveRec(firstBoard);
    if (solved != false) {
      return solved;
    } else {
      return searchForSolution(boards);
    }
  }
}

// проверка сгенерированных досок на валидность, что значения не повторяются в строках, столбцах, квадратах
function keepOnlyValid(boards) {
  return boards.filter(board => rowsGood(board) && columnsGood(board) && boxesGood(board));
}

// проверка валидности строк доски
function rowsGood(board) {
  for (let i = 0; i < 9; i++) {
    let rowNumbers = [];
    for (let j = 0; j < 9; j++) {
      if (rowNumbers.includes(board[i][j])) {
        return false;
      } else if (board[i][j] !== '-') {
        rowNumbers.push(board[i][j]);
      }
    }
  }
  return true;
}

// проверка валидности столбцов доски
function columnsGood(board) {
  for (let i = 0; i < 9; i++) {
    let columnNumbers = [];
    for (let j = 0; j < 9; j++) {
      if (columnNumbers.includes(board[j][i])) {
        return false;
      } else if (board[j][i] !== '-') {
        columnNumbers.push(board[j][i]);
      }
    }
  }
  return true;
}

// проверка валидности квадратов
function boxesGood(board) {
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const items = getSquareElements(board, i, j);
      const itemsSet = new Set(items);
      const uniqueNums = Array.from(itemsSet);
      if (uniqueNums.length !== items.length) {
        return false;
      }
    }
    return true;
  }
}

// функция пробует решить без рекурсии, если не получается заполнить все клетки, то запускаем рекурсию
function solve(board) {
  const arr = [];
  const arrColumns = [];
  for (let i = 0; i < 81; i = i + 9) {
    arr.push(board.slice(i, i + 9).split(''));
  }
  for (let i = 0; i < 9; i++) {
    const newColumn = [];
    for (let j = 0; j < 9; j++) {
      newColumn.push(arr[j][i]);
    }
    arrColumns.push(newColumn);
  }

  let step = 0;

  while (hasEmptyCells(arr) && step <= 10) {
    step += 1;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (arr[i][j] === '-') {
          const newArrI = arr[i].filter(el => el !== '-');
          const newArrJ = arrColumns[j].filter(el => el !== '-');
          const newSq = getSquareElements(arr, i, j);
          const arrUnique = [...new Set([...newArrI, ...newArrJ, ...newSq])];
          if (arrUnique.length === 8) {
            arr[i][j] = findLastNumber(arrUnique);
            arrColumns[j][i] = findLastNumber(arrUnique);
          }
        }
      }
    }
  }
  if (!hasEmptyCells(arr)) {
    return getString(arr);
  } else return solveRec(arr);
}

// функция рекурсии
let steps = 0;

function solveRec(arr) {
  if (!hasEmptyCells(arr)) {
    return getString(arr);
  }
  steps += 1;
  if (steps === 1) {
    console.log('запущена рекурсия');
  }
  const possibilities = nextBoards(arr);
  const validBoards = keepOnlyValid(possibilities);
  return searchForSolution(validBoards);
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  let dict = {};
  let numArr = board.split('');
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === '-') {
      return false;
    }
    if (!(+numArr[i] in dict)) {
      dict[Number(numArr[i])] = 1;
    } else {
      dict[Number(numArr[i])] += 1;
    }
  }
  return Object.values(dict).every((el) => el === 9);
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(boardStr) {
  return boardStr;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   // solve,
//   isSolved,
//   prettyBoard,
// };
