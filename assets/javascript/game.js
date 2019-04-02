//define variables
var words = ["rocketship", "alien", "astronaut", "planet", "star", "asteroid", "comet", "extraterrestrial"];
var lettersGuessed = []
var guessesRemaining = 9;
var losses = 0;
var wins = 0;
var dashedWord = [];
var randomWord = "";

resetFunc()

// -choose random word// -loop to get number of letters of random word

var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

// -display the number of spaces appropriate


for (var i = 0; i < randomWord.length; i++) {
    console.log(randomWord.charAt(i));
    dashedWord[i] = " _ ";
    updateDashedWord();

}
// define key events, //only alphabet keys are logged - keycode
document.onkeyup = function (event) {


    if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(event.key);
        var foundLetter = false;
        for (var i = 0; i < randomWord.length; i++) {
            // 

            if (randomWord[i] == event.key) {
                dashedWord[i] = event.key
                console.log(dashedWord)
                foundLetter = true;
            }

        }
        if (foundLetter == false) {
            lettersGuessed.push(event.key);
            guessesRemaining--;
        }

        if (guessesRemaining == 0) {
            alert("YOU LOSE")
            resetFunc()
            
        }
        
     
        updateDashedWord()
    }

}

function updateDashedWord() {
    document.getElementById("word").textContent = dashedWord.join('');
    document.getElementById("wrongletters").textContent = lettersGuessed;
    document.getElementById("remaining").textContent = guessesRemaining;
    document.getElementById("losses").textContent = losses;
    
}

function resetFunc() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);

    for (var i = 0; i < randomWord.length; i++) {
        console.log(randomWord.charAt(i));
        dashedWord[i] = " _ ";

    }

  

    updateDashedWord();
}

// unction, loop through the word - if keypressed = letter in array

//create functions
//resets after words answered to reset



// -display on html 
// - count down number of guesses guessesRemaining
// - display inncorrect guessed letters


//set win condition
//reset guesses remaining, letters guessed



// var playerLetter = event.key;

//FUNCTION: 



//one f