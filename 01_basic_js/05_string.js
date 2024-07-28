 const name="fhunsung";

 console.log(name.__proto__);
 
 const gameName= new String('Fa Ph Duplass');
 console.log(gameName);
 console.log(gameName[0]);
//  console.log(gameName.__proto__);

// String methods

// length
console.log(gameName.length);

// changeCASE
console.log(gameName.toUpperCase()); //FA PH DUPLASS
console.log(gameName.toLocaleLowerCase()); //fa ph duplass

// charAt(): return char according the index
console.log(gameName.charAt(1)); //a
console.log(gameName.charAt(gameName.length-1)); //s

// indexOf: return the index of given char
console.log(gameName.indexOf("D")); //6
console.log(gameName.indexOf("d")); //-1 (not found)

// substring: extracts characters from a string. 
// It is similar to the slice() method. The difference is that when a start or end value is less than 0, the function treats it as 0.
// start with first given index and end before -1 of given end index
// If the start value is greater than the end value, the method interchanges the arguments and performs the function.
const fun= "Javascript";
console.log(fun.substring(5,2));



 