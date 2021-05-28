const stringFromArr =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---";
const transitArr = Array.from(stringFromArr);
// console.log(Array.from(stringFromArr));
let result = [];
for (let i = 0; i < stringFromArr.length; i = i + 10) {
  result.push(transitArr.slice(i, i + 9));
}
console.log(result);


let aru = [
  [1,1,1],
  [2,2,2],
  [3,3,3],
]

function transformArray(Arr, ArrLength){
  let newArr = [];
  for(let i = 0; i < Arr.length; i++){
      newArr.push([]);
  };

  for(let i = 0; i < Arr.length; i++){
      for(let j = 0; j < ArrLength; j++){
          newArr[j].push(Arr[i][j]);
      };
  };
  return newArr;
}
console.table(aru)
console.table(transformArray(aru, 3));
