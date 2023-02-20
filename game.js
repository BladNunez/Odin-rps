//Function to return the computers choice of Rock,Paper,Scissors 

function getComputerChoice(){
        let computerChoice = ['Rock', 'Paper','Scissors']
        let randomItem = computerChoice[Math.floor(Math.random() * computerChoice.length)]

        return randomItem;
}

//Function to play a round of Rock Paper Scissors
function playRound(playerSelection,computerSelection){
        if(playerSelection === "rock" && computerSelection === "Paper"){
                return 'You Lose! Paper beats Rock'
        } else if(playerSelection === "rock" && computerSelection === "Scissors"){
                return 'You Win! Rock beats Scissors'
        } else if(playerSelection === "paper" && computerSelection === "Rock"){
                return 'You Win! Paper beats Rock'
        } else if(playerSelection === "scissors" && computerSelection === "Rock"){
                return 'You Lose! Rock beats Scissors'
        } else if(playerSelection === "paper" && computerSelection === "Scissors"){
                return 'You Lose! Scissors beats Rock'
        } else if(playerSelection === "scissors" && computerSelection === "Paper"){
                return 'You Win! Scissors beats Paper'
        } else {
                return 'Tie! Same decision on both ends'
        }
}


function game(){
        for(let i = 1; i < 6; i++){
                let playerGuess = prompt("Enter your Guess: ").toLowerCase();
                let computerGuess = getComputerChoice();

                console.log(`Round ${i}`)
                console.log(playRound(playerGuess,computerGuess));
        }
        
}

game();