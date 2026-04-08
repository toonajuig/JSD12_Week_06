const Animal = require("./Animal.js");

class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }
  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the ${this.zooName}`);
  }
  showAllAnimals() {
    console.log(`\n--- Welcome to ${this.zooName} ---`);
    this.animals.forEach((animal) => {
      // Accessing properties and calling methods
      console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`);
      animal.makeSound();
      animal.eat();
      console.log("-------------------");
    });
  }
}

module.exports = Zoo;
