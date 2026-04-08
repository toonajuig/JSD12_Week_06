const Animal = require("./Animal.js");

class Mammal extends Animal {
  constructor(name, spicies, furColor) {
    super(name, spicies);
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

module.exports = Mammal;
