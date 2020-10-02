let string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// let arr = string.split('')

function createArr(string, size){
  let array = string.split('')  
  let newArr = [];
  for (i = 0; i<array.length; i+=size){
    newArr.push(array.slice(i, i+size))
  }
  return newArr
}
console.log(createArr(string, 9))


// function create (row, col, val){
//   let arr = []
//   for  (let i=0; i<row; i++) {
//     arr.push([]);
//     arr[i].push(new Array(col))
//       for (let j = 0; j<col; j++){
//         arr[i][j] = val
//       }
//   }
//   return arr
// }
// console.log(create(9,9,'x'));
