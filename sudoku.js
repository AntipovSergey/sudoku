// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

};


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {



	let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

	let board = boardString.split('');
	let temp = []
	
	
	for (let i = 0; i < 9; i++){
	  temp[i] = board.splice(0, 9)
	};
	
	console.log(temp);
	//Массив с вертикальными числаси
	let verticalNumbers = [];
	let horizontalNumbers = [];
	for (key in temp){
	  if(temp[key][0] != '-'){
		verticalNumbers.push(temp[key][0]);
	  }
	  if(temp[0][key] != '-'){
		horizontalNumbers.push(temp[0][key]);
	  }
	}
	console.log('Nums of sverticalNumbers = ' + verticalNumbers);
	console.log('Nums of horizontalNumbers = ' + horizontalNumbers);
	
	
	// Массив колторый содержит числа маленького квадрата
	let smallSquare = [];
	for(let numOfSmallSquare = 0; numOfSmallSquare < 3; numOfSmallSquare++){
	  let k = 0;
	  for(let i = k; i < 3 + k; i++){
		smallSquare.push(temp[numOfSmallSquare][i])
	  }
	  k = k + 3;
	}
	
	console.log('Nums of smallSquare = ' + smallSquare);
	
	//Вычисляет массив чисел которые отсутсвуют в массиве маленького квадрата smallSquare
	let smallSquareMissing = [];
	let verticalNumbersMissing = [];
	let horizontalNumbersMissing = [];
	let arrAllNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	
	for(let i = 1; i <= 9; i++){
	  if (smallSquare.indexOf(String(arrAllNum[i])) === -1){
		smallSquareMissing.push(arrAllNum[i]);
	  } 
	if (verticalNumbers.indexOf(String(arrAllNum[i])) === -1){
		verticalNumbersMissing.push(arrAllNum[i]);
	  } 
	  if (horizontalNumbers.indexOf(String(arrAllNum[i])) === -1){
		horizontalNumbersMissing.push(arrAllNum[i]);
	  } 
	}
	
	
	console.log('REsult of smallSquareMissing = ' + smallSquareMissing)
	console.log('REsult of verticalNumbersMissing = ' + verticalNumbersMissing)
	console.log('REsult of horizontalNumbers = ' + horizontalNumbersMissing)
	
	
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
	let boardArr = board.split('');
	let temp = [];
	for (let i = 0; i < 9; i++) {
		temp[i] = boardArr.splice(0, 9);
	};
	return temp;
}


module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
console.log(prettyBoard(boardString));