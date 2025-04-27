//Method overriding happens when a child class defines a method with the same name as a method in the parent class
//The child's method will replace (override) the parent's method when you call it from the child object
// Parent class

class Animal {
    makeSound() {
      console.log("Some generic animal sound");
    }
  }
  
  // Child class
  class Cat extends Animal {
    makeSound() { // Overriding the parent's method
      console.log("meaow!");
    }
  }
  
  // Create objects
  const myAnimal = new Animal();
  const myCat = new Cat();
  
  myAnimal.makeSound();  // Output: Some generic animal sound
  myCat.makeSound();     // Output: Woof! Woof! (overridden version)

  console.log(".......line break.......");

  //in case we also want to call parent's method inside child 
  class Dog extends Animal {
    makeSound() {
      super.makeSound();  // Call parent's version first
      console.log("Woof! Woof!");  // Then child's extra behavior
    }
  }
  
  const myDog = new Dog();
  myDog.makeSound();
  // Output:
  // Some generic animal sound
  // Woof! Woof!
  
  