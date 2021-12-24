

function f2(i, j, arr0) {
  for (let k = 0; k < 9; ++k) {
    arr0[i].push(arr0[k][j])
  }
  let arr1 = [];
  for (let x = 1; x < 10; ++x) {
    let number = x.toString();
    if (!arr0[i].includes(number)) {
      arr1.push(number);
    }
  }
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  
}
function f4(arr1, arr2) {
  const arr3 = []
  for (let i = 0; i < arr1.length; ++i) {
      if (arr2.includes(arr1[i])) {
          arr3.push(arr1[i])
      }
  }
  return arr3
}

function isSolved(board) {

}


// Принимает доску в той или иной форме и
// возвращает хорошо отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// возврат из формы `resolve`.
function prettyBoard(board) {

}

function f0(boardString) {
	const arr0 = []
	let k = 0;
	for (let i = 0; i < 9; i++) {
		arr0[i] = []
		for (let j = 0; j < 9; j++) {
			arr0[i].push(boardString[k])
			k++
		}
		arr0.push(arr0[i])
		arr0.pop()
	}
	return arr0;
}



// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard,
  f4: f4,
  f2,
  f3,
  f0: f0

}
