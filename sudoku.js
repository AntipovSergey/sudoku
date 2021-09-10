// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}

let string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


function makeArrays(boardString) {														//make string into arrayOf9arraysOf3arrays
	let arr = boardString.split("").join(" ").split(" ");
	
	let arrayOf9arrays = createGroups(arr, 9); 

	let arrayOf9arraysOf3arrays = mapFunction(arrayOf9arrays)

	return arrayOf9arraysOf3arrays;
}


function createGroups(arr, numGroups) {									//splits an array into number of arrays requested.
	const perGroup = Math.ceil(arr.length / numGroups);				

	return new Array(numGroups)
		.fill('')
		.map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}

function mapFunction(arrayOf9arrays) {													//per each array within the array, make 3 arrays of 3 elements.

	let arrayOf9arraysOf3arrays = arrayOf9arrays.map(el => createGroups(el, 3))	

	return arrayOf9arraysOf3arrays;
}

function compareLineLengths(arrayOf9arrays){				//checks line with least amount of dashes.
	let dashCount=9;
	let bestLine=0;
	for(let i=0;i<9;i++){
		let iLineDashCount = filterLine(arrayOf9arrays[i].flat());
		if(iLineDashCount<dashCount){
			dashCount=iLineDashCount;
			bestLine=i;
		}
	}
	console.log(bestLine);

}

function filterLine(arrayOf9el,dash="-"){				//returns number of dashes in line.
return arrayOf9el.filter(i=>i==dash).length;		
}

let arrayOf9arraysOf3arrays = makeArrays(string)

compareLineLengths(arrayOf9arraysOf3arrays)


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