// Global variables for wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;

// Function to play the game
function playGame() {
    // Prompt the user for the number of rounds
    var rounds = parseInt(prompt("How many rounds do you want to play?"));

    // Check if the user entered a valid number
    if (isNaN(rounds)) {
        alert("Please enter a valid number of rounds.");
        return;
    }

    // Loop through the rounds
    for (var i = 0; i < rounds; i++) {
        // Prompt the user for their choice
        var userChoice = prompt("Round " + (i + 1) + ": Choose 'r' for Rock, 'p' for Paper, or 's' for Scissors");

        // Check if the user cancelled the prompt
        if (userChoice === null) {
            alert("Game canceled.");
            return;
        }

        // Get the computer's random choice (0 for Rock, 1 for Paper, 2 for Scissors)
        var computerChoice = Math.floor(Math.random() * 3);

        // Determine the winner of the round
        var result = getResult(userChoice, computerChoice);

        // Display the result
        alert("Computer chose: " + getChoiceName(computerChoice) + "\n" + result);
    }

    // Display the final results
    alert("Game Over!\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
}

// Function to determine the result of a round
function getResult(user, computer) {
    if (
        (user === 'r' && computer === 2) ||
        (user === 'p' && computer === 0) ||
        (user === 's' && computer === 1)
    ) {
        wins++;
        return "You win!";
    } else if (user === getChoiceName(computer)) {
        ties++;
        return "It's a tie!";
    } else {
        losses++;
        return "You lose!";
    }
}

// Function to get the name of the choice based on the code (0, 1, or 2)
function getChoiceName(code) {
    switch (code) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return '';
    }
}

// Call the playGame function when the page loads
playGame();
