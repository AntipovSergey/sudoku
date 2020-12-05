const create = (amount) => new Array(amount).fill(0);
const matrix0 = (rows, cols) => create(cols).map((o, i) => create(rows))

console.log(matrix0(2, 5))


let resArr = new Array(9).fill(new Array());

function matrix1(m, n) {
  var result = []
  for (var i = 0; i < n; i++) {
    result.push(new Array(m).fill(0))
  }
  return result
}
console.log(matrix1(2, 5))


function matrix(m, n) {
  return Array.from({
    // generate array of length m
    length: m
    // inside map function generate array of size n
    // and fill it with `0`
  }, () => new Array(n).fill(0));
};

console.log(matrix(3, 2));
let j = 2;
console.log(Math.floor(8 / 3))
