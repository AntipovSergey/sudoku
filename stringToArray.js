// const string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const stringToArray = (string) => {
  const matrix = [];
  stringWithZeroes = string.replaceAll('-', '0');

  // разделить строку из 81 символов на подстроки по 9 символов
  for (let i = 0, k = 9; k <= 81; i += 9, k += 9) {
    matrix.push(stringWithZeroes.slice(i, k));
  }

  // console.log(matrix);

  // разделить внутренние элементы со строками на подстроки из одного символа и преобразовать их в число
  const matrixWithInnerRows = matrix.map((el) => el.split('').map((elInner) => Number(elInner)));

  // console.log(matrixWithInnerRows);

  return matrix;
};

stringToArray(string);
