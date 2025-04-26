//for loop:

//1 to 10

for (let i=1; i<=10; i++){
    console.log ("the output is: ", i);

};

//for... of loop
const array = [1,2,3,4,5,6]
for (let i of array){
    console.log("the output is:", i);
}
//for indexing
for (let e=0; e<array.length; e++){
    console.log(array[e])

}

//while loop
let p = 1;
while (p<=10){
    console.log(p);
    p++;
}

//even numbers:
let l = 2;
while (l<=10){
    console.log(l);
    l=l+2;
}

//do-while loop:
let h =1;
do{
    console.log(h);
    h++;
}
while(h<=10);

//break:
//print 1 to 100 and print hi when you see multiplication of 5 and break:
let num = 0;
while (num <= 100){
    console.log(num);
        if (num % 5 ==0){
            console.log("hi");
            break;
        }
        num++;
};

const browsers = ["chrome", "firefox", "edge", "IE", "opera", "safari"];
for (let targetBrowser of browsers){
        if (targetBrowser == "edge"){
            console.log("Launch the browser...");
            break;
        };
};

//for... in loop on object:
const user = {
    name: "rooya",
    age: 30,
    address: "KSA"
}
for (const key in user){
    console.log (key + ": " + user[key]);
}

//for each loop:
let numbers = [1,2,3,4,5,6]

numbers.forEach(myFunction)

function myFunction(x)
{
    console.log(x);
}
//..............
let numberss = [1,2,3,4,5,6];
let squareNumbers = [];

numberss.forEach(myFunction)


function myFunction(x)
{
    squareNumbers.push(x*x);
}
console.log(squareNumbers);
