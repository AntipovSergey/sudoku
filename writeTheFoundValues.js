// Написать функцию, которая в изначальном массиве по индексу заменять значение элемента на значение по ключу (если значени единственное) / writeTheFoundValues

function writeTheFoundValues(objectContainingValues, arrWithSolution) {
  const coordKeep = [];
  for (key in objectContainingValues) {
    if (objectContainingValues[key].length === 1) {
      coordKeep.push(key);
    }
  }
  coordKeep.forEach((el) => {
    arrWithSolution[el[0]][el[1]] = objectContainingValues[el];
  });
  return arrWithSolution;
}

module.exports = writeTheFoundValues;
