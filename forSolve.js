let main = [
  [[1], [2], [5], [6], [0], [8], [9], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[1], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[1], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0]]
];

let options = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function rowCheck(arr, options) {



  options = options.filter((n) => { return !arr.includes(n) })



  return options
}
//console.log(rowCheck([6, 3, 8, 1, 2, 4, 5, 0, 0], options))

function columnCheck(main, options) {
  let arr = []
  for (let i = 0; i < main.length; i++) {
     arr.push(main[i][0])

  }
  return arr
}

console.log(columnCheck(main))
