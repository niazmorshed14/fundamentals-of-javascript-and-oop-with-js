//class is a blueprint where there are multple objects inside the class
//Car is a class and BMW, Audi are objects
//properties of the Car are the Variable, ex: name, color, licenceNumber
//Methods are behavior/action, for ex: autoStart(), autoParking(), brake(), drive()
//every objects (BMW, Audi) will get every property and method of the class Car

// Create a class
class Car {
    constructor(color, brand) {
      this.color = color;    // property
      this.brand = brand;    // property
    }
  
    drive() {                // method
      console.log(`The ${this.color} ${this.brand} is driving!`);
    }
  }
  
  // Create objects from the class
  const car1 = new Car("red", "Toyota");
  const car2 = new Car("blue", "BMW");
  
  car1.drive();  // Output: The red Toyota is driving!
  car2.drive();  // Output: The blue BMW is driving!
  
  console.log("...........line brake...........");

  class vehicleCar {
    constructor(name, price, model, color){
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    };

    refuel (){
        console.log("The car is re-fueled");
    };
  };

  //new keyword to create the object
  const c1 = new vehicleCar("BMW", 100000, "i7", "Red"); 
  
  //"new vehiceCar" is the object here receiving everything from the class
  //const c1 is just a variable called reference variable

  console.log(c1.model);
