const transformArr = () => {
  let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
  let newArr = str.split('')
  let sudokuArr = []
  for (let i = 0; i < newArr.length; i += 9) {
    sudokuArr.push(newArr.slice(i, i + 9))
  }
  return sudokuArr
}

console.table(transformArr())


module.exports = {
  transformArr,
}
