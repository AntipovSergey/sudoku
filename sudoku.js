// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!


function parse (string) {
  // let newStr =  string.replace(/\-/gm, 0);
  let arraySudoku = string.match(/.{9}/gm).map(el => el.split(''));
  return arraySudoku;
}
let notParsed = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--\n' +
  '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3\n' +
  '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9\n' +
  '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-\n' +
  '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--\n' +
  '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----\n' +
  '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--\n' +
  '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7\n' +
  '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----\n' +
  '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--\n' +
  '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-\n' +
  '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-\n' +
  '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--\n' +
  '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------\n' +
  '---------------------------------------------------------------------------------\n';
// console.log(parse(notParsed));
function oneGame(array){
  let resArr = [];
  for (let i = 0; i < 9; i++) {
     resArr.push(array[i])
  }
  return resArr
}
//console.log(oneGame(parse(notParsed)));











let oldboardString = 
[["1","-","5","8","-","2","-","-","-"],
["-","9","-","-","7","6","4","-","2"],
["-","8","-","-","6","5","3","-","7"],
["-","6","-","-","5","2","1","-","3"],
["-","7","-","-","4","3","2","-","4"],
["-","-","-","-","3","1","6","-","1"],
["-","3","-","-","2","4","1","-","9"],
["-","2","-","-","1","8","9","-","3"],
["-","1","-","-","0","2","4","-","1"]]

//разделение общего массива на квадраты
function solve(boardString) {

let subString =  boardString.join('').replace(/,/g, "")
let subarray = []
let subsubsubarray = []
for(let i = 0; i<subString.length; i++){
  subarray.push(subString[i])
}
subsubsubarray = subString.match(/(.{1,3})/g)
return subsubsubarray
}

let b = 0
let test = solve(oneGame(parse(notParsed)))

//console.log(test)
let finalArray = []

function newFunc(){
if (finalArray.length > 24) {return finalArray}
for (let i = b; i< test.length; i = i + 3){
 finalArray.push(test[i])
} 
b = b + 1
return newFunc()
}

test2 = newFunc().join("").match(/(.{1,9})/g)
//console.log(test2)
let finalArrayF = []
for (let i = 0; i < test2.length; i++)
finalArrayF.push(test2[i].split(''))
//console.log(finalArrayF)

let finalArrayB = finalArrayF.slice()
function inArray(finalArrayF){
for(let i = 0; i<finalArrayF.length; i++){
  for(let j = 0; j<finalArrayF[i].length; j++){
    if (finalArrayF[i][j] === "-") 
    {for(let z = 1; z<= 9; z++){
      if(!finalArrayF[i].includes(z.toString())){finalArrayB[i][j] = z.toString()}
    }
    }
      

  }
}
return finalArrayB

}
//повтор разбияения массива


//let test3 = inArray(finalArrayF)

//console.log(test3)
console.table(inArray(finalArrayF))
/*
let c = 3
let newFinalArray = test3.join().replace(/,/g,"").match(/(.{1,3})/g)
console.log(newFinalArray)
newnewnewFinalArray = []

function newFunc2(test3){
  if (newnewnewFinalArray.length >= 24) {return newnewnewFinalArray}
  for (i = newFinalArray.length-1; i >= c;  i = i - 3){
    newnewnewFinalArray.push(newFinalArray[i])
  } 
  c = c - 1
  return newFunc2()
  }
  console.table(newFunc2(newFinalArray))

/*
  function newFunc(){
    if (finalArray.length > 24) {return finalArray}
    for (let i = b; i< test.length; i = i + 3){
     finalArray.push(test[i])
    } 
    b = b + 1
    return newFunc()
    }*/



// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
//function isSolved(board) {

//}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
//function prettyBoard(board) {

//}

// преобразователь строчки в массив

 function parse (string) {
	 // let newStr =  string.replace(/\-/gm, 0);
	 let arraySudoku = string.match(/.{9}/gm).map(el => el.split(''));
	 return arraySudoku;
}

// Exports all the functions to use them in another file.
//module.exports = {
//	solve: solve,
//	isSolved: isSolved,
//	prettyBoard: prettyBoard
//}
