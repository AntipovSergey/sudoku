// Функция создания массива судоку


function arrBoard(puzzle) {

  let board =[]
  
  let end = 9
  for (i=0;i<81;i+=9){
    let arr = puzzle.slice(i,end).split('')
    board.push(arr)
    end+=9
  }
  return board
  
}



// Алгоритм решения судоку
function solve(boardString) {

}


// Проверка результата работы функции solve
function isSolved(board) {

}


// Функция вывода строки в стандартный вид(не массив)
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
