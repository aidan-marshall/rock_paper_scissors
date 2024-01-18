function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"]

    return choices[Math.floor(Math.random() * 3)]

}

function getPlayerChoice() {

    let choice = ''
    const choices = ["rock", "paper", "scissors"]

    while (!choices.includes(choice)) {
        choice = prompt("Rock, paper or scissors?")
    }
    console.log(`You chose ${choice}!`)
    return choice;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "tie"
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock."
        } 
        else {
            return "You win! Rock beats scissors."
        }
    }
    else if(playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock."
        }
        else {
            return "You lose! Scissors beats paper."
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            return "You lose! Rock beats scissors."
        }
        else {
            return "You win! Scissors beats paper."
        }
    }
    else {
        return "ERROR"
    }

}

function game() {

    let computerScore = 0;
    let playerScore = 0;

    console.log("Game starting...")

    while (true) {

    if (playerScore == 5) {
        console.log("human wins!")
        break;
    } else if (computerScore == 5) {
        console.log("robot wins!")
        break;
    }
        
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    let result = playRound(playerChoice, computerChoice);

    while (result == "TIE") {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        result = playRound(playerChoice, computerChoice)
    }

    if (result == "ERROR") {
        console.log("something went wrong!")
        break;
    }
    else {
        console.log(result)
    }

    if (result.includes("lose")) {
        computerScore += 1
    } else if (result.includes("win")) {
        playerScore += 1
    }
    console.log(`Round over!\tComputer score: ${computerScore}\tPlayer score: ${playerScore}`)

    }


}

game();