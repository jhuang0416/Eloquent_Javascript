/*
Javascript is extremely broad-minded about the number of arguments you pass to a function.  If you pass too many, the
extra one are ignored.  If you pass too few, the missing parameters simply get assigned the value "undefined."

The downside of this is that it is possible-likely, even-that you'll accidentally pass the wrong number of arguments to
functions and no one will tell you about it.

The upside is that this behavior can be used to have a function take "optional" arguments.  For example, the following
version of power can be called either with two arguments or with a single argument, in which the exponent is assumed to
be two, and the function behaves like square.
 */

function power(base, exponent)
{
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}
console.log(power(4));
// → 16
console.log(power(4,3));
// → 64

/*
The next console.log example makes use of this-it outputs all of the values it is given.
 */

console.log("R", 2, "D", 2);
// → R 2 D 2