function convertInputString(str) {
  let outPut = [];
  let start = 0;
  let end = 9;
  for (let i = 0; i < 9; i++) {

    let temp = str.slice(start, end)
    outPut.push(temp.split(''));
    start += 9;
    end += 9;

  }
  for (let i = 0; i < outPut.length; i++) {
    outPut[i] = outPut[i].map(function (elem) {
      if (elem === '-') {
        return elem = ""
      } else {
        return +elem;
      }
    });
  }
  return outPut;
}