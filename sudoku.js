function makeMatrix(arr) {
  return (arr.join('').match(/\d{9}/g)).map((x) => x.split('').map((y) => Number(y)));
}

function giveArrBase(someString) {
  return someString.split('');
}

function fill(arr) {
  return arr.map((el) => {
    if (el === '-') return Math.ceil(Math.random() * 9);
    return el;
  });
}

//  ВЫбтирает кубики из заполненного массива из 9 массивов. Должен принимать в себя массив, который возвращает solve()
function makeCubes(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i += 3) {
    for (let j = 0; j < arr.length; j += 3) {
      res.push([arr[i][j], arr[i + 1][j], arr[i + 2][j],
      arr[i][j + 1], arr[i + 1][j + 1], arr[i + 2][j + 1],
      arr[i][j + 2], arr[i + 1][j + 2], arr[i + 2][j + 2]]);
    };
  }
  return res;
}

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const arrBase = giveArrBase(boardString);

  const filled = fill(arrBase);

  return makeMatrix(filled);
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
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
