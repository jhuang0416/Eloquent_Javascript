/*
 We’ve seen that object values can be modified. The types of values discussed in earlier chapters, such as numbers,
 strings, and Booleans, are all immutable—it is impossible to change an existing value of those types. You can combine
 them and derive new values from them, but when you take a specific string value, that value will always remain the
 same. The text inside it cannot be changed. If you have reference to a string that contains "cat", it is not possible
 for other code to change a character in that string to make it spell "rat".

 With objects, on the other hand, the content of a value can be modified by changing its properties.

 When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to
 the same physical bits. But with objects, there is a difference between having two references to the same object and
 having two different objects that contain the same properties. Consider the following code:
 */

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

/*
 The object1 and object2 variables grasp the same object, which is why changing object1 also changes the value of
 object2. The variable object3 points to a different object, which initially contains the same properties as object1
 but lives a separate life.

 JavaScript’s == operator, when comparing objects, will return true only if both objects are precisely the same value.
 Comparing different objects will return false, even if they have identical contents. There is no “deep” comparison
 operation built into JavaScript, which looks at object’s contents.
 */