/*
In Chapter 4, we will work through a realistic programming example, introducing concepts as they apply to the problem
at hand.

The example refers to a weresquirrel.

Every now and then, usually between eight and ten in the evening, Jacques finds himself transforming into a small furry
rodent with a bushy tail.

After two occasions where he woke up on a precariously thin branch in the crown of an oak, naked and disoriented, he
has taken to locking the doors and windows of his room at night and putting a few walnuts on the floor to keep himself
busy.

But Jacques still suffers from his condition.  The irregular occurences of the transformation make him suspect that
they might be triggered by something.  Jacques intended to find out what triggers his transformation.

He used a more scientific approach.  Jacques intends to start keeping a daily log of everything he did that day and
whether he changed form.

The first thing he does is design a data structure to store this information.

To work with a chunk of digital data, we'll first have to find a way to represent it in our machine's memory.  Say, as
a simple example, that we want to represent a collection of numbers: 2,3,5,7, and 11.

JavaSrcipt provides a data type specifically for storing sequences of values.  It is called an array and is written as
a list of values between square brackets, separated by commas.
 */

var listofNumbers = [2, 3, 5 , 7, 11];
console.log(listofNumbers[1]);
// → 3
console.log(listofNumbers[1 - 1]);
// → 2


/*
The notation for getting at the elements inside an array also uses square brackets. A pair of square brackets
immediately after an expression, with another expression inside of them, will look up the element in the left-hand
expression that corresponds to the index given by the expression in the brackets.

The first index of an array is zero, not one. So the first element can be read with listofNumbers[0].
 */