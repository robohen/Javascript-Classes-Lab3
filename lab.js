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
    eat(times) {
        for (let i = 0; i < times; i++) {
          this.eat();
        }
      }
      exercise(times) {
        for (let i = 0; i < times; i++) {
          this.exercise();
        }
    }
    ageUp(years){
        this.age += years;
        this.height += years;
        this.weight += years;
        this.mood -= years;
        this.bankAccount +=10 * years;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+= 10;
        this.bankAccount -= hamster.price;
        hamster.owner=this.name;
    }

  }
  //Create a Story
  const Timmy = new Person("Timmy");
  Timmy.ageUp(5);
  Timmy.eat(5);
  Timmy.exercise(5);
  Timmy.ageUp(9);
  const gus = new Hamster("Gus");
  gus.setOwner(Timmy.owner);
  Timmy.buyHamster(gus);
  Timmy.ageUp(15);
  Timmy.eat(2);
  Timmy.exercise(2);