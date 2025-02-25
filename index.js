// Computer's choice
function getComputerChoice(){
    // - Randomly generate choice
    let randomNumber = Math.random();
    // - Return one of three: "Rock", "Paper", "Scissors" 
    if(randomNumber > 0) return "Rock";
    else if(randomNumber == 0) return "Paper";
    else if(randomNumber < 0) return "Scissors";
}


// Human's choice
// - Get user input
// - Capitalize text
// - If word is not one of: "Rock", "Paper", "Scissors" 
// --- Return: "[user's input] is not a valid choice!"
// - Else
// --- Return user's capitalized input

// Players score values
// - Declare variables for Computer and User's scores 
let computerScore = 0;
let playerScore = 0;

// Logic to play 1 round
// - Get Computer and User choices
// - Compare choices
// - Increase winner's score by 1

// Logic to play 5 rounds
// - Repeat [Logic to play 1 round] 5 times