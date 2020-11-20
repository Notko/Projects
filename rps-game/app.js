const game = () =>{
    let pScore = 0;
    let cScore = 0;
const introScreen = document.querySelector('.intro')
const match = document.querySelector('.match')
const playerScore = document.querySelector('.player-score p');
const computerScore = document.querySelector('.computer-score p');
const outroScreen = document.querySelector('.outro')
const winner =document.querySelector('.winner')

    const startGame = () =>{
        
        const playBtn = document.querySelector('.intro button')

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut')
            match.classList.add("fadeIn")
        })
    }
    //play match
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            })
        })

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option=>{
            option.addEventListener('click', function(){
               //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber]
                
                
            setTimeout(() =>{
                //here is where we call compare hands
                 compareHands(this.textContent, computerChoice);
                
                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`
                }, 2000)

             //animations
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
           
           
            })
        });
    };

    function updateScore() {
        
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        if (pScore === 3|| cScore === 3) {
            showWinner()
           // restartGame();
        }
    }
    function showWinner () { 
        const playAgainBtn = document.querySelector('.outro button')
        const endMessage = document.querySelector('.result')
        introScreen.classList.add('fadeOut')
        match.classList.remove("fadeIn");
        outroScreen.classList.add("fadeIn")
        playAgainBtn.addEventListener('click', restartGame)
        if (pScore > cScore) {
            endMessage.textContent = "Wygrales miszczu!!!!!"
        } else {
            endMessage.textContent = "przegrales smieciu"
        }
       
    }





    function restartGame() {
        pScore = 0
        cScore = 0
        winner.textContent = "Choose an option"
       // introScreen.classList.remove('fadeOut'); //makes it go to main menu instead, change add to remove line below
        match.classList.add("fadeIn");
        outroScreen.classList.remove("fadeIn")
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }


    const compareHands = (playerChoice, computerChoice) =>{
        //update text
        
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie";
            return;
        }
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore()
                return;
            }
        }
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore()
                return;
            }
        }
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore()
                return;
            }
        }
    }

   startGame();
   playMatch();

   }

game();

