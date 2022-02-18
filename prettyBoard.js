const { prettyBoard: parsed } = require('./parse');

const array = { 1: 'rrr', 3: 555 };

// const testArr = [
//   '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
//   '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3',
// ];

// console.log(parsed());

function prettyBoard(arr) {
  const puzzles = [];
  arr.forEach((x) => {
    const buffArr = [];
    for (let i = 0; i < x.length; i += 9) {
      buffArr.push(x.slice(i, i + 9).split(''));
    }
    puzzles.push(buffArr);
  });
  return puzzles;
}
