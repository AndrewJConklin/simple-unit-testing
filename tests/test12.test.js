const someFunction = require("../src/12")

test("someFunction slices an array when given", () => {
    const array = [8, 5, 9, 10, 1, 50]
    const result = someFunction(array)

    expect(result).toEqual([5, 8])
})