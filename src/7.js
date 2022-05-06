function getCircleArea(radius) {
  const pi = Math.PI;
  const rSquared = Math.pow(radius, 2);

  return +(pi * rSquared).toFixed(3);
}

module.exports = getCircleArea
