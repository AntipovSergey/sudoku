// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function solve(boardString) {
	let boardStringArr = str.split("");
	let board = [];
	for (let i = 0; i < boardStringArr.length; i++) {
		board.push(boardStringArr.splice(0, 9));
	}
	return board;
};
//console.log(solve(str));
// возможно ошибка тут

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
//если все заполнено тру

function isSolved (board) {
	const size = 9; // размер таблицы 9 на 9
	const boxSize = 3; // бокс размером 3 на 3
  
	// функция возвращает матрицу пустых элементов, внутри проходимся по всем строкам и всем столбцам
	const findEmpty = (board) => {
	  for(let r = 0; r < size; r++) {
		for(let c = 0; c < size; c++){
		  if(board[r][c]=== '-') // или ошибка тут
		  {
			return[r, c];
		  }
		}
	  }
	  return null;
	}
	function validate (num, pos, board) {
  const [r, c] = pos;
  
  // proverka strok
  for(let i = 0; i < size; i++){
	if(board[i][c] === num && i !== r) {
	  return false;
	}
  }
  
  // proverka stolbcov
  for(let i = 0; i < size; i++){
	if(board[r][i] === num && i !== c) {
	  return false;
	}
  }
  
  // proverka box
  const boxRow = Math.floor(r/boxSize) * boxSize;
  const boxCol = Math.floor(c/boxSize) * boxSize;
  
  for(let i = boxRow; i < boxRow + boxSize; i++){
	for(let j = boxCol; j < boxCol + boxSize; j++){
	  if(board[i][j] === num && i !== r && j !== c) {
		return false;
	  }
	}
  }
  return true;
	}
  
	// функция рекурсии
	const p = () => {
  const currPos = findEmpty(board);
  // если все ячейки заполнены, судоку решено, возвращаем тру
  if(currPos === null) {
	return true;
  }
  // перебираем числа, которые можно вставить в пустые ячейки
  for(let i = 1; i < size+1; i++){
	const currNum = i.toString();
	const isValid = validate(currNum, currPos, board);
  
	if(isValid){
	  const[x, y] = currPos;
	  board[x][y] = currNum;
  
	  if(p()) {
		return true;
	  }
	  board[x][y] = '.';
	}
  }
  
  return false;
	}
	p(); // вызываем рекурсию, чтобы функция запустилась
  return board;
  };
  console.table(solve(str));
  console.table(isSolved(str));

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