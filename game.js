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

//Create selectors to access buttons
const btnRock = document.querySelector('#Rock');
const btnPaper = document.querySelector('#Paper');
const btnScissors = document.querySelector('#Scissors');

btnRock.addEventListener("click", function(e){
        playRound(e,"Rock",getComputerChoice());
        console.log("Rock button works");
})

btnPaper.addEventListener("click",function(e){
        playRound(e,"Paper",getComputerChoice());
        console.log("Paper button works");
})

btnScissors.addEventListener("click",function(e){
        playRound(e,"Scissors",getComputerChoice());
        console.log("Scissors button works");
})