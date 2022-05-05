const mentors = [
    {
        name: 'Irina',
        title: 'Dr.',
        yearsOfExperience: 10
    }, {
        name: 'Ashleigh',
        title: 'Dame',
        yearsOfExperience: 20
    }, {
        name: 'Etza',
        title: 'Professor',
        yearsOfExperience: 30
    }
];

function getMentorInfo(mentors, name) {
    const greeting = 'Hello ';
    const result = mentors.find(person => person.name === name);

    let mentorTitle = 'Junior Developer';
    if (result.yearsOfExperience > 10 && result.yearsOfExperience < 20) {
        mentorTitle = 'Senior Developer';
    } else if (result.yearsOfExperience > 20) {
        mentorTitle = 'Very Senior Developer';
    }

    result.jobTitle = mentorTitle;
    result.fullName = result.title + ' ' + result.name;

    return result;
}

const result = getMentorInfo(mentors, 'Etza')

module.exports = {
    getMentorInfo,
    mentors,
}