const object = document.querySelector('.object')

const obj = {
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
    greeting: () => {return `hey my name is ${this.fullName}`}
}

const objCopy = {...obj}
 objCopy.occupation = {
    metier: 'student',
    salary: null,
    uniStartingYear: 2020,
    uniEndingYear: 2024
 }

 console.log(objCopy)

object.innerHTML = `I am a ${objCopy.occupation.metier} who's salary is ${objCopy.occupation.salary}. I started uni in ${objCopy.occupation.uniStartingYear} and will end it in ${objCopy.occupation.uniEndingYear}.` 