'use strict';
//                              GAME: Guess my number
//generating the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// NOTE:  *for testing can uncheck this dom statement which will be easiler to test
//document.querySelector('.number').textContent = secretNumber;

//high score
let highScore = document.querySelector('.highscore').textContent
//Score
let mainScore = 20;

//display messages for the user
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//display main score
const displayMainScore = score =>
    document.querySelector('.score').textContent = score;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //message when answer is blank
    if (!guess) {
        displayMessage('❌ No number');
    }

    // correct answer
    else if (guess === secretNumber) {
        displayMessage('Correct Number');
        document.querySelector('.number').textContent = secretNumber;

        //changing the css style
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //high score set
        if (mainScore > highScore) {
            highScore = mainScore;
            document.querySelector('.highscore').textContent = highScore;
        }

    }

    // when answer is wrong (Code_Refactoring)
    else if (guess !== secretNumber) {
        //when answer is too high or too low
        if (mainScore > 1) {
            //document.querySelector('.message').textContent = (guess > secretNumber) ? '↗ Too high!' : '↘ Too Low!';
            displayMessage((guess > secretNumber) ? '↗ Too high!' : '↘ Too Low!');
            //check score
            mainScore--;
            //document.querySelector('.score').textContent = mainScore;
            displayMainScore(mainScore);
        } else {
            displayMessage('💥 You lost the Game!!');
            //document.querySelector('.score').textContent = 0;
            displayMainScore('0');
        }
    }

});

// Click again
document.querySelector('.again').addEventListener('click', function () {
    mainScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //document.querySelector('.score').textContent = mainScore;
    displayMainScore(mainScore);

    displayMessage('Start guessing...');

    document.querySelector('.guess').value = '';

    document.querySelector('.number').textContent = '?';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});


