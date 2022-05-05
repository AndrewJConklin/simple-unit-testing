const checkFive = require("../src/1.js")

describe("checkFive", () => {
    it("returns less than 5 when given a number that is less than 5", () => {
        const number = 4
        const result = checkFive(number)
        expect(result).toBe(`4 is less than 5.`)
    })
    it("returns greater than 5 when given a number that is greater than 5", () => {
        const number = 8
        const result = checkFive(number)
        expect(result).toBe(`8 is greater than 5.`)
    })
    it("returns equal to 5 when given 5", () => {
        const number = 5
        const result = checkFive(number)
        expect(result).toBe(`5 is equal to 5.`)
    })
})
