
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(str) {
  


  function findSpace(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (boardString[i][j] === '-') {
          return [i, j] 
        }
      }
    }
    return null
  }
}
// сплитим входящую строку 
// должны получить в итоге многомерный массив 9*9 - функция

// находим через циклы индексы элементов, которые равны "-". Получаем координаты "-" return i, j = foo()
//  в arr[i][j] = Math.floor(Math.random(10 - 1) + 1) 
// предварительная проверка на строку столбец и блок
//если 12 строка тру то возвращаемся на 10 строку 
// 



// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  // проверка на соответствие
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let reg = /.{9}/g
  let arr
}


// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
