function creatBord(str) {
  let stringToArr = str.split('');
  console.log(stringToArr);
  let newArr = [];

  newArr.push(stringToArr.slice(0,9));
  newArr.push(stringToArr.slice(9,18));
  newArr.push(stringToArr.slice(18,27));
  newArr.push(stringToArr.slice(27,36));
  newArr.push(stringToArr.slice(36,45));
  newArr.push(stringToArr.slice(45,54));
  newArr.push(stringToArr.slice(54,63));
  newArr.push(stringToArr.slice(63,72));
  newArr.push(stringToArr.slice(72,81));
  console.table(newArr);
  console.log(newArr);
}


creatBord('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
