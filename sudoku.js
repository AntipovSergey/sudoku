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

  Array.prototype.chunk = function(groupsize){
    var sets = [], chunks, i = 0;
    chunks = Math.ceil(this.length / groupsize);
    
    while(i < chunks){
    sets[i] = this.splice(0, groupsize);
    i++;
    }
    return sets;
    }; 
  // for (let i = 1; i < 10; i++) {
  //   for (let j = 0; j < 9; j++) {
  //    for (let k = 0; k < 9; k++) {
  //     if (board[j[k]] === i)
  //    }
  //   }
  // }

for (let j = 0; j < 9; j++) {
  for (let i = 1; i < 10; i ++) {
    if (board[j].indexOf(i.toString()) === -1) { 
      return false;
    }
  } 
}

let vertical = [];
for (let k = 0; k < 9; k++) {
  for (let l = 0; l < 9; l++) {
vertical.push(board[l][k]);
  }
}
let newBoard = vertical.chunk(9);

for (let j = 0; j < 9; j++) {
  for (let i = 1; i < 10; i ++) {
    if (newBoard[j].indexOf(i.toString()) === -1) { 
      return false;
    }
  } 
}

let boxes = []
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let index = math.floor(i % 3) + math.floor(j % 3) * 3
    boxes[index].push(board[i][j]);
  }
}

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
