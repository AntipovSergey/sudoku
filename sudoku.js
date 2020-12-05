// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Переворот массива
const verticalSearch = (arr) => {
  let verticalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let res = [];
    for (let j = 0; j < arr.length; j++) {
      res.push(arr[j][i]);
    }
    verticalArr.push(res)
  }
  return verticalArr;
}

//Функция поиска недостоющих цифр в массиве
function missingValue(arr) {
  let newArr = []
  for (let i = 0; i < 10; i++) {
    if (arr[i] === '-') {
      newArr.push(' ')
    } else {
      newArr.push(Number(arr[i]))
    }
  }
  const compare = (a, b) => a - b;
  let result = [];
  newArr.sort(compare);
  if (newArr.length === newArr[newArr.length - 1]) {
    result.push(arr.length + 1);
  } else {
    let resultLength = 10;
    for (let i = 1; i < resultLength; i++) {
      if (newArr.indexOf(i) === -1) {
        result.push(i);
      }
    }
  }
  return result = result.map(String)
}

let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function solve() {
  let arr = splitStr(str);
  return arr.map(row => {
    let lackNum = missingValue(row); // получаем недостающие цифры
    console.log(lackNum);
    console.log(splitStr(str));
    row.forEach(item => {
      if (item === '-') {
        for (let num of lackNum) {
          if (verticalSearch(num)) {
            item = num;
          }
        }
      }
    })
  })
}


function solve(boardString) {

}


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
