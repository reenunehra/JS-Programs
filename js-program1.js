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