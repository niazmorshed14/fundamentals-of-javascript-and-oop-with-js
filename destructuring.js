/* 
Destructuring means breaking a complex object or array into smaller pieces easily.
Instead of accessing properties one by one, we can unpack them in one line.
*/


const numbers = [1,2,3,4,5];
const [a,b,c,d] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("......line break.........");

const lang = ["JavaScript", "Java", "Ruby", "Python", "GO"];
const [p,q, ...testLang] = lang;
console.log(p);
console.log(q);
console.log(testLang);

console.log("......line break.........");

//object destructuring -- with {}
const user = {
    firstName: "Tom",
    lastName :"Smith",
    age: 30
};

const {firstName, lastName, city="LA", age} = user;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);

//function destructuring
function printUserName({lastName}){
    console.log( lastName );
}

const person = {
    firstName:"Testing" ,
    lastName :'Automation',
};

printUserName(person);