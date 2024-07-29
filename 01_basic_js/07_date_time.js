'use strict';

let myDate= new Date();
console.log(myDate); // 2024-07-29T08:30:48.258Z
console.log(myDate.toString()); // Mon Jul 29 2024 08:30:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Jul 29 2024
console.log(myDate.toISOString());  // 2024-07-29T08:30:48.258Z
console.log(myDate.toLocaleString()); // 7/29/2024, 8:30:48 AM
console.log(myDate.toLocaleDateString()); // 7/29/2024
console.log(myDate.toLocaleTimeString()); // 8:30:48 AM
console.log(myDate.toTimeString()); // 08:30:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // Mon, 29 Jul 2024 08:30:48 GMT

