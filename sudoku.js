const fs = require('fs');

const boardStringVar = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const boardString = boardStringVar.split('\n').map((el) => [...el]);

console.log(boardString[14],'boardString[0]');
// функция созд\многомерного массива
const sudocuCollection = (strArr) => {
let arrayIndex = -1;
  return strArr.reduce((final, curr, i) => {
    if (i % 9 === 0) {
      final.push([curr]);
      arrayIndex++;
    } else {
      final[arrayIndex].push(curr);
    }
    return final;
  }, []);
}

console.log(sudocuCollection(boardString[1]));


// Принимает доску как строку в формате
// вы видите в файле головоломки. Возвращает
// что-то, представляющее доску после
// ваш решатель пытался ее решить.
// То, как вы представляете свою доску, зависит от вас!

let solveSudoku = function(board) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => {
      for (let r = 0; r < size; r++) {
          for (let c = 0; c < size; c++) {
              if(board[r][c] === '-') {
                  return [r,c];
              }
          }
      }
      return null;
  }

  const validate = (num, pos, board) => {
      const [r,c] = pos;

      
      for (let i = 0; i < size; i++) {
          if (board[i][c] === num && i !== r) {
              return false;
          }
      }

      
      for (let i = 0; i < size; i++) {
          if (board[r][i] === num && i !== c) {
              return false;
          }
      }


     
      const boxRow = Math.floor( r/boxSize ) * boxSize;
      const boxCol = Math.floor( c/boxSize ) * boxSize;

      for (let i = boxRow; i < boxRow + boxSize; i++) {
          for (let j = boxCol; j < boxCol + boxSize; j++) {
              if (board[i][j] === num && i !== r && j !== c) {
                  return false;
              }
          }
      }

      return true;
  }

  const solve = () => {
      const currPos = findEmpty(board);

      if (currPos === null) {
          return true;
      }
     
      for (let i = 1; i < size + 1; i++) {
          const currNum = i.toString();
          const isValid = validate(currNum, currPos, board);
          
          if (isValid) {
              const [x,y] = currPos;
              board[x][y] = currNum;

              if(solve()) {
                  return true;
              }

              board[x][y] = '-';
          }
      }

      return false;
  }

  solve();
  return board;
};


console.table(solveSudoku(sudocuCollection(boardString[1])));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solveSudoku,
  isSolved,
  prettyBoard,
};
