const computerChoiceDisplay = document.getElementById( "computer-choice" );
const userChoiceDisplay = document.getElementById( "user-choice" );
const resultDisplay = document.getElementById( "result" );
const possibleChoices = document.querySelectorAll( "button" );
let userChoice
let computerChoice
let result

possibleChoices.forEach( ( possibleChoice ) =>
    possibleChoice.addEventListener( "click", ( e ) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;

        generatecomputerChoice();
        getResult();
    } )
);

function generatecomputerChoice() {
    const randomChoice = Math.floor( Math.random() * possibleChoices.length ) + 1; //or  you can use * 3
    console.log( randomChoice );

    if ( randomChoice === 1 ) {
        computerChoice = "ROCK";
    }
    if ( randomChoice === 2 ) {
        computerChoice = "PAPER";
    }
    if ( randomChoice === 3 ) {
        computerChoice = "SCISSORS";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if ( computerChoice === userChoice ) {
        result = "its a draw!";
    }
    if ( computerChoice === 'ROCK' && userChoice === 'PAPER' ) {
        result = "you win!";
    }
    if ( computerChoice === 'ROCK' && userChoice == 'SCISSORS' ) {
        result = "you lost!";
    }
    if ( computerChoice === 'PAPER' && userChoice === 'ROCK' ) {
        result = "you lost!";
    }
    if ( computerChoice === 'PAPER' && userChoice === 'SCISSORS' ) {
        result = "you win!";
    }
    if ( computerChoice === 'SCISSORS' && userChoice === 'PAPER' ) {
        result = "you lost!";
    }
    if ( computerChoice === 'SCISSORS' && userChoice === 'ROCK' ) {
        result = "you win!";
    }

    resultDisplay.innerHTML = result;
}
