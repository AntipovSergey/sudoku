const fs = require('fs');
function read(num = 0) {
  const fullArr = fs.readFileSync('./puzzles.txt', 'utf-8').trim().split('\n');
  const newArr = fullArr[num].split('');
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(newArr.splice(0, 9));
  }
  return board;
}

/**
 * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
 */

read();

function megasolve(board) {
  
  if (solve(board)) {
    return board;
  } else {
    return "help";
  }
}

function solve(board) {
  
    for (let stroka = 0; stroka < 9; stroka++) {
      for (let stoblbec = 0; stoblbec < 9; stoblbec++) {
        if ((board[stroka][stoblbec] == '-')) {       
          for (let num = 1; num <= 9; num++) {
            if (isSolved(board, stroka, stoblbec, num)) {
              board[stroka][stoblbec] = num.toString();   
              if(solve(board)) {
                return true
              } else {
              board[stroka][stoblbec] = "-";            
            }
          }
        } 
        return false;
      }
    }
  }
  return true;
}

function isSolved(board, row, colum, num) {
  num = num.toString();
  for (let i = 0; i < board.length; i++) {
  
    if (board[row][i] === num || board[i][colum] === num) {   
      return false;
    }
    const startRow = Math.floor(row / 3) * 3;
    const startColum = Math.floor(colum / 3) * 3;
    for (let j = startRow; j < startRow + 3; j++) {
      for (let k = startColum; k < startColum + 3; k++) {
        if (board[j][k] === num) {
          return false;
        } 
      }
    }
  }
  return true
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}


function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
  */
}
let board = read(13);
console.log(megasolve(board));
