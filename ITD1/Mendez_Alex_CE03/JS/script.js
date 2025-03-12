/*
Alex Mendez
3/12/2025
CE03 Let's Go Shopping
*/

// The user is alerted at the beginning of the program with the instructions and the end to check the Console for the final output.
alert(
  "Welcome Guest, you will be asked a set of questions. " +
    "The information will be use the answers to populate the screen."
);

// The user is prompted for the 7 pieces of information in the instructions.
// Each answer is saved in a variable.
let item1Name = prompt("What is the name of your item?");

// All user prompted variables are correctly parsed or cast to numbers.
// Floats must be used for all money values.
let item1Price = parseFloat(prompt("How much is each " + item1Name + "?"));
let item1Count = parseInt(
  prompt("How many " + item1Name + " do you want to buy?")
);
let item2Name = prompt("What is the name of your item?");

// All user prompted variables are correctly parsed or cast to numbers.
// Floats must be used for all money values.
let item2Price = parseFloat(prompt("How much is each " + item2Name + "?"));
let item2Count = parseInt(
  prompt("How many " + item2Name + " do you want to buy?")
);

// We only need one more piece of information, so prompt the user for the sales tax.
// This should be a whole number. For example, the user would type in 5 for a 5% sales tax.
let salesTax = parseInt(prompt("What is the sales tax?"));

// Math is used to correctly calculate the Total cost for each item before tax and is stored inside of an appropriately named variable.
let item1Total = item1Count * item1Price;
let item2Total = item2Count * item2Price;

// Math is used to correctly calculate the total cost of the of all of the items and is stored inside of an appropriately named variable.
// The math for this variable should use the 2 variables from the item totals.
let itemsGross = item1Total + item2Total;

// Math is used to correctly calculate the sales tax cost for all items together.
// It is stored inside of an appropriately named variable.
let itemsSalesTax = itemsGross * (salesTax / 100);

// Math is used to correctly calculate the grand total cost of all items and the sales tax added together
// and is stored inside of an appropriately named variable.
let itemsGrandTotal = itemsGross + itemsSalesTax;

// Thank the customer
console.log("Thank you for shoping with us!");

// The outputs must use console.log and must contain:
// 1. Calculated values
// 2. Supporting descriptive narrative text
// 3. String concatenation
console.log(
  "(" +
    item1Count +
    ") " +
    item1Name +
    "(s) @ " +
    item1Price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }) +
    " = " +
    item1Total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    })
);

console.log(
  "(" +
    item2Count +
    ") " +
    item2Name +
    "(s) @ " +
    item2Price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }) +
    " = " +
    item2Total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    })
);

console.log(
  "Subtotal Before Tax = " +
    itemsGross.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    })
);

console.log(
  salesTax +
    "% Sales Tax = " +
    itemsSalesTax.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 3,
    })
);

console.log(
  "Grand Total = " +
    itemsGrandTotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 3,
    })
);
