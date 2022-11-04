function splitString(str) {
  let regex = /.{9}/gm
  const array = [...str.matchAll(regex)];
  let ar = []
  array.forEach(el => ar.push(el[0].split('')))
  
  return ar
}

module.exports = {splitString}