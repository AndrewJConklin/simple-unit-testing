const compareNumbers = require("../src/5")

test("compareNumbers correctly compares two given numbers", () => {
    const m = 1
    const n = 120

    result = compareNumbers(m, n)

    expect(result).toBe(`1 is smaller than 120`)
})