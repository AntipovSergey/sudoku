const sudoku = require('../sudoku.js');

describe("Sudoku solver", () => {
    let board;
    function hasDuplicates(row) {
        return new Set(row).size !== row.length; // true, если найдет повторения
    }

    function isFullFilled(board) {
        return board.flat().includes('-'); // true, если найдет пустышки
    }

    beforeAll(() => {
        board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
    });

    describe('Common tests', () => {


        test('Function takes a string and returns an array', () => {
            expect(Array.isArray(sudoku.solve(board))).toBe(true);
        });
    });
    describe('Functional tests', () => {
        test('Function returns a completely filled board', () => {
            expect(isFullFilled(sudoku.solve(board))).toBeFalsy();
        });

        test("There are no repeating numbers in a Sudoku string", () => {
            expect(hasDuplicates(sudoku.solve(board))).toBeFalsy();
        });
    });
});
