/* globals require */
const SuperheroModule =
    require("./models/superHero");
const Superhero = SuperheroModule.superhero;

var batman = new Superhero("Batman", "Bruce Wayne", "Utility belt");
console.log(batman);