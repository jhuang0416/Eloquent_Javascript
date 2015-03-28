/*
This function declares the variable as local and thus changes only the local variable.
 // → outside
 */

var x = "outside";

var f1 = function()
{
    var x = "inside f1";
};
f1();
console.log(x);

/*This function does not declares the variable as locally, so references to x inside of it refer to the global variable
x defined at the top of the example.
 // → inside f2
 */

var f2 = function()
{
    x = "inside f2";
};
f2();
console.log(x);


