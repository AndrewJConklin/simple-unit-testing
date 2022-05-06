const getEven = require("../src/14")

test("getEven returns the even numbers in a given array", () => {
  const numbers = [3, 8, 10, 21, 22]
  const result = getEven(numbers)

  expect(result).toEqual([8, 10, 22])
})