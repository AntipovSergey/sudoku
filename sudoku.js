const fs = require('fs')
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const getStringFromFile = (num)=>{ //получение строки из файла
return fs.readFileSync("sudoku-puzzles.txt",'utf-8').split('\n')[num]
}


const getCreateBoard9x9 = (stringBoard)=>{ //получение поля,принимает функцию получения строки getStringFromFile
let newArr = [...Array(9)]
let tmp = [...stringBoard]
return newArr.map((el,index)=>{el=tmp.slice(0,9);
tmp = tmp.slice(9)
return el.join('')
})

const column = (arr, index) => arr.map((el) => el[index]);// получение столбца 
  
}
console.log(getCreateBoard9x9(getStringFromFile(0)).join('\n'));

const board9x9 = getCreateBoard9x9(getStringFromFile(0));


const blok = (arr, column, str ) => {
let endStr = 0
  if (str < 3) {
 endStr = 3
} else if (str < 6) {
  endStr = 6
} else {
  endStr = 9
}
let endColumn = 0
  if (column < 3) {
    endColumn = 3
  } else if (column < 6) {
    endColumn = 6
  } else {
    endColumn = 9
  }
  let board3x3 = []
  for (let i = endColumn - 3; i < endColumn; i++) {
    board3x3.push(arr[i].slice(endStr - 3, endStr));
  }
  return board3x3.join('\n')
}

console.log(blok(board9x9, 7, 6))
// console.log(blok(board9x9, 0, 0))




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

