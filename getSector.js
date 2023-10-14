function getSector(sud, ind) {
  const ind0 = [0, 1, 2, 9, 10, 11, 18, 19, 20];
  const ind1 = [3, 4, 5, 12, 13, 14, 21, 22, 23];
  const ind2 = [6, 7, 8, 15, 16, 17, 24, 25, 26];
  const ind3 = [27, 28, 29, 36, 37, 38, 45, 46, 47];
  const ind4 = [30, 31, 32, 39, 40, 41, 48, 49, 50];
  const ind5 = [33, 34, 35, 42, 43, 44, 51, 52, 53];
  const ind6 = [54, 55, 56, 63, 64, 65, 72, 73, 74];
  const ind7 = [57, 58, 59, 66, 67, 68, 75, 76, 77];
  const ind8 = [60, 61, 62, 69, 70, 71, 78, 79, 80];
  const obj = {
    0: ind0,
    1: ind1,
    2: ind2,
    3: ind3,
    4: ind4,
    5: ind5,
    6: ind6,
    7: ind7,
    8: ind8,
  };
  const result = [];
  const row = Math.floor(ind / 9);
  const col = Math.floor(ind % 9);
  const sector = Math.floor(row / 3) * 3 + Math.floor(col / 3);
  const indCell = obj[sector];
  for (let i = 0; i < indCell.length; i++) {
    if (sud[indCell[i]] !== 0) {
      result.push(sud[indCell[i]]);
    }
  }
  return result;
}

module.exports = { getSector };
