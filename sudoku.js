/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  let board = [];
  let arr = boardString.split('');
   for (let i = 0; i < arr.length; i++){
    board.push(arr.splice(0,9))
    }
    console.log('=====>',board)
    //findEmpty//
    const size = 9;
    // const boxSize = 3;
     for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        
        if (board[r][c] === '-') {
          console.log('=======>', [r,c])  
          return [r,c]; 
        }
        
      }
      return null;
    }
    
    let [r,c] = pos;
    //check rows

    //  return board
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
