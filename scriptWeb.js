const buttonSubmit = document.querySelector('.btn-input');
let sudokuValue = document.querySelector('.input');

const initialArr = getArrayFromString(getPuzzle());
// const arr = solve(getArrayFromString(getPuzzle()));

buttonSubmit.addEventListener('click', function () {
	let tbl = document.querySelector('table');
	for (let i = 0; i < tbl.rows.length; i++) {
		for (let j = 0; j < tbl.rows[i].cells.length; j++)
			tbl.rows[i].cells[j].innerText = initialArr[i][j];
	}
})
