

console.log(solve(getArrayFromString(getPuzzle())));

// const buttonSubmit = document.querySelector('.btn-input');
// let sudokuValue = document.querySelector('.input');

const arr = solve(getArrayFromString(getPuzzle()));

/* buttonSubmit.addEventListener('click', function () {
	let tbl = document.querySelector('table');
	for (let i = 0; i < tbl.rows.length; i++) {
		for (let j = 0; j < tbl.rows[i].cells.length; j++)
			tbl.rows[i].cells[j].innerText = arr[i][j];
	}
}) */
