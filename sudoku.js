let sudokArrH = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function horizontalSudoku(arr){
  
   for (let i = 0; i < arr.length; i++) {
     for (let x = i+1; x < arr.length; x++) {
      //console.log(arr.length);
      if (arr[i] == arr[x]) {
        
       return false;
     }
   }
 }
 return true;
}
//console.log(horizontalSudoku(sudokArrH));



let sudokArrV = [
  [1],
  [2],
  [1],
  [2],
  [1],
  [2],
  [1],
  [2],
  [1]
];

function vertikalSudoku(arrV){
  let arrH = [];
  for (let x = 0; x < 1; x++) {
  for (let i = 0; i < arrV.length; i++) {
    arrH.push(arrV[x][i]);
    console.log(arrH);
  }
}
  
  for (let i = 0; i < arrH.length; i++) {
    for (let x = i+1; x < arrH.length; x++) {
     //console.log(arr.length);
     if (arrH[i] == arrH[x]) {
       
      return false;
    }
  }
}
return true;
}

console.log(vertikalSudoku(sudokArrV));



// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

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
