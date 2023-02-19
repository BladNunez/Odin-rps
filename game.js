//Function to return the computers choice of Rock,Paper,Scissors 

function getComputerChoice(){
        let computerChoice = ['Rock', 'Paper','Scissors']
        let randomItem = computerChoice[Math.floor(Math.random() * computerChoice.length)]

        return randomItem;
}

console.log(getComputerChoice());
