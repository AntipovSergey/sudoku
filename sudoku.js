/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
   const arrBoardString = boardString.split('');
   const puzzle = [];
   for (let i = 0; i < boardString.length; i += 9) {
    puzzle.push(arrBoardString.slice(i, i + 9));
  }
  return puzzle;
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
  const stringReplace = board.toString().replace(/,/g, ' ');
    const regex = /\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}/g;
    const matchStr = stringReplace.match(regex);
    const res = matchStr.map((el) => (el.slice(0, 6) + ' ' + el.slice(6, 12) +  ' ' + el.slice(12)));
    res.splice(3, 0, ' '.repeat(19));
    res.splice(7, 0, ' '.repeat(19));
    return res.join('\n');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
