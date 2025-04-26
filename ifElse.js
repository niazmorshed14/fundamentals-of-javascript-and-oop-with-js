function checkAge (age) {
    if (age >= 18){
        console.log ("Eligible to vote!");
    }
    else{
        console.log("Sorry, too young to vote");
    }
}

checkAge(17);

function checkNumber (num){
    if (num > 0){
        console.log("The number is positive");

    }
    else if (num < 0) {
        console.log("The number is negative");

    }
    else {
        console.log ("0 found!")
    };
}
checkNumber(0.1)

function checkGrade (score){
    let grade;

    if (score >=90){
        grade = "A"
    }
    else 
      if (score >=80) {
        grade = "B"
        }
        else
        if (score >=70) {
            grade = "C"
        }
        else {
        grade = "D"
    }       
console.log ("Your grade is "+grade);
}

checkGrade(96);