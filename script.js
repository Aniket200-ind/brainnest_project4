"use strict";

let dispResult = document.getElementById("result");
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let messageResult = document.getElementById("message-result");

let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let botScore = 0;

function game(userSelection) {
function win(){
    dispResult.textContent = `You have won!🥳 ${userSelection} beats ${computerSelection}`;
    playerScore++;
    userScore.textContent = playerScore;
}

function lose(){
    dispResult.textContent = `You lose!😪 ${computerSelection} beats ${userSelection}`;
    botScore++;
    computerScore.textContent = botScore;
}

    let result = playRound(userSelection, computerSelection);
    messageResult.innerHTML = `User chose ${userSelection} <br/>Computer chose ${computerSelection}`;
    
    if(result === 'Tie'){
        dispResult.textContent = "It's a tie!😐";
    }else if(result){
        win();
    }else{
        lose();
    }
    }
    
//Generating computer input selection
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

const computerSelection = computerPlay();


rock.addEventListener("click", () => {
    game("Rock");
});

paper.addEventListener("click", () => {
    game("Paper");
});

scissors.addEventListener("click", () => {
    game("Scissors");
});

const playRound = (userSelection, computerSelection) => {
        if (userSelection === computerSelection) {
                return 'Tie';
            }else if(userSelection === "Rock" && computerSelection === "Scissors" ||
                     userSelection === "Paper" && computerSelection === "Rock" ||
             userSelection === "Scissors" && computerSelection === "Paper"
            ){
        return true;
    }else{
        return false;
    }
}




