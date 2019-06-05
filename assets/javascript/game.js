let winsScore = 0;
let lossesScore = 0;
let guessesLeft = 10;
let guessedLetters = [];
let computerChoice = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {
    const userGuess = event.key;
    guessedLetters.push(userGuess);

    const computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if ((userGuess === computerGuess)) {
        winsScore++;
        guessesLeft = 9;
    }else {
        guessesLeft--;
    } if (guessesLeft === 0) {
        lossesScore++;
        guessesLeft = 10;
    }
    let html =
        "<p>Guess what letter I'm thinking of:</p> " +
        "<p>Wins: " + winsScore + "</p>" +
        "<p>Losses: " + lossesScore + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>"
        "<p>Your Guesses So Far: " + guessedLetters.join(', ') + "</p>";
    document.getElementById("game").innerHTML = html;

    console.log(guessedLetters)
    }





