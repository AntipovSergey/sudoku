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
//   let board = [['1','-','5','8','-','2','-','-','-',], 
//               ['-','9','-','-','7','6','4','-','5',], 
//               ['2','-','-','4','-','-','8','1','9',], 
//               ['-','1','9','-','-','7','3','-','6',], 
//               ['7','6','2','-','8','3','-','9','-',], 
//               ['-','-','-','-','6','1','-','5','-',], 
//               ['-','-','7','6','-','-','-','3','-',], 
//               ['4','3','-','-','2','-','5','-','1',], 
//               ['6','-','-','3','-','8','9','-','-',]];

//   const size = 9;
//   const squareSize = 3;

//   const findEmptyCell = (board) => {    // поиск пустой ячейки
//     for (let r = 0; r < size; r++) {
//       for (let c = 0; c < size; c++) {
//         if(board[r][c] === '-') {
//           return [r,c];
//         }
//       }
//     }
//     return null;
//   }
  
//   const validateSudoku = (number, position, board) => {
//     const [r,c] = position;

//     // проверка полного ряда
//     for (let i = 0; i < size; i++) {
//       if(board[i][c] === number && i !== r)
//         return false;
//       }
//     }

//     // проверка ячеек 
//     for(let i = 0; i < size; i++){
//       if(board[r][i] === number && i !== c){
//         return false;
//       }
//     }

//     //поиск квадрата 
//     const squareRow = Math.floor(r/squareSize) * squareSize;
//     const squareCell = Math.floor(c/squareSize) * squareSize;

//     for(let i = squareRow; i < squareRow + squareSize; i++){
//       for(let j = squareCell; j < squareCell + squareSize; j++) {
//         if(board[i][j] === number && i !== r && j !== c){
//           return false;
//         }
//       }
//     }
//     return true;
//   }

//   const solve = () => {
//     const currentPos = findEmptyCell(board);

//     if(currentPos === null) {
//       return true;
//     }
    
//     for(let i = 1; i < size + 1; i++) {
//       const currentNumber = i.toString();
//       const isValid = validateSudoku(number,position,board);
      
//       if(isValid) {
//         const [x,y] = currentPos;
//         board [x,y] = currentNUmber;

//         if(solve()) {
//           return true;
//         }

//         board[x][y] = '-';
//       }
//     }
//     return false;
//   }

//   solve();
//   return board;
// }
// }
// console.log(isSolved)
// console.table(board);
// console.table(isSolved(board));

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
