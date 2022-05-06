const greetPeople = require("../src/8")

test("greetPeople returns a greeting for each person in a given array", () => {
  const people = ["Andrew ", "Kara"]
  const greetings = greetPeople(people)
  expect(greetings).toEqual("Hello Andrew Hello Kara")
})