//Function to return the computers choice of Rock,Paper,Scissors 

function getComputerChoice(){
        let computerChoice = ['Rock', 'Paper','Scissors']
        let randomItem = computerChoice[Math.floor(Math.random() * computerChoice.length)]

        return randomItem;
}

//Function to play a round of Rock Paper Scissors
function playRound(playerSelection,computerSelection){
        //rock loses paper , rock beats scissors, scissors beats paper
        if(playerSelection === "rock".toLowerCase() && computerSelection === "Paper" ){
                return 'You Lose! Paper beats Rock'
        }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
