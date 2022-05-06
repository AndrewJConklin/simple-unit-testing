const getCircleArea = require("../src/7")

test("getCircleArea returns the area of a circle when given a radius", () => {
  const radius = 6
  const area = getCircleArea(radius)

  expect(area).toEqual(113.097)
})