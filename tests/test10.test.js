const removeVowelsForWords = require("../src/10")

test("removeVowelsForWords removed all vowels from an array of words", () => {
  const words = ["Bananas, are, super, duper, tasty"]
  const result = removeVowelsForWords(words)
  expect(result).toEqual(["_a_a_a___a_e___u_e____u_e____a___"])

})