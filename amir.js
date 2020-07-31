let str =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

// const array = function toAr(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i += 1) {
//     result.push(str[i]);
//   }
//   return result;
// };


function getData(str) {
  let data = [];

  for (i = 0; i < 9; i += 1) {
    data[i] = str.substring(i * 9, (i + 1) * 9).split('');
    data.push(data[i]);
  }
  return data;
}

console.log(getData(str));

