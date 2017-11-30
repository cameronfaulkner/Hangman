var word = '';
var words = ['pizza', 'fabulous','sushi','jazz','beekeeping' ];
var guesses = 10;
var guessedLetters = [];
var correct = [];
var initial = '';
function startGame() {
    guesses = 10;
    correct = [];
    initial = [];
    guessedLetters = [];
    document.getElementById('win').innerHTML = '';
    document.getElementById('guesses_left').innerHTML = 10;
    word = words[Math.floor(Math.random() * words.length)];
    for(i = 0; i <word.length; i++){
        initial += '0'
    }
    document.getElementById("display").innerHTML = initial;
}
function guessLetter() {
    var checker = initial;
    if (guesses > 0) {
        var result = '';
        document.getElementById('win').innerHTML = '';
        var guess = document.getElementById('Guess').value;
        if (guessedLetters.indexOf(guess) > -1) {
            document.getElementById('win').innerHTML = 'Already guessed try again'
        } else {
            if (word.indexOf(guess) > -1) {
                correct = correct + guess;
            }
            document.getElementById('guesses_left').innerHTML = guesses;
            for (i = 0; i < word.length; i++) {
                if (correct.indexOf(word[i]) > -1) {
                    result += word[i];
                } else {
                    result += 0
                }
            }

        }
        initial = result;
        if(initial == checker){
            guesses = guesses -1
        }
        guessedLetters += guess;
        document.getElementById('guesses_left').innerHTML = guesses;
        document.getElementById("display").innerHTML = initial;
        if (word == initial) {
            document.getElementById('win').innerHTML = "You Win"
        }
    }else{
        document.getElementById('win').innerHTML = 'You lose, click reset to play again the word was' + word;
    }
}