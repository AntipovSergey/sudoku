// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

let str1 = '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7';
let str2 = '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----';
let str3 = '---------------------------------------------------------------------------------';

function solve(boardString) {
  let board = [];
  // цикл преобразует строку в массив 9х9
  for (let i = 0; i < boardString.length; i += 9) {
    let row = boardString.slice(i, i + 9).split('');
    board.push(row);
  }
  console.table(board);

  // функция, решающая судоку
  function solveBoard(board) {
    let boardSize = board.length;
    let boxSize = Math.sqrt(boardSize);
    
    // функция, которая находит координаты пустых клеток
    function searchEmpty(board) {
      for (let i = 0; i < boardSize; i += 1) {
        for (let j = 0; j < boardSize; j += 1) {
          if (board[i][j] === '-') return [i, j];
        }
      }
      return -1;
    }

    // функция, проверяющая уникальность очередного числа в текущую клетку судоку
    function uniq(num, pos, board) {
      let [x, y] = pos;
      for (let i = 0; i < boardSize; i += 1) {
        if (board[x][i] === num) return false;
        if (board[i][y] === num) return false;
      }
      let i2 = Math.floor(x / boxSize) * boxSize;
      let j2 = Math.floor(y / boxSize) * boxSize;
      for (let i = i2; i < i2 + boxSize; i += 1) {
        for (let j = j2; j < j2 + boxSize; j += 1) {
          if (board[i][j] === num) return false;
        }
      }
      return true;
    }

    // функция, заполняющая пустые клетки судоку
    function fillСell(board) {
      let currPos = searchEmpty(board);
      
      if (currPos === -1) return true;

      for (let i = 1; i <= boardSize; i += 1) {
        let currNum = String(i);

        let checkUniq = uniq(currNum, currPos, board);

        if (checkUniq) {
          let [x, y] = currPos;
          board[x][y] = currNum;

          if (fillСell(board)) {
            return true;
          }
          board[x][y] = '-';
        }
      }
      return false;
    }
    fillСell(board);
  }
  solveBoard(board);
  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  let numbers = board.join(',').split(',');
  return (!numbers.includes('-'));
}
// isSolved(solve(str))
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  console.table(board);
  let boardToStr = board.join('\n');
  return boardToStr;
}

prettyBoard(solve(str1));
prettyBoard(solve(str2));
prettyBoard(solve(str3));

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
