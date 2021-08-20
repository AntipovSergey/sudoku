// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const met = /.{9}/gm
const newStr = boardString.match(met)
let result  = []
newStr.forEach((el) => result.push(el.split('')))
//console.table(result)
let numbersForCheck = ['1','2','3','4','5','6','7','8','9']

let qdr0 = []
let qdr1 = []
let qdr2 = []
let qdr3 = []
let qdr4 = []
let qdr5 = []
let qdr6 = []
let qdr7 = []
let qdr8 = []

for(let x = 0; x <= 2; x++){
  for (y= 0; y <= 2; y++){
    qdr0.push(result[x][y])
  }
}


for(let x = 0; x <= 2; x++){
  for (y= 3; y <= 5; y++){
    qdr1.push(result[x][y])
  }
}


for(let x = 0; x < 2; x++){
  for (y= 6; y <= 8; y++){
    qdr2.push(result[x][y])
  }
}


for(let x = 3; x <= 5; x++){
  for (y= 0; y <= 2; y++){
    qdr3.push(result[x][y])
  }
}


for(let x = 3; x <= 5; x++){
  for (y= 3; y <= 5; y++){
    qdr4.push(result[x][y])
  }
}


for(let x = 3; x <= 5; x++){
  for (y= 6; y <= 8; y++){
    qdr5.push(result[x][y])
  }
}


for(let x = 6; x <= 8; x++){
  for (y= 0; y <= 2; y++){
    qdr6.push(result[x][y])
  }
}


for(let x = 6; x <= 8; x++){
  for (y= 3; y <= 5; y++){
    qdr7.push(result[x][y])
  }
}

for(let x = 6; x <= 8; x++){
  for (y= 6; y <= 8; y++){
    qdr8.push(result[x][y])
  }
}

//console.log(qdr0,qdr4,qdr8)
for(let i =0 ; i < 9; i++){
  for(let j = 0; j < 9; j++){
    if(result[i][j]=== '-'){
      let currentRow = result[i].join('')
      let currentColumnArr = []
      for(let m = 0; m < 9; m++){
        currentColumnArr.push(result[m][j])
      }
      let currentColumn = currentColumnArr.join('')
      //console.log(currentRow, currentColumn)
      for(let k = 0; k < numbersForCheck.length; k++){
        if(currentRow.includes(numbersForCheck[k]) || currentColumn.includes(numbersForCheck[k])){
          continue
      }else{
        result[i][j] = result[i][j].replace('-',`${numbersForCheck[k]}`)
      }
    }
  }
}
}
return result
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let result = "";
  for (let innarr of board) {
    let row = "";
    for (let elem of innarr) {
      row += (row == "") ? elem : " " + elem;
    }
    result += row + "\n";
  }
  return result;
}


// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
