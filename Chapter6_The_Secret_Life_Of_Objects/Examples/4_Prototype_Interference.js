
var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";
for (var name in map)
console.log(name);
// → pizza
// → touched tree
// → nonsense
console.log("nonsense" in map);
// → true
console.log("toString" in map);
// → true

delete Object.prototype.nonsense;

/* Defining our own nonenumerable properties*/

Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});
for (var name in map)
    console.log(name);
// → pizza
// → touched tree
console.log(map.hiddenNonsense);
// → hi

/*Since we still have issues with the regular in operator admitting that the Object.prototype properties existed in our
object.  We can use "hasOwnProperty" method.  This method informs us whether the object has its own property without
needing to look at its prototypes.
 */

console.log(map.hasOwnProperty("toString"));
// → false

/* At times, we would prefer to have objects without prototypes.  We can use pass "null" through the "Object.create"
function.
 */

var  map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
// → false
console.log("pizza" in map);
// → true


