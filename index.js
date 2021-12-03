let puzzle = [
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],
  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0],
  [0, 2, 0, 5, 0, 0, 1, 0, 3],
];

const validate = (row) => {

  let result = []
  for (let i = 0; i <= row.length; i++) {
    if (!row.includes(i)) {
      result.push(i)
    }
  }

  for (let i = 0; i <= row.length; i++) {
    if (row[i] === 0) {
      const random = Math.floor(Math.random() * result.length)
      row[i] = result[random]
      result = result.filter(el => el !== row[i])
    }
  }





  return row
}

const colum = (row) => {
  for (let i = 0; i < row.length; i++) {
    let newArr = []
    for (let j = 0; j < row.length; j++) {
      newArr.push(row[j][i])
      if (doopl(newArr)) {
        return false
      }
    }
  }

  return true

}
function doopl(arr) {
  return (new Set(arr)).size !== arr.length;
}
let a = [1, 0, 3]
// console.log(a);
// console.log(doopl(a))

puzzle.map(el => validate(el))
console.log(colum(puzzle))
colum(puzzle)

// console.table(puzzle)
