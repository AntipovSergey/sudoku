/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
 function solve(boardString) {
  const board = transformBoard(boardString);
  const sectorSize = 3;

  const solving = () => {
    const currPos = getCurrPos(board);

    if (currPos === null) return true;
    
    for (let i = 1; i <= 9; i++) {

      const currNum = i.toString(); // 4
      const isValid = validate(currNum, currPos, board, sectorSize);
      
      if (isValid) {
        const [row, col] = currPos; // 0, 1
        board[row][col] = currNum;

        // console.log(`\n row(${row}), col(${col}): ${currNum}` );

        if (solving()) return true;
        
        board[row][col] = '•';
      }
    }
  }

  
  solving() ? isSolved(true) : isSolved(false);
  return board;
}

function transformBoard(boardString) {
  return boardString.match(/([1-9-]{9})/g).reduce((arr, row) => {
    const dotted = row.replace(/-/g, '•');
    arr.push(dotted.split(''));
    return arr;
  }, []);
}

function getCurrPos(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '•') {
        return [row,col];
      }
    }
  }
  return null;
}

function validate(num, pos, board, sectorSize) {
  //      0    1
  const [row, col] = pos;

  // row
  for (let i = 0; i < board.length; i++) {
  // 
    if (board[row][i] === num && i !== col) return false;
  }

  // col
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num && i !== row) return false;
  }

  // sector
  const boxRow = Math.floor(row / sectorSize) * sectorSize; 
  const boxCol = Math.floor(col / sectorSize) * sectorSize;
  //              0          0           3
  for (let i = boxRow; i < boxRow + sectorSize; i++) {
    //             0          0          3
    for (let j = boxCol; j < boxCol + sectorSize; j++) {
      //                   4            0            1
      if (board[i][j] === num && i !== row && j !== col) return false;
    }
  }

  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

 function isSolved(solve) {
  return solve;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  return ` 
  ------- ------- -------
 | ${board[0][0]} ${board[0][1]} ${board[0][2]} | ${board[0][3]} ${board[0][4]} ${board[0][5]} | ${board[0][6]} ${board[0][7]} ${board[0][8]} |
 | ${board[1][0]} ${board[1][1]} ${board[1][2]} | ${board[1][3]} ${board[1][4]} ${board[1][5]} | ${board[1][6]} ${board[1][7]} ${board[1][8]} |
 | ${board[2][0]} ${board[2][1]} ${board[2][2]} | ${board[2][3]} ${board[2][4]} ${board[2][5]} | ${board[2][6]} ${board[2][7]} ${board[2][8]} |
  ------- ------- -------
 | ${board[3][0]} ${board[3][1]} ${board[3][2]} | ${board[3][3]} ${board[3][4]} ${board[3][5]} | ${board[3][6]} ${board[3][7]} ${board[3][8]} |
 | ${board[4][0]} ${board[4][1]} ${board[4][2]} | ${board[4][3]} ${board[4][4]} ${board[4][5]} | ${board[4][6]} ${board[4][7]} ${board[4][8]} |
 | ${board[5][0]} ${board[5][1]} ${board[5][2]} | ${board[5][3]} ${board[5][4]} ${board[5][5]} | ${board[5][6]} ${board[5][7]} ${board[5][8]} |
  ------- ------- -------
 | ${board[6][0]} ${board[6][1]} ${board[6][2]} | ${board[6][3]} ${board[6][4]} ${board[6][5]} | ${board[6][6]} ${board[6][7]} ${board[6][8]} |
 | ${board[7][0]} ${board[7][1]} ${board[7][2]} | ${board[7][3]} ${board[7][4]} ${board[7][5]} | ${board[7][6]} ${board[7][7]} ${board[7][8]} |
 | ${board[8][0]} ${board[8][1]} ${board[8][2]} | ${board[8][3]} ${board[8][4]} ${board[8][5]} | ${board[8][6]} ${board[8][7]} ${board[8][8]} |
  ------- ------- -------
 `;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  transformBoard
}
