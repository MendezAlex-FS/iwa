"use strict";

(function () {
    const form = document.querySelector("#viewsForm");
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const averageDisplay = document.querySelector("#averageDisplay");

    form.addEventListener("submit", createChart);

    function createChart(event) {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const min = parseInt(document.querySelector("#min").value, 10);
        const max = parseInt(document.querySelector("#max").value, 10);

        if (min > max) {
            alert("Minimum must be less than or equal to maximum.");
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
        const points = [];
        let total = 0;

        for (let i = 0; i < 5; i++) {
            const rand = Math.floor(Math.random() * (max - min + 1)) + min;
            total += rand;
            points.push(rand);
        }

        // Draw line chart
        const baseY = 350;
        const spacingX = 100;
        const startX = 50;

        ctx.beginPath();
        ctx.strokeStyle = "#007bff";
        ctx.lineWidth = 2;

        for (let i = 0; i < points.length; i++) {
            const x = startX + i * spacingX;
            const y = baseY - (points[i] / max) * 300;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.stroke();

        // Draw data points, labels, and values
        ctx.fillStyle = "#000";
        ctx.font = "14px Arial";

        for (let i = 0; i < points.length; i++) {
            const x = startX + i * spacingX;
            const y = baseY - (points[i] / max) * 300;

            // Draw circle at data point
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = "#ff0000";
            ctx.fill();

            // Step count above point
            ctx.fillStyle = "#000";
            ctx.fillText(points[i], x - 10, y - 10);

            // Day label below x-axis
            ctx.fillText(labels[i], x - 15, baseY + 20);
        }

        const average = Math.round(total / points.length);
        averageDisplay.textContent = `Average Step Count: ${average}`;
    }
})();