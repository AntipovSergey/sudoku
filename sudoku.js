// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

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
	if(row < 3)
	{
		return 0;
	}
	else if(row < 6)
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
	const {cRow, cCol} = getCubeAt(loc);
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

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
