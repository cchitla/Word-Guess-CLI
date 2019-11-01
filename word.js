const Letter = require("./letter")
let letter = new Letter();

class Word {
    constructor(word) {
        this.word = word;
        this.wordArray = [];
        for (let i = 0; i < word.length; i++) {
            let newLetter = new Letter(word[i]);
            newLetter.fixSpaces();
            // this.wordArray.push(newLetter.letter);
            this.wordArray.push(newLetter);
        };
    }

    makeString () {
        // this should check if the guess is true or false, and put the letter or _
        return this.wordArray.join(" ");
    }

    checkUserGuess(guess) {
        // guess is user input from inquirer
        
        for (var i = 0; i < this.wordArray.length; i++) {
            this.wordArray[i].checkGuess(guess);
            console.log(this.wordArray[i]);
            
        };
    }

};

module.exports = Word;

let testWord = "test word";
let theWord = new Word(testWord);
// console.log(theWord);
theWord.checkUserGuess("t")
// console.log(theWord);

// console.log(theWord.makeString());




