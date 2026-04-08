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

module.exports = Animal;
