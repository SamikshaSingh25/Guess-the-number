
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    const randomNumber = getRandomNumber(1, 100);
    console.log("Welcome to the Guess the Number game!");
    console.log("I'm thinking of a number between 1 and 100...");

    function guessNumber() {
        const userGuess = parseInt(prompt("Enter your guess (between 1 and 100):"));

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            guessNumber();
        } else {
            if (userGuess === randomNumber) {
                console.log("Congratulations! You guessed the correct number!");
            } else if (userGuess < randomNumber) {
                console.log("Too low! Try again.");
                guessNumber(); 
            } else {
                console.log("Too high! Try again.");
                guessNumber(); 
            }
        }
    }
    
    guessNumber();
}
startGame();

