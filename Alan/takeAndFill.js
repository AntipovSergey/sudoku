const stringFromArr =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---";
// console.log(Number.isInteger(stringFromArr[0].toString()));













function fillingArr(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i] / 1)) {
      result += arr[i];
      console.log(result);
    } else if (arr[i] !== /\d/) {
      result += Math.floor(Math.random() * 10);
    }
  }
  console.log(result);
  return result;
}
console.log(fillingArr(stringFromArr));

module.exports = {
  fillingArr
}
