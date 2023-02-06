function checkRow(arr, indexes, num) {
  const lineIndex = indexes[0];
  const line = arr[lineIndex];
  return !line.includes(num.toString());
}

// function divideIntoChunks(arr, chunk) {
//   const result = [];
//   while (arr.length > 0) {
//     result.push(arr.splice(0, chunk));
//   }
//   return result;
// }

// const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
// function strToArr(str) {
//   return divideIntoChunks(str.split(''), 9);
// }
// console.table(strToArr(str));

// console.log(checkRow(strToArr(str), [0, 1], 4));
// console.log(checkRow(strToArr(str), [0, 1], 8));

module.exports = checkRow;
