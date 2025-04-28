//#1
console.log("JavaScript".length);
let str = "Naveen";
console.log(str.length);

//#2
console.log("JavaScript"[2]);
console.log("-----");
console.log("JavaScript".charAt(20));
console.log("-----");

//#3
console.log("JavaScript".charCodeAt(2)); //a-z: 97 to 122

//#4
console.log("Converted To Lower Case".toLowerCase());
console.log("Converted To Lower Case".toUpperCase());

//#5
console.log("JavaScript".slice(2,-5)) //output: vaS 

//#6
console.log("JavaScript".substring(2,6));//vaSc
console.log("JavaScript".substring(-2,2));// it means 0-2 (since starts with -ve in substring method) --> Ja

//#7
console.log("Md. Niaz".concat(" Morshed").concat(" Rincoln"));

//#8
let lang = "Java_JavaScript_Python";
let arr = lang.split("_"); //splitting on the basis of "_"
console.log(arr[0]); //Java
console.log(arr[2]); //Python

//#9
console.log("JavaScript".includes("Java")); //true
console.log("JavaScript".includes("Hello")); //false

//#10
console.log("Dev Test Framework Dev".replace("Dev", "JS")); //JS Test Framework Dev
console.log("Dev Test Framework Dev".replaceAll("Dev", "JS")); //JS Test Framework JS
console.log("01-01-1990".replaceAll("-", "/")); //01/01/1990

//#11
console.log("  hello js  ".trim()); //removing space from both sides
console.log("  hello js  ".trimStart()); //removing space from the begining
console.log("  hello js  ".trimEnd()); //removing space from the end

//#12
console.log("Dev".padEnd(10,"*")); //Dev*******
console.log("Dev".padStart(10,"*")); //*******Dev

//#13
console.log("Javascript".startsWith("J")); //true
console.log("Javascript".startsWith("T")); //false
console.log("Java script".endsWith("script")); //true

//#14
console.log("dev".repeat(3)); //devdevdev

//#15
console.log("Automation is necessary".indexOf("necessary"));//14 -> getting started from 
console.log("Automation is necessary".indexOf("y")); //2
console.log("Automation is necessary".indexOf("JS")) //-1 since it does not exist
console.log("Automation is necessary Automation is nice".lastIndexOf("Automation"));//second Automation getting started from 

