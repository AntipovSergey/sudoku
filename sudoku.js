// Функции проверки на наличие значений
// по горизнотали
function horizontalСheck(board, number, i) {
    for(let j = 0; j < board.length; j++) {
        if(number === board[i][j]) return false;
    }
}
// по вертикали
function verticalСheck(board, number, j) {
    for(let i = 0; i < board.length; i++) {
        if(number === board[i][j]) return false;
    }
}
// по блоку
function blockCheck(board, i, j, number) {
    for (let k = 0; k < 9; k++) {
      const ai = 3 * Math.floor(i / 3) + Math.floor(k / 3);
      const bj = 3 * Math.floor(j / 3) + (k % 3);
      if (number === board[ai][bj]) return false;
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
function solve(boardString) {

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// Возвращает логическое значение, указывающее, решена ли заданная доска. 
// Поле ввода будет в той форме, в которой возвращается «решение».
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// Принимает доску в той или иной форме и возвращает строку, хорошо отформатированную для вывода на экран. 
// Поле ввода будет в той форме, в которой возвращается «решение».
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
// Экспортирует все функции, чтобы использовать их в другом файле.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
