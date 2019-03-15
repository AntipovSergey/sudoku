boardString = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

let boardArray = createBoardArray(boardString);
let squreImposiible = getPresentNumbersSquare(boardArray);
let horImpossible = checkHor(boardArray);
let vertImpossible = checkVert(boardArray);

function createBoardArray(boardString) {
	let boardArray = [];
	let n = 0;
	for (let j = 0; j < 9; j++) {
		boardArray.push([]);
		for (let i = 0; i < 9; i++) {
			boardArray[j][i] = (boardString[i + n]);
		}
		n += 9;
	}
	return boardArray;
}

function getPresentNumbersSquare(boardArray) {
	let presentNumbersSquare = [];
	//presentNumbersSquare.push([]);
	let subArrayCounter = 0;
	let offsetX = 0;
	let offsetY = 0;
	while (offsetY < 9 ){
		while (offsetX < 9 ) {
			presentNumbersSquare.push([]);
			for (let j = offsetY; j < offsetY+3; j++) {
				for (let i = offsetX; i < offsetX+3; i++) {
					if (Number.isInteger(Number(boardArray[j][i]))) {
						presentNumbersSquare[subArrayCounter].push(boardArray[j][i]);
					}
				}
			}			
			subArrayCounter++;
			offsetX += 3;			
		}
		offsetY += 3;
		offsetX = 0;
	}	
	return presentNumbersSquare;
}

function checkHor(arr) { // выдаёт невозможные значения по горизонтали
	let returnArray = [];
	for (let i = 0; i < 9; i++) {
		returnArray[i] = arr[i].join().match(/\d/g);
	}
	return returnArray;
}

function checkVert(arr) { // выдаёт невозможные значения по вертикали
	let vertArr = [];
	for (let i = 0; i < arr.length; i++) { // создаём массив вертикалей
		vertArr[i] = [];
		for (let j = 0; j < arr[i].length; j++) {
			vertArr[i].push(arr[j][i]);
		}
	}
	for (let i = 0; i < 9; i++) {
		vertArr[i] = vertArr[i].join().match(/\d/g);
	}
	return vertArr;
} 

function name(params) {
	
}


