// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let sud = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

  let s = 0
  sud.split('').join("")
  let arrResult = [] //
  for (let i = 0 ; i < 9 ; i++){
    let arr = []
    for(let m = 0;m < 9; m++) {
      arr.push(sud.replace(/\-/g,'0').split('')[m+s])  
    }
    s+=9
    arrResult.push(arr)
  }
  console.log(arrResult);


 
}
solve()


const rand = (str) => {
  let arr = str.split('')
  let arrRandom = []
  let z
  
  for(let i = 0; i<9;i++) {
    z = Math.ceil(Math.random()*arr.length-1)
    if(arr[i]==0){
      arrRandom.push(String(z+1))
    }else {
      arrRandom.push(arr[i])
    }
    }
    console.log(arrRandom); 

  }
console.log(rand('010030060')); 

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
