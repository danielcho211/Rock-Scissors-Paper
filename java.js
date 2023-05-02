function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if(choice === 0){
        return "scissors";
    }
    else if (choice === 1)  
    {
        return "paper";
    }
    else
    {
        return "rock";
    }
    
}

function playRound(playerSelection, computerSelection)
{
    //Input from player
    playerSelection = prompt();

    playerSelection = playerSelection.toLowerCase();

    console.log(playerSelection);

    //Check if it is rock, paper or scissors
    if (playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper")
    {
        
    }
    else
    {
        wrongInput = true;
        return "Error not possible"
    } 

    //Get computer's choice
    computerSelection = getComputerChoice();

    //Determine who won
    if (playerSelection === computerSelection )
    {
        drawScore++;
        return `You Draw! You and Computer both used ${playerSelection}`;
    }
    else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        playerScore++
        return `You've won! ${playerSelection} beats ${computerSelection}`;
    }
    else
    {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() 
{
    wrongInput = false;

    //Looping it 5 times
    for (let i = 0; i < 5; i++) {

        let result = playRound(playerSelection, computerSelection);

        console.log(result);
        
        //
        if(wrongInput === true)
        {
            break;
        }
        
    };  

    //Display total score and who won
    if( playerScore > computerScore)
    {
        console.log(`Player: ${playerScore}, Computer: ${computerScore} therefore player win!`);
    }
    else if (playerScore === computerScore)
    {
        console.log(`Player: ${playerScore}, Computer: ${computerScore} therefore draw`);
    }
    else
    {
        console.log(`Player: ${playerScore}, Computer: ${computerScore} therefore computer win!`);
    };

}

let playerScore = 0;
let drawScore = 0;
let computerScore = 0;
let wrongInput = false;

let playerSelection;
let computerSelection;