function run (arr) {
	let fl =0;
	for(let i=0; i<arr.lenth; i++) {
		for(let j=0; j<arr.length; j++) {
			if(arr[i][j] === '-') {
				arrNew = isValid();
			}
			if(arrNew.length === 1) {
				arr[i][j] = arrNew[0];
			}
			else fl++;
		}
	}

	if(fl>0) return run(arr);
	else return "Sudoku is solved";
}
