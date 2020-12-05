str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
function splitStr(str) {
  return str.match(/.{1,9}/g).map(item => item = [...item])
}
let arrArr = splitStr(str)

console.table(arrArr)

arr = ['1', '-', '5', '8', '-', '2', '-', '-', '-', '-'];
function findRow(num, arr) {
  return arr.includes(String(num));
}

function littleBoxIj(i, j) {
  return {
    i: Math.floor(i / 3) * 3,
    j: Math.floor(j / 3) * 3,
  }
}
function squareMade(arrArr, i, j) {
  // let key_3x3 = littleBoxIj(i, j);
  let [ii, jj] = [...Object.values(littleBoxIj(i, j))]
  // console.log(key_3x3.i, key_3x3.j);
  console.log('input a(i,j) =' + i, j, 'box 3 * 3 index =' + ii, jj);
  // let sum = 0;
  let size_ii = ii + 3;
  let size_jj = jj + 3;
  let box_3x3 = [];
  for (let i = ii; i < size_ii; i++) {
    let row = [];
    for (let j = jj; j < size_jj; j++) {
      //  sum += !isNaN(arrArr[i][j]) ? Number(arrArr[i][j]) : 0;
      row.push(arrArr[i][j]);
      // console.log(arrArr[i][j]);
    }
    box_3x3.push(row);
  }

  let box_1x9 = box_3x3.flat();
  console.table(box_3x3);
  return box_1x9
}


console.log(squareMade(arrArr, 0, 3))
// [
//   '8', '-', '2',
//   '-', '7', '6',
//   '4', '-', '-'
// ]


// console.log(squareMade(arrArr, 7, 7))
// [
//   '6', '-', '-',
//   '-', '2', '-',
//   '3', '-', '8'
// ]

// console.log(squareMade(arrArr, 8, 3))
// [
//   '6', '-', '-',
//   '-', '2', '-',
//   '3', '-', '8'
// ]

// console.log(squareMade(arrArr, 0, 4)) // [
//   '8', '-', '2',
//   '-', '7', '6',
//   '4', '-', '-'
// ]











// module.exports = findRow;
// console.log(findRow(8, arr))
