//Function to return the computers choice of Rock,Paper,Scissors 

function getComputerChoice(){
        let computerChoice = ['Rock', 'Paper','Scissors']
        let randomItem = computerChoice[Math.floor(Math.random() * computerChoice.length)]

        return randomItem;
}

//Function to play a round of Rock Paper Scissors
function playRound(e,playerSelection,computerSelection){
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

let score = 0;

btnRock.addEventListener("click", function(e){
    resultContainer.append(playRound(e,"rock",getComputerChoice()));
})

btnPaper.addEventListener("click",function(e){
        resultContainer.append(playRound(e,"paper",getComputerChoice()));
        
})

btnScissors.addEventListener("click",function(e){
        resultContainer.append(playRound(e,"scissors",getComputerChoice()));
        
})

const selectionsContainer = document.querySelector('.Selections');
let resultContainer = document.createElement('div');
resultContainer.classList.add('Results');
selectionsContainer.after(resultContainer);





