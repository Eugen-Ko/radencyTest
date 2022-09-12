function loadGrain(levels) {
  // your code here

  const result = {
    grain: 0,
    maxHeight: 0,
  };

  if (levels.length < 3) return result.grain;

  const highestColumn = Math.max(...levels);
  const highestColumnIdx = levels.indexOf(highestColumn);

  const getGrain = (i) => {
    const currentHeightValue = levels.at(i);
    if (result.maxHeight < currentHeightValue)
      result.maxHeight = currentHeightValue;
    result.grain += result.maxHeight - currentHeightValue;
  };

  for (let i = 0; i < highestColumnIdx; i += 1) {
    getGrain(i);
  }
  result.maxHeight = 0;
  for (let i = levels.length - 1; i > highestColumnIdx; i -= 1) {
    getGrain(i);
  }

  return result.grain;
}

console.log(loadGrain([4, 1, 3])); // 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
console.log(loadGrain([2, 4, 2])); // 0
console.log(loadGrain([7, 4])); // 0
console.log(loadGrain([])); // 0
console.log(loadGrain([3, 2, 10, 1, 5, 2, 7])); // 14
console.log(loadGrain([1, 5, 5, 5, 0, 0])); // 0
