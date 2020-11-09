


function stringToArr(string) {

  let b = string.split("")
  const arr = [];
  for (i = 0; i < b.length; i++) {
    arr.push(b.slice(i, i + 9))
  }
  return arr;
}


module.exports = {stringToArr}
