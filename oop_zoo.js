// Building a virtual Zoo

// Base Class (Encapsulation)

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; // Internal state (protected by _)
  }

  getStatus() {
    if (this._hunger <= 0) return "Full";
    if (this._hunger <= 20) return "Satisfied";
    return "Hungry";
  }

  makeSound() {
    console.log(`${this.name} makes a sound...`);
  }

  eat() {
    // this._hunger -= 10;
    // console.log(
    //   `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    // );
    if (this._hunger <= 0) {
      console.log(`${this.name} is aleady full!`);
    } else {
      console.log(`${this.name} ate. Hunger is now ${this._hunger}`);
    }
  }
  changeName(newName) {
    const oldName = this.name;
    this.name = newName;
    console.log(`Old name is ${oldName} New name is ${this.name}`);
  }
}

// Example of inheritance
// Bird and Mammal get everything from Animal via 'extends'

class Mammal extends Animal {
  constructor(name, spicies, furColor) {
    super(name, spicies);
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingspan) {
    super(name, species);
    this.wingspan = wingspan;
  }
  // this is an example of polymorphism; overide the parent's method
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}

// console.log(leo);
// console.log(zazu);

// Zoo Manager
// A class to hold and run our animal object:

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

// Excution

const myZoo = new Zoo("The JS Terminal Zoo");

// Create instances of class Animal, Mammal and/or Bird

const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "Brown");

myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();
