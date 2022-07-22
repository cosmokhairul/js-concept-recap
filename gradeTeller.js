// Check a number and tell the grade

function gradeTeller(marks) {
    if (marks >= 0 && marks < 33) {
        console.log("Your grade is : F");
    }
    else if (marks >= 33 && marks < 40) {
        console.log("Your grade is : D");
    }
    else if (marks >= 40 && marks < 50) {
        console.log("Your grade is : C");
    }
    else if (marks >= 50 && marks < 60) {
        console.log("Your grade is : B");
    }
    else if (marks >= 60 && marks < 70) {
        console.log("Your grade is : A-");
    }
    else if (marks >= 70 && marks < 80) {
        console.log("Your grade is : A");
    }
    else if (marks >= 80 && marks <= 100) {
        console.log("Your grade is : A+");
    }
    else {
        console.log("Please enter a valid number");
    }
    return gradeTeller;
}

const input = 40;
gradeTeller(input);