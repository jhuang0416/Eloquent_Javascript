/*
This function produces the square of a given number.
 // → 144
*/

var square = function(x)
{
    return x * x;
}
console.log(square(12));

/*
This function is an example that does not list any parameter names.

 // → Pling!
 */

var makeNoise = function()
{
    console.log("Pling!");
}
makeNoise();

/*
This function is an example that it produces a value.
 // → 1024
 */

var power = function(base, exponent)
{
    var result = 1;
    for(var count = 0; count < exponent; count++)
        result *= base;
    return result;
}
console.log(power(2,10));
