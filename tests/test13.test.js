const getLargestNumber = require("../src/13")

test("getLargest number returns the largest number in an array", () => {
  const array = [50, 5, 3, 20, 60]
  const largestNumber = getLargestNumber(array)
  expect(largestNumber).toBe(60)
})