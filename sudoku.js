// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Принимает доску как строку в формате
// вы видите в файле головоломки. Возвращает
// что-то, представляющее доску после
// ваш решатель пытался ее решить.
// То, как вы представляете свою доску, зависит от вас!

//вспомогательная функция решения судоку



let boardString = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

function solve(boardString) {

// console.log('first changes');
  let row = 0
  let col = 0
  const board = [];
  for (let i = 0; i < 81; i += 9) {
    board.push(boardString.split('').slice(i, i + 9))
  }
  
  for(let i =0; i< board.length; i++){
    if(board[i] === "-"){
      for(){

      }
    }

  }
}


const board = solve(boardString)
console.table(board);

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

// Возвращает логическое значение, указывающее,
// или решается не указанная плата.
// Плата ввода будет в любом
// форма `решить` возвращает.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

// Принимает доску в той или иной форме и
// возвращает правильно отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// форма `решить` возвращает.


function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
