/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

  let board = []
  let preBoard = boardString.split('')
  for (let i = 0; i < preBoard.length; i += 9) {
    board.push(preBoard.slice(i, i + 9))
  }
  //преобразуем строку в доску судоку
  // let board = arr.map(el => el.map(item => item === '-' ? item = 0 : Number(item)))

  // let boardRandom = board.map(el => el.map(item => item === 0 ? item = Math.floor(Math.random()*9)+1 : item))
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }

  const validate = (num, pos, board) => {
    const [r, c] = pos;

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
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  }

  const solveSudoku = () => {
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
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solveSudoku()) {
          return true;
        }

        board[x][y] = '-';
      }
    }

    return false;
  }

  solveSudoku();
  // return console.table(board);
  return board;
};



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  
  if (!board.flat().includes('-')) {
    return true
  }
  return false
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  console.table(board);
  return ''
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
