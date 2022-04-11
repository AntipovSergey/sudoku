const fs = require('fs')



const getRow = (field, x) => {
  return field[x]
}

const fromLineToField = (line) => {
  let tmp = line
  return [...Array(9)].map((x) => {
    x = tmp.slice(0,9);
    tmp = tmp.slice(9)
    return x
  })
}

const getColumn = (field, y) => {
  return field.map((item) => item[y]).join('')
}

const getBlock = (field, row, column) => {
  const getBorder = (num) => (num < 3) ? 3 : (num < 6) ? 6 : 9
  const borderRow = getBorder(row)
  const borderCol = getBorder(column)
  return [...Array(3)].map((x, i) => field[borderRow - 3 + i].slice(borderCol - 3, borderCol)).join('')
}

const findRowWithMaxNumbers = (field) => {
  let tmp = [...field]
  let rows = {}
  field.map((x, i) => rows[x] = i)
  tmp.sort((a,b) =>
    a.split('').filter((x) => x === '-').length - b.split('').filter((x) => x === '-').length)
  return rows[tmp.filter(x => x.includes('-'))[0]]
}

const solver = (arr) => {
  let nums = [1,2,3,4,5,6,7,8,9]
  return nums.filter(x => !arr[2].includes(x) && !arr[1].includes(x) && !arr[0].includes(x))[0]
}

const main = () => {
  const readLine = fs.readFileSync('sudoku-puzzles.txt', "utf-8").split('\n')[0]
  let ourField = fromLineToField(readLine)

  console.log(ourField.join('\n'))
  console.log('\n')
  // console.log(getBlock(ourField, 2, 3))

  for (let i = 0; i < 41; i++) {
    let minUnkX = findRowWithMaxNumbers(ourField)
    let neededY = ourField[minUnkX].indexOf('-')
    let allInfo = [
      ourField[minUnkX],
      getColumn(ourField, neededY),
      getBlock(ourField, minUnkX, neededY),
    ]
    let answer = (solver(allInfo)) ? '' + solver(allInfo) : 0
    ourField[minUnkX] = ourField[minUnkX].split('')
    ourField[minUnkX][neededY] = answer
    ourField[minUnkX] = ourField[minUnkX].join('')
    // main()
  }

  ourField = ourField.map(x => x.replaceAll('0', '-'))
  console.log(ourField.join('\n'))
  console.log('\n')

  // for (let i = 0; i < 22; i++) {
  //   let minUnkX = findRowWithMaxNumbers(ourField)
  //   let neededY = ourField[minUnkX].indexOf('-')
  //   let allInfo = [
  //     ourField[minUnkX],
  //     getColumn(ourField, neededY),
  //     getBlock(ourField, minUnkX, neededY),
  //   ]
  //   let answer = (solver(allInfo)) ? '' + solver(allInfo) : 0
  //   ourField[minUnkX] = ourField[minUnkX].split('')
  //   ourField[minUnkX][neededY] = answer
  //   ourField[minUnkX] = ourField[minUnkX].join('')
  
  // }
  // ourField = ourField.map(x => x.replaceAll('0', '-'))
  // console.log(ourField.join('\n'))
  // console.log('\n')
  // console.log(getBlock(ourField, 2, 3))
}

main()




//   if(i>=0&&i<3&&j>=0&&j<3) {minIndexCub=0;maxIndexCub=3;minLengthCub=0;maxLengthCub=3}
//   if(i>=0&&i<3&&j>=3&&j<6) {minIndexCub=0;maxIndexCub=3;minLengthCub=3;maxLengthCub=6}
//   if(i>=0&&i<3&&j>=6&&j<9) {minIndexCub=0;maxIndexCub=3;minLengthCub=6;maxLengthCub=9}
//   if(i>=3&&i<6&&j>=0&&j<3) {minIndexCub=3;maxIndexCub=6;minLengthCub=0;maxLengthCub=3}
//   if(i>=3&&i<6&&j>=3&&j<6) {minIndexCub=3;maxIndexCub=6;minLengthCub=3;maxLengthCub=6}
//   if(i>=3&&i<6&&j>=6&&j<9) {minIndexCub=3;maxIndexCub=6;minLengthCub=6;maxLengthCub=9}
//   if(i>=6&&i<9&&j>=0&&j<3) {minIndexCub=6;maxIndexCub=9;minLengthCub=0;maxLengthCub=3}
//   if(i>=6&&i<9&&j>=3&&j<6) {minIndexCub=6;maxIndexCub=9;minLengthCub=3;maxLengthCub=6}
//   if(i>=6&&i<9&&j>=6&&j<9) {minIndexCub=6;maxIndexCub=9;minLengthCub=6;maxLengthCub=9}
