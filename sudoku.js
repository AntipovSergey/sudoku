
// const sudokuParse = require('./runner')
const str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---";

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(str) {

  function getArray(str) {
    let reg = /.{9}/g
    let arr = str.match(reg)
    // список строк
    let newArr = arr.map((str) => str.split(''))
    return newArr
  }

  const table = getArray(str);
  function findSpace(checkTable) {
    for (let r = 0; r < checkTable.length; r++) {
      for (let c = 0; c < checkTable.length; c++) {
        if (checkTable[r][c] === '-') {
          return [r, c]
        }
      }
    }
    return null;
  }

  // let position = findSpace(table)

  function checkNum(num, pos, board) {

    let [r, c] = pos

    // console.table(board) //выдет в консоли таблицу судоку
    // console.log(pos) // выдает в консоль координаты первой пустой клетки


    //по вертикали   
    for (let i = 0; i < 9; i++) {
      if (board[i][c] == String(num) && i !== r) {
        // console.log(board[i][c])
        return false
      }
    }
    // //по горизонатли
    for (let i = 0; i < 9; i++) {
      if (board[r][i] == String(num) && i !== c) {
        // console.log(board[r][i])
        return false
      }
    }


    //запихнуть в тело цикла
    if (r == 0 || r == 1 || r == 2) { r = 0 }
    else if (r == 3 || r == 4 || r == 5) { r = 3 }
    else if (r == 6 || r == 7 || r == 8) { r = 6 }


    if (c == 0 || c == 1 || c == 2) { c = 0 }
    else if (c == 3 || c == 4 || c == 5) { c = 3 }
    else if (c == 6 || c == 7 || c == 8) { c = 6 }

    // console.log({ r, c })
    for (let i = r; i < r + 3; i++) {

      for (let j = c; j < c + 3; j++) {
        // console.log(i, j, board[i][j], num)
        if (board[i][j] === String(num)) {

          // console.log(board[i][j])
          return false
        }
      }
    }
    return true
  }


  function solution() {
    let position = findSpace(table)
    let r = findSpace(table)[0]
    let c = findSpace(table)[1]

    if (position !== null) {
      
      for (let i = 1; i <= 9; i++) {
        let num = i.toString();

        if (checkNum(num, position, table)) {
          table[r][c] = num;

          // console.log(table[r][c])
          solution()
          console.table(table)

        } 
        else table[r][c] = '-'


      }
    }
    return table

  }
  solution();


}

console.log(solve(str))

// │ (index) │  0  │  1  │  2  │  3  │  4  │  5  │  6  │  7  │  8  │
// ├─────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
// │    0    │ '1' │ '-' │ '5' │ '8' │ '-' │ '2' │ '-' │ '-' │ '-' │
// │    1    │ '-' │ '9' │ '-' │ '-' │ '7' │ '6' │ '4' │ '-' │ '5' │
// │    2    │ '2' │ '-' │ '-' │ '4' │ '-' │ '-' │ '8' │ '1' │ '9' │
// │    3    │ '-' │ '1' │ '9' │ '-' │ '-' │ '7' │ '3' │ '-' │ '6' │
// │    4    │ '7' │ '6' │ '2' │ '-' │ '8' │ '3' │ '-' │ '9' │ '-' │
// │    5    │ '-' │ '-' │ '-' │ '-' │ '6' │ '1' │ '-' │ '5' │ '-' │
// │    6    │ '-' │ '-' │ '7' │ '6' │ '-' │ '-' │ '-' │ '3' │ '-' │
// │    7    │ '4' │ '3' │ '-' │ '-' │ '2' │ '-' │ '5' │ '-' │ '1' │
// │    8    │ '6' │ '-' │ '-' │ '3' │ '-' │ '8' │ '9' │ '-' │ '-' │

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


}



// Exports all the functions to use them in another file.
module.exports = {

  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}



