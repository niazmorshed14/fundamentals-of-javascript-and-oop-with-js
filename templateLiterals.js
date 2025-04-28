/*
Template literals are a new way to write strings in JavaScript (introduced in ES6).
They allow:
 -Multi-line strings easily
 -Insert variables inside strings (without "+"" signs)
Template literals use backticks ( ` ` ) instead of quotes (' or ").
 */

const name = "Tom";
//backticks => ``
const age = 30;
//vars: ${varname}
const mesg = `hello, my name is ${name} and age is ${age}`;
console.log(mesg);

const multiLine = `hi this is my javascript code 
 and im so happy
 and I want to be perfect in JS
 thank you!`;
console.log(multiLine);        

const a = 10;
const b = 20;
const result = `the addition of ${a} and ${b} is ${a+b}`;
console.log(result);


function getXpath(name){
    return `//input[@id='${name}']`;
}
console.log(getXpath('Tom\'s'));