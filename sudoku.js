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
// let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


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

function solve(str) {
  return solver(ifelse(str))
}
// console.table(solve(str))
// console.log(solve((str)))

function solver(arr) {

  for (let row = 0; row < arr.length; row++) {

    for (let col = 0; col < arr.length; col++) {

      if (arr[row][col] === '-') {
        // checkArr.push(row, col)
        for (let count = 1; count <= 9; count++) {

          if (horizontalСheck(arr, count, row) !== false &&
            verticalСheck(arr, count, col) !== false &&
            blockCheck(arr, row, col, count) !== false) {
            arr[row][col] = String(count)
            if (solver(arr)) {
              return arr
            }
            arr[row][col] = '-'
          }
        }
        return false
      }
    }

  }

  return arr
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// Возвращает логическое значение, указывающее, решена ли заданная доска. 
// Поле ввода будет в той форме, в которой возвращается «решение».
function isSolved(board) {
  if (board === false) {
    return false
  } else {
    return true
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
  let a = board.join('\n')
   
    let regexp = (/([0-9]{1})\W*([0-9]{1})\W*([0-9]{1})\W*([0-9]{1})\W*([0-9]{1})\W*([0-9]{1})\W*([0-9]{1})\W*([0-9]{1})\W*([0-9]{1})\W*/g)
    let regspace = /(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)(\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*\d{1}\W\d{1}\W\d{1}\W*)/g 
   let b =  a.replace(regexp, '|$1 $2 $3 | $4 $5 $6 | $7 $8 $9 | \n')
   return b.replace(regspace, '-----------------------\n|$1$2$3-----------------------\n|$4$5$6-----------------------\n|$7$8$9-----------------------\n')
 
}

// Exports all the functions to use them in another file.
// Экспортирует все функции, чтобы использовать их в другом файле.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
