// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
/////////////
const board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

// console.log(board.length);
function solve(boardString) {

  const arr = [];
  let coordinate;
  for (let i = 0; i < board.length; i = i + 10) {

    arr.push(board.slice(i, i + 9).split(''));
  }
  console.log(arr);
  // return arr;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[j].length; c++) {
      coordinate = arr[r][c]; ///работает определили координату
      if (coordinate === '-') {
        return [r, c]
      }

      console.log(arr[r][c]);
    }
  }

  console.log('first changes');
}
console.log(solve(board));

const emptySudoku = solvet(resultBoard);
// поиск значений с точкой-пустых элементов
const findEmpty = (emptySudoku) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (emptySudoku[r][c] === ".") {
          return [r, c];
        }
      }


      //   console.log("first changes");
      //   const board = [];
      //   for (let i = 0; i < 9; i++) {
      //     board.push(resultBoard.slice(i * 9, i * 9 + 9).split(""));
      //   }
      //   return board;
      // }

      // Returns a boolean indicating whether
      // or not the provided board is solved.
      // The input board will be in whatever
      // form `solve` returns.
      function isSolved(board) {}

      // Takes in a board in some form and
      // returns a String that's well formatted
      // for output to the screen.
      // The input board will be in whatever
      // form `solve` returns.

      //////красивая доска(работает в виде массива массивов)
      function prettyBoard() {

        //   for(let i = 0; i < board.length; i = i + 9){

        //   arr.push(board.slice(i, i + 9).split(''));
        //   }
        // // console.log(arr);
        //   return arr;
      }
      console.log(prettyBoard(board))

      // function prettyBoard(board) {}


      // Exports all the functions to use them in another file.
      module.exports = {
        solve,
        isSolved,
        prettyBoard,
      };
