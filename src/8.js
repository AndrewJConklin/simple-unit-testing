function greetPeople(people) {
  const greeting = "Hello ";
  let message = ""
  let i = 0
  while (i < people.length) {
    message = `${message}${greeting}${people[i]}`
    i = i + 1
  }
  return message
}

module.exports = greetPeople;