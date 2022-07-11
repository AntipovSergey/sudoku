
let options = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function arrCheck(arr, options) {

  options = options.filter((n) => { return !arr.includes(n) })

  return options
}
console.log(arrCheck([6, 3, 8, 1, 2, 4, 5, 0, 0], options))

function toColumns(main) {
  let columns = []

  for (let i = 0; i < main.length; i++) {
    arr = []
    arr.push(main[0][i])
    arr.push(main[1][i])
    arr.push(main[2][i])
    arr.push(main[3][i])
    arr.push(main[4][i])
    arr.push(main[5][i])
    arr.push(main[6][i])
    arr.push(main[7][i])
    arr.push(main[8][i])


    columns.push(arr)
    console.log(arr)
  }
  return columns
}


let main = [
  [0, 9, 8, 1, 1, 1, 1, 1, 1],
  [7, 9, 8, 2, 2, 2, 2, 2, 2],
  [8, 9, 8, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [9, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
];


function switcher(main) {
  let columns = toColumns(main)
  console.log(columns)
  for (let i = 0; i < main.length; i++) {
    for (let u = 0; u < main[i].length; u++) {

      if (main[i][u] == 0) {
        let options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        options = arrCheck(main[i], options)
        options = arrCheck(columns[u], options)
        if (options.length == 1) {
          main[i][u] = (options[0])
        }
      }
    }
  }
  return main
}
console.log(switcher(main))
