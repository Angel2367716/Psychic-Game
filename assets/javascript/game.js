let winsScore = 0;
let lossesScore = 0;
let guessesLeft = 10;
let guessedLetters = [];
let computerChoice = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//resetGame();
//display();
document.onkeyup = function (event) {
    //function getComputerChoice(){
    const userGuess = event.key;
    guessedLetters.push(userGuess);

    const computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if ((userGuess === computerGuess)) {
        //|| (userGuess === "b") || (userGuess === "c")) {

        winsScore++;
        guessesLeft = 9;
    }else {
        guessesLeft--;
    } if (guessesLeft === 0) {
        lossesScore++;
        guessesLeft = 10;

        //if ((userGuess === computerGuess)) { winsScore++ }

        //else if ((userGuess !== computerChoice)) { lossesScore++ }

    }
    let html =
        "<p>Guess what letter I'm thinking of:</p> " +
        "<p>Wins: " + winsScore + "</p>" +
        "<p>Losses: " + lossesScore + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>"
        "<p>Your Guesses so far: " + guessedLetters.join(', ');
    document.querySelector("#game").innerHTML = html;

    //var html = "<p>Guess what letter I'm thinking of:</p>" + "<p>Wins: " + youWin + "</p>" + "<p>Loses: "+ youLose + "<p>Guesses Remaining: " + guessesLeft + "<p>Guessed Letter: " +  guessedLetters.join(', '); //Show guessed letters here
    //document.querySelector("#psychicAct").innerHTML = html;

    // if ((userGuess === "a") || (userGuess === "b") ||  {
    //    if ((userGuess === "computerChoice")) {lossesScore++; }
    //}
    //for (i=0; i!==computerChoice.length; i++){
    //  console.log(i);
    //function win (userGuess, computerGuess) {
    // winsScore++;







}





