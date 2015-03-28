/*
Both string and array objects contain, in addition to the length property, a number of properties that refer to
function values.
 */

var doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

/*
Every string has a toUpperCase property.  When called it, it will return a copy of the string, in which all letters
have been converted to uppercase.  There is also toLowerCase.  You can guess what that does.

Interestingly, even though the call to UpperCase does not pass any arguments, the function somehow has access to the
string "Doh", the value whose property is called.

Properties that contain functions are generally called methods of the value they belong to.  AS in, "toUpperCase is
a method of a string."

This example demonstrates some methods that array objects have:
 */

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// → ["Mack","the","Knife"]
console.log(mack.join(" "));
// → Mack the Knife
console.log(mack.pop());
// → Knife
console.log(mack);
// → ["Mack", "the"];

/*
The "push" method can be used to add values to the end of an array.  The "pop" method does the opposite: it removes the
value at the end of the array and returns it.  An array of strings can be flattened to a single string with the "join"
method.  The argument given to "join" determines the text that is glued between the array's elements.
 */

