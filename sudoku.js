



// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
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
//----------------------------IMPORTS---------------------------------------

//----------------------------------------kris code-------------------------
const fs = require('fs');
let filterContent = fs.readFileSync('sudoku-puzzles.txt', 'utf8') //доступ к файлу с цифрами
let sud = filterContent.split('\n')[0];



//создаем массив из файла sudoku-puzzles.txt
function getSplit(sud){
    let result = sud.split('')
 for(let i = 0; i < result.length; i++) {
     if(result[i] === '-') {
     result[i] = '0'
     }
 } 
     return result

}
 //console.log(getSplit(sud));

let newNum = getSplit(sud)

//перевод в цифры
function arrNum(newNum) {
    for(let i = 0; i < newNum.length; i++){
        newNum[i] = Number(newNum[i])  
    }
    return newNum
}
// console.log(arrNum(newNum));

let allNumArr = arrNum(newNum);

// разбивка по 3 цифры
function numThree(allNumArr) {
 let size = 3;
 let arrThree = [];
 for(let i = 0; i < Math.ceil(allNumArr.length/size); i++) {
     arrThree[i] = allNumArr.slice((i*size), (i*size) + size)
 }
    return arrThree
}
//------------------------------kris code---------------------------


let board = numThree(allNumArr);
console.log('board from kris', board);

//---------------------------Ищем пустые ячейки-----------------------------
function findEmpty (board) {
  let arrOfEmpty = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        arrOfEmpty.push([i,j])
      } 
    }
  }
  console.log(arrOfEmpty); 
  return arrOfEmpty;
}
//---------------------------конец. Нашли все пустые ячейки------------------------


















//----------------------------Получаем массивы возможных значений (горизонт, вертикаль, квадрат)----------------
function findVars (varsH, varsV, varsS) {
  let finalResult = []
  for (let i = 0; i < varsH.length; i++) {
        
    const filteredArray = varsH[i].filter(value => varsV[i].includes(value));
    const resultFin = varsS[i].filter(value => filteredArray.includes(value));
    finalResult.push(resultFin)
  }
  return finalResult
}
//------------------------------Конец. Нашли все возможные значения для каждой пустой ячейки----------------------




//------------------------------- Присваиваем возможные значения каждой пустой ячейке------------------------
function varsForEmptys(arrOfEmpty, vars) {
  let arrOfVars = [...arrOfEmpty]
  for (let i = 0; i < arrOfVars.length; i++) {
    if (arrOfVars[i][0] < 3) {
      console.log(arrOfVars[i][0]);
      arrOfVars[i] =  vars[0]
    }         
  }
    console.log(arrOfVars); 
    return arrOfVars
}
//-----------------------------------------конец. Присвоили --------------------------------------------------


//-------------------------------------------------Находим значения-----------------------------
function findReal() {
  
}
//--------------------------------------------конец.Нашли нужные значения-------------------------





// Exports all the functions to use them in another file.
/*module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
*/
//-------------------------------МОЕ тестирование-------------------------
/*
let board = 
[[1,0,5],    [8,0,2],     [0,0,0],
[0,9,0],     [0,7,6],     [4,0,5],
[2,0,0],     [4,0,0],     [8,1,9],

[0,1,9],     [0,0,7],     [3,0,6],
[7,6,2],     [0,8,3],     [0,9,0],
[0,0,0],     [0,6,1],     [0,5,0],

[0,0,7] ,    [6,0,0] ,    [0,3,0],
[4,3,0],     [0,2,0] ,    [5,0,1],
[6,0,0],     [3,0,8],     [9,0,0]
]

const disp = function(board) {
  console.table(board)
}

//console.log(board[1]);

let vars = [[1,2,5],[],[],]

let arrOfEmpty = findEmpty (board)

varsForEmptys(arrOfEmpty, vars);


let varsH = [[1,2,6,8,9]]
let varsV = [[2,9,7,5]]
let varsS = [[9,1,6]]


const filteredArray = varsH[0].filter(value => varsV[0].includes(value));
console.log('filter',filteredArray);

console.log('perecec find', findVars (varsH, varsV, varsS)); */