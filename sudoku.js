// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function solve(boardString) {
  let board = [];
  // цикл преобразует строку в массив 9х9
  for (let i = 0; i < boardString.length; i += 9) {
    let row = boardString.slice(i, i + 9).split('');
    board.push(row);
  }
  console.table(board)
  //
  function solveBoard(board) {
    let boardSize = board.length;
    let boxSize = Math.sqrt(boardSize);
    
    function searchEmpty(board) {
      for (let i = 0; i < boardSize; i += 1) {
        for (let j = 0; j < boardSize; j += 1) {
          if (board[i][j] === '-') return [i, j];
        }
      }
      return -1;
    }
    console.log(searchEmpty(board));

    function uniq(num, pos, board) {
      let [x, y] = pos;
      for (let i = 0; i < boardSize; i += 1) {
        if (board[x][i] === num) return false;
        if (board[i][y] === num) return false;
      }
      return true
    }

    function fillNum(board) {
      let currPos = searchEmpty(board);
      
      if (currPos === -1) return true

      for (let i = 1; i <= boardSize; i += 1) {
        let currNum = String(i);

        let checkUniq = uniq(currNum, currPos, board);

        if (checkUniq) {
          console.log('i', currNum)
        }

      }
    }

    fillNum(board)
  }

  solveBoard(board)
}
console.log(solve(str))

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
  solve,
  isSolved,
  prettyBoard,
};
