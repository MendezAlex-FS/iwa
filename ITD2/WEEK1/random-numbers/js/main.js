"use strict";

(function () {
    // Decalre the variables.
    let guesses = 1, currentLevel = 1, userNumber, score = 0, randomNumber, playerName, playerHighScore = 0;

    // Start the game.
    playerName = prompt("Welcome! What's your name?");
    randomNumber = getRandom(1, 5);
    playGame();

    function playGame() {
        // Check if we guessed 4 times. If so, end the game.
        if (guesses > 4) {
            gameOver();
            return;
        }

        let range = currentLevel * 5;
        userNumber = parseInt(prompt(
            playerName + ", pick a number between 1 and " + range + "\n\n" +
            "Level: " + currentLevel + "\n" +
            "Current Score: " + score + "\n" +
            "High Score: " + playerHighScore + "\n" +
            "Enter guess # " + guesses
        ));

        if (userNumber === randomNumber) {
            score += currentLevel * 10;
            alert("Success! Playing next level.");
            currentLevel++;
            guesses = 1;
            randomNumber = getRandom(1, currentLevel * 5);
            playGame();
        } else {
            if (userNumber > randomNumber) {
                alert("too high");
            } else {
                alert("too low");
            }
            guesses++;
            playGame();
        }
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gameOver() {
        // A prompt that asks the player if you want to play again goes here.
        const playAgain = prompt("Game over! Would you like to play again? (y/n)").toUpperCase();

        if (playAgain === "Y" || playAgain === "YES") {
            if (score > playerHighScore) {
                playerHighScore = score;
            }
            // If the player responds "Y" or "YES" then the game should reset correctly.
            guesses = 1;
            currentLevel = 1;
            score = 0;
            randomNumber = getRandom(1, 5);
            playGame();
        } else {
            alert("thanks for playing");
        }
    }
})();
