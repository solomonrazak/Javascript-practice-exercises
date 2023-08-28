// a javascript program to get the curernt day and time.


// assign the date object and give it a variable.
const today = new Date();
let day = today.getDay(); // use the getDay method to get the current day. intergers from 0 - 6 repesenting the days of the week.

// declare an array daylist to hold all the days in the week.
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

console.log(`Today is :  ${daylist[day]} .`);

// get the current time in real time.

let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();


// now lets define the hour, minute and second hand
// defining AM and PM
let prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;

// if statement to indicate when is noon or after noon.
if (hour===0 && prepand===' PM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Noon';
} 
else
{ 
hour=12;
prepand=' PM';
} 
} 
//if statement to indicate when is midnight or after midnight.
if (hour===0 && prepand===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Midnight';
} 
else
{ 
hour=12;
prepand=' AM';
} 
} 

console.log(`The time is ${hour}${prepand}: ${minutes} : ${seconds}`)

