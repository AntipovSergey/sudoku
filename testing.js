const fs = require('fs');

const str = fs.readFileSync('puzzles.txt', 'utf-8');

console.log(str);
function letBoard(n) {
  const newstr = str.split('\n')[n].split('');
  const count = 9;
  const newArr = [];
  for (let i = 0; i < newstr.length; i += 9) {
    newArr.push(newstr.slice(i, i + count));
  }
  return newArr;
}
console.table(letBoard(4));

