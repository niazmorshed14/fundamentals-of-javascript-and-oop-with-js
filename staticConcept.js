//static means the property or method belongs to the class itself, NOT to the objects created from it
//a static method is used directly on the class, without creating any object
//static makes methods/properties belong to the class, not to the object
//we can use static when all the objects have one common value or when an object doesn't need to know
//a particular method or property of the class

class Carr {
    constructor(brand) {
      this.brand = brand;
    }
  
    drivee() {          //Normal method
      console.log(`${this.brand} is driving.`);
    }
  
    static generalInfo() { //Static method
      console.log("Cars have 4 wheels.");
    }
  }
  
  // Create an object
  const car1 = new Carr("Toyota");
  
  car1.drivee();         //Output: Toyota is driving
  Carr.generalInfo();    //Output: Cars have 4 wheels
  //car1.generalInfo();   //Error! Static method can't be called on object


  console.log(".........line break.......");

  class Car{
    static wheels = 4;
    constructor(name, model, price){
       this.name = name;
       this.model = model;
       this.price = price;
       this.wheels = 50;
    }

    static stop(){
       console.log("car -- stop")
    }

    drive(){
       console.log(this.name + " is driving");
    }
}

const c1 = new Car("Honda", 2023, 50);
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${Car.wheels}`);
console.log(Car.wheels)
Car.stop();
//c1.stop();//error
c1.drive();
//Car.drive();//error
//console.log(wheels); //error

//static var/function:  call it by using class name
//non static var/function: call it by using object reference name





  