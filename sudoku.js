// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const sudoku = [
[1,[1,2,3,4,5,6,7,8,9],5,8,0,2,0,0,0]
[0,9,0,0,7,6,4,0,5]
[2,0,0,4,0,0,8,1,9]
[0,1,9,0,0,7,3,0,6]
[7,6,2,0,8,3,0,9,0]
[0,0,0,0,6,1,0,5,0]
[0,0,7,6,0,0,0,3,0]
[4,3,0,0,2,0,5,0,1]
[6,0,0,3,0,8,9,0,0]
]

const candidates = [1,2,3,4,5,6,7,8,9]


function solve(boardString) {
  for (let x = 0; x < sudoku.length; x++){
    for (let y = 0; y < sudoku[0].length; y++){
      function rowCol (){
        if ( sudoku[x][y] != 0){
          
        }
      }
     
     
     
     

     
     
     
     
     
     
     
     
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



      function col (){

      }



      function sqr (){

      }
    }
  }
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
// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
