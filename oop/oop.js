// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full implementation using Encapsulation, Inheritance, and Polymorphism.

// const lion = {
//   name: "Simba",
//   species: "Lion",
//   makeSound: function () {
//     console.log(`${this.name} says: ROAR!!`);
//   },
// };

// lion.makeSound();

// The Class Template (Encapsulation)

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; // Internal state (protected by _)
  }

  makeSound() {
    console.log(`${this.name} makes a sound...`);
  }

  eat() {
    this._hunger -= 10;
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
  }
  changeName(newName) {
    const oldName = this.name;
    this.name = newName;
    console.log(`Old name is ${oldName} New name is ${this.name}`);
  }
}

// const giGi = new Animal("Gigi", "Lion");
// const boBo = new Animal("Bo Bo", "Tiger");
// const coCo = new Animal("Co Co", "Monkey");

// console.log(giGi.makeSound);
// console.log(boBo);
// console.log(coCo);

// giGi.makeSound();
// giGi.eat();

// boBo.makeSound();
// boBo.eat();

// coCo.makeSound();
// coCo.eat();

// Object instance
const leo = new Animal("Leo", "Lion");

console.log(leo);

console.log(leo._hunger);
leo.eat();
console.log(leo._hunger);

// specialized classes (inheritance)

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

const bambie = new Mammal("Bambie", "Dog");

bambie.groom();

const peterapteranodon = new Bird("Dookdig", "Peterapteranodon");

peterapteranodon.makeSound();

peterapteranodon.changeName("aaaa");
