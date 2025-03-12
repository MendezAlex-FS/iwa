/*
Alex Mendez
3/8/2025
CE02 Story Time
*/

// Alert shows the correct phrase and works correctly.
alert(
  "Welcome Guest, you will be asked a set of questions. " +
    "The information will be use the answers to populate the screen."
);

// Declare the variables
let personName;
let theColor;
let anyNumber;
let favoriteMovie;
let animalType;
let theAdjective;

// Next, begin to prompt the user for the following information one at a time. Store each of these answers in a variable.
personName = prompt("What is your name?");
theColor = prompt("What color should I use?");
anyNumber = prompt("Please give me a number?");
favoriteMovie = prompt("What is your favorite movie?");
animalType = prompt("What is an animal type?");
theAdjective = prompt("Enter an adjetive.");

// The complete story must be shown in the Console AFTER you have prompted for all variables and the alert tell the user to check the Console.
alert(
  "Please check the Console to see your story. You can press F12 or Ctrl+Shift+I to see the console in Chrome."
);

// You will have to incorporate all 6 of the user prompted variables in your story.
// Make sure to utilize concatenation to add the variables into the text strings.
// This should be done in multiple console.log statements.
console.log(
  personName +
    " wiped the sweat from his brow as he cast his line into the still waters of Lake " +
    theColor +
    ". The moonlight painted the surface silver, reflecting his patience. " +
    "Fishing was his sanctuary, his escape, the only time when nothing else existed."
);

console.log(
  "As he waited, his mind drifted to an old favorite—" +
    favoriteMovie +
    ". He always admired other fishers’ patience, and their ability to outlast time itself." +
    " Fishing felt the same. It wasn’t about the catch; it was about the wait."
);

console.log(
  "A sudden pull yanked him from his thoughts. The rod bent sharply—something big was on the line. " +
    personName +
    " braced himself, reeling with steady hands. Whatever it was, it fought with a fiery determination."
);

console.log(
  "Minutes passed. The struggle felt endless. But " +
    personName +
    " was stubborn. He wasn’t about to lose his prize now."
);

console.log(
  "With one final heave, the creature broke the surface—a massive, silver-scaled " +
    animalType +
    ", at least " +
    anyNumber +
    " pounds. Its deep black eyes gleamed under the moonlight."
);

console.log(
  "“Not bad,” " +
    personName +
    " muttered, admiring the fish’s " +
    theAdjective +
    " form before gently releasing it back into the water."
);

console.log(
  "Some things were meant to be free. Just like Andy escaping Shawshank. Just like " +
    personName +
    ", lost in his midnight ritual."
);
