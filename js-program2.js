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

