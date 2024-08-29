// const userEmail= "hello";
const userEmail= [];

if(userEmail){
    console.log(`user have email`);
}else{
    console.log(`user doesn't have email`);
}

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values

// some String, " ", 'false' [], {}, function(){}

// check array empty or not
if (userEmail.length === 0) {
    console.log(`array is empty.`);
}

// check object empty or not
// Objct.keys(obj1) : return the new array of keys
const emptyObj={};
if (Object.keys(emptyObj).length === 0) {
    console.log(`object is empty.`);
}  


//* Nullish Coalescing Operator (??): null undefined
/*
 It's used when get data from Database and to avoid unwanted situation 
 so, 
     before ?? : null / undefined 
     after  ?? : data from DB / return 
*/

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20 

console.log(val1);

//* Terniary Operator 
 
// condition ? true : false
const age=18;
age>=18 ? console.log(`allowed`) : console.log(`not allowed `)