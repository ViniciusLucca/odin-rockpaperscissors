// Computer's choice
function getComputerChoice(){
    // - Randomly generate choice
    let randomNumber = Math.random();
    // - Return one of three: "Rock", "Paper", "Scissors" 
    if(randomNumber > 0) return "rock";
    else if(randomNumber == 0) return "paper";
    else if(randomNumber < 0) return "scissors";
}


// Human's choice
function getPlayerChoice(){
    // - Get user input
    // - Lowercase text
    let choice;
    do{
        (window.prompt("Choose: Rock, Paper, Scissors")).toLowerCase();
    } while (choice != "rock" && choice != "paper" && choice != "scissors");
    // - If word is not one of: "Rock", "Paper", "Scissors"
    // --- Return: "[user's input] is not a valid choice!"
    // - Else
    // --- Return user's lowercased input
}

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