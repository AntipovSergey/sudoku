/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(board) { 
  let row = 0;
  let col = 0;
  let emptySlots = true;
  if (row === 8 && column === 8) return true;

  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === 0) {
        row = i;
        col = j;
        emptySlots = false;
      }
    }
    
  }
  if (emptySlots === true) return true;
  let num = 1;

  for (let i = 1; i <= 9; i += 1) {
    board[row][col] = num;
    if (solve(board) === true) return true;
    else board[row][col] = 0;
  }
  return false;
}

 let emptyBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

// console.log(solve(emptyBoard));
// console.log(emptyBoard);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  let line = [];
  let vertical = [];
  let square = [];
  for (let i = 0; i < board.length; i++) {
    line = board[i];
    for (let j = 0; j < board.length; j++) {
      if (line.indexOf(line[j]) !== line.lastIndexOf(line[j])) return false; 
    }
  }
  for (let i = 0; i < board.length; i++) {
    vertical = [];
    for (let j = 0; j < board.length; j++) {
      vertical.push(board[j][i]);
      if (vertical.indexOf(vertical[j]) !== vertical.lastIndexOf(vertical[j])) return false;
    }
  }
  // for (let i = 0; i < 3; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     square.push(board[i][j]);
  //   }
  // }
  return true;
}

// console.log(isSolved(array));
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  //пример аргумента который ожидает функция
  // array = [
  //   [1, 2, 3, 1, 2, 3, 1, 2, 3],
  //   [4, 5, 6, 4, 5, 6, 4, 5, 6],
  //   [7, 8, 9, 7, 8, 9, 7, 8, 9],
  //   [1, 2, 3, 1, 2, 3, 1, 2, 3],
  //   [4, 5, 6, 4, 5, 6, 4, 5, 6],
  //   [7, 8, 9, 7, 8, 9, 7, 8, 9],
  //   [1, 2, 3, 1, 2, 3, 1, 2, 3],
  //   [4, 5, 6, 4, 5, 6, 4, 5, 6],
  //   [7, 8, 9, 7, 8, 9, 7, 8, 9],
  // ];

  let res = board.map((row) => {
    //добавить пробел и разделитель каждому третьему элменту массива и склеить в строку
    row = row
      .map((iteam, index) => {
        return (index + 1) % 3 === 0 && index < 7 ? iteam + " |" : iteam;
      })
      .join(" ");
    return row;
  });

  res = res.map((item, index) => {
    return ((index + 1) % 3 === 0 && index < 7) ? item + "\n\n" : item + "\n";
  });
  
  //удалить лишние переносы в начале и конце
  res.unshift('\n')
  lastRow = res[res.length -1].trim()
  res.pop()
  res.push(lastRow)

  return res.join("")
}

// console.log(prettyBoard(emptyBoard));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
