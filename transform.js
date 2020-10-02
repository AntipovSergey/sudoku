function transform (string) {
  return Array.from(string, (elem) => elem === '-' ? null : Number(elem));
};

function prettyBoard (array) {
  const newArray = array;
  const smallRow = [];
  const longRow = [];
  for (let i = 0; i < array.length; i += 3) {
    for (let j = 0; j < 3; j += 1) {
     if (array[i + j] === null) {
        array[i + j] = ' '; 
      }
    }
    smallRow.push([array[i], array[i + 1], array[i + 2]].join(' '));
  };
  for (let j = 0; j < smallRow.length; j = j + 3) {
    longRow.push([smallRow[j], smallRow[j + 1], smallRow[j + 2]].join(' | '));
  };
  return longRow.slice(0, 3).join('\n') +'\n' + '-'.repeat(21) + '\n' + longRow.slice(3, 6).join('\n') +'\n' + '-'.repeat(21) + '\n' + longRow.slice(6, 9).join('\n');
};

module.exports = {
  transform,
  prettyBoard
}

