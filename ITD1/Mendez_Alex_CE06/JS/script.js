/*
Alex Mendez
3/23/2025
CE05 Html Forms
*/

// Add event listener for the button.
document.querySelector("#convertButton").addEventListener("click", function (e) {
    if (document.querySelector("#gallons").reportValidity()) {
        // Get the input values
        let gallonsValue = parseFloat(document.querySelector("#gallons").value);
        let measurment = document.querySelector("[name='measurements']:checked").value;

        // Get the result elements
        let quartsResult = document.querySelector("#quartsResult");
        let pintsResult = document.querySelector("#pintsResult");
        let cupsResult = document.querySelector("#cupsResult");

        // Change all boxes to 0
        quartsResult.value = "0";
        pintsResult.value = "0";
        cupsResult.value = "0";

        // Do the convertions and populate results
        if (measurment === "quartz") {
            quartsResult.value = gallonsValue * 4;
        } else if (measurment === "pints") {
            pintsResult.value = gallonsValue * 8;
        } else {
            cupsResult.value = gallonsValue * 16;
        }
    }
})

// Add event listener for the rank result button button.
document.querySelector("#rankingButton").addEventListener("click", function (e) {
    // Validate the model
    if (document.querySelector("#dvds").reportValidity() &&
        document.querySelector("#bluRays").reportValidity() &&
        document.querySelector("#ultraViolets").reportValidity()) {

        // Get the values from the text boxes and initiate variables
        let dvds = parseInt(document.querySelector("#dvds").value);
        let bluRays = parseInt(document.querySelector("#bluRays").value);
        let ultraViolets = parseInt(document.querySelector("#ultraViolets").value);
        let message = "";
        let imageSource = "IMG/bronzeStar.jpg";

        // Add all the movies and prepare messages and image sources.
        let movies = dvds + bluRays + ultraViolets;
        if (movies < 50) {
            message = `Your collection contains only ${movies} movies, which makes you a bronze star member.`;
            imageSource = "IMG/bronzeStar.jpg";
        } else if (movies >= 50 && movies < 100) {
            message = `Your collection contains ${movies} movies, which makes you a silver star member.`;
            imageSource = "IMG/silverStar.jpg";
        } else if (movies >= 100) {
            message = `Wow! Your collection contains ${movies} movies, which makes you a gold star member.`;
            imageSource = "IMG/goldStar.jpg";
        }

        // Set the message and make it visible
        const collectionResults = document.querySelector("#collectionResults");
        collectionResults.innerHTML = message
        collectionResults.removeAttribute("class");

        // Set the image source and make it visible
        const rankLevelImage = document.querySelector("#rankLevelImage");
        rankLevelImage.src = imageSource;
        rankLevelImage.removeAttribute("class");
    }
})