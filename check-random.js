function random() {
  return Math.ceil(Math.random() * 9);
}

function check() {
  let arr = [];
  for (let i = 0; i < 150; i++) {
    arr.push(random());
  }
  arr.sort();
  arr1 = arr.filter((x, i, arr) => x !== arr[i + 1]);
  return arr1.length;
}

let newArr = [];
for (let i = 0; i < 100000; i++) {
  newArr.push(check());
}

console.log(Math.min(...newArr), Math.max(...newArr));
