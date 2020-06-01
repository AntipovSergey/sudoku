/* eslint-disable radix */
/* eslint-disable no-plusplus */
const string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function fillRandomNums(boardString) {
  const getString = boardString.split('');
  for (let index = 0; index < getString.length; index++) {
    if (getString[index] === '-') {
      getString[index] = Math.floor(Math.random() * 9) + 1;
    }
  }
  return getString.map((str) => parseInt(str));
}

console.log(fillRandomNums(string));

