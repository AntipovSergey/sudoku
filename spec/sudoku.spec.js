const sudoku = require('../sudoku.js');

describe('Судоку', () => {
  describe('1-я головоломка', () => {
    const game1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
    it('Получаем поле для судоку', () => {
      expect(sudoku.solve(game1)).toHaveLength(9);
      expect(sudoku.solve(game1)[0]).toHaveLength(9);
      expect(sudoku.solve(game1)[sudoku.solve(game1).length - 1]).toHaveLength(9);
    })
    it('Решение верно', () => {
      expect(sudoku.solve(game1)[0].join('')).toBe('145892673');
      expect(sudoku.solve(game1)[1].join('')).toBe('893176425');
      expect(sudoku.solve(game1)[2].join('')).toBe('276435819');
      expect(sudoku.solve(game1)[3].join('')).toBe('519247386');
      expect(sudoku.solve(game1)[4].join('')).toBe('762583194');
      expect(sudoku.solve(game1)[5].join('')).toBe('384961752');
      expect(sudoku.solve(game1)[6].join('')).toBe('957614238');
      expect(sudoku.solve(game1)[7].join('')).toBe('438729561');
      expect(sudoku.solve(game1)[8].join('')).toBe('621358947');
    })
  });

  describe('2-я головоломка', () => {
    const game2 = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3';
    it('Получаем поле для судоку', () => {
      expect(sudoku.solve(game2)).toHaveLength(9);
      expect(sudoku.solve(game2[0])).toHaveLength(9);
      expect(sudoku.solve(game2)[sudoku.solve(game2).length - 1]).toHaveLength(9);
    })
    it('Решение верно', () => {
      // expect(sudoku.solve(game2)[0].join('')).toBe('145892673');
      // expect(sudoku.solve(game2)[1].join('')).toBe('893176425');
      // expect(sudoku.solve(game2)[2].join('')).toBe('276435819');
      // expect(sudoku.solve(game2)[3].join('')).toBe('519247386');
      // expect(sudoku.solve(game2)[4].join('')).toBe('762583194');
      // expect(sudoku.solve(game2)[5].join('')).toBe('384961752');
      // expect(sudoku.solve(game2)[6].join('')).toBe('957614238');
      // expect(sudoku.solve(game2)[7].join('')).toBe('438729561');
      // expect(sudoku.solve(game2)[8].join('')).toBe('621358947');
    })
  });
  describe('3-я головоломка', () => {
    const game3 = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9';
    it('Получаем поле для судоку', () => {
      expect(sudoku.solve(game3)).toHaveLength(9);
      expect(sudoku.solve(game3[0])).toHaveLength(9);
      expect(sudoku.solve(game3)[sudoku.solve(game3).length - 1]).toHaveLength(9);
    })
    it('Решение верно', () => {
      // expect(sudoku.solve(game3)[0].join('')).toBe('145892673');
      // expect(sudoku.solve(game3)[1].join('')).toBe('893176425');
      // expect(sudoku.solve(game3)[2].join('')).toBe('276435819');
      // expect(sudoku.solve(game3)[3].join('')).toBe('519247386');
      // expect(sudoku.solve(game3)[4].join('')).toBe('762583194');
      // expect(sudoku.solve(game3)[5].join('')).toBe('384961752');
      // expect(sudoku.solve(game3)[6].join('')).toBe('957614238');
      // expect(sudoku.solve(game3)[7].join('')).toBe('438729561');
      // expect(sudoku.solve(game3)[8].join('')).toBe('621358947');
    })
  });
  describe('4-я головоломка', () => {
    const game4 = '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-';
    it('Получаем поле для судоку', () => {
      expect(sudoku.solve(game4)).toHaveLength(9);
      expect(sudoku.solve(game4[1])).toHaveLength(9);
      expect(sudoku.solve(game4)[sudoku.solve(game4).length - 1]).toHaveLength(9);
    })
    it('Решение верно', () => {
      // expect(sudoku.solve(game4)[0].join('')).toBe('145892673');
      // expect(sudoku.solve(game4)[1].join('')).toBe('893176425');
      // expect(sudoku.solve(game4)[2].join('')).toBe('276435819');
      // expect(sudoku.solve(game4)[3].join('')).toBe('519247386');
      // expect(sudoku.solve(game4)[4].join('')).toBe('762583194');
      // expect(sudoku.solve(game4)[5].join('')).toBe('384961752');
      // expect(sudoku.solve(game4)[6].join('')).toBe('957614238');
      // expect(sudoku.solve(game4)[7].join('')).toBe('438729561');
      // expect(sudoku.solve(game4)[8].join('')).toBe('621358947');
    })
  });
  describe('5-я головоломка', () => {
    const game5 = '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--';
    it('Получаем поле для судоку', () => {
      expect(sudoku.solve(game5)).toHaveLength(9);
      expect(sudoku.solve(game5[0])).toHaveLength(9);
      expect(sudoku.solve(game5)[sudoku.solve(game5).length - 1]).toHaveLength(9);
    })
    it('Решение верно', () => {
      // expect(sudoku.solve(game5)[0].join('')).toBe('145892673');
      // expect(sudoku.solve(game5)[1].join('')).toBe('893176425');
      // expect(sudoku.solve(game5)[2].join('')).toBe('276435819');
      // expect(sudoku.solve(game5)[3].join('')).toBe('519247386');
      // expect(sudoku.solve(game5)[4].join('')).toBe('762583194');
      // expect(sudoku.solve(game5)[5].join('')).toBe('384961752');
      // expect(sudoku.solve(game5)[6].join('')).toBe('957614238');
      // expect(sudoku.solve(game5)[7].join('')).toBe('438729561');
      // expect(sudoku.solve(game5)[8].join('')).toBe('621358947');
    })
  });
});
