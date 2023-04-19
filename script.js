// HW#1

const header = document.querySelector('.header')

const person = {
    fullName: 'Alexander',
    age: 21,
    infoAboutLivingPlace: {
        country: 'Russia',
        state: 'Sverdlovsk oblast',
        city: 'Yekaterinburg',
        cityPopulation: 1544376,
        hasProgrammers: true
    },
    hasCats: true,
    hobbies: ['programming', 'mma', 'cinematography'],
    greeting: function (){return `hey my name is ${this.fullName}`}
}

const personCopy = {...person}
 personCopy.occupation = {
    metier: 'student',
    salary: null,
    uniStartingYear: 2020,
    uniEndingYear: 2024
 }

 console.log(personCopy)

header.innerHTML = `I am a ${personCopy.occupation.metier} who's salary is ${personCopy.occupation.salary}. I started uni in ${personCopy.occupation.uniStartingYear} and will end it in ${personCopy.occupation.uniEndingYear}.` 

