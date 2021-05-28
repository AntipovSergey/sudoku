let square = [
  [5, 1, 3],
  [6, 1, 4],
  [8, 7, 2],
];

function testSquare(arr) {
  let arrToString = arr.toString();
  arrToString = arrToString.replace(
    /(\d)\,(\d)\,(\d)\,(\d)\,(\d)\,(\d)\,(\d)\,(\d)\,(\d)/g,
    "$1$2$3$4$5$6$7$8$9"
  );
  // console.log(arrToString);
  let result = [arrToString[0]];
  // console.log(result);
  for (let i = 1; i < arrToString.length; i++) {
    // console.log(result.includes(arrToString[0]));
    if (result.includes(arrToString[i])===false) {
      result.push(arrToString[i]);
      // console.log(result);
    }else if (result.includes(arrToString[i]) === true) {
      return false
    }
  }
  return true;
}
console.log(testSquare(square));
