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

