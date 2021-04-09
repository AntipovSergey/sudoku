  
const createLoc = (row, col) => {
	let object = {
	  row: row,
	  col: col,
	}
	return object
  }
  

  function convertStringToBoard(string) {
	return string.match(/.{9}/g).map((el) => el.split(''))
  }
  
  
  function equalBoards(copyBoard, board) {
	return JSON.stringify(copyBoard) === JSON.stringify(board)
  }


  function checkHorizontal(arr, board, loc) {
	for (let i = 0; i < board[loc.row].length; i += 1) {
	  let indexRow = arr.indexOf(board[loc.row][i]) 
	  if (indexRow !== -1) {
		arr.splice(indexRow, 1)
	  } 
	}
  }
  
  function checkVertical(arr, board, loc) {
	let verticalLine = []
	for (let i = 0; i < board[loc.col].length; i += 1) {
	  verticalLine.push(board[i][loc.col])
	}
	for (let i = 0; i < verticalLine.length; i += 1) {
	  let indexCol = arr.indexOf(verticalLine[i]) 
	  if (indexCol !== -1) {
		arr.splice(indexCol, 1)
	  } 
	}
  }

  function copyBoard(board) {
	const copyBoard = JSON.parse(JSON.stringify(board))
	return copyBoard
  }

  function createCube(cubeStart)
  {	
	  let cube = []
  
	  for(let i = 0; i < 3; i += 1)
	  {
		  for(let j = 0; j < 3; j += 1)
		  {
			  cube.push(createLoc(cubeStart.row + i, cubeStart.col + j));
		  }
	  }
  
	  return cube;
  }
  
  function generateCubes()
  {
	   let cubes = [];
	  
	  for(let row = 0; row < 9; row += 3)
	  {
		  for(let col = 0; col < 9; col += 3)
		  {
			  const cube = createCube(createLoc(row,col));
			  cubes.push(cube);
		  }
	  }
  
	  return cubes;
  }
  
  function getCubeIndex(val)
  {
	  if(val < 3)
	  {
		  return 0;
	  }
	  else if(val < 6)
	  {
		  return 1;
	  }
	  else
	  {
		  return 2;
	  }
  }
  
  function getCubeAt(loc)
  {
	  return [getCubeIndex(loc.row), getCubeIndex(loc.col)];
  }
  
  function checkSquare(arr, board, loc)
  {
	  const cubes = generateCubes();
	  const { 0 : cRow, 1 : cCol} = getCubeAt(loc);
	  const checkCube = cubes[cRow][cCol];
  
	  for(let i = 0; i < checkCube.length; i += 1)
	  {
		  const { row, col } = checkCube[i];
		  const foundIndex = arr.indexOf(board[row][col]);
  
		  if(foundIndex != -1)
		  {
			  arr.splice(foundIndex, 1);
		  }
	  }
  }

  function emptyElement(board, loc)
  {
	  return board[loc.row][loc.col] == '-';
  }
  
  function trySolveWithSingleMatch(board){

	const oldBoard = copyBoard(board);

	for(let row = 0; row < board.length; row += 1)
	{
		for(let col = 0; col < board.length; col += 1)
		{
			if(emptyElement(board,createLoc(row,col)))
			{
				let arr = ['1','2','3','4','5','6','7','8','9'];
				checkHorizontal(arr, board, createLoc(row,col));
				checkVertical(arr, board, createLoc(row,col));
				checkSquare(arr, board, createLoc(row,col));

				if(arr.length == 1)
				{
					board[row][col] = arr[0];
				}
			}
		}
	}

	if(!equalBoards(oldBoard, board))
	{
		trySolveWithSingleMatch(board);
	}
  }


  function checkHorizontals(board){
	
	const arrValues = '123456789'.split('');
	
	return board.every((row) => 
	  {
		for(let val of arrValues)
		{
		  if(!row.includes(val))
		  {
			return false
		  }
		}
		return true;
	  })
  }
  
  function checkVerticals(board){
	
	let arr = [];
	
	for(let col = 0; col < 9; col += 1)
	{
	  let addArr = [];
	  for(let row = 0; row < 9; row += 1)
	  {
		addArr.push(board[row][col]);
	  }
	  arr.push(addArr);
	}
	
	return checkHorizontals(arr);
  }
  
  function checkBoxes(board){
	
	let checkArr = [];
	let boardInLineArr = board[0];
  
	for(let i = 1; i < board.length; ++i)
	{
	  boardInLineArr = boardInLineArr.concat(board[i]);
	}
  
	for(let g = 0; g < 72;)
	{
	  let boxArr = [];
	  for(let j = 0; j < 3; j += 1, g += 1)
	  {
		for(let k = 0; k < 3; ++k)
		{
		  boxArr.push(boardInLineArr[g + (k * 9)]);
		}
	  }
	  checkArr.push(boxArr);
	  if((g % 9) == 0)
	  {
		g += 18;
	  }
   }
  
	  return checkHorizontals(checkArr);
  }
  

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
	const board = convertStringToBoard(boardString);
	trySolveWithSingleMatch(board);
	console.table(board);
	return board;
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

	return checkHorizontals(board) && checkVerticals(board) && checkBoxes(board);
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

	console.table(board);

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3');
