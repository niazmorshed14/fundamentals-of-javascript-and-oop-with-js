/*
Promise chaining means connecting multiple .then() calls one after another, 
where the output (result) of one .then() is passed to the next .then().
Each step in the chain waits for the previous promise to resolve before running.

In simple words:
"Do something → then do another thing → then do another thing → and so on."
Promise chaining to avoid "callback hell" (deeply nested callbacks)
and to write clean, readable, and sequential async code
Each .then() must return a value or a promise to continue chaining
If any .then() throws an error or rejects, it jumps to the nearest .catch()
.catch() handles errors from anywhere in the chain

*/

function getEvenNumber(value, delay){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(value % 2 == 0){
                resolve(value);
            }
            else{
                reject(new Error("value is not even number"));
            }
        }, delay);
    });
}

//promise chain:
getEvenNumber(4, 1000)
        .then(result =>{
            console.log("step 1 : gettng the result with even number: ", result);
           return getEvenNumber(7, 2000);
        })
        .then(result => {
            console.log("step 2 : gettng the result with even number: ", result);

        })
        .catch(error =>{
            console.error("promise chain error: ", error.message);
        });