const whoWon = require("../src/2.js")

describe("whoWon", () => {
    it("returns TIE if players both played the same sign", () => {
        const player1 = "rock"
        const player2 = "rock"

        const result = whoWon(player1, player2)
        expect(result).toBe(`TIE!`)
    })
    it("returns player 2 wins message if player 2 played a winning sign", () => {
        const player1 = "rock"
        const player2 = "paper"

        const result = whoWon(player1, player2)
        expect(result).toBe(`Player 2 wins!`)
    })
    it("returns player 1 wins message if player 1 played a winning sign", () => {
        const player1 = "paper"
        const player2 = "rock"

        const result = whoWon(player1, player2)
        expect(result).toBe(`Player 1 wins!`)
    })
})