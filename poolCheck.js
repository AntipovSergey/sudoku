let strH = '6--3-89--'
let strV = '-596---1-'
let strSqr = '-3-5-19--'

function poolCheck(strH, strV, strSqr) {
  const regex1 = /\D/gm;
  const etalon = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let arrH = strH.replace(regex1, '0').split('');
  let arrV = strV.replace(regex1, '0').split('');
  let arrSqr = strSqr.replace(regex1, '0').split('');

  let diff1 = arrH.filter(i => !etalon.includes(i)).concat(etalon.filter(i => !arrH.includes(i)));
  let diff2 = arrV.filter(i => !etalon.includes(i)).concat(etalon.filter(i => !arrV.includes(i)));
  let diff3 = arrSqr.filter(i => !etalon.includes(i)).concat(etalon.filter(i => !arrSqr.includes(i)));

  let diff4 = diff1.filter(i => diff3.includes(i)).concat(diff3.filter(i => diff1.includes(i)));
  let diff5 = diff2.filter(i => diff3.includes(i)).concat(diff3.filter(i => diff2.includes(i)));
  let diff6 = diff4.filter(i => diff5.includes(i)).concat(diff5.filter(i => diff4.includes(i)));
  let outputNumber = (diff6.filter((element, i) => diff6.indexOf(element) === i).filter(element => element !== '0')).join('');

  if (outputNumber.length === 0) {
    return -1;
  }
  return outputNumber;
}

console.log(poolCheck(strH, strV, strSqr))

