const num1=[1,2,3,4];
const str1=['ac','sd','fg','kg'];

const arr=[1,2,3,'hi', 'bye', true, false];

const  num2= new Array(3,4,56,7,8);
console.log(str1[2]);

// Shallow copy- share same references
// Deep copy- don't share same references

// Array Methods

// push(): add vaule to end of array
num1.push(28);
console.log(num1);

// pop(): remove last element
num1.pop();
// num1.pop();
console.log(num1);

// unshift(): add element at o index
num1.unshift(22);
console.log(num1);

// shift(): remove element from start, opposite of pop()
num1.shift();
// num1.shift();
console.log(num1);

// include(): return boolean if element found or not
console.log(num1.includes(9)); // false

// 


// const arr22= ['2','02'];
// console.log(arr22['2'] === arr22['02']); // true

// const arr33=[1,2,'',4,'4',''];
// console.log(arr33.length);
