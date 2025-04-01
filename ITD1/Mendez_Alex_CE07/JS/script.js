/*
Alex Mendez
3/30/2025
CE07 Body Mass Calculator
*/

// Add event listener for the button and validation for fields.
document.querySelector("#convertButton").addEventListener("click", function (e) {
    if (document.querySelector("#feet").reportValidity() &&
        document.querySelector("#inches").reportValidity() &&
        document.querySelector("#weight").reportValidity()) {

        // Get the input values
        let feet = parseInt(document.querySelector("#feet").value);
        let inches = parseFloat(document.querySelector("#inches").value);
        let weight = parseFloat(document.querySelector("#weight").value);

        // Get the result elements
        let imageResults = document.querySelector("#imageResults");
        let textResults = document.querySelector("#textResults");

        // Calculate BMI
        let totalHeight = (feet * 12) + inches;
        let bmi = (weight / totalHeight / totalHeight) * 703;

        // Set display options "Where Y is the Weight Range from the table above."
        let bmiImageSource = "IMG/healthyWeight.jpg";
        if (bmi < 18.5) {
            bmiImageSource = "IMG/underWeight.jpg";
            bmiWeightRance = "Under Weight Range";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiImageSource = "IMG/healthyWeight.jpg";
            bmiWeightRance = "Normal or Healthy Weight Range";
        } else if (bmi >= 24.9 && bmi < 29.9) {
            bmiImageSource = "IMG/overWeight.jpg";
            bmiWeightRance = "Over Weight Range";
        } else if (bmi >= 29.9 && bmi < 35) {
            bmiImageSource = "IMG/obeseWeight.jpg";
            bmiWeightRance = "Obese Range";
        } else {
            bmiImageSource = "IMG/extremeObeseWeight.jpg";
            bmiWeightRance = "Extreme Obese Range";
        }

        // Generate the message
        let message = `Your BMI is ${bmi.toFixed(1)}, indicating your weight is in ${bmiWeightRance} for adults of your height.`;

        // Change the immage and display it
        imageResults.src = bmiImageSource;
        imageResults.removeAttribute("class");

        // Show the message
        textResults.innerHTML = message;
    }
})
