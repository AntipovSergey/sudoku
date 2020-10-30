// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
 //ищем пустое значение
 for (let i = 0; i < boardString.length; i++) {
  for (let j = 0; j < boardString[i].length; j++) {
    if(boardString[i][j] === 0 ){
       let  possibleNumbers = [];
      // совершить проверку по массивам
      for (let num = 1; num <= 9; num ++) {
       // если и в строке и в столбце и в группе нет цифры, то добавляем ее в возможные варианты
        if(rowContent[i].includes(num)&&colContent.includes(num)&&groupContent.includes(num)) {
        }else{
          possibleNumbers.push(num)
        }
      }
      if(possibleNumbers.length === 1){
        boardString[i][j] = possibleNumbers[0]
        console.log(boardString)
      }
    }
  }   
 }
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 1; j <= 9; j++) { // просто счетчик возможных значений в строке
      if (board[i].includes(j)) {
      }else{
        return false;
      }
    }
  }
  return true;
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
