const ready = [
  [['1'], ['-'], ['5'], ['8'], ['-'], ['2'], ['-'], ['-'], ['-']],
  [['-'], ['9'], ['-'], ['-'], ['7'], ['6'], ['4'], ['-'], ['5']],
  [['2'], ['-'], ['-'], ['4'], ['-'], ['-'], ['8'], ['1'], ['9']],
  [['-'], ['1'], ['9'], ['-'], ['-'], ['7'], ['3'], ['-'], ['6']],
  [['7'], ['6'], ['2'], ['-'], ['8'], ['3'], ['-'], ['9'], ['-']],
  [['-'], ['-'], ['-'], ['-'], ['6'], ['1'], ['-'], ['5'], ['-']],
  [['-'], ['-'], ['7'], ['6'], ['-'], ['-'], ['-'], ['3'], ['-']],
  [['4'], ['3'], ['-'], ['-'], ['2'], ['-'], ['5'], ['-'], ['1']],
  [['6'], ['-'], ['-'], ['3'], ['-'], ['8'], ['9'], ['-'], ['-']],
];

function genSquard(arr) {
  const squardArr = [];
  const squardArr1 = [];
  const squardArr2 = [];
  let count = 1;
  const temp = [];
  const temp1 = [];
  const temp2 = [];
  for (let i = 0; i < arr.length; i += 1) {
    // arr[i].slice(0, 3), arr[i].slice(3, 6), arr[i].slice(6, 9)
    temp.push(arr[i].slice(0, 3));
    temp1.push(arr[i].slice(3, 6));
    temp2.push(arr[i].slice(6, 9));
    if (count === 3) {
      count = 0;
      squardArr.push([...temp].flat());
      squardArr1.push([...temp1].flat());
      squardArr2.push([...temp2].flat());
      temp.length = 0;
      temp1.length = 0;
      temp2.length = 0;
    }
    count += 1;
  }

  return squardArr.concat(squardArr1, squardArr2);
}

function checkSquad(arr, squard, value) {
  const squardArr = genSquard(arr);
  for (let i = 0; i < squardArr[squard].length; i += 1) {
    if (squardArr[squard][i][0].includes(String(value))) return false;
  }
  return true;
}

function getSquadFree(arr, squard) {
  const squardArr = genSquard(arr);

  return squardArr[squard];
}

console.log(checkSquad(ready, 0, 4));
console.log(getSquadFree(ready, 0));

module.exports = {
  genSquard,
  getSquadFree,
};
