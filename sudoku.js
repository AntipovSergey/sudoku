// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Берет доску в виде строки в формате, который вы видите в файле головоломки. Возвращает что-то, представляющее доску после того, как ваш решатель попытался ее решить. То, как вы представляете свою доску, зависит от вас!

// Разбиение строки на массив
function solve(boardString) {
  console.log('first changes');
  strToArr(boardString)


  return board
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

//Возвращает Boolean решена ли доска
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

//Выводит заполненную доску на экран(Возможно консоль тейбл)

function prettyBoard(board) {

  //Проверка горизонт


  // Проверка верткаль


  //Проверка блок

  //Функця собирающая внутренний массив

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
