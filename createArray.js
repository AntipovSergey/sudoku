const anyString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function createArray (str) {
  const array = []
  const newStr = str.replaceAll('-', '0');
  const arrayNumbers = newStr.split('').map((elem) => +elem);
  for (let i = 0; i < 9; i++) {
    array.push(arrayNumbers.slice((i * 9),((i + 1) * 9)))
  }
  return array;
}

console.log(createArray(anyString));

