"use strict";

(function () {

    // Use a For Loop to display the numbers 1 through 10 in ascending order.
    function question1() {
        console.log("Question 1\n----------\n");

        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }
    question1();

    // Use a For Loop to display the numbers 10 through 0 in descending order.
    function question2() {
        console.log("Question 2\n----------\n");

        for (let i = 10; i >= 0; i--) {
            console.log(i);
        }
    }
    question2();

    // Use a For Loop and the remainder operator to display only the 
    // even numbers between 10 and 50. The iterator variable 'i' must 
    // still be i++, NOT i+=2.
    function question3() {
        console.log("Question 3\n----------\n");

        for (let i = 10; i <= 50; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
    question3();

    // Use a For Loop to add 10 to a "score" variable 20 times and 
    // show the result in the console. This will require you to create 
    // a variable named "score", do NOT use the iterator in the loop.
    function question4() {
        console.log("Question 4\n----------\n");

        let score = 0;
        for (let i = 1; i <= 20; i++) {
            score += 10;
        }

        console.log(score);
    }
    question4();

    // Use a While Loop to display how many attempts it took to 
    // finally roll a 3 on a typical 6 sided die. You will show 
    // the result of each roll of the die and roll number until 
    // the number 3 is rolled. Do NOT use a Do While Loop, break, 
    // or anything else that wasn't covered in class.
    function question5() {
        console.log("Question 5\n----------\n");

        let roll = 0, rollIndex = 1;
        while (roll !== 3) {
            roll = Math.floor(Math.random() * 6) + 1;
            console.log(`Roll: ${rollIndex} dice value: ${roll}`);
            if (roll === 3) {
                console.log(`It took ${rollIndex} toss${rollIndex > 1 ? "es" : ""} to roll a 3`);
            }
            rollIndex++;
        }
    }
    question5();
})();