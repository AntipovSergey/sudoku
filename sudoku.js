// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}
solve(boardString)

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
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}



//   let arrayOfExtraElements = []
//   let extra = [
// 	  [3, 8, 9, 2], 
// 	  [3, 5, 7, 9], 
// 	  [2, 5, 5, 7]
// 	]


// function comparison(array) {
// 	// i - элемент 
// 	let allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 	for (let g = 0; g < array.length; g++) {
// 		for (let i = 0; i < array[g].length; i++) {
// 			for (let k = 0; k < allowedValues.length; k++) {
// 				if (allowedValues[k] === extra[g][i]) {
// 					// arrayOfExtraElements.push(allowedValues[k])
// 					allowedValues.splice(k, 1)
// 				}
// 			}
// 		}
// 	}

// 	return arrayOfExtraElements
// }
// comparison(extra)
// // console.log(allowedValues);
// console.log(extra);
// console.log(allowedValues);


// алгоритм нахожения уникальных чисел, которые не встречались в строке и могут быть использованы вместо пропусков


let allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayOfExtraElements = []
let extra = [3, 8, 9, 2]


function comparison(extra) {
  // i - элемент 

for (let i = 0; i < extra.length; i++) {
    for (let k = 0; k < allowedValues.length; k++) {
        if (allowedValues[k] === extra[i]) {
            arrayOfExtraElements.push(allowedValues[k])
            allowedValues.splice(k, 1)
        }
    }
}

  return arrayOfExtraElements
}
comparison(extra)
console.log(allowedValues);

// // // // // // 

let arrayTest = [
	[1,0,5,8,0,2,0,0,0],
	[0,9,0,0,7,6,4,0,5],
	[2,0,0,4,0,0,8,1,9],
	[0,1,9,0,0,7,3,0,6],
	[7,6,2,0,8,3,0,9,0],
	[0,0,0,0,6,1,0,5,0],
	[0,0,7,6,0,0,0,3,0],
	[4,3,0,0,2,0,5,0,1],
	[6,0,0,3,0,8,9,0,0]]

  
  function comparison(extra) {
	// i - элемент 
	let allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	let arrayOfExtraElements = []
	for (let i = 0; i < extra.length; i++) {
		for (let k = 0; k < allowedValues.length; k++) {
			if (allowedValues[k] === extra[i]) {
				// arrayOfExtraElements.push(allowedValues[k])
				allowedValues.splice(k, 1)
			}
		}
	}
	return arrayOfExtraElements
  }
//   comparison(extra)
  
  function solve(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = comparison(array[i])
	}
	return array
  }
  console.log(solve(arrayTest));
  
  

// function search(array) {
// 	let newArr1 = []
// 	let newArr2 = []
// 	let newArr3 = []

// 	for (let i = 0; i < array.length; i++) {
// 		for (let k = 0; k < array[i]; k++) {
// 			if (array[i][k] == 0) {
// 				newArr1.push(array[i] > 0)
// 			}
// 		}
// 	}
// 	console.log(newArr1); 
// }

// console.log(search(arrayTest));
