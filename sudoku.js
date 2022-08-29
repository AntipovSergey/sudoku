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
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  sudokuBaza.forEach(sudoku => {
    let strings = []
    let columns = []
    for (let index = 0; index < sudoku.length; index += 9) {
      let myString = strings.push(sudoku.slice(index, index +9));
      for (let index = 0; index < myString.length; index++) {
        console.log(myString);
        
      }
    }
    
    console.log(strings);
    numbers.forEach(num => {
      // console.log(num);
    });
    
  });
  
  
  console.log(solve());
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
