// n - это строка - то,что мы ищем, i - индекс строки, j - столбца, p - матрица по которой ищем из струн
const isNoMatchVH = (n, i, j, p) => !(p[i].includes(n)) && !(p.map((element) => element[j]).includes(n))

module.exports = {
  isNoMatchVH,
}