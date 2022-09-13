const recursiveCount = (levels, index, temporaryArray) => {
  let resultArray = [...temporaryArray];
  if (index < levels.length - 1) {
    if (resultArray[index - 1] > resultArray[index]) {
      resultArray[index] = resultArray[index - 1];
    }
    resultArray = [...recursiveCount(levels, index + 1, resultArray)];
  }
  if (resultArray[index - 1] > resultArray[index]) {
    if (levels[index - 1] > resultArray[index]) {
      resultArray[index - 1] = levels[index - 1];
    } else {
      resultArray[index - 1] = resultArray[index];
    }
  }
  return resultArray;
};

function loadGrain(levels) {
  // your code here

  return [...recursiveCount(levels, 1, levels)].reduce(
    (acc, cur, index) => (acc += cur - levels[index]),
    0
  );
}

console.log(loadGrain([4, 1, 3])); // 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
console.log(loadGrain([2, 4, 2])); // 0
console.log(loadGrain([7, 4])); // 0
console.log(loadGrain([])); // 0
console.log(loadGrain([3, 2, 10, 1, 5, 2, 7])); // 14
console.log(loadGrain([1, 5, 5, 5, 0, 0])); // 0
