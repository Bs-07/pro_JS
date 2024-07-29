const num1=400;
const num2= new Number(400);
console.log(num1,num2);

// Number methods

// toSting(): 
console.log(num1.toString());

// toFixed(): it decide that how many num can be after decimal
const digi=33.444;
console.log(digi.toFixed(2)); // 33.44
console.log(num1.toFixed(2)); //400.00

// toPrecision():
const num3=133.444;
console.log(digi.toPrecision(4)); //33.44
console.log(num3.toPrecision(4)); //133.4

// toLocaleString():
const balance=10000000;
console.log(balance.toLocaleString('en-IN'));

// =================Maths=============================================

console.log(Math);
console.log(Math.abs(-4)); // remove negative value
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.1)); //upper 5
console.log(Math.floor(4.9)); //lower 4
console.log(Math.pow(2,2)); //2**2

console.log(Math.random()); //b/w 0 to 1
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);
/*
Math.random() = random b/w 0-1
(max - min + 1) = give the range
Math.floor() = avoid the decimal and get lower value
add min value
*/




