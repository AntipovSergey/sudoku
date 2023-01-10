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

  // for (let i = 0; i < boardPrototype.length; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     console.log(boardPrototype[i][1]);
  //   }
  // }

  let row;
  const testArr = boardPrototype.map((element, index, array) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === 1) {
        let subArray = array[index];
        for (let j = 0; j < subArray.length; j++) {
          console.log(subArray[j]);
        }
      }
    }
  });

  console.log(boardPrototype);

  const boardPrototype = makeBoard(boardString);
  let row;
  for (let i = 0; i < boardPrototype.length; i++) {
    console.log(boardPrototype[i].length);
    for (let j = 0; j < boardPrototype[i].length; j++) {}
  }

  // console.log(boardPrototype);

  function mainLogic(boardPrototype, counter = 9) {
    //row, column, cube,
    // return mainLogic(boardPrototype, row, column, cube, counter = counter - 1)
  }
}

// let arrMain = [];
// for (let i = 0; i < 9; i++) {
//   arrMain[i] = [];
//   let start = 0;
//   let finish = 9;
//   for (let j = start; j < finish && finish <= boardString.length; j++) {
//     // console.log(boardString[j]);
//     arrMain[i].push(boardString[j]);

//     // start += 1;
//     // finish += 1;
//   }
// }
// console.log(arrMain);
function solve(boardString) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

<<<<<<< HEAD
//board = [ [arr] x9 ]

function isSolved(board) {}
=======
const board = [
[1, 4, 5, 8, 9, 2, 6, 7, 3],
[8, 9, 3, 1, 7, 6, 4, 2, 5],
[2, 7, 6, 4, 3, 5, 8, 1, 9],
[5, 1, 9, 2, 4, 7, 3, 8, 6],
[7, 6, 2, 5, 8, 3, 1, 9, 4],
[3, 8, 4, 9, 6, 1, 7, 5, 2],
[9, 5, 7, 6, 1, 4, 2, 3, 8],
[4, 3, 8, 7, 2, 9, 5, 6, 1],
[6, 2, 1, 3, 5, 8, 9, 4, 7],
];
function isSolved(board) {
  // проверяем строку
  for (let row = 0; row < 9; row++) {
    const usedNumbers = new Set();
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell < 1 || cell > 9 || usedNumbers.has(cell)) {
        console.log(new Set())
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
    for (let sqareCol = 0; sqareCol < 3; sqareCol++){
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
>>>>>>> da81a18d9284d99aec92e546d0ca259ef74e5ac3

console.log(isSolved(board))
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let str = board.flat().join("\n");
  return str;
}
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
