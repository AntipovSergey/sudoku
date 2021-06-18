// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const sudoku = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],

  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],

  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0],
]

let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const getFreeCand = (x, y, sudoku) => {
  const freedDig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let index = 0; index < 9; index++) {
    const element = sudoku[x][index]
    const element2 = sudoku[index][y]
    // console.log();
    if (element) {
      freedDig[element] = 0
    }
    if (element2) {
      freedDig[element2] = 0
    }
  }
  return freedDig.filter(el => el)

}
// console.log('getFreeCand');
// const resuult = getFreeCand(1, 0, sudoku)
// console.log(resuult);



function solve(boardString) {

   let board = boardString.replace(/-/g, 0).match(/(\d{9})/g, '$1 ');

      for (let i = 0; i < board.length; i++) {
          board[i] = board[i].split('');
      }    
  

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      //function rowCol (){
      if (board[x][y] == 0) {

         board[x][y] = getFreeCand(x,y,sudoku).length==1 ? getFreeCand(x,y,sudoku)[0] : getFreeCand(x,y,sudoku);
      }
      //console.log(boardString[x][y], '=SV==>', !Array.isArray(boardString[x][y]), 'boardString[x] ==>', boardString[x][y]);

      // if (!Array.isArray(boardString[x][y])) {

      //   let current = getFreeCand(x, y, boardString)


      // }
    }
  
  }console.log(board)
  return board












  // function row (){
  //   if (sudoku[x][y] === 0){
  //     sudoku[x][y] = candidates;

  //     for (let z = 0; z <= sudoku[x][y]; z++){
  //       for(let x = 0; x < sudoku.length; x++){
  //         if (sudoku[x][y] != sudoku[x][y][z])
  //       let currentCell = candidates.
  //       }
  //     if (sudoku[x][y] != sudoku[x][y][z])
  //       let currentCell = candidates.
  //     }
  //   }
  // }



  // function col (){

  // }



  // function sqr (){

  // }
  //   }
  // }

  // function solve(boardString) {
  //     const board = boardString
  //         .replace(/-/g, 0)
  //         .match(/(\d{9})/g, '$1 ');

  //     for (let i = 0; i < board.length; i++) {
  //         board[i] = board[i].split('');
  //     }    
  //     return board
  // }
  // }
}


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

//     return board;

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard
}
