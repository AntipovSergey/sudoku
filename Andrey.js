function generateChessboard() {
    const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
    const pawns = new Array(8).fill('Пешка');
  console.log(pawns);
    const arr = []
    const nulls = Array(8).fill(null)
  arr.push(figures.map((el) => `Ч ${el}`), pawns.map((el) => `Ч ${el}`), nulls,nulls,nulls,nulls,pawns.map((el) => `Б ${el}`),figures.map((el) => `Б ${el}`))
    return arr
  }