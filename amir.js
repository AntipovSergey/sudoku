
// const array = function toAr(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i += 1) {
//     result.push(str[i]);
//   }
//   return result;
// };


// console.log(array(inputText));

// const objInAr = (arr) => {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
//   }
// };

// console.log(objInAr(inputText));


// const str = 'r,t,y,u,i,i';
// const array = [1, 2, 3, 4, 5];
// function indexKey(arr) {
//   return Object.keys(arr);
// }
// console.log(indexKey(str));
// console.log(Object.keys(array));

// const obj = {};
// for (let i = 0; i < array.length; i += 1) {
//   obj[i] = array[i];
// }
// console.log(obj);



// console.log(objectFromArray(array));

let newArr1 =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


const superBoard = function solve(boardString) {
  let newArr = boardString.split("");
  let BordSize = 9;
  let subArr = [];
  for (let i = 0; i < Math.ceil(newArr.length / BordSize); i++) {
    subArr[i] = newArr.slice(i * BordSize, i * BordSize + BordSize);
  }
  return subArr;
};

console.table(superBoard(newArr1));
