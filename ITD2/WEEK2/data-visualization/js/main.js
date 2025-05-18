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

            // Declare and initialize the variables and contants
            const spacing = 10;
            const width = 50;
            const offsetX = 50;
            const offsetY = 350;
            let total = 0;

            // Make sure minViews is less or equal to maxViews
            if (minViews > maxViews) {
                alert("Minimum must be less than or equal to maximum.");
                return;
            }

            // Clear the canvas before using it.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < 7; i++) {
                // Generate the bar number for the bar
                const randomNumber = Math.floor(Math.random() *
                    (maxViews - minViews + 1)) + minViews;
                total += randomNumber;

                // We can't use arrays, so get the bottom label for the bar created.
                let dayLabel = "";
                if (i === 0) dayLabel = "Sun";
                else if (i === 1) dayLabel = "Mon";
                else if (i === 2) dayLabel = "Tue";
                else if (i === 3) dayLabel = "Wed";
                else if (i === 4) dayLabel = "Thu";
                else if (i === 5) dayLabel = "Fri";
                else if (i === 6) dayLabel = "Sat";

                // Set the bar height and (x, y) coordinates
                const height = randomNumber / maxViews * 300;
                const x = offsetX + i * (width + spacing);
                const y = offsetY - height;

                // Set the font styles
                ctx.fillStyle = "#000";
                ctx.font = "14px Arial";
                ctx.textAlign = "center";

                // Display the views above the bar centered
                ctx.fillText(randomNumber, x + width / 2, y - 10);

                // Display the day label at the bottom leaving space for the average
                ctx.fillText(dayLabel, x + width / 2, offsetY + 20);

                // Display the bar above the day label
                ctx.fillStyle = "darkblue";
                ctx.fillRect(x, y, width, height);

                // Display the average at the bottom. To be shown somewhere in the HTML.
                if (i === 4) {
                    const average = Math.round(total / 7);
                    const averageText = `Average Views: ${average}`;
                    averageViews.innerHTML = averageText;
                }
            }
        }
    }
})();