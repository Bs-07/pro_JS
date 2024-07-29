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
 
// *******************************************
//  Stack (primitive), Heap (reference)

/*
Stack memory didn't give the reference, but it
give the copy of variable.That's how the primitive datatype are immutable.
*/
let myEmail="neha@google.com";
let anotherEmail= myEmail;

console.log(myEmail+" "+anotherEmail);
anotherEmail="foo";
console.log(myEmail,anotherEmail);

/*
Heap memory give the reference of variable.That's how the reference
(non-primitive) datatype are mutable.

if we make changes in copied variable, then changes will also be 
visible to main variable. 
*/
let userOne= {
    email:"polly@bm.com",
    upi:"polly@sbi"
}
let userTwo= userOne;
userTwo.upi="adam@icici";

console.log("user_1: "+userOne.upi);
console.log("user_2: "+userTwo.upi);
