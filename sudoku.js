/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
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
    return board
      .match(/[\d-]{9}/g)
      .map((el) => el.split("").join(" "))
      .join("\n");
  }


// Парсинг доски
function parseBoard(line) {

}

// Разбиение общего файла на строки судок
function splitBoards(fileData) {

}

// Проверка валидности доски
function validate(board) {

  function sameHorozontal(board, element, i, j) {
    for (let y = 0; y < board[i].length; y++) {
      if (y === j) continue;
      if (board[i][y] === element) return true;
    }
    return false;
  }
  function isInVertical(board, element, j) {
    return board.findIndex((_, i) =>{
      (board[i][j] === element) === -1 ? false : true;
    }
  }
  function isInBlock(board, element, i, j) {
    let xMin = Math.floor(i / 3) * 3, xMax = xMin + 3;
    let yMin = Math.floor(j / 3) * 3, yMax = yMin + 3;
    for (let x = xMin; x < xMax; x++) 
      for (let y = yMin; y < yMax; y++)
        if (element === board[x][y]) return true;
    return false;
  }

for(let i = 0; i < board.length; i++)
  for(let j = 0; j < board[i].length; j++) {
    if (board[i][j] != null) {
        sameHorozontal(board, element, i, j)  
      }
  }
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).

module.exports = {
  solve,
  isSolved,
  prettyBoard,
  parseBoard,
  splitBoards,
  validate,
};
