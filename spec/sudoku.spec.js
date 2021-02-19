const sudoku = require('../sudoku.js');
const { validation } = require('../validation');

describe ('Вызов функции и тест', () => {
  let board;
  const str = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';
  const strLength = Math.sqrt(str.length);

  const tempArr = str.replace(new RegExp(`(.{` + strLength + `})`, 'g'), function (p1) { return p1 + '\n' }).split('\n');
  tempArr.length = strLength;
  const newArr = tempArr.map(element => element.split(''));
  beforeEach(() => {
  board = newArr;
  });
  it('Проверка валидации', () => {  
    expect(validation(board, [0, 0], '-')).toBe(false);
  });
})

