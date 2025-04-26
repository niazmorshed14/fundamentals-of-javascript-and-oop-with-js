//Inheritance means one class can take (inherit) properties and methods from another class.
//It’s like children inherit features from parents — same idea in programming!
//The parent class (also called "base class" or "superclass") has common stuff.
//The child class (also called "subclass") reuses it and can add its own stuff too.
//To avoid repeating code and To reuse existing features and add extra things only when needed we use inheritance
//Keyword to create inheritance is "extends"

/* 
Very Simple Real-Life Analogy:

Parent Class	Child Class
............  ............
Vehicle	      Car, Bike
Animal	      Cow, Cat
Employee	    QA Engr, QA Lead
*/


// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  // Child class
  class Cat extends Animal {
    meaow() {
      console.log(`${this.name} is meaowing.`);
    }
  }
  
  // Create a Cat object
  const cat1 = new Cat("Buddy");
  
  cat1.eat();  // From Animal class: Buddy is eating.
  cat1.meaow(); // From Cat class: Buddy is meaowing.


console.log(".....line break.....");

class Vehicle {
  constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo(){
    return `${this.make}, ${this.model}, ${this.year}`;
  }

  startEngine(){
    console.log("This vehicle is starting..." + this.make);
  }

  stopEngine(){
    console.log("This vehicle is going to stop...");
  }
};

//child class
class Car extends Vehicle {
  constructor (make, model, year, fuelType) {
    super(make, model, year); //super keyword calls parent's constructor
    this.fuelType = fuelType;

  }

  driveCar() {
    console.log("driving the car" + this.model);
  }
}

//second child class
class Truck extends Vehicle {
  constructor (make, model, year, loadingCapacity) {
    super(make, model, year);
    this.loadingCapacity = loadingCapacity;

  }

  driveTruck() {
    console.log("driving the truck" + this.model + "capacity" + this.loadingCapacity);
  }
}

//creating objects
const carr = new Car("Honda", "Civic", 2023, "Octane");
const truck = new Truck("Volkswagen", "A2", 2023, "10 Ton");

carr.startEngine(); //calling method from parent class
console.log(carr.getInfo()); //calling method from parent class
truck.startEngine();