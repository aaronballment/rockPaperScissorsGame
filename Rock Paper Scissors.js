const readline = require('readline');

//UserInput Function
let playerInput;
function userInput () {
    const rlUserInput = readline.createInterface({
        input: process.stdin, // Takes input from the keyboard
        output: process.stdout // Shows output on the screen
    });
    rlUserInput.question('enter your choice: ', (input) => {
        if (input.trim().toLowerCase() === 'rock' || input.trim().toLowerCase() === 'paper' || input.trim().toLowerCase() === 'scissors') {
            playerInput = input.trim().toLowerCase();
            console.log(`\nYou have chosen: ${playerInput}`);
            rlUserInput.close();
            computerInput();
            getResult();
            endGame();
        } else {
            console.log('you can\'t choose that! Try again with the correct option.');
            rlUserInput.close();
            userInput();
        }
    });
}

//computer choice function
let computerChoice;

function computerInput () {
    const rand = Math.floor(Math.random()*2);
    switch (rand) {
        case 0: 
            computerChoice = 'rock';
            break;
        case 1: 
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    };
}

//Game winner function
let gameWinner;

function getResult() {
    if (playerInput === 'rock') {
        switch (computerChoice) {
            case 'paper': gameWinner = 'Computer';
            break;
            case 'scissors': gameWinner = 'User';
            break;
        };
    } else if (playerInput === 'paper') {
        switch (computerChoice) {
            case 'rock': gameWinner = 'User';
            break;
            case 'scissors': gameWinner = 'Computer';
            break;
        };
    }else if (playerInput === 'scissors') {
        switch (computerChoice) {
            case 'rock': gameWinner = 'Computer';
            break;
            case 'paper': gameWinner = 'User';
            break;
        };
    }else if (playerInput === computerChoice) {
        gameWinner = 'Tie';
    }
}

//menu function
let userMenuChoice;
function menu() {
    const rlMenuInput = readline.createInterface({
        input: process.stdin, // Takes input from the keyboard
        output: process.stdout // Shows output on the screen
      });
    rlMenuInput.question('\nDo you wish to play again? (yes/no)', (menuChoice) => {
        if (menuChoice.trim().toLowerCase() === 'yes') {
            console.log('\nOkay! I\'ll start a new game.\n');
            rlMenuInput.close();
            userInput();
        }else if (menuChoice.trim().toLowerCase() === 'no') {
            console.log('\nOkay! Thanks for playing!\n');
            rlMenuInput.close();
        }

    })
}

//Game end function
function endGame() {
    console.log(`\nThe Computer chose: ${computerChoice}.`)
    if (gameWinner === 'User') {
        console.log('\nYou WIN! Well played.')
        menu();
    }else if (gameWinner === 'Computer') {
        console.log('\nYou Lost! Image losing to a computer lol.')
        menu();
    }else if (gameWinner === 'Tie'){
        console.log('\nDrumroll please... It\s a Tie!');
        menu();
    }
}


userInput();