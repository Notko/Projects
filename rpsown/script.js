
const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")

let playerChoice = ""
let computerScore = 0;
let playerScore = 0;


function computerPlay() {
    let cSelection =["rock", "paper", "scissors"]
    return cSelection[Math.floor(Math.random() * cSelection.length)];
}

function playerPlay() {
    
    btnRock.addEventListener('click', function(){
        playerChoice = "rock"
    })
    return console.log(playerChoice)
}




function playRound(playerSelection, computerSelection) {
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
    //let pSelection = document.querySelectorAll
    let round;
    for (round = 0; round < 5; round++) {
        let playerSelection = playerPlay();
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
