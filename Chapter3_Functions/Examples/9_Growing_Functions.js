/*
There are two more or less natural ways for functions to be introduced into programs.

The first is that you find yourself writing very similar code multiple times.  We want to avoid doing that since having
more code means more space for mistake to hide and more material to read for people trying to understand the program.
So we take the repeated functionality, find a good name for it, and put it into a function.

The second way is that you find you need some functionality that you haven't written yet and that sounds like it
deserves its own function.  You'll start by naming the function, and you'll then write its body.  You might even start
writing code that uses the function before you actually define the function itself.

We want to write a program that prints two numbers, the numbers of cows and chickens on a farm, with the words "Cows"
and "Chickens" after them, and zeroes padded before both numbers so that they are always three digits long.

Results:
007 Cows
011 Chickens
 */

function printFarmInventory(cows, chickens) {
    var cowString = String(cows);
    while (cowString.length < 3)
        cowString = "0" + cowString;
    console.log(cowString + " Cows");
    var chickenString = String(chickens);
    while (chickenString.length < 3)
        chickenString = "0" + chickenString;
    console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

/*
Adding .length after a string value will give us the length of that string.  Thus, the while loops keeps adding zeroes
in front of the number strings until they are at least three characters long.

If the farmer wants to add another type of farm animal, then it will tedious to deal with the process of copying and
pasting lines again.  Therefore, there must be another better way to deal with this situation.

Let us refer the following example code:
 */

function printZeroPaddedWithLabel(number, label){
    var numberString = String(number);
    while (numberString.length < 3)
        numberString = "0" + numberString;
    console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickens, pigs){
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);

/*
It works! But wouldn't the name "printZeroPaddedWithLabel" sounded weird.  It conflates three things-printing,
zero-padding, and adding a label-into a single function.

Let us try to pick out a single concept with better object names.
 */

function zeroPad (number, width){
    var string = String(number);
    while (string.length < width)
        string = "0" + string;
    return string;
}
function printFarmInventory(cows, chickens, pigs){
    console.log(zeroPad(cows,3) + " Cows");
    console.log(zeroPad(chickens,3) + " Chickens");
    console.log(zeroPad(pigs, 3) + " Pigs");
}
printFarmInventory(7, 16, 3);