function generateRandomMatrix(m, n, minValue, maxValue) {
    const matrix = [];
    for (let i = 0; i < m; i+=1) {
      const row = [];
      for (let j = 0; j < n; j+=1) {
        row.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
      }
      matrix.push(row);
    }
    return matrix;
  }
  
  const m = 9;
  const n = 9;
  const minValue = 0;
  const maxValue = 9;
  
  const randomMatrix = generateRandomMatrix(m, n, minValue, maxValue);
  console.table(randomMatrix);
  