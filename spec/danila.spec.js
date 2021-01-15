const {
  setStringInTwoArr,
} = require('../danila');

let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let arrPlaceNumber = [0, 2];
let place  = [
  ['1', null, '5', '8', null, '2', null, null, null], 
  [null, '9', null, null, '7', '6', '4', null, '5'],
  ['2', null, null, '4', null, null, '8', '1','9'],
];

describe('Тестим', () => {
  it ('Возвращаем строки', () => {
    const num = setStringInTwoArr(place, arrPlaceNumber);
    expect(num).toBe('1582');
  });
});
