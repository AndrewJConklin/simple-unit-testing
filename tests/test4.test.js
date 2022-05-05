const myFunction = require("../src/4")

test("myFunction returns a statement with my gross and net income when given salary, taxCode, income tax rates, and car ownership status", () => {
    const salary = 50000
    const taxCode = "ST"
    const incomeTax1 = 7000
    const incomeTax2 = 2000
    const ownsCar = false

    const result = myFunction(salary, taxCode, incomeTax1, incomeTax2, ownsCar)

    expect(result).toBe(`Your gross income is £50000 and your net income is £35599.75.`)


})