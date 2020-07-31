const string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

//console.log(string);

const arrFirst = string.split('');
 //console.log(arrFirst);

const row1 = arrFirst.slice(0, 9);
const row2 = arrFirst.slice(9, 18);
const row3 = arrFirst.slice(18, 27);
const row4 = arrFirst.slice(27, 36);
const row5 = arrFirst.slice(36, 45);
const row6 = arrFirst.slice(45, 54);
const row7 = arrFirst.slice(54, 63);
const row8 = arrFirst.slice(63, 72);
const row9 = arrFirst.slice(72, 81);

const finalArr = [];
finalArr.push(row1, row2, row3, row4, row5, row6, row7, row8, row9);
//console.table(finalArr);
//console.log(finalArr[5][0]);

console.table(finalArr);

module.exports = {
  finalArr
};

/*
┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │  3  │  4  │  5  │  6  │  7  │  8  │
├─────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│    0    │ '1' │ '-' │ '5' │ '8' │ '-' │ '2' │ '-' │ '-' │ '-' │
│    1    │ '-' │ '9' │ '-' │ '-' │ '7' │ '6' │ '4' │ '-' │ '5' │
│    2    │ '2' │ '-' │ '-' │ '4' │ '-' │ '-' │ '8' │ '1' │ '9' │
│    3    │ '-' │ '1' │ '9' │ '-' │ '-' │ '7' │ '3' │ '-' │ '6' │
│    4    │ '7' │ '6' │ '2' │ '-' │ '8' │ '3' │ '-' │ '9' │ '-' │
│    5    │ '-' │ '-' │ '-' │ '-' │ '6' │ '1' │ '-' │ '5' │ '-' │
│    6    │ '-' │ '-' │ '7' │ '6' │ '-' │ '-' │ '-' │ '3' │ '-' │
│    7    │ '4' │ '3' │ '-' │ '-' │ '2' │ '-' │ '5' │ '-' │ '1' │
│    8    │ '6' │ '-' │ '-' │ '3' │ '-' │ '8' │ '9' │ '-' │ '-' │
└─────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
*/
