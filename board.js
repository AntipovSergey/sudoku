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
}

console.table(superBoard(newArr1));
