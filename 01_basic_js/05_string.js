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

// indexOf(): return the index of given char
console.log(gameName.indexOf("D")); //6
console.log(gameName.indexOf("d")); //-1 (not found)

// substring(): extracts characters from a string. 

// It is similar to the slice() method. The difference is that when a start or end value is less than 0, the function treats it as 0.
// start with first given index and end before -1 of given end index
// If the start value is greater than the end value, the method interchanges the arguments and performs the function.
const fun= "Javascript";
console.log(fun.substring(2,5)); // vas
console.log(fun.substring(5,2)); // vas
console.log(gameName.substring(3)); // Ph Duplass

// slice: take two indices (start,end) and return char b/w them

console.log(fun.slice(0,3)); // Jav
console.log(fun.slice(-3,9)); // ip
console.log(fun.slice(-3)); // ipt

// substr(): extracts part of a string and returns it in a new string. 
// Although it is similar to the slice() method, 
// the only difference is that the second parameter in this method specifies the length of the extracted part.

console.log(fun.substr(2,4)); // vasc 2= start index, 4= print string upto 4 count

// trim(): removes white space on both sides
const userName=" shomnath ";
const fistL_Capital=userName.trim().slice(0,1).toUpperCase();
const remain_name= userName.slice(2,userName.length);
console.log(fistL_Capital.concat(remain_name));

// match(): match regex(regulr expression) and return the array of match string
const description="hello!, every one is very very very good to be here."
const regex=/very/g;
console.log(description.match(regex));

// replace():
console.log(fun.replace('Java','Fun')); // Javascript => Funscript
console.log(description.replace(regex,"nice"));

// split(): return the array of seperate char of string
console.log(fun.split('')); // [ 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i','p', 't']
console.log(fun.split('',4)); // [ 'J', 'a', 'v', 'a']

// includes(); return boolean value if found; true/ notFound: false
console.log(fun.includes("script")); // true
console.log(fun.includes("j",0)); // true

// repeat(): 
console.log(fun.repeat(2)); // JavascriptJavascript

// padStart(): 
const numb='2';
console.log(numb.padStart(2,'0'));


const creditCardNum='2034399002125581';
const lastFourDigit= creditCardNum.slice(-4);
const maskedNum= lastFourDigit.padStart(creditCardNum.length,'*');

console.log(maskedNum);













 