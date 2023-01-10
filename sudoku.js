/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  return mainSolve(boardString);
}

function mainSolve(boardString) {
  function makeBoard(boardString) {
    const str = boardString;
    const count = 9;
    const pattern = new RegExp('.{1,' + count + '}', 'ig');
    let res = str.match(pattern);
    let newArr = res.map((el) =>
      Array.from(el).map((element) =>
        element === '-' ? (element = 0) : Number(element)
      )
    );
    return newArr;
  }

  const boardPrototype = makeBoard(boardString);

  function nextNull(boardPrototype) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (boardPrototype[i][j] === 0) return [i, j];
      }
    }
    return [-1, -1];
  }
  function checkRow(boardPrototype, row, value) {
    //! value  тождественно (===) num в следующих функциях

    for (let i = 0; i < boardPrototype[row].length; i++) {
      //! ищем в одном подмассиве (соответствует строке(row))
      if (boardPrototype[row][i] === value) {
        return false;
      }
    }
    return true;
  }
  function checkColumn(boardPrototype, column, value) {
    //! ищем во всех подмассивах, т.к. колонка проходит через все подмассивы (под одним индексом)
    for (let i = 0; i < boardPrototype.length; i++) {
      if (boardPrototype[i][column] === value) {
        return false;
      }
    }
    return true;
  }

  function checkCube(boardPrototype, row, column, value) {
    //! делим строки и колонки на группы (math.floor позволяет провести группировку по индексам)
    let cubeRow = Math.floor(row / 3) * 3;
    let cubeColumn = Math.floor(column / 3) * 3;
    //! i и j равны 3, т.к. квадраты поделены на 3 подгруппы (от 0 до 2 включительно) (по горизонтали для колонок и по вертикали для строк)

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (boardPrototype[i + cubeRow][j + cubeColumn] === value) {
          return false;
        }
      }
    }
    return true;
  }
  function checkSudokuRules(boardPrototype, row, column, value) {
    //! проверяем, чтобы все 3 правила судоку соблюдались (правила записаны в функциях выше checkRow, checkColumn, checkCube)
    if (
      checkRow(boardPrototype, row, value) &&
      checkColumn(boardPrototype, column, value) &&
      checkCube(boardPrototype, row, column, value)
    )
      return true;
    else return false;
  }
  function fillSudokuWithNums(boardPrototype) {
    let cellNull = nextNull(boardPrototype);
    let row = cellNull[0];
    let column = cellNull[1];

    if (row === -1) return boardPrototype;

    for (let num = 1; num <= 9; num++) {
      if (checkSudokuRules(boardPrototype, row, column, num)) {
        boardPrototype[row][column] = num;
        fillSudokuWithNums(boardPrototype);
      }
    }
    if (nextNull(boardPrototype)[0] !== -1) {
      boardPrototype[row][column] = 0;
    }
    return boardPrototype;
  }
  return fillSudokuWithNums(boardPrototype);
}

//* const testArr = boardPrototype.map((element, index, array) => {
//   for (let i = 0; i < element.length; i++) {
//     if (element[i] === 0) {
//       return [index, i];
//     }
//   }
//   return [-1, -1];
// });

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

// const board = [
//   [1, 4, 5, 8, 9, 2, 6, 7, 3],
//   [8, 9, 3, 1, 7, 6, 4, 2, 5],
//   [2, 7, 6, 4, 3, 5, 8, 1, 9],
//   [5, 1, 9, 2, 4, 7, 3, 8, 6],
//   [7, 6, 2, 5, 8, 3, 1, 9, 4],
//   [3, 8, 4, 9, 6, 1, 7, 5, 2],
//   [9, 5, 7, 6, 1, 4, 2, 3, 8],
//   [4, 3, 8, 7, 2, 9, 5, 6, 1],
//   [6, 2, 1, 3, 5, 8, 9, 4, 7],
// ];

// const board = ;

function isSolved(board) {
  // проверяем строку
  for (let row = 0; row < 9; row++) {
    const usedNumbers = new Set();
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell < 1 || cell > 9 || usedNumbers.has(cell)) {
        console.log(new Set());
        return false;
      }
      usedNumbers.add(cell);
    }
  }

  // проверяем столбец
  for (let col = 0; col < 9; col++) {
    const usedNumbers = new Set();
    for (let row = 0; row < 9; row++) {
      const cell = board[row][col];
      if (usedNumbers.has(cell)) {
        return false;
      }
      usedNumbers.add(cell);
      // console.log(cell)
    }
  }

  // проверяем 3x3 subgrids
  for (let sqareRow = 0; sqareRow < 3; sqareRow++) {
    for (let sqareCol = 0; sqareCol < 3; sqareCol++) {
      const usedNumbers = new Set();
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const cell = board[3 * sqareRow + row][3 * sqareCol + col];
          if (usedNumbers.has(cell)) {
            return false;
          }
          usedNumbers.add(cell);
        }
      }
    }
  }

  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  mainSolve,
};

//! ЛОГИКА ПРОВЕРКИ

//? 1) разбиваем на подмассивы
//? 2) строки меняем на числа ( - => 0 )
//? 3) целевой элемент (el) (0) прогоняется через function (row, column, cube, board[i] = 9)

//? если рекурсия, то return function (row, column, cube, board - 1)
//? базовое условие === правила судоку (число !== числу в столбце && строке && квадрате)

// if === [базовое условие] return el = board
// if !== [базовое условие] return function (row, column, cube, board[i] - 1)

//! Оформление доски

//! Тест
