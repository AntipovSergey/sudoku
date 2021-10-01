function getBoard(str) {
  const arr = [...str.split('')];
  const result = []
  for (let i = 0; i < 81; i += 9) {
    result.push(arr.slice(i, i + 9))
  }
  return result
}

function getPossibleNumsInHorizontal(board, i, j) {

}
// ——> arr Set with numbers

function getPossibleNumsInVertica(board, i, j) {

}
//——> arr Set with numbers

function getPossibleNumsInSquare(board, i, j) {

}
//——> arr Set with numbers

function getPossibleNums(arr, arr2, arr3) {
  if (!arr2) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return arr.filter((x) => !nums.includes(x));
  }

  return arr.filter((x) => arr2.includes(x)).filter((x) => arr3.includes(x));

}

//——> arr with nums

function hasPossibleNums(arr, arr2, arr3) {
}

//——> true or false

function getRandomNumFromArr(arr) {
  let index = Math.floor(Math.random() * (arr.length));
  return arr[index]
}

let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

module.exports = {
  getBoard,
  getPossibleNums,
  getRandomNumFromArr,
  hasPossibleNums,
  getPossibleNumsInSquare,
  getPossibleNumsInVertica,
  getPossibleNumsInHorizontal,
};
