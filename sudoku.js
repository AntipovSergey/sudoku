/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
 function solve(boardString) {
  const board = transformBoard(boardString);
  const sectorSize = 3;

  const solving = () => {
    const currPos = getCurrPos(board);

    if (currPos === null) return true;
    
    for (let i = 1; i <= 9; i++) {

      const currNum = i.toString(); // 4
      const isValid = validate(currNum, currPos, board, sectorSize);
      
      if (isValid) {
        const [row, col] = currPos; // 0, 1
        board[row][col] = currNum;

        console.log(`\n row(${row}), col(${col}): ${currNum}` );

        if (solving()) return true;
        
        board[row][col] = '•';
      }
    }
  }

  
  solving() ? isSolved(true) : isSolved(false);
  return board;
}

function transformBoard(boardString) {
  return boardString.match(/([1-9-]{9})/g).reduce((arr, row) => {
    const dotted = row.replace(/-/g, '•');
    arr.push(dotted.split(''));
    return arr;
  }, []);
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

 function isSolved(solve) {
  return solve;
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
  transformBoard
}
