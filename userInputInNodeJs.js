//user input in Node.js
/*
Since Node.js is not a browser (it's a server environment), prompt() will NOT work here 
If we want faster input handling in Node.js (for bigger projects), we can use libraries like:
prompt-sync (npm package)
We have to install prompt-sync first before using it: npm install prompt-sync 
*/
import promptSync from 'prompt-sync';
const prompt = promptSync();


let name = prompt("Enter your name: ");
console.log(`Hi ${name}, how are you?`);