/*

 Program: Another Cell
 Date: 02/20/2016
 Author: Jenny Huang

 Assignment:
 Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described
 earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell
 has at least the given width and height, even if the inner cell would naturally be smaller.

 // Your code here.

 var sc = new StretchCell(new TextCell("abc"), 1, 2);
 console.log(sc.minWidth());
 // → 3
 console.log(sc.minHeight());
 // → 2
 console.log(sc.draw(3, 2));
 // → ["abc", "   "]

 Hint:
 You’ll have to store all three constructor arguments in the instance object. The minWidth and minHeight methods
 should call through to the corresponding methods in the inner cell but ensure that no number less than the given size
 is returned (possibly using Math.max). Don’t forget to add a draw method that simply forwards the call to the inner
 cell.
 */

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}
function TextCell(text) {
    this.text = text;
}

TextCell.prototype.minWidth = function() {
    return this.text.length;
};
TextCell.prototype.minHeight = function() {
    return 1;
};

TextCell.prototype.draw = function() {
 var result = [];
 result.push(this.text);
 return result;
 };

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
StretchCell.prototype.minWidth = function(){
    return Math.max(this.inner.minWidth(), this.width);
}
StretchCell.prototype.minHeight = function() {
    return Math.max(this.inner.minHeight(), this.height);
}
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1).concat([repeat(" ", width)]);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]