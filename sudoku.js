// Функция создания массива судоку


function arrBoard(puzzle) {

  let board =[]
  for (i=0;i<9;i++){
    arr = []
    for (i=0;i<81;i=i+9){
      arr.push(puzzle[i])
    }
  }
  
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
