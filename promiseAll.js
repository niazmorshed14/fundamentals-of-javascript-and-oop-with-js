/* 
Promise.all is a method that takes multiple promises at the same time,
waits for all of them to finish,
and then gives you all the results together.

In short:
"Run many promises in parallel and wait until all of them are done."
*/

const getData = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("Data from getData");
    }, 2000);
});
};

const getError = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            reject("Error: data is not available from getError");
    }, 2000);
});
};

Promise.all([
    getData(),
    getError()
])
.then(dataArray => {
    console.log("All data fetched: " + dataArray);
})
.catch(error => {
    console.log("Error occured: ", error);
})