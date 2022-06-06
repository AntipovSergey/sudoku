// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
	const solveInner = () => {
		const currPos = findEmpty(arr);

		if (currPos === null) {
			return true;
		}
		for (let i = 1; i < size + 1; i++) {
			const currNum = i.toString();
			const isValid = validate(currNum, currPos, arr);
			// console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
			if (isValid) {
				const [x, y] = currPos;
				arr[x][y] = currNum;

				if (solveInner()) {
					return true;
				}
				arr[x][y] = '-';
			}
		}
		return false;
	};
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
        return false;
      }
    }
  }
  return true;
}

const validate = (num, pos, arr) => {
  const [r, c] = pos;
  
  // проверка строк
  for (let i = 0; i < size; i++) {
  if (arr[i][c] === num && i !== r) {
  return false;
  }
  }
  
  // проверка колонок
  for (let i = 0; i < size; i++) {
  if (arr[r][i] === num && i !== c) {
  return false;
  }
  }
  
  // проверка бокса
  const boxRow = Math.floor(r / boxSize) * boxSize;
  const boxCol = Math.floor(c / boxSize) * boxSize;
  
  for (let i = boxRow; i < boxRow + boxSize; i++) {
  for (let j = boxCol; j < boxCol + boxSize; j++) {
  if (arr[i][j] === num && i !== r && j !== c) {
  return false;
  }
  }
  }
  
  return true;
  }; 

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
}




// Exports all the functions to use them in another file.
module.exports = {
	solve,
	isSolved,
	prettyBoard,
};
