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

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

//board = [ [arr] x9 ]

function isSolved(board) {}

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
