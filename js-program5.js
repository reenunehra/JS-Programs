// Compare Two Strings---------------------

const string1 = "ReenuNehra";
const string2 = "reenunehra";
//using uppercase method
const result = string1.toUpperCase() === string2.toUpperCase();
console.log(result);

if (result) {
  console.log("same string");
} else {
  console.log("not similar");
}

// ---------------------------------
// program to display the date and time
// get date and time----------------------------

const date = new Date(2022, 11, 12, 9, 25, 30);

const n = date.toDateString();

const time = date.toLocaleTimeString();

console.log("Date:" + n);
console.log("Time:" + time);

// Leap Year Using if...else-----------------------
function checkLeapYear(year) {
  if ((0 == year % 4 && 0 !== year % 100) || 0 == year % 400) {
    console.log(year + "Leap year");
  } else {
    console.log(year + "not a leap year");
  }
}
// take a input from user

const year = 2000;

checkLeapYear(year);

// -----------------Display current dae--------------
const date = new Date();

const n = date.toDateString();

const time = date.toLocaleTimeString();

console.log(n + "date");
console.log(time + "time");

const array = ["my", "name", "is", "Reenu", "nehra"];

const findEle = array.includes("Reenu");

if(findEle){
console.log("element find");
}
else{
    console.log("not find")
}
