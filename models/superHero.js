class SuperHero {
    constructor(name, secretEdentity, ...powers) {
        this.name = name;
        this.secretEdentity = secretEdentity;
        this.powers = powers;
    }
}

module.exports.SuperHero = SuperHero;