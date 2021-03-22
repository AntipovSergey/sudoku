// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const resultArr = [];
  const boardArr = boardString.split('');
  while (boardArr.length > 0) {
    resultArr.push(boardArr.splice(0, 9));
  }
  
  return resultArr;
}
console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) { 
  const arr=solve(board);
  const possibleArr=[[0,1], []];
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
      if (arr[i][j]==='-'){


        for (let k=1; k<10; k++){
        if (checkCell(k, arr, i, j)){
              possibleArr.push(k)
            }
      }
    }
  }

}

const checkCell=(num, array, i, j)=>{
 if (array[i].includes(num)) return false;

 for (let f=0; f<array.length; f++){
   if (array[f][j]. includes)
 }
}

//                         [5, -, 4, 6, -, 8, 9, -, 2],
//                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
//                         [1, -, 8, 3, 4, 2, 5, 6, 7],
//                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
//                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
//                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                         [3, 4, 5, 2, 8, 6, 1, 7, 9]
// 




// const boxRow=Math.floor(r/boxSize)*boxSize;
// const boxCol=Math.floor(c/boxSize)*boxSize;
// for (let i=boxRow; i<boxRow+boxSize; i++){
//   for (let j=boxCol; j<boxCol+boxSize; j++){

//   }
// }

// }


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
