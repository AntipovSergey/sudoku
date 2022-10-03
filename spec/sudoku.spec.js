const {solvee} = require('../sudoku.js')
const fs = require('fs');
const sudoku = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n');

describe('My operations testing', function() {
    describe('Simple operations', function() {
      test('sum', function() {
        expect(solvee(sudoku[4])).toEqual([
            [
              '6', '-', '8',
              '7', '3', '-',
              '-', '-', '-'
            ],
            [
              '2', '-', '-',
              '-', '-', '-',
              '4', '6', '-'
            ],
            [
              '-', '-', '-',
              '-', '6', '4',
              '8', '2', '-'
            ],
            [
              '-', '8', '-',
              '-', '-', '5',
              '7', '-', '1'
            ],
            [
              '9', '-', '-',
              '6', '1', '8',
              '-', '-', '4'
            ],
            [
              '-', '3', '1',
              '-', '-', '-',
              '-', '8', '-'
            ],
            [
              '8', '6', '-',
              '2', '-', '-',
              '-', '3', '9'
            ],
            [
              '-', '5', '-',
              '-', '-', '-',
              '1', '-', '-'
            ],
            [
              '1', '-', '-',
              '4', '5', '6',
              '2', '-', '-'
            ]
          ]);
      });
    });
  });