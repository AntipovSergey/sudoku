const fs = require("fs");

const sudoku = require('../sudoku.js')
const { prettyBoard } = require("../sudoku.js")
//console.log(prettyBoard)

describe("prettyBoard", () => {
    let str1;
    let prettyPuzzle1
    let prettyPuzzle2
    let str2;

    beforeEach(() => {
     str1 = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
     str2 = "1-58-2---------------4-4819-19--73-6762-83-9--22-61-5---764--3-43--2-5-11--3-81--";
     prettyPuzzle1 = fs.readFileSync('./pretty-board1.txt','utf-8');
     prettyPuzzle2 = fs.readFileSync('./pretty-board2.txt','utf-8');
    });
    
    it("should return prettyBoard", () => {
      expect(prettyBoard(str1)).toBe(prettyPuzzle1);
      expect(prettyBoard(str2)).toBe(prettyPuzzle2);
      expect(prettyBoard('')).toBe('Пустой судоку');
    });
});