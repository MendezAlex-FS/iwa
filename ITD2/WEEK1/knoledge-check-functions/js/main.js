"use strict";

(function () {
    // Display a greeting in the console.
    function question1() {
        console.log("Question 1");
        console.log("Hello");
    }

    // Display a greeting using your name as a parameter.
    function question2(userName) {
        console.log("Question 2");

        if (userName) {
            console.log("Hello " + userName);
        } else {
            console.log("A name was not entered. Please refresh the page and enter a name.");
        }
    }

    // Prompt the user for their name and display a greeting using their name as a variable.
    function question3() {
        console.log("Question 3");

        var userName = prompt("What is your name?");
        if (userName) {
            console.log("Hello " + userName);
        } else {
            console.log("A name was not entered. Please refresh the page and enter a name.");
        }
    }

    // Display the result of multiplying two numbers that are parameters.
    function question4(multplyer1, multplyer2) {
        console.log("Question 4");

        let result = parseFloat(multplyer1) * parseFloat(multplyer2);
        console.log(result);
    }

    // Call the three functions and don't forget to also call the question5 "container" function.
    function question5() {
        console.log("Question 5");

        // Inside your question5 function create two outer variables that will hold numbers.
        let firstNumber;
        let secondNumber;

        // Still inside the function, create three other functions: getNumbers, calculateNumbers, and displayNumbers.

        // The getNumbers function should Prompt the user for two numbers and store them in the outer variables.
        function getNumbers() {
            firstNumber = parseFloat(prompt("Enter the 1st number:"));
            secondNumber = parseFloat(prompt("Enter the 2nd number:"));

            // Validate the number and set to 0 if not a number.
            if (isNaN(firstNumber)) {
                firstNumber = 0;
            }

            if (isNaN(secondNumber)) {
                secondNumber = 0;
            }
        }

        // The calculateNumbers function should return the result of adding those two numbers together. 
        function calculateNumbers() {
            return firstNumber + secondNumber;
        }

        // The displayNumbers function should display the returned result of calling the calculateNumbers function.
        function displayNumbers() {
            const result = calculateNumbers();
            console.log(result);
        }

        // Call the functions.
        getNumbers();
        // This one calls the calculateNumbers function.
        displayNumbers();
    }

    question1();
    question2("Alex");
    question3();
    question4(2, 5);

    // Don't forget to also call the question5 "container" function
    question5();
})();