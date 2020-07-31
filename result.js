function showResult(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].join('');
  }
  const str = arr.join('\r\n');
  console.log(str);
  return str;
}

// check showResult([[1,2,3], [1,2,3], [1,2,3]])
