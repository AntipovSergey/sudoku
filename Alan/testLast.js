function testAllRows (arr) {
  for (let i = 0; i < arr.length; i++) {
    if(testRow(arr[i])) {
      continue;
    }
    return true;
  }
  return false;
}


function testRow(arr) {
  let arrToString = arr.toString();
  arrToString = arrToString.replace(
    /(\d)\,(\d)\,(\d)\,(\d)\,(\d)\,(\d)\,(\d)\,(\d)\,(\d)/g,
    "$1$2$3$4$5$6$7$8$9"
  );
  console.log(arrToString);
  let result = [arrToString[0]];
  console.log(result);
  for (let i = 1; i < arrToString.length; i++) {
    console.log(result.includes(arrToString[0]));
    if (result.includes(arrToString[i])===false) {
      result.push(arrToString[i]);
      console.log(result);
    }else if (result.includes(arrToString[i]) === true) {
      return false
    }
  }
  return true;
}




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
console.log(transformArray(aru, 3));


function testAllColums (arr) {
  const col = transformArray(arr, 9);
  return col.testAllRows;
}
