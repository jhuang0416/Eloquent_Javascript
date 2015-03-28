/*
 We now have the tools we need to compute individual correlations. The only step remaining is to find a correlation
 for every type of event that was recorded and see whether anything stands out. But how should we store these
 correlations once we compute them?

 We can se object properties named after the event types. We can use the square bracket access notation to create
 and read the properties and can use the in operator to test whether a given property exists.
 */

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
// → true
console.log(map["touched tree"]);
// → -0.081

/*
 A map is a way to go from values in one domain (in this case, event names) to corresponding values in another domain
 (in this case, ϕ coefficients).

 What if we want to find all the events for which we have stored a coefficient? The properties don’t form a predictable
 series, like they would in an array, so we cannot use a normal for loop. JavaScript provides a loop construct
 specifically for going over the properties of an object. It looks a little like a normal for loop but distinguishes
 itself by the use of the word "in".
 */

for (var event in map)
    console.log("The correlation for '" + event + "' is " + map[event]);

// → The correlation for 'pizza' is 0.069
// → The correlation for 'touched tree' is -0.081