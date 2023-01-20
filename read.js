const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
function createInput(boardString) {
  const input = [];
  for (let i = 0; i < boardString.length - 8; i += 9) {
    input.push(boardString.split('').slice(i, i + 9));
  }
  return input;
}
