function makeStep(array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      if (array[i][j] === '-') {
        for (let k = 1; k < 10; k++){
          if (!(stringSearch(k, arr[i])&&columnSearch(k, arr, i)/*&&funSquare(k)*/)) {
            array[i][j] = k
            break
          }
        }
      }
    }
  }
  return array
}

let string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

let array = createArray(string)

function createPrettyBoard(string) {
  string = string.replace(/([\d-]{9})([\d-]{9})([\d-]{9})([\d-]{9})([\d-]{9})([\d-]{9})([\d-]{9})([\d-]{9})([\d-]{9})/g, `$1\n$2\n$3\n$4\n$5\n$6\n$7\n$8\n$9`)
  string = string.replace(/(\S)/g, `$1 `)
  console.log (string)
  return string
}

createPrettyBoard(string);
