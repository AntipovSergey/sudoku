const {solve, prettyBoard}= require('../sudoku.js')
describe("Board", function () {
 
 
    
    describe("board", function () {
        it("Проверка работы судоку", function () {
            let str ='1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
            let str2='---------------------------------------------------------------------------------'
            expect(solve(str)).toEqual([ ['1', '4', '5', '8', '9', '2', '6', '7', '3'],[ '8', '9', '3',  '1', '7', '6', '4', '2', '5'  ],  [  '2', '7', '6',  '4', '3', '5',  '8', '1', '9' ], [   '5', '1', '9',  '2', '4', '7',  '3', '8', '6'  ], [ '7', '6', '2',  '5', '8', '3',   '1', '9', '4' ], [ '3', '8', '4', '9', '6', '1',  '7', '5', '2' ],[  '9', '5', '7',  '6', '1', '4',   '2', '3', '8'    ], [ '4', '3', '8', '7', '2', '9',  '5', '6', '1' ], [  '6', '2', '1',   '3', '5', '8',   '9', '4', '7'    ]   ])
            expect(solve(str2)).toEqual([
                [
                  '1', '2', '3',
                  '4', '5', '6',
                  '7', '8', '9'
                ],
                [
                  '4', '5', '6',
                  '7', '8', '9',
                  '1', '2', '3'
                ],
                [
                  '7', '8', '9',
                  '1', '2', '3',
                  '4', '5', '6'
                ],
                [
                  '2', '1', '4',
                  '3', '6', '5',
                  '8', '9', '7'
                ],
                [
                  '3', '6', '5',
                  '8', '9', '7',
                  '2', '1', '4'
                ],
                [
                  '8', '9', '7',
                  '2', '1', '4',
                  '3', '6', '5'
                ],
                [
                  '5', '3', '1',
                  '6', '4', '2',
                  '9', '7', '8'
                ],
                [
                  '6', '4', '2',
                  '9', '7', '8',
                  '5', '3', '1'
                ],
                [
                  '9', '7', '8',
                  '5', '3', '1',
                  '6', '4', '2'
                ]
              ])
        });
      });
    describe("prettyBoard", function () {
       it("Проверка итогового вида функции", function () {
        let board=[['1', '4', '5', '8', '9', '2', '6', '7', '3'],[ '8', '9', '3',  '1', '7', '6', '4', '2', '5'],  ['2', '7', '6',  '4', '3', '5',  '8', '1', '9' ], [   '5', '1', '9',  '2', '4', '7',  '3', '8', '6'  ], [ '7', '6', '2',  '5', '8', '3',   '1', '9', '4' ], [ '3', '8', '4', '9', '6', '1',  '7', '5', '2' ],[  '9', '5', '7',  '6', '1', '4',   '2', '3', '8'    ], [ '4', '3', '8', '7', '2', '9',  '5', '6', '1' ], [  '6', '2', '1',   '3', '5', '8',   '9', '4', '7']]
        expect(prettyBoard(board)).toEqual(`|1|4|5|8|9|2|6|7|3|
|8|9|3|1|7|6|4|2|5|
|2|7|6|4|3|5|8|1|9|
|5|1|9|2|4|7|3|8|6|
|7|6|2|5|8|3|1|9|4|
|3|8|4|9|6|1|7|5|2|
|9|5|7|6|1|4|2|3|8|
|4|3|8|7|2|9|5|6|1|
|6|2|1|3|5|8|9|4|7|`)
       });
    });
})

