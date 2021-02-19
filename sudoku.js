// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
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





function column(arr) {
  let arr1 = []
  for (let i = 0; i < arr.length; i++) {
    let column = []
    for (let j = 0; j < arr.length; j++) {
      column.push(arr[j][i])
    }
    arr1.push(column)
  }
  return arr1
}
let sud1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
let sud2 = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'
let sud3 = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9'
let regex = /(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})/gi
let string = sud3
let a = string.replace(regex, '$1,$2,$3,$4,$5,$6,$7,$8,$9').split(',')
a[0].replace(/\'/g, '')
let b = a[0].split('')

let arr = []
for (let i = 0; i < a.length; i++) {
  let c = a[i].split('')
  arr.push(c)
}
// console.log(arr);
// Функция для получения квадрата
function cube(arr, x, y) {
  let block = []
  block.push(arr[x][y], arr[x - 1][y - 1], arr[x - 1][y + 1], arr[x][y - 1], arr[x + 1][y - 1], arr[x + 1][y], arr[x + 1][y + 1], arr[x - 1][y], arr[x][y + 1])
  return block
}
function massBlock(arr) {
  let arr1 = []
  arr1.push(cube(arr, 1, 1), cube(arr, 1, 4), cube(arr, 1, 7), cube(arr, 4, 1), cube(arr, 4, 4), cube(arr, 4, 7), cube(arr, 7, 1), cube(arr, 7, 4), cube(arr, 7, 7))
  return arr1

}
// console.log(column(arr));

function detectCube(x, y) {
  if (x < 3 && y < 3) {
    return 0;
  }
  if (x < 3 && 2 < y < 6) {
    return 1;
  }
  if (x < 3 && 5 < y < 9) {
    return 2;
  }
  if (2 < x && x < 6 && y < 3) {
    return 3;
  }
  if (2 < x && x < 6 && 2 < y && y < 6) {
    return 4;
  }
  if (2 < x && x < 6 && 5 < y && y < 9) {
    return 5;
  }
  if (5 < x && x < 9 && y < 3) {
    return 6;
  }
  if (5 < x && x < 9 && 2 < y && y < 6) {
    return 7;
  }
  if (5 < x && x < 9 && 5 < y && y < 9) {
    return 8;
  }
}

// console.log(detectCube(4, 8));

function findNum(arr,x,y) {
  let str = arr[x]
  let col = column(arr)[y]
  let bloc = massBlock(arr)[detectCube(x, y)]
  let allNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let k = 0; k < 9; k++) {
    for (let l = 0; l < 9; l++) {
      if (allNumber[l] === str[k] || allNumber[l] === col[k] || allNumber[l] === bloc[k]) {
        allNumber[l] = '0'
      }
    }
  }
  let strNum = allNumber.join('').replace(/0/g, '')
let leng = strNum.length
if(leng == 1){
  return strNum
}
 return false
}

function search(arr) {
  for (let i = 0; i < 9; i++) {
    let x = 0;
    let y = 0;
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] == '-') {
        x = i;
        y = j;
       if(findNum(arr,x,y) !== false){
         arr[i][j]=findNum(arr,x,y)
         search(arr)
       } 
      }
    }
  }
  
  return arr
}

console.log(search(arr));
