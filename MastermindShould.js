var expect = require('chai').expect; // gives access to files
var mastermind = require("./Mastermind");

describe("ShouldCheckGuessedColours", function() {
    it("return true", function() {
        var guessedColours = ["Red", "Orange", "Yellow", "Yellow"];
        expect(true).to.equal(mastermind.checkGuess(guessedColours));
    });
});


describe ("ShouldReturnBlackAndWhiteColours", function (){
    it("return true", function(){
       var guessedColours = ["Red", "Orange", "Blue", "Green"];
       expect("Black" +" " + "White" + " " + "White").to.equal(mastermind.returnedArray(guessedColours));
    });
});

describe ("ShouldReturnWON", function (){
    it("return true", function(){
        var guessedColours = ["Red", "Blue", "Orange", "Yellow"];
        expect("WON").to.equal(mastermind.returnWin(guessedColours));
    });
});

describe ("ShouldReturnInvalidColours", function (){
    it("return true", function(){
        var guessedColours = ["Red", "Blue", "Pink", "Yellow"];
        expect("Error: You have given an invalid colour.").to.equal(mastermind.returnInvalidColourArray(guessedColours));
    });
});

describe ("ShouldReturnInvalidArrayLength", function (){
    it("return true", function(){
        var guessedColours = ["Red", "Blue", "Orange", "Yellow"];
        expect("Error: You must pass 4 colours.").to.equal(mastermind.returnInvalidArrayLength(guessedColours));
    });
});