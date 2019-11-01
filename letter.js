class Letter {
    constructor(letter) {
        this.letter = letter,
        this.displayLetter = "_",
        this.guessed = false
    };

    isGuessed() {
        if (this.guessed === true) {
            this.displayLetter = this.letter;
        };
    };

    checkGuess(input) {        
        if (input === this.letter) {
            console.log("guess is right");
            this.guessed = true;
            this.isGuessed();
        };
    };

    fixSpaces() {
        if (this.letter === " ") {
            this.guessed = true;
        };
    };
};

module.exports = Letter;
