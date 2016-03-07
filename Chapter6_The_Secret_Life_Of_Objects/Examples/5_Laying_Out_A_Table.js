/* A sample program that given an array of arrays of table cells,, in which it builds up a string that contains a
nicely laid out table-meaning that the columns are straight and the rows are aligned.
 */

var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)

    module.exports = MOUNTAINS;

/* The first part of the program computes arrays of minimum column widths and row heights for a grid of cells.  The rows
will hold an array, with each inner array representing a row of cells.
 */

function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

/*The next part of the program draws the table. */

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");

    }
    return rows.map(drawRow).join("\n");
}

/*This part of the program split into an array of lines using the string, which cuts up a string every occurence of its
argument and returns an array of the pieces.  The minWidth method finds the maximum line widths in this array. */

function repeat(string, times) {
    var result = "";
    for(var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

/*Let's try everything we've written so far by building up a 5 X 5 checkboard */

var rows = [];
for (var i = 0; i < 5; i++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
        if((j+i) % 2 == 0)
            row.push(new TextCell("##"));
        else
            row.push(new TextCell(" "));
    }
    rows.push(row);
}
console.log(drawTable(rows));

/*Since everything seems working properly together, we will now want to highlight the top row, which contains
the column names, by underlining the cells with a series of dash characters. */

function UnderlinedCell(inner) {
    this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};

/* Finally, we can create a function that builds up a grid of cells from our data. */

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
        return keys.map(function(name) {
            return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));

/* Creating a new property to "TextCell" object. An example for "Getter And Setter".  If "Setter" is not created, then
it will just simply be ignored despite you have assigned a value to the interface.
 */

Object.defineProperty(TextCell.prototype, "heightProp", {
    get: function() { return this.text.length;}
});

var cell = new TextCell("no\nway");
console.log(cell.heightProp);
// 2
cell.heightProp = 100;
console.log(cell.heightProp);
// 2





