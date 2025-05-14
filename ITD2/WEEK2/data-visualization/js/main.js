"use strict";

(function () {
    const form = document.querySelector("#viewsForm");
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    form.addEventListener("submit", createChart);

    function createChart(e) {
        // Stop the button from posting
        e.preventDefault();

        // Validate the form 
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
            const barWidth = 60;
            const offsetX = 50;
            const offsetY = 350;

            let total = 0;

            for (let i = 0; i < 5; i++) {
                // Generate the bar number for the bar
                const barNumber = Math.floor(Math.random() * (maxViews - minViews + 1)) + minViews;
                total += barNumber;

                // Set the bar height and (x, y) coordinates
                const barHeight = barNumber / maxViews * 300;
                const x = offsetX + i * (barWidth + spacing);
                const y = offsetY - barHeight;

                // Display the views above the bar centered
                ctx.fillStyle = "#000";
                ctx.font = "14px Arial";
                ctx.textAlign = "center";
                ctx.fillText(barNumber, x + barWidth / 2, y - 10);

                // Display the bar
                ctx.fillStyle = "darkblue";
                ctx.fillRect(x, y, barWidth, barHeight);

                // We can't use arrays, so get the label for the itteration.
                let dayLabel = "";
                if (i === 0) dayLabel = "Mon";
                else if (i === 1) dayLabel = "Tue";
                else if (i === 2) dayLabel = "Wed";
                else if (i === 3) dayLabel = "Thu";
                else if (i === 4) dayLabel = "Fri";

                // Display the day label
                ctx.fillText(dayLabel, x + barWidth / 2, offsetY + 20);

                // Display the average
                if (i === 4) {
                    const average = Math.round(total / 5);
                    const averageText = `Average Views: ${average}`;
                    ctx.fillText(averageText, canvas.width / 2, offsetY + 60);
                }
            }
        }
    }
})();