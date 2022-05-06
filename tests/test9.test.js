const removeVowels = require("../src/9")

test("removeVowels returns all the vowels from a given word and replaces constanants with _", () => {
  const word = "bananas"
  const result = removeVowels(word)
  expect(result).toBe("_a_a_a_")
})