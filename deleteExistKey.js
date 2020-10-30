// 3. Написать функцию, которая будет удалять из списка значений ключа объекта те значения, которые были переданы вторым параметром. / deleteExistKey

function deleteExistKey(objectContainingValues, key, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < objectContainingValues[key].length; j += 1) {
      if (arr[i] === objectContainingValues[key][j]) objectContainingValues[key].splice(j, 1);
    }
  }
  return objectContainingValues;
}
