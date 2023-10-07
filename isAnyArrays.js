function isAnyArrays(sudoky) {
  for (let i = 0; i < sudoky.length; i++) {
    if (Array.isArray(sudoky[i])) return true;
  }
  return false;
5}

module.exports = { isAnyArrays };
