// в solve(board) -
// 1. найти пустую ячейку 
// 2. подставить число и провести проверку
// 3. вернуть решеный борд

//isSolved(board, который вернулся из ф-ции solve)


/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
 function solve(boardString) {
  const fs = require('fs');
  let sudokuBaza = fs.readFileSync('./puzzles.txt','utf-8');
  sudokuBaza = sudokuBaza.split('\n')
  // console.log(sudokuBaza);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // console.table(boradsudoku);
  let boradsudoku
  
  for (let index = 0; index <= 14; index++) {
    
    boradsudoku = prettyBoard(sudokuBaza[index]);
    // console.log(sudokuBaza[index]);
 
    let ifUnclArr = (row,col,num) => {
    for (let check = 0; check < 9; check++) {
      let boxRow = (parseInt(row/3)*3)+parseInt(check/3); 
      let boxCol = (parseInt(col/3)*3)+check%3;
    
        if (boradsudoku[row][check] == num || boradsudoku[check][col] == num || boradsudoku[boxRow][boxCol] == num) {
          return false;
        }
      }
      return true;
    }
     
    let checkSudoku = () => {
      for (let row = 0; row < 9; row++) {
              
            for (let col = 0; col < 9; col++) {
              if(boradsudoku[row][col] === '-') {
                for (let num of numbers){
                  // let accCol = '';
                  // for (let rowMy = [row]; rowMy < boradsudoku.length; rowMy++){
                    //     accCol += boradsudoku[rowMy][col]
                    //   }
                    // if (!boradsudoku[row].includes(num) && !accCol.includes(num)){
                      if (ifUnclArr(row,col,num)){
                        // console.log(num)
                        boradsudoku[row][col] = num;
                        if(checkSudoku(boradsudoku)){
                          return true;
                        }
                        boradsudoku[row][col] = '-'
                      }
                    // }
                  } 
                  return false;
                }
              }
            }
          }
          console.table(boradsudoku)
          checkSudoku(boradsudoku)
          return boradsudoku
        }
        
}


  console.log(solve()) 
  

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
  let sudokuBoard = [];
  let i = 0;
  while(i < board.length) {
    const row = board.substring(i, i + 9);
    sudokuBoard.push(Array.from(row));
    i += 9;
  }
  return sudokuBoard;
}
// [[0,1,2,3,4,5,6,7,8], [9,10,11,12,13,14,15,16,17]]

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
