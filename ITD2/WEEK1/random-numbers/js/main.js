"use strict";

(function () {
    // Decalre the variables.
    let guesses = 1,
        currentLevel = 1,
        userNumber,
        score = 0,
        randomNumber,
        playerName,
        playerHighScore = 0;

    // Start the game.
    playerName = prompt("Welcome to the guessing game! What's your name?");
    randomNumber = getRandom(1, 5);
    playGame();

    // This function takes care of how the game is played 
    // and keeps the scores and levels of the game.
    function playGame() {
        // Check if we guessed 4 times. If so, end the game.
        if (guesses > 4) {
            gameOver();
            return;
        }

        // Ask for a guess and show current score
        let range = currentLevel * 5;
        userNumber = parseInt(prompt(
            "Level: " + currentLevel + "\n" +
            "Current Score: " + score + "\n" +
            "High Score: " + playerHighScore + "\n" +
            playerName + ", pick a number between 1 and " + range + "\n\n" +
            "Enter guess # " + guesses
        ));

        // Shows either success or fail and plays next round or retry.
        if (userNumber === randomNumber) {
            score += currentLevel * 10;
            alert("Success! Playing next level.");
            currentLevel++;
            guesses = 1;
            randomNumber = getRandom(1, currentLevel * 5);
            playGame();
        } else {
            if (userNumber > randomNumber) {
                alert("Too high!");
            } else {
                alert("Too low!");
            }
            guesses++;
            playGame();
        }
    }

    // This handles the generation of the random game.
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // This handles replay or ending the game.
    function gameOver() {
        // Ask the player if you want to play again goes here.
        const playAgain = prompt(
            "Game over! Would you like to play again? (y/n)")
            .toUpperCase();

        // Check if the player wants to play again.
        if (playAgain === "Y" || playAgain === "YES") {
            // The player wants to play again so save the score if it is higher
            if (score > playerHighScore) {
                playerHighScore = score;
            }

            // Reset the variable and play a new game
            guesses = 1;
            currentLevel = 1;
            score = 0;
            randomNumber = getRandom(1, 5);
            playGame();
        } else {
            // The payer does not want to play again. Thank the player.

            // If we have a high score we need to display it.
            let highScoreText = "";
            if (playerHighScore > 0) {
                highScoreText = "Highest Score: " + playerHighScore;

                // Make sure playerHighScore has the highest score
                if (score > playerHighScore) {
                    playerHighScore = score;
                }
            }

            alert(
                "Thanks for playing. Your final score is:\n\n" +
                "Level: " + currentLevel + "\n" +
                "Final Score: " + score + "\n" +
                highScoreText
            );
        }
    }
})();
