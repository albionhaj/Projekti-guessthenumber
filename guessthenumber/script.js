let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    const guessInput = document.getElementById('guess');
    const resultText = document.getElementById('result');
    const guess = parseInt(guessInput.value);
    attempts++;

    if (guess < 1 || guess > 100) {
        resultText.textContent = "Please enter a number between 1 and 100.";
    } else if (guess === randomNumber) {
        resultText.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('reset').style.display = 'block';
    } else if (guess < randomNumber) {
        resultText.textContent = "Too low! Try again.";
    } else {
        resultText.textContent = "Too high! Try again.";
    }

    guessInput.value = '';
});

document.getElementById('reset').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    this.style.display = 'none';
});
