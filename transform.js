
function transform (string) {
  return Array.from(string, (elem) => elem === '-' ? null : elem );
};

function prettyBoard (array) {
  let smallRow = [];
  let longRow = [];
  for (let i = 0; i < array.length; i = i + 3) {
    smallRow.push([array[i], array[i + 1], array[i + 2]].join(' '));
  };
  for (let j = 0; j < smallRow.length; j = j + 3) {
    longRow.push([smallRow[j], smallRow[j+1], smallRow[j+2]].join(' | '));

  };
  return longRow.join('\n');
};


console.log(prettyBoard(transform('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')));

