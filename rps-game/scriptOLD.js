
const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")


let computerScore = 0;
let playerScore = 0;


function computerPlay() {
    let selection =["Rock", "Paper", "Scissors"]
    return selection[Math.floor(Math.random() * selection.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if 
        (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lost";
        } else if 
        (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You won";
        } else if 
        (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You won";
        } else if 
        (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lost";
        } else if 
        (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lost";
        } else if 
        (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You won";
        } else return "Choose rock, paper or scissors!"

}
function game() {
    let round;
    for (round = 0; round < 5; round++) {
        let playerSelection = prompt("Enter *rock*, *paper*, or *scissors*")
        let computerSelection = computerPlay();
        console.log(`Computer chose ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection))
    }
    if (computerScore > playerScore) {
                console.log(`You lose the game ${computerScore} to ${playerScore}`);
            } else if (computerScore < playerScore) {
                console.log(`You win the game ${playerScore} to ${computerScore}`);
            } else {
                console.log('Game ended with a tie!!');

}
}
//game();
