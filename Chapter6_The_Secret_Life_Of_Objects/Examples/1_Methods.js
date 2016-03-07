/* Methods are simply properties that hold function values */

var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};

rabbit.speak("I'm alive.");
// → Wampeter


function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");

/* "apply", "bind", "call" functions */

speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says 'Burp!'
speak.call({type: "old"}, "Oh my.");
// → The old rabbit says 'Oh my.'

