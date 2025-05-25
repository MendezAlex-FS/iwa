"use strict";

// Create a class for Question 4.
class Coin {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    describe() {
        return `This is a ${this.name} coin from the year ${this.year}.`;
    }

    isOld() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year > 50 ? "This is an old coin." : "This is a modern coin.";
    }
}

(() => {
    // Take values from an array with mixed types and logs them using a for loop.
    function question1() {
        console.log("Question 1:");
        console.log("----------");
        let myArray = ["The One", "by Jet Li", "One man. One destiny. One fight.", 2001, 13];
        for (let i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);
        }
    }
    question1();

    // Takes values from variables and adds them to an array and logs the values using a for loop.
    function question2() {
        console.log("Question 2:");
        console.log("----------");

        let myName = "Alex";
        let favFood = "Fried Chicken Breasts";
        let stuff = [];

        stuff.push(myName, favFood);
        for (let i = 0; i < stuff.length; i++) {
            console.log(stuff[i]);
        }
    }
    question2();

    // Takes items from an array and logs them using a forEach.
    function question3() {
        console.log("Question 3:");
        console.log("----------");

        let fiveItems = ["Highlander", "by Christopher Lambert", "There can be only one", 1986, true];
        fiveItems.forEach(item => {
            console.log(item);
        });
    }
    question3();

    // Create an instance of a coin and log information of its properties and methods.
    function question4() {
        console.log("Question 4:");
        console.log("----------");

        let coin = new Coin("Morgan", 1921);
        console.log("Coin Name:", coin.name);
        console.log("Coin Year:", coin.year);
        console.log(coin.describe());
        console.log(coin.isOld());
    }
    question4();

    // Takes numbers from an array with even and odd number and returns only even.
    function question5() {
        console.log("Question 5:");
        console.log("----------");

        let testArray = [1, 2, 5, 6, 9, 10, 14, 15];
        let results = [];
        const getEvenNumbers = (array) => {
            array.forEach(item => {
                if (item % 2 === 0) {
                    results.push(item);
                }
            });
            return results;
        };

        let evenNumbers = getEvenNumbers(testArray);
        console.log(evenNumbers);
    }
    question5();
})();
