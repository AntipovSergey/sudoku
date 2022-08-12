
function squareParser(myIndex, sudoku)
{
	let stroka = myIndex[0];
	console.log(stroka);
	let stolb = myIndex[1];
	console.log(stolb);

	let squareStroka;
	let squareStolb;
	
	let masTmp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	// console.table(sudoku);
	if (stroka >= 0 && stroka < 3)
		squareStroka = 0;
	if (stroka > 2 && stroka < 6)
		squareStroka = 3;
	if (stroka > 5 && stroka < 9)
		squareStroka = 6;

	if (stolb >= 0 && stolb < 3)
		squareStolb = 0;
	if (stolb > 2 && stolb < 6)
		squareStolb = 3;
	if (stolb > 5 && stolb < 9)
		squareStolb = 6;

	for (let i = 0; i < stroka; i++) {
		for (let j = 0; j < stolb; j++) {
			if (masTmp.indexOf(sudoku[i][j] !== -1))
				masTmp.splice(masTmp.indexOf(sudoku[i][j]), 1);
		}
		if (masTmp.length === 1)
			sudoku[i][j] = masTmp[0];
	}
	return sudoku;
}

squareParser([0,2], [
[5,3,'-','-','-','-',7,'-','-','-','-','-','-','-','-'],
[6,1,2,'-','-',1,9,5,'-','-','-','-','-','-'],
[8,4,9,8,'-','-','-','-','-','-','-','-',6,'-','-'],
[8,'-','-','-','-','-','-',6,'-','-','-','-','-','-',3],
[4,'-','-','-','-',8,'-','-',3,'-','-','-','-',1],
[7,'-','-','-','-','-','-',2,'-','-','-','-','-','-',6],
['-','-',6,'-','-','-','-','-','-','-','-',2,8,'-','-'],
['-','-','-','-','-','-',4,1,9,'-','-','-','-',5],
['-','-','-','-','-','-','-','-',8,'-','-','-','-',7,9],
])
