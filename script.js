const choices = ["rock","paper","scissor"]
const playerDisplay = document.getElementsByClassName("playerDisplay")[0];
const computerDisplay = document.getElementsByClassName("computerDisplay")[0];
const resultDisplay = document.getElementsByClassName("resultDisplay")[0];
const playerScore = document.getElementsByClassName("playerScore")[0];
const computerScore = document.getElementsByClassName("computerScore")[0];

let playerScoreDisplay = 0;
let computerScoreDisplay = 0;


function playGame(playerChoice)
{

    if(playerScoreDisplay>=10 || computerScoreDisplay>=10)
    {
        return;
    }


    const computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);

    let result = "";

    if(playerChoice===computerChoice)
    {
        result = "It's a TIE!"
    }else{

        switch(playerChoice)
        {
            case "rock":
                result=(computerChoice==="scissor")?"You WIN!":"You LOSE!";
                break;
            
            case "paper":
                result=(computerChoice==="rock")?"You WIN!":"You LOSE!";
                break;

            case "scissor":
                result=(computerChoice==="paper")?"You WIN!":"You LOSE!"
                break;
        }
    }

    playerDisplay.innerText= `${playerChoice.toUpperCase()}`;
    computerDisplay.innerText = `${computerChoice.toUpperCase()}`;
    resultDisplay.innerText = result;

    resultDisplay.classList.remove("greenText","redText");

    switch(result)
    {
        case "You WIN!":
            resultDisplay.classList.add("greenText");
            playerScoreDisplay++;
            playerScore.innerText = playerScoreDisplay;
            if(playerScoreDisplay===10)
            {
                endGame("Player")
            }
            break;
           

        case "You LOSE!":
            resultDisplay.classList.add("redText");
            computerScoreDisplay++;
            computerScore.innerText = computerScoreDisplay;
            if(computerScoreDisplay===10)
            {
                endGame("Computer")
            }
            break;
            
    }


}

function endGame(winner)
{
    resultDisplay.innerText = `${winner} wins the game!`
    document.querySelectorAll('.choice button').forEach(button => {button.disable = true});
}


