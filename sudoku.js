// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

let boardString = 
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
let finalArray = []
for(let i = 0; i<subString.length; i++){
  subarray.push(subString[i])
}

//let subsubarray = subString[i].split('')
subsubsubarray = subString.match(/(.{1,3})/g)
return subsubsubarray
}


let b = 0
let test = solve(boardString)

console.log(test)
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
console.log(test2)
let finalArrayF = []
for (let i = 0; i < test2.length; i++)
finalArrayF.push(test2[i].split(''))
console.log(finalArrayF)



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

// Exports all the functions to use them in another file.
//module.exports = {
//	solve: solve,
//	isSolved: isSolved,
//	prettyBoard: prettyBoard
//}
