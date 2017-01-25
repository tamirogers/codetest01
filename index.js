// javascript statement #1.  Created an array, made a date object with new Date() constructor
//getting current day.  Var now brings together the current day as a string from the index number.
//The time is generated with more date constuctors added to the day variable.  AM vs. PM is 
//established by defining what noon is, then I used the conditional operator ? to evaluate the condition
//of the time of day being less than noon (var noon).  If less than noon use AM otherwise use PM.

var whatDay = new Array(7);
whatDay[0] = 'Sunday';
whatDay[1] = 'Monday';
whatDay[2] = 'Tuesday';
whatDay[3] = 'Wednesday'
whatDay[4] = 'Thursday';
whatDay[5] = 'Friday';
whatDay[6] = 'Saturday';

var day = new Date();

var now = whatDay[day.getDay()];

console.log(day.getDay());

var noon = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 12, 0, 0);
var ampm = (day.getTime() < noon.getTime()) ? 'AM' : 'PM';

var statement1 = document.getElementById('output');

var string1 = "Today is " + now + "." + "  The current time is " + day.getHours() + " " + ampm +
    " : " + day.getMinutes() + " : " + day.getSeconds();
statement1.innerHTML = string1;


//Javascript statement #2

// // var scrolling = "Origin Code Academy Rocks!"  I had to get help on this question (and not sure
// I did it right), but I understand what's going on, for the most part.  scrolling function takes the id 
// defined in scrolling.  theString takes it from the html.  theArraynodes uses the childNodes property and 
// looks at the DOM for the parent string.
//setInterval function is a javascript method that makes them scroll at specified intervals, 
// taking the string and adding it to the end of the same string.
// letterMove has the data from the nodes and gets looped.
//the substring method looks at the array index 0. 


scrolling("rocks");

function scrolling(id) {

    var theString = document.getElementById(id);
    var theArraynodes = theString.childNodes[0];
    console.log(theArraynodes);
    var lettersMove = theArraynodes.data;
    console.log(lettersMove);

    setInterval(function() {
        lettersMove = lettersMove[lettersMove.length - 1] + lettersMove.substring(0, lettersMove.length - 1);
        theArraynodes.data = lettersMove;
    }, 100);


};

function myStopFunction() {
    var timer;
    timer = setTimeout(function() { alert("Hello"); }, 300);
    clearTimeout(timer);
}





// Javascript Statement #3.  Bubble sort moves numbers to the top or bottom of an array.
//The for loop indexes through the length of all numbers.  It sets to true or false based
//on the values greator or less than, when greater than index condition is true.


var arrayNums = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function bubblingSort(arrayNums) {

    var switching;
    do {
        switching = false;
        for (var i = 0; i < arrayNums.length - 1; i++) {
            if (arrayNums[i] < arrayNums[i + 1]) {
                var holding = arrayNums[i];
                arrayNums[i] = arrayNums[i + 1]
                arrayNums[i + 1] = holding;
                switching = true;
            }
        }
    } while (switching);
}
bubblingSort(arrayNums);
console.log(arrayNums);


///HTML & Jquery statement #1, to bold.


$('#changeMe').html("<b>" + "Beach " + "</b>" + 'Towel').appendTo('#changeMe');
$("#boldSun").html("<b>" + "Suntan " + "</b>" + 'Lotion').appendTo("#boldSun");
$("#boldMask").html("<b>" + "Mask " + "</b>" + 'Fins ' + 'and' + ' Snorkel').appendTo("#boldMask");
$("#boldBog").html("<b>" + "Boogie " + "</b>" + 'Board').appendTo("#boldBog");


//HTML & Jquery statement #2, click and double click event.

//Did this first, then did it again with more jquery, but it does not work as good.

// function youDoubled() {
//     document.getElementById("target1").innerHTML = "This is a double-click event.";
// }

// function youSingled() {
//     document.getElementById("target1").innerHTML = "This is a click event.";
// }

$("#target").click(function() {
    $(this).append("<p>" + "This is a click event." + "</p>");

});

$("#target").dblclick(function() {
    $(this).append("<p>" + "This is a double click event." + "</p>");
});





//HTML & Jquery statement #4

$(".colors").on("click", function() {
    $(this).css("background", "#d6f5d6");
})

//AngularJS questions in the index.html
