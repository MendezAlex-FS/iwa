"use strict";

(function () {
    // Define the constants
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const averageViews = document.querySelector("p");
    const button = document.querySelector("button");

    // Add handler to button using createChart function.
    button.addEventListener("click", createChart);

    // Only 1 function should be created.
    function createChart(e) {
        // Stop the button from posting
        e.preventDefault();

        // Validate the form fields
        if (document.querySelector("#minViews").reportValidity() &&
            document.querySelector("#maxViews").reportValidity()) {

            // Get the min and max views value
            const minViews = parseInt(document.querySelector("#minViews").value);
            const maxViews = parseInt(document.querySelector("#maxViews").value);

            // Make sure minViews is less or equal to maxViews
            if (minViews > maxViews) {
                alert("Minimum must be less than or equal to maximum.");
                return;
            }

            // Clear the canvas before using it.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Declare and initialize the constants
            const spacing = 25;
            const width = 60;
            const offsetX = 50;
            const offsetY = 350;

            // This one is changed in the loop so it cannot be a const.
            let total = 0;

            for (let i = 0; i < 5; i++) {
                // Generate the bar number for the bar
                const randomNumber = Math.floor(Math.random() *
                    (maxViews - minViews + 1)) + minViews;
                total += randomNumber;

                // We can't use arrays, so get the bottom label for bar created.
                let dayLabel = "";
                if (i === 0) dayLabel = "Mon";
                else if (i === 1) dayLabel = "Tue";
                else if (i === 2) dayLabel = "Wed";
                else if (i === 3) dayLabel = "Thu";
                else if (i === 4) dayLabel = "Fri";

                // Set the bar height and (x, y) coordinates
                const height = randomNumber / maxViews * 300;
                const x = offsetX + i * (width + spacing);
                const y = offsetY - height;

                // Display the day label at the bottom leaving space
                // for the average
                ctx.fillText(dayLabel, x + width / 2, offsetY + 20);

                // Display the bar above the day label
                ctx.fillStyle = "darkblue";
                ctx.fillRect(x, y, width, height);

                // Display the views above the bar centered
                ctx.fillStyle = "#000";
                ctx.font = "14px Arial";
                ctx.textAlign = "center";
                ctx.fillText(randomNumber, x + width / 2, y - 10);

                // Display the average at the bottom. To be shown somewhere in the HTML.
                if (i === 4) {
                    const average = Math.round(total / 5);
                    const averageText = `Average Views: ${average}`;
                    averageViews.innerHTML = averageText;
                }
            }
        }
    }
})();