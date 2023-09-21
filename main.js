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




// A JAVASCRIPT TO PRINT THE CURRENT WINDOW CONTENT.
//function to print current window.
function print_current_page(){
    window.print();
}




// JAVASCRIPT PROGRAM TO GET THE CURRENT DATE.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let todayy = new Date(); // to get the current date and time.

let dd = todayy.getDate() // to get the current date of the month from 1 - 31
let mm = todayy.getMonth() // to get the month from 1 - 12
let yyyy = todayy.getFullYear() // to get the year

if (dd < 10){
    dd = '0'+dd;
}
if (mm < 10){
    mm = '0'+mm;
}
console.log(`The current date is ${mm}-${dd}-${yyyy}`);
console.log(`The current date is ${mm}/${dd}/${yyyy}`);
console.log(`The current date is ${dd}-${mm}-${yyyy}`);
console.log(`The current date is ${dd}/${mm}/${yyyy}`);



// A jAVASCRIPT PROGRAM TO FIND THE AREA OF A TRIANGLE.
// OF LENGTHS 5 6 AND 7



function areaOfTriangle(base, height, hypotenuse){
    return 1/2 * base * height;
} 

console.log("the area of the triangle is " + areaOfTriangle(5,6,7));


// WRITE A JAVASCRIPT PROGRAM TO ROTATE THE STRING W3RESOURCE IN THE RIGHT DIRECTION.
// BY PERIODICALLY REMOVING THE ONE LETTER FROM THE END AND PUT IT AT THE FRONT.

function leapYear(year){
    if (year % 4 === 0 && year % 400 === 0 && year % 100 !== 0){
        return `${year} is a leap year`;
    }
    else {
        return `${year} is not a leap year`;
    }
}
console.log(leapYear(2016));

// WRITE A JAVASCRIPT PROGRAM TO FIND OUT IF 1ST JANAUARY BETWEEN 2014 AND 2015 WILL BE A SUNDAY.

for (let year = 2014; year <= 2050; year++){
    let d = new Date(year, 0, 0); // specifies the year, month and day of the month.
    if (d.getDay() === 0){
        console.log("Ist January in " + year + " is a sunday");
    }
}

// WRITE A JAVASCRIPT PROGRAM TO CALCULATE THE DAYS LEFT BEFORE CHRISTMAS.

let christmasDay = new Date(2023, 12, 25);






// WRITE A JAVASCRIPT TO CALCULATE THE MULTIPLICATION AND DIVISION OF TWO NUMBERS.
let num1 = parseInt("enter your first number:")
let num2 = parseInt("Enter your second number:")

function solveNumber(num1, num2){
    let result =  num1 * num2;
    return result;
    let answer = num1 / num2;
    return answer;
    console.log("the multipication and division of the numbers is: " + result  + "and " + answer + "respectively.");
    
} 

solveNumber(num1, num2);