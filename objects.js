//creating object with object literals:
const user = {
    name: "john",
    age: "20",
    address: "dhk"
};
console.log(user.name);

console.log("line break...........");

//creating object with constructor fucntion:
function Car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
};
/* creating instance of object */
const c1 = new Car("BMW", "i8", "100k");
console.log(c1);

console.log("line break...........");

//creating object with class:
class Customer {
    constructor(name, product){ //local variables
        this.name = name; //instance variables
        this.product = product; //instance variables
    }

    addToCart(){
        console.log(`${this.product} is added to the cart by the customer named ${this.name}`);
    };
};

/* creating instances */
const p1 = new Customer("Niaz", "Book1");
const p2 = new Customer("Utsho", "Book2");
console.log(p1.name + " " + p1.product);
console.log(p2.name + " " + p2.product);
p1.addToCart();
p2.addToCart();