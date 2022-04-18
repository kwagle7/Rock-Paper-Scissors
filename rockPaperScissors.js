//Codeacademy exercise, solved by @kwagle

//Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors.
// The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
//User wins incase inputs bomb


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }
    else {
        return "Not proper input";
    }
}
const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0: {
            return 'rock';
        }
        case 1: {
            return 'paper';
        }
        case 2: {
            return 'scissors';
        }
        default: {
            return 'invalid parameter';
        }
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    else if (userChoice === 'bomb') {
        return 'USER WON'
    }
    else {

        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'Computer Won'
            }
            else return ' User Won';
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'Computer Won';
            }
            else return ' User Won';
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'paper') {
                return 'User Won';
            }
            else return ' Computer Won';
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    console.log('User enters:', userChoice);
    const computerChoice = getComputerChoice();
    console.log('computer enters:', computerChoice);
    let winner = determineWinner(userChoice, computerChoice);
    console.log(`Result: ${winner}`);
};

playGame();


// User enters: scissors
// computer enters: rock
// Result:  Computer Won