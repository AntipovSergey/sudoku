let str =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';


    function solve(str) {                   // CREATE BOARD
      let a = 0;
      let b = 9;
      let board = [];
      for (let i = 0; i < 9; i++) {
        board.push(str.slice(a, b).split(''));
        a += 9;
        b += 9;
      }
      return board;
    }

    let board = solve(str)
    
    for(let start = 0; start < 10; start++) { //RESTART

    console.table(board);
    
    
    function isSolved(board) {              // FIND FIRST INDEX OF '-'
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === '-') {
            return [i, board[i].indexOf(board[i][j])];
          }
        }
      }
    }
    
    let index = (isSolved(board));
    
    
    let variants = ['1','2','3','4','5','6','7','8','9'];
    
    
    if(index) {                               // CHECK FOR IS '-'
      function findSquare(board,variants) {    // SEARCH VARIANTS OF SQUARE
    
        for (let i=0; i < board[0].length; i++) {
            variants = variants.filter(el => el !== board[0][i]);
            }
        return variants;
    }
    }
    
    let resultFirstChecking = findSquare(board, variants)
    console.log(resultFirstChecking)
    
    
    
    function findInRow(board,resultFirstChecking){ // SEARCH VARIANTS OF ROW
     newArr = [];
        for(let j = 0; j < 3; j++){
            for (let i=0; i < 3; i++) {
                newArr.push(board[j][i]);
            }
        }
        
        for (let i=0; i < newArr.length; i++){
          resultFirstChecking = resultFirstChecking.filter(el => el !== newArr[i]);
        }
      return resultFirstChecking;
    }
    
    
    let resultSecondChecking = findInRow(board,resultFirstChecking)
    console.log(resultSecondChecking)
    
    
    // let lastResult = [1]
    // if(lastResult.length === 1) {
    //   board[index[0]][index[1]] = lastResult[0]
    // }



  }



// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// function solve(boardString) {

// }

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// function isSolved(board) {

// }

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// function prettyBoard(board) {

// }

// Exports all the functions to use them in another file.
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }
