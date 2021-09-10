// Takes a board as a string in the format
	// you see in the puzzle file. Returns
	// something representing a board after
	// your solver has tried to solve it.
	// How you represent your board is up to you!
	
	function boardToArray(sudokuString) {
		const arrayOfString = sudokuString.match(/.{9}/g);
		const nestedArrayOfString = arrayOfString.map((el) => el.split(""));
		const nestedArrayNumbers = nestedArrayOfString.map((el) =>
			el.map((element) =>
				element === "-" ? (element = "-") : (element = +element)
			)
		);
		return nestedArrayNumbers;
	}
	let originBoard = boardToArray('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
	let ourBoard = [].concat(originBoard);
	const size = originBoard.length;
	let position = {};
	let candidate;
	
	function findEmpty(board) {
		for (let i = 0; i < size; i++) {
			for (let q = 0; q < size; q++) {
				if(board[i][q] === "-"){
					position.x = q;
					position.y = i;
					return true;
				}
			}
		}
	}
	function validator (num, board ,curPos) {
			//row validation
			for(let i = 0; i <= size; i++) if(board[curPos.y][i] === num) return false; 
			//column validation
			for(let i = 0; i <= size; i++) if(board[i][curPos.x] === num) return false; 
			//box validation
			const startBoxCoordinateX = Math.floor(curpos.x / 3);
			const startBoxCoordinateY = Math.floor(curpos.y / 3);
			for(let i = startBoxCoordinateY; i < 3; i++) {
				for(let j = startBoxCoordinateX; k+j < 3; j++) if(board[curPos.y][curPos.x] === num) return false;
			}
			return true;
		}
	
	function solve(board, countCalls=0) {
			countCalls++;
			console.log(countCalls);
			if (countCalls === 200) {
				return false;
			}
			let candidate;
			findEmpty(board);
			for(let i = 1; i < 9; i++){
				if(validator(i, board, position)) {
					ourBoard[position.y][position.x] = candidate;
					if(solve(board, countCalls)) {
						return board;
					}
				}
			}
				console.log('Кирилл где-то косякнул')
				ourBoard[position.y][position.x] = '-';
			}
	
	// Returns a boolean indicating whether
	// or not the provided board is solved.
	// The input board will be in whatever
	// form `solve` returns.
	function isSolved(board) {}
	
	// Takes in a board in some form and
	// returns a String that's well formatted
	// for output to the screen.
	// The input board will be in whatever
	// form `solve` returns.
	
	function prettyBoard(nestedArrayNumbers) {
		let prettySudoku = "\n";
		for (let i = 0; i < nestedArrayNumbers.length; i++) {
			prettySudoku += `${nestedArrayNumbers[i].join("  ")}\n` + `\n`;
		}
		return prettySudoku;
	}
	
	
	// Exports all the functions to use them in another file.
	module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard,
	boardToArray: boardToArray,
	}
	