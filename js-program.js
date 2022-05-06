// Question-3------------------
console.log("Square root of number" );
function squareRoot(){
const num = 5
const sqnum = Math.sqrt(num);
console.log(sqnum);
}
squareRoot();
// Question-4------------------
const base = 4;
const height = 6;
const tringleArea = console.log(area = (base*height) / 2);

console.log(tringleArea);


// ----------------second way-------

const side1 = parseInt(prompt(' enter the side1 '));
const side2 = parseInt(prompt(' enter the side2 '));
const side3 = parseInt(prompt(' enter the side3 '));


// calculate the samiparamiter
const sideSum = (side1 + side2 + side3) / 2 ;
// --------------------------------------------------
// calculate the area

const tringleArea = Math.sqrt(s * (sideSum - side1)*(sideSum - side2)*(sideSum - side3));

console.log('${tringleArea}');


// Question-5------------------

let a = 2;
let b = 4;
console.log("swapping");

function swapping(){
let temp = 0;
temp = a; //2
a = b; //4
b = temp;

console.log(`value of a : ${a}`);
console.log(`value of b : ${b}`);
}
swapping();
// ------------------------------------------------------------------------
// Fibonacci Series.-----------

// ex- 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
    
//const number = parseInt(prompt("enter the number"));//5

const number = 5;
let no1 = 0;
let no2 = 1;
let nextnum ;

console.log("Febonacci series : ");
for (let i = 0; i<=number; i++){
console.log(no1);  //0    
  nextnum=no1+no2; //1
  no1 = no2;  //1
  no2 = nextnum; //1
}


// Armstrong Number.----------

// 153 = 1*1*1 + 5*5*5 + 3*3*3
//         1   +  125  +  27 =153 
//         1   +  125  +  27 + 153 / 10 =153 

let sum = 0;    
//const num = prompt('enter the number');
const num = 371;

temp = num;
while(temp>0){
    let remainder = temp%10;
    
    sum += remainder * remainder * remainder;
    
    temp = parseInt(temp / 10);
}
if (sum == num){
    console.log(`${num} is armstrong no`);
}else{
    console.log(`${num} is not armstrong no`);
}
// Perfect number.---------

// perfect number function

function is_perfect(number)
{
    var temp = 0;
    for(var i = 1; i<=number/2; i++)
    {
        if(number%i === 0)
        {
            temp = temp + i;
        }
    }
    
    if(temp === number && temp !==0){
        console.log("It is a perfect number");
    }
    else{
        console.log("It is not a perfect number");
    }
}
    is_perfect(28);
// Prime number.----------
//number is divisible by 1 and itself

//take a input from user
//const number = parseInt(prompt("enter the number"));
const number = 23
let isPrime = true;

//check if the number is equal to 1

if(number === 1){
    console.log("1 is not prime number")
}

//check if the number is greater than 1 
else if(number > 1){  // 23 > 1
    for(let i = 2; i<number; i++){
        if(number % i ==0){
            isPrime = false;
            break
        }    
    }
    
    if(isPrime){
        console.log(`${number} is a prime number`);
    }else{
        console.log(`${number} is not prime number`)
    }
    
}

// Factorial of a number.------------

// factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.    

//const number = parseInt(prompt("enter the number"));
  number = 5;
    
// if the number is negative;
if(number < 0){
    console.log(`${number} is negative is not exist`)
}

//if the number is equal to 0
else if(number === 0){
    console.log(`${number} is return 1`)
}

//if number is positive
else{
    let fact = 1;
    for(i = 1; i <= number; i++){
    fact *= i;
    }
    
console.log(`the factorial of ${number} is ${fact}`);    
}

// Display table-------------

//print table

const number = 3;

for(let i=1; i<=10; i++)
{
    const result = number*i;

console.log(`${number} * ${i} = ${result}`)
}

// Find the Sum of Natural Numbers-------------

//print table
const number = 5;


let sum = 0
for(let i=1; i<=number; i++)
{
    sum = sum + i
}
console.log(sum)

//  Guess a Number between given number--------------------- 

function gurssnum(){
    
    
// generating a random integer from 1 to 10
const random = math.floor(math.random() * 10) +1

// take input from the user
let number = parseInt(prompt("enter the Number from 1 to 10"));

while(!number==random){
    number = parseInt(prompt("enter the number between 1 to 10"));
}
if(number == random)
{
    console.log("you guess the correct number");
}
}
gurssnum();


// palindrom---------------------


function checkpalindrom(string){
    const len = string.length; //naman
    
    for (let i = 0; i<=len/2; i++ ){
        
        if(string[i] !== string[len -1 -i]){
           return ("it is not a palindrom");
        }
    }
    return ("its palindrom")
}
//const string = promt("enter a string")
const string = "naman"
const value = checkpalindrom(string)
console.log(value);

// Sort Words in Alphabetical Order----------------------------


// program to sort words in alphabetical order

// take input

//const string = prompt("enter the string");
const string = "reenu";

// converting to an array
const words = string.split(" ");


// sort the array elements
words.sort();

// display the sorted words
console.log("sorted words are");

for(const element of words){
console.log(element);
}

// ---------------------------------------------------------------------
//delete the property from object

const student = {
    name : "john",
    age : 25,
    hobies : ['reading','codeing','game'],
    greet :function (){
        console.log("hello everyone");
    },
    score :{
        math:50,
        science:60
    }
}
//deleting the property from an object
delete student.greet;
delete student['score'];

console.log(student);

// ---------Check String Using Built-in Methods--------------------------------------------------------------------

function checkString(str){
    
    
    // check if the string starts with S and ends with G
    if(str.startwith('S') && str.endwith('G'));{
    console.log("string start with S and end with G")
    }
    elseif(str.startwith('S'))
    {
    console.log("string start with S")
    }
    elseif(str.endwith('G'))
    {
         console.log("string end with G")
    }
    else{
    console.log("string does not start with S , does not end with G") 
    }
}

    let string = prompt("enter the string");
    checkString(string);


    // -----------------Check if Key Exists in Object Using in Operator-------------------------------------------------

    const person ={
        id : 40,
        name : 'reenu',
        age : '24'
    }
    
    // cheack if key exist
    
    const haskey = 'name' in person
    
    if(haskey){
        console.log("key is available");
    }
    else{
        console.log("not available");
    }

// ----------------Loop Through Object Using for...in
    const person ={
        id : 40,
        name : 'reenu',
        age : '24'
    };
    
    for(let key in person){
        
        let value;
        //get the value
        value = student[key];
        
        console.log(key +" - "+value);
    }