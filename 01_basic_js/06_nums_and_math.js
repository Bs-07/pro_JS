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
