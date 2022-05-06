function getLargestNumber(array) {
  let largestNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1] && array[i] > largestNumber) {
      largestNumber = array[i];
    } else if ([i] == (array.length - 1) && array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

module.exports = getLargestNumber;
