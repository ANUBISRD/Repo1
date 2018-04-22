/* globals require */
const SuperHeroModule = require("./models/superHero");
const SuperHero = SuperHeroModule.superHero;

var Batman = new superHero("Batman", "Bruce Wayne", "Utility belt");
console.log(Batman);