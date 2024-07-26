// primitive
/*
--------------------------------------
All primitives are immutable; that is, they cannot be altered.

String, Number, Boolean, null, 
undefined, Symbol, BigInt 

let isLoggedIn = true;
let userAge = 42;
let user = "john";
let outSideTemp = null;
let userEmail;
let mySymbol = Symbol("unique");
let myBigInt = 12345678901234567890n;


Type of val	-     Result
---------------------------
Undefined	-   "undefined"
Null	    -   "object"
Boolean	    -   "boolean"
Number	    -   "number"
String	    -   "string"



*/

// Reference (non-primitive)
/*
Array, Objects, Functions

Type of val	  -     Result
----------------------------------
array	      -   "object"
object	      -   "object"
function	  -   "object"

*/

const heros= ["shaktiman", "naagraj", 12];
console.log(heros);

let myObj= {
    name: "Shown",
    age: 23,
    emails: [1, 2, 3, 4],
    callOut: function() {
        console.log(`hello, ${name}`);
        
    }
}

const  callOut= function() {
    console.log(`hello, ${name}`);
    
}

console.log(typeof heros);


