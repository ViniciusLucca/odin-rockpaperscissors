// Computer's choice
function getComputerChoice() {
    // - Randomly generate choice
    /* The number generated between 0 and 1 will get 
    multiplied by 3 and rounded to the its predecessor
    - if the number is less than 0.333, the result will be 0
    - else, if the number is less than 0.666, the result will be 1
    - else, the result will be 2
    */
    let randomNumber = Math.floor(Math.random() * 3);

    // - Return one of three: "Rock", "Paper", "Scissors" 
    if (randomNumber == 0) return "rock";
    else if (randomNumber == 1) return "paper";
    else if (randomNumber == 2) return "scissors";
}

// Human's choice
function getPlayerChoice() {
    // - Get user input
    // - Lowercase text
    // - If word is not one of: "Rock", "Paper", "Scissors"
    // --- Return: "[user's input] is not a valid choice!"
    // - Else
    // --- Return user's lowercased input
    let choice;
    do {
        choice = (window.prompt("Choose: Rock, Paper, Scissors")).toLowerCase();
    } while (choice != "rock" && choice != "paper" && choice != "scissors");
    return choice;
}

// Players score values
// - Declare variables for Computer and User's scores 
let computerScore = 0;
let playerScore = 0;

// Logic to play 1 round
function playRound(humanChoice, computerChoice) {
    // - Get Computer and User choices
    computerChoice = getComputerChoice();
    humanChoice = getPlayerChoice();

    // - Compare choices
    /* We concatenate both strings and throw them 
         into 1 variable to compare the game results as words
         It's easier than using a bunch of if's, else's and switchcases
     */
    let game = computerChoice + humanChoice;

    //Check if computer won (player lost)
    if (game == "paperrock" || game == "rockscissors" || game == "scissorspaper") {
        console.log("Defeat!");
        computerScore++;
    } else if (computerChoice == humanChoice) { //Check if it was a tie
        console.log("Tie!");
    } else { //if it wasn't a tie, neither a loss, it's a win.
        console.log("Victory!");
        playerScore++;
    }
}
// - Increase winner's score by 1

// Logic to play 5 rounds
// - Repeat [Logic to play 1 round] 5 times