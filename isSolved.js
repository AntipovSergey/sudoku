// arr = [
//     { y: 0, x: 0, square: 1, value: 1, potentialValues : [], solved: true },
//     { y: 0, x: 1, square: 1, value: 1, potentialValues : [1,2,3], solved: false },
//     { y: 0, x: 2, square: 1, value: 3, potentialValues : [], solved: true },
//     { y: 1, x: 0, square: 1, value: 1, potentialValues : [], solved: true },
//     { y: 1, x: 1, square: 1, value: 5, potentialValues : [1,2,3], solved: false },
//     { y: 1, x: 2, square: 1, value: 4, potentialValues : [1,2,3], solved: false },
//     { y: 2, x: 0, square: 1, value: 7, potentialValues : [1,2,3], solved: false },
//     { y: 2, x: 1, square: 1, value: 1, potentialValues : [1,2,3], solved: false },
//     { y: 2, x: 2, square: 1, value: 1, potentialValues : [], solved: true },
//   ]

function isSolved(board) {
  let res = 0;
  board.map((el) => {
    if (el.value === 0) {
      res++
    }
  })
  if(res !== 0) {
    return false
  } else {
    return true
  }
}

// console.log(isSolved(arr))

module.exports = {isSolved} 
