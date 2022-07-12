


function arrCheck(arr, options) {

  options = options.filter((n) => { return !arr.includes(n) })

  return options
}

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
  }
  return columns
}


// let main = [
//   [1, 0, 5, 8, 0, 2, 0, 0, 0],
//   [0, 9, 0, 0, 7, 6, 4, 0, 5],
//   [2, 0, 0, 4, 0, 0, 8, 1, 9],
//   [0, 1, 9, 0, 0, 7, 3, 0, 6],
//   [7, 6, 2, 0, 8, 3, 0, 9, 0],
//   [0, 0, 0, 0, 6, 1, 0, 5, 0],
//   [0, 0, 7, 6, 0, 0, 0, 3, 0],
//   [4, 3, 0, 0, 2, 0, 5, 0, 1],
//   [6, 0, 0, 3, 0, 8, 9, 0, 0]
// ]




function toSquare(main) {

  let globalArr = []

  for (let i = 0; i < main.length; i = i + 3) { //main[i] - каждый вложенный массив

    for (let u = 0; u < main[0].length; u = u + 3) {
      let arr = []
      arr.push(main[i][u])
      arr.push(main[i][u + 1])
      arr.push(main[i][u + 2])
      arr.push(main[i + 1][u])
      arr.push(main[i + 1][u + 1])
      arr.push(main[i + 1][u + 2])
      arr.push(main[i + 2][u])
      arr.push(main[i + 2][u + 1])
      arr.push(main[i + 2][u + 2])

      globalArr.push(arr)
    }
  }
  return globalArr
}

function coordinates(i, u) {
  if (i <= 2 && u <= 2) {
    return 0
  } else if (3 <= i && i <= 5 && u <= 2) {
    return 1
  } else if (6 <= i && i <= 8 && u <= 2) {
    return 2
  } else if (i <= 2 && 3 <= u && u <= 5) {
    return 3
  } else if (3 <= i && i <= 5 && 3 <= u && u <= 5) {
    return 4
  } else if (6 <= i && i <= 8 && 3 <= u && u <= 5) {
    return 5
  } else if (i <= 2 && 6 <= u && u <= 8) {
    return 6
  } else if (3 <= i && i <= 6 && 6 <= u && u <= 8) {
    return 7
  } else if (6 <= i && i <= 8 && 6 <= u && u <= 8) {
    return 8
  }
}



function switcher(main) {
  let columns = toColumns(main)
  let squares = toSquare(main)
  //console.log(squares[8])
  for (let i = 0; i < main.length; i++) {
    for (let u = 0; u < main[i].length; u++) {

      if (main[i][u] == 0) {
        let options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        options = arrCheck(main[i], options)        //тест по строке
        if (options.length == 1) {
          main[i][u] = (options[0])
        }
        //console.log('after row ===>', options)
        options = arrCheck(columns[u], options)  //отсечение вариантов по столбцам
        if (options.length == 1) {
          main[i][u] = (options[0])
        }
        //console.log('after column ===>', options)
        options = arrCheck(squares[coordinates(u, i)], options)  //отсечение вариантов по квадратам
        //console.log('after square ===>', options)

        if (options.length == 1) {
          main[i][u] = (options[0])
        }
      }
    }
  }
  return main
}

//console.log(switcher(main))

module.exports = {
  switcher,
  arrCheck,
  coordinates,
  toColumns,
  toSquare
};