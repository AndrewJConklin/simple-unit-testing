function getCircleArea(radius) {
  return (radius ** 2) * Math.PI
}

function getCircleAreas(radiusArr) {
  let areasArr = [];

  for (let i = 0; i < radiusArr.length; i++) {
    const circleArea = +getCircleArea(radiusArr[i]).toFixed(3);
    areasArr.push(circleArea);
  }

  return areasArr;
}

module.exports = getCircleAreas
