/*
Functions can be created inside other functions, producing several degrees of locality.

Here is an example of a function having two functions inside of it.

 // → ___/''''\______/'\_

 */

var landscape = function()
{
    var result = "";

    var flat = function(size)
    {
        for(var count = 0; count < size; count++)
            result += "_";
    };

    var mountain = function(size)
    {
        result += "/";
        for(var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);

    return result;

};
console.log(landscape());

/*
You are allowed to use free-standing blocks. Please refer to the example below.

The something inside the block refers to the same variable as the one outside the block.  It is useful only to
group the body of an if statement or loop.
 */

var something = 1;
{
    var something = 2;
    //Do stuff with variable something...
}
//Outside of the block again...