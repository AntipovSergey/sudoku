
function solveSudoku(boardString) {
 
  console.log(boardString);
  const board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    const arr = [];
    for (let j = 0; j < 9; j += 1) {
      arr.push(boardString[j + i]);
    }
    board.push(arr);
  }
  console.log('======>',board);
     const size = 9;
     const boxSize = 3;
     
     const findEmpty = (board) => {
         for (let r = 0; r < size; r++) {
             for (let c = 0; c < size; c++) {
                 if(board[r][c] === '-') {
                   //console.log([r,c]);
                     return [r,c];
                 }
             }
         }
         return null;
     }
     
     const validate = (num, pos, board) => {
         const [r,c] = pos;
         //console.log('========;;;;', board);
 
         //Check rows
         for (let i = 0; i < size; i++) {
             if (board[i][c] === num && i !== r) {
                 return false;
             }
         }
 
         //Check cols
         for (let i = 0; i < size; i++) {
             if (board[r][i] === num && i !== c) {
                 return false;
             }
         }
 
 
         //Check box
         const boxRow = Math.floor( r/boxSize ) * boxSize;
         const boxCol = Math.floor( c/boxSize ) * boxSize;
 
         for (let i = boxRow; i < boxRow + boxSize; i++) {
             for (let j = boxCol; j < boxCol + boxSize; j++) {
                 if (board[i][j] === num && i !== r && j !== c) {
                     return false;
                 }
             }
         }
 
         return true;
     }
 
     const solve = () => {
         const currPos = findEmpty(board);
 
         if (currPos === null) {
             return true;
         }
         //console.log('------------------------------');
         for (let i = 1; i < size + 1; i++) {
             const currNum = i.toString();
             const isValid = validate(currNum, currPos, board);
             //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
             if (isValid) {
                 const [x,y] = currPos;
                 board[x][y] = currNum;
 
                 if(solve()) {
                     return true;
                 }
 
                 board[x][y] = '-';
             }
         }
 
         return false;
     }
 
     solve();
    console.table(board);
     return board;
 };
  //solveSudoku()
 //console.table(solveSudoku())
//console.log(solve('---------------------------------------------------------------------------------'));
=======
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 * возвращаем 2мерный массив
 */



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 * возвращает true or false
 */
function isSolved(board) {

  //проверяем строки на дубликаты
  for (let i = 0; i < 9; i++) {
    // console.log('31==',board[i]);
    let row = board[i];
    if (row.filter((el, index) => row.indexOf(el) === index).length < 9) return false;
  };

  //проверяем столбцы на дубликаты
  for (let j = 0; j < 9; j++) {
    let column = [];
    for (let i = 0; i < 9; i++) {
      column.push(board[i][j])
    };
    if (column.filter((el, index) => column.indexOf(el) === index).length < 9) return false;
  };


  //проверяем квадраты на дубликаты
  let abc = [];
  let count = 0
  for (let m = 0; m <= 6; m += 3) {
    for (let k = 0; k <= 6; k += 3) {
      let square = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          square.push(board[i + m][j + k]);
        };
      };
      //уровень квадрата
      if (square.filter((el, index) => square.indexOf(el) === index).length < 9) return false;

    };
  };

  return true;
};



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve. Массив
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку. Оставим реалиазацию на потом
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solveSudoku,
  isSolved,
  prettyBoard,
};