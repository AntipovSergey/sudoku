const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
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
  solve,
  isSolved,
  prettyBoard,
};



function newArray(str){
  let arr = []
  let str2 = str.split('')
  while (str2.length > 0){
    arr.push(str2.splice(0,9))
  }
  return arr
}
let arr = newArray(str)

function findEmpty(arr){
  let empty = []
  for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === '-'){
        empty.push([i, j])
      }
    }
  }
  return empty
}

function createColumn(arr) {
  let n = arr.length
  let columnArr = [];
  for (let i = 0; i <  n; i++){
    columnArr[i] = []
    for (let j = 0; j < n; j++){
      columnArr[i][j] = arr[j][i]
    }
  }
return columnArr
}

console.table(arr)
console.table(createColumn(arr))
//console.table(findEmpty(arr))

function checkRow(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j< arr[i].length; j++){

    }
  }
}