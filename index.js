let computerScore = 0;
let playerScore = 0;
const result = document.querySelector('#results');
const feedback = document.querySelector('#gameFeedback');
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.value, getComputerChoice()));
});

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

// Logic to play 1 round
function playRound(humanSelection, computerSelection) {
    /* We concatenate both strings and throw them 
    into 1 variable to compare the game results as words
    It's easier than using a bunch of if's, else's and switchcases
    */
    let game = computerSelection + humanSelection;
    
    result.childNodes.forEach(child => child.textContent = '');

    document.querySelector('#playerChoice').textContent = (`Your choice: ${humanSelection}`);
    document.querySelector('#computerChoice').textContent = (`Computer's choice: ${computerSelection}`);
    //Check if computer won (player lost)
    if (game == "paperrock" || game == "rockscissors" || game == "scissorspaper") {
        document.querySelector('#roundWinner').textContent = ("Defeat!");
        computerScore++;
    } else if (computerSelection == humanSelection) { //Check if it was a tie
        document.querySelector('#roundWinner').textContent = ("Tie!");
    } else { //if it wasn't a tie, neither a loss, it's a win.
        document.querySelector('#roundWinner').textContent = ("Victory!");
        playerScore++;
    }
    if (playerScore == 5 || computerScore >= 5) endGame();
}

function endGame(){
    
    result.querySelector('#playerScore').textContent = (`Your score: ${playerScore}`);
    result.querySelector('#computerScore').textContent = (`Computer's score: ${computerScore}`);
    result.querySelector('#finalMessage').textContent = (playerScore > computerScore ? `You win!` : `You lose, better luck next time!`);
    
    computerScore = 0;
    playerScore = 0;
}

// Logic to play 5 rounds
function playGame(){

    // Reset player's scores
    computerScore = 0;
    playerScore = 0;

    const result = document.querySelector('#results');
    
    // - Repeat [Logic to play 1 round] 5 times
    // for(let i = 0; i < 5; i++){
    //     playRound(getPlayerChoice(), getComputerChoice());
    // }

    // Print winner
    result.textContent = (`Your score: ${playerScore}`);
    result.textContent += (`\nComputer's score: ${computerScore}`);
    result.textContent += (playerScore > computerScore ? `\nYou win!` : `\nYou lose, better luck next time!`);
}