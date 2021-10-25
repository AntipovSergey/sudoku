// Функции проверки на наличие значений
// по горизнотали
function horizontalСheck(board, number, i) {
  for (let j = 0; j < board.length; j++) {
    if (String(number) === board[i][j]) return false;
  }
}
// по вертикали
function verticalСheck(board, number, j) {
  for (let i = 0; i < board.length; i++) {
    if (String(number) === board[i][j]) return false;
  }
}
// по блоку
function blockCheck(board, i, j, number) {
  for (let k = 0; k < 9; k++) {
    const ai = 3 * Math.floor(i / 3) + Math.floor(k / 3);
    const bj = 3 * Math.floor(j / 3) + (k % 3);
    if (String(number) === board[ai][bj]) return false;
  }
  return true;
}




// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Принимает доску в виде строки в формате, который вы видите в файле головоломки. 
// Возвращает что-то, представляющее доску, после того, как решатель попытался ее решить. 
// Как вы представляете свою доску, зависит от вас!
let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
console.table(solve(str))
// console.log(solve(str))
function solve(boardString) {
  let checkArr = []

  for (let ind = 0; ind < str.length; ind += 9) {
    checkArr.push(str.slice(ind, ind + 9).split(''))

  }
  for (let row = 0; row < checkArr.length; row++) {

    for (let col = 0; col < checkArr.length; col++) {

      if (checkArr[row][col] === '-') {
        // checkArr.push(row, col)
        for (let count = 1; count <= 9; count++) {

          if (horizontalСheck(checkArr, count, row) &&  verticalСheck(checkArr, count, col) &&  blockCheck(checkArr, row, col, count)) {
            checkArr[row][col] = String(count)
          } 
        }

      }

    }

  }
  return checkArr
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// Возвращает логическое значение, указывающее, решена ли заданная доска. 
// Поле ввода будет в той форме, в которой возвращается «решение».
function isSolved(board) {

  if (!board.includes('-')) {
    return true
  } else {
    return false
  }

}




// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// Принимает доску в той или иной форме и возвращает строку, хорошо отформатированную для вывода на экран. 
// Поле ввода будет в той форме, в которой возвращается «решение».
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
// Экспортирует все функции, чтобы использовать их в другом файле.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard 
}
