/*
Alex Mendez
3/14/2025
CE04 Conditionals
*/

// Common flag for error
let isError = false;

// The user is alerted at the beginning of the program with the instructions and the end to check the Console for the final output.
alert(
  "Welcome Guest, you will be asked a set of questions. " +
    "The information will be use to populate the screen."
);

// Prompt the user for the number grade, assume the grade is a whole number.
let grade = parseInt(prompt("Enter a grade from 0 to 100?"));
let gradeLetter;

// Determine the appropriate letter grade for that number using conditional statements.
if (grade >= 90 && grade <= 100) {
  gradeLetter = "A";
} else if (grade >= 80 && grade <= 89) {
  gradeLetter = "B";
} else if (grade >= 70 && grade <= 79) {
  gradeLetter = "C";
} else if (grade >= 60 && grade <= 69) {
  gradeLetter = "D";
} else if (grade >= 0 && grade <= 59) {
  gradeLetter = "F";
} else {
  isError = true;
}

// There should be only one printout to the console.
if (!isError) {
  console.log(
    "You have a(n) " +
      grade +
      "%, which means you have earned a(n) " +
      gradeLetter +
      " in the class!"
  );
} else {
  console.log(
    "You must enter a number from 0 to 100. Please refresh the page and try again."
  );
}

// Reset error flag
isError = false;

// Alert for next section
alert("Now, lets do the Pumpkin Patch Pickers.");

// Prompt the user for the number grade, assume the grade is a whole number.
let weight = parseFloat(prompt("Enter the weight of your pumpkin."));
let pricePerPound = 0.0;

// Determine the appropriate letter grade for that number using conditional statements.
if (weight < 5.5) {
  pricePerPound = 1.0;
} else if (weight >= 5.5 && weight < 10.75) {
  pricePerPound = 0.9;
} else if (weight >= 10.75 && weight < 25) {
  pricePerPound = 0.8;
} else if (weight >= 25 && weight < 50) {
  pricePerPound = 0.7;
} else if (weight >= 50 && weight <= 100) {
  pricePerPound = 0.6;
} else if (weight > 100) {
  pricePerPound = 0.5;
} else {
  isError = true;
}

let price = weight * pricePerPound;

// There should be only one printout to the console.
if (weight > 0) {
  console.log(
    "Your pumpkin of " +
      weight +
      "lbs costs " +
      price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      }) +
      "."
  );
} else {
  console.log(
    "The weight of the pumpkin must be greater than 0. Please refresh the page and enter a positive value."
  );
}

// Reset error flag
isError = false;

// Alert for next section
alert("Now, lets do the Loyalty Card.");

// Ask for first item
let item1Price = parseFloat(prompt("Enter the price for item 1?"));

// Ask for second item
let item2Price = parseFloat(prompt("Enter the price for item 2?"));

// Ask if it is a preferred customer.
let preferredCustomer = prompt(
  'Are you a preferred customer? (Please enter "yes" or "no")'
);
let isPreferred = preferredCustomer == "yes";

// Do calculations
let total = item1Price + item2Price;
let discount = total * 0.15;
let totalDiscounted = total - discount;

// print results
if (isPreferred) {
  // Log for preferred customer
  console.log(
    "Your total purchase is " +
      totalDiscounted.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 3,
      }) +
      ", which includes your 15% discount."
  );
} else if (preferredCustomer == "no") {
  // Log for regular customer
  console.log(
    "Your total purchase is " +
      total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 3,
      }) +
      "."
  );
} else {
  // Log for error
  console.log(
    "You have typed in something wrong and I can not calculate the total."
  );
}
