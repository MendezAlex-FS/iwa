/*
Alex Mendez
3/23/2025
CE05 QuerySelector
*/

// Say what we are doing.
alert(
  "Hello and welcome to the Discount Double check." +
    "You will be asked to provide the prices of two items, " +
    "which will be used to calculate the total, including any applicable discounts."
);

// You will be prompting the user for the price of 2 items bought at a store
let cost1 = parseFloat(prompt("Cost of First Item (in $)"));
let cost2 = parseFloat(prompt("Cost of Second Item (in $)"));

let total = cost1 + cost2;
let discount = 0;
let discountDisplay = "";
let resultsClass = "";
let message = "";

// Figure out the discount
if (total >= 100) {
  discount = 0.1;
  discountDisplay = "10%";
  resultsClass = "green-result";
} else if (total >= 50) {
  discount = 0.05;
  discountDisplay = "5%";
  resultsClass = "green-result";
} else {
  discountDisplay = "no";
  resultsClass = "yellow-result";
}

// Give them a discount based on their total
if (discount > 0) {
  let finalTotal = total - total * discount;
  message =
    "Your total purchase is " +
    finalTotal.toFixed(2) +
    ", which includes your " +
    discountDisplay +
    " discount.";
} else {
  message = "Your total purchase is $" + total.toFixed(2) + ".";
}

// Show the result in an element using querySelector
const results = document.querySelector("#results");
results.innerHTML = message;
results.classList.add(resultsClass);

// Rest reusables
message = "";
resultsClass = "";

// Let them know we are checking on their gas.
alert("Now, let's see if you can cross the desert with the gas you have!");

let maxGallons = parseInt(
  prompt("What is the maximum number of gallons your car tank holds?")
);
let gasPercent = parseInt(prompt("How full is your gas tank? (in %)"));
let milePerGalon = parseInt(
  prompt("How many miles per gallon does your car get?")
);

const gallonsLeft = maxGallons * (gasPercent / 100);
const milesCanGo = gallonsLeft * milePerGalon;
let imageSource = "";
let imageAltText = "Not enough gas";

if (milesCanGo >= 200) {
  resultsClass = "green-result";
  imageSource = "IMG/enoughGas.jpg";
  imageAltText = "You have enough gas image";
  message =
    "Yes, you can drive " +
    milesCanGo +
    " miles and you can make it without stopping for gas!";
} else {
  resultsClass = "yellow-result";
  imageSource = "IMG/notEnoughGas.jpg";
  imageAltText = "Not enough gas image";
  message =
    "You can only drive " +
    milesCanGo +
    " miles more, better get gas now while you can!";
}

// Add events to buttons
document
  .querySelector("#showTextAnswer")
  .addEventListener("click", function (e) {
    const textResults = document.querySelector("#textResults");
    textResults.innerHTML = message;
    textResults.classList = "";
    textResults.classList.add(resultsClass);
  });
document
  .querySelector("#showGraphicsAnswer")
  .addEventListener("click", function (e) {
    const imageResults = document.querySelector("#imageResults");
    imageResults.src = imageSource;
    imageResults.alt = imageAltText;
    imageResults.classList = "";
  });
