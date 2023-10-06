const sud = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'.replaceAll('-', 0).split('').map((el) => Number(el));
const ind = 0;

function getColumn(sud, ind) {
  const colNum = Math.floor(ind % 9);
  const start = colNum;
  let result = [];
  for (let i = start; i < sud.length; i += 9) {
    result.push(sud[i]);
  }
  return result;
}

console.log(getColumn(sud, ind));
