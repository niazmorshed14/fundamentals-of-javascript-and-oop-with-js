//map -- The map() function is used to transform each item in an array and create a new array with the changed items.
let numbers = [1,2,3,4,5,6,7];
let finalOutput = numbers.map((e) => e*2);
console.log(finalOutput);

console.log("......................")

//f to c conversion
let fahrenheite = [32, 40, 42];

function fahToCel (tempInFah) {
    return (tempInFah - 32) * (5/9);
};
let celTemp = fahrenheite.map(fahToCel);
console.log (celTemp);

//filter -- The filter() method is used to pick only the items from an array 
//that meet a certain condition and return a new array with those items


console.log("......................");

let nums = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = nums.filter((e) => e%2 ===0);
console.log("The even numbers are: ", evenNumbers);

//one more example with objects
let employee = [
    {Cname: "john", age: 30, address: "dhk"},
    {Cname: "peter", age: 20, address: "bsl"},
    {Cname: "jamal", age: 40, address: "kh"},
    {Cname: "utsho", age: 31, address: "dhk"}
];


let result = employee.filter((emp) => {
    return emp.address === "dhk" && emp.age >= 30;
});

console.log (result);


console.log("......................");

//reduce -- The reduce() method takes all the items in an array and combines them into a single value 
// like adding everything up, multiplying, or building a string

let cartItems = [
    {name: "jeans", price: 1500},
    {name: "shirt", price: 2000},
    {name: "t-shirt", price: 1200},
    {name: "sunglass", price: 500},
    
];
let sum = cartItems.reduce((totalPrice, item) => totalPrice + item.price, 0);
console.log(sum);

console.log("......................");

//find -- The find() method is used to search through an array and return the first item that matches a condition.
let numberss = [1,2,3,4,5,6,7,9];
let rlst = numbers.find((e) => e%2 === 0);
console.log(rlst);

console.log("......................");

//lastIndexOf -- The lastIndexOf() method searches an array from the end and returns the last position (index) 
// where a certain value is found
let arr = [1,2,3,4,5,6,7,9,2];
let output = arr.lastIndexOf(2);
console.log(output);

console.log("......................");


//reverse -- The reverse() method reverses the order of items in an array
//flip the array — make the last item first, and the first item last
let users = ["admin", "super admin", "owner", "viewer"];
let reversedResult =  users.reverse();
console.log(reversedResult);

console.log("......................");

//sort -- The sort() method is used to arrange items in order — either alphabetically or numerically.
let personnel = ["admin", "super admin", "owner", "viewer"];
let sortedResult = personnel.sort();
console.log(sortedResult)