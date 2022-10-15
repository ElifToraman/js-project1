function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tieScore++; 
        return `It's a tie! You both picked ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" ||  
        playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++; 
        return "You win!";
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || 
        playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose!";
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
