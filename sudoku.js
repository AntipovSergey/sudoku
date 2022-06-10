



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
const {fullArrH, fullArrV, fullArrSqr} = require ('./CheckEmpty')
console.log('111', fullArrSqr);






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

function name(params) {
  
}

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
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

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