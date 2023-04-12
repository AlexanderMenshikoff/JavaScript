// HW#1

// const header = document.querySelector('.header')

// const person = {
//     fullName: 'Alexander',
//     age: 21,
//     infoAboutLivingPlace: {
//         country: 'Russia',
//         state: 'Sverdlovsk oblast',
//         city: 'Yekaterinburg',
//         cityPopulation: 1544376,
//         hasProgrammers: true
//     },
//     hasCats: true,
//     hobbies: ['programming', 'mma', 'cinematography'],
//     greeting: function (){return `hey my name is ${this.fullName}`}
// }

// const personCopy = {...person}
//  personCopy.occupation = {
//     metier: 'student',
//     salary: null,
//     uniStartingYear: 2020,
//     uniEndingYear: 2024
//  }

//  console.log(personCopy)

// header.innerHTML = `I am a ${personCopy.occupation.metier} who's salary is ${personCopy.occupation.salary}. I started uni in ${personCopy.occupation.uniStartingYear} and will end it in ${personCopy.occupation.uniEndingYear}.` 



//HW#2

let movieArr = [
{
    id: 00001,
    title: '127 hours',
    year: 2010, 
    actors: ['James Franco', 'Kate Mara', 'Amber Tamblyn'],
    description: 'A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.',
    details: {
        genre: 'Biography',
        reviews: [{ username: 'DICK STEEL', content:
         `I think the reports and those who claim to have fainted when watching this is probably
         highly exaggerated. Sure it's graphic, but nothing not already seen in a typical torture porn film. Danny Boyle doesn't exploit this
         inevitable moment through lingering shots or in your face techniques, but does enough to bring forth the sheer horror and pain of the
         entire 127 hours ordeal that culminates with a none too pretty or neat self amputation of a limb, taking care of addressing and cutting
         through skin, meat, bone and tendon.`, 
         score: 10 }]
}
    },
{
    id: 00002,
    title: 'Pineapple express',
    year: 2008, 
    actors: ['James Franco', 'Seth Rogen', 'Danny McBride'],
    description: `A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealer's boss murder a competitor while trying to serve papers on him.`,
    details: {
        genre: 'Comedy',
        reviews: [{ username: 'pawanpunjabithewriter', content:
        `I saw mixed reviews on this one. However, it was a highly rated comedy movie. So I had an urge to watch it. I was disappointed with how the movie
        was taking pace. The first 45 minutes of the movie, didn't have much to do. It was too boring. But right after then, the adventure awaited you! 
        It takes turn, it takes pace, it gets funny, it gets terrific. James Franco was brilliant. The most amazing thing was he was in the same pajamas
        whole movie. It's boring initially but it's a ride of fun, adventure, drugs and crime towards the later end.`, 
        score: 8 }]
}
    },
{
    id: 00003,
    title: 'The Disaster Artist',
    year: 2017, 
    actors: ['James Franco', 'Dave Franco', 'Seth Rogen'],
    description: `When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.`,
    details: {
        genre: 'Drama',
        reviews: [{ username: 'AlsExGal', content:
        `Struggling would-be actor Greg (Dave Franco) meets bizarre, mysterious Tommy Wiseau (James Franco) in an acting class, and the two develop an awkward friendship.
        The eccentric Tommy offers to move to Los Angeles with Greg to kick start their careers, but once there they find little success. However, one day they decide that,
        if Hollywood won't work with them, they'll just make their own movie, which leads to the production of one of the worst movies of all time, The Room.`, 
        score: 8 }]
}
},

]

movieArr.forEach(object => {
    console.log(`The ${object.year} film “${object.title}”, which tells the story of “${object.description}” This movie starred ${object.actors.join(', ')} and etc. It was rated by user ${object.details.reviews[0].username}, with rating of ${object.details.reviews[0].score}. Register to watch this ${object.details.genre}.`)
})


function getMovieByYear(movie, year){
    let filteredMovie = movie.filter(obj => {
        return obj.year === year
    })
    console.log(filteredMovie) 
}

function getMovieByName(movie, name){
    let filteredMovie = movie.filter(obj => {
        return obj.title === name
    }) 
    console.log(filteredMovie) 
}

getMovieByYear(movieArr, 2010)
getMovieByName(movieArr, 'The Disaster Artist')

