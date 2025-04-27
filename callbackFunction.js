//A callback function is a function that you pass as an argument to another function, and it gets called (executed) later
//In simple words, please hold this function, and call it when you’re ready
//We need it to control when and how a function should run
//Specially useful for things like waiting for a task (mostly async) to finish (like loading data, waiting for user clicks, etc)


//basic callback -- without async process
function greet (name, callback) { //we can write any keyword other than callback
    console.log('Hello ' + name);
    callback(); //calling the function passed as 'callback'
};

function welcome (){  //this is the callback function
    console.log('Welcome...')
};

greet('Niaz', welcome); //passing a different as the argument of the greet function

console.log("..........line break.........");

//example: callback with async function
function printInfo(name, callback){
    //async
    setTimeout(function() {
        console.log("Printing info for " +name)
        callback ("Please call me back")

    }, 4000);

}

//callback function
function displayMessage(msg){
    console.log(msg);
}

printInfo("Niaz", displayMessage);

console.log(".......line break......");

//another example
function fetchUserData(userId, callback) {
    setTimeout(function () {
      const users = {
        1: { id: 1, name: "Niaz" },
        2: { id: 2, name: "Morshed"},
      };
  
      const user = users[userId];
      if (user) {
        callback(null, user); 
      } else {
        callback("User not found", null);
      }
    }, 5000); 
  }

//callback function:
function handleUserData(error, user){
    if(error){
        console.error("Error :" , error);
    }else{
        console.log("User: " , user);
    }
}

fetchUserData(1, handleUserData);