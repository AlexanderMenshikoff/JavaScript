// HW#2

let movieArr = [
  {
    id: 00001,
    title: "127 hours",
    year: 2010,
    actors: ["James Franco", "Kate Mara", "Amber Tamblyn"],
    description:
      "A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.",
    details: {
      genre: "Biography",
      reviews: [
        {
          username: "DICK STEEL",
          content: `I think the reports and those who claim to have fainted when watching this is probably
             highly exaggerated. Sure it's graphic, but nothing not already seen in a typical torture porn film. Danny Boyle doesn't exploit this
             inevitable moment through lingering shots or in your face techniques, but does enough to bring forth the sheer horror and pain of the
             entire 127 hours ordeal that culminates with a none too pretty or neat self amputation of a limb, taking care of addressing and cutting
             through skin, meat, bone and tendon.`,
          score: 10,
        },
        {
          username: "AdrenalinDragon",
          content: `You know, when I first heard about this movie. I didn't really know what to expect, as all I knew was it was based on a true story about a guy getting stuck in a canyon due to a boulder. I decided to give it a shot and well, I was amazed by this movie. Danny Boyle continues to give us impressive cinematography and incredible performances in his movie, thanks to James Franco, who plays as Aron Ralston, the mountain climber who gets stuck under the boulder if you didn't already know.`,
          score: 8,
        },
        {
          username: "treeskier802",
          content: `The story of Aron Ralston is documented in this intense drama. It's the true story of Ralston who found himself stuck in a cave in Utah with his arm pinned under a bolder. I knew much of the story before I watched this film and honestly was a bit queezy as to what might be shown. I'm the sort who does not do well seeing blood and guts and watching this movie was a true test for me. If you are the type of person who gets queezy over stuff like this, I must say view with caution. If you can stomach watching this film, however, you will witness an incredible true story that you will never forget.`,
          score: 10,
        },
      ],
    },
  },
  {
    id: 00002,
    title: "Pineapple express",
    year: 2008,
    actors: ["James Franco", "Seth Rogen", "Danny McBride"],
    description: `A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealer's boss murder a competitor while trying to serve papers on him.`,
    details: {
      genre: "Comedy",
      reviews: [
        {
          username: "pawanpunjabithewriter",
          content: `I saw mixed reviews on this one. However, it was a highly rated comedy movie. So I had an urge to watch it. I was disappointed with how the movie
            was taking pace. The first 45 minutes of the movie, didn't have much to do. It was too boring. But right after then, the adventure awaited you! 
            It takes turn, it takes pace, it gets funny, it gets terrific. James Franco was brilliant. The most amazing thing was he was in the same pajamas
            whole movie. It's boring initially but it's a ride of fun, adventure, drugs and crime towards the later end.`,
          score: 8,
        },
        {
          username: "serafinogm",
          content: `You can't view this movie from a critical perspective, dissecting it for realism and walking away disappointed because it fell short in some way, it's nothing more than a adult cartoon. This movie is just pure unadulterated entertainment where characters are injured in ways that would have terminated their existence yet somehow, like Wile E Coyote, they survive (Danny McBride's character sustains multiple potentially fatal injuries)! A movie made to entertain and that is just good clean fun and which happily (from my perspective) showcases Amber Heard. Seth Rogan involves himself in movies that I want to watch simply because of his involvement and if James Franco, Craig Robinson, and Danny McBride are in it then all the better. You need or want some light hearted fun sprinkled with barrel laughs then this is your vehicle!`,
          score: 9,
        },
        {
          username: "paulwattriley",
          content: `I've seen this a few times and it is enjoyable and stupid. Its clearly aimed at stoners and I was high when I first seen it and just one one of those movies that is hilarious when stoned.`,
          score: 7,
        },
      ],
    },
  },
  {
    id: 00003,
    title: "The Disaster Artist",
    year: 2017,
    actors: ["James Franco", "Dave Franco", "Seth Rogen"],
    description: `When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.`,
    details: {
      genre: "Drama",
      reviews: [
        {
          username: "AlsExGal",
          content: `Struggling would-be actor Greg (Dave Franco) meets bizarre, mysterious Tommy Wiseau (James Franco) in an acting class, and the two develop an awkward friendship.
            The eccentric Tommy offers to move to Los Angeles with Greg to kick start their careers, but once there they find little success. However, one day they decide that,
            if Hollywood won't work with them, they'll just make their own movie, which leads to the production of one of the worst movies of all time, The Room.`,
          score: 9,
        },
        {
          username: "Anttell",
          content: `First up, I haven't seen the Room (2003), but of course have heard a lot about it through the years, a friend of mine is a huge fan who takes part in fan screenings and carries bunch of footballs into them...`,
          score: 8,
        },
        {
          username: "TheLittleSongbird",
          content: `'The Disaster Artist' has garnered comparisons with Tim Burton's 'Ed Wood'. Not surprisingly, both detailing of incompetent directors making infamously terrible films with big dreams and with their hearts in the right place.`,
          score: 8,
        },
      ],
    },
  },
];

movieArr.forEach((object) => {
  function averageRating() {
    let num = 0;
    object.details.reviews.forEach((el) => {
      num += el.score;
    });
    return (num / object.details.reviews.length).toFixed(1);
  }

  console.log(
    `The ${object.year} film “${object.title}”, which tells the story of “${
      object.description
    }” This movie starred ${object.actors.join(
      ", "
    )} and etc. It was rated by ${
      object.details.reviews.length
    } users, with a total rating of ${averageRating()}. Register to watch this ${
      object.details.genre
    }.`
  );
});

function getMovieByYear(movie, year) {
  const filteredMovie = movie.filter((obj) => {
    return obj.year >= year;
  });
  return filteredMovie;
}

function getMovieByName(movie, name) {
  const filteredMovie = movie.filter((obj) => {
    if (obj.title.toLowerCase().includes(name.toLowerCase())) {
      return name;
    }
  });

  return filteredMovie;
}

console.log(getMovieByYear(movieArr, 2005));
console.log(getMovieByName(movieArr, "127"));
