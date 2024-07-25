let score ="33";

console.log(typeof score);
console.log(typeof(score));

let hello=score*1;
console.log(hello);

console.log(typeof null);
/*  
    typeOf(null) => object
*/


let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Number conversion-----------------
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => undefined 
// true/false => 1/0 
// "33"*1 => 33 

let isLoggedIn= "";

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Boolean conversion----------------
// 1=> true / 0=> false
// "abc" => true
// "" => false
// null => false
// undefine => false


let value= null;

let StringIt= String(value);
console.log(StringIt);

// String Conversion-----------------
// 33 => "33"


//==========================Operators==================
 
let nums=33;
let negNums=-nums;
console.log(negNums); // -33

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// concation
// let str1="hel";
// let str2="lo";
// console.log(str1+str2);

// move or run from left to right side-----
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3+2-1*4/2); it follow board_mass

// console.log(+true); 1
// console.log(+"");   0

// let n1, n2 , n3;
// n1=n2=n3=2+2;

let gamePoint=0;
// let post=gamePoint++;
// console.log(post);

// let pre=++gamePoint;
// console.log(pre);

console.log(gamePoint);





