function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tieScore++; 
        return `It's a tie! You both picked ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++; 
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++; 
        return "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++; 
        return "You win! Scissors beats Paper";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors"
    } else if (playerSelection !== "rock" || "scissors" || "paper") {
        alert("Please only enter rock, paper and scissors");
        return "You entered something other than rock, paper, and scissors";
    } else {
        return "An unexpected error occured";
    }
}

let playerScore=0;
let computerScore=0;
let tieScore=0;

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection= prompt("What is your choice? (you can choose rock, paper, scissors)").toLowerCase();
        const computerSelection = computerPlay();
        console.log("Computer selection is: " + computerSelection + " \nYour selection is: " + playerSelection);
        const round = playRound(playerSelection, computerSelection);
        console.log(round);
    }
    if (playerScore > computerScore) {
        return "You won this game.";
    } else if (playerScore == computerScore) {
        return "This game is a tie.";
    } else {
        return "You lost this game.";
    }
}

console.log(game());
console.log("Your final score is " + playerScore +" wins " + computerScore + " loses and " + tieScore + " draws.");