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