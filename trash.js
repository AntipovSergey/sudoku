// разбивает по колонкам массив
function rec(arr, arr1 = [], arr2 = [], arr3 = [], ind = 0) {
  if (ind === arr.length) return [arr1, arr2, arr3];
  arr1.push(arr[ind], arr[ind + 1], arr[ind + 2]);
  arr2.push(arr[ind + 3], arr[ind + 4], arr[ind + 5]);
  arr3.push(arr[ind + 6], arr[ind + 7], arr[ind + 8]);
  return rec(arr, arr1, arr2, arr3, ind + 9);
}
console.log(rec(splittedLine));


// непонятно что
for (let i = 0; i < splittedLine.length; i++) {
  const arr = [];
  if (i <= 2) arr.push(splittedLine[i]);
}


// тоже непонятно что
const result = [];
for (let i = 0; i < table[0].length; i++) {
  const elem = table[0][i];
  const elem1 = table[i][1];
  if (elem !== '-') {
    result.push(elem);
  }
  if (elem1 !== '-') result.push(elem1);
}
