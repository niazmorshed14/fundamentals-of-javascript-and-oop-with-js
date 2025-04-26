//function declaration:
function addition (a,b){
    return a+b;
};
let sum = addition(5,6);
console.log(sum);

console.log("....line break....");

//function expression:an annonymous function
const multiply = function (x,y) {
    return x*y;
};
let result = multiply(5,6);
console.log(result);

console.log("....line break....");

//arrow function
const division = (t1, t2) => t1/t2;
let div = division(20,2);
console.log(div);
console.log (division(20,10));

console.log("....line break....");

//constructor function
const substraction = new Function ('p', 'b', 'return p-b');
const rslt = substraction(10,2);
console.log(rslt);

console.log("....line break....");

//Annonymous function -- no specific name and identifier
const numbers = [1,2,3,4,5,6,7]
const square = numbers.map(function(e){
    return e*e;
}); 
console.log(square);

// the same example can be written like this:
const numberss = [1,2,3,4,5,6,7]
const squaree = numbers.map((e) => {
    return e*e;
}); 
console.log(squaree);

console.log("....line break....");

//recursive function -- A recursive function is a function that calls itself to solve smaller versions of a larger problem 
//until it reaches a base case (the condition where it stops calling itself).

function factorialCalculation (value) {
    if (value === 0 || value === 1) {
        return 1; 
    }
    else {
        return value * factorialCalculation (value -1);
    };

};
console.log(factorialCalculation(100));

console.log("....line break....");

//higher order function -- A Higher-Order Function is a function that either
//or Returns a function as its result
//In short: Functions that work with other functions
function add (a,b) {
    return a + b;
};

function mul (a,b){
    return a*b;
};

function operatate (functionName, a, b){ //higher order function
    return functionName(a,b);
};

function operatate2 (functionName2, a, b){ //higher order function
    return functionName2(a,b);
};


const s = operatate(add, 3, 4);
const x = operatate2(mul,7,8);
console.log(s);
console.log(x);