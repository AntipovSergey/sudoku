const sudoku = require('../sudoku.js');

const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',

describe('Тестирование функции findEmpty',()=>{
	test('findEmpty', () => {
		expect(sudoku.createArrays(str)).toEqual([
			['1', '-', '5', '8', '-', '2', '-', '-', '-'],
			['-', '9', '-', '-', '7', '6', '4', '-', '5'],
			['2', '-', '-', '4', '-', '-', '8', '1', '9'],
			['-', '1', '9', '-', '-', '7', '3', '-', '6'],
			['7', '6', '2', '-', '8', '3', '-', '9', '-'],
			['-', '-', '-', '-', '6', '1', '-', '5', '-'],
			['-', '-', '7', '6', '-', '-', '-', '3', '-'],
			['4', '3', '-', '-', '2', '-', '5', '-', '1'],
			['6', '-', '-', '3', '-', '8', '9', '-', '-'],
		  ]);
	});
})

