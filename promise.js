//A Promise is like a guarantee or commitment that something will happen — either:
//It succeeds (resolved) or
//It fails (rejected)
//Promises help JavaScript manage tasks that take time, like:
//Fetching data from a server (network requests), Reading a file, Waiting for a timer etc
//A Promise gives us a way to run code later, when the task finishes
//A Promise is a way for JavaScript to handle future events: either success (resolve) or failure (reject)
//async/await is actually built on top of Promises
//So whenever we use await something, behind the scenes it's dealing with a Promise

/*
A Promise can be in three states:
State	                Meaning
.....                   ....... 
Pending	                The task is still running (not finished yet)
Resolved (Fulfilled)	The task finished successfully
Rejected	            The task failed
*/

/*promise structure
let promise = new Promise(function(resolve, reject) {
    // do something (maybe slow)
    if (everythingGood) {
        resolve('Success Message');
    } else {
        reject('Error Message');
    }
 });
 
 promise.then(function(data) {
     console.log(data);  // success comes here
 }).catch(function(error) {
     console.log(error); // error comes here
 });
promise structure ends */

const abc = new Promise((resolve, reject) => {
    //async operation
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5){
            resolve(randomValue);
        }
        else{
            reject (new Error ("Value is too small", error));
        };

    }, 2000);
});

abc
    .then (result => { // handler for when promise is fulfilled
        console.log("Promis is fullfilled with value: ", result);
    })
    .catch(error => { // handler for when promise is rejected
        console.log("promise is rejected with value: ", error);
    });
