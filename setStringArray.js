function setStringArray (str) {
  let arr = new Array(9)
  let char = 0;
  for (let index = 0; index < arr.length; index++) {
    arr[index] = [];
      for (let i = 0; i < 9; i++) {
        if (str[char] != '-'){
          arr[index].push(str[char])
        } else {
          arr[index].push(null)
        }
        char++
      }
    }
  return arr;
}

let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

console.table(setStringArray(str))

module.exports = {
	setStringArray
}
