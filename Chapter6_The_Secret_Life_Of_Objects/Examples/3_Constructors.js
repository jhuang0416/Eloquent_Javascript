/* Constructor Definition: Calling a function with the "new" keyword in front of it. */

function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
// → black

/* Adding a speak method to rabbits along with the constructor*/

Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");
// → The black rabbit says 'Doom...'

/*Overriding derived properties*/

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

console.log(Array.prototype.toString == Object.prototype.toString);
// → false
console.log([1,2].toString());
// → 1, 2
console.log(Object.prototype.toString.call([1,2])); //Displaying the type of object or input
// → [object Array]

/* Prototype Interence */

Rabbit.prototype.dance = function() {
    console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();
// → The killer rabbit dances a jig.






