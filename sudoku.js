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
 function solve(boardString, conunter) {
  const fs = require('fs');
  let sudokuBaza = fs.readFileSync('./puzzles.txt','utf-8');
  sudokuBaza = sudokuBaza.split('\n')
  // console.log(sudokuBaza);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // console.table(boradsudoku);
  let boradsudoku
  
  for (let index = 0; index < 1; index++) {
  
    boradsudoku = prettyBoard(sudokuBaza[index]);
 
      // console.log(checkArr);
      for (let row = 0; row < boradsudoku.length; row++) {
        
      for (let col = 0; col < boradsudoku.length; col++) {
        if(boradsudoku[row][col] === '-') {
          for (let num of numbers){
            let accCol = '';
            for (let rowMy = [row]; rowMy < boradsudoku.length; rowMy++){
                accCol += boradsudoku[rowMy][col]
              }
            let checkArr = []
            for (let check = 0; check < 9; check += 3) {
                let arr1 = []
                arr1.push(boradsudoku[check].slice(0, 3))
                arr1.push(boradsudoku[check + 1].slice(0, 3))
                arr1.push(boradsudoku[check + 2].slice(0, 3))
                let arr2 = []
                arr2.push(boradsudoku[check].slice(3, 6))
                arr2.push(boradsudoku[check + 1].slice(3, 6))
                arr2.push(boradsudoku[check + 2].slice(3, 6))
                let arr3 = []
                arr3.push(boradsudoku[check].slice(6))
                arr3.push(boradsudoku[check + 1].slice(6))
                arr3.push(boradsudoku[check + 2].slice(6))
                checkArr.push(arr1.join(','), arr2.join(','), arr3.join(','))
              }
            function ifUnclArr(row, col, num) {
              if(row <= 2){
                if(col <= 2){
                    return !checkArr[0].includes(num)
                  } 
                  if(col >= 3 && col <= 5 ){
                    return !checkArr[1].includes(num)
                  } 
                  if(col >= 6){
                    return !checkArr[2].includes(num)
                  }
                } 
                if(row >= 3 && row <= 5 ){
                  if(col <= 2){
                    return !checkArr[3].includes(num)
                  } 
                  if(col >= 3 && col <= 5 ){
                    return !checkArr[4].includes(num)
                  } 
                  if(col >= 6){
                    return !checkArr[5].includes(num)
                  }
                } 
                if(row >= 6){
                  if(col <= 2){
                    return !checkArr[6].includes(num)
                  } 
                  if(col >= 3 && col <= 5 ){
                    return !checkArr[7].includes(num)
                  } 
                  if(col >= 6){
                    return !checkArr[8].includes(num)
                  }
                }
              }
              if (!boradsudoku[row].includes(num) && !accCol.includes(num) && ifUnclArr(row, col, num)){
                boradsudoku[row][col] = num;
              }
            } 
          }
        }
      }
    }
    // console.log(checkArr);
    //   boradsudoku.forEach(el => {
      //     let counter
      //       if (el.includes('-')){
        //         if(counter > 0){
          //           return (boradsudoku)
          //         }
          //         console.log(counter);
          //       solve(boradsudoku, conunter++) 
          //   }
          // })
  console.table (boradsudoku)
  return boradsudoku
}


  console.log(solve()) 
  
  // sudokuBaza.forEach((sudoku, sudokuIndex) => {
  
  // let strings = []
  // let columns = []
  // for (let index = 0; index < sudoku.length; index += 9) {
  // let myColumns = ''
  // let myString = strings.push(sudoku.slice(index, index +9));
  // for (let i = 0; i < sudoku.length; i += 9) {
  // myColumns += sudoku[i]
  // }
  // // columns.push(myColumns) 

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
