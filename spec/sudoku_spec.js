
describe ("sudokuParse", function () {
    it("should return the correct lenght of string",
        function () {expect(board.length).toEqual(8);
            for (let i = 0; i < board.length; i++) {
                expect(board[i].length).toEqual(8);
            }
        });
});

describe("solve", function () {
    it("should generate an 8x8 array", function () {
        expect(board.length).toEqual(8);
        for (let i = 0; i < board.length; i++) {
            expect(board[i].length).toEqual(8);
        }
    });
});

describe("isSolved", function () {
    it("should return a string", function () {
        expect(typeof isSolved (board)).toEqual('string');
    });