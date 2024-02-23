const fs = require('fs');
function read() {
  const puzzle = fs.readFileSync('puzzles.txt', 'utf-8');
  return puzzle;
}


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(arr) {

  const horizontal =(arr)=>{
    let tempHoriz= [];
    let resultHoriz = [];
    
    for (let i of arr){
      tempHoriz= [];
			for (let j of i) {
				if (!tempHoriz.includes(j)) {
					tempHoriz.push(j)
				}
			}
			if (tempHoriz.length === 9) {
				resultHoriz.push(true)
			} else resultHoriz.push(false)
		}
		return resultHoriz
    }

   const vertical = arr => {
			let tempVert = []
			let resultVert = []
			for (let t = 0; t < 9; t++) {
				tempVert = []
				for (let i of arr) {
					if (!tempVert.includes(i[t])) {
						tempVert.push(i[t])
					}
				}
				if (tempVert.length === 9) {
					resultVert.push(true)
				} else resultVert.push(false)
			}
			return resultVert
		}

    
}

function prettyBoard() {
}

