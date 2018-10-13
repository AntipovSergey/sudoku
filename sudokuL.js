function sudokuSolveOneTime(arraySudoku) {

	for (let i=0; i<9; i++) {
		for (let j=0; j<9; j++) {
			if (checkNumber(arraySudoku[i][j]) == false){
				arraySudoku[i][j] = [];
				arraySudoku[i][j] = findIsklArrIJ(i,j,arraySudoku);
			}
		}
	}


	for (let i=0; i<9; i++) {
		for (let j=0; j<9; j++) {
			if (checkNumber(arraySudoku[i][j]) == false){
				arraySudoku[i][j] = findApropArrIJ(arraySudoku[i][j]);
			}
		}
	}
	for (let i=0; i<9; i++) {
		for (let j=0; j<9; j++) {
			if (typeof(arraySudoku[i][j]) == "object" && arraySudoku[i][j].length == 0){
				arraySudoku = [ky]
				return arraySudoku
			}
		}
	}

	for (let i=0; i<9; i++) {
		for (let j=0; j<9; j++) {
			if (typeof(arraySudoku[i][j]) == "object" && arraySudoku[i][j].length == 1){
				arraySudoku[i][j] = arraySudoku[i][j][0];
			}
		}
	}
	return arraySudoku
}

function checkNumber(num){
	if (vxod(num, ["1","2","3","4","5","6","7","8","9"]) == true) {
		return true
	}
	else {return false
	}
}

function vxod(symbl, arraySymbls){
	for (let i = 0; i < arraySymbls.length; i++){
		if (symbl == arraySymbls[i]){
			return true;
		}
	}
	return false;
}

function findIsklArrIJ(stroka, column, array9x9){
	let IsklArrIJ=[];
	for (let j = 0; j < 9; j++){
		if (checkNumber(array9x9[stroka][j]) == true ) {
			IsklArrIJ.push(array9x9[stroka][j]) ;
		}
	}  
	for (let i = 0; i < 9; i++){
		if (checkNumber(array9x9[i][column]) == true )  {
			IsklArrIJ.push(array9x9[i][column]) ;
		}
	}  

	strokaBase = (Math.floor(stroka / 3))*3;
	columnBase = (Math.floor(column / 3))*3;
	for (let i = strokaBase; i < strokaBase+3; i++){
		for (let j = columnBase; j < columnBase+3; j++){
			if (checkNumber(array9x9[i][j]) == true ) {
				IsklArrIJ.push(array9x9[i][j]) ;
			}
		} 
	}
	return IsklArrIJ;
}

function findApropArrIJ(IsklArrIJ){
	let ApropArrIJ = [];
	for (let n = 1; n < 10; n++) {
		if (!(vxod(String(n), IsklArrIJ))){
			ApropArrIJ.push(String(n))
		}
	}
	return  ApropArrIJ;
}

function summSudoky(arraySummSudoky ){
	summSud = 0;
	for (let i=0; i<9; i++) {
		for (let j=0; j<9; j++) {
			if (checkNumber(arraySummSudoky[i][j]) ==true){
				summSud += parseInt(arraySummSudoky[i][j])
			}
		}
	}
	return summSud
}


function sudokuSolve(arraySudoku) {
	let count = 0;
	if (arraySudoku[0] == "ky" ) {
		return "Ваш судоку не решаем"
	} else {
		while (summSudoky(arraySudoku) != 405 || count < 5) {
			arraySudoku = sudokuSolveOneTime(arraySudoku) 
			count++
		}
		return arraySudoku
	}
}

function makeSudoky(line){
	let sudoku = [];
	let position = 0;
	for (let i=0; i<9; i++) {
		sudoku.push([]);

		for (let j=0; j<9; j++) {
			sudoku[i][j] = line[position];
			position++;
		}
	}
	return sudoku
}


// Ветвление:
// function makeMassSudok(arraySudokuVariation) {
// 	let c = [];
// 	for (let i=0; i<9; i++) {
// 		for (let j=0; j<9; j++) {

// 			if (arraySudokuVariation[i][j].length > 1){
// 				for (let r=0; r< arraySudokuVariation[i][j].length;r++ ) {
// 					massSudok.push(arraySudokuVariation[i][j][r]);
// 				}
// 				return massSudok
// 			}
// 		}
		
// 	}
// 	return massSudok
// }

// function guess(arraySudokuVar){
// 	let otvet = null
// 	let bigMass = makeMassSudok(sudokuSolve(arraySudokuVar))
// 	for (let k = 0; k<bigMass.length; k++){
// 		if (summSudoky(sudokuSolve(bigMass[k])) ==405) {
// 			otvet = bigMass[k]
// 		}
// 	}

// 	if (otvet == null){
// 		for (let k = 0; k<bigMass.length; k++){
// 			otvet = guess(bigMass[k])  
// 		}
// 	}
// 	return otvet
// }



let l1 = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
let l2 = "--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3"
let l3 = "29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9"
let l4 = "-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-"
let l5 = "6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--"
let l6 = "---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----"
let l7 = "-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--"
let l8 = "-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7"
let l9 = "----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----"
let l10 = "3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--"
let l11 = "3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-"
let l12 = "-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-"
let l13 = "--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--"
let l14 = "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------"
let l15 = "---------------------------------------------------------------------------------"


console.log("l1 =",  sudokuSolve(makeSudoky(l1)))
console.log("l2 =",  sudokuSolve(makeSudoky(l2)))
console.log("l3 =",  sudokuSolve(makeSudoky(l3)))
console.log("l4 =",  sudokuSolve(makeSudoky(l4)))
console.log("l5 =",  sudokuSolve(makeSudoky(l5)))
console.log("l6 =",  sudokuSolve(makeSudoky(l6)))
console.log("l7 =",  sudokuSolve(makeSudoky(l7)))
console.log("l8 =",  sudokuSolve(makeSudoky(l8)))
console.log("l9 =",  sudokuSolve(makeSudoky(l9)))
console.log("l10 =",  sudokuSolve(makeSudoky(l10)))
console.log("l11 =",  sudokuSolve(makeSudoky(l11)))
console.log("l12 =",  sudokuSolve(makeSudoky(l12)))
console.log("l13 =",  sudokuSolve(makeSudoky(l13)))
console.log("l14 =",  sudokuSolve(makeSudoky(l14)))
console.log("l15 =",  sudokuSolve(makeSudoky(l15)))

