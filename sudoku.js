//Takes in function Solved()
//Targets button 1 & 2
//Outputs result in a HTML file
function buttons (func1=1, func2=1) {
	let uIwD = document.querySelector("form");
	let button1 = document.querySelector("#button-1");
	let button2 = document.querySelector("#button-2");

	button1.addEventListener('click', () => {
		if (uIwD.flevel.value > 15) {
			alert ("You entered a wrong number!");
		}
		// (B) CREATE HTML TABLE STRING
		let perrow = 9 // 9 CELLS PER ROW
		html = "<table><tr>";

		// LOOP THROUGH ARRAY AND ADD TABLE CELLS
		for (var i=0; i<pars(uIwD.flevel.value).length; i++) {
			// "NORMAL" CELL
			html += `<td>${pars(uIwD.flevel.value)[i]}</td>`;

			// BREAK INTO NEXT ROW
			let next = i+1;
			if (next%perrow==0 && next!=data.length) {
				html += "</tr><tr>";
			}
		}
		html += "</tr></table>";
		// (C) ATTACH HTML TO CONTAINER
		document.getElementById("table").innerHTML = html;
		//
		alert ("You entered: " + uIwD.flevel.value);
	});


	button2.addEventListener('click', () => {
	})
}

console.log(buttons());

//Takes an index of sudoku from .txt file
//Converts into nested arrays with 9 elem-s
//Returns result [[1, '-', 2, 3, 4, '-', 6, '-', 8, 9], [...]]
function pars(index) {
	const fs = require("fs");

	let filePath = "./sudoku-puzzles.txt";
	let allSudoku = fs.readFileSync(filePath, "utf8").split("\n");
	let count = [0,0];
	let res = [[], [], [], [], [], [], [], [], []];

	for (let i of allSudoku[index]) {
		(i != '-') ? res[count[1]].push(Number(i)) : res[count[1]].push(i);
		count[0]++;
		(count[0] % 9 === 0) ? count[1]++ : null;
	}
	return res
}

//console.table(pars(0));

function correctNum(arrBoard, num, r, c) {
	const obj = {
    0: 0, 1: 0, 2: 0, 3: 3, 4: 3, 5: 3, 6: 6, 7: 6, 8: 6,
  };

	for (let i =0; i < arrBoard.length; i++) {
		if (arrBoard[r][i] === num) {
			return false;
		}
		if (arrBoard[i][c] === num) {
			return false;
		}
	}
	for (let j = obj[r]; j <= obj[r] + 2; j++) {
		for (let x = obj[c]; x <= obj[c] + 2; x++) {
			if(arrBoard[obj[r]][obj[c]] === num) {
				return false;
			}
		}
	}

	return true
}

//console.log(correctNum(pars(0), 3, 0, 1));


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

// Exports all the functions to use them in another file.
/*
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
*/
