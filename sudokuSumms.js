function summStrings(array){
	let resultStr = true;
	for (let i = 0; i<9; i++) {
		let summStr = 0;
		for (let j = 0; j<9; j++) {
			summStr += array[i][j]
		}
		if (summStr == 45) {
			resultStr *= true;
		} else {
			resultStr *= false;
		}
	};
	return result;
};


function summColomns(array){
	let resultCol = true;
	for (let i = 0; i<9; i++) {
		let summCol = 0;
		for (let j = 0; j<9; j++) {
			summCol += array[i][j]
		}
		if (summCol == 45) {
			resultCol *= true;
		} else {
			resultCol *= false;
		}
		
	};
	return resultCol;
};


function summCube(array){
	let resultCube = true;
	for (let sCu = 0; sCu<9; sCu+=3) {
		for (let cCu = 0; cCu<9; cCu+=3) {
			let summCube = 0;
			for (let i = sCu; i<sCu+3; i++) {
				for (let j = cCu; j<cCu+3; j++) {
					summCube += array[i][j]
				}
				if (summCube == 45) {
					resultCube *= true;
				} else {
					resultCube *= false;
				}
			}	
		}
	} 	
	return result;
};

function summQuont(array){
	let summQu = 0;
	for (let q = 0; q < array.length; q++) {
		if (typeOf(array[q]) == "string" && array[q].length == 1 ){
			summQu ++
		}
	}
	if (summQu == 81) {
		return true;
	} else {
		return false;
	}
};
