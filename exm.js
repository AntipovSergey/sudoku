const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


function solve(boardString) {
  let sudBrd = [[], [], [], [], [], [], [], [], []];
  let runM = 0
  for (let row = 0; row < 9; row++) {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      sudBrd[row][rowIndex] = boardString[runM]
      runM++;
    }
  }
  //console.log(sudBrd);
  return sudBrd
}
solve(str)

function checkNumHorizon(arrBrd) {
  const newArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let e = 0; e < arrBrd.length; e++) {
    for (let el = 0; el < arrBrd[e]; el++) {
      if (newArr.includes(arrBrd[e][el])) {
        let trueNumIndex = newArr.indexOf(arrBrd[e][el]);
        newArr.splice(trueNumIndex, 1);
      }
      console.log(arrBrd);

    }
  }
  return arrBrd;
}
console.log(checkNumHorizon(solve(str)));


