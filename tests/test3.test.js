const imports = require("../src/3")
const getMentorInfo = imports.getMentorInfo
const mentors = imports.mentors



describe("getMentorInfo", () => {
    it("returns a mentor's information when given an array of mentors and a mentor's name", () => {
        const name = 'Irina'
        const result = getMentorInfo(mentors, name)

        expect(result).toEqual({
            fullName: `Dr. Irina`,
            jobTitle: `Junior Developer`,
            name: 'Irina',
            title: 'Dr.',
            yearsOfExperience: 10
        })
    })
})