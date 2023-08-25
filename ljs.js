const fs = require('fs');

function read() {
  const a = process.argv[2];
  console.log(a);

  const str = (fs.readFileSync('puzzles.txt', 'utf8')).split('\n')[a - 1];

  console.log(str);

  const newStr = [...str.replace(/-/g, 0)];
  const arrPazzle = [];
  let smallArr = [];

  for (let i = 0; i <= newStr.length; i++) {
    if (smallArr.length < 9) {
      smallArr.push(newStr[i]);
    } else {
      arrPazzle.push(smallArr);
      smallArr = [newStr[i]];
    }
  }
  console.log(arrPazzle);
  return arrPazzle;
}
