let inputText =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const toArray = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i += 1) {
    result.push(str[i]);
  }
  return result;
};

console.log(toArray(inputText));
