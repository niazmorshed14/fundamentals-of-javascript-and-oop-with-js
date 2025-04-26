//push method
let lang = ["Java", "JS", "Python"];
lang.push("Ruby");
console.log(lang);

console.log("....line break....")

//pop 
let lang1 = ["Java", "JS", "Python"];
lang1.pop();
console.log(lang1);

console.log("....line break....")

//shift -- removes the first element and return the value
let fruits = ["apple", "banana", "orange", "mango"];
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

console.log("....line break....")

//unshift -- adds one more elements at the begining and returns the length of the array
let color = ['red', 'green'];
color.unshift('blue');
console.log(color); 
console.log(color.length);

console.log("....line break....")

//splice -- add or remove elements in specific index of an array
let animals = ['bird', 'cow', 'cat', 'mouse'];
animals.splice(0,1,'bear');
console.log(animals);

console.log("....line break....")

//slice -- it's used to extract a portion of an array or string without changing the original one. 
// it does not include the last index
let abc = [1,2,3,4,5,6,7];
let newArray = abc.slice(1,4);
console.log(newArray);


console.log("....line break....")

//concat: combine two or more arrays and create new array
let fr = ["apple", "banana", "orange", "mango"];
let nmbr = [1,2,3,4];
let newConcatArray = fr.concat(nmbr);
console.log(newConcatArray);


console.log("....line break....")

//indexOf: return the first index at which the given element found in the array. return -1 if the element is 
//not in the array
let anmls = ['bird', 'cow', 'cat', 'mouse', 'bird'];
let indx = anmls.indexOf("bird");
console.log(indx);

//accessing second bird
let xyz = anmls.indexOf('bird', 1) //start from second element
console.log(xyz);

console.log("....line break....")

//include -- check whether a single/multiple element is present in the array
let test = ["admin", "super admin", "owner", "viewer"];
let flag = test.includes("admin");
console.log(flag);

console.log("....line break....")

//forEach
let n = [1,2,3,4,5,6,7];
n.forEach((e) => {  //e is the callback function pointing each values in the n array
    console.log(e * 2);
});
