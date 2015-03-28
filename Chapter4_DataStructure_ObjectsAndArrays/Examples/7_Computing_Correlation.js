/*
 Once he has enough data points, he intends to compute the correlation between his squirrelification and each of the
 day’s events and ideally learn something useful from those correlations.

 Correlation is a measure of dependence between variables (“variables” in the statistical sense, not the JavaScript
 sense). It is usually expressed as a coefficient that ranges from -1 to 1. Zero correlation means the variables are
 not related, whereas a correlation of one indicates that the two are perfectly related—if you know one, you also know
 the other. Negative one also means that the variables are perfectly related but that they are opposites—when one is
 true, the other is false.

 For binary (Boolean) variables, the phi coefficient (ϕ) provides a good measure of correlation and is relatively easy
 to compute. To compute ϕ, we need a table n that contains the number of times the various combinations of the two
 variables were observed.

 For more information, please refer to "The Lycanthrope_Log" section at http://eloquentjavascript.net/04_data.html
 */

/*
 We can represent a two-by-two table in JavaScript with a four-element array ([76, 9, 4, 1]). We could also use other
 representations, such as an array containing two two-element arrays ([[76, 9], [4, 1]]) or an object with property
 names like "11" and "01", but the flat array is simple and makes the expressions that access the table pleasantly
 short. We’ll interpret the indices to the array as two-bit binary number, where the leftmost (most significant) digit
 refers to the squirrel variable and the rightmost (least significant) digit refers to the event variable. For example,
 the binary number 10 refers to the case where Jacques did turn into a squirrel, but the event (say, "pizza") didn’t
 occur. This happened four times. And since binary 10 is 2 in decimal notation, we will store this number at index 2
 of the array.

 This is the function that computes the ϕ coefficient from such an array:
 */

var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]));
}

console.log(phi ([76, 9, 4, 1]));
// → 0.068599434

/*
 This is simply a direct translation of the ϕ formula into JavaScript. Math.sqrt is the square root function, as
 provided by the Math object in a standard JavaScript environment. We have to sum two fields from the table to get
 fields like n1• because the sums of rows or columns are not stored directly in our data structure.

 To extract a two-by-two table for a specific event from this journal, we must loop over all the entries and tally up
 how many times the event occurs in relation to squirrel transformations.
 */

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

/*
 The hasEvent function tests whether an entry contains a given event. Arrays have an indexOf method that tries to find
 a given value (in this case, the event name) in the array and returns the index at which it was found or -1 if it
 wasn’t found. So if the call to indexOf doesn’t return -1, thenwe know the event was found in the entry.

 The body of the loop in tableFor figures out which box in the table each journal entry falls into by checking whether
 the entry contains the specific event it’s interested in and whether the event happens alongside a squirrel incident.
 The loop then adds one to the number in the array that corresponds to this box on the table.
 */
