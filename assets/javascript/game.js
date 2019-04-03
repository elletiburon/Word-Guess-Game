//define variables
var words = ["rocketship", "alien", "astronaut", "planet", "star", "asteroid", "comet", "extraterrestrial"];
var lettersGuessed = []
var guessesRemaining = 10;
var losses = 0;
var wins = 0;
var dashedWord = [];
var randomWord = "";


// resetFunc()



var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);


for (var i = 0; i < randomWord.length; i++) {
    console.log(randomWord.charAt(i));
    dashedWord[i] = " _ ";
    updateDashedWord();

};

document.onkeyup = function (event) {


    if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(event.key);
        var foundLetter = false;
        for (var i = 0; i < randomWord.length; i++) {


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
    
        updateDashedWord();

    }


        if (dashedWord.indexOf(" _ ") === -1) {
            setTimeout(function(){
                alert("YOU WIN");
                wins++;
                resetFunc();

            }, 0)
        }

          if (guessesRemaining == 0) {
            alert("YOU LOSE");
            losses++;
            resetFunc();

        }
        updateDashedWord();
    

};




function updateDashedWord() {
    document.getElementById("word").textContent = dashedWord.join('');
    document.getElementById("wrongletters").textContent = lettersGuessed;
    document.getElementById("remaining").textContent = guessesRemaining;
    document.getElementById("losses").textContent = losses;
    document.getElementById("wins").textContent = wins;

};



function resetFunc() {

    lettersGuessed = [];
    guessesRemaining = 10;
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    dashedWord=[];

    for (var i = 0; i < randomWord.length; i++) {
        console.log(randomWord.charAt(i));
        dashedWord[i] = " _ ";

    }

    updateDashedWord();
};


//figure out why the reset function is not resetting the dashedWord to the same spaces as the new randomWord 


