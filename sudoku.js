
function makeMatrix(arr) {
  // return (arr.join(''));
  return (arr.join('').match(/\d{9}/g)).map((x) => x.split('').map((y) => Number(y)));
}


function giveArrBase(someString) {
  return someString.split('');
}


function fill(arr) {
  return arr.map((el) => el.map((elem) => {
    if (elem === '-') {
      return Math.floor(Math.random() * (10))
    };
    return elem;
  }));
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