/* 
Synchronous Behavior = one thing at a time, in order
JavaScript executes line by line, top to bottom.
It waits for one line to finish before moving to the next.
If a line takes time ⏳, JS will freeze until it's done.
*/

/*
Asynchronous Behavior = start something that takes time → continue with other work → come back later
JavaScript starts a task, but doesn't wait for it to finish.
It continues to the next code.
When the slow task finishes, it comes back and runs it.
*/


//sync
console.log("start");
for(let i=0; i<30; i++){
    console.log(i);
    }
console.log("end");

console.log("......line break.......");

//async
console.log("start");
setTimeout(()=>{
    console.log("time out is done");
}, 2000);
console.log("end");