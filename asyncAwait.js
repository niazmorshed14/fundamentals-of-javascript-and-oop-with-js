/* 
async and await are keywords used to handle promises in an easier and cleaner way.
-They make asynchronous code look like synchronous code,
-No more .then() chains.
-Modern way to handle asynchronous call

In short:
"async and await help us write promise-based code more cleanly"

-async keyword → makes a function always return a Promise.
-await keyword → pauses the function until the promise resolves.
-async/await = better way to work with promises, making async code look and behave like normal (sync) code.
*/

//async function without await:
async function f1(){
    console.log("This is an async function without await");
    return 42; //this will return a resolved promise on 42
}
f1()
.then(result => {
    console.log(result)
    })

console.log("..........line break............")

//async function without await but with error:
async function f2(){
    console.log('this is an async function with error');
    throw new Error("this is my error"); //return a promise(rejected)
}

f2()
.catch(error =>{
console.log(`the error message ${error}`);
})

console.log("..........line break.........")

//async function with a resolved/rejecte promise:
function getInfo(){
    return new Promise((resolve, reject)=>{
        const randomNumber = Math.random();
        setTimeout(()=>{
            if(randomNumber < 0.5){
                resolve(randomNumber);
            }else{
                reject(new Error("wrong value error"));
            }
        }, 2000);
    })
}

//create async function which is calling getinfo()
async function getNumberInfo(){
   try{ 
   const result = await getInfo(); //async step
   console.log("Result: ", result);
   }
   catch(error){
    console.log("Error:", error);
   }
}

//call getNumberInfo():
getNumberInfo();