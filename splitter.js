// Написать функцию, которая принимает на вход массив,
// проверяет каждый элемент по индексу в объекте, и
// делит их на известные значения (внутри ключа одно значение)
// и на неизвестные значения (внутри ключа несколько значений) / splitIntoKnownValuesAndUnknowns

function splitIntoKnownValuesAndUnknowns(oneRowOfArr, i) {
  const splitedObj = {
    known: [],
    unknown: [],
  };
  oneRowOfArr.forEach((el, index) => {
    if (el !== '-') {
      splitedObj.known.push(el);
    } else {
      splitedObj.unknown.push(`${i}${index}`);
    }
  });
  return splitedObj;
}

module.exports = splitIntoKnownValuesAndUnknowns;