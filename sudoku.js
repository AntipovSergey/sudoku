/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */


function solver(sudokuLine) {
  let res = [];
  for (let i = 0; i < sudokuLine.length; i += 9) {
    res.push(sudokuLine.slice(i, i + 9).split(''));
  }
  return res;
}
// console.log(solver())
    
  const solve = () => {
    const currPos = findEmpty(board);
    if (currPos === null) {
      return true;
    }
    let board = solver();
    for (let i = 1; i < boxLength + 1; i++) {
      const currNum = i.toString();
      const isValid = valid(currNum, currPos, board);
      console.log('currPos=', currPos, 'currNum=', currNum, 'isValid=', isValid);
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;
        
        if (solve()) {
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false;
  };
  solve();
  return board;

/* Проверка валидности вводимого значения */

let sudokuChois = solver();

const valid = (num, position, sudokuChois) => {
  let [r,c] = position;

/* Строка */
for (let i = 0; i < 9; i++) {
  if(sudokuChois[i][c] === num && i !== r) {
    return false;
  }
}
/* Столбец */
for (let i = 0; i < 9; i++) {
  if(sudokuChois[r][i] === num && i !== c) {
    return false;
  }
}
/* Внутренний квадрат */
let startPositionCubeRow = Math.floor(r/3)*3;
let startPositionCubeCol = Math.floor(c/3)*3;
for (let i = startPositionCubeRow; i < startPositionCubeRow + startPositionCubeCol; i++){
  for (let j = startPositionCubeCol; j < startPositionCubeCol + startPositionCubeRow; j++){
    if(sudokuChois[i][j] === num && i !== r && j !== c) {
      return false
    }
  }
}
return true
}

// console.table(solver());
// console.table(sudokuSolver(solver()));

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
  // solve,
  isSolved,
  prettyBoard,
};
