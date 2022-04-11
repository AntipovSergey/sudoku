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
  
}
console.log(getCreateBoard9x9(getStringFromFile(0)).join('\n'))




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
