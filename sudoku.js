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


function ifelse(data) {
  let checkArr = []
  if (Array.isArray(data)) {
    return data
  } else {
    for (let ind = 0; ind < data.length; ind += 9) {
      checkArr.push(data.slice(ind, ind + 9).split(''))
    }
    return checkArr
  }

}


// console.table(solve(str))
console.log(solve(ifelse(str)))

function solve(ifelse(data)) {
  arr = data


  for (let row = 0; row < arr.length; row++) {

    for (let col = 0; col < arr.length; col++) {

      if (arr[row][col] === '-') {
        // checkArr.push(row, col)
        for (let count = 1; count <= 9; count++) {

          if (horizontalСheck(arr, count, row) !== false && verticalСheck(arr, count, col) !== false && blockCheck(arr, row, col, count) !== false) {
            arr[row][col] = String(count)
          }
          if (solve(arr)) {
            return true
          } else {
            arr[row][col] = '-'
          }
        }
        return false
      }

    }

  }
  return true
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
