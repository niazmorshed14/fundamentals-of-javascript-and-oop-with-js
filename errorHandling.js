/*
-Error handling means catching errors when they happen,
-Managing them properly,
-So that our program doesn’t crash badly — and can show a friendly message or try something else.
-Synchronous Errors	Happen immediately during normal code execution
-Asynchronous Errors	Happen later (after timers, API calls, etc.)
-The most common way is using try...catch block.
-Through block lets us create custom error
-Finnaly block makes the code run anyway despite error

structure:
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}

*/ 

//#1
try {
    console.log('Start of try runs');
    unicycle;
    console.log('End of try runs -- never reached'); 
  
} catch(err) {
    console.log('Error has occured: ' + err); 
  
} finally {
    console.log('This is always run'); 
  }
  
console.log('...Then the execution continues');

//#2
let json = '{ "age": 30 }';
 
try {
 
  let user = JSON.parse(json); 
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
 
  console.log( user.name );
 
} catch(e) {
  console.log( "JSON Error: " + e ); 
}
