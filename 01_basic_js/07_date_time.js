'use strict';

let myDate= new Date();
console.log(typeof myDate); //object

/*
January is 0 
february is 1 
 
newDate.getMonth() + 1
*/

console.log(myDate); // 2024-07-29T08:30:48.258Z
console.log(myDate.toString()); // Mon Jul 29 2024 08:30:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Jul 29 2024
console.log(myDate.toISOString());  // 2024-07-29T08:30:48.258Z
console.log(myDate.toLocaleString()); // 7/29/2024, 8:30:48 AM
console.log(myDate.toLocaleDateString()); // 7/29/2024
console.log(myDate.toLocaleTimeString()); // 8:30:48 AM
console.log(myDate.toTimeString()); // 08:30:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // Mon, 29 Jul 2024 08:30:48 GMT 

// const myCreatedDate = new Date(2023,0,2);
// const myCreatedDate = new Date(2023,0,2, 22,45);
const myCreatedDate = new Date("2032-02-15");
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());

console.log(Date.now()); // milliseconds
console.log(Math.floor(Date.now()/1000)); // convert milliseconds into sec

/*
STRING INTERPOLATION----
    `hello! today is ${newDate.getMonth()+1} and now it around ${newDate.getTime()}`;
*/

let newDate= new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December'];
console.log(`hello! today is ${monthNames[newDate.getMonth()]} and now it around ${newDate.toLocaleTimeString()}`);
 
const customDate= newDate.toLocaleString('default',{
    dateStyle:"medium"
})
console.log(customDate);
