// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.

// const { table } = require("console");

// How you represent your board is up to you!
function solve(boardString) {

}

// Функция search берет данные из фукнции
// table, и возвращает массив массивов,
// где в каждом массиве содержится подмассив
// с двумя числами, где первым числом является 
// координата нуля в подмассиве, а вторым числом
// является координата подмассива с нулем в  
// основном массиве.

const search = (table) => {
  let arrZeros = [];
  for (let arr of table) {
    let fewZeros = arr.filter(elem => elem === 0);
    arrZeros.push(fewZeros);
  }
  
  let min = arrZeros[0];
  let indexMin = 0;

  for (let i = 0; i < arrZeros.length; i++) {
    if (min > arrZeros[i]) {
      min = arrZeros[i];
      indexMin = i;
    }
  }

  let indexOfFirstNull = table[indexMin].findIndex((el) => el === 0);
  return [indexOfFirstNull, indexMin];
}

// console.log(search(table)); 

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
