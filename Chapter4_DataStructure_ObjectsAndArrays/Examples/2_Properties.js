/*
Let's us take a look at the following expression:

-myString.length (to get the the length of a string)
-Math.max (the maximum function)

These are expressions that access a property of some value.  In the first case, we access the "length" property of the
value in myString.  In the second case, we access the property named "max" in the "Math" object (which is a collection
of mathematics-related values and functions).

Almost all JavaScript values have properties.  There are exceptions: "null" and "undefined".  If you try to access
a property on one of these non-values, you get an error.
 */

null.length;
// → TypeError: Cannot read property 'length' of null

/*
The two most common ways to access properties in JavaScript are with a dot and with square brackets.  Both value.x and
value[x] access a property on value-but not necessarily the same property.  The difference is in how x is interpreted.
When using a dot, the part after dot must be valid variable name, and it directly names the property.  When using the
brackets, the expression between the brackets is evaluated to get the property name.

So if you know that the property you are interested in is called "length", you say value.length.  If you want to extract
the property named by the value held in the variable i, you say value[i].  And because property names can be any string,
if you want to access a property named "2" or "John Dee", you must use square brackets: value[2] or value["John Dee"].
This is the case even though you know the precise name of the property in advance, because neither "2" nor "John Dee"
is a valid variable name and so cannot be accessed through dot notation.

The elements in an array are stored in properties.  Because the names of these properties are numbers and we often need
to get their name from a variable, we have to use the bracket syntax to access them.

 */
