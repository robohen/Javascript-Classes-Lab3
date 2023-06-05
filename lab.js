class Hamster {
    constructor(name) {
      this.owner = '';
      this.name = name;
      this.price = 15;
    }
    wheelRun(){
        console.log("squeak squeak!");
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        console.log(`${this.price}`);
    }
  }
  class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0;
    }
    getName(){
        console.log(`${this.name}`);
    }
    getAge(){
        console.log(`${this.age}`);
    }
    getWeight(){
        console.log(`${this.weight}`);
    }
    getHeight(){
        console.log(`${this.height}`);
    }
    greet(){
        console.log(`Hello I am ${this.name}`);
    }
    eat(){
        weight++, mood++;
    }
    exercise(){
        this.weight--;
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
    }
    buyHamster(hamster){
        hamster.push();
    }

  }