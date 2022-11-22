/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */


function sudokuToArr(line) {
  const res = [];
  for (let i = 0; i < line.length; i += 9) {
    res.push(line.slice(i, i + 9).split(''));

  }
  console.table(res)
  return res;
}
function solve(str) {
/* Проверка валидности вводимого значения */

  const sudokuChois = sudokuToArr(str);

  const findEmpty = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (board[row][column] === '-') {
          console.log([row, column]);
          return [row, column];
        }
      }
    }
    return null;
  };
  const valid = (num, position, sudokuChois) => {
    const [row, column] = position;

    /* Строка */
    for (let i = 0; i < 9; i++) {
      if (sudokuChois[i][column] === num && i !== row) {
        return false;
      }
    }
    /* Столбец */
    for (let i = 0; i < 9; i++) {
      if (sudokuChois[row][i] === num && i !== column) {
        return false;
      }
    }
    /* Внутренний квадрат */
    const startPositionCubeRow = Math.floor(row / 3) * 3;
    const startPositionCubeCol = Math.floor(column / 3) * 3;
    for (let i = startPositionCubeRow; i < startPositionCubeRow + 3; i++) {
      for (let j = startPositionCubeCol; j < startPositionCubeCol + 3; j++) {
        if (sudokuChois[i][j] === num && i !== row && j !== column) {
          return false;
        }
      }
    }
    return true;
  };

  const numsFinder = () => {
    const currPos = findEmpty(sudokuChois);
    if (currPos === null) {
      return true;
    }
    console.log('------------');
    for (let i = 1; i <= 9; i++) {
      const currNum = i.toString();
      const isValid = valid(currNum, currPos, sudokuChois);
      console.log('currPos=', currPos, 'currNum=', currNum, 'isValid=', isValid);
      if (isValid) {
        const [x, y] = currPos;
        sudokuChois[x][y] = currNum;

        if (numsFinder()) {
          return true;
        }
        sudokuChois[x][y] = '-';
      }
    }
    return false;
  };
  numsFinder();

  
  return sudokuChois;
}

// console.table(sudokuToArr());
// console.table(solve(sudokuToArr()));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {

  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf('-') === -1) return true;
  }
  return false;

}
 

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */


function prettyBoard(board) {
  let stringPretty = '';
  for(let i = 0; i < board.length; i++){
  stringPretty = stringPretty + board[i].join(' ') + '\n';
  }
  return '\n' + stringPretty

}
  
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  sudokuToArr,
};
