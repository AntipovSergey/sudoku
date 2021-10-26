const sudokuParse = require('./runner')
const str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
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
  console.table(table);

  function findSpace(table) {
    for (let i = 0; i < table.length; i++) {
      for (let j = 0; j < table.length; j++) {
        if (table[i][j] === '-') {
          return [i, j]
        }
      }
    }
    return null;
  }

}
solve(str);

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
  // делаем красивую таблицу

}
console.table(prettyBoard('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
// Exports all the functions to use them in another file.
module.exports = {

	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}


// ┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
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
// └─────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘




