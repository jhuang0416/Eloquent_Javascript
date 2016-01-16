var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
    var current = array[i];
    console.log(current);
}

function logEach(array) {
    for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}

function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}


forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// → Wampeter
// → Foma
// → Granfalloon


var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
    sum += number;
});
console.log(sum);
// → 15


function gatherCorrelations(journal) {
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if(!(event in phis))
            phis[event] = phi(tableFor(event, journal));
        }
    }
    return phis;
}

function gatherCorrelation(journal) {
    var phis = {};
    journal.forEach(function(entry) {
        entry.events.forEach(function(event) {
            if(!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        });
    });
    return phis;
}



