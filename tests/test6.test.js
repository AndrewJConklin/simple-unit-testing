const getCircleAreas = require("../src/6")

test("getCircleArea returns the areas of circles when given an array of radii", () => {
  const radiusArr = [6, 9, 12]
  const areasArr = getCircleAreas(radiusArr)

  expect(areasArr).toEqual([113.097, 254.469, 452.389])
})